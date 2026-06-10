import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1960s ----------------
  { id: "gail-goodrich-suns-1960s", name: "Gail Goodrich", franchiseId: "suns", decade: "1960s", positions: ["SG", "PG"], stats: { pts: 23.8, reb: 4.5, ast: 6.4, stl: 1.0, blk: 0.1 }, years: "1968–1970", accolades: "Expansion-pick All-Star" },
  { id: "dick-van-arsdale-suns-1960s", name: "Dick Van Arsdale", franchiseId: "suns", decade: "1960s", positions: ["SF", "SG"], stats: { pts: 21.3, reb: 4.5, ast: 4.1, stl: 1.0, blk: 0.2 }, years: "1968–1970", accolades: "The Original Sun" },
  { id: "connie-hawkins-suns-1960s", name: "Connie Hawkins", franchiseId: "suns", decade: "1960s", positions: ["SF", "PF"], stats: { pts: 24.6, reb: 10.4, ast: 4.8, stl: 1.2, blk: 0.8 }, years: "1969–1970", accolades: "The Hawk finally lands in NBA" },
  { id: "gary-gregor-suns-1960s", name: "Gary Gregor", franchiseId: "suns", decade: "1960s", positions: ["PF"], stats: { pts: 11.1, reb: 8.9, ast: 1.2, stl: 0.5, blk: 0.3 }, years: "1968–1969", accolades: "All-Rookie inaugural Sun" },
  { id: "jim-fox-suns-1960s", name: "Jim Fox", franchiseId: "suns", decade: "1960s", positions: ["C", "PF"], stats: { pts: 10.5, reb: 7.5, ast: 1.6, stl: 0.5, blk: 0.5 }, years: "1968–1970", accolades: "Workmanlike expansion big" },
  { id: "dick-snyder-suns-1960s", name: "Dick Snyder", franchiseId: "suns", decade: "1960s", positions: ["SG", "SF"], stats: { pts: 12.0, reb: 3.5, ast: 2.8, stl: 0.7, blk: 0.3 }, years: "1968–1969", accolades: "Sweet-shooting early Sun" },

  // ---------------- 1970s ----------------
  { id: "connie-hawkins-suns-1970s", name: "Connie Hawkins", franchiseId: "suns", decade: "1970s", positions: ["SF", "PF"], stats: { pts: 20.8, reb: 9.0, ast: 4.5, stl: 1.0, blk: 0.7 }, years: "1970–1973", accolades: "Playground-legend All-Star" },
  { id: "paul-westphal-suns-1970s", name: "Paul Westphal", franchiseId: "suns", decade: "1970s", positions: ["SG", "PG"], stats: { pts: 22.5, reb: 2.5, ast: 5.5, stl: 1.6, blk: 0.3 }, years: "1975–1979", accolades: "4× All-Star · '76 Finals run" },
  { id: "alvan-adams-suns-1970s", name: "Alvan Adams", franchiseId: "suns", decade: "1970s", positions: ["C", "PF"], stats: { pts: 16.5, reb: 8.5, ast: 4.5, stl: 1.3, blk: 1.1 }, years: "1975–1979", accolades: "1976 ROY · passing pivot" },
  { id: "walter-davis-suns-1970s", name: "Walter Davis", franchiseId: "suns", decade: "1970s", positions: ["SG", "SF"], stats: { pts: 24.0, reb: 5.5, ast: 4.2, stl: 1.3, blk: 0.3 }, years: "1977–1979", accolades: "1978 ROY · Greyhound smooth" },
  { id: "charlie-scott-suns-1970s", name: "Charlie Scott", franchiseId: "suns", decade: "1970s", positions: ["SG", "PG"], stats: { pts: 24.5, reb: 4.2, ast: 4.8, stl: 1.2, blk: 0.3 }, years: "1972–1975", accolades: "3× All-Star scoring guard" },
  { id: "dick-van-arsdale-suns-1970s", name: "Dick Van Arsdale", franchiseId: "suns", decade: "1970s", positions: ["SF", "SG"], stats: { pts: 17.5, reb: 3.8, ast: 3.5, stl: 1.0, blk: 0.2 }, years: "1970–1977", accolades: "3× All-Star franchise face" },
  { id: "neal-walk-suns-1970s", name: "Neal Walk", franchiseId: "suns", decade: "1970s", positions: ["C"], stats: { pts: 15.5, reb: 9.5, ast: 2.8, stl: 0.7, blk: 0.7 }, years: "1970–1974", accolades: "20-and-12 peak season" },
  { id: "garfield-heard-suns-1970s", name: "Garfield Heard", franchiseId: "suns", decade: "1970s", positions: ["PF"], stats: { pts: 11.5, reb: 8.5, ast: 1.8, stl: 1.0, blk: 0.9 }, years: "1976–1979", accolades: "Shot heard 'round the world" },

  // ---------------- 1980s ----------------
  { id: "walter-davis-suns-1980s", name: "Walter Davis", franchiseId: "suns", decade: "1980s", positions: ["SG", "SF"], stats: { pts: 20.5, reb: 3.5, ast: 4.5, stl: 1.2, blk: 0.2 }, years: "1980–1988", accolades: "6× All-Star · franchise scorer" },
  { id: "larry-nance-suns-1980s", name: "Larry Nance", franchiseId: "suns", decade: "1980s", positions: ["PF"], stats: { pts: 17.5, reb: 8.0, ast: 2.5, stl: 1.0, blk: 2.0 }, years: "1981–1988", accolades: "First dunk-contest champ" },
  { id: "dennis-johnson-suns-1980s", name: "Dennis Johnson", franchiseId: "suns", decade: "1980s", positions: ["SG", "PG"], stats: { pts: 17.5, reb: 4.5, ast: 4.5, stl: 1.5, blk: 0.7 }, years: "1980–1983", accolades: "All-NBA two-way guard" },
  { id: "alvan-adams-suns-1980s", name: "Alvan Adams", franchiseId: "suns", decade: "1980s", positions: ["C"], stats: { pts: 12.5, reb: 6.5, ast: 3.8, stl: 1.1, blk: 0.7 }, years: "1980–1988", accolades: "Franchise games-played leader" },
  { id: "kevin-johnson-suns-1980s", name: "Kevin Johnson", franchiseId: "suns", decade: "1980s", positions: ["PG"], stats: { pts: 18.5, reb: 4.0, ast: 11.4, stl: 1.6, blk: 0.3 }, years: "1988–1989", accolades: "1989 MIP · instant star" },
  { id: "tom-chambers-suns-1980s", name: "Tom Chambers", franchiseId: "suns", decade: "1980s", positions: ["PF"], stats: { pts: 25.0, reb: 7.5, ast: 2.5, stl: 1.0, blk: 0.7 }, years: "1988–1989", accolades: "All-NBA scoring forward" },
  { id: "jeff-hornacek-suns-1980s", name: "Jeff Hornacek", franchiseId: "suns", decade: "1980s", positions: ["SG", "PG"], stats: { pts: 11.5, reb: 3.5, ast: 5.0, stl: 1.4, blk: 0.2 }, years: "1986–1989", accolades: "Crafty rising guard" },
  { id: "eddie-johnson-suns-1980s", name: "Eddie Johnson", franchiseId: "suns", decade: "1980s", positions: ["SF"], stats: { pts: 19.5, reb: 4.2, ast: 2.0, stl: 0.7, blk: 0.2 }, years: "1987–1989", accolades: "1989 Sixth Man of the Year" },
  { id: "james-edwards-suns-1980s", name: "James Edwards", franchiseId: "suns", decade: "1980s", positions: ["C"], stats: { pts: 15.5, reb: 6.5, ast: 1.5, stl: 0.5, blk: 0.8 }, years: "1981–1988", accolades: "Buddha · post-up specialist" },

  // ---------------- 1990s ----------------
  { id: "charles-barkley-suns-1990s", name: "Charles Barkley", franchiseId: "suns", decade: "1990s", positions: ["PF"], stats: { pts: 23.4, reb: 11.5, ast: 4.4, stl: 1.5, blk: 0.8 }, years: "1992–1996", accolades: "1993 MVP · Finals run" },
  { id: "kevin-johnson-suns-1990s", name: "Kevin Johnson", franchiseId: "suns", decade: "1990s", positions: ["PG"], stats: { pts: 19.0, reb: 3.5, ast: 9.5, stl: 1.5, blk: 0.3 }, years: "1990–1998", accolades: "3× All-NBA blur with hops" },
  { id: "dan-majerle-suns-1990s", name: "Dan Majerle", franchiseId: "suns", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 14.5, reb: 4.8, ast: 3.0, stl: 1.5, blk: 0.4 }, years: "1990–1995", accolades: "Thunder Dan · All-Defense" },
  { id: "tom-chambers-suns-1990s", name: "Tom Chambers", franchiseId: "suns", decade: "1990s", positions: ["PF"], stats: { pts: 18.5, reb: 6.5, ast: 2.2, stl: 0.9, blk: 0.6 }, years: "1990–1993", accolades: "60-point game Sun" },
  { id: "jason-kidd-suns-1990s", name: "Jason Kidd", franchiseId: "suns", decade: "1990s", positions: ["PG"], stats: { pts: 11.5, reb: 6.2, ast: 9.0, stl: 2.0, blk: 0.3 }, years: "1996–1999", accolades: "Assist-champ floor genius" },
  { id: "cedric-ceballos-suns-1990s", name: "Cedric Ceballos", franchiseId: "suns", decade: "1990s", positions: ["SF"], stats: { pts: 15.5, reb: 6.0, ast: 1.4, stl: 0.9, blk: 0.4 }, years: "1990–1994", accolades: "Blindfold dunk champ" },
  { id: "danny-manning-suns-1990s", name: "Danny Manning", franchiseId: "suns", decade: "1990s", positions: ["PF", "SF"], stats: { pts: 14.5, reb: 5.5, ast: 2.5, stl: 1.0, blk: 0.7 }, years: "1994–1999", accolades: "1998 Sixth Man of the Year" },
  { id: "rex-chapman-suns-1990s", name: "Rex Chapman", franchiseId: "suns", decade: "1990s", positions: ["SG"], stats: { pts: 12.5, reb: 2.5, ast: 2.2, stl: 0.7, blk: 0.2 }, years: "1996–2000", accolades: "Playoff buzzer-beater legend" },
  { id: "clifford-robinson-suns-1990s", name: "Clifford Robinson", franchiseId: "suns", decade: "1990s", positions: ["PF", "C"], stats: { pts: 15.5, reb: 4.8, ast: 2.5, stl: 1.1, blk: 0.9 }, years: "1997–1999", accolades: "Versatile veteran big" },

  // ---------------- 2000s ----------------
  { id: "steve-nash-suns-2000s", name: "Steve Nash", franchiseId: "suns", decade: "2000s", positions: ["PG"], stats: { pts: 17.0, reb: 3.3, ast: 10.9, stl: 0.8, blk: 0.1 }, years: "2004–2009", accolades: "Back-to-back MVP · 7SOL" },
  { id: "amare-stoudemire-suns-2000s", name: "Amar'e Stoudemire", franchiseId: "suns", decade: "2000s", positions: ["PF", "C"], stats: { pts: 21.4, reb: 8.9, ast: 1.4, stl: 0.9, blk: 1.4 }, years: "2002–2009", accolades: "STAT · 2003 ROY · dunk machine" },
  { id: "shawn-marion-suns-2000s", name: "Shawn Marion", franchiseId: "suns", decade: "2000s", positions: ["SF", "PF"], stats: { pts: 18.4, reb: 10.0, ast: 2.0, stl: 1.9, blk: 1.3 }, years: "2000–2008", accolades: "The Matrix · 4× All-Star" },
  { id: "joe-johnson-suns-2000s", name: "Joe Johnson", franchiseId: "suns", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 16.5, reb: 4.5, ast: 4.4, stl: 0.9, blk: 0.2 }, years: "2002–2005", accolades: "Iso Joe breakout" },
  { id: "stephon-marbury-suns-2000s", name: "Stephon Marbury", franchiseId: "suns", decade: "2000s", positions: ["PG"], stats: { pts: 21.0, reb: 3.2, ast: 8.1, stl: 1.0, blk: 0.2 }, years: "2001–2004", accolades: "All-Star scoring point" },
  { id: "leandro-barbosa-suns-2000s", name: "Leandro Barbosa", franchiseId: "suns", decade: "2000s", positions: ["SG", "PG"], stats: { pts: 14.0, reb: 2.7, ast: 3.0, stl: 1.0, blk: 0.1 }, years: "2003–2009", accolades: "Brazilian Blur · 2007 6MOY" },
  { id: "raja-bell-suns-2000s", name: "Raja Bell", franchiseId: "suns", decade: "2000s", positions: ["SG"], stats: { pts: 12.5, reb: 3.0, ast: 2.2, stl: 0.9, blk: 0.2 }, years: "2005–2008", accolades: "All-Defense corner sniper" },
  { id: "grant-hill-suns-2000s", name: "Grant Hill", franchiseId: "suns", decade: "2000s", positions: ["SF"], stats: { pts: 12.5, reb: 5.0, ast: 2.7, stl: 0.9, blk: 0.5 }, years: "2007–2009", accolades: "Revitalized Hall of Famer" },
  { id: "shaquille-oneal-suns-2000s", name: "Shaquille O'Neal", franchiseId: "suns", decade: "2000s", positions: ["C"], stats: { pts: 16.5, reb: 9.5, ast: 1.5, stl: 0.5, blk: 1.3 }, years: "2008–2009", accolades: "Big Cactus All-Star year" },

  // ---------------- 2010s ----------------
  { id: "steve-nash-suns-2010s", name: "Steve Nash", franchiseId: "suns", decade: "2010s", positions: ["PG"], stats: { pts: 13.5, reb: 3.0, ast: 11.0, stl: 0.6, blk: 0.1 }, years: "2010–2012", accolades: "Assist-champ final Suns years" },
  { id: "goran-dragic-suns-2010s", name: "Goran Dragic", franchiseId: "suns", decade: "2010s", positions: ["PG"], stats: { pts: 16.5, reb: 3.0, ast: 5.0, stl: 1.2, blk: 0.3 }, years: "2010–2015", accolades: "2014 MIP · Dragon drives" },
  { id: "eric-bledsoe-suns-2010s", name: "Eric Bledsoe", franchiseId: "suns", decade: "2010s", positions: ["PG", "SG"], stats: { pts: 18.0, reb: 4.5, ast: 5.8, stl: 1.5, blk: 0.5 }, years: "2013–2017", accolades: "Mini-LeBron athleticism" },
  { id: "devin-booker-suns-2010s", name: "Devin Booker", franchiseId: "suns", decade: "2010s", positions: ["SG"], stats: { pts: 22.5, reb: 3.5, ast: 4.5, stl: 0.9, blk: 0.3 }, years: "2015–2019", accolades: "70-point game at 20" },
  { id: "tj-warren-suns-2010s", name: "T.J. Warren", franchiseId: "suns", decade: "2010s", positions: ["SF"], stats: { pts: 15.5, reb: 4.5, ast: 1.2, stl: 1.0, blk: 0.5 }, years: "2014–2019", accolades: "Buckets in his sleep" },
  { id: "markieff-morris-suns-2010s", name: "Markieff Morris", franchiseId: "suns", decade: "2010s", positions: ["PF"], stats: { pts: 11.5, reb: 5.0, ast: 1.8, stl: 0.9, blk: 0.5 }, years: "2011–2016", accolades: "Physical stretch four" },
  { id: "pj-tucker-suns-2010s", name: "P.J. Tucker", franchiseId: "suns", decade: "2010s", positions: ["SF", "PF"], stats: { pts: 8.5, reb: 6.0, ast: 1.5, stl: 1.3, blk: 0.3 }, years: "2012–2017", accolades: "Corner-three enforcer" },
  { id: "marcin-gortat-suns-2010s", name: "Marcin Gortat", franchiseId: "suns", decade: "2010s", positions: ["C"], stats: { pts: 13.5, reb: 9.5, ast: 1.3, stl: 0.6, blk: 1.4 }, years: "2010–2013", accolades: "Polish Hammer pick-and-roll" },
  { id: "channing-frye-suns-2010s", name: "Channing Frye", franchiseId: "suns", decade: "2010s", positions: ["PF", "C"], stats: { pts: 11.0, reb: 5.5, ast: 1.3, stl: 0.6, blk: 0.8 }, years: "2010–2014", accolades: "Stretch-five spacing" },

  // ---------------- 2020s ----------------
  { id: "devin-booker-suns-2020s", name: "Devin Booker", franchiseId: "suns", decade: "2020s", positions: ["SG", "PG"], stats: { pts: 27.0, reb: 4.6, ast: 6.0, stl: 1.0, blk: 0.4 }, years: "2020–2026", accolades: "All-NBA · 2021 Finals run" },
  { id: "chris-paul-suns-2020s", name: "Chris Paul", franchiseId: "suns", decade: "2020s", positions: ["PG"], stats: { pts: 15.5, reb: 4.4, ast: 9.5, stl: 1.5, blk: 0.3 }, years: "2020–2023", accolades: "Turned Suns into Finals team" },
  { id: "kevin-durant-suns-2020s", name: "Kevin Durant", franchiseId: "suns", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 27.5, reb: 6.5, ast: 4.5, stl: 0.8, blk: 1.2 }, years: "2023–2025", accolades: "Surgical scoring legend" },
  { id: "deandre-ayton-suns-2020s", name: "Deandre Ayton", franchiseId: "suns", decade: "2020s", positions: ["C"], stats: { pts: 16.5, reb: 10.5, ast: 1.6, stl: 0.6, blk: 0.9 }, years: "2020–2023", accolades: "Valley-Oop title-run center" },
  { id: "bradley-beal-suns-2020s", name: "Bradley Beal", franchiseId: "suns", decade: "2020s", positions: ["SG"], stats: { pts: 17.5, reb: 4.2, ast: 4.5, stl: 1.0, blk: 0.4 }, years: "2023–2025", accolades: "3× All-Star scoring guard" },
  { id: "mikal-bridges-suns-2020s", name: "Mikal Bridges", franchiseId: "suns", decade: "2020s", positions: ["SF"], stats: { pts: 13.5, reb: 4.3, ast: 2.2, stl: 1.2, blk: 0.4 }, years: "2020–2023", accolades: "Iron-man All-Defense wing" },
  { id: "cameron-johnson-suns-2020s", name: "Cameron Johnson", franchiseId: "suns", decade: "2020s", positions: ["PF", "SF"], stats: { pts: 11.5, reb: 4.0, ast: 1.5, stl: 0.9, blk: 0.3 }, years: "2020–2023", accolades: "Knockdown forward" },
  { id: "grayson-allen-suns-2020s", name: "Grayson Allen", franchiseId: "suns", decade: "2020s", positions: ["SG"], stats: { pts: 12.5, reb: 3.5, ast: 3.0, stl: 0.9, blk: 0.5 }, years: "2023–2026", accolades: "League-best 3-point season" },
];
