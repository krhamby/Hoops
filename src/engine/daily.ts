// Daily-challenge seed derivation. All clients in the same UTC day
// get the same seed, hence the same spins.

/** UTC date key "YYYY-MM-DD" (defaults to now). */
export function dateKey(date?: Date): string {
  const d = date ?? new Date();
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Seed for the daily game, e.g. "daily-2026-06-10". */
export function dailySeed(date?: Date): string {
  return `daily-${dateKey(date)}`;
}
