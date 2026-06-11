// Out-of-position slotting. The draft UI allows ANY player into ANY
// open slot; the engine charges a severity-scaled "slot tax" so that
// is a strategic tradeoff, not free (see model/attributes.ts).
// Pinned here:
//  - slotPenalty severity ladder on the PG-SG-SF-PF-C spectrum,
//    measured from the player's NEAREST listed position
//  - in-position slotting is exactly the natural derivation (so the
//    calibration rosters — all in-position — are untouched)
//  - the strategic ordering: star in-position > star 1 step off >
//    star at the opposite end > replacement-level empty slot, and a
//    star 1 step off still beats an in-position scrub
//  - the tax flows deterministically through teamStrength, seasons,
//    series and series box scores
//  - synergy detection works for off-position players and evaluates
//    the SLOTTED role

import { describe, expect, it } from "vitest";
import type { Decade, Player, PlayerStats, Position, Roster } from "../../types";
import { POSITIONS } from "../../types";
import {
  deriveAttributes,
  slotPenalty,
  slottedAttributes,
} from "../model/attributes";
import { buildLineup } from "../model/lineup";
import { detectSynergies } from "../model/synergy";
import { simulateSeason } from "../season";
import { simulateSeries } from "../series";
import { teamStrength } from "../strength";

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
    years: "1990–1999",
  };
}

// Solid in-position supporting cast for the PG/SG/SF/PF slots.
const CAST: Roster = {
  PG: makePlayer("Cast PG", ["PG"], { pts: 16, reb: 4, ast: 7, stl: 1.4, blk: 0.2 }),
  SG: makePlayer("Cast SG", ["SG"], { pts: 18, reb: 4.5, ast: 3.5, stl: 1.2, blk: 0.3 }),
  SF: makePlayer("Cast SF", ["SF"], { pts: 16, reb: 6, ast: 3, stl: 1.1, blk: 0.5 }),
  PF: makePlayer("Cast PF", ["PF"], { pts: 14, reb: 9, ast: 2.5, stl: 0.7, blk: 1.3 }),
  C: null,
};

// One star stat line; only the LISTED positions vary, so the C slot
// comparisons below isolate the out-of-position tax (same humans in
// the other four slots, same slot, same stat line).
const STAR_LINE: PlayerStats = { pts: 27, reb: 12.5, ast: 3.5, stl: 0.9, blk: 2.4 };
const SCRUB_C_LINE: PlayerStats = { pts: 11, reb: 6.5, ast: 1.2, stl: 0.4, blk: 0.9 };

const withC = (c: Player | null): Roster => ({ ...CAST, C: c });

describe("slotPenalty severity ladder", () => {
  it("returns 0 for any listed position", () => {
    const swing = makePlayer("Swing", ["SF", "PF"], STAR_LINE);
    expect(slotPenalty(swing, "SF")).toBe(0);
    expect(slotPenalty(swing, "PF")).toBe(0);
    for (const pos of POSITIONS) {
      expect(slotPenalty(makePlayer("Solo", [pos], STAR_LINE), pos)).toBe(0);
    }
  });

  it("scales with spectrum distance: 1→0.25, 2→0.55, 3→0.8, 4→1.0", () => {
    const sg = makePlayer("Two Guard", ["SG"], STAR_LINE);
    expect(slotPenalty(sg, "PG")).toBe(0.25);
    expect(slotPenalty(sg, "SF")).toBe(0.25);
    expect(slotPenalty(sg, "PF")).toBe(0.55);
    expect(slotPenalty(sg, "C")).toBe(0.8);
    const pg = makePlayer("Point", ["PG"], STAR_LINE);
    expect(slotPenalty(pg, "C")).toBe(1);
    expect(slotPenalty(makePlayer("Big", ["C"], STAR_LINE), "PG")).toBe(1);
  });

  it("measures from the NEAREST listed position", () => {
    const combo = makePlayer("Combo", ["PG", "SG"], STAR_LINE);
    expect(slotPenalty(combo, "SF")).toBe(0.25); // via SG, not PG
    expect(slotPenalty(combo, "C")).toBe(0.8); // via SG
    const bookends = makePlayer("Bookends", ["PG", "C"], STAR_LINE);
    expect(slotPenalty(bookends, "SF")).toBe(0.55); // 2 steps either way
  });
});

describe("slotted attributes", () => {
  it("in-position slotting is exactly the natural derivation", () => {
    // Guarantees all-natural rosters (incl. every calibration roster)
    // are byte-identical to the pre-slot-tax model.
    const swing = makePlayer("Swing", ["SF", "PF"], STAR_LINE);
    expect(slottedAttributes(swing, "SF")).toEqual(deriveAttributes(swing, "SF"));
    expect(slottedAttributes(swing, "PF")).toEqual(deriveAttributes(swing, "PF"));
  });

  it("off-position keeps the natural game but taxes eff/playmaking/boards/defense/TOs", () => {
    const pg = makePlayer("Point", ["PG"], { pts: 24, reb: 5, ast: 9, stl: 1.8, blk: 0.3 });
    const natural = deriveAttributes(pg, "PG");
    const atC = slottedAttributes(pg, "C"); // severity 1.0
    expect(atC.position).toBe("C"); // reports the slotted role
    expect(atC.scoringEfficiency).toBeCloseTo(natural.scoringEfficiency * 0.92, 10);
    expect(atC.playmaking).toBeCloseTo(natural.playmaking * 0.85, 10);
    expect(atC.offRebRate).toBeCloseTo(natural.offRebRate * 0.8, 10);
    expect(atC.defRebRate).toBeCloseTo(natural.defRebRate * 0.8, 10);
    expect(atC.rimProtection).toBeCloseTo(natural.rimProtection * 0.8, 10);
    expect(atC.perimeterDefense).toBeCloseTo(natural.perimeterDefense * 0.8, 10);
    expect(atC.turnoverRate).toBeCloseTo(Math.min(natural.turnoverRate * 1.15, 0.25), 10);
    // Shot diet stays his own: no center's rim diet for a guard.
    expect(atC.rimRate).toBe(natural.rimRate);
    expect(atC.threeRate).toBe(natural.threeRate);
    // One step off is a strictly milder version of the same tax.
    const pf = makePlayer("Four", ["PF"], STAR_LINE);
    const pfAtC = slottedAttributes(pf, "C");
    const pfNatural = deriveAttributes(pf, "PF");
    expect(pfAtC.scoringEfficiency).toBeCloseTo(pfNatural.scoringEfficiency * 0.98, 10);
    expect(pfAtC.defRebRate).toBeCloseTo(pfNatural.defRebRate * 0.95, 10);
  });
});

describe("strategic ordering of a slot decision", () => {
  // Same star stat line in the open C slot; only the listed position
  // changes. The fifth option is leaving the slot empty.
  const starAtHome = withC(makePlayer("Star Big", ["C"], STAR_LINE));
  const starOneOff = withC(makePlayer("Star Four", ["PF"], STAR_LINE));
  const starJammed = withC(makePlayer("Star Point", ["PG"], STAR_LINE));
  const emptySlot = withC(null);
  const scrubAtHome = withC(makePlayer("Scrub Big", ["C"], SCRUB_C_LINE));

  it("orders star in-position > star 1 step off > star at opposite end > empty slot", () => {
    const oHome = teamStrength(starAtHome).overall;
    const oOneOff = teamStrength(starOneOff).overall;
    const oJammed = teamStrength(starJammed).overall;
    const oEmpty = teamStrength(emptySlot).overall;
    const oScrub = teamStrength(scrubAtHome).overall;
    console.log(
      `[slot] overall: star@C in-pos=${oHome}, 1-step(PF@C)=${oOneOff}, ` +
        `jammed(PG@C)=${oJammed}, scrub@C=${oScrub}, empty C=${oEmpty}`,
    );
    expect(oHome).toBeGreaterThan(oOneOff);
    expect(oOneOff).toBeGreaterThan(oJammed);
    expect(oJammed).toBeGreaterThan(oEmpty);
    // A star one step off position still clearly beats an in-position scrub.
    expect(oOneOff).toBeGreaterThan(oScrub);
  });

  it("the same ordering shows up in simulated season wins", () => {
    const avgWins = (roster: Roster) => {
      let w = 0;
      const n = 12;
      for (let i = 0; i < n; i++) w += simulateSeason(roster, `slot-order-${i}`).wins;
      return w / n;
    };
    const home = avgWins(starAtHome);
    const oneOff = avgWins(starOneOff);
    const jammed = avgWins(starJammed);
    const empty = avgWins(emptySlot);
    console.log(
      `[slot] avg wins: in-pos=${home.toFixed(1)}, 1-step=${oneOff.toFixed(1)}, ` +
        `jammed=${jammed.toFixed(1)}, empty=${empty.toFixed(1)}`,
    );
    expect(home).toBeGreaterThan(oneOff);
    expect(oneOff).toBeGreaterThan(jammed);
    expect(jammed).toBeGreaterThan(empty);
  });
});

describe("slot tax flows through every public surface", () => {
  // A roster with players wedged into the wrong slots everywhere.
  const jumbled: Roster = {
    PG: makePlayer("Misfit C", ["C"], { pts: 22, reb: 11, ast: 2.5, stl: 0.6, blk: 2.2 }),
    SG: makePlayer("Misfit PF", ["PF"], { pts: 20, reb: 9, ast: 2.5, stl: 0.8, blk: 1.4 }),
    SF: makePlayer("Misfit SG", ["SG"], { pts: 24, reb: 4.5, ast: 4, stl: 1.5, blk: 0.3 }),
    PF: makePlayer("Misfit PG", ["PG"], { pts: 22, reb: 4, ast: 8.5, stl: 1.7, blk: 0.2 }),
    C: makePlayer("Misfit SF", ["SF"], { pts: 23, reb: 7, ast: 4.5, stl: 1.3, blk: 0.8 }),
  };
  // The same five humans, every one of them at a listed position.
  const natural: Roster = {
    PG: jumbled.PF,
    SG: jumbled.SF,
    SF: jumbled.C,
    PF: jumbled.SG,
    C: jumbled.PG,
  };

  it("an all-natural arrangement of the same five beats the jumbled one", () => {
    expect(teamStrength(natural).overall).toBeGreaterThan(
      teamStrength(jumbled).overall,
    );
    let nat = 0;
    let jum = 0;
    const n = 10;
    for (let i = 0; i < n; i++) {
      nat += simulateSeason(natural, `jumble-${i}`).wins;
      jum += simulateSeason(jumbled, `jumble-${i}`).wins;
    }
    console.log(`[slot] same five: natural=${(nat / n).toFixed(1)} vs jumbled=${(jum / n).toFixed(1)} wins`);
    expect(nat / n).toBeGreaterThan(jum / n + 3);
  });

  it("season, series and box scores stay deterministic with off-position players", () => {
    expect(simulateSeason(jumbled, "slot-det")).toEqual(
      simulateSeason(jumbled, "slot-det"),
    );
    const s1 = simulateSeries(jumbled, natural, "slot-series");
    const s2 = simulateSeries(jumbled, natural, "slot-series");
    expect(s1).toEqual(s2);
    // Box scores are present, slot-ordered, and sum to the team score.
    for (const g of s1.games) {
      expect(g.aBox.map((l) => l.pos)).toEqual(POSITIONS);
      expect(g.aBox.reduce((s, l) => s + l.pts, 0)).toBe(g.aScore);
      expect(g.bBox.reduce((s, l) => s + l.pts, 0)).toBe(g.bScore);
      expect(g.aBox[0].name).toBe("Misfit C");
    }
  });
});

describe("synergies with off-position players", () => {
  it("archetypes evaluate the SLOTTED role (rim-running C at PF is still a lob threat)", () => {
    const roster: Roster = {
      PG: makePlayer("Table Setter", ["PG"], { pts: 16, reb: 4, ast: 10.5, stl: 1.6, blk: 0.1 }),
      SG: CAST.SG,
      SF: CAST.SF,
      // Natural center wedged in at PF: judged as the big he's playing.
      PF: makePlayer("Lob Big", ["C"], { pts: 10, reb: 9.5, ast: 0.8, stl: 0.4, blk: 1.8 }),
      C: makePlayer("Anchor", ["C"], { pts: 14, reb: 11, ast: 1.5, stl: 0.5, blk: 2.4 }),
    };
    const synergies = detectSynergies(roster);
    expect(synergies.some((s) => s.id.startsWith("lob:") && s.players.includes("Lob Big"))).toBe(true);
  });

  it("handles a fully jumbled roster without throwing and stays deterministic", () => {
    const roster: Roster = {
      PG: makePlayer("Big At Point", ["C"], { pts: 20, reb: 12, ast: 2, stl: 0.5, blk: 2.5 }),
      SG: makePlayer("Forward At Two", ["PF"], { pts: 18, reb: 8, ast: 2, stl: 0.8, blk: 1.1 }),
      SF: CAST.SF,
      PF: makePlayer("Guard At Four", ["PG"], { pts: 19, reb: 4, ast: 9, stl: 1.6, blk: 0.2 }),
      C: makePlayer("Guard At Five", ["SG"], { pts: 21, reb: 4, ast: 3, stl: 1.4, blk: 0.3 }),
    };
    const a = detectSynergies(roster);
    const b = detectSynergies(roster);
    expect(a).toEqual(b);
    for (const s of a) expect(Number.isFinite(s.boost)).toBe(true);
  });
});
