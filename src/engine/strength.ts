// Team strength: thin façade over the possession model in
// src/engine/model/. Builds the full LineupModel (era-normalized
// attributes, usage squeeze, spacing, playmaking network, zone
// defense) and projects it onto the public TeamRating shape.
//
// Calibration anchors (see __tests__/engine.test.ts + model.test.ts):
//   all-time superteam  -> overall ~135-140 (avg 77-81 wins, 82-0 in 8-20%)
//   average role players -> overall ~100    (30-50 wins)
//   weak roster          -> overall <~96    (<30 wins)

import type { Roster, TeamRating } from "../types";
import { REF_PACE } from "./model/era";
import {
  buildLineup,
  expectedOppPPP,
  expectedPPP,
  LEAGUE_AVG_PPP,
} from "./model/lineup";

const clamp = (x: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, x));
const round1 = (x: number) => Math.round(x * 10) / 10;

export function teamStrength(roster: Roster): TeamRating {
  const m = buildLineup(roster);

  // Offense: model expected PPG vs a league-average defense, kept in
  // the v1 95-135 band the UI meters were built around.
  const offense = round1(clamp(m.expPPG, 95, 135));

  // Defense: expected opponent PPG suppression vs a league-average
  // offense (points shaved off a ~108 ppg baseline).
  const oppPPP = expectedOppPPP(m);
  const defense = round1(clamp((LEAGUE_AVG_PPP - oppPPP) * REF_PACE, 0, 20));

  // Chemistry: spacing / playmaking / usage-fit / rebounding composite.
  // An empty roster has no chemistry by definition.
  const chemistry = m.filledSlots === 0 ? 0 : round1(m.chemistry * 1000) / 1000;

  // Overall: net-rating power index mapped into the v1 numeric
  // neighborhood (superteam ~135-140, replacement-level ~85-90).
  const netPP100 = (expectedPPP(m) - oppPPP) * 100;
  const overall = round1(clamp(104 + netPP100 * 1.05, 60, 150));

  return { offense, defense, overall, chemistry };
}
