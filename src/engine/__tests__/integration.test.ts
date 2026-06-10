import { describe, expect, it } from "vitest";
import { FRANCHISES } from "../../data/franchises";
import { ALL_PLAYERS, getPlayer, playersFor } from "../../data/players";
import { POSITIONS, type Position, type Roster } from "../../types";
import { generateSpins, respinDecade, respinFranchise } from "../wheel";
import { emptyRoster, isComplete, rosterFromIds } from "../roster";
import { simulateSeason } from "../season";
import { computeStandings } from "../standings";
import { shareText } from "../share";
import { dailySeed } from "../daily";

describe("dataset integrity", () => {
  it("has unique player ids", () => {
    const seen = new Set<string>();
    for (const p of ALL_PLAYERS) {
      expect(seen.has(p.id), `duplicate id ${p.id}`).toBe(false);
      seen.add(p.id);
    }
  });

  it("has >= 6 players for every franchise-decade", () => {
    for (const f of FRANCHISES) {
      for (const d of f.decades) {
        const pool = playersFor(f.id, d);
        expect(pool.length, `${f.id} ${d} has ${pool.length}`).toBeGreaterThanOrEqual(6);
      }
    }
  });

  it("has valid positions and sane stats on every player", () => {
    for (const p of ALL_PLAYERS) {
      expect(p.positions.length).toBeGreaterThanOrEqual(1);
      expect(p.positions.length).toBeLessThanOrEqual(2);
      for (const pos of p.positions) expect(POSITIONS).toContain(pos);
      expect(p.stats.pts).toBeGreaterThanOrEqual(0);
      expect(p.stats.pts).toBeLessThan(55);
      expect(p.stats.reb).toBeLessThan(30);
      expect(p.stats.ast).toBeLessThan(15);
    }
  });

  it("only uses decades declared by the franchise", () => {
    const byId = new Map(FRANCHISES.map((f) => [f.id, f]));
    for (const p of ALL_PLAYERS) {
      const f = byId.get(p.franchiseId);
      expect(f, `unknown franchise ${p.franchiseId} on ${p.id}`).toBeDefined();
      expect(f!.decades).toContain(p.decade);
    }
  });
});

/** Greedy draft: fill each spin's best available player into an open eligible slot. */
function draftFromSpins(seed: string): Roster {
  const spins = generateSpins(seed);
  const roster = emptyRoster();
  for (const spin of spins) {
    const pool = playersFor(spin.franchiseId, spin.decade);
    const pickable = pool.find((p) => p.positions.some((pos) => roster[pos] === null));
    if (!pickable) continue;
    const slot = pickable.positions.find((pos) => roster[pos] === null)!;
    roster[slot] = pickable;
  }
  // Fill any unlucky empty slots with any remaining eligible player from the spins.
  for (const pos of POSITIONS) {
    if (roster[pos]) continue;
    for (const spin of spins) {
      const fallback = playersFor(spin.franchiseId, spin.decade).find(
        (p) => p.positions.includes(pos) && !Object.values(roster).some((r) => r?.id === p.id),
      );
      if (fallback) {
        roster[pos] = fallback;
        break;
      }
    }
  }
  return roster;
}

describe("end-to-end game flow on real data", () => {
  it("plays a full daily game deterministically", () => {
    const seed = dailySeed(new Date("2026-06-10T12:00:00Z"));
    const spins = generateSpins(seed);
    expect(spins).toHaveLength(5);
    expect(new Set(spins.map((s) => s.franchiseId)).size).toBe(5);

    const roster = draftFromSpins(seed);
    const filled = POSITIONS.filter((p) => roster[p] !== null).length;
    expect(filled).toBeGreaterThanOrEqual(4); // greedy fill can rarely leave a hole

    const a = simulateSeason(roster, seed);
    const b = simulateSeason(roster, seed);
    expect(a.wins + a.losses).toBe(82);
    expect(a.wins).toBe(b.wins);
    expect(a.games).toHaveLength(82);

    const text = shareText(a, { mode: "daily", dateKey: "2026-06-10" });
    expect(text).toContain(`${a.wins}`);
  });

  it("respins stay valid and deterministic", () => {
    const seed = "respin-test";
    const spins = generateSpins(seed);
    const newSpin = respinFranchise(seed, spins, 2);
    expect(spins.map((s) => s.franchiseId)).not.toContain(newSpin.franchiseId);
    expect(respinFranchise(seed, spins, 2)).toEqual(newSpin);
    const newDecade = respinDecade(seed, spins[0]);
    expect(newDecade.franchiseId).toBe(spins[0].franchiseId);
    expect(playersFor(newDecade.franchiseId, newDecade.decade).length).toBeGreaterThanOrEqual(5);
  });

  it("runs a 3-player versus room to standings", () => {
    const roomSeed = "room-ABCD";
    const entries = ["p1", "p2", "p3"].map((id, i) => {
      const roster = draftFromSpins(`${roomSeed}`);
      // Differentiate rosters: each player swaps in picks from later spin pools.
      const spins = generateSpins(roomSeed);
      const pool = playersFor(spins[i].franchiseId, spins[i].decade);
      for (const cand of pool) {
        const slot = cand.positions.find((pos) => roster[pos]?.id !== cand.id);
        if (slot) {
          roster[slot] = cand;
          break;
        }
      }
      return {
        player: { id, name: `Player ${i + 1}`, emoji: "🏀", roster: null, wins: null, losses: null },
        roster,
      };
    });
    const { standings, series } = computeStandings(entries, roomSeed);
    expect(standings).toHaveLength(3);
    expect(series).toHaveLength(3); // round robin of 3
    expect(standings[0].rank).toBe(1);
    // Deterministic across "clients"
    const again = computeStandings(entries, roomSeed);
    expect(again.standings.map((s) => s.player.id)).toEqual(standings.map((s) => s.player.id));
  });

  it("rosterFromIds round-trips real ids", () => {
    const sample = ALL_PLAYERS.find((p) => p.positions.includes("PG"))!;
    expect(getPlayer(sample.id)?.name).toBe(sample.name);
    const ids = {} as Record<Position, string>;
    for (const pos of POSITIONS) {
      ids[pos] = ALL_PLAYERS.find((p) => p.positions.includes(pos))!.id;
    }
    const roster = rosterFromIds(ids);
    expect(isComplete(roster)).toBe(true);
  });
});
