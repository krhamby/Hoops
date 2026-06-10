// Team strength model. Turns a starting five's per-game stats into a
// single rating used by the season / series simulators.
//
// Calibration anchors (see __tests__/engine.test.ts):
//   all-time superteam  -> overall ~137-139 (avgs ~78-81 wins, 82-0 ~10-25%)
//   average role players -> overall ~100    (~30-50 wins)
//   weak roster          -> overall <~96    (<30 wins)

import { POSITIONS, type PlayerStats, type Roster, type TeamRating } from "../types";

// Per-stat weights for the base score.
const W_PTS = 1.0;
const W_REB = 1.15;
const W_AST = 1.4;
const W_STL = 2.6;
const W_BLK = 2.2;

// Chemistry ideals.
const IDEAL_AST = 18;
const IDEAL_REB = 38;
const IDEAL_PTS = 95;

const clamp = (x: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, x));
const clamp01 = (x: number) => clamp(x, 0, 1);
const round1 = (x: number) => Math.round(x * 10) / 10;

function totals(roster: Roster): PlayerStats {
  const t: PlayerStats = { pts: 0, reb: 0, ast: 0, stl: 0, blk: 0 };
  for (const pos of POSITIONS) {
    const p = roster[pos];
    if (!p) continue; // treat empty slots as zeros
    t.pts += p.stats.pts;
    t.reb += p.stats.reb;
    t.ast += p.stats.ast;
    t.stl += p.stats.stl;
    t.blk += p.stats.blk;
  }
  return t;
}

export function teamStrength(roster: Roster): TeamRating {
  const t = totals(roster);

  // Weighted blend of everything the five produce per game.
  const base =
    t.pts * W_PTS + t.reb * W_REB + t.ast * W_AST + t.stl * W_STL + t.blk * W_BLK;

  // Chemistry 0..1: balanced rosters (playmaking + boards + enough scoring).
  const playmaking = clamp01(t.ast / IDEAL_AST);
  const rebounding = clamp01(t.reb / IDEAL_REB);
  const scoring = clamp01(t.pts / IDEAL_PTS); // penalizes pts < 95
  const chemistry = clamp01((playmaking + rebounding + scoring) / 3);

  // Expected points per game, squeezed into a plausible 95-135 band.
  const offRaw = t.pts + 0.6 * t.ast;
  const offense = round1(clamp(95 + ((offRaw - 60) / 100) * 40, 95, 135));

  // Points-prevented modifier from stocks + rebounding.
  const defRaw = t.stl * W_STL + t.blk * W_BLK + t.reb * W_REB;
  const defense = round1(clamp(defRaw / 6, 0, 20));

  // Single strength score on the opponent-tier scale (~88..119 for NPCs).
  const overall = round1((77 + 0.16 * base) * (0.85 + 0.3 * chemistry));

  return { offense, defense, overall, chemistry };
}
