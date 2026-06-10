// Roster helpers.

import { POSITIONS, type Position, type Roster } from "../types";
import { getPlayer } from "../data/players";

export function emptyRoster(): Roster {
  return { PG: null, SG: null, SF: null, PF: null, C: null };
}

export function isComplete(roster: Roster): boolean {
  return POSITIONS.every((pos) => roster[pos] !== null);
}

/** Build a roster from submitted player ids. Throws on unknown ids. */
export function rosterFromIds(ids: Record<Position, string>): Roster {
  const roster = emptyRoster();
  for (const pos of POSITIONS) {
    const player = getPlayer(ids[pos]);
    if (!player) throw new Error(`rosterFromIds: unknown player id "${ids[pos]}"`);
    roster[pos] = player;
  }
  return roster;
}
