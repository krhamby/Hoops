// ============================================================
// Era normalization. Raw per-game stat lines are *not* comparable
// across decades: the 1960s league played ~125 possessions a game
// with low shooting efficiency (huge counting stats, many missed
// shots to rebound), while the 1990s played ~93. Everything the
// model consumes is first converted to pace-adjusted per-75-
// possession values in a common (late-2010s) reference context.
// ============================================================

import type { Decade } from "../../types";

export interface EraContext {
  /** League average possessions per team per game. */
  pace: number;
  /** League average offensive rating (points per 100 possessions). */
  leagueORtg: number;
  /**
   * Three-point environment, 0..1. Zero before the 1980 introduction
   * of the line, low through the 80s, rising 90s/2000s, high today.
   */
  threeEnv: number;
  /** League average points per team per game (≈ pace * ORtg / 100). */
  leaguePPG: number;
}

/** Reference context everything is normalized into (late 2010s-ish). */
export const REF_ORTG = 108;
export const REF_PACE = 98;

export const ERA_TABLE: Record<Decade, EraContext> = {
  "1950s": { pace: 105, leagueORtg: 86, threeEnv: 0, leaguePPG: 90.3 },
  "1960s": { pace: 125, leagueORtg: 92, threeEnv: 0, leaguePPG: 115.0 },
  "1970s": { pace: 107, leagueORtg: 96, threeEnv: 0, leaguePPG: 102.7 },
  "1980s": { pace: 101, leagueORtg: 106, threeEnv: 0.15, leaguePPG: 107.1 },
  "1990s": { pace: 93, leagueORtg: 105, threeEnv: 0.35, leaguePPG: 97.7 },
  "2000s": { pace: 91, leagueORtg: 104, threeEnv: 0.5, leaguePPG: 94.6 },
  "2010s": { pace: 96, leagueORtg: 107, threeEnv: 0.8, leaguePPG: 102.7 },
  "2020s": { pace: 99, leagueORtg: 113, threeEnv: 1.0, leaguePPG: 111.9 },
};

export function eraContext(decade: Decade): EraContext {
  return ERA_TABLE[decade];
}

/** Plain pace adjustment: per-game value -> per-75-possessions value. */
export function per75(value: number, decade: Decade): number {
  return value * (75 / ERA_TABLE[decade].pace);
}

/**
 * Scoring value adjustment: pace-adjust to per-75, then softly
 * normalize for the league scoring environment (a point in a
 * low-efficiency era bought less win value than its raw count
 * suggests was hard-earned; sqrt keeps the correction gentle).
 * A 1960s 30 ppg lands near a modern ~24-26 ppg in adjusted value.
 */
export function adjustedScoring(pts: number, decade: Decade): number {
  const ctx = ERA_TABLE[decade];
  return pts * (75 / ctx.pace) * Math.sqrt(REF_ORTG / ctx.leagueORtg);
}

/**
 * Rebound adjustment: pace-adjust, then deflate further for eras with
 * many missed shots (more rebounds were simply *available*; Wilt-era
 * 25+ rpg totals shrink toward modern-comparable values).
 */
export function adjustedRebounds(reb: number, decade: Decade): number {
  const ctx = ERA_TABLE[decade];
  return reb * (75 / ctx.pace) * Math.sqrt(ctx.leagueORtg / REF_ORTG);
}

/** Assists/steals/blocks: pure pace adjustment is enough. */
export function adjustedRate(value: number, decade: Decade): number {
  return per75(value, decade);
}
