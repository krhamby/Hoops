import type { Decade, Player } from "../../types";

import { PLAYERS as celtics } from "./celtics";
import { PLAYERS as nets } from "./nets";
import { PLAYERS as knicks } from "./knicks";
import { PLAYERS as sixers } from "./sixers";
import { PLAYERS as raptors } from "./raptors";
import { PLAYERS as bulls } from "./bulls";
import { PLAYERS as cavaliers } from "./cavaliers";
import { PLAYERS as pistons } from "./pistons";
import { PLAYERS as pacers } from "./pacers";
import { PLAYERS as bucks } from "./bucks";
import { PLAYERS as hawks } from "./hawks";
import { PLAYERS as hornets } from "./hornets";
import { PLAYERS as heat } from "./heat";
import { PLAYERS as magic } from "./magic";
import { PLAYERS as wizards } from "./wizards";
import { PLAYERS as mavericks } from "./mavericks";
import { PLAYERS as rockets } from "./rockets";
import { PLAYERS as grizzlies } from "./grizzlies";
import { PLAYERS as pelicans } from "./pelicans";
import { PLAYERS as spurs } from "./spurs";
import { PLAYERS as nuggets } from "./nuggets";
import { PLAYERS as timberwolves } from "./timberwolves";
import { PLAYERS as thunder } from "./thunder";
import { PLAYERS as blazers } from "./blazers";
import { PLAYERS as jazz } from "./jazz";
import { PLAYERS as warriors } from "./warriors";
import { PLAYERS as clippers } from "./clippers";
import { PLAYERS as lakers } from "./lakers";
import { PLAYERS as suns } from "./suns";
import { PLAYERS as kings } from "./kings";

export const ALL_PLAYERS: Player[] = [
  ...celtics, ...nets, ...knicks, ...sixers, ...raptors,
  ...bulls, ...cavaliers, ...pistons, ...pacers, ...bucks,
  ...hawks, ...hornets, ...heat, ...magic, ...wizards,
  ...mavericks, ...rockets, ...grizzlies, ...pelicans, ...spurs,
  ...nuggets, ...timberwolves, ...thunder, ...blazers, ...jazz,
  ...warriors, ...clippers, ...lakers, ...suns, ...kings,
];

const PLAYER_MAP: Record<string, Player> = Object.fromEntries(
  ALL_PLAYERS.map((p) => [p.id, p]),
);

export function getPlayer(id: string): Player | undefined {
  return PLAYER_MAP[id];
}

export function playersFor(franchiseId: string, decade: Decade): Player[] {
  return ALL_PLAYERS.filter(
    (p) => p.franchiseId === franchiseId && p.decade === decade,
  ).sort((a, b) => b.stats.pts - a.stats.pts);
}
