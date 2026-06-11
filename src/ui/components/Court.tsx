import { useState, type DragEvent } from "react";
import type { Position, Roster } from "../../types";
import { POSITIONS } from "../../types";
import { getFranchise } from "../../data/franchises";

interface CourtProps {
  roster: Roster;
  /** Position that was just filled (gets a pop animation). */
  lastFilled?: string | null;
  /**
   * When provided, the court is editable: drag a player to another
   * slot (or tap a player, then tap a destination) to move/swap.
   */
  onMove?: (from: Position, to: Position) => void;
}

/**
 * Half-court diagram with the five lineup slots. Collapses into a
 * compact horizontal "bench bar" on small screens (pure CSS).
 * In editable mode players can be dragged (or tap-tap'd) between
 * slots — the escape hatch for positional logjams, à la 82-0.com.
 */
export default function Court({ roster, lastFilled, onMove }: CourtProps) {
  const [selected, setSelected] = useState<Position | null>(null);
  const [dragOver, setDragOver] = useState<Position | null>(null);
  const editable = Boolean(onMove);

  /** A move is legal when the mover plays the target position and any
   *  displaced player plays the vacated one (strict, like picks). */
  function canMove(from: Position, to: Position): boolean {
    const mover = roster[from];
    if (!mover || from === to) return false;
    if (!mover.positions.includes(to)) return false;
    const displaced = roster[to];
    return !displaced || displaced.positions.includes(from);
  }

  function move(from: Position, to: Position) {
    setSelected(null);
    setDragOver(null);
    if (from !== to) onMove?.(from, to);
  }

  function handleTap(pos: Position) {
    if (!editable) return;
    if (selected === null) {
      if (roster[pos]) setSelected(pos);
      return;
    }
    if (selected === pos) {
      setSelected(null);
      return;
    }
    move(selected, pos);
  }

  function handleDragStart(pos: Position, e: DragEvent) {
    e.dataTransfer.setData("text/hoops-slot", pos);
    e.dataTransfer.effectAllowed = "move";
    setSelected(pos);
  }

  function handleDrop(pos: Position, e: DragEvent) {
    e.preventDefault();
    const from = e.dataTransfer.getData("text/hoops-slot") as Position;
    if (from && POSITIONS.includes(from)) move(from, pos);
  }

  /** Hint shown on candidate slots while a player is selected. */
  function moveHint(pos: Position): string | null {
    if (!selected || selected === pos) return null;
    if (!roster[selected]) return null;
    if (!canMove(selected, pos)) return "✕";
    return roster[pos] ? "swap" : "move";
  }

  return (
    <div
      className={`court ${editable ? "court-editable" : ""}`}
      role="group"
      aria-label="Your starting five"
    >
      <div className="court-lines" aria-hidden="true">
        <span className="cl-arc" />
        <span className="cl-paint" />
        <span className="cl-rim" />
        <span className="cl-center" />
      </div>
      {POSITIONS.map((pos) => {
        const player = roster[pos];
        const colors = player ? getFranchise(player.franchiseId).colors : null;
        const hint = moveHint(pos);
        const className = [
          "court-slot",
          `slot-${pos.toLowerCase()}`,
          player ? "slot-filled" : "slot-empty",
          lastFilled === pos ? "slot-just-filled" : "",
          selected === pos ? "slot-selected" : "",
          dragOver === pos && selected !== pos ? "slot-dragover" : "",
        ].join(" ");
        const body = (
          <>
            <span className="slot-pos mono">{pos}</span>
            <span className="slot-name">{player ? player.name : "—"}</span>
            {player && !player.positions.includes(pos) && (
              <span className="slot-oop mono" title="Playing out of position">
                OOP
              </span>
            )}
            {hint && (
              <span className={`slot-hint mono ${hint === "✕" ? "hint-cost" : "hint-ok"}`}>
                {hint}
              </span>
            )}
          </>
        );
        if (!editable) {
          return (
            <div key={pos} className={className} style={colors ? { borderColor: colors[0] } : undefined}>
              {body}
            </div>
          );
        }
        return (
          <button
            key={pos}
            type="button"
            className={className}
            style={colors ? { borderColor: colors[0] } : undefined}
            draggable={Boolean(player)}
            onDragStart={(e) => player && handleDragStart(pos, e)}
            onDragEnd={() => {
              setSelected(null);
              setDragOver(null);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(pos);
            }}
            onDragLeave={() => setDragOver((d) => (d === pos ? null : d))}
            onDrop={(e) => handleDrop(pos, e)}
            onClick={() => handleTap(pos)}
            aria-pressed={selected === pos}
            title={
              selected && selected !== pos
                ? `Move ${roster[selected]?.name ?? ""} to ${pos}${roster[pos] ? ` (swaps with ${roster[pos]!.name})` : ""}`
                : player
                  ? `Drag ${player.name} to another spot — or tap, then tap a destination`
                  : undefined
            }
          >
            {body}
          </button>
        );
      })}
      {editable && (
        <p className="court-tip mono" aria-hidden="true">
          {selected
            ? `moving ${roster[selected]?.name ?? ""} — tap a spot`
            : "drag players to rearrange"}
        </p>
      )}
    </div>
  );
}
