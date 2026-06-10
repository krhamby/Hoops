import { useMemo } from "react";
import type { Roster, TeamRating } from "../../types";
import { teamStrength } from "../../engine";

function clampPct(v: number): number {
  return Math.max(4, Math.min(100, v));
}

interface StrengthMeterProps {
  roster: Roster;
}

/** Live team-strength meter for the (possibly partial) roster being drafted. */
export default function StrengthMeter({ roster }: StrengthMeterProps) {
  const rating: TeamRating | null = useMemo(() => {
    try {
      return teamStrength(roster);
    } catch {
      return null;
    }
  }, [roster]);

  if (!rating) return null;

  // Engine calibration: empty roster ~65 overall, all-time superteam ~139.
  const overallPct = clampPct(((rating.overall - 65) / (140 - 65)) * 100);

  return (
    <div className="strength" aria-label={`Team strength ${Math.round(rating.overall)}`}>
      <div className="strength-head">
        <span className="strength-title">Team strength</span>
        <span className="mono strength-num">{Math.round(rating.overall)}</span>
      </div>
      <div className="bar">
        <div className="bar-fill bar-orange" style={{ width: `${overallPct}%` }} />
      </div>
      <div className="strength-detail mono">
        <span>OFF {rating.offense.toFixed(1)}</span>
        <span>DEF {rating.defense.toFixed(1)}</span>
        <span>CHEM {(rating.chemistry * 100).toFixed(0)}%</span>
      </div>
    </div>
  );
}
