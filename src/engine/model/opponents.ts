// ============================================================
// League generation. Each season seeds 29 opponent franchises
// with archetype profiles (tanking / average / playoff /
// contender), builds a full LineupModel for each from synthetic
// stat lines, and lays out an 82-game schedule with home/away
// and back-to-back fatigue flags. Deterministic per seed.
// ============================================================

import { POSITIONS, type GameResult, type Position } from "../../types";
import { createRng, shuffle, type RNG } from "../rng";
import { deriveAttributes, type PlayerAttributes } from "./attributes";
import { lineupFromAttributes, type LineupModel } from "./lineup";

export type Tier = GameResult["opponentTier"];

export interface OpponentTeam {
  tier: Tier;
  lineup: LineupModel;
  /** Variance personality: streaky teams (>1) swing harder nightly. */
  formSd: number;
}

export interface ScheduledGame {
  gameNo: number; // 1..82
  tier: Tier;
  opponentIndex: number; // into League.teams
  home: boolean; // true = our building
  backToBack: boolean; // we are on the second night
}

export interface League {
  teams: OpponentTeam[]; // 29 opponents
  schedule: ScheduledGame[]; // 82 games
}

// Tier mix: 20% tanking / 40% average / 27% playoff / 13% contender.
const TIER_GAME_COUNTS: [Tier, number][] = [
  ["tanking", 16],
  ["average", 33],
  ["playoff", 22],
  ["contender", 11],
];
// 29 league teams split on the same mix.
const TIER_TEAM_COUNTS: [Tier, number][] = [
  ["tanking", 6],
  ["average", 12],
  ["playoff", 7],
  ["contender", 4],
];

// Archetype stat templates (modern-era stat lines, PG..C order).
// Each entry: [pts, reb, ast, stl, blk].
type Line = [number, number, number, number, number];
const TIER_TEMPLATES: Record<Tier, Line[]> = {
  tanking: [
    [12, 2.8, 4.0, 0.8, 0.1],
    [11, 3.0, 2.0, 0.7, 0.2],
    [10, 4.2, 1.8, 0.7, 0.3],
    [9, 5.5, 1.3, 0.5, 0.5],
    [9, 6.5, 1.0, 0.4, 0.8],
  ],
  average: [
    [17, 3.2, 6.0, 1.0, 0.1],
    [15, 3.6, 2.6, 0.9, 0.2],
    [13, 5.0, 2.4, 0.9, 0.4],
    [12, 7.0, 1.8, 0.6, 0.7],
    [11, 8.0, 1.4, 0.5, 1.1],
  ],
  playoff: [
    [22, 3.8, 7.0, 1.3, 0.2],
    [18, 4.0, 3.2, 1.1, 0.3],
    [16, 6.0, 3.0, 1.1, 0.5],
    [13, 8.0, 2.2, 0.7, 0.9],
    [12, 9.0, 1.6, 0.6, 1.5],
  ],
  contender: [
    [26, 4.5, 8.0, 1.5, 0.3],
    [22, 4.5, 4.0, 1.4, 0.4],
    [19, 6.5, 3.8, 1.3, 0.6],
    [15, 9.0, 2.6, 0.8, 1.2],
    [14, 10.0, 1.8, 0.7, 1.9],
  ],
};

/** Synthesize an opponent's five attribute sets from its archetype. */
function opponentAttributes(tier: Tier, rng: RNG): PlayerAttributes[] {
  const out: PlayerAttributes[] = [];
  for (let i = 0; i < 5; i++) {
    const pos: Position = POSITIONS[i];
    const [pts, reb, ast, stl, blk] = TIER_TEMPLATES[tier][i];
    const jitter = () => 0.88 + rng() * 0.24; // ±12% personnel variation
    out.push(
      deriveAttributes({
        id: `npc-${tier}-${i}`,
        name: `NPC ${tier} ${pos}`,
        franchiseId: "npc",
        decade: "2010s",
        positions: [pos],
        stats: {
          pts: pts * jitter(),
          reb: reb * jitter(),
          ast: ast * jitter(),
          stl: stl * jitter(),
          blk: blk * jitter(),
        },
        years: "",
      }),
    );
  }
  return out;
}

/** Generate the 29-team league + 82-game schedule for a season seed. */
export function generateLeague(seed: string): League {
  const rng = createRng(`${seed}:league`);

  // ---- teams ----
  const teams: OpponentTeam[] = [];
  for (const [tier, count] of TIER_TEAM_COUNTS) {
    for (let i = 0; i < count; i++) {
      const lineup = lineupFromAttributes(opponentAttributes(tier, rng));
      // Pace personality: some teams run, some grind.
      lineup.pace = 93 + rng() * 10;
      teams.push({ tier, lineup, formSd: 0.8 + rng() * 0.6 });
    }
  }

  // ---- schedule: tier sequence, opponents, home/away, b2b ----
  const tierSeq: Tier[] = [];
  for (const [tier, count] of TIER_GAME_COUNTS) {
    for (let i = 0; i < count; i++) tierSeq.push(tier);
  }
  const shuffledTiers = shuffle(rng, tierSeq);

  // 41 home / 41 away, shuffled.
  const homeFlags = shuffle(
    rng,
    Array.from({ length: 82 }, (_, i) => i < 41),
  );

  const byTier = new Map<Tier, number[]>();
  teams.forEach((t, i) => {
    const arr = byTier.get(t.tier) ?? [];
    arr.push(i);
    byTier.set(t.tier, arr);
  });

  const schedule: ScheduledGame[] = [];
  for (let g = 0; g < 82; g++) {
    const tier = shuffledTiers[g];
    const pool = byTier.get(tier)!;
    schedule.push({
      gameNo: g + 1,
      tier,
      opponentIndex: pool[Math.floor(rng() * pool.length)],
      home: homeFlags[g],
      // ~15% of games land on the second night of a back-to-back.
      backToBack: rng() < 0.15,
    });
  }

  return { teams, schedule };
}
