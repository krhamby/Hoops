// Tests for the two playoff features:
//  1. Per-player box scores on every SeriesGame (exact point
//     accounting, determinism, plausible NBA magnitudes, roster
//     name/slot mapping incl. "Replacement" for empty slots).
//  2. The computeStandings playoff qualification cut (PLAYOFF_BAR):
//     the round-robin runs only among entries at/over the bar, with
//     one-qualifier / zero-qualifier edge cases and order-independent
//     results across clients.
// Synthetic players only — no src/data dependencies.

import { describe, expect, it } from "vitest";
import type {
  Decade,
  Player,
  PlayerStats,
  Position,
  Roster,
  RoomPlayer,
  SeriesGame,
} from "../../types";
import { POSITIONS } from "../../types";
import { simulateSeries } from "../series";
import {
  computeStandings,
  PLAYOFF_BAR,
  type VersusEntry,
} from "../standings";

function makePlayer(
  name: string,
  positions: Position[],
  stats: PlayerStats,
  decade: Decade = "1990s",
): Player {
  return {
    id: `${name.toLowerCase().replace(/\s+/g, "-")}-test-${decade}`,
    name,
    franchiseId: "test",
    decade,
    positions,
    stats,
    years: "",
  };
}

function makeRoster(
  statsByPos: Record<Position, PlayerStats>,
  decade: Decade = "1990s",
): Roster {
  const roster = {} as Roster;
  for (const pos of POSITIONS) {
    roster[pos] = makePlayer(`${pos} Guy`, [pos], statsByPos[pos], decade);
  }
  return roster;
}

// All-time legends in every slot (qualifies every season).
const SUPERTEAM = makeRoster({
  PG: { pts: 28, reb: 6.0, ast: 9.5, stl: 2.1, blk: 0.3 },
  SG: { pts: 30, reb: 6.3, ast: 5.4, stl: 2.3, blk: 0.8 },
  SF: { pts: 27, reb: 7.5, ast: 7.2, stl: 1.6, blk: 0.8 },
  PF: { pts: 26, reb: 12.5, ast: 4.0, stl: 1.0, blk: 1.8 },
  C: { pts: 28, reb: 13.0, ast: 3.5, stl: 0.7, blk: 2.8 },
});

// One clear star carrying four role players.
const STAR_AND_ROLE = makeRoster({
  PG: { pts: 30, reb: 5.0, ast: 8.0, stl: 1.8, blk: 0.2 },
  SG: { pts: 13, reb: 3.5, ast: 2.5, stl: 0.8, blk: 0.2 },
  SF: { pts: 12, reb: 4.5, ast: 2.0, stl: 0.8, blk: 0.4 },
  PF: { pts: 11, reb: 6.0, ast: 1.5, stl: 0.5, blk: 0.6 },
  C: { pts: 12, reb: 6.5, ast: 1.0, stl: 0.4, blk: 0.9 },
});

// League-average five.
const AVERAGE = makeRoster({
  PG: { pts: 12, reb: 3.0, ast: 4.5, stl: 0.9, blk: 0.1 },
  SG: { pts: 13, reb: 3.5, ast: 2.5, stl: 0.8, blk: 0.2 },
  SF: { pts: 12, reb: 4.5, ast: 2.0, stl: 0.8, blk: 0.4 },
  PF: { pts: 11, reb: 6.0, ast: 1.5, stl: 0.5, blk: 0.6 },
  C: { pts: 12, reb: 6.5, ast: 1.0, stl: 0.4, blk: 0.9 },
});

// End-of-bench five: reliably misses the playoff bar.
const WEAK = makeRoster({
  PG: { pts: 8, reb: 2.0, ast: 3.0, stl: 0.6, blk: 0.1 },
  SG: { pts: 9, reb: 2.5, ast: 1.5, stl: 0.5, blk: 0.1 },
  SF: { pts: 8, reb: 3.0, ast: 1.5, stl: 0.5, blk: 0.3 },
  PF: { pts: 7, reb: 4.5, ast: 1.0, stl: 0.4, blk: 0.4 },
  C: { pts: 8, reb: 5.0, ast: 0.8, stl: 0.3, blk: 0.7 },
});

const sum = (xs: number[]) => xs.reduce((s, x) => s + x, 0);
const teamPts = (box: SeriesGame["aBox"]) => sum(box.map((l) => l.pts));

function makeEntry(id: string, name: string, roster: Roster): VersusEntry {
  const player: RoomPlayer = {
    id,
    name,
    emoji: "🏀",
    roster: null,
    wins: null,
    losses: null,
    crowns: 0,
    progress: 0,
    left: false,
  };
  return { player, roster };
}

// ---------- feature 1: series box scores ----------

describe("series box scores", () => {
  it("lines sum exactly to the team score in every game across many seeds", () => {
    for (let i = 0; i < 30; i++) {
      const r = simulateSeries(SUPERTEAM, AVERAGE, `box-sum-${i}`);
      for (const g of r.games) {
        expect(g.aBox).toHaveLength(5);
        expect(g.bBox).toHaveLength(5);
        expect(teamPts(g.aBox)).toBe(g.aScore);
        expect(teamPts(g.bBox)).toBe(g.bScore);
        for (const l of [...g.aBox, ...g.bBox]) {
          for (const v of [l.pts, l.reb, l.ast]) {
            expect(Number.isInteger(v)).toBe(true);
            expect(v).toBeGreaterThanOrEqual(0);
          }
        }
      }
    }
  });

  it("is deterministic: same seed reproduces identical box scores", () => {
    const r1 = simulateSeries(SUPERTEAM, AVERAGE, "box-det");
    const r2 = simulateSeries(SUPERTEAM, AVERAGE, "box-det");
    expect(r1).toEqual(r2);
    const r3 = simulateSeries(SUPERTEAM, AVERAGE, "box-det-other");
    expect(r1.games.map((g) => g.aBox)).not.toEqual(
      r3.games.map((g) => g.aBox),
    );
  });

  it("maps lines to the drafted roster in PG,SG,SF,PF,C order", () => {
    const r = simulateSeries(SUPERTEAM, STAR_AND_ROLE, "box-names");
    for (const g of r.games) {
      expect(g.aBox.map((l) => l.pos)).toEqual(POSITIONS);
      expect(g.bBox.map((l) => l.pos)).toEqual(POSITIONS);
      expect(g.aBox.map((l) => l.name)).toEqual(
        POSITIONS.map((pos) => SUPERTEAM[pos]!.name),
      );
      expect(g.bBox.map((l) => l.name)).toEqual(
        POSITIONS.map((pos) => STAR_AND_ROLE[pos]!.name),
      );
    }
  });

  it('fills empty roster slots with "Replacement" lines', () => {
    const partial: Roster = { ...AVERAGE, SG: null, C: null };
    const r = simulateSeries(partial, AVERAGE, "box-replacement");
    for (const g of r.games) {
      expect(g.aBox[1].name).toBe("Replacement");
      expect(g.aBox[1].pos).toBe("SG");
      expect(g.aBox[4].name).toBe("Replacement");
      expect(g.aBox[4].pos).toBe("C");
      expect(teamPts(g.aBox)).toBe(g.aScore);
    }
  });

  it("produces plausible 48-minute magnitudes (star pts, team reb/ast)", () => {
    let games = 0;
    let starPts = 0;
    let starHighGames = 0;
    let teamReb = 0;
    let teamAst = 0;
    let teamScore = 0;
    for (let i = 0; i < 40; i++) {
      const r = simulateSeries(STAR_AND_ROLE, AVERAGE, `box-mag-${i}`);
      for (const g of r.games) {
        games++;
        starPts += g.aBox[0].pts; // the 30-ppg PG
        if (g.aBox[0].pts >= 20) starHighGames++;
        for (const box of [g.aBox, g.bBox]) {
          teamReb += sum(box.map((l) => l.reb));
          teamAst += sum(box.map((l) => l.ast));
        }
        teamScore += g.aScore + g.bScore;
      }
    }
    const starAvg = starPts / games;
    const rebAvg = teamReb / (games * 2);
    const astAvg = teamAst / (games * 2);
    // Assists as a share of (estimated) made FGs: score net of ~15%
    // free-throw points, ~2.2 pts per make.
    const estMakes = (teamScore * 0.85) / 2.2 / (games * 2);
    const astShare = astAvg / estMakes;
    console.log(
      `[box] star=${starAvg.toFixed(1)} pts (>=20 in ${((100 * starHighGames) / games).toFixed(0)}%), ` +
        `team reb=${rebAvg.toFixed(1)}, team ast=${astAvg.toFixed(1)} (~${(100 * astShare).toFixed(0)}% of makes)`,
    );
    expect(starAvg).toBeGreaterThanOrEqual(20);
    expect(starAvg).toBeLessThanOrEqual(45);
    expect(rebAvg).toBeGreaterThanOrEqual(35);
    expect(rebAvg).toBeLessThanOrEqual(50);
    expect(astShare).toBeGreaterThanOrEqual(0.4);
    expect(astShare).toBeLessThanOrEqual(0.65);
  });
});

// ---------- feature 2: playoff qualification ----------

describe("playoff qualification cut", () => {
  it("plays the round-robin only among entries at/over the bar", () => {
    const entries = [
      makeEntry("uuid-a", "Alpha", SUPERTEAM),
      makeEntry("uuid-b", "Bravo", SUPERTEAM),
      makeEntry("uuid-c", "Charlie", WEAK),
      makeEntry("uuid-d", "Delta", WEAK),
    ];
    const { standings, series } = computeStandings(entries, "qual-mixed");

    // Partition is exactly the bar.
    for (const s of standings) {
      expect(s.qualified).toBe(s.seasonWins >= PLAYOFF_BAR);
    }
    const qualified = standings.filter((s) => s.qualified);
    const missed = standings.filter((s) => !s.qualified);
    // Sanity for this seed: superteams in, weak teams out.
    expect(qualified.map((s) => s.player.id).sort()).toEqual([
      "uuid-a",
      "uuid-b",
    ]);
    expect(missed.map((s) => s.player.id).sort()).toEqual([
      "uuid-c",
      "uuid-d",
    ]);

    // nC2 series among qualified only; no series touches a missed id.
    expect(series).toHaveLength(1); // C(2,2)
    const missedIds = new Set(missed.map((s) => s.player.id));
    for (const m of series) {
      expect(missedIds.has(m.aId)).toBe(false);
      expect(missedIds.has(m.bId)).toBe(false);
    }

    // Missed entries play no series.
    for (const s of missed) expect(s.h2hWins).toBe(0);

    // Qualified outrank everyone who missed; ranks are 1..N.
    expect(standings.map((s) => s.rank)).toEqual([1, 2, 3, 4]);
    expect(standings.slice(0, 2).every((s) => s.qualified)).toBe(true);
    expect(standings.slice(2).every((s) => !s.qualified)).toBe(true);
    // Non-qualified ordered by season wins.
    expect(missed[0].seasonWins).toBeGreaterThanOrEqual(missed[1].seasonWins);
    // Qualified ordered by series wins first.
    expect(qualified[0].h2hWins).toBeGreaterThanOrEqual(qualified[1].h2hWins);
  });

  it("crowns a sole qualifier by default with zero series", () => {
    const entries = [
      makeEntry("uuid-a", "Alpha", SUPERTEAM),
      makeEntry("uuid-b", "Bravo", WEAK),
      makeEntry("uuid-c", "Charlie", WEAK),
    ];
    const { standings, series } = computeStandings(entries, "qual-solo");
    expect(series).toHaveLength(0);
    expect(standings[0].player.id).toBe("uuid-a");
    expect(standings[0].rank).toBe(1);
    expect(standings[0].qualified).toBe(true);
    expect(standings[0].h2hWins).toBe(0);
    expect(standings.slice(1).every((s) => !s.qualified)).toBe(true);
  });

  it("handles nobody making the playoffs: no series, season-win ranking", () => {
    const entries = [
      makeEntry("uuid-a", "Alpha", WEAK),
      makeEntry("uuid-b", "Bravo", WEAK),
      makeEntry("uuid-c", "Charlie", WEAK),
    ];
    const { standings, series } = computeStandings(entries, "qual-nobody");
    expect(series).toHaveLength(0);
    expect(standings.every((s) => !s.qualified)).toBe(true);
    expect(standings.every((s) => s.h2hWins === 0)).toBe(true);
    expect(standings.map((s) => s.rank)).toEqual([1, 2, 3]);
    for (let i = 1; i < standings.length; i++) {
      expect(standings[i - 1].seasonWins).toBeGreaterThanOrEqual(
        standings[i].seasonWins,
      );
    }
  });

  it("stays order-independent across clients with mixed qualification", () => {
    const entries = [
      makeEntry("uuid-0", "P0", SUPERTEAM),
      makeEntry("uuid-1", "P1", SUPERTEAM),
      makeEntry("uuid-2", "P2", AVERAGE),
      makeEntry("uuid-3", "P3", WEAK),
    ];
    const fwd = computeStandings(entries, "qual-order");
    // Sanity: this seed actually exercises a mixed field.
    expect(fwd.standings.some((s) => s.qualified)).toBe(true);
    expect(fwd.standings.some((s) => !s.qualified)).toBe(true);

    const orders = [
      [...entries].reverse(),
      [entries[2], entries[0], entries[3], entries[1]],
    ];
    const key = (m: { aId: string; bId: string }) => `${m.aId}|${m.bId}`;
    for (const order of orders) {
      const alt = computeStandings(order, "qual-order");
      expect(alt.standings.map((s) => s.player.id)).toEqual(
        fwd.standings.map((s) => s.player.id),
      );
      expect(alt.standings.map((s) => s.qualified)).toEqual(
        fwd.standings.map((s) => s.qualified),
      );
      expect(alt.standings.map((s) => s.h2hWins)).toEqual(
        fwd.standings.map((s) => s.h2hWins),
      );
      expect(alt.standings.map((s) => s.rank)).toEqual(
        fwd.standings.map((s) => s.rank),
      );
      expect(new Map(alt.series.map((m) => [key(m), m.result]))).toEqual(
        new Map(fwd.series.map((m) => [key(m), m.result])),
      );
    }
  });
});
