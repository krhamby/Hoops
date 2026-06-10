import type { GameResult } from "../../types";

interface SeasonStripProps {
  games: GameResult[];
  /** How many games (from the start) are revealed. */
  revealed: number;
}

/** The 82-dot season grid: green pops for wins, red for losses. */
export default function SeasonStrip({ games, revealed }: SeasonStripProps) {
  const shown = games.slice(0, revealed);
  const wins = shown.filter((g) => g.win).length;
  return (
    <div
      className="season-strip"
      role="img"
      aria-label={`Season progress: ${wins} wins, ${shown.length - wins} losses through ${shown.length} of ${games.length} games`}
    >
      {games.map((g, i) => (
        <span
          key={g.gameNo}
          className={`dot ${i < revealed ? (g.win ? "dot-win" : "dot-loss") : "dot-pending"}`}
          title={i < revealed ? `Game ${g.gameNo}: ${g.win ? "W" : "L"} ${g.teamScore}–${g.oppScore}` : `Game ${g.gameNo}`}
        />
      ))}
    </div>
  );
}
