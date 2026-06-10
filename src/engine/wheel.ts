// Wheel spins: deterministic (franchise, decade) pairs from a seed.

import type { Decade, Franchise, Spin } from "../types";
import { FRANCHISES, getFranchise } from "../data/franchises";
import { playersFor } from "../data/players";
import { createRng, pick, shuffle } from "./rng";

const MIN_PLAYERS = 5;

/** Decades the franchise played in that have enough draftable players. */
function validDecades(franchise: Franchise): Decade[] {
  return franchise.decades.filter(
    (d) => playersFor(franchise.id, d).length >= MIN_PLAYERS,
  );
}

/**
 * Generate `count` spins (default 5) for a seed. Franchises are distinct;
 * each decade is valid for its franchise and has >= 5 players. Invalid
 * franchise/decade combos are skipped deterministically.
 */
export function generateSpins(seed: string, count = 5): Spin[] {
  const rng = createRng(`${seed}:spins`);
  const order = shuffle(rng, FRANCHISES);
  const spins: Spin[] = [];
  for (const franchise of order) {
    if (spins.length >= count) break;
    const decades = validDecades(franchise);
    if (decades.length === 0) continue;
    spins.push({ franchiseId: franchise.id, decade: pick(rng, decades) });
  }
  if (spins.length < count) {
    throw new Error(
      `generateSpins: only ${spins.length}/${count} valid franchises available`,
    );
  }
  return spins;
}

/**
 * Respin the franchise at `index`: returns a new spin whose franchise is
 * not already used by any spin in `spins`. Deterministic for a given
 * seed + spins + index.
 */
export function respinFranchise(seed: string, spins: Spin[], index: number): Spin {
  const fingerprint = spins.map((s) => `${s.franchiseId}.${s.decade}`).join(",");
  const rng = createRng(`${seed}:respin-franchise:${index}:${fingerprint}`);
  const used = new Set(spins.map((s) => s.franchiseId));
  const candidates = shuffle(
    rng,
    FRANCHISES.filter((f) => !used.has(f.id)),
  );
  for (const franchise of candidates) {
    const decades = validDecades(franchise);
    if (decades.length === 0) continue;
    return { franchiseId: franchise.id, decade: pick(rng, decades) };
  }
  throw new Error("respinFranchise: no unused franchise with enough players");
}

/**
 * Respin the decade of a spin: same franchise, different valid decade.
 * Returns the original spin unchanged if no alternative decade exists.
 * Deterministic for a given seed + spin.
 */
export function respinDecade(seed: string, spin: Spin): Spin {
  const rng = createRng(
    `${seed}:respin-decade:${spin.franchiseId}:${spin.decade}`,
  );
  const franchise = getFranchise(spin.franchiseId);
  const options = validDecades(franchise).filter((d) => d !== spin.decade);
  if (options.length === 0) return spin;
  return { franchiseId: spin.franchiseId, decade: pick(rng, options) };
}
