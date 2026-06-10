import { useMemo, useState } from "react";
import type { Room, RoomPlayer, SeriesResult, StandingsEntry } from "../types";
import { POSITIONS } from "../types";
import { computeStandings, rosterFromIds } from "../engine";
import { getPlayer } from "../data/players";
import { fmtRecord } from "./util";

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
  }, [room]);

  const byId = useMemo(() => {
    const m = new Map<string, RoomPlayer>();
    room.players.forEach((p) => m.set(p.id, p));
    return m;
  }, [room]);

  if (!data) {
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

  const champ = data.standings.find((s) => s.rank === 1) ?? data.standings[0];

  return (
    <main className="screen versus-results">
      <header className="results-head">
        <span className="results-kicker mono">Room {room.code}</span>
        <h1 className="display">Final standings</h1>
      </header>

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
          </span>
        </div>
        <span className="champ-trophy" aria-hidden="true">
          🏆
        </span>
      </section>

      <section className="standings">
        <table className="standings-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Player</th>
              <th scope="col" className="mono">
                Season
              </th>
              <th scope="col" className="mono">
                Series W
              </th>
            </tr>
          </thead>
          <tbody>
            {data.standings.map((s) => (
              <StandingsRow key={s.player.id} entry={s} isMe={s.player.id === myId} />
            ))}
          </tbody>
        </table>
      </section>

      <section className="series-list">
        <h2 className="display">Head-to-head · best of 7</h2>
        {data.series.map((s, i) => (
          <SeriesCard
            key={`${s.aId}-${s.bId}-${i}`}
            a={byId.get(s.aId)}
            b={byId.get(s.bId)}
            result={s.result}
          />
        ))}
      </section>

      <div className="results-actions">
        <button type="button" className="btn btn-primary" onClick={onBackToLobby}>
          Rematch
        </button>
        <button type="button" className="btn btn-ghost" onClick={onHome}>
          Home
        </button>
      </div>
    </main>
  );
}

function StandingsRow({ entry, isMe }: { entry: StandingsEntry; isMe: boolean }) {
  const [open, setOpen] = useState(false);
  const roster = entry.player.roster;
  return (
    <>
      <tr className={isMe ? "me" : ""}>
        <td className="mono">{entry.rank}</td>
        <td>
          <button
            type="button"
            className="standings-player"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            title="Show drafted roster"
          >
            <span>{entry.player.emoji}</span> {entry.player.name}
            {isMe ? " (you)" : ""} <span className="caret">{open ? "▾" : "▸"}</span>
          </button>
        </td>
        <td className="mono">{fmtRecord(entry.seasonWins, entry.seasonLosses)}</td>
        <td className="mono">{entry.h2hWins}</td>
      </tr>
      {open && roster && (
        <tr className="roster-row">
          <td colSpan={4}>
            <span className="mono roster-line">
              {POSITIONS.map((pos) => {
                const id = roster[pos];
                const p = id ? getPlayer(id) : undefined;
                return `${pos} ${p ? p.name : "?"}`;
              }).join(" · ")}
            </span>
          </td>
        </tr>
      )}
    </>
  );
}

function SeriesCard({
  a,
  b,
  result,
}: {
  a: RoomPlayer | undefined;
  b: RoomPlayer | undefined;
  result: SeriesResult;
}) {
  const [open, setOpen] = useState(false);
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
          {result.games.map((g) => {
            const aWon = g.aScore > g.bScore;
            return (
              <div key={g.gameNo} className="series-game mono">
                <span className="sg-no">G{g.gameNo}</span>
                <span className={aWon ? "sg-win" : ""}>{g.aScore}</span>
                <span className="sg-dash">–</span>
                <span className={!aWon ? "sg-win" : ""}>{g.bScore}</span>
              </div>
            );
          })}
          <div className="series-note">{winnerName} takes the series</div>
        </div>
      )}
    </div>
  );
}
