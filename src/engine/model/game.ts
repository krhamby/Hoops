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
  /**
   * Track per-player attribution (pts/reb/ast) for box scores.
   * Off by default: the 82-game season skips it for perf; playoff
   * series turn it on. Tracking consumes extra rng draws, so the
   * same seed yields different (but still deterministic) games
   * with and without it.
   */
  box?: boolean;
}

/** Per-player attribution for one game, indexed by lineup slot. */
export interface RawBoxLine {
  pts: number;
  reb: number;
  ast: number;
}

export interface GameScore {
  aScore: number;
  bScore: number;
  /** Present only when GameOptions.box is set (5 slots, lineup order). */
  aBox?: RawBoxLine[];
  bBox?: RawBoxLine[];
}

const HOME_EDGE = 0.0075; // ±0.75% efficiency each way ≈ +1.5 net pts
const FATIGUE_PENALTY = 0.02; // base b2b efficiency hit, scaled by stamina
const OT_POSSESSIONS = 9; // ~5-minute overtime period per side
const FORM_SD = 0.06; // nightly hot/cold per player
const TEAM_FORM_SD = 0.024; // correlated team-level night (travel, scheme)
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
  // ---- box-score attribution (only consulted when tracking) ----
  /** Offensive / defensive rebound attribution weights. */
  orbW: number[];
  drbW: number[];
  /** Assist attribution weights (playmaking). */
  astW: number[];
  /** P(a made basket was assisted), from team passing quality. */
  assistP: number;
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
  const teamForm = clamp(1 + gauss(rng) * TEAM_FORM_SD * formSd, 0.9, 1.1);
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
  // Box-score attribution weights. Small epsilons keep the picks
  // well-defined (≈uniform) even for zero-stat lineups.
  const orbW = m.players.map((p) => p.attrs.offRebRate + 0.25);
  const drbW = m.players.map((p) => p.attrs.defRebRate + 0.25);
  const astW = m.players.map((p) => p.attrs.playmaking + 0.15);
  // Team passing quality sets how many makes are assisted: an elite
  // passing network ≈ 70% of FGs, an iso-heavy five ≈ low 40s.
  const assistP = clamp(0.6 + 5.5 * m.passBoost, 0.42, 0.72);
  return {
    m,
    form,
    effMul: effMulBase * teamForm,
    weights,
    clutchWeights,
    orbW,
    drbW,
    astW,
    assistP,
  };
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

/** Per-side stat sheets for the possession to write into. */
interface BoxTracker {
  off: RawBoxLine[];
  def: RawBoxLine[];
}

/**
 * One offensive possession (incl. putback chains). Returns points.
 *
 * When `box` is supplied, every point is attributed to exactly one
 * offensive player (lines always sum to the team score), rebounds go
 * to weight-picked players on the boards, and made baskets roll for
 * an assist among the scorer's four teammates. Attribution consumes
 * extra rng draws, so tracked and untracked games diverge — each
 * mode stays fully deterministic per seed.
 */
function possession(
  off: SideState,
  def: SideState,
  rng: RNG,
  clutch: boolean,
  box?: BoxTracker,
): number {
  // Assist roll: P(assisted) from team passing quality, credited
  // among the other four weighted by playmaking (never the scorer).
  const assist = (scorer: number) => {
    if (!box) return;
    if (rng() >= off.assistP) return;
    const w = off.astW.slice();
    w[scorer] = 0;
    box.off[pickWeighted(rng, w)].ast++;
  };
  // Defensive board for the side currently defending.
  const defBoard = () => {
    if (box) box.def[pickWeighted(rng, def.drbW)].reb++;
  };
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
  const eff = clamp(lp.effEfficiency + off.m.passBoost, 0.38, 0.72);
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
    a.ftRate * (zone === "rim" ? 0.46 : zone === "mid" ? 0.18 : 0.05);
  if (rng() < foulP) {
    let pts = 0;
    for (let i = 0; i < shotPts; i++) if (rng() < a.ftSkill) pts++;
    if (box) box.off[idx].pts += pts;
    return pts;
  }

  // --- resolve the shot ---
  if (rng() < p) {
    let pts: number = shotPts;
    // And-1: finishing through contact at the rim.
    if (zone === "rim" && rng() < 0.07 && rng() < a.ftSkill) pts++;
    if (box) box.off[idx].pts += pts;
    assist(idx);
    return pts;
  }

  // --- offensive rebound -> one putback chance ---
  const orbP = clamp(off.m.offReb * (1.44 - def.m.defReb), 0.1, 0.4);
  if (rng() < orbP) {
    // Attribute the board (crashers by offensive rebounding weight).
    let rebIdx = -1;
    if (box) {
      rebIdx = pickWeighted(rng, off.orbW);
      box.off[rebIdx].reb++;
    }
    const putback = clamp(
      0.55 * off.m.spacing * def.m.oppRimMod * off.effMul,
      0.2,
      0.75,
    );
    if (rng() < putback) {
      // Putback: the rebounder scores it, unassisted.
      if (box) box.off[rebIdx].pts += 2;
      return 2;
    }
    // Second-chance kick-out three for spaced lineups.
    if (off.m.spacing > 1 && rng() < 0.18) {
      const shooterIdx = pickWeighted(rng, off.weights);
      const shooter = off.m.players[shooterIdx];
      if (
        shooter.attrs.threeRate > 0 &&
        rng() < threeMakeP(shooter.effEfficiency, shooter.attrs.threeSkill)
      ) {
        if (box) box.off[shooterIdx].pts += 3;
        assist(shooterIdx);
        return 3;
      }
    }
    // Putback chain died -> the defense finally secures it.
    defBoard();
    return 0;
  }
  // Clean miss -> defensive rebound.
  defBoard();
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

  // Back-to-back hit scaled by roster durability: an iron-man five
  // (stamina ~1) shrugs most of it off, a low-minutes five feels it.
  const fatigueHit = (m: LineupModel) => {
    const avgStamina =
      m.players.reduce((s, p) => s + p.attrs.stamina, 0) / m.players.length;
    return FATIGUE_PENALTY * clamp(1.7 - avgStamina, 0.6, 1.2);
  };
  const effA =
    (1 + (opts.home === "a" ? HOME_EDGE : opts.home === "b" ? -HOME_EDGE : 0)) *
    (opts.fatigueA ? 1 - fatigueHit(a) : 1);
  const effB =
    (1 + (opts.home === "b" ? HOME_EDGE : opts.home === "a" ? -HOME_EDGE : 0)) *
    (opts.fatigueB ? 1 - fatigueHit(b) : 1);

  const sideA = buildSide(a, rng, effA, opts.formSdA ?? 1, playoff);
  const sideB = buildSide(b, rng, effB, opts.formSdB ?? 1, playoff);

  // Per-player attribution sheets (box mode only; the season skips
  // the allocation and the extra rng draws entirely).
  const newLines = (m: LineupModel): RawBoxLine[] =>
    m.players.map(() => ({ pts: 0, reb: 0, ast: 0 }));
  const aBox = opts.box ? newLines(a) : undefined;
  const bBox = opts.box ? newLines(b) : undefined;
  const trackA = aBox && bBox ? { off: aBox, def: bBox } : undefined;
  const trackB = aBox && bBox ? { off: bBox, def: aBox } : undefined;

  let aScore = 0;
  let bScore = 0;
  for (let i = 0; i < possessions; i++) {
    const left = possessions - i;
    const clutch =
      left <= CLUTCH_WINDOW && Math.abs(aScore - bScore) <= CLUTCH_MARGIN;
    aScore += possession(sideA, sideB, rng, clutch, trackA);
    bScore += possession(sideB, sideA, rng, clutch, trackB);
  }

  // Overtime: full ~5-minute periods (not sudden death) until the
  // tie breaks; possessions go clutch whenever the margin is tight.
  while (aScore === bScore) {
    for (let i = 0; i < OT_POSSESSIONS; i++) {
      const clutch = Math.abs(aScore - bScore) <= CLUTCH_MARGIN;
      aScore += possession(sideA, sideB, rng, clutch, trackA);
      bScore += possession(sideB, sideA, rng, clutch, trackB);
    }
  }

  return aBox && bBox ? { aScore, bScore, aBox, bBox } : { aScore, bScore };
}
