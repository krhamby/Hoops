// ============================================================
// Possession-by-possession game engine. Two LineupModels trade
// possessions: turnover checks, usage-weighted shot creation,
// zone selection bent by the defense, makes/misses, shooting
// fouls, and-1s, putbacks, nightly hot/cold form, home court,
// back-to-back fatigue, and a clutch regime late in close games.
// Fully deterministic given the supplied RNG.
// ============================================================

import type { RNG } from "../rng";
import {
  midMakeP,
  rimMakeP,
  threeMakeP,
  type LineupModel,
  type LineupPlayer,
} from "./lineup";

const clamp = (x: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, x));

/** Standard normal via Box-Muller (always consumes exactly 2 draws). */
export function gauss(rng: RNG): number {
  const u = Math.max(rng(), 1e-12);
  const v = rng();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export interface GameOptions {
  /** Which side has home court ("a", "b", or null for neutral). */
  home?: "a" | "b" | null;
  /** Back-to-back fatigue flags. */
  fatigueA?: boolean;
  fatigueB?: boolean;
  /** Playoff mode: -4% pace, +8% star usage concentration. */
  playoff?: boolean;
  /** Per-team form volatility multiplier (streaky opponents > 1). */
  formSdA?: number;
  formSdB?: number;
}

export interface GameScore {
  aScore: number;
  bScore: number;
}

const HOME_EDGE = 0.0075; // ±0.75% efficiency each way ≈ +1.5 net pts
const FATIGUE_PENALTY = 0.02; // -2% efficiency on the back end of a b2b
const FORM_SD = 0.06; // nightly hot/cold per player
const TEAM_FORM_SD = 0.032; // correlated team-level night (travel, scheme)
const CLUTCH_WINDOW = 8; // final possessions where stars take over
const CLUTCH_MARGIN = 5;

interface SideState {
  m: LineupModel;
  /** Per-player nightly form factor. */
  form: number[];
  /** Team-wide efficiency multiplier (form * home * fatigue). */
  effMul: number;
  /** Usage weights for creator selection (playoff mode pre-applied). */
  weights: number[];
  clutchWeights: number[];
}

function buildSide(
  m: LineupModel,
  rng: RNG,
  effMulBase: number,
  formSd: number,
  playoff: boolean,
): SideState {
  const form: number[] = [];
  for (let i = 0; i < m.players.length; i++) {
    form.push(clamp(1 + gauss(rng) * FORM_SD * formSd, 0.8, 1.2));
  }
  const teamForm = clamp(1 + gauss(rng) * TEAM_FORM_SD * formSd, 0.88, 1.12);
  const weights = m.players.map((p, i) => {
    let w = p.effUsage * form[i];
    if (playoff) {
      // Star usage +8%: rotations shorten, the best players take over.
      w *= 1 + 0.08 * clamp(p.attrs.clutch, 0, 1);
    }
    return w;
  });
  const clutchWeights = m.players.map(
    (p, i) => weights[i] * (0.5 + 1.1 * p.attrs.clutch),
  );
  return { m, form, effMul: effMulBase * teamForm, weights, clutchWeights };
}

function pickWeighted(rng: RNG, weights: number[]): number {
  let total = 0;
  for (const w of weights) total += w;
  let r = rng() * total;
  for (let i = 0; i < weights.length; i++) {
    r -= weights[i];
    if (r <= 0) return i;
  }
  return weights.length - 1;
}

/**
 * One offensive possession (incl. putback chains). Returns points.
 */
function possession(
  off: SideState,
  def: SideState,
  rng: RNG,
  clutch: boolean,
): number {
  // --- turnover: own sloppiness vs opponent ball pressure ---
  const toP = clamp(off.m.teamTOBase * def.m.ballPressure, 0.06, 0.24);
  if (rng() < toP) return 0;

  // --- shot creator from squeezed usage (clutch: stars take over) ---
  const idx = pickWeighted(rng, clutch ? off.clutchWeights : off.weights);
  const lp: LineupPlayer = off.m.players[idx];
  const a = lp.attrs;

  // --- shot zone, bent by the defense (a great anchor deters rim
  //     attempts; hard closeouts push teams off the line) ---
  const wRim = a.rimRate * (0.55 + 0.45 * def.m.oppRimMod);
  const wMid = a.midRate;
  const wThree = a.threeRate * (0.6 + 0.4 * def.m.oppThreeMod);
  const zoneRoll = rng() * (wRim + wMid + wThree);
  const zone: "rim" | "mid" | "three" =
    zoneRoll < wRim ? "rim" : zoneRoll < wRim + wMid ? "mid" : "three";

  // --- make probability ---
  // Squeezed efficiency + passing network, then spacing, defense,
  // nightly form, and game-state multipliers. Clutch tightens
  // variance: form is pulled halfway back to neutral.
  const formF = clutch ? 1 + (off.form[idx] - 1) * 0.5 : off.form[idx];
  const eff = clamp(lp.effEfficiency + off.m.passBoost, 0.38, 0.7);
  let p: number;
  let shotPts: 2 | 3;
  if (zone === "rim") {
    p = rimMakeP(eff) * off.m.spacing * def.m.oppRimMod;
    shotPts = 2;
  } else if (zone === "mid") {
    p = midMakeP(eff) * (0.5 + 0.5 * off.m.spacing) * def.m.oppMidMod;
    shotPts = 2;
  } else {
    p = threeMakeP(eff, a.threeSkill) * def.m.oppThreeMod;
    shotPts = 3;
  }
  p = clamp(p * formF * off.effMul, 0.05, 0.85);

  // --- free throw branch: shooting foul before the release ---
  const foulP =
    a.ftRate * (zone === "rim" ? 0.42 : zone === "mid" ? 0.16 : 0.05);
  if (rng() < foulP) {
    let pts = 0;
    for (let i = 0; i < shotPts; i++) if (rng() < a.ftSkill) pts++;
    return pts;
  }

  // --- resolve the shot ---
  if (rng() < p) {
    let pts: number = shotPts;
    // And-1: finishing through contact at the rim.
    if (zone === "rim" && rng() < 0.07 && rng() < a.ftSkill) pts++;
    return pts;
  }

  // --- offensive rebound -> one putback chance ---
  const orbP = clamp(off.m.offReb * (1.44 - def.m.defReb), 0.1, 0.4);
  if (rng() < orbP) {
    const putback = clamp(
      0.52 * off.m.spacing * def.m.oppRimMod * off.effMul,
      0.2,
      0.75,
    );
    if (rng() < putback) return 2;
    // Second-chance kick-out three for spaced lineups.
    if (off.m.spacing > 1 && rng() < 0.18) {
      const shooter = off.m.players[pickWeighted(rng, off.weights)];
      if (
        shooter.attrs.threeRate > 0 &&
        rng() < threeMakeP(shooter.effEfficiency, shooter.attrs.threeSkill)
      ) {
        return 3;
      }
    }
  }
  return 0;
}

/** Simulate one game. Never returns a tie (overtime possessions). */
export function simulateGame(
  a: LineupModel,
  b: LineupModel,
  rng: RNG,
  opts: GameOptions = {},
): GameScore {
  const playoff = opts.playoff ?? false;
  const paceMul = playoff ? 0.96 : 1;
  const basePoss = ((a.pace + b.pace) / 2) * paceMul;
  const possessions = Math.round(clamp(basePoss + gauss(rng) * 2.6, 90, 106));

  const effA =
    (1 + (opts.home === "a" ? HOME_EDGE : opts.home === "b" ? -HOME_EDGE : 0)) *
    (opts.fatigueA ? 1 - FATIGUE_PENALTY : 1);
  const effB =
    (1 + (opts.home === "b" ? HOME_EDGE : opts.home === "a" ? -HOME_EDGE : 0)) *
    (opts.fatigueB ? 1 - FATIGUE_PENALTY : 1);

  const sideA = buildSide(a, rng, effA, opts.formSdA ?? 1, playoff);
  const sideB = buildSide(b, rng, effB, opts.formSdB ?? 1, playoff);

  let aScore = 0;
  let bScore = 0;
  for (let i = 0; i < possessions; i++) {
    const left = possessions - i;
    const clutch =
      left <= CLUTCH_WINDOW && Math.abs(aScore - bScore) <= CLUTCH_MARGIN;
    aScore += possession(sideA, sideB, rng, clutch);
    bScore += possession(sideB, sideA, rng, clutch);
  }

  // Overtime: alternate single possessions until the tie breaks.
  while (aScore === bScore) {
    aScore += possession(sideA, sideB, rng, true);
    bScore += possession(sideB, sideA, rng, true);
  }

  return { aScore, bScore };
}
