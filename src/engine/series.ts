// Head-to-head best-of-7: thin orchestrator over the possession
// model. Playoff modifiers: pace -4%, star usage +8% (handled in
// game.ts). Home court follows the 2-2-1-1-1 pattern and is granted
// to the higher-rated team regardless of slot, so swapping a/b with
// the same seed carries no slot bias. Deterministic per seed.

import type { Roster, SeriesGame, SeriesResult } from "../types";
import { createRng } from "./rng";
import { buildLineup } from "./model/lineup";
import { simulateGame } from "./model/game";
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

export function simulateSeries(a: Roster, b: Roster, seed: string): SeriesResult {
  const la = buildLineup(a);
  const lb = buildLineup(b);
  // Higher overall earns home court (slot-independent on swap).
  const holder: "a" | "b" =
    teamStrength(b).overall > teamStrength(a).overall ? "b" : "a";
  const rng = createRng(`${seed}:series`);

  const games: SeriesGame[] = [];
  let aWins = 0;
  let bWins = 0;
  let gameNo = 0;

  while (aWins < 4 && bWins < 4) {
    gameNo++;
    const holderHome = HOLDER_HOME[gameNo - 1];
    const home: "a" | "b" =
      holderHome === (holder === "a") ? "a" : "b";

    const raw = simulateGame(la, lb, rng, { home, playoff: true });
    const aTakesIt = raw.aScore > raw.bScore;
    const [winScore, loseScore] = aTakesIt
      ? fitScores(raw.aScore, raw.bScore)
      : fitScores(raw.bScore, raw.aScore);

    const aScore = aTakesIt ? winScore : loseScore;
    const bScore = aTakesIt ? loseScore : winScore;
    if (aTakesIt) aWins++;
    else bWins++;

    games.push({ gameNo, aScore, bScore });
  }

  return { aWins, bWins, games, winner: aWins > bWins ? "a" : "b" };
}
