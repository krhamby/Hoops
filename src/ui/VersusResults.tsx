import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import type {
  BoxLine,
  Position,
  Room,
  SeriesGame,
  SeriesResult,
  StoredResults,
} from "../types";
import { POSITIONS } from "../types";
import {
  computeStandings,
  matchupOdds,
  rosterFromIds,
  teamStrength,
  PLAYOFF_BAR,
} from "../engine";
import { getPlayer } from "../data/players";
import { getFranchise } from "../data/franchises";
import { finalizeResults, rematchRoom } from "../multiplayer/rooms";
import { useToast } from "./components/Toast";
import Crowns from "./components/Crowns";
import { errMsg, fmtRecord } from "./util";

interface VersusResultsProps {
  room: Room;
  myId: string;
  onBackToLobby: () => void;
  onHome: () => void;
}

/**
 * A standings/series participant: stored results carry only player ids,
 * so each id is resolved against the live room roster for display. A
 * player who has since left the room renders as "Departed player".
 */
interface Participant {
  id: string;
  name: string;
  emoji: string;
  crowns: number;
  roster: Record<Position, string> | null;
  departed: boolean;
}

interface ViewStanding {
  player: Participant;
  seasonWins: number;
  seasonLosses: number;
  h2hWins: number;
  rank: number;
  qualified: boolean;
}

interface ViewData {
  standings: ViewStanding[];
  series: { a: Participant; b: Participant; result: SeriesResult }[];
}

export default function VersusResults({ room, myId, onBackToLobby, onHome }: VersusResultsProps) {
  const toast = useToast();
  const [rematching, setRematching] = useState(false);
  const [refreshPressed, setRefreshPressed] = useState(false);
  const isHost = room.hostId === myId;
  const host = room.players.find((p) => p.id === room.hostId);

  // Authoritative stored outcome for THIS round, if a client already
  // finalized it. Rendering from the stored copy means every player in
  // the room sees identical scores, even across app versions.
  const stored =
    room.results && room.results.round === room.round ? room.results : null;

  const byId = useMemo(() => {
    const m = new Map(room.players.map((p) => [p.id, p]));
    return m;
  }, [room]);

  // Local fallback: the room is done but nothing is stored yet — compute
  // with the deterministic engine, render immediately, and persist below.
  // Keyed on what actually feeds the computation (seed + rosters), not
  // the always-fresh room object the 5s poll delivers.
  const rosterDigest = room.players
    .map((p) => `${p.id}:${p.roster ? POSITIONS.map((pos) => p.roster![pos]).join(",") : ""}`)
    .join("|");
  const hasStored = stored !== null;
  const local = useMemo(() => {
    if (hasStored || room.status !== "done") return null;
    try {
      const entries = room.players
        .filter((p) => p.roster)
        .map((p) => ({ player: p, roster: rosterFromIds(p.roster!) }));
      if (entries.length === 0) return null;
      return computeStandings(entries, room.seed);
    } catch {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasStored, room.status, room.seed, rosterDigest]);

  // Persist the locally-computed outcome so everyone converges on one
  // copy. finalizeResults is first-writer-wins and silent when another
  // client beat us to it, so any rejection is a real error worth a toast.
  const finalizedRoundRef = useRef<number | null>(null);
  useEffect(() => {
    if (!local || hasStored || room.status !== "done") return;
    if (finalizedRoundRef.current === room.round) return;
    finalizedRoundRef.current = room.round;
    const results: StoredResults = {
      computedBy: myId,
      round: room.round,
      standings: local.standings.map((s) => ({
        playerId: s.player.id,
        seasonWins: s.seasonWins,
        seasonLosses: s.seasonLosses,
        h2hWins: s.h2hWins,
        rank: s.rank,
        qualified: s.qualified,
      })),
      series: local.series.map((s) => ({ aId: s.aId, bId: s.bId, result: s.result })),
    };
    finalizeResults(room.code, results).catch((e) => {
      toast(`Couldn't save the round results: ${errMsg(e)}`, "error");
    });
  }, [local, hasStored, room.status, room.round, room.code, myId, toast]);

  // Unified view model. The stored copy wins by construction; the local
  // one only bridges the gap until the subscription delivers it.
  const data: ViewData | null = useMemo(() => {
    const resolve = (id: string): Participant => {
      const p = byId.get(id);
      if (!p) {
        return { id, name: "Departed player", emoji: "👻", crowns: 0, roster: null, departed: true };
      }
      return {
        id,
        name: p.name,
        emoji: p.emoji,
        crowns: p.crowns,
        roster: p.roster,
        departed: false,
      };
    };
    if (stored) {
      if (stored.standings.length === 0) return null;
      return {
        standings: stored.standings.map((s) => ({
          player: resolve(s.playerId),
          seasonWins: s.seasonWins,
          seasonLosses: s.seasonLosses,
          h2hWins: s.h2hWins,
          rank: s.rank,
          qualified: s.qualified,
        })),
        series: stored.series.map((s) => ({
          a: resolve(s.aId),
          b: resolve(s.bId),
          result: s.result,
        })),
      };
    }
    if (local) {
      return {
        standings: local.standings.map((s) => ({
          player: resolve(s.player.id),
          seasonWins: s.seasonWins,
          seasonLosses: s.seasonLosses,
          h2hWins: s.h2hWins,
          rank: s.rank,
          qualified: s.qualified,
        })),
        series: local.series.map((s) => ({
          a: resolve(s.aId),
          b: resolve(s.bId),
          result: s.result,
        })),
      };
    }
    return null;
  }, [stored, local, byId]);

  if (!data) {
    // During a rematch the rosters are wiped moments before the draft
    // pulls everyone in — show a friendly interstitial, not an error.
    if (room.status !== "done") {
      return (
        <main className="screen versus-results">
          <h1 className="display">Setting up the rematch…</h1>
          <p className="mono rematch-wait">Fresh spins incoming. Hold tight.</p>
        </main>
      );
    }
    // Done, but no results visible yet (stored copy still in flight or
    // a roster snapshot lagging). The subscription re-syncs on its own —
    // reassure, never funnel anyone out of the room.
    return (
      <main className="screen versus-results">
        <header className="results-head">
          <span className="results-kicker mono">Room {room.code}</span>
          <h1 className="display">Room results</h1>
        </header>
        <p className="rematch-wait mono" role="status">
          Syncing results… the room refreshes automatically every few seconds, and
          this screen fills in the moment the outcome lands.
        </p>
        <div className="results-actions rematch-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setRefreshPressed(true)}
          >
            ⟳ Refresh
          </button>
          {refreshPressed && (
            <p className="rematch-wait mono" role="status">
              Checking — hang tight, the next room sync will pick it up.
            </p>
          )}
          {isHost && (
            <>
              <button type="button" className="btn btn-secondary btn-big" disabled>
                🔁 Run it back
              </button>
              <p className="rematch-wait mono">syncing results…</p>
            </>
          )}
          <button type="button" className="btn btn-secondary" onClick={onBackToLobby}>
            Leave room
          </button>
          <button type="button" className="btn btn-ghost" onClick={onHome}>
            Home
          </button>
        </div>
      </main>
    );
  }

  const champ = data.standings[0];
  const haveChampion = champ.qualified;
  const missedCount = data.standings.filter((s) => !s.qualified).length;
  // Rematch unlocks only with a finished room AND visible results (data
  // is non-null here, so the status is the remaining gate).
  const resultsReady = room.status === "done";

  async function runItBack() {
    if (rematching || !resultsReady) return;
    setRematching(true);
    try {
      // No crown when nobody survived the season.
      await rematchRoom(room.code, haveChampion ? champ.player.id : null);
      // The room subscription flips everyone (including us) into the
      // new draft — no navigation needed here.
    } catch (e) {
      toast(errMsg(e), "error");
      setRematching(false);
    }
  }

  return (
    <main className="screen versus-results">
      <header className="results-head">
        <span className="results-kicker mono">Room {room.code}</span>
        <h1 className="display">
          Final standings
          {room.round > 1 ? <span className="round-tag mono"> · round {room.round}</span> : null}
        </h1>
      </header>

      {haveChampion ? (
        <section className="champion-banner">
          <span className="champ-emoji" aria-hidden="true">
            {champ.player.emoji}
          </span>
          <div className="champ-text">
            <span className="champ-label mono">CHAMPION</span>
            <span className="champ-name display">
              {champ.player.name}
              {champ.player.id === myId ? " (you)" : ""}
            </span>
            <span className="champ-record mono">
              {fmtRecord(champ.seasonWins, champ.seasonLosses)} season ·{" "}
              {champ.h2hWins} series win{champ.h2hWins === 1 ? "" : "s"}
              {champ.player.crowns > 0
                ? ` · ${champ.player.crowns + 1}× room champ`
                : ""}
            </span>
          </div>
          <span className="champ-trophy" aria-hidden="true">
            🏆
          </span>
        </section>
      ) : (
        <section className="champion-banner no-champion">
          <span className="champ-emoji" aria-hidden="true">
            🪦
          </span>
          <div className="champ-text">
            <span className="champ-label mono">NO CHAMPION</span>
            <span className="champ-name display">Nobody made the playoffs</span>
            <span className="champ-record mono">
              {PLAYOFF_BAR}+ wins required — best record was {champ.seasonWins}. Brutal.
            </span>
          </div>
          <span className="champ-trophy" aria-hidden="true">
            🧹
          </span>
        </section>
      )}

      <section className="decided-note">
        <span className="decided-kicker mono">How the title was decided</span>
        <p>{howDecided(data)}</p>
      </section>

      <section className="standings">
        <p className="playoff-bar-note mono">
          {PLAYOFF_BAR}+ season wins to make the room playoffs
          {missedCount > 0
            ? ` · ${missedCount} team${missedCount === 1 ? "" : "s"} missed the cut`
            : ""}
        </p>
        {data.standings.map((s) => (
          <TeamCard key={s.player.id} entry={s} isMe={s.player.id === myId} />
        ))}
      </section>

      {data.series.length > 0 && (
        <section className="series-list">
          <h2 className="display">Playoffs · best of 7</h2>
          {data.series.map((s, i) => (
            <SeriesCard
              key={`${s.a.id}-${s.b.id}-${i}`}
              a={s.a}
              b={s.b}
              result={s.result}
              defaultOpen={data.series.length <= 3}
            />
          ))}
        </section>
      )}

      <div className="results-actions rematch-actions">
        {isHost ? (
          <>
            <button
              type="button"
              className="btn btn-primary btn-big"
              onClick={runItBack}
              disabled={rematching || !resultsReady}
            >
              {rematching ? "Setting up the rematch…" : "🔁 Run it back"}
            </button>
            {!resultsReady && (
              <p className="rematch-wait mono">waiting for everyone to finish</p>
            )}
          </>
        ) : resultsReady ? (
          <p className="rematch-wait mono">
            Waiting for {host ? `${host.emoji} ${host.name}` : "the host"} to run it
            back — fresh spins, same room, crowns on the line.
          </p>
        ) : (
          <p className="rematch-wait mono">waiting for everyone to finish</p>
        )}
        <button type="button" className="btn btn-secondary" onClick={onBackToLobby}>
          Leave room
        </button>
        <button type="button" className="btn btn-ghost" onClick={onHome}>
          Home
        </button>
      </div>
    </main>
  );
}

/**
 * 1-3 plain-language sentences explaining the outcome: who cleared the
 * playoff bar, and whether the round-robin, a season-record tiebreak,
 * or a lone head-to-head series settled the title.
 */
function howDecided(data: ViewData): string {
  const { standings, series } = data;
  const qualified = standings.filter((s) => s.qualified);
  const missed = standings.filter((s) => !s.qualified);
  const rec = (s: ViewStanding) =>
    `${s.player.name} (${fmtRecord(s.seasonWins, s.seasonLosses)})`;
  const list = (xs: string[]) =>
    xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`;

  if (qualified.length === 0) {
    return (
      `The playoff bar is ${PLAYOFF_BAR} wins and nobody cleared it — ` +
      `the best record was ${rec(standings[0])}. No champion this round.`
    );
  }

  const bar =
    `The playoff bar is ${PLAYOFF_BAR} wins: ${list(qualified.map(rec))} qualified` +
    (missed.length > 0 ? `; ${list(missed.map(rec))} missed the cut.` : ".");

  if (qualified.length === 1) {
    return `${bar} ${qualified[0].player.name} is champion by default — nobody else survived the season.`;
  }

  const champ = qualified[0];
  const runnerUp = qualified[1];
  const champName = champ.player.name;

  // 2-player rooms: one head-to-head series decides everything.
  if (standings.length === 2) {
    const s = series[0];
    if (s) {
      const champIsA = s.a.id === champ.player.id;
      const w = champIsA ? s.result.aWins : s.result.bWins;
      const l = champIsA ? s.result.bWins : s.result.aWins;
      return `${bar} ${champName} won the head-to-head series ${w}–${l}.`;
    }
  }

  if (champ.h2hWins === runnerUp.h2hWins) {
    if (champ.seasonWins === runnerUp.seasonWins) {
      return (
        `${bar} ${champName} and ${runnerUp.player.name} finished dead level on series wins ` +
        `and season record — the final tiebreak fell to ${champName}.`
      );
    }
    return (
      `${bar} ${champName} and ${runnerUp.player.name} tied at ${champ.h2hWins} series ` +
      `win${champ.h2hWins === 1 ? "" : "s"} apiece, so the better season record ` +
      `(${fmtRecord(champ.seasonWins, champ.seasonLosses)} vs ` +
      `${fmtRecord(runnerUp.seasonWins, runnerUp.seasonLosses)}) broke the tie for ${champName}.`
    );
  }

  const seriesLosses = qualified.length - 1 - champ.h2hWins;
  return (
    `${bar} ${champName} ${seriesLosses === 0 ? "swept" : "won"} the round-robin ` +
    `${champ.h2hWins}–${seriesLosses} in series wins, so the season records never came into play.`
  );
}

function TeamCard({ entry, isMe }: { entry: ViewStanding; isMe: boolean }) {
  const roster = entry.player.roster;
  const champ = entry.rank === 1 && entry.qualified;
  return (
    <article
      className={`team-card ${isMe ? "me" : ""} ${champ ? "team-card-champ" : ""} ${
        entry.qualified ? "" : "team-card-missed"
      }`}
    >
      <header className="team-card-head">
        <span className="team-rank mono">{champ ? "🏆" : `#${entry.rank}`}</span>
        <span className="team-owner">
          <span aria-hidden="true">{entry.player.emoji}</span> {entry.player.name}
          {isMe ? " (you)" : ""}
          <Crowns count={entry.player.crowns} />
        </span>
        <span className="team-records mono">
          {fmtRecord(entry.seasonWins, entry.seasonLosses)} season
          {entry.qualified ? (
            <> · {entry.h2hWins} series W</>
          ) : (
            <span className="missed-tag"> · missed the playoffs</span>
          )}
        </span>
      </header>
      {roster && (
        <ul className="team-five">
          {POSITIONS.map((pos) => {
            const id = roster[pos];
            const p = id ? getPlayer(id) : undefined;
            if (!p) {
              return (
                <li key={pos} className="five-chip">
                  <span className="five-pos mono">{pos}</span>
                  <span className="five-name">—</span>
                </li>
              );
            }
            const f = getFranchise(p.franchiseId);
            return (
              <li
                key={pos}
                className="five-chip"
                style={{ "--c1": f.colors[0], "--c2": f.colors[1] } as CSSProperties}
              >
                <span className="five-pos mono">{pos}</span>
                <span className="five-name">{p.name}</span>
                <span className="five-meta mono">
                  {f.abbr} {p.decade} · {p.stats.pts.toFixed(1)}p
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
}

function SeriesCard({
  a,
  b,
  result,
  defaultOpen = false,
}: {
  a: Participant;
  b: Participant;
  result: SeriesResult;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const aName = a.departed ? a.name : `${a.emoji} ${a.name}`;
  const bName = b.departed ? b.name : `${b.emoji} ${b.name}`;
  const winnerName = result.winner === "a" ? aName : bName;
  return (
    <div className="series-card">
      <button
        type="button"
        className="series-head"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={`series-side ${result.winner === "a" ? "series-winner" : ""}`}>
          {aName}
        </span>
        <span className="series-score mono">
          {result.aWins}–{result.bWins}
        </span>
        <span className={`series-side ${result.winner === "b" ? "series-winner" : ""}`}>
          {bName}
        </span>
        <span className="caret">{open ? "▾" : "▸"}</span>
      </button>
      {open && (
        <div className="series-games">
          <SeriesBreakdown a={a} b={b} result={result} />
          {result.games.map((g) => (
            <SeriesGameRow key={g.gameNo} game={g} aName={aName} bName={bName} />
          ))}
          <div className="series-note">{winnerName} takes the series</div>
        </div>
      )}
    </div>
  );
}

/**
 * Tale of the tape + a generated explanation of the result: who the
 * model favored, whether the outcome was expected or an upset, how
 * tight the games were, and who carried the scoring.
 */
function SeriesBreakdown({
  a,
  b,
  result,
}: {
  a: Participant;
  b: Participant;
  result: SeriesResult;
}) {
  const breakdown = useMemo(() => {
    if (!a.roster || !b.roster) return null;
    try {
      const ra = rosterFromIds(a.roster);
      const rb = rosterFromIds(b.roster);
      return {
        ta: teamStrength(ra),
        tb: teamStrength(rb),
        odds: matchupOdds(ra, rb),
      };
    } catch {
      return null;
    }
  }, [a.roster, b.roster]);
  if (!breakdown) return null;
  const { ta, tb, odds } = breakdown;

  // ---- generated explanation ----
  const winnerP = result.winner === "a" ? a : b;
  const winnerPct = result.winner === "a" ? odds.aSeriesWinPct : 1 - odds.aSeriesWinPct;
  const pctTxt = `${Math.round(winnerPct * 100)}%`;
  const sentences: string[] = [];
  if (Math.abs(odds.aSeriesWinPct - 0.5) < 0.07) {
    sentences.push(
      `This was a true coin-flip series (${pctTxt} for ${winnerP.name} over many replays) — the teams are nearly even, and a ${result.winner === "a" ? result.aWins : result.bWins}–${result.winner === "a" ? result.bWins : result.aWins} result between equals is normal, not a verdict.`,
    );
  } else if (winnerPct >= 0.5) {
    sentences.push(
      `${winnerP.name} won as the favorite — the model gives this matchup to them in ${pctTxt} of replays.`,
    );
  } else {
    sentences.push(
      `${winnerP.name} pulled the upset: the model makes them only a ${pctTxt} shot in this matchup, but best-of-7s between close teams swing on a few possessions.`,
    );
  }
  const close = result.games.filter((g) => Math.abs(g.aScore - g.bScore) <= 5).length;
  if (close > 0) {
    sentences.push(
      `${close} of the ${result.games.length} games came down to 5 points or fewer.`,
    );
  }
  // Top scorer across the series.
  const totals = new Map<string, { pts: number; n: number }>();
  for (const g of result.games) {
    for (const line of [...g.aBox, ...g.bBox]) {
      const t = totals.get(line.name) ?? { pts: 0, n: 0 };
      t.pts += line.pts;
      t.n += 1;
      totals.set(line.name, t);
    }
  }
  let topName = "";
  let topAvg = 0;
  for (const [name, t] of totals) {
    const avg = t.pts / t.n;
    if (avg > topAvg) {
      topAvg = avg;
      topName = name;
    }
  }
  if (topName) {
    sentences.push(`${topName} led all scorers at ${topAvg.toFixed(1)} a game.`);
  }

  const rows: { label: string; av: string; bv: string; aBetter: boolean }[] = [
    { label: "Overall", av: ta.overall.toFixed(1), bv: tb.overall.toFixed(1), aBetter: ta.overall >= tb.overall },
    { label: "Offense", av: ta.offense.toFixed(1), bv: tb.offense.toFixed(1), aBetter: ta.offense >= tb.offense },
    { label: "Defense", av: ta.defense.toFixed(1), bv: tb.defense.toFixed(1), aBetter: ta.defense >= tb.defense },
    { label: "Chemistry", av: `${Math.round(ta.chemistry * 100)}%`, bv: `${Math.round(tb.chemistry * 100)}%`, aBetter: ta.chemistry >= tb.chemistry },
  ];

  return (
    <div className="series-breakdown">
      <div className="tape">
        <div className="tape-head mono">
          <span>{a.name}</span>
          <span />
          <span>{b.name}</span>
        </div>
        {rows.map((r) => (
          <div key={r.label} className="tape-row mono">
            <span className={r.aBetter ? "tape-win" : ""}>{r.av}</span>
            <span className="tape-label">{r.label}</span>
            <span className={!r.aBetter ? "tape-win" : ""}>{r.bv}</span>
          </div>
        ))}
      </div>
      <p className="series-explain">{sentences.join(" ")}</p>
    </div>
  );
}

function SeriesGameRow({
  game,
  aName,
  bName,
}: {
  game: SeriesGame;
  aName: string;
  bName: string;
}) {
  const [open, setOpen] = useState(false);
  const aWon = game.aScore > game.bScore;
  return (
    <div className="series-game-block">
      <button
        type="button"
        className="series-game mono"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        title="Box score"
      >
        <span className="sg-no">G{game.gameNo}</span>
        <span className={aWon ? "sg-win" : ""}>{game.aScore}</span>
        <span className="sg-dash">–</span>
        <span className={!aWon ? "sg-win" : ""}>{game.bScore}</span>
        <span className="sg-box-hint">{open ? "▾" : "box ▸"}</span>
      </button>
      {open && (
        <div className="box-scores">
          <BoxTable title={aName} lines={game.aBox} score={game.aScore} />
          <BoxTable title={bName} lines={game.bBox} score={game.bScore} />
        </div>
      )}
    </div>
  );
}

function BoxTable({ title, lines, score }: { title: string; lines: BoxLine[]; score: number }) {
  return (
    <table className="box-table">
      <caption className="box-caption">
        {title} <span className="mono">{score}</span>
      </caption>
      <thead>
        <tr>
          <th scope="col">Player</th>
          <th scope="col" className="mono">PTS</th>
          <th scope="col" className="mono">REB</th>
          <th scope="col" className="mono">AST</th>
        </tr>
      </thead>
      <tbody>
        {lines.map((l) => (
          <tr key={`${l.pos}-${l.name}`}>
            <td>
              <span className="box-pos mono">{l.pos}</span> {l.name}
            </td>
            <td className="mono">{l.pts}</td>
            <td className="mono">{l.reb}</td>
            <td className="mono">{l.ast}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
