// Head-to-head best-of-7 series between two drafted rosters.
// Deterministic per seed. Both sides draw their own per-game form
// noise, so swapping a/b with the same seed carries no slot bias.

import type { Roster, SeriesGame, SeriesResult } from "../types";
import { createRng, randInt, type RNG } from "./rng";
import { teamStrength } from "./strength";

// Smaller temperature than the season: the better team usually wins,
// but upsets happen in close matchups.
const TEMPERATURE = 5;
const FORM_NOISE_SD = 3.5;
const SCORE_NOISE_SD = 5.5;

const logistic = (x: number) => 1 / (1 + Math.exp(-x));
const clamp = (x: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, x));

/** Standard normal via Box-Muller (always consumes exactly 2 draws). */
function gauss(rng: RNG): number {
  const u = Math.max(rng(), 1e-12);
  const v = rng();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export function simulateSeries(a: Roster, b: Roster, seed: string): SeriesResult {
  const ratingA = teamStrength(a);
  const ratingB = teamStrength(b);
  const rng = createRng(`${seed}:series`);

  const games: SeriesGame[] = [];
  let aWins = 0;
  let bWins = 0;
  let gameNo = 0;

  while (aWins < 4 && bWins < 4) {
    gameNo++;
    // Nightly form for BOTH sides.
    const formA = gauss(rng) * FORM_NOISE_SD;
    const formB = gauss(rng) * FORM_NOISE_SD;
    const pA = logistic(
      (ratingA.overall + formA - (ratingB.overall + formB)) / TEMPERATURE,
    );
    const aTakesIt = rng() < pA;

    // Plausible playoff scores in the 90-135 band.
    const winnerOffense = aTakesIt ? ratingA.offense : ratingB.offense;
    const winnerScore = clamp(
      Math.round(winnerOffense + gauss(rng) * SCORE_NOISE_SD),
      95,
      135,
    );
    const margin = randInt(rng, 1, 15);
    const loserScore = clamp(winnerScore - margin, 90, winnerScore - 1);

    const aScore = aTakesIt ? winnerScore : loserScore;
    const bScore = aTakesIt ? loserScore : winnerScore;
    if (aTakesIt) aWins++;
    else bWins++;

    games.push({ gameNo, aScore, bScore });
  }

  return { aWins, bWins, games, winner: aWins > bWins ? "a" : "b" };
}
