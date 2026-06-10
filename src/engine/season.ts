// 82-game season simulation. Deterministic per (roster, seed).

import type { GameResult, Roster, SeasonResult } from "../types";
import { createRng, randInt, type RNG } from "./rng";
import { teamStrength } from "./strength";

type Tier = GameResult["opponentTier"];

// Tier mix over an 82-game schedule and baseline strengths.
const TIERS: { tier: Tier; cum: number; strength: number }[] = [
  { tier: "tanking", cum: 0.2, strength: 88 },
  { tier: "average", cum: 0.6, strength: 100 },
  { tier: "playoff", cum: 0.87, strength: 110 },
  { tier: "contender", cum: 1.0, strength: 119 },
];

// Calibration constants (validated in __tests__/engine.test.ts).
const TEMPERATURE = 7.6; // logistic temperature for win probability
const OPP_NOISE_SD = 3.5; // per-game opponent form swing
const SCORE_NOISE_SD = 6.5; // per-game scoring swing

const logistic = (x: number) => 1 / (1 + Math.exp(-x));
const clamp = (x: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, x));

/** Standard normal via Box-Muller (always consumes exactly 2 draws). */
function gauss(rng: RNG): number {
  const u = Math.max(rng(), 1e-12);
  const v = rng();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export function simulateSeason(roster: Roster, seed: string): SeasonResult {
  const rating = teamStrength(roster);
  const rng = createRng(`${seed}:season`);

  const games: GameResult[] = [];
  let wins = 0;
  let losses = 0;
  let firstLoss: number | null = null;

  for (let gameNo = 1; gameNo <= 82; gameNo++) {
    // Opponent tier + nightly form.
    const roll = rng();
    const tier = TIERS.find((t) => roll < t.cum) ?? TIERS[TIERS.length - 1];
    const oppStrength = tier.strength + gauss(rng) * OPP_NOISE_SD;

    const p = logistic((rating.overall - oppStrength) / TEMPERATURE);
    const win = rng() < p;

    // Plausible box score around our expected offense.
    const teamScore = clamp(
      Math.round(rating.offense + gauss(rng) * SCORE_NOISE_SD),
      88,
      152,
    );
    const margin = randInt(rng, 1, 16);
    const oppScore = win
      ? Math.max(80, teamScore - margin)
      : Math.min(160, teamScore + margin);

    if (win) wins++;
    else {
      losses++;
      if (firstLoss === null) firstLoss = gameNo;
    }

    games.push({ gameNo, win, teamScore, oppScore, opponentTier: tier.tier });
  }

  return { wins, losses, games, rating, firstLoss };
}
