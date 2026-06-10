import { describe, expect, it } from "vitest";
import type { Decade, Player, PlayerStats, Position, Roster } from "../../types";
import { POSITIONS } from "../../types";
import { createRng } from "../rng";
import { adjustedScoring, adjustedRebounds } from "../model/era";
import { deriveAttributes } from "../model/attributes";
import { buildLineup, lineupFromAttributes } from "../model/lineup";
import { simulateGame } from "../model/game";
import { generateLeague } from "../model/opponents";
import { simulateSeason } from "../season";
import { simulateSeries } from "../series";
import { teamStrength } from "../strength";

// ---------- synthetic rosters ----------

function makePlayer(
  name: string,
  pos: Position,
  stats: PlayerStats,
  decade: Decade = "1990s",
): Player {
  return {
    id: `${name.toLowerCase().replace(/\s+/g, "-")}-test-${decade}`,
    name,
    franchiseId: "test",
    decade,
    positions: [pos],
    stats,
    years: "1990–1999",
  };
}

function makeRoster(
  statsByPos: Record<Position, PlayerStats>,
  decade: Decade = "1990s",
): Roster {
  const roster = {} as Roster;
  for (const pos of POSITIONS) {
    roster[pos] = makePlayer(`Player ${pos}`, pos, statsByPos[pos], decade);
  }
  return roster;
}

// Balanced all-time five: stars with playmaking, boards, and defense.
const BALANCED_FIVE = makeRoster({
  PG: { pts: 28, reb: 6.0, ast: 9.5, stl: 2.1, blk: 0.3 },
  SG: { pts: 30, reb: 6.3, ast: 5.4, stl: 2.3, blk: 0.8 },
  SF: { pts: 27, reb: 7.5, ast: 7.2, stl: 1.6, blk: 0.8 },
  PF: { pts: 26, reb: 12.5, ast: 4.0, stl: 1.0, blk: 1.8 },
  C: { pts: 28, reb: 13.0, ast: 3.5, stl: 0.7, blk: 2.8 },
});

// Equally talented scorers, zero playmaking / defense / glass work.
const BALL_DOMINANT_FIVE = makeRoster({
  PG: { pts: 28, reb: 4.0, ast: 2.0, stl: 0.6, blk: 0.1 },
  SG: { pts: 28, reb: 4.0, ast: 1.8, stl: 0.6, blk: 0.1 },
  SF: { pts: 28, reb: 4.5, ast: 1.5, stl: 0.5, blk: 0.2 },
  PF: { pts: 28, reb: 5.0, ast: 1.2, stl: 0.4, blk: 0.3 },
  C: { pts: 28, reb: 5.5, ast: 1.0, stl: 0.3, blk: 0.4 },
});

const AVERAGE_ROSTER = makeRoster({
  PG: { pts: 12, reb: 3.0, ast: 4.5, stl: 0.9, blk: 0.1 },
  SG: { pts: 13, reb: 3.5, ast: 2.5, stl: 0.8, blk: 0.2 },
  SF: { pts: 12, reb: 4.5, ast: 2.0, stl: 0.8, blk: 0.4 },
  PF: { pts: 11, reb: 6.0, ast: 1.5, stl: 0.5, blk: 0.6 },
  C: { pts: 12, reb: 6.5, ast: 1.0, stl: 0.4, blk: 0.9 },
});

// ---------- era normalization ----------

describe("model/era", () => {
  it("values a 1960s 30 ppg below a 2020s 30 ppg (pace inflation)", () => {
    const sixties = adjustedScoring(30, "1960s");
    const modern = adjustedScoring(30, "2020s");
    expect(sixties).toBeLessThan(modern);
    // A 1960s 30 ppg should land near a modern ~24-26 ppg in value.
    expect(sixties).toBeGreaterThan(adjustedScoring(22, "2020s"));
    expect(sixties).toBeLessThan(adjustedScoring(28, "2020s"));
  });

  it("deflates Wilt-era rebound totals", () => {
    const wilt = adjustedRebounds(27, "1960s");
    const modern = adjustedRebounds(13, "2010s");
    // 27 rpg in 1962 is great but nowhere near 2x a modern 13 rpg.
    expect(wilt).toBeLessThan(27 * 0.65);
    expect(wilt / modern).toBeLessThan(1.7);
  });
});

// ---------- attributes ----------

describe("model/attributes", () => {
  it("gives ZERO three-point rate to pre-1980 players", () => {
    for (const decade of ["1950s", "1960s", "1970s"] as Decade[]) {
      const p = makePlayer("Old Guard", "SG", { pts: 25, reb: 5, ast: 4, stl: 1, blk: 0.3 }, decade);
      expect(deriveAttributes(p).threeRate).toBe(0);
    }
    const modern = makePlayer("Splash", "SG", { pts: 25, reb: 5, ast: 4, stl: 1, blk: 0.3 }, "2020s");
    expect(deriveAttributes(modern).threeRate).toBeGreaterThan(0.2);
  });

  it("derives higher usage and clutch for stars than role players", () => {
    const star = deriveAttributes(
      makePlayer("Star", "SG", { pts: 30, reb: 6, ast: 5, stl: 2, blk: 0.5 }),
    );
    const role = deriveAttributes(
      makePlayer("Role", "SG", { pts: 9, reb: 3, ast: 1.5, stl: 0.5, blk: 0.1 }),
    );
    expect(star.usage).toBeGreaterThan(role.usage + 0.08);
    expect(star.clutch).toBeGreaterThan(role.clutch);
    expect(star.scoringEfficiency).toBeGreaterThan(role.scoringEfficiency);
  });
});

// ---------- lineup: usage squeeze ----------

describe("model/lineup", () => {
  it("squeezes five superstars' usage below natural demand and costs efficiency", () => {
    const m = buildLineup(BALL_DOMINANT_FIVE);
    const naturalSum = m.players.reduce((s, p) => s + p.attrs.usage, 0);
    const effSum = m.players.reduce((s, p) => s + p.effUsage, 0);
    expect(naturalSum).toBeGreaterThan(1.2); // way over 100 possessions
    expect(effSum).toBeLessThan(naturalSum);
    expect(effSum).toBeCloseTo(1, 5);
    // Every forced-down star pays the skill-curve price.
    for (const p of m.players) {
      expect(p.effEfficiency).toBeLessThan(p.attrs.scoringEfficiency);
    }
  });

  it("barely penalizes a well-fitted balanced roster", () => {
    const m = buildLineup(AVERAGE_ROSTER);
    expect(Math.abs(m.usageDemand - 1)).toBeLessThan(0.12);
    for (const p of m.players) {
      const delta = p.effEfficiency - p.attrs.scoringEfficiency;
      expect(Math.abs(delta)).toBeLessThan(0.012);
    }
  });

  it("scores ball-dominant chemistry below the balanced five", () => {
    const balanced = buildLineup(BALANCED_FIVE);
    const iso = buildLineup(BALL_DOMINANT_FIVE);
    expect(iso.chemistry).toBeLessThan(balanced.chemistry - 0.15);
    expect(iso.passBoost).toBeLessThan(balanced.passBoost);
    expect(teamStrength(BALL_DOMINANT_FIVE).chemistry).toBeLessThan(
      teamStrength(BALANCED_FIVE).chemistry,
    );
  });
});

// ---------- game engine ----------

describe("model/game", () => {
  const lineupA = buildLineup(BALANCED_FIVE);
  const lineupB = buildLineup(AVERAGE_ROSTER);

  it("is deterministic for the same rng seed", () => {
    const g1 = simulateGame(lineupA, lineupB, createRng("game-seed"), { home: "a" });
    const g2 = simulateGame(lineupA, lineupB, createRng("game-seed"), { home: "a" });
    expect(g1).toEqual(g2);
    const g3 = simulateGame(lineupA, lineupB, createRng("other-seed"), { home: "a" });
    expect(g1).not.toEqual(g3);
  });

  it("never ties and produces basketball-shaped scores", () => {
    for (let i = 0; i < 50; i++) {
      const g = simulateGame(lineupA, lineupB, createRng(`shape-${i}`), {
        home: i % 2 === 0 ? "a" : "b",
      });
      expect(g.aScore).not.toBe(g.bScore);
      expect(g.aScore + g.bScore).toBeGreaterThan(160);
      expect(g.aScore + g.bScore).toBeLessThan(290);
    }
  });
});

// ---------- league generation ----------

describe("model/opponents", () => {
  it("builds a deterministic 29-team league with the 16/33/22/11 tier mix", () => {
    const lg1 = generateLeague("league-seed");
    const lg2 = generateLeague("league-seed");
    expect(lg1.teams.length).toBe(29);
    expect(lg1.schedule.length).toBe(82);
    expect(lg1.schedule.map((g) => g.opponentIndex)).toEqual(
      lg2.schedule.map((g) => g.opponentIndex),
    );
    const counts: Record<string, number> = {};
    let homeGames = 0;
    for (const g of lg1.schedule) {
      counts[g.tier] = (counts[g.tier] ?? 0) + 1;
      if (g.home) homeGames++;
      expect(lg1.teams[g.opponentIndex].tier).toBe(g.tier);
    }
    expect(counts).toEqual({ tanking: 16, average: 33, playoff: 22, contender: 11 });
    expect(homeGames).toBe(41);
  });

  it("orders tier strength: tanking < average < playoff < contender", () => {
    const lg = generateLeague("tier-order");
    const avg = (tier: string) => {
      const teams = lg.teams.filter((t) => t.tier === tier);
      return teams.reduce((s, t) => s + t.lineup.expPPG, 0) / teams.length;
    };
    expect(avg("tanking")).toBeLessThan(avg("average"));
    expect(avg("average")).toBeLessThan(avg("playoff"));
    expect(avg("playoff")).toBeLessThan(avg("contender"));
  });
});

// ---------- calibration ----------

describe("model calibration", () => {
  it("balanced five meaningfully beats equally-talented ball-dominant five", () => {
    const seeds = 40;
    let balanced = 0;
    let iso = 0;
    for (let i = 0; i < seeds; i++) {
      balanced += simulateSeason(BALANCED_FIVE, `chem-${i}`).wins;
      iso += simulateSeason(BALL_DOMINANT_FIVE, `chem-${i}`).wins;
    }
    const balancedAvg = balanced / seeds;
    const isoAvg = iso / seeds;
    console.log(
      `[calibration] balanced=${balancedAvg.toFixed(1)} vs ball-dominant=${isoAvg.toFixed(1)} wins`,
    );
    expect(balancedAvg).toBeGreaterThan(isoAvg + 8);
  });

  it("produces realistic score totals and winning scores", () => {
    let total = 0;
    let games = 0;
    let winInBand = 0;
    for (let i = 0; i < 30; i++) {
      const r = simulateSeason(AVERAGE_ROSTER, `score-real-${i}`);
      for (const g of r.games) {
        total += g.teamScore + g.oppScore;
        games++;
        const w = Math.max(g.teamScore, g.oppScore);
        if (w >= 95 && w <= 140) winInBand++;
      }
    }
    const avgTotal = total / games;
    console.log(
      `[calibration] avg total=${avgTotal.toFixed(1)}, winners in 95-140: ${((winInBand / games) * 100).toFixed(1)}%`,
    );
    expect(avgTotal).toBeGreaterThan(195);
    expect(avgTotal).toBeLessThan(240);
    expect(winInBand / games).toBeGreaterThan(0.8); // "mostly"
  });

  it("superteam 82-0 rate lands in the designed 8-20% window", () => {
    const seeds = 200;
    let perfect = 0;
    let totalWins = 0;
    for (let i = 0; i < seeds; i++) {
      const r = simulateSeason(BALANCED_FIVE, `calibration-super-${i}`);
      totalWins += r.wins;
      if (r.wins === 82) perfect++;
    }
    const rate = perfect / seeds;
    const mean = totalWins / seeds;
    console.log(
      `[calibration] superteam mean=${mean.toFixed(2)} wins, 82-0 in ${(rate * 100).toFixed(1)}%`,
    );
    expect(mean).toBeGreaterThanOrEqual(77);
    expect(mean).toBeLessThanOrEqual(81);
    expect(rate).toBeGreaterThanOrEqual(0.08);
    expect(rate).toBeLessThanOrEqual(0.2);
  });

  it("stronger roster wins best-of-7 from both slots in >75% of seeds", () => {
    let asA = 0;
    let asB = 0;
    const n = 60;
    for (let i = 0; i < n; i++) {
      if (simulateSeries(BALANCED_FIVE, AVERAGE_ROSTER, `model-series-${i}`).winner === "a") asA++;
      if (simulateSeries(AVERAGE_ROSTER, BALANCED_FIVE, `model-series-${i}`).winner === "b") asB++;
    }
    expect(asA / n).toBeGreaterThan(0.75);
    expect(asB / n).toBeGreaterThan(0.75);
  });
});

// ---------- performance ----------

describe("model performance", () => {
  it("simulates a full season in under 30ms", () => {
    // Warm up (JIT + module init), then time several runs.
    simulateSeason(BALANCED_FIVE, "warmup");
    const runs = 10;
    const t0 = performance.now();
    for (let i = 0; i < runs; i++) {
      simulateSeason(AVERAGE_ROSTER, `perf-${i}`);
    }
    const perSeason = (performance.now() - t0) / runs;
    console.log(`[perf] ${perSeason.toFixed(2)}ms per season`);
    expect(perSeason).toBeLessThan(30);
  });
});

// ---------- determinism across the public API ----------

describe("model determinism", () => {
  it("lineupFromAttributes is a pure function of its inputs", () => {
    const attrs = POSITIONS.map((pos) =>
      deriveAttributes(makePlayer(`D ${pos}`, pos, { pts: 15, reb: 5, ast: 3, stl: 1, blk: 0.5 })),
    );
    const a = lineupFromAttributes(attrs);
    const b = lineupFromAttributes(attrs);
    expect(a).toEqual(b);
  });

  it("simulateSeries is deterministic and slot-fair on home court", () => {
    const r1 = simulateSeries(BALANCED_FIVE, AVERAGE_ROSTER, "det-series");
    const r2 = simulateSeries(BALANCED_FIVE, AVERAGE_ROSTER, "det-series");
    expect(r1).toEqual(r2);
    // Playoff scores stay in the display band.
    for (const g of r1.games) {
      expect(Math.min(g.aScore, g.bScore)).toBeGreaterThanOrEqual(90);
      expect(Math.max(g.aScore, g.bScore)).toBeLessThanOrEqual(135);
    }
  });
});
