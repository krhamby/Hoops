import type { Roster } from "../../types";
import { POSITIONS } from "../../types";
import { getFranchise } from "../../data/franchises";

interface CourtProps {
  roster: Roster;
  /** Position that was just filled (gets a pop animation). */
  lastFilled?: string | null;
}

/**
 * Half-court diagram with the five lineup slots. Collapses into a
 * compact horizontal "bench bar" on small screens (pure CSS).
 */
export default function Court({ roster, lastFilled }: CourtProps) {
  return (
    <div className="court" role="group" aria-label="Your starting five">
      <div className="court-lines" aria-hidden="true">
        <span className="cl-arc" />
        <span className="cl-paint" />
        <span className="cl-rim" />
        <span className="cl-center" />
      </div>
      {POSITIONS.map((pos) => {
        const player = roster[pos];
        const colors = player ? getFranchise(player.franchiseId).colors : null;
        return (
          <div
            key={pos}
            className={`court-slot slot-${pos.toLowerCase()} ${player ? "slot-filled" : "slot-empty"} ${
              lastFilled === pos ? "slot-just-filled" : ""
            }`}
            style={colors ? { borderColor: colors[0] } : undefined}
          >
            <span className="slot-pos mono">{pos}</span>
            <span className="slot-name">{player ? player.name : "—"}</span>
            {player && !player.positions.includes(pos) && (
              <span className="slot-oop mono" title="Playing out of position">
                OOP
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
