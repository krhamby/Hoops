import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1990s ----------------
  { id: "damon-stoudamire-raptors-1990s", name: "Damon Stoudamire", franchiseId: "raptors", decade: "1990s", positions: ["PG"], stats: { pts: 19.5, reb: 4.0, ast: 8.5, stl: 1.3, blk: 0.2 }, years: "1995–1998", accolades: "ROY ’96 · Mighty Mouse" },
  { id: "vince-carter-raptors-1990s", name: "Vince Carter", franchiseId: "raptors", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 18.3, reb: 5.7, ast: 3.0, stl: 1.1, blk: 1.5 }, years: "1998–1999", accolades: "ROY ’99 · Air Canada" },
  { id: "tracy-mcgrady-raptors-1990s", name: "Tracy McGrady", franchiseId: "raptors", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 9.5, reb: 5.0, ast: 2.0, stl: 0.9, blk: 0.9 }, years: "1997–1999", accolades: "Teenage phenom" },
  { id: "doug-christie-raptors-1990s", name: "Doug Christie", franchiseId: "raptors", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 14.5, reb: 4.5, ast: 4.0, stl: 2.2, blk: 0.6 }, years: "1996–1999", accolades: "Steals machine" },
  { id: "marcus-camby-raptors-1990s", name: "Marcus Camby", franchiseId: "raptors", decade: "1990s", positions: ["C", "PF"], stats: { pts: 13.5, reb: 6.5, ast: 1.5, stl: 1.0, blk: 2.5 }, years: "1996–1998", accolades: "All-Rookie shot blocker" },
  { id: "charles-oakley-raptors-1990s", name: "Charles Oakley", franchiseId: "raptors", decade: "1990s", positions: ["PF"], stats: { pts: 7.0, reb: 7.5, ast: 2.5, stl: 0.9, blk: 0.3 }, years: "1998–1999", accolades: "Veteran muscle" },
  { id: "dell-curry-raptors-1990s", name: "Dell Curry", franchiseId: "raptors", decade: "1990s", positions: ["SG"], stats: { pts: 9.5, reb: 2.0, ast: 1.5, stl: 0.6, blk: 0.2 }, years: "1999", accolades: "Vet sharpshooter" },

  // ---------------- 2000s ----------------
  { id: "vince-carter-raptors-2000s", name: "Vince Carter", franchiseId: "raptors", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 24.5, reb: 5.5, ast: 4.0, stl: 1.3, blk: 0.9 }, years: "2000–2004", accolades: "Dunk contest ’00 · Vinsanity" },
  { id: "chris-bosh-raptors-2000s", name: "Chris Bosh", franchiseId: "raptors", decade: "2000s", positions: ["PF", "C"], stats: { pts: 20.0, reb: 9.5, ast: 2.2, stl: 0.8, blk: 1.2 }, years: "2003–2009", accolades: "4× All-Star · CB4" },
  { id: "tracy-mcgrady-raptors-2000s", name: "Tracy McGrady", franchiseId: "raptors", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 15.4, reb: 6.3, ast: 3.3, stl: 1.1, blk: 1.9 }, years: "2000", accolades: "Breakout before the leap" },
  { id: "morris-peterson-raptors-2000s", name: "Morris Peterson", franchiseId: "raptors", decade: "2000s", positions: ["SF", "SG"], stats: { pts: 11.5, reb: 3.5, ast: 2.0, stl: 1.0, blk: 0.3 }, years: "2000–2007", accolades: "Iron-man fan favorite" },
  { id: "antonio-davis-raptors-2000s", name: "Antonio Davis", franchiseId: "raptors", decade: "2000s", positions: ["PF", "C"], stats: { pts: 12.5, reb: 9.0, ast: 1.5, stl: 0.5, blk: 1.5 }, years: "2000–2003", accolades: "All-Star ’01" },
  { id: "jalen-rose-raptors-2000s", name: "Jalen Rose", franchiseId: "raptors", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 15.5, reb: 3.5, ast: 3.5, stl: 0.8, blk: 0.3 }, years: "2003–2006", accolades: "Veteran shot creator" },
  { id: "jose-calderon-raptors-2000s", name: "Jose Calderon", franchiseId: "raptors", decade: "2000s", positions: ["PG"], stats: { pts: 10.5, reb: 2.5, ast: 7.0, stl: 1.0, blk: 0.1 }, years: "2005–2009", accolades: "Assist-to-TO king" },
  { id: "andrea-bargnani-raptors-2000s", name: "Andrea Bargnani", franchiseId: "raptors", decade: "2000s", positions: ["PF", "C"], stats: { pts: 14.0, reb: 4.5, ast: 1.2, stl: 0.4, blk: 1.0 }, years: "2006–2009", accolades: "No. 1 pick stretch big" },

  // ---------------- 2010s ----------------
  { id: "demar-derozan-raptors-2010s", name: "DeMar DeRozan", franchiseId: "raptors", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 21.0, reb: 4.5, ast: 3.5, stl: 1.0, blk: 0.3 }, years: "2010–2018", accolades: "4× All-Star · mid-range maestro" },
  { id: "kyle-lowry-raptors-2010s", name: "Kyle Lowry", franchiseId: "raptors", decade: "2010s", positions: ["PG"], stats: { pts: 18.5, reb: 4.8, ast: 7.0, stl: 1.5, blk: 0.3 }, years: "2012–2019", accolades: "Champ ’19 · heart of the team" },
  { id: "kawhi-leonard-raptors-2010s", name: "Kawhi Leonard", franchiseId: "raptors", decade: "2010s", positions: ["SF"], stats: { pts: 26.5, reb: 7.3, ast: 3.3, stl: 1.8, blk: 0.4 }, years: "2018–2019", accolades: "FMVP ’19 · The Shot" },
  { id: "pascal-siakam-raptors-2010s", name: "Pascal Siakam", franchiseId: "raptors", decade: "2010s", positions: ["PF"], stats: { pts: 14.5, reb: 5.5, ast: 2.5, stl: 0.9, blk: 0.6 }, years: "2016–2019", accolades: "MIP ’19 · champ" },
  { id: "jonas-valanciunas-raptors-2010s", name: "Jonas Valanciunas", franchiseId: "raptors", decade: "2010s", positions: ["C"], stats: { pts: 12.0, reb: 8.5, ast: 1.0, stl: 0.4, blk: 1.1 }, years: "2012–2019", accolades: "Bruising post presence" },
  { id: "serge-ibaka-raptors-2010s", name: "Serge Ibaka", franchiseId: "raptors", decade: "2010s", positions: ["PF", "C"], stats: { pts: 14.0, reb: 7.0, ast: 1.3, stl: 0.5, blk: 1.4 }, years: "2017–2019", accolades: "Champ ’19 · Mafuzzy chef" },
  { id: "fred-vanvleet-raptors-2010s", name: "Fred VanVleet", franchiseId: "raptors", decade: "2010s", positions: ["PG", "SG"], stats: { pts: 9.5, reb: 2.5, ast: 3.5, stl: 0.9, blk: 0.3 }, years: "2016–2019", accolades: "Bet on yourself · champ" },
  { id: "amir-johnson-raptors-2010s", name: "Amir Johnson", franchiseId: "raptors", decade: "2010s", positions: ["PF", "C"], stats: { pts: 9.5, reb: 6.5, ast: 1.4, stl: 0.7, blk: 1.1 }, years: "2010–2015", accolades: "Beloved energy big" },
  { id: "marc-gasol-raptors-2010s", name: "Marc Gasol", franchiseId: "raptors", decade: "2010s", positions: ["C"], stats: { pts: 9.0, reb: 6.5, ast: 4.0, stl: 0.9, blk: 0.9 }, years: "2019", accolades: "Champ ’19 hub" },
  { id: "demarre-carroll-raptors-2010s", name: "DeMarre Carroll", franchiseId: "raptors", decade: "2010s", positions: ["SF"], stats: { pts: 9.5, reb: 4.0, ast: 1.2, stl: 1.0, blk: 0.3 }, years: "2015–2017", accolades: "3-and-D wing" },

  // ---------------- 2020s ----------------
  { id: "pascal-siakam-raptors-2020s", name: "Pascal Siakam", franchiseId: "raptors", decade: "2020s", positions: ["PF"], stats: { pts: 22.5, reb: 8.0, ast: 5.0, stl: 0.9, blk: 0.6 }, years: "2020–2024", accolades: "2× All-NBA · Spicy P" },
  { id: "fred-vanvleet-raptors-2020s", name: "Fred VanVleet", franchiseId: "raptors", decade: "2020s", positions: ["PG"], stats: { pts: 19.5, reb: 4.0, ast: 6.5, stl: 1.7, blk: 0.5 }, years: "2020–2023", accolades: "All-Star ’22" },
  { id: "scottie-barnes-raptors-2020s", name: "Scottie Barnes", franchiseId: "raptors", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 18.5, reb: 7.5, ast: 5.5, stl: 1.2, blk: 1.0 }, years: "2021–2026", accolades: "ROY ’22 · All-Star" },
  { id: "og-anunoby-raptors-2020s", name: "OG Anunoby", franchiseId: "raptors", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 15.5, reb: 5.0, ast: 2.0, stl: 1.6, blk: 0.7 }, years: "2020–2024", accolades: "Steals champ ’23" },
  { id: "gary-trent-jr-raptors-2020s", name: "Gary Trent Jr.", franchiseId: "raptors", decade: "2020s", positions: ["SG"], stats: { pts: 16.5, reb: 2.5, ast: 1.5, stl: 1.5, blk: 0.2 }, years: "2021–2024", accolades: "3-and-D scorer" },
  { id: "rj-barrett-raptors-2020s", name: "RJ Barrett", franchiseId: "raptors", decade: "2020s", positions: ["SF", "SG"], stats: { pts: 20.0, reb: 5.5, ast: 4.5, stl: 0.8, blk: 0.4 }, years: "2024–2026", accolades: "Canadian homecoming" },
  { id: "brandon-ingram-raptors-2020s", name: "Brandon Ingram", franchiseId: "raptors", decade: "2020s", positions: ["SF"], stats: { pts: 19.5, reb: 5.5, ast: 4.0, stl: 0.8, blk: 0.5 }, years: "2025–2026", accolades: "All-Star scoring wing" },
  { id: "jakob-poeltl-raptors-2020s", name: "Jakob Poeltl", franchiseId: "raptors", decade: "2020s", positions: ["C"], stats: { pts: 13.0, reb: 9.5, ast: 2.5, stl: 0.7, blk: 1.2 }, years: "2023–2026", accolades: "Screen-and-dive anchor" },
];
