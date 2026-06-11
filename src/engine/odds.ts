// Matchup odds: Monte-Carlo estimate of how often roster A beats
// roster B, used by the UI to explain series results ("Kevin won as a
// 33% underdog"). Deterministic (fixed seed set) so every client
// shows identical odds for the same pair of rosters.

import type { Roster } from "../types";
import { simulateSeries } from "./series";

export interface MatchupOdds {
  /** Fraction of best-of-7 series roster A wins (0..1). */
  aSeriesWinPct: number;
  /** Average absolute final-score margin across simulated games. */
  avgMargin: number;
}

/**
 * Estimate series odds by replaying the matchup across `n` fixed
 * seeds. n=120 keeps this under ~40ms — fine for a results screen
 * (and the UI memoizes per roster pair).
 */
export function matchupOdds(a: Roster, b: Roster, n = 120): MatchupOdds {
  let aWins = 0;
  let games = 0;
  let margin = 0;
  for (let i = 0; i < n; i++) {
    const s = simulateSeries(a, b, `odds-${i}`);
    if (s.winner === "a") aWins++;
    for (const g of s.games) {
      games++;
      margin += Math.abs(g.aScore - g.bScore);
    }
  }
  return {
    aSeriesWinPct: aWins / n,
    avgMargin: games > 0 ? margin / games : 0,
  };
}
