import type { Franchise } from "../types";

// All 30 NBA franchises, including predecessor identities.
// `decades` lists every decade the franchise played in (folding
// late-1940s BAA/NBA history into the 1950s bucket).
export const FRANCHISES: Franchise[] = [
  // ---------------- Eastern Conference ----------------
  { id: "celtics", name: "Boston Celtics", short: "Celtics", abbr: "BOS", colors: ["#007A33", "#BA9653"], decades: ["1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "nets", name: "Brooklyn Nets", short: "Nets", abbr: "BKN", colors: ["#000000", "#FFFFFF"], lineage: "incl. New York/New Jersey Nets (ABA 1967–76)", decades: ["1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "knicks", name: "New York Knicks", short: "Knicks", abbr: "NYK", colors: ["#006BB6", "#F58426"], decades: ["1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "sixers", name: "Philadelphia 76ers", short: "76ers", abbr: "PHI", colors: ["#006BB6", "#ED174C"], lineage: "incl. Syracuse Nationals", decades: ["1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "raptors", name: "Toronto Raptors", short: "Raptors", abbr: "TOR", colors: ["#CE1141", "#000000"], decades: ["1990s", "2000s", "2010s", "2020s"] },
  { id: "bulls", name: "Chicago Bulls", short: "Bulls", abbr: "CHI", colors: ["#CE1141", "#000000"], decades: ["1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "cavaliers", name: "Cleveland Cavaliers", short: "Cavs", abbr: "CLE", colors: ["#860038", "#FDBB30"], decades: ["1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "pistons", name: "Detroit Pistons", short: "Pistons", abbr: "DET", colors: ["#C8102E", "#1D42BA"], lineage: "incl. Fort Wayne Pistons", decades: ["1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "pacers", name: "Indiana Pacers", short: "Pacers", abbr: "IND", colors: ["#002D62", "#FDBB30"], lineage: "ABA 1967–76", decades: ["1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "bucks", name: "Milwaukee Bucks", short: "Bucks", abbr: "MIL", colors: ["#00471B", "#EEE1C6"], decades: ["1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "hawks", name: "Atlanta Hawks", short: "Hawks", abbr: "ATL", colors: ["#E03A3E", "#C1D32F"], lineage: "incl. St. Louis/Milwaukee/Tri-Cities Hawks", decades: ["1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "hornets", name: "Charlotte Hornets", short: "Hornets", abbr: "CHA", colors: ["#1D1160", "#00788C"], lineage: "1988–2002, Bobcats 2004–14, Hornets again", decades: ["1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "heat", name: "Miami Heat", short: "Heat", abbr: "MIA", colors: ["#98002E", "#F9A01B"], decades: ["1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "magic", name: "Orlando Magic", short: "Magic", abbr: "ORL", colors: ["#0077C0", "#C4CED4"], decades: ["1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "wizards", name: "Washington Wizards", short: "Wizards", abbr: "WAS", colors: ["#002B5C", "#E31837"], lineage: "incl. Baltimore/Washington Bullets, Chicago Packers/Zephyrs", decades: ["1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },

  // ---------------- Western Conference ----------------
  { id: "mavericks", name: "Dallas Mavericks", short: "Mavs", abbr: "DAL", colors: ["#00538C", "#B8C4CA"], decades: ["1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "rockets", name: "Houston Rockets", short: "Rockets", abbr: "HOU", colors: ["#CE1141", "#C4CED4"], lineage: "incl. San Diego Rockets", decades: ["1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "grizzlies", name: "Memphis Grizzlies", short: "Grizzlies", abbr: "MEM", colors: ["#5D76A9", "#12173F"], lineage: "incl. Vancouver Grizzlies", decades: ["1990s", "2000s", "2010s", "2020s"] },
  { id: "pelicans", name: "New Orleans Pelicans", short: "Pelicans", abbr: "NOP", colors: ["#0C2340", "#85714D"], lineage: "incl. New Orleans Hornets", decades: ["2000s", "2010s", "2020s"] },
  { id: "spurs", name: "San Antonio Spurs", short: "Spurs", abbr: "SAS", colors: ["#C4CED4", "#000000"], lineage: "incl. Dallas Chaparrals (ABA)", decades: ["1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "nuggets", name: "Denver Nuggets", short: "Nuggets", abbr: "DEN", colors: ["#0E2240", "#FEC524"], lineage: "ABA 1967–76", decades: ["1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "timberwolves", name: "Minnesota Timberwolves", short: "Wolves", abbr: "MIN", colors: ["#0C2340", "#78BE20"], decades: ["1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "thunder", name: "Oklahoma City Thunder", short: "Thunder", abbr: "OKC", colors: ["#007AC1", "#EF3B24"], lineage: "incl. Seattle SuperSonics", decades: ["1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "blazers", name: "Portland Trail Blazers", short: "Blazers", abbr: "POR", colors: ["#E03A3E", "#000000"], decades: ["1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "jazz", name: "Utah Jazz", short: "Jazz", abbr: "UTA", colors: ["#002B5C", "#F9A01B"], lineage: "incl. New Orleans Jazz", decades: ["1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "warriors", name: "Golden State Warriors", short: "Warriors", abbr: "GSW", colors: ["#1D428A", "#FFC72C"], lineage: "incl. Philadelphia/San Francisco Warriors", decades: ["1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "clippers", name: "LA Clippers", short: "Clippers", abbr: "LAC", colors: ["#C8102E", "#1D428A"], lineage: "incl. Buffalo Braves, San Diego Clippers", decades: ["1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "lakers", name: "Los Angeles Lakers", short: "Lakers", abbr: "LAL", colors: ["#552583", "#FDB927"], lineage: "incl. Minneapolis Lakers", decades: ["1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "suns", name: "Phoenix Suns", short: "Suns", abbr: "PHX", colors: ["#1D1160", "#E56020"], decades: ["1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
  { id: "kings", name: "Sacramento Kings", short: "Kings", abbr: "SAC", colors: ["#5A2D81", "#63727A"], lineage: "incl. Rochester/Cincinnati Royals, KC Kings", decades: ["1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"] },
];

export const FRANCHISE_MAP: Record<string, Franchise> = Object.fromEntries(
  FRANCHISES.map((f) => [f.id, f]),
);

export function getFranchise(id: string): Franchise {
  const f = FRANCHISE_MAP[id];
  if (!f) throw new Error(`Unknown franchise: ${id}`);
  return f;
}
