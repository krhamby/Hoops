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

// Defensive reputation in accolade text. Counting stats miss elite
// defenders (and pre-1974 stl/blk are estimates), so recognized
// stoppers/anchors get a bump. Deliberately narrow: bare "steal" /
// "block" / "rim" would false-positive on "second-round steal",
// "building block", "rim-rocking" etc.; "stopper" needs a word
// boundary so "showstopper" doesn't count as defense.
const DEF_ACCOLADE =
  /dpoy|all-def|defen[dcs]|\bstopper|lockdown|rim (protector|wall|guard|deterrent)|shot.?block|steals? (champ|leader|king|machine)/i;

/**
 * Derive latent attributes from a player's era-adjusted stat line.
 * `slot` is the roster position the player is actually slotted at;
 * when he is eligible there it drives the positional role weights
 * (a SF/PF slotted at PF defends/rebounds like a PF). Falls back to
 * his primary position.
 */
export function deriveAttributes(p: Player, slot?: Position): PlayerAttributes {
  const pos =
    slot && p.positions.includes(slot) ? slot : p.positions[0] ?? "SF";
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
  //  - low-volume bigs live on dunks/putbacks (+ when usage is small),
  //  - elite scorers were elite *because* they scored efficiently at
  //    volume: a convex selection curve (adjPts^1.5) — sustaining 25+
  //    adjusted ppg requires outlier shotmaking, while the difference
  //    between 8 and 12 ppg role players is mostly opportunity.
  // NOTE: deliberately no era-environment term here. Attributes live
  // in the reference context and the era's scoring environment is
  // already priced into adjustedScoring — adding threeEnv again
  // double-penalized pre-1980 players.
  const bigBonus =
    pos === "C" || pos === "PF"
      ? 0.045 * (1 - clamp01((usage - 0.1) / 0.2))
      : 0;
  // Pre-3PT craft: translated old-era scorers bring a polished
  // close-quarters game into a reference era whose rules (spacing,
  // no hand-checking) flatter it. Keeps all-pre-1980 lineups
  // competitive instead of strictly dominated in cross-era play.
  const craftBonus = ctx.threeEnv === 0 ? 0.012 : 0;
  const scoringEfficiency = clamp(
    0.515 + 0.00155 * Math.pow(adjPts, 1.5) + bigBonus + craftBonus,
    0.46,
    0.68,
  );

  // Shot diet. ZERO threes before the 1980 line; afterwards the rate
  // scales with the decade's three environment and position role.
  const threeRate =
    ctx.threeEnv === 0
      ? 0
      : clamp(ctx.threeEnv * (0.1 + 0.3 * THREE_POS[pos]), 0, 0.55);
  // Shooting threes pulls some attempts away from the rim. Pre-3PT
  // players translate the other way: with no line to honor, their
  // attempt mix concentrated at the basket (post play, cuts, short
  // pull-ups) — without this shift the model parks 60%+ of their
  // attempts in its lowest-value long-two zone, an era artifact.
  const rimBase = ctx.threeEnv === 0 ? RIM_BASE[pos] + 0.1 : RIM_BASE[pos];
  const rimRate = clamp(rimBase * (1 - 0.55 * threeRate), 0.12, 0.65);
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
  let rimProtection = clamp01(adjBlk * RIMPROT_POS[pos] + 0.02);
  let perimeterDefense = clamp01(adjStl * PERIM_POS[pos] + 0.02);
  if (p.accolades && DEF_ACCOLADE.test(p.accolades)) {
    // Reputation bump, position-shaped: anchors gain rim deterrence,
    // guards gain point-of-attack pressure.
    rimProtection = clamp01(rimProtection + 0.35 * RIMPROT_POS[pos]);
    perimeterDefense = clamp01(perimeterDefense + 0.35 * PERIM_POS[pos]);
  }

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

// ---- out-of-position slotting ------------------------------------
// The draft UI allows ANY player into ANY open slot. Playing off
// position is a real strategic tradeoff, not free: severity grows
// with distance from the player's nearest listed position on the
// PG-SG-SF-PF-C spectrum, and the lineup pays for it via
// applySlotPenalty below (baked into the attributes, so the cost
// flows identically through teamStrength, simulateSeason,
// simulateSeries and series box scores).

const POS_INDEX: Record<Position, number> = { PG: 0, SG: 1, SF: 2, PF: 3, C: 4 };

/** Severity by spectrum distance: 1 step ≈ mild tax, PG↔C = 1.0. */
const STEP_SEVERITY = [0, 0.25, 0.55, 0.8, 1] as const;

// Attribute taxes at full severity 1.0 (a PG jammed at C), scaled
// linearly by severity. Tuned so a star one step off position is
// mildly taxed (clearly better than a replacement body and usually
// better than an in-position scrub), while a guard at center is a
// real liability — bullied on the glass and at the rim — yet still
// better than an empty slot.
const PEN_SCORING = 0.08; // scoring efficiency -8%
const PEN_PLAYMAKING = 0.15; // playmaking -15%
const PEN_REB_DEF = 0.2; // rebounding + defense effectiveness -20%
const PEN_TURNOVER = 0.15; // turnoverRate +15%

/** Listed position nearest to `slot` (the role he actually knows). */
function nearestListed(p: Player, slot: Position): Position {
  if (p.positions.includes(slot)) return slot;
  let best: Position = p.positions[0] ?? "SF";
  let bestDist = Math.abs(POS_INDEX[best] - POS_INDEX[slot]);
  for (const pos of p.positions) {
    const d = Math.abs(POS_INDEX[pos] - POS_INDEX[slot]);
    if (d < bestDist) {
      best = pos;
      bestDist = d;
    }
  }
  return best;
}

/**
 * Out-of-position severity for slotting `player` at `slot`.
 * 0 when the slot is listed; otherwise (0, 1] by spectrum distance
 * from the NEAREST listed position: 1 step (SG at PG/SF) = 0.25,
 * 2 steps = 0.55, 3 steps = 0.8, 4 steps (PG at C) = 1.0.
 */
export function slotPenalty(player: Player, slot: Position): number {
  if (player.positions.includes(slot)) return 0;
  const near = nearestListed(player, slot);
  return STEP_SEVERITY[Math.abs(POS_INDEX[near] - POS_INDEX[slot])];
}

/**
 * Attributes for a player as actually slotted, including the
 * out-of-position tax. In-position this is exactly deriveAttributes
 * (zero penalty — all-natural rosters are unaffected). Off-position
 * the player keeps his natural game (skills derive at his nearest
 * listed position; a center asked to bring the ball up doesn't grow
 * a guard's shot diet) but pays the severity-scaled tax, and
 * `attrs.position` reports the SLOT so downstream role logic
 * (synergy archetypes, UI) sees the role he is filling.
 */
export function slottedAttributes(p: Player, slot: Position): PlayerAttributes {
  const severity = slotPenalty(p, slot);
  if (severity === 0) return deriveAttributes(p, slot);
  const a = deriveAttributes(p, nearestListed(p, slot));
  return {
    ...a,
    position: slot,
    scoringEfficiency: a.scoringEfficiency * (1 - PEN_SCORING * severity),
    playmaking: a.playmaking * (1 - PEN_PLAYMAKING * severity),
    offRebRate: a.offRebRate * (1 - PEN_REB_DEF * severity),
    defRebRate: a.defRebRate * (1 - PEN_REB_DEF * severity),
    rimProtection: a.rimProtection * (1 - PEN_REB_DEF * severity),
    perimeterDefense: a.perimeterDefense * (1 - PEN_REB_DEF * severity),
    turnoverRate: clamp(a.turnoverRate * (1 + PEN_TURNOVER * severity), 0.08, 0.25),
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
