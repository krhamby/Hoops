import type { CSSProperties } from "react";
import type { Player, Position } from "../../types";

interface PlayerCardProps {
  player: Player;
  /** Franchise brand colors used to theme the card. */
  accent: [string, string];
  /** Positions this player could still be slotted at (eligible AND open). */
  openPositions: Position[];
  /** True when the card can't be picked (no open slot / duplicate). */
  disabled: boolean;
  disabledReason?: string;
  onPick: (player: Player) => void;
  /** Index in the grid, used for the deal-in stagger. */
  index: number;
}

const STAT_KEYS = [
  ["pts", "PTS"],
  ["reb", "REB"],
  ["ast", "AST"],
  ["stl", "STL"],
  ["blk", "BLK"],
] as const;

export default function PlayerCard({
  player,
  accent,
  openPositions,
  disabled,
  disabledReason,
  onPick,
  index,
}: PlayerCardProps) {
  const style = {
    "--c1": accent[0],
    "--c2": accent[1],
    "--deal-delay": `${Math.min(index, 14) * 45}ms`,
  } as CSSProperties;

  return (
    <button
      type="button"
      className="player-card"
      style={style}
      disabled={disabled}
      onClick={() => onPick(player)}
      title={disabled ? disabledReason : `Draft ${player.name}`}
    >
      <span className="pc-stripe" aria-hidden="true" />
      <span className="pc-top">
        <span className="pc-name">{player.name}</span>
        <span className="pc-positions">
          {player.positions.map((pos) => (
            <span
              key={pos}
              className={`pos-chip ${openPositions.includes(pos) ? "pos-open" : "pos-taken"}`}
            >
              {pos}
            </span>
          ))}
        </span>
      </span>
      <span className="pc-years mono">{player.years}</span>
      {player.accolades ? <span className="pc-accolades">{player.accolades}</span> : null}
      <span className="pc-stats mono">
        {STAT_KEYS.map(([key, label]) => (
          <span key={key} className="pc-stat">
            <b>{player.stats[key].toFixed(1)}</b>
            <i>{label}</i>
          </span>
        ))}
      </span>
      {disabled && disabledReason ? (
        <span className="pc-disabled-note">{disabledReason}</span>
      ) : null}
    </button>
  );
}
