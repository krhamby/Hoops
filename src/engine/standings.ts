// Versus-room standings: every entrant simulates a season, then the
// entrants who clear the playoff bar play a round-robin of best-of-7
// series to decide the head-to-head table. Sub-.500 seasons miss the
// room playoffs entirely. All seeds are derived so every client
// computes identical results.

import type { Roster, RoomPlayer, SeriesResult, StandingsEntry } from "../types";
import { simulateSeason } from "./season";
import { simulateSeries } from "./series";

/** Season wins needed to qualify for the room playoffs (over .500). */
export const PLAYOFF_BAR = 42;

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

  // Playoff cut: finish over .500 or watch from home. The round-robin
  // below runs only among qualified entries; with one (or zero)
  // qualifiers there are simply no series — champion by default (or
  // nobody makes the playoffs at all).
  const qualifies = (id: string) => seasons.get(id)!.wins >= PLAYOFF_BAR;
  const field = entries.filter((e) => qualifies(e.player.id));

  // Round-robin best-of-7 among the qualified. Sort ids inside each
  // pairing so every client derives the same seed and the same a/b
  // slots; qualification is itself seed-deterministic, so the field
  // (and thus every series) is identical across clients.
  const series: SeriesMatchup[] = [];
  const h2hWins = new Map(entries.map((e) => [e.player.id, 0]));
  for (let i = 0; i < field.length; i++) {
    for (let j = i + 1; j < field.length; j++) {
      const [first, second] =
        field[i].player.id < field[j].player.id
          ? [field[i], field[j]]
          : [field[j], field[i]];
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

  // Rank: all qualified entries first (series wins, then season wins),
  // then the non-qualified (season wins; their h2hWins are all 0).
  const standings: StandingsEntry[] = entries
    .map((e) => {
      const season = seasons.get(e.player.id)!;
      return {
        player: { ...e.player, wins: season.wins, losses: season.losses },
        seasonWins: season.wins,
        seasonLosses: season.losses,
        h2hWins: h2hWins.get(e.player.id) ?? 0,
        rank: 0,
        qualified: qualifies(e.player.id),
      };
    })
    .sort(
      (x, y) =>
        Number(y.qualified) - Number(x.qualified) ||
        y.h2hWins - x.h2hWins ||
        y.seasonWins - x.seasonWins ||
        // Code-unit comparison (NOT localeCompare): every client must
        // produce the identical order regardless of its host locale.
        // The unique id makes the ordering total, so the input order
        // of `entries` can never influence the final ranking.
        (x.player.name < y.player.name
          ? -1
          : x.player.name > y.player.name
            ? 1
            : x.player.id < y.player.id
              ? -1
              : x.player.id > y.player.id
                ? 1
                : 0),
    )
    .map((entry, idx) => ({ ...entry, rank: idx + 1 }));

  return { standings, series };
}
