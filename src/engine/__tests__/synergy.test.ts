// Player-synergy system tests: curated legendary duos, real-teammates
// familiarity (tenure parsing), archetype synergies (lob threat,
// spaced post hub, paint-clog tax, defensive spine), partial-roster
// safety, determinism, and integration with teamStrength/seasons.
// Synthetic players only — no src/data dependencies.

import { describe, expect, it } from "vitest";
import type { Decade, Player, PlayerStats, Position, Roster } from "../../types";
import { detectSynergies, parseYears, yearsOverlap } from "../index";
import { detectSynergyEffects, CURATED_DUOS } from "../model/synergy";
import { buildLineup } from "../model/lineup";
import { teamStrength } from "../strength";
import { simulateSeason } from "../season";

interface Opts {
  decade?: Decade;
  franchiseId?: string;
  years?: string;
  positions?: Position[];
}

function P(name: string, pos: Position, stats: PlayerStats, opts: Opts = {}): Player {
  const decade = opts.decade ?? "1990s";
  const franchiseId = opts.franchiseId ?? `solo-${name.toLowerCase().replace(/\s+/g, "-")}`;
  return {
    id: `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${franchiseId}-${decade}`,
    name,
    franchiseId,
    decade,
    positions: opts.positions ?? [pos],
    stats,
    years: opts.years ?? "1990–1999",
  };
}

const EMPTY: Roster = { PG: null, SG: null, SF: null, PF: null, C: null };

// Distinct default franchiseIds above mean no accidental familiarity.
const STOCKTON_LINE: PlayerStats = { pts: 14.5, reb: 2.8, ast: 11.5, stl: 2.2, blk: 0.2 };
const MALONE_LINE: PlayerStats = { pts: 26.6, reb: 10.6, ast: 3.9, stl: 1.3, blk: 0.8 };
const WING_LINE: PlayerStats = { pts: 15, reb: 4.5, ast: 2.5, stl: 1.0, blk: 0.3 };
const GUARD_LINE: PlayerStats = { pts: 14, reb: 3.0, ast: 3.0, stl: 1.0, blk: 0.1 };
const CENTER_LINE: PlayerStats = { pts: 13, reb: 9.0, ast: 1.5, stl: 0.5, blk: 1.2 };

function fillers(): Pick<Roster, "SG" | "SF" | "C"> {
  return {
    SG: P("Filler Two", "SG", GUARD_LINE),
    SF: P("Filler Three", "SF", WING_LINE),
    C: P("Filler Five", "C", CENTER_LINE),
  };
}

// ---------- curated duos ----------

describe("synergy: curated legendary duos", () => {
  const duoRoster: Roster = {
    PG: P("John Stockton", "PG", STOCKTON_LINE),
    PF: P("Karl Malone", "PF", MALONE_LINE),
    ...fillers(),
  };
  // Identical stat lines, anonymous names: the only difference is the duo.
  const strangerRoster: Roster = {
    PG: P("Plain Point", "PG", STOCKTON_LINE),
    PF: P("Plain Forward", "PF", MALONE_LINE),
    ...fillers(),
  };

  it("detects Stockton + Malone with the right flavor", () => {
    const synergies = detectSynergies(duoRoster);
    const duo = synergies.find((s) => s.id === "duo:john-stockton+karl-malone");
    expect(duo).toBeDefined();
    expect(duo!.label).toBe("Pick-and-roll masters");
    expect(duo!.players).toEqual(["John Stockton", "Karl Malone"]);
    expect(duo!.boost).toBeGreaterThan(0);
    // The equivalent-stats strangers get no duo.
    expect(
      detectSynergies(strangerRoster).filter((s) => s.id.startsWith("duo:")),
    ).toHaveLength(0);
  });

  it("makes the duo lineup genuinely stronger than equivalent strangers", () => {
    expect(teamStrength(duoRoster).overall).toBeGreaterThan(
      teamStrength(strangerRoster).overall,
    );
    let duoWins = 0;
    let strangerWins = 0;
    for (let i = 0; i < 80; i++) {
      duoWins += simulateSeason(duoRoster, `duo-${i}`).wins;
      strangerWins += simulateSeason(strangerRoster, `duo-${i}`).wins;
    }
    expect(duoWins).toBeGreaterThan(strangerWins);
  });

  it("pairs any-era versions by name (1990s Kobe + 2000s Shaq)", () => {
    const roster: Roster = {
      ...EMPTY,
      SG: P("Kobe Bryant", "SG", { pts: 22, reb: 5, ast: 4, stl: 1.4, blk: 0.6 }, { decade: "1990s", franchiseId: "lakers", years: "1996–1999" }),
      C: P("Shaquille O'Neal", "C", { pts: 28, reb: 12, ast: 3, stl: 0.6, blk: 2.5 }, { decade: "2000s", franchiseId: "lakers", years: "2000–2004" }),
    };
    const duo = detectSynergies(roster).find((s) => s.id.startsWith("duo:"));
    expect(duo).toBeDefined();
    expect(duo!.players.sort()).toEqual(["Kobe Bryant", "Shaquille O'Neal"]);
  });

  it("curated list is well-formed (no self-pairs, no duplicate pairs)", () => {
    const seen = new Set<string>();
    for (const [a, b, label, detail, boost] of CURATED_DUOS) {
      expect(a).not.toBe(b);
      const key = [a.toLowerCase(), b.toLowerCase()].sort().join("|");
      expect(seen.has(key), `duplicate duo ${a}+${b}`).toBe(false);
      seen.add(key);
      expect(label.length).toBeGreaterThan(0);
      expect(detail.length).toBeGreaterThan(0);
      expect(boost).toBeGreaterThan(0);
      expect(boost).toBeLessThanOrEqual(0.02);
    }
    expect(CURATED_DUOS.length).toBeGreaterThanOrEqual(30);
  });
});

// ---------- tenure parsing + familiarity ----------

describe("synergy: real-teammates familiarity", () => {
  it("parses tenure strings (en dash, hyphen, single year, junk)", () => {
    expect(parseYears("1996–2003")).toEqual([1996, 2003]);
    expect(parseYears("1996-2003")).toEqual([1996, 2003]);
    expect(parseYears("1979")).toEqual([1979, 1979]);
    expect(parseYears("")).toBeNull();
    expect(parseYears("n/a")).toBeNull();
  });

  it("computes range overlap correctly", () => {
    expect(yearsOverlap("1996–2003", "2001–2006")).toBe(true);
    expect(yearsOverlap("1996–2003", "2003–2006")).toBe(true); // touching counts
    expect(yearsOverlap("1990–1993", "1994–1999")).toBe(false);
    expect(yearsOverlap("1979", "1975–1979")).toBe(true);
    expect(yearsOverlap("", "1990–1999")).toBe(false);
  });

  const fam = (yearsA: string, yearsB: string, decadeB: Decade = "1990s") => {
    const roster: Roster = {
      ...EMPTY,
      PG: P("Some Guard", "PG", GUARD_LINE, { franchiseId: "jazz", decade: "1990s", years: yearsA }),
      SG: P("Some Wing", "SG", WING_LINE, { franchiseId: "jazz", decade: decadeB, years: yearsB }),
    };
    return detectSynergies(roster).filter((s) => s.id.startsWith("fam:"));
  };

  it("rewards real teammates: same franchise + decade + overlapping years", () => {
    const hits = fam("1990–1999", "1994–1998");
    expect(hits).toHaveLength(1);
    expect(hits[0].boost).toBeGreaterThan(0);
    expect(hits[0].players.sort()).toEqual(["Some Guard", "Some Wing"]);
  });

  it("gives nothing without tenure overlap or across decades", () => {
    expect(fam("1990–1993", "1994–1999")).toHaveLength(0); // never met
    expect(fam("1990–1999", "1980–1989", "1980s")).toHaveLength(0); // different decade
  });

  it("caps total familiarity for a five-man same-team roster", () => {
    const opts = { franchiseId: "jazz", decade: "1990s" as Decade, years: "1990–1999" };
    const roster: Roster = {
      PG: P("Mate One", "PG", GUARD_LINE, opts),
      SG: P("Mate Two", "SG", GUARD_LINE, opts),
      SF: P("Mate Three", "SF", WING_LINE, opts),
      PF: P("Mate Four", "PF", WING_LINE, opts),
      C: P("Mate Five", "C", CENTER_LINE, opts),
    };
    const hits = detectSynergies(roster).filter((s) => s.id.startsWith("fam:"));
    expect(hits).toHaveLength(10); // all C(5,2) pairs detected...
    const total = hits.reduce((s, h) => s + h.boost, 0);
    expect(total).toBeLessThanOrEqual(0.009 + 1e-9); // ...but capped in sum
  });
});

// ---------- archetype synergies ----------

describe("synergy: archetypes", () => {
  it("elite passer + low-usage rim-running big = lob threat", () => {
    const roster: Roster = {
      ...EMPTY,
      PG: P("Table Setter", "PG", { pts: 13, reb: 3, ast: 11, stl: 1.5, blk: 0.1 }),
      C: P("Rim Runner", "C", { pts: 10, reb: 9.5, ast: 1.0, stl: 0.6, blk: 1.8 }, { decade: "2010s" }),
    };
    const lob = detectSynergies(roster).find((s) => s.id.startsWith("lob:"));
    expect(lob).toBeDefined();
    expect(lob!.boost).toBeGreaterThan(0);
    expect(lob!.players.sort()).toEqual(["Rim Runner", "Table Setter"]);
    // No lob without the passer.
    const noPasser: Roster = {
      ...roster,
      PG: P("Ball Stopper", "PG", { pts: 18, reb: 3, ast: 2.0, stl: 1.0, blk: 0.1 }),
    };
    expect(detectSynergies(noPasser).some((s) => s.id.startsWith("lob:"))).toBe(false);
  });

  it("3+ credible shooters around a post hub boost the hub", () => {
    const shooter = (name: string, pos: Position): Player =>
      P(name, pos, { pts: 16, reb: 3.5, ast: 2.5, stl: 1.0, blk: 0.2 }, { decade: "2020s" });
    const roster: Roster = {
      PG: shooter("Sniper One", "PG"),
      SG: shooter("Sniper Two", "SG"),
      SF: shooter("Sniper Three", "SF"),
      PF: P("Filler Four", "PF", { pts: 9, reb: 6, ast: 1.0, stl: 0.5, blk: 0.6 }),
      C: P("Post Hub", "C", { pts: 27, reb: 12, ast: 2.5, stl: 0.6, blk: 2.0 }, { decade: "2000s" }),
    };
    const hub = detectSynergies(roster).find((s) => s.id.startsWith("hub:"));
    expect(hub).toBeDefined();
    expect(hub!.boost).toBeGreaterThan(0);
    expect(hub!.players).toContain("Post Hub");
    // Replace the shooters with non-shooters: synergy disappears.
    const cramped: Roster = {
      ...roster,
      PG: P("Bricky One", "PG", GUARD_LINE), // 1990s role players: not credible
      SG: P("Bricky Two", "SG", GUARD_LINE),
      SF: P("Bricky Three", "SF", WING_LINE),
    };
    expect(detectSynergies(cramped).some((s) => s.id.startsWith("hub:"))).toBe(false);
  });

  const SIXTIES_PF: PlayerStats = { pts: 18, reb: 14, ast: 2.5, stl: 0.8, blk: 1.2 };
  const SIXTIES_C: PlayerStats = { pts: 17, reb: 16, ast: 2.0, stl: 0.6, blk: 2.0 };

  it("taxes twin non-shooting bigs inside a spacing-era lineup", () => {
    const roster: Roster = {
      PG: P("Modern One", "PG", GUARD_LINE, { decade: "2020s" }),
      SG: P("Modern Two", "SG", GUARD_LINE, { decade: "2020s" }),
      SF: P("Modern Three", "SF", WING_LINE, { decade: "2020s" }),
      PF: P("Old Tower A", "PF", SIXTIES_PF, { decade: "1960s", years: "1962–1968" }),
      C: P("Old Tower B", "C", SIXTIES_C, { decade: "1960s", years: "1961–1969" }),
    };
    const clog = detectSynergies(roster).find((s) => s.id.startsWith("clog:"));
    expect(clog).toBeDefined();
    expect(clog!.boost).toBeLessThan(0);
    expect(clog!.players.sort()).toEqual(["Old Tower A", "Old Tower B"]);
    // The tax genuinely hurts: same lineup with one big made playable
    // (a modern PF who can step out) clears the clog.
    const spaced: Roster = {
      ...roster,
      PF: P("Stretch Four", "PF", SIXTIES_PF, { decade: "2010s" }),
    };
    expect(detectSynergies(spaced).some((s) => s.id.startsWith("clog:"))).toBe(false);
  });

  it("does NOT tax an all-1960s frontcourt (era-relative spacing)", () => {
    const roster: Roster = {
      PG: P("Sixties One", "PG", { pts: 18, reb: 4, ast: 7, stl: 1.2, blk: 0.1 }, { decade: "1960s" }),
      SG: P("Sixties Two", "SG", { pts: 20, reb: 5, ast: 4, stl: 1.0, blk: 0.2 }, { decade: "1960s" }),
      SF: P("Sixties Three", "SF", { pts: 19, reb: 8, ast: 3, stl: 0.9, blk: 0.5 }, { decade: "1960s" }),
      PF: P("Sixties Four", "PF", SIXTIES_PF, { decade: "1960s" }),
      C: P("Sixties Five", "C", SIXTIES_C, { decade: "1960s" }),
    };
    expect(detectSynergies(roster).some((s) => s.id.startsWith("clog:"))).toBe(false);
    // Even 1980s perimeters (token three-point era) stay tax-free.
    const eighties: Roster = {
      ...roster,
      PG: P("Eighties One", "PG", GUARD_LINE, { decade: "1980s" }),
      SG: P("Eighties Two", "SG", GUARD_LINE, { decade: "1980s" }),
      SF: P("Eighties Three", "SF", WING_LINE, { decade: "1980s" }),
    };
    expect(detectSynergies(eighties).some((s) => s.id.startsWith("clog:"))).toBe(false);
  });

  it("elite rim protector + 2 perimeter stoppers = defensive spine", () => {
    const roster: Roster = {
      ...EMPTY,
      PG: P("Pest One", "PG", { pts: 14, reb: 3, ast: 6, stl: 2.4, blk: 0.2 }),
      SG: P("Pest Two", "SG", { pts: 15, reb: 4, ast: 3, stl: 2.2, blk: 0.3 }),
      C: P("The Eraser", "C", { pts: 12, reb: 11, ast: 1.5, stl: 0.5, blk: 3.5 }),
    };
    const spine = detectSynergies(roster).find((s) => s.id.startsWith("spine:"));
    expect(spine).toBeDefined();
    expect(spine!.boost).toBeGreaterThan(0);
    expect(spine!.players).toContain("The Eraser");
    // It shows up as better team defense, not offense.
    const noAnchor: Roster = {
      ...roster,
      C: P("Soft Middle", "C", { pts: 12, reb: 8, ast: 1.5, stl: 0.5, blk: 0.4 }),
    };
    expect(detectSynergies(noAnchor).some((s) => s.id.startsWith("spine:"))).toBe(false);
    expect(teamStrength(roster).defense).toBeGreaterThan(teamStrength(noAnchor).defense);
  });
});

// ---------- partial rosters, determinism, bounds ----------

describe("synergy: API safety and determinism", () => {
  it("returns [] for empty and single-player rosters", () => {
    expect(detectSynergies(EMPTY)).toEqual([]);
    expect(
      detectSynergies({ ...EMPTY, PG: P("Lonely Star", "PG", GUARD_LINE) }),
    ).toEqual([]);
  });

  it("finds pair synergies on a 2-player draft in progress", () => {
    const partial: Roster = {
      ...EMPTY,
      PG: P("John Stockton", "PG", STOCKTON_LINE),
      PF: P("Karl Malone", "PF", MALONE_LINE),
    };
    expect(detectSynergies(partial).some((s) => s.id.startsWith("duo:"))).toBe(true);
  });

  it("is deterministic and roster-key-order independent", () => {
    const pg = P("John Stockton", "PG", STOCKTON_LINE, { franchiseId: "jazz", years: "1990–1999" });
    const pf = P("Karl Malone", "PF", MALONE_LINE, { franchiseId: "jazz", years: "1990–1999" });
    const f = fillers();
    const fwd: Roster = { PG: pg, SG: f.SG, SF: f.SF, PF: pf, C: f.C };
    const rev: Roster = { C: f.C, PF: pf, SF: f.SF, SG: f.SG, PG: pg };
    expect(detectSynergies(fwd)).toEqual(detectSynergies(fwd));
    expect(detectSynergies(rev)).toEqual(detectSynergies(fwd));
    expect(teamStrength(rev)).toEqual(teamStrength(fwd));
    const s1 = simulateSeason(fwd, "syn-det");
    const s2 = simulateSeason(rev, "syn-det");
    expect(s1.wins).toBe(s2.wins);
  });

  it("clamps the total applied effect even on a duo-stacked roster", () => {
    const opts = { franchiseId: "warriors", decade: "2010s" as Decade, years: "2016–2019" };
    const roster: Roster = {
      PG: P("Stephen Curry", "PG", { pts: 26, reb: 5, ast: 6.5, stl: 1.7, blk: 0.2 }, opts),
      SG: P("Klay Thompson", "SG", { pts: 21, reb: 3.8, ast: 2.4, stl: 1.0, blk: 0.5 }, opts),
      SF: P("Kevin Durant", "SF", { pts: 26, reb: 7, ast: 5.4, stl: 1.0, blk: 1.1 }, opts),
      PF: P("Draymond Green", "PF", { pts: 9, reb: 7.5, ast: 7, stl: 1.4, blk: 1.2 }, opts),
      C: P("Shaquille O'Neal", "C", { pts: 27, reb: 12, ast: 3, stl: 0.6, blk: 2.5 }, { franchiseId: "lakers", decade: "2000s", years: "2000–2004" }),
    };
    // 4 curated duos + familiarity stack well past the clamp...
    const raw = detectSynergyEffects(roster)
      .filter((e) => e.side === "offense")
      .reduce((s, e) => s + e.boost, 0);
    expect(raw).toBeGreaterThan(0.05);
    // ...but the applied totals stay bounded.
    const m = buildLineup(roster);
    expect(m.synergyOff).toBeLessThanOrEqual(0.05);
    expect(m.synergyOff).toBeGreaterThan(0);
    expect(Math.abs(m.synergyDef)).toBeLessThanOrEqual(0.04);
  });
});
