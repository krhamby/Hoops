// ============================================================
// Latent attribute derivation. A Player carries only a coarse
// per-game stat line (pts/reb/ast/stl/blk) + positions + decade.
// This module infers the hidden basketball attributes the
// possession engine needs: shot load, efficiency, shot diet,
// playmaking, defense, rebounding, free throws, clutch.
// All inputs are era-normalized first (see era.ts).
// ============================================================

import type { Player, Position } from "../../types";
import {
  adjustedRate,
  adjustedRebounds,
  adjustedScoring,
  eraContext,
} from "./era";

export interface PlayerAttributes {
  position: Position;
  /** Era-adjusted scoring value (per-75 pts in the reference era). */
  adjPts: number;
  /** Natural usage: fraction of team possessions he wants to end. */
  usage: number;
  /** TS%-like scoring efficiency estimate at natural usage. */
  scoringEfficiency: number;
  /** Shot diet (sums to 1): share of attempts at rim / midrange / three. */
  rimRate: number;
  midRate: number;
  threeRate: number;
  /** Three-point make quality (≈ expected 3P%). */
  threeSkill: number;
  /** Creation for teammates, ~0..9 scale (era/pos-adjusted assists). */
  playmaking: number;
  /** Turnovers per possession used. */
  turnoverRate: number;
  /** Offensive / defensive rebounding contributions (weighted adj reb). */
  offRebRate: number;
  defRebRate: number;
  /** Rim protection 0..1 (blocks, big-man weighted). */
  rimProtection: number;
  /** Perimeter defense 0..1 (steals, guard/wing weighted). */
  perimeterDefense: number;
  /** Probability a shot attempt draws a shooting foul (zone-scaled later). */
  ftRate: number;
  /** Free throw make probability. */
  ftSkill: number;
  /** Minutes durability 0..1 (mild fatigue resistance). */
  stamina: number;
  /** Clutch gene 0..1: high-usage stars get the late-game ball. */
  clutch: number;
}

const clamp = (x: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, x));
const clamp01 = (x: number) => clamp(x, 0, 1);

// Position weights -------------------------------------------------

// How much of a position's shot diet starts at the rim (pre-spacing).
const RIM_BASE: Record<Position, number> = {
  PG: 0.3,
  SG: 0.3,
  SF: 0.37,
  PF: 0.47,
  C: 0.58,
};
// Willingness/role to shoot threes by position.
const THREE_POS: Record<Position, number> = {
  PG: 1.0,
  SG: 1.1,
  SF: 0.9,
  PF: 0.5,
  C: 0.25,
};
// Assists from lead guards carry more on-ball creation signal.
const PLAY_POS: Record<Position, number> = {
  PG: 1.0,
  SG: 0.85,
  SF: 0.85,
  PF: 0.7,
  C: 0.7,
};
// Blocks from bigs are scheme-anchoring rim protection.
const RIMPROT_POS: Record<Position, number> = {
  PG: 0.14,
  SG: 0.14,
  SF: 0.22,
  PF: 0.32,
  C: 0.4,
};
// Steals from guards/wings indicate point-of-attack containment.
const PERIM_POS: Record<Position, number> = {
  PG: 0.45,
  SG: 0.45,
  SF: 0.4,
  PF: 0.28,
  C: 0.22,
};
// Offensive boards skew to bigs; defensive boards are flatter.
const OREB_POS: Record<Position, number> = {
  PG: 0.55,
  SG: 0.65,
  SF: 0.9,
  PF: 1.15,
  C: 1.25,
};
const DREB_POS: Record<Position, number> = {
  PG: 0.75,
  SG: 0.8,
  SF: 0.95,
  PF: 1.1,
  C: 1.15,
};
// Free-throw touch baseline by position (guards > bigs).
const FT_POS: Record<Position, number> = {
  PG: 0.79,
  SG: 0.79,
  SF: 0.76,
  PF: 0.71,
  C: 0.67,
};

/** Derive latent attributes from a player's era-adjusted stat line. */
export function deriveAttributes(p: Player): PlayerAttributes {
  const pos = p.positions[0] ?? "SF";
  const ctx = eraContext(p.decade);

  // Era-normalized inputs.
  const adjPts = adjustedScoring(p.stats.pts, p.decade);
  const adjReb = adjustedRebounds(p.stats.reb, p.decade);
  const adjAst = adjustedRate(p.stats.ast, p.decade);
  const adjStl = adjustedRate(p.stats.stl, p.decade);
  const adjBlk = adjustedRate(p.stats.blk, p.decade);

  // Usage: shot load grows with adjusted scoring plus a sliver for
  // on-ball creation (assists imply touches). ~0.30 for a 28ppg star.
  const usage = clamp(0.1 + 0.0085 * adjPts + 0.0018 * adjAst, 0.1, 0.4);

  // Scoring efficiency (TS%-like):
  //  - modern shooting environments lift everyone (+threeEnv),
  //  - low-volume bigs live on dunks/putbacks (+ when usage is small),
  //  - elite scorers were elite *because* they scored efficiently at
  //    volume: a convex selection curve (adjPts^1.5) — sustaining 25+
  //    adjusted ppg requires outlier shotmaking, while the difference
  //    between 8 and 12 ppg role players is mostly opportunity.
  const bigBonus =
    pos === "C" || pos === "PF"
      ? 0.045 * (1 - clamp01((usage - 0.1) / 0.2))
      : 0;
  const scoringEfficiency = clamp(
    0.5 + 0.025 * ctx.threeEnv + 0.00155 * Math.pow(adjPts, 1.5) + bigBonus,
    0.46,
    0.68,
  );

  // Shot diet. ZERO threes before the 1980 line; afterwards the rate
  // scales with the decade's three environment and position role.
  const threeRate =
    ctx.threeEnv === 0
      ? 0
      : clamp(ctx.threeEnv * (0.1 + 0.3 * THREE_POS[pos]), 0, 0.55);
  // Shooting threes pulls some attempts away from the rim.
  const rimRate = clamp(RIM_BASE[pos] * (1 - 0.55 * threeRate), 0.12, 0.65);
  const midRate = Math.max(0, 1 - threeRate - rimRate);

  // Three-point make quality: era environment + guard/wing touch +
  // mild scorer bonus. Pre-1980 players get a token floor (never used
  // in-era, only matters if rates were nonzero — they are not).
  const guardish = pos === "PG" || pos === "SG" ? 1 : pos === "SF" ? 0.6 : 0;
  const threeSkill = clamp(
    0.29 + 0.06 * ctx.threeEnv + 0.025 * guardish + 0.0016 * adjPts,
    0.26,
    0.43,
  );

  // Playmaking: pace-adjusted assists, position-weighted.
  const playmaking = clamp(adjAst * PLAY_POS[pos], 0, 9);

  // Turnovers rise with shot load and with creation burden.
  const turnoverRate = clamp(
    0.06 + 0.16 * usage + 0.007 * playmaking,
    0.08,
    0.2,
  );

  // Rebounding contributions (era-deflated), split by position role.
  const offRebRate = adjReb * OREB_POS[pos];
  const defRebRate = adjReb * DREB_POS[pos];

  // Defense.
  const rimProtection = clamp01(adjBlk * RIMPROT_POS[pos] + 0.02);
  const perimeterDefense = clamp01(adjStl * PERIM_POS[pos] + 0.02);

  // Free throws: rim pressure + load draw fouls; touch by position
  // plus a scorer bonus (great scorers are great FT shooters).
  const ftRate = clamp(0.16 + 0.3 * rimRate + 0.2 * usage, 0.15, 0.42);
  const ftSkill = clamp(FT_POS[pos] + 0.005 * adjPts, 0.55, 0.92);

  // Stamina: stars log heavy minutes and are conditioned for them.
  const stamina = clamp01(0.7 + 0.012 * adjPts);

  // Clutch: high-usage stars demand (and convert) late-game touches.
  const clutch = clamp01(2.2 * (usage - 0.14) + 0.015 * (adjPts - 10));

  return {
    position: pos,
    adjPts,
    usage,
    scoringEfficiency,
    rimRate,
    midRate,
    threeRate,
    threeSkill,
    playmaking,
    turnoverRate,
    offRebRate,
    defRebRate,
    rimProtection,
    perimeterDefense,
    ftRate,
    ftSkill,
    stamina,
    clutch,
  };
}

/** Replacement-level attributes for an unfilled roster slot. */
export function replacementAttributes(pos: Position): PlayerAttributes {
  return {
    position: pos,
    adjPts: 3,
    usage: 0.1,
    scoringEfficiency: 0.46,
    rimRate: RIM_BASE[pos],
    midRate: 1 - RIM_BASE[pos],
    threeRate: 0,
    threeSkill: 0.26,
    playmaking: 0.5,
    turnoverRate: 0.14,
    offRebRate: 1.5,
    defRebRate: 2.5,
    rimProtection: 0.02,
    perimeterDefense: 0.02,
    ftRate: 0.18,
    ftSkill: 0.65,
    stamina: 0.6,
    clutch: 0,
  };
}
