import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1970s ----------------
  { id: "austin-carr-cavaliers-1970s", name: "Austin Carr", franchiseId: "cavaliers", decade: "1970s", positions: ["SG"], stats: { pts: 18.5, reb: 3.5, ast: 3.5, stl: 0.9, blk: 0.2 }, years: "1971–1979", accolades: "All-Star · Mr. Cavalier" },
  { id: "bingo-smith-cavaliers-1970s", name: "Bingo Smith", franchiseId: "cavaliers", decade: "1970s", positions: ["SF", "SG"], stats: { pts: 13.5, reb: 5.0, ast: 2.0, stl: 0.8, blk: 0.2 }, years: "1970–1979", accolades: "Miracle of Richfield hero" },
  { id: "campy-russell-cavaliers-1970s", name: "Campy Russell", franchiseId: "cavaliers", decade: "1970s", positions: ["SF"], stats: { pts: 16.5, reb: 5.5, ast: 3.5, stl: 1.1, blk: 0.3 }, years: "1974–1979", accolades: "All-Star ’79 scorer" },
  { id: "jim-chones-cavaliers-1970s", name: "Jim Chones", franchiseId: "cavaliers", decade: "1970s", positions: ["C", "PF"], stats: { pts: 14.0, reb: 9.0, ast: 1.5, stl: 0.6, blk: 1.3 }, years: "1974–1979", accolades: "Miracle-era anchor" },
  { id: "dick-snyder-cavaliers-1970s", name: "Dick Snyder", franchiseId: "cavaliers", decade: "1970s", positions: ["SG", "SF"], stats: { pts: 13.0, reb: 3.0, ast: 3.0, stl: 0.8, blk: 0.3 }, years: "1974–1979", accolades: "Hit the ’76 series winner" },
  { id: "nate-thurmond-cavaliers-1970s", name: "Nate Thurmond", franchiseId: "cavaliers", decade: "1970s", positions: ["C"], stats: { pts: 5.5, reb: 6.5, ast: 1.5, stl: 0.5, blk: 1.5 }, years: "1975–1977", accolades: "HOF defensive savior" },
  { id: "jim-cleamons-cavaliers-1970s", name: "Jim Cleamons", franchiseId: "cavaliers", decade: "1970s", positions: ["PG"], stats: { pts: 10.5, reb: 3.5, ast: 4.5, stl: 1.1, blk: 0.2 }, years: "1972–1977", accolades: "Steady lead guard" },
  { id: "foots-walker-cavaliers-1970s", name: "Foots Walker", franchiseId: "cavaliers", decade: "1970s", positions: ["PG"], stats: { pts: 8.0, reb: 2.5, ast: 4.5, stl: 1.7, blk: 0.1 }, years: "1974–1979", accolades: "Pesky playmaker" },

  // ---------------- 1980s ----------------
  { id: "world-b-free-cavaliers-1980s", name: "World B. Free", franchiseId: "cavaliers", decade: "1980s", positions: ["SG"], stats: { pts: 23.0, reb: 3.0, ast: 4.0, stl: 1.0, blk: 0.2 }, years: "1982–1986", accolades: "Franchise-saving showman" },
  { id: "mark-price-cavaliers-1980s", name: "Mark Price", franchiseId: "cavaliers", decade: "1980s", positions: ["PG"], stats: { pts: 16.5, reb: 2.8, ast: 7.0, stl: 1.3, blk: 0.1 }, years: "1986–1989", accolades: "All-Star · 90-50-40 touch" },
  { id: "brad-daugherty-cavaliers-1980s", name: "Brad Daugherty", franchiseId: "cavaliers", decade: "1980s", positions: ["C"], stats: { pts: 19.0, reb: 9.0, ast: 3.5, stl: 0.7, blk: 0.7 }, years: "1986–1989", accolades: "No. 1 pick · All-Star" },
  { id: "ron-harper-cavaliers-1980s", name: "Ron Harper", franchiseId: "cavaliers", decade: "1980s", positions: ["SG", "PG"], stats: { pts: 19.0, reb: 5.0, ast: 4.5, stl: 2.2, blk: 0.8 }, years: "1986–1989", accolades: "Explosive All-Rookie" },
  { id: "larry-nance-cavaliers-1980s", name: "Larry Nance", franchiseId: "cavaliers", decade: "1980s", positions: ["PF"], stats: { pts: 17.0, reb: 8.0, ast: 2.5, stl: 0.8, blk: 2.5 }, years: "1988–1989", accolades: "High-flying shot blocker" },
  { id: "hot-rod-williams-cavaliers-1980s", name: "John 'Hot Rod' Williams", franchiseId: "cavaliers", decade: "1980s", positions: ["PF", "C"], stats: { pts: 13.5, reb: 7.5, ast: 1.8, stl: 0.8, blk: 2.0 }, years: "1986–1989", accolades: "Super sixth big" },
  { id: "phil-hubbard-cavaliers-1980s", name: "Phil Hubbard", franchiseId: "cavaliers", decade: "1980s", positions: ["PF", "SF"], stats: { pts: 10.5, reb: 5.0, ast: 1.5, stl: 0.9, blk: 0.2 }, years: "1982–1989", accolades: "Hard-hat forward" },
  { id: "roy-hinson-cavaliers-1980s", name: "Roy Hinson", franchiseId: "cavaliers", decade: "1980s", positions: ["PF", "C"], stats: { pts: 14.5, reb: 7.5, ast: 1.3, stl: 0.6, blk: 2.0 }, years: "1983–1986", accolades: "Swat specialist" },
  { id: "craig-ehlo-cavaliers-1980s", name: "Craig Ehlo", franchiseId: "cavaliers", decade: "1980s", positions: ["SG", "SF"], stats: { pts: 8.5, reb: 3.5, ast: 3.5, stl: 1.1, blk: 0.3 }, years: "1986–1989", accolades: "Versatile glue guard" },

  // ---------------- 1990s ----------------
  { id: "mark-price-cavaliers-1990s", name: "Mark Price", franchiseId: "cavaliers", decade: "1990s", positions: ["PG"], stats: { pts: 17.5, reb: 2.7, ast: 7.5, stl: 1.3, blk: 0.1 }, years: "1990–1995", accolades: "4× All-Star · FT king" },
  { id: "brad-daugherty-cavaliers-1990s", name: "Brad Daugherty", franchiseId: "cavaliers", decade: "1990s", positions: ["C"], stats: { pts: 19.5, reb: 10.0, ast: 3.5, stl: 0.8, blk: 0.6 }, years: "1990–1994", accolades: "5× All-Star center" },
  { id: "larry-nance-cavaliers-1990s", name: "Larry Nance", franchiseId: "cavaliers", decade: "1990s", positions: ["PF"], stats: { pts: 15.5, reb: 8.0, ast: 2.5, stl: 0.9, blk: 2.3 }, years: "1990–1994", accolades: "All-Star · elite weak-side block" },
  { id: "terrell-brandon-cavaliers-1990s", name: "Terrell Brandon", franchiseId: "cavaliers", decade: "1990s", positions: ["PG"], stats: { pts: 13.5, reb: 3.0, ast: 5.5, stl: 1.6, blk: 0.3 }, years: "1991–1997", accolades: "2× All-Star sparkplug" },
  { id: "craig-ehlo-cavaliers-1990s", name: "Craig Ehlo", franchiseId: "cavaliers", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 10.0, reb: 4.5, ast: 4.5, stl: 1.3, blk: 0.4 }, years: "1990–1993", accolades: "Do-everything wing" },
  { id: "hot-rod-williams-cavaliers-1990s", name: "John 'Hot Rod' Williams", franchiseId: "cavaliers", decade: "1990s", positions: ["PF", "C"], stats: { pts: 11.5, reb: 7.0, ast: 2.0, stl: 0.8, blk: 1.8 }, years: "1990–1995", accolades: "Sixth-man stopper" },
  { id: "shawn-kemp-cavaliers-1990s", name: "Shawn Kemp", franchiseId: "cavaliers", decade: "1990s", positions: ["PF"], stats: { pts: 18.5, reb: 9.5, ast: 2.0, stl: 1.1, blk: 1.2 }, years: "1997–1999", accolades: "All-Star Reign Man" },
  { id: "zydrunas-ilgauskas-cavaliers-1990s", name: "Zydrunas Ilgauskas", franchiseId: "cavaliers", decade: "1990s", positions: ["C"], stats: { pts: 13.0, reb: 8.0, ast: 1.0, stl: 0.6, blk: 1.6 }, years: "1997–1999", accolades: "All-Rookie 7-3 touch" },

  // ---------------- 2000s ----------------
  { id: "lebron-james-cavaliers-2000s", name: "LeBron James", franchiseId: "cavaliers", decade: "2000s", positions: ["SF", "PG"], stats: { pts: 27.5, reb: 7.0, ast: 6.7, stl: 1.8, blk: 0.8 }, years: "2003–2009", accolades: "MVP ’09 · ROY ’04" },
  { id: "zydrunas-ilgauskas-cavaliers-2000s", name: "Zydrunas Ilgauskas", franchiseId: "cavaliers", decade: "2000s", positions: ["C"], stats: { pts: 14.5, reb: 7.5, ast: 1.2, stl: 0.5, blk: 1.7 }, years: "2000–2009", accolades: "2× All-Star · Big Z" },
  { id: "mo-williams-cavaliers-2000s", name: "Mo Williams", franchiseId: "cavaliers", decade: "2000s", positions: ["PG"], stats: { pts: 17.5, reb: 3.5, ast: 4.5, stl: 0.9, blk: 0.1 }, years: "2008–2009", accolades: "All-Star ’09 · 66-win team" },
  { id: "carlos-boozer-cavaliers-2000s", name: "Carlos Boozer", franchiseId: "cavaliers", decade: "2000s", positions: ["PF"], stats: { pts: 12.5, reb: 8.5, ast: 1.5, stl: 0.8, blk: 0.5 }, years: "2002–2004", accolades: "Second-round steal" },
  { id: "andre-miller-cavaliers-2000s", name: "Andre Miller", franchiseId: "cavaliers", decade: "2000s", positions: ["PG"], stats: { pts: 14.5, reb: 4.0, ast: 9.0, stl: 1.3, blk: 0.2 }, years: "2000–2002", accolades: "Assist champ ’02" },
  { id: "larry-hughes-cavaliers-2000s", name: "Larry Hughes", franchiseId: "cavaliers", decade: "2000s", positions: ["SG", "PG"], stats: { pts: 14.0, reb: 4.0, ast: 3.5, stl: 1.4, blk: 0.4 }, years: "2005–2008", accolades: "Finals ’07 sidekick" },
  { id: "anderson-varejao-cavaliers-2000s", name: "Anderson Varejao", franchiseId: "cavaliers", decade: "2000s", positions: ["PF", "C"], stats: { pts: 7.5, reb: 6.5, ast: 0.9, stl: 0.8, blk: 0.7 }, years: "2004–2009", accolades: "Wild Thing hustle" },
  { id: "daniel-gibson-cavaliers-2000s", name: "Daniel Gibson", franchiseId: "cavaliers", decade: "2000s", positions: ["PG", "SG"], stats: { pts: 9.5, reb: 2.5, ast: 2.0, stl: 0.8, blk: 0.2 }, years: "2006–2009", accolades: "Boobie · ’07 Game 6 bombs" },

  // ---------------- 2010s ----------------
  { id: "lebron-james-cavaliers-2010s", name: "LeBron James", franchiseId: "cavaliers", decade: "2010s", positions: ["SF", "PF"], stats: { pts: 26.5, reb: 7.5, ast: 8.0, stl: 1.4, blk: 0.7 }, years: "2014–2018", accolades: "Champ ’16 · The Block" },
  { id: "kyrie-irving-cavaliers-2010s", name: "Kyrie Irving", franchiseId: "cavaliers", decade: "2010s", positions: ["PG"], stats: { pts: 21.5, reb: 3.5, ast: 5.5, stl: 1.3, blk: 0.3 }, years: "2011–2017", accolades: "ROY ’12 · The Shot ’16" },
  { id: "kevin-love-cavaliers-2010s", name: "Kevin Love", franchiseId: "cavaliers", decade: "2010s", positions: ["PF", "C"], stats: { pts: 17.0, reb: 10.0, ast: 2.3, stl: 0.7, blk: 0.4 }, years: "2014–2019", accolades: "Champ ’16 · stretch glass" },
  { id: "tristan-thompson-cavaliers-2010s", name: "Tristan Thompson", franchiseId: "cavaliers", decade: "2010s", positions: ["C", "PF"], stats: { pts: 9.0, reb: 8.5, ast: 0.9, stl: 0.5, blk: 0.7 }, years: "2011–2019", accolades: "Champ ’16 · offensive glass" },
  { id: "jr-smith-cavaliers-2010s", name: "J.R. Smith", franchiseId: "cavaliers", decade: "2010s", positions: ["SG"], stats: { pts: 10.5, reb: 3.0, ast: 2.0, stl: 0.9, blk: 0.3 }, years: "2015–2019", accolades: "Champ ’16 gunner" },
  { id: "anderson-varejao-cavaliers-2010s", name: "Anderson Varejao", franchiseId: "cavaliers", decade: "2010s", positions: ["C", "PF"], stats: { pts: 8.5, reb: 8.0, ast: 1.5, stl: 0.9, blk: 0.7 }, years: "2010–2016", accolades: "Fan-favorite big" },
  { id: "dion-waiters-cavaliers-2010s", name: "Dion Waiters", franchiseId: "cavaliers", decade: "2010s", positions: ["SG"], stats: { pts: 14.5, reb: 2.5, ast: 3.0, stl: 0.9, blk: 0.2 }, years: "2012–2015", accolades: "Bucket-hunting guard" },
  { id: "collin-sexton-cavaliers-2010s", name: "Collin Sexton", franchiseId: "cavaliers", decade: "2010s", positions: ["PG", "SG"], stats: { pts: 16.7, reb: 3.0, ast: 3.0, stl: 0.7, blk: 0.1 }, years: "2018–2019", accolades: "Young Bull rookie" },

  // ---------------- 2020s ----------------
  { id: "donovan-mitchell-cavaliers-2020s", name: "Donovan Mitchell", franchiseId: "cavaliers", decade: "2020s", positions: ["SG"], stats: { pts: 27.0, reb: 4.7, ast: 5.0, stl: 1.6, blk: 0.4 }, years: "2022–2026", accolades: "All-NBA · 71-pt game" },
  { id: "darius-garland-cavaliers-2020s", name: "Darius Garland", franchiseId: "cavaliers", decade: "2020s", positions: ["PG"], stats: { pts: 20.0, reb: 2.7, ast: 7.5, stl: 1.2, blk: 0.1 }, years: "2020–2026", accolades: "All-Star ’22 · silky handles" },
  { id: "evan-mobley-cavaliers-2020s", name: "Evan Mobley", franchiseId: "cavaliers", decade: "2020s", positions: ["PF", "C"], stats: { pts: 16.5, reb: 9.0, ast: 3.0, stl: 0.9, blk: 1.5 }, years: "2021–2026", accolades: "DPOY ’25 · All-NBA" },
  { id: "jarrett-allen-cavaliers-2020s", name: "Jarrett Allen", franchiseId: "cavaliers", decade: "2020s", positions: ["C"], stats: { pts: 14.5, reb: 10.0, ast: 1.8, stl: 0.7, blk: 1.2 }, years: "2021–2026", accolades: "All-Star ’22 anchor" },
  { id: "collin-sexton-cavaliers-2020s", name: "Collin Sexton", franchiseId: "cavaliers", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 22.0, reb: 3.0, ast: 4.0, stl: 0.9, blk: 0.2 }, years: "2020–2022", accolades: "Relentless downhill scorer" },
  { id: "kevin-love-cavaliers-2020s", name: "Kevin Love", franchiseId: "cavaliers", decade: "2020s", positions: ["PF", "C"], stats: { pts: 12.5, reb: 7.5, ast: 2.5, stl: 0.5, blk: 0.3 }, years: "2020–2023", accolades: "Outlet-pass artist" },
  { id: "max-strus-cavaliers-2020s", name: "Max Strus", franchiseId: "cavaliers", decade: "2020s", positions: ["SG", "SF"], stats: { pts: 11.5, reb: 4.5, ast: 3.5, stl: 0.7, blk: 0.3 }, years: "2023–2026", accolades: "Floor-spacing grinder" },
  { id: "deandre-hunter-cavaliers-2020s", name: "De'Andre Hunter", franchiseId: "cavaliers", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 14.0, reb: 4.0, ast: 1.5, stl: 0.8, blk: 0.4 }, years: "2025–2026", accolades: "3-and-D forward" },
];
