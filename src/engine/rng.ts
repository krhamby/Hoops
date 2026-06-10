// Deterministic seeded RNG: xmur3 string hash -> mulberry32 PRNG.

export type RNG = () => number;

/** xmur3 string hash; returns a function producing 32-bit seeds. */
function xmur3(str: string): () => number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return h >>> 0;
  };
}

/** mulberry32: fast 32-bit PRNG, uniform in [0, 1). */
function mulberry32(a: number): RNG {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Deterministic RNG from an arbitrary string seed. */
export function createRng(seed: string): RNG {
  return mulberry32(xmur3(seed)());
}

/** Pick a uniformly random element. Throws on an empty array. */
export function pick<T>(rng: RNG, arr: T[]): T {
  if (arr.length === 0) throw new Error("pick: empty array");
  return arr[Math.floor(rng() * arr.length)];
}

/** Fisher-Yates shuffle; returns a NEW array, input untouched. */
export function shuffle<T>(rng: RNG, arr: T[]): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Random integer in [min, max], both inclusive. */
export function randInt(rng: RNG, min: number, max: number): number {
  return min + Math.floor(rng() * (max - min + 1));
}
