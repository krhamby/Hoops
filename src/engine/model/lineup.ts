// ============================================================
// Team composition model. Takes 5 attribute sets and resolves
// how they *fit*: who actually gets the ball (usage squeeze with
// skill-curve efficiency tradeoffs), how spacing and playmaking
// modify everyone's shot quality, and what the lineup gives up
// (or takes away) defensively. The output LineupModel is the
// single object the possession engine consumes.
// ============================================================

import { POSITIONS, type Position, type Roster } from "../../types";
import {
  deriveAttributes,
  replacementAttributes,
  type PlayerAttributes,
} from "./attributes";
import { eraContext, REF_PACE } from "./era";

const clamp = (x: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, x));
const clamp01 = (x: number) => clamp(x, 0, 1);

export interface LineupPlayer {
  attrs: PlayerAttributes;
  /** Usage after the team squeeze (the five sum to ~1). */
  effUsage: number;
  /** Efficiency after sliding along the usage-efficiency curve. */
  effEfficiency: number;
}

export interface LineupModel {
  players: LineupPlayer[];
  /** Possessions per game this lineup wants to play at. */
  pace: number;
  /** Multiplier on rim (and partially mid) efficiency from shooting gravity. */
  spacing: number;
  /** Additive efficiency from the passing network (iso tax when negative). */
  passBoost: number;
  /** Team turnover probability per possession (before opp pressure). */
  teamTOBase: number;
  /** Multiplier applied to the *opponent's* turnover probability. */
  ballPressure: number;
  /** Opponent efficiency multipliers by zone (lower = better defense). */
  oppRimMod: number;
  oppMidMod: number;
  oppThreeMod: number;
  /** Team offensive / defensive rebound strength (ORB% / DRB%-like). */
  offReb: number;
  defReb: number;
  /** 0..1 roster-fit composite (spacing/playmaking/usage-fit/boards). */
  chemistry: number;
  /** Analytic expected PPG vs a league-average defense. */
  expPPG: number;
  /** Sum of natural usage demanded (diagnostic; 1.0 = perfect fit). */
  usageDemand: number;
  /** How many real (non-replacement) players are in the lineup. */
  filledSlots: number;
}

// ---- usage-efficiency skill curve --------------------------------
// Classic tradeoff: a creator asked to do slightly *less* than his
// natural load takes only his best shots (efficiency rises a touch);
// forced far below it he turns into a stand-around option out of
// rhythm, and forced *above* it he grinds out bad attempts. A concave
// quadratic captures all three regimes in one curve.
const CURVE_GAIN = 0.22; // linear term: small drops help
const CURVE_BEND = 3.4; // quadratic term: big moves in either direction hurt

export function usageCurveDelta(naturalUsage: number, effUsage: number): number {
  const drop = naturalUsage - effUsage; // >0 squeezed down, <0 forced up
  return CURVE_GAIN * drop - CURVE_BEND * drop * drop;
}

// ---- zone make probabilities (shared with game.ts) ----------------
// Map a TS%-like efficiency to per-zone make probability.
export function rimMakeP(eff: number): number {
  return clamp(0.56 + (eff - 0.54) * 1.35, 0.3, 0.78);
}
export function midMakeP(eff: number): number {
  return clamp(0.405 + (eff - 0.54) * 0.95, 0.25, 0.58);
}
export function threeMakeP(eff: number, threeSkill: number): number {
  return clamp(threeSkill + (eff - 0.54) * 0.4, 0.18, 0.48);
}

/** Build a lineup model from 5 explicit attribute sets. */
export function lineupFromAttributes(
  attrs: PlayerAttributes[],
  filledSlots = attrs.length,
): LineupModel {
  // ---- usage redistribution ----
  // The five demand `usageDemand` worth of possessions but only 1.0
  // exists; proportional squeeze, then each slides along his curve.
  const usageDemand = attrs.reduce((s, a) => s + a.usage, 0);
  const scale = usageDemand > 0 ? 1 / usageDemand : 0;
  const players: LineupPlayer[] = attrs.map((a) => {
    const effUsage = a.usage * scale;
    const effEfficiency = clamp(
      a.scoringEfficiency + usageCurveDelta(a.usage, effUsage),
      0.4,
      0.68,
    );
    return { attrs: a, effUsage, effEfficiency };
  });

  // ---- spacing ----
  // Weighted shooters bend the defense; quality-weighted three volume.
  // Five non-shooters (any pre-1980 lineup) clog the paint (~0.93).
  const shooterScore = attrs.reduce(
    (s, a) => s + a.threeRate * (a.threeSkill / 0.36),
    0,
  );
  const spacing = clamp(0.95 + 0.055 * shooterScore, 0.95, 1.07);

  // ---- playmaking network ----
  // Team creation lifts off-ball finishers; assist-starved lineups
  // pay an iso tax (everything is self-created against set defenses).
  const teamPlay = attrs.reduce((s, a) => s + a.playmaking, 0);
  const passBoost = clamp((teamPlay - 11) * 0.0028, -0.028, 0.032);

  // ---- ball security & pressure ----
  const teamTOBase = clamp(
    attrs.reduce((s, a) => s + a.turnoverRate * a.usage, 0) / Math.max(usageDemand, 0.1),
    0.08,
    0.18,
  );
  const perimSum = attrs.reduce((s, a) => s + a.perimeterDefense, 0);
  const ballPressure = clamp(0.82 + 0.16 * perimSum, 0.82, 1.35);

  // ---- defense by zone ----
  // Rim protection is anchor-driven: the best protector sets the
  // scheme, the second matters some, the rest only a little.
  const rims = attrs.map((a) => a.rimProtection).sort((x, y) => y - x);
  const rimDef = clamp01(
    0.8 * rims[0] + 0.4 * rims[1] + 0.15 * ((rims[2] + rims[3] + rims[4]) / 3),
  );
  const perimDef = clamp01(perimSum / 2.4);
  const oppRimMod = 1.09 - 0.24 * rimDef; // elite anchor ≈ 0.87
  const oppMidMod = 1.05 - 0.09 * rimDef - 0.07 * perimDef;
  const oppThreeMod = 1.06 - 0.14 * perimDef; // closeouts ≈ 0.92

  // ---- rebounding ----
  const oSum = attrs.reduce((s, a) => s + a.offRebRate, 0);
  const dSum = attrs.reduce((s, a) => s + a.defRebRate, 0);
  const offReb = clamp(0.13 + 0.0042 * oSum, 0.15, 0.36);
  const defReb = clamp(0.58 + 0.0042 * dSum, 0.62, 0.82);

  // ---- pace: blend of the eras the five played in ----
  // (attrs are already per-75; pace only sets game length flavor)
  // attrs don't carry decade, so the roster-level builder passes pace
  // via buildLineup; for raw attribute sets assume reference pace.
  const pace = REF_PACE;

  // ---- chemistry composite (0..1) ----
  const usageFit = clamp01(1 - Math.abs(usageDemand - 1) * 1.5);
  const chemistry = clamp01(
    0.3 * clamp01((spacing - 0.93) / 0.17) +
      0.3 * clamp01(teamPlay / 19) +
      0.25 * usageFit +
      0.15 * clamp01((defReb - 0.62) / 0.18),
  );

  const model: LineupModel = {
    players,
    pace,
    spacing,
    passBoost,
    teamTOBase,
    ballPressure,
    oppRimMod,
    oppMidMod,
    oppThreeMod,
    offReb,
    defReb,
    chemistry,
    expPPG: 0,
    usageDemand,
    filledSlots,
  };
  model.expPPG = expectedPPG(model);
  return model;
}

/** Build the lineup model for a drafted roster (null slots -> replacement). */
export function buildLineup(roster: Roster): LineupModel {
  const attrs: PlayerAttributes[] = [];
  let paceSum = 0;
  let filled = 0;
  for (const pos of POSITIONS) {
    const p = roster[pos];
    if (p) {
      attrs.push(deriveAttributes(p));
      paceSum += eraContext(p.decade).pace;
      filled++;
    } else {
      attrs.push(replacementAttributes(pos as Position));
      paceSum += REF_PACE;
    }
  }
  const model = lineupFromAttributes(attrs, filled);
  // Pace: half league baseline, half the average era the five came
  // from (a 1960s-heavy lineup runs; a 90s-heavy one grinds).
  model.pace = clamp(0.5 * REF_PACE + 0.5 * (paceSum / 5), 88, 110);
  return model;
}

// ---- analytic expectation (powers TeamRating, mirrors game.ts) ----

/** Expected points per possession vs a league-average defense. */
export function expectedPPP(m: LineupModel): number {
  let pts = 0;
  for (const lp of m.players) {
    const a = lp.attrs;
    const eff = clamp(lp.effEfficiency + m.passBoost, 0.38, 0.7);
    const pRim = rimMakeP(eff) * m.spacing;
    const pMid = midMakeP(eff) * (0.5 + 0.5 * m.spacing);
    const pThree = threeMakeP(eff, a.threeSkill);
    const perShot =
      a.rimRate * pRim * 2 + a.midRate * pMid * 2 + a.threeRate * pThree * 3;
    // Free throw value: foul rate * ~2 FTs * FT%.
    const ftPts = a.ftRate * 0.32 * 2 * a.ftSkill;
    pts += lp.effUsage * (perShot + ftPts);
  }
  // Offensive rebounds recycle ~misses; turnovers void possessions.
  const missRate = clamp(1 - pts / 2.05, 0.3, 0.65);
  const orbRecycle = 1 + m.offReb * missRate * 0.95;
  return pts * (1 - m.teamTOBase) * orbRecycle;
}

/** Expected PPG vs a league-average defense at this lineup's pace. */
export function expectedPPG(m: LineupModel): number {
  return expectedPPP(m) * m.pace;
}

/**
 * Expected PPP an average offense would score *against* this lineup —
 * used for the public TeamRating defense/overall numbers.
 */
export const LEAGUE_AVG_PPP = 1.1;

export function expectedOppPPP(m: LineupModel): number {
  const zoneMix = LEAGUE_AVG_PPP * (0.4 * m.oppRimMod + 0.34 * m.oppMidMod + 0.26 * m.oppThreeMod);
  const toEffect = 1 - (0.115 * m.ballPressure - 0.115); // extra forced TOs
  const rebEffect = 1 - (m.defReb - 0.72) * 0.45; // ending possessions
  return zoneMix * toEffect * rebEffect;
}
