// Versus-room standings: every entrant simulates a season, then a
// round-robin of best-of-7 series decides the head-to-head table.
// All seeds are derived so every client computes identical results.

import type { Roster, RoomPlayer, SeriesResult, StandingsEntry } from "../types";
import { simulateSeason } from "./season";
import { simulateSeries } from "./series";

export interface VersusEntry {
  player: RoomPlayer;
  roster: Roster;
}

export interface SeriesMatchup {
  aId: string;
  bId: string;
  result: SeriesResult;
}

export function computeStandings(
  entries: VersusEntry[],
  seed: string,
): { standings: StandingsEntry[]; series: SeriesMatchup[] } {
  // Season for each entrant.
  const seasons = new Map(
    entries.map((e) => [
      e.player.id,
      simulateSeason(e.roster, `${seed}:${e.player.id}`),
    ]),
  );

  // Round-robin best-of-7. Sort ids inside each pairing so every
  // client derives the same seed and the same a/b slots.
  const series: SeriesMatchup[] = [];
  const h2hWins = new Map(entries.map((e) => [e.player.id, 0]));
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      const [first, second] =
        entries[i].player.id < entries[j].player.id
          ? [entries[i], entries[j]]
          : [entries[j], entries[i]];
      const aId = first.player.id;
      const bId = second.player.id;
      const result = simulateSeries(
        first.roster,
        second.roster,
        `${seed}:${aId}:${bId}`,
      );
      series.push({ aId, bId, result });
      const winnerId = result.winner === "a" ? aId : bId;
      h2hWins.set(winnerId, (h2hWins.get(winnerId) ?? 0) + 1);
    }
  }

  // Rank: series wins, then season wins, then name.
  const standings: StandingsEntry[] = entries
    .map((e) => {
      const season = seasons.get(e.player.id)!;
      return {
        player: { ...e.player, wins: season.wins, losses: season.losses },
        seasonWins: season.wins,
        seasonLosses: season.losses,
        h2hWins: h2hWins.get(e.player.id) ?? 0,
        rank: 0,
      };
    })
    .sort(
      (x, y) =>
        y.h2hWins - x.h2hWins ||
        y.seasonWins - x.seasonWins ||
        x.player.name.localeCompare(y.player.name),
    )
    .map((entry, idx) => ({ ...entry, rank: idx + 1 }));

  return { standings, series };
}
