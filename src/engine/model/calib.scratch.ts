// Scratch calibration harness (deleted before finishing).
// Run: npx vite-node src/engine/model/calib.scratch.ts

import type { Decade, Player, PlayerStats, Position, Roster } from "../../types";
import { POSITIONS } from "../../types";
import { teamStrength } from "../strength";
import { simulateSeason } from "../season";
import { simulateSeries } from "../series";
import { buildLineup } from "./lineup";

function makePlayer(name: string, pos: Position, stats: PlayerStats, decade: Decade = "1990s"): Player {
  return {
    id: `${name.toLowerCase().replace(/\s+/g, "-")}-test-${decade}`,
    name, franchiseId: "test", decade, positions: [pos], stats, years: "x",
  };
}
function makeRoster(statsByPos: Record<Position, PlayerStats>, decade: Decade = "1990s"): Roster {
  const roster = {} as Roster;
  for (const pos of POSITIONS) roster[pos] = makePlayer(`P ${pos}`, pos, statsByPos[pos], decade);
  return roster;
}

const SUPERTEAM = makeRoster({
  PG: { pts: 28, reb: 6.0, ast: 9.5, stl: 2.1, blk: 0.3 },
  SG: { pts: 30, reb: 6.3, ast: 5.4, stl: 2.3, blk: 0.8 },
  SF: { pts: 27, reb: 7.5, ast: 7.2, stl: 1.6, blk: 0.8 },
  PF: { pts: 26, reb: 12.5, ast: 4.0, stl: 1.0, blk: 1.8 },
  C: { pts: 28, reb: 13.0, ast: 3.5, stl: 0.7, blk: 2.8 },
});
const SCRUB_TEAM = makeRoster({
  PG: { pts: 12, reb: 3.0, ast: 4.5, stl: 0.9, blk: 0.1 },
  SG: { pts: 13, reb: 3.5, ast: 2.5, stl: 0.8, blk: 0.2 },
  SF: { pts: 12, reb: 4.5, ast: 2.0, stl: 0.8, blk: 0.4 },
  PF: { pts: 11, reb: 6.0, ast: 1.5, stl: 0.5, blk: 0.6 },
  C: { pts: 12, reb: 6.5, ast: 1.0, stl: 0.4, blk: 0.9 },
});
const WEAK_TEAM = makeRoster({
  PG: { pts: 8, reb: 2.0, ast: 3.0, stl: 0.6, blk: 0.1 },
  SG: { pts: 9, reb: 2.5, ast: 1.5, stl: 0.5, blk: 0.1 },
  SF: { pts: 8, reb: 3.0, ast: 1.5, stl: 0.5, blk: 0.3 },
  PF: { pts: 7, reb: 4.5, ast: 1.0, stl: 0.4, blk: 0.4 },
  C: { pts: 8, reb: 5.0, ast: 0.8, stl: 0.3, blk: 0.7 },
});
// Five ball-dominant volume scorers, no playmaking, no defense.
const BALL_DOMINANT = makeRoster({
  PG: { pts: 28, reb: 4.0, ast: 2.0, stl: 0.6, blk: 0.1 },
  SG: { pts: 28, reb: 4.0, ast: 1.8, stl: 0.6, blk: 0.1 },
  SF: { pts: 28, reb: 4.5, ast: 1.5, stl: 0.5, blk: 0.2 },
  PF: { pts: 28, reb: 5.0, ast: 1.2, stl: 0.4, blk: 0.3 },
  C: { pts: 28, reb: 5.5, ast: 1.0, stl: 0.3, blk: 0.4 },
});

function seasonStats(roster: Roster, label: string, n = 200) {
  let total = 0, perfect = 0, ptsSum = 0, gameCount = 0;
  let winScoresIn = 0, winScores = 0;
  let totalsIn = 0;
  const winsArr: number[] = [];
  for (let i = 0; i < n; i++) {
    const r = simulateSeason(roster, `calib-${label}-${i}`);
    total += r.wins;
    winsArr.push(r.wins);
    if (r.wins === 82) perfect++;
    for (const g of r.games) {
      ptsSum += g.teamScore + g.oppScore;
      gameCount++;
      const tot = g.teamScore + g.oppScore;
      if (tot >= 200 && tot <= 240) totalsIn++;
      const w = Math.max(g.teamScore, g.oppScore);
      winScores++;
      if (w >= 95 && w <= 140) winScoresIn++;
    }
  }
  const rating = teamStrength(roster);
  console.log(
    `${label}: meanWins=${(total / n).toFixed(2)} perfect=${((perfect / n) * 100).toFixed(1)}% ` +
    `avgTotal=${(ptsSum / gameCount).toFixed(1)} winScores95-140=${((winScoresIn / winScores) * 100).toFixed(1)}% ` +
    `overall=${rating.overall} off=${rating.offense} def=${rating.defense} chem=${rating.chemistry}`,
  );
  return { mean: total / n, perfect: perfect / n };
}

const m = buildLineup(SUPERTEAM);
console.log(`superteam lineup: demand=${m.usageDemand.toFixed(2)} spacing=${m.spacing.toFixed(3)} pass=${m.passBoost.toFixed(4)} ` +
  `rimMod=${m.oppRimMod.toFixed(3)} threeMod=${m.oppThreeMod.toFixed(3)} oreb=${m.offReb.toFixed(3)} dreb=${m.defReb.toFixed(3)} pace=${m.pace.toFixed(1)} expPPG=${m.expPPG.toFixed(1)}`);
const ms = buildLineup(SCRUB_TEAM);
console.log(`scrub lineup: demand=${ms.usageDemand.toFixed(2)} spacing=${ms.spacing.toFixed(3)} pass=${ms.passBoost.toFixed(4)} expPPG=${ms.expPPG.toFixed(1)}`);
const mb = buildLineup(BALL_DOMINANT);
console.log(`balldom lineup: demand=${mb.usageDemand.toFixed(2)} spacing=${mb.spacing.toFixed(3)} pass=${mb.passBoost.toFixed(4)} expPPG=${mb.expPPG.toFixed(1)}`);

// per-tier diagnostics
import { generateLeague } from "./opponents";
const lg = generateLeague("diag");
const byTier = new Map<string, number[]>();
for (const t of lg.teams) {
  const arr = byTier.get(t.tier) ?? [];
  arr.push(t.lineup.expPPG);
  byTier.set(t.tier, arr);
}
for (const [tier, vals] of byTier) {
  console.log(`NPC ${tier}: expPPG avg=${(vals.reduce((a, b) => a + b) / vals.length).toFixed(1)}`);
}
// superteam per-tier win rate
{
  const tierW = new Map<string, [number, number]>();
  for (let i = 0; i < 100; i++) {
    const r = simulateSeason(SUPERTEAM, `tier-diag-${i}`);
    for (const g of r.games) {
      const [w, n] = tierW.get(g.opponentTier) ?? [0, 0];
      tierW.set(g.opponentTier, [w + (g.win ? 1 : 0), n + 1]);
    }
  }
  for (const [tier, [w, n]] of tierW) {
    console.log(`super vs ${tier}: ${((w / n) * 100).toFixed(1)}% (${n} games)`);
  }
}

const t0 = performance.now();
simulateSeason(SUPERTEAM, "perf-test");
const t1 = performance.now();
console.log(`one season: ${(t1 - t0).toFixed(2)}ms`);

seasonStats(SUPERTEAM, "super");
seasonStats(SCRUB_TEAM, "scrub");
seasonStats(WEAK_TEAM, "weak");
const bd = seasonStats(BALL_DOMINANT, "balldom", 100);

// series both slots
let sA = 0, sB = 0;
for (let i = 0; i < 100; i++) {
  if (simulateSeries(SUPERTEAM, SCRUB_TEAM, `s-${i}`).winner === "a") sA++;
  if (simulateSeries(SCRUB_TEAM, SUPERTEAM, `s-${i}`).winner === "b") sB++;
}
console.log(`series strong win: slotA=${sA}% slotB=${sB}%`);
