// ============================================================
// Shared contracts for Hoops 82-0. Every module codes against
// these types. Do not change shapes without updating all
// consumers (engine/, data/, multiplayer/, ui/).
// ============================================================

export type Position = "PG" | "SG" | "SF" | "PF" | "C";
export const POSITIONS: Position[] = ["PG", "SG", "SF", "PF", "C"];

export type Decade =
  | "1950s"
  | "1960s"
  | "1970s"
  | "1980s"
  | "1990s"
  | "2000s"
  | "2010s"
  | "2020s";

export const DECADES: Decade[] = [
  "1950s",
  "1960s",
  "1970s",
  "1980s",
  "1990s",
  "2000s",
  "2010s",
  "2020s",
];

export interface Franchise {
  id: string; // stable slug, e.g. "lakers"
  name: string; // current full name, e.g. "Los Angeles Lakers"
  short: string; // e.g. "Lakers"
  abbr: string; // e.g. "LAL"
  /** Decades in which the franchise (incl. predecessors) played. */
  decades: Decade[];
  /** Primary/secondary brand colors as CSS hex. */
  colors: [string, string];
  /** Optional note about predecessor identities, e.g. "incl. Seattle SuperSonics". */
  lineage?: string;
}

export interface PlayerStats {
  pts: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
}

export interface Player {
  id: string; // unique slug: "<name-slug>-<franchiseId>-<decade>", e.g. "michael-jordan-bulls-1990s"
  name: string;
  franchiseId: string;
  decade: Decade;
  /** Positions the player can be slotted at (1-2 entries). */
  positions: Position[];
  /** Approx. per-game stats with this franchise during this decade. */
  stats: PlayerStats;
  /** Tenure with the franchise in that decade, e.g. "1996–2003". */
  years: string;
  /** Short flavor text, e.g. "5× MVP · 6× champ". Optional. */
  accolades?: string;
}

// ---------------- Draft / game state ----------------

export interface Spin {
  franchiseId: string;
  decade: Decade;
}

export type Roster = Record<Position, Player | null>;

export type GameMode = "daily" | "free" | "versus";

export interface SkipState {
  franchiseSkipUsed: boolean;
  decadeSkipUsed: boolean;
}

// ---------------- Simulation ----------------

export interface TeamRating {
  offense: number; // ~ expected points per game
  defense: number; // points prevented modifier
  overall: number; // single strength score used for win probability
  chemistry: number; // 0..1 multiplier detail (balance of roster)
}

export interface GameResult {
  gameNo: number; // 1..82
  win: boolean;
  teamScore: number;
  oppScore: number;
  opponentTier: "tanking" | "average" | "playoff" | "contender";
}

export interface SeasonResult {
  wins: number;
  losses: number;
  games: GameResult[];
  rating: TeamRating;
  /** First loss game number, or null for a perfect season. */
  firstLoss: number | null;
}

export interface SeriesGame {
  gameNo: number;
  aScore: number;
  bScore: number;
}

export interface SeriesResult {
  aWins: number;
  bWins: number;
  games: SeriesGame[];
  winner: "a" | "b";
}

// ---------------- Multiplayer ----------------

export type RoomStatus = "lobby" | "drafting" | "done";

export interface RoomPlayer {
  id: string; // client-generated uuid, persisted in localStorage
  name: string; // display name
  emoji: string; // avatar emoji
  /** Submitted roster (player ids keyed by position) once done drafting. */
  roster: Record<Position, string> | null;
  wins: number | null; // season result, filled after submit
  losses: number | null;
}

export interface Room {
  code: string; // 4-letter join code
  seed: string; // shared seed -> identical spins for all players
  status: RoomStatus;
  hostId: string;
  createdAt: string;
  players: RoomPlayer[];
}

export interface StandingsEntry {
  player: RoomPlayer;
  seasonWins: number;
  seasonLosses: number;
  h2hWins: number; // series wins in the room round-robin
  rank: number;
}
