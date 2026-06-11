// Head-to-head best-of-7: thin orchestrator over the possession
// model. Playoff modifiers: pace -4%, star usage +8% (handled in
// game.ts). Home court follows the 2-2-1-1-1 pattern and is granted
// to the higher-rated team regardless of slot, so swapping a/b with
// the same seed carries no slot bias. Deterministic per seed.
//
// Every game carries per-player box scores (aBox/bBox, PG..C slot
// order) built from the possession model's attribution tracking.
// Lines are recomputed alongside the game itself — SeriesGame is
// never persisted, so the shape can evolve freely.

import {
  POSITIONS,
  type BoxLine,
  type Position,
  type Roster,
  type SeriesGame,
  type SeriesResult,
} from "../types";
import { createRng } from "./rng";
import { buildLineup } from "./model/lineup";
import { simulateGame, type RawBoxLine } from "./model/game";
import { teamStrength } from "./strength";

// Home games for the home-court holder under 2-2-1-1-1.
const HOLDER_HOME = [true, true, false, false, true, false, true];

const clamp = (x: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, x));

/** Squeeze raw sim scores into the playoff 90-135 display band
 *  while preserving the winner and (mostly) the margin. */
function fitScores(winner: number, loser: number): [number, number] {
  const w = clamp(winner, 92, 135);
  const l = clamp(w - (winner - loser), 90, w - 1);
  return [w, l];
}

/** Roster slot identities in PG,SG,SF,PF,C order (matching lineup order). */
function slotIds(r: Roster): { name: string; pos: Position }[] {
  return POSITIONS.map((pos) => ({ name: r[pos]?.name ?? "Replacement", pos }));
}

/**
 * Rescale per-player points so they sum exactly to the (band-fitted)
 * team score. Usually a no-op — fitScores only bites on outlier raw
 * scores. Deterministic: proportional scale, then rounding drift is
 * settled on players in descending-points order.
 */
function fitPts(raw: number[], target: number): number[] {
  const total = raw.reduce((s, x) => s + x, 0);
  if (total === target) return raw.slice();
  if (total <= 0) {
    // Degenerate (shouldn't happen in practice): split target evenly.
    const base = Math.floor(target / raw.length);
    const out = raw.map(() => base);
    for (let i = 0; i < target - base * raw.length; i++) out[i]++;
    return out;
  }
  const pts = raw.map((x) => Math.round((x * target) / total));
  let diff = target - pts.reduce((s, x) => s + x, 0);
  const order = pts
    .map((_, i) => i)
    .sort((x, y) => pts[y] - pts[x] || x - y);
  for (let k = 0; diff !== 0; k++) {
    const i = order[k % order.length];
    if (diff > 0) {
      pts[i]++;
      diff--;
    } else if (pts[i] > 0) {
      pts[i]--;
      diff++;
    }
  }
  return pts;
}

/** Merge slot identities with raw attribution, pts fitted to `score`. */
function toBox(
  slots: { name: string; pos: Position }[],
  raw: RawBoxLine[],
  score: number,
): BoxLine[] {
  const pts = fitPts(
    raw.map((l) => l.pts),
    score,
  );
  return slots.map((s, i) => ({
    name: s.name,
    pos: s.pos,
    pts: pts[i],
    reb: raw[i].reb,
    ast: raw[i].ast,
  }));
}

export function simulateSeries(a: Roster, b: Roster, seed: string): SeriesResult {
  const la = buildLineup(a);
  const lb = buildLineup(b);
  const slotsA = slotIds(a);
  const slotsB = slotIds(b);
  // Higher overall earns home court (slot-independent on swap).
  // A dead-even rating means neither side gets the edge: a neutral
  // floor, instead of silently favoring whoever landed in slot "a".
  const oa = teamStrength(a).overall;
  const ob = teamStrength(b).overall;
  const holder: "a" | "b" | null = ob > oa ? "b" : oa > ob ? "a" : null;
  const rng = createRng(`${seed}:series`);

  const games: SeriesGame[] = [];
  let aWins = 0;
  let bWins = 0;
  let gameNo = 0;

  while (aWins < 4 && bWins < 4) {
    gameNo++;
    const holderHome = HOLDER_HOME[gameNo - 1];
    const home: "a" | "b" | null =
      holder === null ? null : holderHome === (holder === "a") ? "a" : "b";

    const raw = simulateGame(la, lb, rng, { home, playoff: true, box: true });
    const aTakesIt = raw.aScore > raw.bScore;
    const [winScore, loseScore] = aTakesIt
      ? fitScores(raw.aScore, raw.bScore)
      : fitScores(raw.bScore, raw.aScore);

    const aScore = aTakesIt ? winScore : loseScore;
    const bScore = aTakesIt ? loseScore : winScore;
    if (aTakesIt) aWins++;
    else bWins++;

    games.push({
      gameNo,
      aScore,
      bScore,
      aBox: toBox(slotsA, raw.aBox!, aScore),
      bBox: toBox(slotsB, raw.bBox!, bScore),
    });
  }

  return { aWins, bWins, games, winner: aWins > bWins ? "a" : "b" };
}
