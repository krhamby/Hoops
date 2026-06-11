import { useMemo } from "react";
import type { Roster } from "../../types";
import { detectSynergies } from "../../engine";

/**
 * Detected on-court chemistry for a (possibly partial) roster:
 * legendary duos, real-life teammates, and archetype fits — including
 * negative ones like a clogged paint.
 */
export default function SynergyList({
  roster,
  compact = false,
}: {
  roster: Roster;
  compact?: boolean;
}) {
  const synergies = useMemo(() => detectSynergies(roster), [roster]);
  if (synergies.length === 0) return null;
  return (
    <div className={`synergy-list ${compact ? "synergy-compact" : ""}`}>
      <div className="synergy-title mono">On-court chemistry</div>
      <ul>
        {synergies.map((s) => (
          <li
            key={s.id}
            className={s.boost >= 0 ? "syn-pos" : "syn-neg"}
            title={compact ? s.detail : undefined}
          >
            <span className="syn-sign mono" aria-hidden="true">
              {s.boost >= 0 ? "▲" : "▼"}
            </span>
            <span className="syn-body">
              <span className="syn-label">
                {s.label}
                <span className="syn-players"> · {s.players.join(" + ")}</span>
              </span>
              {!compact && <span className="syn-detail">{s.detail}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
