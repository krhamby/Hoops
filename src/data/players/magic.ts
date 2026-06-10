import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1980s (expansion 1989) ----------------
  { id: "terry-catledge-magic-1980s", name: "Terry Catledge", franchiseId: "magic", decade: "1980s", positions: ["PF"], stats: { pts: 19.0, reb: 7.5, ast: 1.5, stl: 0.7, blk: 0.3 }, years: "1989–1990", accolades: "Inaugural leading scorer" },
  { id: "reggie-theus-magic-1980s", name: "Reggie Theus", franchiseId: "magic", decade: "1980s", positions: ["SG", "PG"], stats: { pts: 18.5, reb: 3.0, ast: 5.0, stl: 0.9, blk: 0.2 }, years: "1989–1990", accolades: "Veteran star of year one" },
  { id: "nick-anderson-magic-1980s", name: "Nick Anderson", franchiseId: "magic", decade: "1980s", positions: ["SG", "SF"], stats: { pts: 11.5, reb: 3.9, ast: 1.5, stl: 0.9, blk: 0.4 }, years: "1989–1990", accolades: "First-ever Magic pick" },
  { id: "scott-skiles-magic-1980s", name: "Scott Skiles", franchiseId: "magic", decade: "1980s", positions: ["PG"], stats: { pts: 7.5, reb: 2.0, ast: 4.5, stl: 0.7, blk: 0.0 }, years: "1989–1990", accolades: "Future 30-assist man" },
  { id: "otis-smith-magic-1980s", name: "Otis Smith", franchiseId: "magic", decade: "1980s", positions: ["SG", "SF"], stats: { pts: 13.5, reb: 4.5, ast: 2.0, stl: 1.0, blk: 0.4 }, years: "1989–1990", accolades: "Expansion-era wing" },
  { id: "sam-vincent-magic-1980s", name: "Sam Vincent", franchiseId: "magic", decade: "1980s", positions: ["PG"], stats: { pts: 11.0, reb: 3.0, ast: 5.0, stl: 0.7, blk: 0.1 }, years: "1989–1990", accolades: "Inaugural floor general" },
  { id: "jerry-reynolds-magic-1980s", name: "Jerry Reynolds", franchiseId: "magic", decade: "1980s", positions: ["SF", "SG"], stats: { pts: 13.0, reb: 4.0, ast: 2.0, stl: 1.0, blk: 0.5 }, years: "1989–1990", accolades: "Ice-water scorer" },

  // ---------------- 1990s ----------------
  { id: "shaquille-oneal-magic-1990s", name: "Shaquille O'Neal", franchiseId: "magic", decade: "1990s", positions: ["C"], stats: { pts: 27.0, reb: 12.5, ast: 2.5, stl: 0.7, blk: 2.8 }, years: "1992–1996", accolades: "ROY ’93 · Finals ’95" },
  { id: "penny-hardaway-magic-1990s", name: "Penny Hardaway", franchiseId: "magic", decade: "1990s", positions: ["PG", "SG"], stats: { pts: 19.0, reb: 4.5, ast: 6.5, stl: 1.9, blk: 0.5 }, years: "1993–1999", accolades: "2× All-NBA 1st team" },
  { id: "nick-anderson-magic-1990s", name: "Nick Anderson", franchiseId: "magic", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 15.5, reb: 5.0, ast: 2.5, stl: 1.5, blk: 0.5 }, years: "1990–1999", accolades: "Stole it from Jordan ’95" },
  { id: "dennis-scott-magic-1990s", name: "Dennis Scott", franchiseId: "magic", decade: "1990s", positions: ["SF"], stats: { pts: 14.5, reb: 3.0, ast: 2.5, stl: 0.9, blk: 0.2 }, years: "1990–1997", accolades: "3D · 267 threes in ’96" },
  { id: "horace-grant-magic-1990s", name: "Horace Grant", franchiseId: "magic", decade: "1990s", positions: ["PF"], stats: { pts: 11.5, reb: 8.5, ast: 2.5, stl: 0.9, blk: 0.9 }, years: "1994–1999", accolades: "All-Defense champ pedigree" },
  { id: "scott-skiles-magic-1990s", name: "Scott Skiles", franchiseId: "magic", decade: "1990s", positions: ["PG"], stats: { pts: 13.5, reb: 3.0, ast: 7.5, stl: 0.9, blk: 0.1 }, years: "1990–1994", accolades: "30 assists in a game" },
  { id: "rony-seikaly-magic-1990s", name: "Rony Seikaly", franchiseId: "magic", decade: "1990s", positions: ["C"], stats: { pts: 15.5, reb: 9.0, ast: 1.3, stl: 0.6, blk: 1.3 }, years: "1994–1996", accolades: "Spin-move center" },
  { id: "darrell-armstrong-magic-1990s", name: "Darrell Armstrong", franchiseId: "magic", decade: "1990s", positions: ["PG"], stats: { pts: 9.0, reb: 2.5, ast: 4.5, stl: 1.3, blk: 0.1 }, years: "1995–1999", accolades: "6MOY + MIP ’99" },
  { id: "bo-outlaw-magic-1990s", name: "Bo Outlaw", franchiseId: "magic", decade: "1990s", positions: ["PF", "C"], stats: { pts: 8.0, reb: 6.5, ast: 2.0, stl: 1.1, blk: 1.5 }, years: "1997–1999", accolades: "Hustle personified" },

  // ---------------- 2000s ----------------
  { id: "tracy-mcgrady-magic-2000s", name: "Tracy McGrady", franchiseId: "magic", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 28.0, reb: 6.5, ast: 5.0, stl: 1.4, blk: 0.8 }, years: "2000–2004", accolades: "2× scoring champ · MVP-caliber" },
  { id: "dwight-howard-magic-2000s", name: "Dwight Howard", franchiseId: "magic", decade: "2000s", positions: ["C"], stats: { pts: 17.5, reb: 12.5, ast: 1.4, stl: 0.9, blk: 1.9 }, years: "2004–2009", accolades: "DPOY ’09 · Finals run" },
  { id: "grant-hill-magic-2000s", name: "Grant Hill", franchiseId: "magic", decade: "2000s", positions: ["SF"], stats: { pts: 16.5, reb: 5.5, ast: 4.0, stl: 1.1, blk: 0.4 }, years: "2000–2007", accolades: "All-Star when healthy" },
  { id: "hedo-turkoglu-magic-2000s", name: "Hedo Turkoglu", franchiseId: "magic", decade: "2000s", positions: ["SF", "PF"], stats: { pts: 15.5, reb: 4.5, ast: 4.0, stl: 0.9, blk: 0.3 }, years: "2004–2009", accolades: "MIP ’08 · point-forward" },
  { id: "rashard-lewis-magic-2000s", name: "Rashard Lewis", franchiseId: "magic", decade: "2000s", positions: ["PF", "SF"], stats: { pts: 17.5, reb: 5.5, ast: 2.5, stl: 1.0, blk: 0.6 }, years: "2007–2009", accolades: "All-Star stretch four" },
  { id: "jameer-nelson-magic-2000s", name: "Jameer Nelson", franchiseId: "magic", decade: "2000s", positions: ["PG"], stats: { pts: 12.5, reb: 3.0, ast: 4.5, stl: 1.0, blk: 0.1 }, years: "2004–2009", accolades: "All-Star ’09" },
  { id: "darrell-armstrong-magic-2000s", name: "Darrell Armstrong", franchiseId: "magic", decade: "2000s", positions: ["PG"], stats: { pts: 14.0, reb: 3.5, ast: 6.0, stl: 1.9, blk: 0.1 }, years: "2000–2003", accolades: "Coffee-fueled leader" },
  { id: "mike-miller-magic-2000s", name: "Mike Miller", franchiseId: "magic", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 13.0, reb: 4.5, ast: 2.5, stl: 0.7, blk: 0.2 }, years: "2000–2003", accolades: "ROY ’01" },
  { id: "steve-francis-magic-2000s", name: "Steve Francis", franchiseId: "magic", decade: "2000s", positions: ["PG"], stats: { pts: 18.5, reb: 5.5, ast: 6.5, stl: 1.3, blk: 0.3 }, years: "2004–2006", accolades: "Stevie Franchise flair" },

  // ---------------- 2010s ----------------
  { id: "dwight-howard-magic-2010s", name: "Dwight Howard", franchiseId: "magic", decade: "2010s", positions: ["C"], stats: { pts: 21.5, reb: 14.0, ast: 1.8, stl: 1.2, blk: 2.3 }, years: "2010–2012", accolades: "2× DPOY · superman peak" },
  { id: "nikola-vucevic-magic-2010s", name: "Nikola Vucevic", franchiseId: "magic", decade: "2010s", positions: ["C"], stats: { pts: 16.5, reb: 10.5, ast: 2.5, stl: 0.9, blk: 1.0 }, years: "2012–2019", accolades: "All-Star ’19 double-double" },
  { id: "jameer-nelson-magic-2010s", name: "Jameer Nelson", franchiseId: "magic", decade: "2010s", positions: ["PG"], stats: { pts: 12.5, reb: 3.5, ast: 5.5, stl: 1.0, blk: 0.1 }, years: "2010–2014", accolades: "Franchise-era holdover" },
  { id: "arron-afflalo-magic-2010s", name: "Arron Afflalo", franchiseId: "magic", decade: "2010s", positions: ["SG"], stats: { pts: 17.0, reb: 3.7, ast: 3.0, stl: 0.6, blk: 0.1 }, years: "2012–2014", accolades: "Polished scoring guard" },
  { id: "evan-fournier-magic-2010s", name: "Evan Fournier", franchiseId: "magic", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 15.5, reb: 3.0, ast: 3.0, stl: 1.0, blk: 0.2 }, years: "2014–2019", accolades: "Steady wing scorer" },
  { id: "tobias-harris-magic-2010s", name: "Tobias Harris", franchiseId: "magic", decade: "2010s", positions: ["PF", "SF"], stats: { pts: 15.5, reb: 6.5, ast: 1.8, stl: 0.7, blk: 0.4 }, years: "2012–2016", accolades: "Young building block" },
  { id: "aaron-gordon-magic-2010s", name: "Aaron Gordon", franchiseId: "magic", decade: "2010s", positions: ["PF", "SF"], stats: { pts: 13.0, reb: 6.5, ast: 2.5, stl: 0.8, blk: 0.6 }, years: "2014–2019", accolades: "Dunk-contest legend" },
  { id: "elfrid-payton-magic-2010s", name: "Elfrid Payton", franchiseId: "magic", decade: "2010s", positions: ["PG"], stats: { pts: 11.5, reb: 4.5, ast: 6.5, stl: 1.2, blk: 0.4 }, years: "2014–2018", accolades: "Triple-double threat" },
  { id: "ryan-anderson-magic-2010s", name: "Ryan Anderson", franchiseId: "magic", decade: "2010s", positions: ["PF"], stats: { pts: 14.0, reb: 6.5, ast: 1.0, stl: 0.6, blk: 0.4 }, years: "2010–2012", accolades: "MIP ’12 stretch four" },

  // ---------------- 2020s ----------------
  { id: "paolo-banchero-magic-2020s", name: "Paolo Banchero", franchiseId: "magic", decade: "2020s", positions: ["PF", "SF"], stats: { pts: 22.5, reb: 7.0, ast: 4.5, stl: 0.9, blk: 0.6 }, years: "2022–2026", accolades: "ROY ’23 · All-Star" },
  { id: "franz-wagner-magic-2020s", name: "Franz Wagner", franchiseId: "magic", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 20.5, reb: 5.5, ast: 4.5, stl: 1.1, blk: 0.4 }, years: "2021–2026", accolades: "Smooth German riser" },
  { id: "jalen-suggs-magic-2020s", name: "Jalen Suggs", franchiseId: "magic", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 13.5, reb: 3.5, ast: 3.5, stl: 1.4, blk: 0.6 }, years: "2021–2026", accolades: "All-Defense guard" },
  { id: "wendell-carter-jr-magic-2020s", name: "Wendell Carter Jr.", franchiseId: "magic", decade: "2020s", positions: ["C", "PF"], stats: { pts: 12.0, reb: 8.5, ast: 2.0, stl: 0.6, blk: 0.7 }, years: "2021–2026", accolades: "Sturdy modern center" },
  { id: "cole-anthony-magic-2020s", name: "Cole Anthony", franchiseId: "magic", decade: "2020s", positions: ["PG"], stats: { pts: 13.0, reb: 4.5, ast: 4.0, stl: 0.8, blk: 0.4 }, years: "2020–2025", accolades: "Microwave bench guard" },
  { id: "markelle-fultz-magic-2020s", name: "Markelle Fultz", franchiseId: "magic", decade: "2020s", positions: ["PG"], stats: { pts: 11.5, reb: 3.5, ast: 5.0, stl: 1.1, blk: 0.3 }, years: "2020–2024", accolades: "Reclamation playmaker" },
  { id: "nikola-vucevic-magic-2020s", name: "Nikola Vucevic", franchiseId: "magic", decade: "2020s", positions: ["C"], stats: { pts: 24.0, reb: 11.5, ast: 3.5, stl: 0.9, blk: 0.7 }, years: "2020–2021", accolades: "All-Star ’21 peak" },
  { id: "desmond-bane-magic-2020s", name: "Desmond Bane", franchiseId: "magic", decade: "2020s", positions: ["SG"], stats: { pts: 17.5, reb: 5.0, ast: 4.5, stl: 1.1, blk: 0.4 }, years: "2025–2026", accolades: "Sniper acquired to win now" },
];
