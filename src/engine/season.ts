// 82-game season: thin orchestrator over the possession model.
// Generates a seeded 29-team league + schedule (opponents.ts), then
// plays every game possession-by-possession (game.ts) with home
// court, back-to-back fatigue, and opponent variance personalities.
// Deterministic per (roster, seed).

import type { GameResult, Roster, SeasonResult } from "../types";
import { createRng } from "./rng";
import { buildLineup } from "./model/lineup";
import { generateLeague } from "./model/opponents";
import { simulateGame } from "./model/game";
import { teamStrength } from "./strength";

export function simulateSeason(roster: Roster, seed: string): SeasonResult {
  const rating = teamStrength(roster);
  const lineup = buildLineup(roster);
  const league = generateLeague(seed);
  const rng = createRng(`${seed}:season`);

  const games: GameResult[] = [];
  let wins = 0;
  let losses = 0;
  let firstLoss: number | null = null;

  for (const g of league.schedule) {
    const opp = league.teams[g.opponentIndex];
    const { aScore, bScore } = simulateGame(lineup, opp.lineup, rng, {
      home: g.home ? "a" : "b",
      fatigueA: g.backToBack,
      formSdB: opp.formSd,
    });

    const win = aScore > bScore;
    if (win) wins++;
    else {
      losses++;
      if (firstLoss === null) firstLoss = g.gameNo;
    }

    games.push({
      gameNo: g.gameNo,
      win,
      teamScore: aScore,
      oppScore: bScore,
      opponentTier: g.tier,
    });
  }

  return { wins, losses, games, rating, firstLoss };
}
