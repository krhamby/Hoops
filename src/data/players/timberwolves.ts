import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1980s (inaugural 1989-90 squad) ----------------
  { id: "tony-campbell-timberwolves-1980s", name: "Tony Campbell", franchiseId: "timberwolves", decade: "1980s", positions: ["SF", "SG"], stats: { pts: 23.2, reb: 5.5, ast: 2.7, stl: 1.3, blk: 0.5 }, years: "1989–1990", accolades: "First Wolves scoring leader" },
  { id: "pooh-richardson-timberwolves-1980s", name: "Pooh Richardson", franchiseId: "timberwolves", decade: "1980s", positions: ["PG"], stats: { pts: 11.4, reb: 2.9, ast: 6.8, stl: 1.3, blk: 0.1 }, years: "1989–1990", accolades: "First-ever Wolves draft pick" },
  { id: "tyrone-corbin-timberwolves-1980s", name: "Tyrone Corbin", franchiseId: "timberwolves", decade: "1980s", positions: ["SF"], stats: { pts: 14.7, reb: 6.0, ast: 2.7, stl: 1.6, blk: 0.3 }, years: "1989–1990", accolades: "Hard-nosed expansion starter" },
  { id: "sam-mitchell-timberwolves-1980s", name: "Sam Mitchell", franchiseId: "timberwolves", decade: "1980s", positions: ["SF", "PF"], stats: { pts: 12.5, reb: 5.2, ast: 1.5, stl: 0.7, blk: 0.6 }, years: "1989–1990", accolades: "Franchise culture-setter" },
  { id: "tod-murphy-timberwolves-1980s", name: "Tod Murphy", franchiseId: "timberwolves", decade: "1980s", positions: ["PF", "C"], stats: { pts: 9.1, reb: 7.6, ast: 1.6, stl: 0.8, blk: 0.6 }, years: "1989–1990", accolades: "Blue-collar board man" },
  { id: "randy-breuer-timberwolves-1980s", name: "Randy Breuer", franchiseId: "timberwolves", decade: "1980s", positions: ["C"], stats: { pts: 9.5, reb: 5.5, ast: 0.9, stl: 0.4, blk: 1.3 }, years: "1989–1990", accolades: "7'3\" Minnesota native" },
  { id: "sidney-lowe-timberwolves-1980s", name: "Sidney Lowe", franchiseId: "timberwolves", decade: "1980s", positions: ["PG"], stats: { pts: 7.7, reb: 2.5, ast: 4.5, stl: 1.0, blk: 0.1 }, years: "1989–1990", accolades: "Veteran expansion guard" },

  // ---------------- 1990s ----------------
  { id: "kevin-garnett-timberwolves-1990s", name: "Kevin Garnett", franchiseId: "timberwolves", decade: "1990s", positions: ["PF"], stats: { pts: 18.2, reb: 9.1, ast: 3.8, stl: 1.5, blk: 1.8 }, years: "1995–1999", accolades: "Prep-to-pro phenom · All-NBA" },
  { id: "tom-gugliotta-timberwolves-1990s", name: "Tom Gugliotta", franchiseId: "timberwolves", decade: "1990s", positions: ["PF"], stats: { pts: 18.5, reb: 8.5, ast: 3.5, stl: 1.4, blk: 0.8 }, years: "1995–1998", accolades: "All-Star do-it-all forward" },
  { id: "stephon-marbury-timberwolves-1990s", name: "Stephon Marbury", franchiseId: "timberwolves", decade: "1990s", positions: ["PG"], stats: { pts: 17.0, reb: 2.9, ast: 8.4, stl: 1.2, blk: 0.2 }, years: "1996–1999", accolades: "Starbury · electric young PG" },
  { id: "christian-laettner-timberwolves-1990s", name: "Christian Laettner", franchiseId: "timberwolves", decade: "1990s", positions: ["PF", "C"], stats: { pts: 17.2, reb: 8.0, ast: 3.1, stl: 1.2, blk: 1.0 }, years: "1992–1996", accolades: "Duke legend · No. 3 pick" },
  { id: "isaiah-rider-timberwolves-1990s", name: "Isaiah Rider", franchiseId: "timberwolves", decade: "1990s", positions: ["SG"], stats: { pts: 18.0, reb: 3.9, ast: 2.9, stl: 0.8, blk: 0.3 }, years: "1993–1996", accolades: "Dunk-contest champ scorer" },
  { id: "doug-west-timberwolves-1990s", name: "Doug West", franchiseId: "timberwolves", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 12.5, reb: 3.3, ast: 2.6, stl: 0.9, blk: 0.4 }, years: "1990–1998", accolades: "Longtime original Wolf" },
  { id: "terrell-brandon-timberwolves-1990s", name: "Terrell Brandon", franchiseId: "timberwolves", decade: "1990s", positions: ["PG"], stats: { pts: 15.5, reb: 3.0, ast: 8.0, stl: 1.7, blk: 0.3 }, years: "1999–2000", accolades: "Elite-efficiency point guard" },
  { id: "sam-mitchell-timberwolves-1990s", name: "Sam Mitchell", franchiseId: "timberwolves", decade: "1990s", positions: ["SF", "PF"], stats: { pts: 9.5, reb: 3.8, ast: 1.2, stl: 0.6, blk: 0.4 }, years: "1995–1999", accolades: "KG's veteran mentor" },

  // ---------------- 2000s ----------------
  { id: "kevin-garnett-timberwolves-2000s", name: "Kevin Garnett", franchiseId: "timberwolves", decade: "2000s", positions: ["PF"], stats: { pts: 22.4, reb: 12.4, ast: 5.0, stl: 1.4, blk: 1.8 }, years: "2000–2007", accolades: "2004 MVP · Big Ticket" },
  { id: "wally-szczerbiak-timberwolves-2000s", name: "Wally Szczerbiak", franchiseId: "timberwolves", decade: "2000s", positions: ["SF", "SG"], stats: { pts: 15.5, reb: 4.3, ast: 2.7, stl: 0.8, blk: 0.3 }, years: "2000–2006", accolades: "All-Star sweet shooter" },
  { id: "sam-cassell-timberwolves-2000s", name: "Sam Cassell", franchiseId: "timberwolves", decade: "2000s", positions: ["PG"], stats: { pts: 18.6, reb: 3.2, ast: 6.6, stl: 1.2, blk: 0.2 }, years: "2003–2005", accolades: "All-NBA in '04 WCF run" },
  { id: "latrell-sprewell-timberwolves-2000s", name: "Latrell Sprewell", franchiseId: "timberwolves", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 15.0, reb: 3.9, ast: 3.2, stl: 1.0, blk: 0.2 }, years: "2003–2005", accolades: "Fiery wing of 58-win team" },
  { id: "al-jefferson-timberwolves-2000s", name: "Al Jefferson", franchiseId: "timberwolves", decade: "2000s", positions: ["C", "PF"], stats: { pts: 20.1, reb: 10.4, ast: 1.6, stl: 0.8, blk: 1.5 }, years: "2007–2009", accolades: "Old-school post footwork" },
  { id: "kevin-love-timberwolves-2000s", name: "Kevin Love", franchiseId: "timberwolves", decade: "2000s", positions: ["PF", "C"], stats: { pts: 11.1, reb: 9.1, ast: 1.0, stl: 0.4, blk: 0.6 }, years: "2008–2009", accolades: "Outlet-pass prodigy rookie" },
  { id: "randy-foye-timberwolves-2000s", name: "Randy Foye", franchiseId: "timberwolves", decade: "2000s", positions: ["PG", "SG"], stats: { pts: 13.0, reb: 2.9, ast: 3.9, stl: 0.8, blk: 0.2 }, years: "2006–2009", accolades: "Combo-guard scorer" },
  { id: "troy-hudson-timberwolves-2000s", name: "Troy Hudson", franchiseId: "timberwolves", decade: "2000s", positions: ["PG"], stats: { pts: 12.0, reb: 2.2, ast: 4.5, stl: 0.7, blk: 0.1 }, years: "2002–2007", accolades: "Playoff-surprise scoring guard" },

  // ---------------- 2010s ----------------
  { id: "kevin-love-timberwolves-2010s", name: "Kevin Love", franchiseId: "timberwolves", decade: "2010s", positions: ["PF", "C"], stats: { pts: 23.5, reb: 13.0, ast: 3.4, stl: 0.7, blk: 0.5 }, years: "2010–2014", accolades: "3× All-Star · 30-30 game" },
  { id: "ricky-rubio-timberwolves-2010s", name: "Ricky Rubio", franchiseId: "timberwolves", decade: "2010s", positions: ["PG"], stats: { pts: 10.3, reb: 4.2, ast: 8.5, stl: 2.1, blk: 0.1 }, years: "2011–2017", accolades: "No-look pass artist" },
  { id: "karl-anthony-towns-timberwolves-2010s", name: "Karl-Anthony Towns", franchiseId: "timberwolves", decade: "2010s", positions: ["C"], stats: { pts: 22.7, reb: 11.8, ast: 2.9, stl: 0.8, blk: 1.4 }, years: "2015–2019", accolades: "2016 ROY · shooting big" },
  { id: "andrew-wiggins-timberwolves-2010s", name: "Andrew Wiggins", franchiseId: "timberwolves", decade: "2010s", positions: ["SF", "SG"], stats: { pts: 19.7, reb: 4.3, ast: 2.3, stl: 1.0, blk: 0.6 }, years: "2014–2019", accolades: "2015 ROY wing scorer" },
  { id: "jimmy-butler-timberwolves-2010s", name: "Jimmy Butler", franchiseId: "timberwolves", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 21.8, reb: 5.3, ast: 4.9, stl: 2.0, blk: 0.4 }, years: "2017–2018", accolades: "Ended 14-year playoff drought" },
  { id: "nikola-pekovic-timberwolves-2010s", name: "Nikola Pekovic", franchiseId: "timberwolves", decade: "2010s", positions: ["C"], stats: { pts: 13.5, reb: 7.5, ast: 0.9, stl: 0.6, blk: 0.5 }, years: "2010–2016", accolades: "Immovable post bruiser" },
  { id: "zach-lavine-timberwolves-2010s", name: "Zach LaVine", franchiseId: "timberwolves", decade: "2010s", positions: ["SG", "PG"], stats: { pts: 15.5, reb: 3.0, ast: 3.3, stl: 0.8, blk: 0.2 }, years: "2014–2017", accolades: "2× dunk-contest champion" },
  { id: "jeff-teague-timberwolves-2010s", name: "Jeff Teague", franchiseId: "timberwolves", decade: "2010s", positions: ["PG"], stats: { pts: 13.0, reb: 3.0, ast: 7.5, stl: 1.3, blk: 0.3 }, years: "2017–2019", accolades: "Veteran playoff-team PG" },

  // ---------------- 2020s ----------------
  { id: "anthony-edwards-timberwolves-2020s", name: "Anthony Edwards", franchiseId: "timberwolves", decade: "2020s", positions: ["SG"], stats: { pts: 25.5, reb: 5.5, ast: 4.5, stl: 1.3, blk: 0.6 }, years: "2020–2026", accolades: "Ant-Man · All-NBA showstopper" },
  { id: "karl-anthony-towns-timberwolves-2020s", name: "Karl-Anthony Towns", franchiseId: "timberwolves", decade: "2020s", positions: ["C", "PF"], stats: { pts: 22.5, reb: 9.5, ast: 3.5, stl: 0.8, blk: 1.0 }, years: "2020–2024", accolades: "All-NBA stretch big" },
  { id: "rudy-gobert-timberwolves-2020s", name: "Rudy Gobert", franchiseId: "timberwolves", decade: "2020s", positions: ["C"], stats: { pts: 13.0, reb: 11.8, ast: 1.5, stl: 0.7, blk: 2.0 }, years: "2022–2026", accolades: "4× DPOY rim fortress" },
  { id: "mike-conley-timberwolves-2020s", name: "Mike Conley", franchiseId: "timberwolves", decade: "2020s", positions: ["PG"], stats: { pts: 11.5, reb: 2.8, ast: 6.0, stl: 1.1, blk: 0.2 }, years: "2023–2026", accolades: "Steadying veteran hand" },
  { id: "jaden-mcdaniels-timberwolves-2020s", name: "Jaden McDaniels", franchiseId: "timberwolves", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 11.5, reb: 4.0, ast: 1.7, stl: 0.9, blk: 0.9 }, years: "2020–2026", accolades: "All-Defense wing eraser" },
  { id: "naz-reid-timberwolves-2020s", name: "Naz Reid", franchiseId: "timberwolves", decade: "2020s", positions: ["C", "PF"], stats: { pts: 12.5, reb: 4.8, ast: 1.4, stl: 0.7, blk: 0.9 }, years: "2020–2026", accolades: "2024 Sixth Man of the Year" },
  { id: "dangelo-russell-timberwolves-2020s", name: "D'Angelo Russell", franchiseId: "timberwolves", decade: "2020s", positions: ["PG"], stats: { pts: 18.0, reb: 3.2, ast: 6.5, stl: 1.0, blk: 0.3 }, years: "2020–2023", accolades: "Smooth lefty shot-maker" },
  { id: "julius-randle-timberwolves-2020s", name: "Julius Randle", franchiseId: "timberwolves", decade: "2020s", positions: ["PF"], stats: { pts: 19.0, reb: 7.0, ast: 4.5, stl: 0.7, blk: 0.3 }, years: "2024–2026", accolades: "Playoff-run power forward" },
];
