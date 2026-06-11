import { useMemo, useState, type CSSProperties } from "react";
import type { BoxLine, Room, RoomPlayer, SeriesGame, SeriesResult, StandingsEntry } from "../types";
import { POSITIONS } from "../types";
import { computeStandings, rosterFromIds, PLAYOFF_BAR } from "../engine";
import { getPlayer } from "../data/players";
import { getFranchise } from "../data/franchises";
import { rematchRoom } from "../multiplayer/rooms";
import { useToast } from "./components/Toast";
import Crowns from "./components/Crowns";
import { errMsg, fmtRecord } from "./util";

interface VersusResultsProps {
  room: Room;
  myId: string;
  onBackToLobby: () => void;
  onHome: () => void;
}

interface RoomData {
  standings: StandingsEntry[];
  series: { aId: string; bId: string; result: SeriesResult }[];
}

export default function VersusResults({ room, myId, onBackToLobby, onHome }: VersusResultsProps) {
  const toast = useToast();
  const [rematching, setRematching] = useState(false);
  const isHost = room.hostId === myId;
  const host = room.players.find((p) => p.id === room.hostId);

  // Standings simulate every season + a round-robin of series, so key
  // the memo on what actually feeds the computation (seed + rosters),
  // not the always-fresh room object the 5s poll delivers.
  const rosterDigest = room.players
    .map((p) => `${p.id}:${p.roster ? POSITIONS.map((pos) => p.roster![pos]).join(",") : ""}`)
    .join("|");
  const data: RoomData | null = useMemo(() => {
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
  }, [room.seed, rosterDigest]);

  const byId = useMemo(() => {
    const m = new Map<string, RoomPlayer>();
    room.players.forEach((p) => m.set(p.id, p));
    return m;
  }, [room]);

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
    return (
      <main className="screen versus-results">
        <h1 className="display">Room results</h1>
        <p>Couldn't compute standings — no completed rosters found.</p>
        <div className="results-actions">
          <button type="button" className="btn btn-secondary" onClick={onBackToLobby}>
            Back to versus
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

  async function runItBack() {
    if (rematching) return;
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
              key={`${s.aId}-${s.bId}-${i}`}
              a={byId.get(s.aId)}
              b={byId.get(s.bId)}
              result={s.result}
              defaultOpen={data.series.length <= 3}
            />
          ))}
        </section>
      )}

      <div className="results-actions rematch-actions">
        {isHost ? (
          <button
            type="button"
            className="btn btn-primary btn-big"
            onClick={runItBack}
            disabled={rematching}
          >
            {rematching ? "Setting up the rematch…" : "🔁 Run it back"}
          </button>
        ) : (
          <p className="rematch-wait mono">
            Waiting for {host ? `${host.emoji} ${host.name}` : "the host"} to run it
            back — fresh spins, same room, crowns on the line.
          </p>
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

function TeamCard({ entry, isMe }: { entry: StandingsEntry; isMe: boolean }) {
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
  a: RoomPlayer | undefined;
  b: RoomPlayer | undefined;
  result: SeriesResult;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const aName = a ? `${a.emoji} ${a.name}` : "?";
  const bName = b ? `${b.emoji} ${b.name}` : "?";
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
          {result.games.map((g) => (
            <SeriesGameRow key={g.gameNo} game={g} aName={aName} bName={bName} />
          ))}
          <div className="series-note">{winnerName} takes the series</div>
        </div>
      )}
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
