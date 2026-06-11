// Regression tests added by the simulation-engine audit. These pin
// down behaviors fixed or hardened by the audit:
//  - roster-slot-aware attribute derivation (dual-position players)
//  - accolade-text defensive reputation signal (narrow, no false hits)
//  - locale/order-independent versus standings
//  - extreme-input safety (zero-stat, duplicate, empty rosters)
//  - back-to-back fatigue actually hurts (and opponents feel it too)
//  - cross-era matchups are competitive in series play
// No src/data dependencies: synthetic players only.

import { describe, expect, it } from "vitest";
import type { Decade, Player, PlayerStats, Position, Roster } from "../../types";
import { POSITIONS } from "../../types";
import { createRng } from "../rng";
import { deriveAttributes } from "../model/attributes";
import { buildLineup } from "../model/lineup";
import { simulateGame } from "../model/game";
import { simulateSeason } from "../season";
import { simulateSeries } from "../series";
import { teamStrength } from "../strength";
import { computeStandings, type VersusEntry } from "../standings";

function makePlayer(
  name: string,
  positions: Position[],
  stats: PlayerStats,
  decade: Decade = "1990s",
  accolades?: string,
): Player {
  return {
    id: `${name.toLowerCase().replace(/\s+/g, "-")}-test-${decade}`,
    name,
    franchiseId: "test",
    decade,
    positions,
    stats,
    years: "",
    accolades,
  };
}

function makeRoster(
  statsByPos: Record<Position, PlayerStats>,
  decade: Decade = "1990s",
): Roster {
  const roster = {} as Roster;
  for (const pos of POSITIONS) {
    roster[pos] = makePlayer(`Player ${pos}`, [pos], statsByPos[pos], decade);
  }
  return roster;
}

const STAR_LINE: PlayerStats = { pts: 27, reb: 7, ast: 5, stl: 1.5, blk: 1.0 };

// ---------- slot-aware derivation ----------

describe("audit: roster slot drives positional role", () => {
  const swing = makePlayer("Swing", ["SF", "PF"], STAR_LINE);

  it("uses the slotted position when the player is eligible there", () => {
    const asSF = deriveAttributes(swing, "SF");
    const asPF = deriveAttributes(swing, "PF");
    expect(asSF.position).toBe("SF");
    expect(asPF.position).toBe("PF");
    // PF role: more rim protection / boards, less three-point volume.
    expect(asPF.rimProtection).toBeGreaterThan(asSF.rimProtection);
    expect(asPF.offRebRate).toBeGreaterThan(asSF.offRebRate);
    expect(asPF.threeRate).toBeLessThan(asSF.threeRate);
  });

  it("falls back to the primary position when slotted out of position", () => {
    expect(deriveAttributes(swing, "C")).toEqual(deriveAttributes(swing));
    expect(deriveAttributes(swing).position).toBe("SF");
  });
});

// ---------- accolade defense signal ----------

describe("audit: defensive accolade reputation", () => {
  const line: PlayerStats = { pts: 10, reb: 8, ast: 2, stl: 1.0, blk: 1.2 };

  it("boosts defense for recognized stoppers/anchors", () => {
    const plain = deriveAttributes(makePlayer("Plain", ["C"], line));
    for (const text of [
      "4× DPOY pedigree",
      "All-Defense wing",
      "all-time defender",
      "Wing stopper",
      "Towering rim deterrent",
      "Shot-blocking center",
      "Steals champ ’05",
    ]) {
      const rep = deriveAttributes(makePlayer("Rep", ["C"], line, "1990s", text));
      expect(rep.rimProtection).toBeGreaterThan(plain.rimProtection);
      expect(rep.perimeterDefense).toBeGreaterThan(plain.perimeterDefense);
    }
  });

  it("ignores non-defensive accolade text (no false positives)", () => {
    const plain = deriveAttributes(makePlayer("Plain", ["C"], line));
    for (const text of [
      "Second-round steal",
      "Rim-rocking forward",
      "Young building block",
      "6× champ · 6× FMVP",
    ]) {
      const other = deriveAttributes(makePlayer("Other", ["C"], line, "1990s", text));
      expect(other.rimProtection).toBe(plain.rimProtection);
      expect(other.perimeterDefense).toBe(plain.perimeterDefense);
    }
  });
});

// ---------- standings determinism ----------

describe("audit: standings are entry-order independent", () => {
  it("identical ranking regardless of entries array order", () => {
    const rosters = [
      makeRoster({
        PG: { pts: 20, reb: 4, ast: 7, stl: 1.5, blk: 0.2 },
        SG: { pts: 22, reb: 4, ast: 3, stl: 1.2, blk: 0.3 },
        SF: { pts: 18, reb: 6, ast: 3, stl: 1.0, blk: 0.5 },
        PF: { pts: 15, reb: 9, ast: 2, stl: 0.7, blk: 1.2 },
        C: { pts: 14, reb: 10, ast: 1.5, stl: 0.5, blk: 2.0 },
      }),
      makeRoster({
        PG: { pts: 12, reb: 3, ast: 4.5, stl: 0.9, blk: 0.1 },
        SG: { pts: 13, reb: 3.5, ast: 2.5, stl: 0.8, blk: 0.2 },
        SF: { pts: 12, reb: 4.5, ast: 2, stl: 0.8, blk: 0.4 },
        PF: { pts: 11, reb: 6, ast: 1.5, stl: 0.5, blk: 0.6 },
        C: { pts: 12, reb: 6.5, ast: 1, stl: 0.4, blk: 0.9 },
      }),
      makeRoster({
        PG: { pts: 8, reb: 2, ast: 3, stl: 0.6, blk: 0.1 },
        SG: { pts: 9, reb: 2.5, ast: 1.5, stl: 0.5, blk: 0.1 },
        SF: { pts: 8, reb: 3, ast: 1.5, stl: 0.5, blk: 0.3 },
        PF: { pts: 7, reb: 4.5, ast: 1, stl: 0.4, blk: 0.4 },
        C: { pts: 8, reb: 5, ast: 0.8, stl: 0.3, blk: 0.7 },
      }),
    ];
    const entries: VersusEntry[] = rosters.map((roster, i) => ({
      player: {
        id: `uuid-${i}`,
        name: `Player ${i}`,
        emoji: "🏀",
        roster: null,
        wins: null,
        losses: null,
        crowns: 0,
        progress: 0,
        left: false,
      },
      roster,
    }));
    const fwd = computeStandings(entries, "order-seed");
    const rev = computeStandings([...entries].reverse(), "order-seed");
    expect(rev.standings.map((s) => s.player.id)).toEqual(
      fwd.standings.map((s) => s.player.id),
    );
    expect(rev.standings.map((s) => s.h2hWins)).toEqual(
      fwd.standings.map((s) => s.h2hWins),
    );
    // Mixed-qualification field: the playoff cut is order-independent too.
    expect(rev.standings.map((s) => s.qualified)).toEqual(
      fwd.standings.map((s) => s.qualified),
    );
    // Series results identical too (sorted-id pairing).
    const key = (m: { aId: string; bId: string }) => `${m.aId}|${m.bId}`;
    expect(new Map(rev.series.map((m) => [key(m), m.result]))).toEqual(
      new Map(fwd.series.map((m) => [key(m), m.result])),
    );
  });
});

// ---------- extreme inputs ----------

describe("audit: extreme inputs stay finite and well-formed", () => {
  it("zero-stat roster simulates a full season without NaN", () => {
    const zero: PlayerStats = { pts: 0, reb: 0, ast: 0, stl: 0, blk: 0 };
    const roster = makeRoster({ PG: zero, SG: zero, SF: zero, PF: zero, C: zero });
    const rating = teamStrength(roster);
    expect(Number.isFinite(rating.overall)).toBe(true);
    expect(Number.isFinite(rating.chemistry)).toBe(true);
    const season = simulateSeason(roster, "zero-stat-seed");
    expect(season.wins + season.losses).toBe(82);
    for (const g of season.games) {
      expect(Number.isFinite(g.teamScore)).toBe(true);
      expect(g.teamScore).toBeGreaterThanOrEqual(0);
    }
  });

  it("duplicate player in every slot still works", () => {
    const dup = makePlayer("Clone", ["SF"], STAR_LINE);
    const roster: Roster = { PG: dup, SG: dup, SF: dup, PF: dup, C: dup };
    const season = simulateSeason(roster, "dup-seed");
    expect(season.wins + season.losses).toBe(82);
  });

  it("empty-vs-empty series terminates with neutral court and a winner", () => {
    const empty: Roster = { PG: null, SG: null, SF: null, PF: null, C: null };
    const r = simulateSeries(empty, empty, "empty-series");
    expect(Math.max(r.aWins, r.bWins)).toBe(4);
    expect(r.games.length).toBeLessThanOrEqual(7);
    for (const g of r.games) expect(g.aScore).not.toBe(g.bScore);
  });
});

// ---------- fatigue ----------

describe("audit: back-to-back fatigue", () => {
  it("fatigue lowers the mirror-matchup win share (paired seeds)", () => {
    const roster = makeRoster({
      PG: { pts: 15, reb: 3, ast: 5, stl: 1, blk: 0.1 },
      SG: { pts: 14, reb: 3.5, ast: 2.5, stl: 0.9, blk: 0.2 },
      SF: { pts: 13, reb: 5, ast: 2, stl: 0.8, blk: 0.4 },
      PF: { pts: 12, reb: 7, ast: 1.5, stl: 0.5, blk: 0.8 },
      C: { pts: 12, reb: 8, ast: 1, stl: 0.4, blk: 1.2 },
    });
    const lineup = buildLineup(roster);
    const winShare = (fatigued: boolean) => {
      let wins = 0;
      const n = 1000;
      for (let i = 0; i < n; i++) {
        const g = simulateGame(lineup, lineup, createRng(`fatigue-${i}`), {
          fatigueA: fatigued,
        });
        if (g.aScore > g.bScore) wins++;
      }
      return wins / n;
    };
    expect(winShare(true)).toBeLessThan(winShare(false) - 0.01);
  });
});

// ---------- cross-era fairness ----------

describe("audit: cross-era series stay competitive", () => {
  // Comparable-greatness lineups expressed in their own eras' stats.
  const SIXTIES = makeRoster(
    {
      PG: { pts: 24, reb: 6, ast: 9.5, stl: 1.8, blk: 0.2 },
      SG: { pts: 27, reb: 6, ast: 5, stl: 1.7, blk: 0.4 },
      SF: { pts: 28, reb: 11, ast: 4.5, stl: 1.3, blk: 0.7 },
      PF: { pts: 22, reb: 14, ast: 3, stl: 0.9, blk: 1.5 },
      C: { pts: 35, reb: 23, ast: 3.5, stl: 0.8, blk: 3.5 },
    },
    "1960s",
  );
  const MODERN = makeRoster(
    {
      PG: { pts: 26, reb: 5, ast: 7.5, stl: 1.8, blk: 0.2 },
      SG: { pts: 27, reb: 5, ast: 5, stl: 1.6, blk: 0.4 },
      SF: { pts: 27, reb: 8, ast: 7, stl: 1.4, blk: 0.7 },
      PF: { pts: 24, reb: 11, ast: 4, stl: 1.0, blk: 1.3 },
      C: { pts: 26, reb: 12, ast: 4, stl: 0.8, blk: 2.2 },
    },
    "2010s",
  );

  it("neither era sweeps the other across seeds", () => {
    let sixtiesWins = 0;
    const n = 300; // large enough that sampling noise can't dip below the band
    for (let i = 0; i < n; i++) {
      if (simulateSeries(SIXTIES, MODERN, `era-${i}`).winner === "a") {
        sixtiesWins++;
      }
    }
    const rate = sixtiesWins / n;
    console.log(`[audit] 1960s legends beat 2010s legends in ${(rate * 100).toFixed(0)}% of series`);
    expect(rate).toBeGreaterThan(0.1);
    expect(rate).toBeLessThan(0.9);
  });
});
