// Wordle-style share text for a finished season.

import type { GameMode, SeasonResult } from "../types";
import { dateKey as todayKey } from "./daily";

const SITE_URL = "https://krhamby.github.io/Hoops/";
const ROW_LENGTH = 14;

export function shareText(
  result: SeasonResult,
  opts: { mode: GameMode; dateKey?: string },
): string {
  let label: string;
  switch (opts.mode) {
    case "daily":
      label = `Daily ${opts.dateKey ?? todayKey()}`;
      break;
    case "versus":
      label = "Versus";
      break;
    default:
      label = "Free Play";
  }

  const squares = result.games.map((g) => (g.win ? "🟩" : "🟥"));
  const rows: string[] = [];
  for (let i = 0; i < squares.length; i += ROW_LENGTH) {
    rows.push(squares.slice(i, i + ROW_LENGTH).join(""));
  }

  return [
    `🏀 Hoops 82–0 · ${label}`,
    `Record: ${result.wins}–${result.losses}`,
    ...rows,
    SITE_URL,
  ].join("\n");
}
