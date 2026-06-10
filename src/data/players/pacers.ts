import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1970s (ABA dynasty + NBA entry) ----------------
  { id: "george-mcginnis-pacers-1970s", name: "George McGinnis", franchiseId: "pacers", decade: "1970s", positions: ["PF"], stats: { pts: 24.0, reb: 12.0, ast: 3.5, stl: 2.2, blk: 0.5 }, years: "1971–1975", accolades: "ABA MVP ’75 · 2× champ" },
  { id: "mel-daniels-pacers-1970s", name: "Mel Daniels", franchiseId: "pacers", decade: "1970s", positions: ["C"], stats: { pts: 19.0, reb: 15.0, ast: 1.8, stl: 0.6, blk: 2.0 }, years: "1970–1974", accolades: "2× ABA MVP · 3× champ" },
  { id: "roger-brown-pacers-1970s", name: "Roger Brown", franchiseId: "pacers", decade: "1970s", positions: ["SF"], stats: { pts: 17.5, reb: 5.5, ast: 4.0, stl: 1.0, blk: 0.2 }, years: "1970–1975", accolades: "ABA playoff legend" },
  { id: "freddie-lewis-pacers-1970s", name: "Freddie Lewis", franchiseId: "pacers", decade: "1970s", positions: ["PG"], stats: { pts: 16.5, reb: 3.5, ast: 4.5, stl: 1.5, blk: 0.1 }, years: "1970–1974", accolades: "3× ABA champ guard" },
  { id: "billy-knight-pacers-1970s", name: "Billy Knight", franchiseId: "pacers", decade: "1970s", positions: ["SG", "SF"], stats: { pts: 22.0, reb: 7.5, ast: 3.0, stl: 1.2, blk: 0.3 }, years: "1974–1979", accolades: "ABA/NBA All-Star scorer" },
  { id: "don-buse-pacers-1970s", name: "Don Buse", franchiseId: "pacers", decade: "1970s", positions: ["PG"], stats: { pts: 10.5, reb: 3.5, ast: 7.0, stl: 2.5, blk: 0.2 }, years: "1972–1977", accolades: "Steals + assists champ ’76" },
  { id: "darnell-hillman-pacers-1970s", name: "Darnell Hillman", franchiseId: "pacers", decade: "1970s", positions: ["PF", "C"], stats: { pts: 11.5, reb: 8.0, ast: 1.5, stl: 0.8, blk: 1.5 }, years: "1971–1977", accolades: "Dr. Dunk afro hops" },
  { id: "bob-netolicky-pacers-1970s", name: "Bob Netolicky", franchiseId: "pacers", decade: "1970s", positions: ["PF", "C"], stats: { pts: 14.5, reb: 8.0, ast: 1.8, stl: 0.5, blk: 0.6 }, years: "1970–1972, 1974–1976", accolades: "4× ABA All-Star" },

  // ---------------- 1980s ----------------
  { id: "reggie-miller-pacers-1980s", name: "Reggie Miller", franchiseId: "pacers", decade: "1980s", positions: ["SG"], stats: { pts: 14.0, reb: 2.8, ast: 2.8, stl: 0.9, blk: 0.3 }, years: "1987–1989", accolades: "Young knockdown shooter" },
  { id: "chuck-person-pacers-1980s", name: "Chuck Person", franchiseId: "pacers", decade: "1980s", positions: ["SF", "PF"], stats: { pts: 20.0, reb: 7.5, ast: 3.0, stl: 0.9, blk: 0.2 }, years: "1986–1989", accolades: "ROY ’87 · The Rifleman" },
  { id: "herb-williams-pacers-1980s", name: "Herb Williams", franchiseId: "pacers", decade: "1980s", positions: ["C", "PF"], stats: { pts: 14.5, reb: 8.5, ast: 2.0, stl: 0.7, blk: 1.9 }, years: "1981–1989", accolades: "Shot-blocking captain" },
  { id: "clark-kellogg-pacers-1980s", name: "Clark Kellogg", franchiseId: "pacers", decade: "1980s", positions: ["PF"], stats: { pts: 19.0, reb: 9.5, ast: 2.8, stl: 1.2, blk: 0.4 }, years: "1982–1986", accolades: "All-Rookie standout" },
  { id: "vern-fleming-pacers-1980s", name: "Vern Fleming", franchiseId: "pacers", decade: "1980s", positions: ["PG"], stats: { pts: 12.5, reb: 3.5, ast: 5.0, stl: 1.1, blk: 0.2 }, years: "1984–1989", accolades: "Olympic gold guard" },
  { id: "billy-knight-pacers-1980s", name: "Billy Knight", franchiseId: "pacers", decade: "1980s", positions: ["SG", "SF"], stats: { pts: 14.5, reb: 4.0, ast: 2.5, stl: 0.9, blk: 0.2 }, years: "1980–1983", accolades: "Veteran bucket-getter" },
  { id: "steve-stipanovich-pacers-1980s", name: "Steve Stipanovich", franchiseId: "pacers", decade: "1980s", positions: ["C"], stats: { pts: 12.0, reb: 7.5, ast: 2.0, stl: 0.8, blk: 0.9 }, years: "1983–1988", accolades: "Dependable pivot" },
  { id: "wayman-tisdale-pacers-1980s", name: "Wayman Tisdale", franchiseId: "pacers", decade: "1980s", positions: ["PF"], stats: { pts: 14.5, reb: 6.5, ast: 1.5, stl: 0.6, blk: 0.4 }, years: "1985–1988", accolades: "No. 2 pick lefty touch" },

  // ---------------- 1990s ----------------
  { id: "reggie-miller-pacers-1990s", name: "Reggie Miller", franchiseId: "pacers", decade: "1990s", positions: ["SG"], stats: { pts: 20.5, reb: 3.0, ast: 3.0, stl: 1.2, blk: 0.2 }, years: "1990–1999", accolades: "8 pts in 9 secs · Knick killer" },
  { id: "rik-smits-pacers-1990s", name: "Rik Smits", franchiseId: "pacers", decade: "1990s", positions: ["C"], stats: { pts: 15.5, reb: 6.5, ast: 1.5, stl: 0.4, blk: 1.3 }, years: "1990–1999", accolades: "Dunking Dutchman · All-Star" },
  { id: "dale-davis-pacers-1990s", name: "Dale Davis", franchiseId: "pacers", decade: "1990s", positions: ["PF", "C"], stats: { pts: 9.5, reb: 8.5, ast: 1.0, stl: 0.6, blk: 1.2 }, years: "1991–1999", accolades: "Interior muscle" },
  { id: "antonio-davis-pacers-1990s", name: "Antonio Davis", franchiseId: "pacers", decade: "1990s", positions: ["PF", "C"], stats: { pts: 9.5, reb: 6.5, ast: 0.8, stl: 0.5, blk: 1.0 }, years: "1993–1999", accolades: "Davis Boys bruiser" },
  { id: "mark-jackson-pacers-1990s", name: "Mark Jackson", franchiseId: "pacers", decade: "1990s", positions: ["PG"], stats: { pts: 9.0, reb: 4.0, ast: 8.0, stl: 1.0, blk: 0.1 }, years: "1994–1996, 1997–1999", accolades: "Assist champ ’97" },
  { id: "derrick-mckey-pacers-1990s", name: "Derrick McKey", franchiseId: "pacers", decade: "1990s", positions: ["SF"], stats: { pts: 10.5, reb: 5.0, ast: 3.0, stl: 1.2, blk: 0.7 }, years: "1993–1999", accolades: "All-Defense wing" },
  { id: "jalen-rose-pacers-1990s", name: "Jalen Rose", franchiseId: "pacers", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 11.0, reb: 2.8, ast: 3.5, stl: 0.8, blk: 0.3 }, years: "1996–1999", accolades: "Versatile sixth man" },
  { id: "detlef-schrempf-pacers-1990s", name: "Detlef Schrempf", franchiseId: "pacers", decade: "1990s", positions: ["PF", "SF"], stats: { pts: 17.5, reb: 8.5, ast: 3.5, stl: 0.8, blk: 0.3 }, years: "1990–1993", accolades: "2× 6MOY" },
  { id: "chris-mullin-pacers-1990s", name: "Chris Mullin", franchiseId: "pacers", decade: "1990s", positions: ["SF"], stats: { pts: 10.5, reb: 4.0, ast: 2.0, stl: 1.0, blk: 0.4 }, years: "1997–1999", accolades: "HOF shooter · Finals run" },
  { id: "travis-best-pacers-1990s", name: "Travis Best", franchiseId: "pacers", decade: "1990s", positions: ["PG"], stats: { pts: 8.0, reb: 2.0, ast: 4.0, stl: 1.0, blk: 0.1 }, years: "1995–1999", accolades: "Quick backup spark" },

  // ---------------- 2000s ----------------
  { id: "jermaine-oneal-pacers-2000s", name: "Jermaine O'Neal", franchiseId: "pacers", decade: "2000s", positions: ["PF", "C"], stats: { pts: 18.5, reb: 9.5, ast: 1.9, stl: 0.5, blk: 2.3 }, years: "2000–2008", accolades: "6× All-Star · MIP ’02" },
  { id: "reggie-miller-pacers-2000s", name: "Reggie Miller", franchiseId: "pacers", decade: "2000s", positions: ["SG"], stats: { pts: 15.5, reb: 3.0, ast: 3.0, stl: 0.9, blk: 0.1 }, years: "2000–2005", accolades: "Finals ’00 · forever clutch" },
  { id: "ron-artest-pacers-2000s", name: "Ron Artest", franchiseId: "pacers", decade: "2000s", positions: ["SF", "SG"], stats: { pts: 17.5, reb: 5.0, ast: 3.0, stl: 2.0, blk: 0.7 }, years: "2002–2006", accolades: "DPOY ’04" },
  { id: "jalen-rose-pacers-2000s", name: "Jalen Rose", franchiseId: "pacers", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 19.5, reb: 4.5, ast: 5.0, stl: 0.9, blk: 0.4 }, years: "2000–2002", accolades: "MIP ’00 · Finals scorer" },
  { id: "danny-granger-pacers-2000s", name: "Danny Granger", franchiseId: "pacers", decade: "2000s", positions: ["SF", "PF"], stats: { pts: 18.5, reb: 5.0, ast: 2.5, stl: 1.0, blk: 0.9 }, years: "2005–2009", accolades: "MIP ’09 · 25.8 ppg" },
  { id: "stephen-jackson-pacers-2000s", name: "Stephen Jackson", franchiseId: "pacers", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 17.0, reb: 4.5, ast: 3.0, stl: 1.5, blk: 0.4 }, years: "2004–2006", accolades: "Fearless wing" },
  { id: "jeff-foster-pacers-2000s", name: "Jeff Foster", franchiseId: "pacers", decade: "2000s", positions: ["C", "PF"], stats: { pts: 5.5, reb: 7.0, ast: 1.0, stl: 0.6, blk: 0.4 }, years: "2000–2009", accolades: "Offensive-glass grinder" },
  { id: "mike-dunleavy-pacers-2000s", name: "Mike Dunleavy", franchiseId: "pacers", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 15.5, reb: 4.5, ast: 3.0, stl: 0.8, blk: 0.4 }, years: "2007–2009", accolades: "19-ppg season ’08" },
  { id: "troy-murphy-pacers-2000s", name: "Troy Murphy", franchiseId: "pacers", decade: "2000s", positions: ["PF", "C"], stats: { pts: 13.0, reb: 9.5, ast: 1.8, stl: 0.7, blk: 0.4 }, years: "2007–2009", accolades: "Stretch-four boards" },

  // ---------------- 2010s ----------------
  { id: "paul-george-pacers-2010s", name: "Paul George", franchiseId: "pacers", decade: "2010s", positions: ["SF", "SG"], stats: { pts: 18.5, reb: 6.5, ast: 3.5, stl: 1.7, blk: 0.4 }, years: "2010–2017", accolades: "MIP ’13 · 4× All-Star" },
  { id: "victor-oladipo-pacers-2010s", name: "Victor Oladipo", franchiseId: "pacers", decade: "2010s", positions: ["SG"], stats: { pts: 20.5, reb: 5.5, ast: 4.5, stl: 2.0, blk: 0.7 }, years: "2017–2019", accolades: "MIP ’18 · steals champ" },
  { id: "danny-granger-pacers-2010s", name: "Danny Granger", franchiseId: "pacers", decade: "2010s", positions: ["SF"], stats: { pts: 16.5, reb: 4.5, ast: 2.0, stl: 1.0, blk: 0.7 }, years: "2010–2014", accolades: "Bridge-era leader" },
  { id: "roy-hibbert-pacers-2010s", name: "Roy Hibbert", franchiseId: "pacers", decade: "2010s", positions: ["C"], stats: { pts: 11.5, reb: 7.5, ast: 1.5, stl: 0.4, blk: 2.0 }, years: "2010–2015", accolades: "2× All-Star · verticality" },
  { id: "david-west-pacers-2010s", name: "David West", franchiseId: "pacers", decade: "2010s", positions: ["PF"], stats: { pts: 13.5, reb: 7.0, ast: 2.5, stl: 0.8, blk: 0.8 }, years: "2011–2015", accolades: "Locker-room spine" },
  { id: "george-hill-pacers-2010s", name: "George Hill", franchiseId: "pacers", decade: "2010s", positions: ["PG"], stats: { pts: 11.5, reb: 3.5, ast: 4.0, stl: 1.0, blk: 0.3 }, years: "2011–2016", accolades: "Steady two-way PG" },
  { id: "lance-stephenson-pacers-2010s", name: "Lance Stephenson", franchiseId: "pacers", decade: "2010s", positions: ["SG"], stats: { pts: 9.5, reb: 5.0, ast: 3.5, stl: 0.8, blk: 0.2 }, years: "2010–2014, 2017–2019", accolades: "Born Ready chaos" },
  { id: "myles-turner-pacers-2010s", name: "Myles Turner", franchiseId: "pacers", decade: "2010s", positions: ["C"], stats: { pts: 12.5, reb: 6.5, ast: 1.3, stl: 0.8, blk: 2.1 }, years: "2015–2019", accolades: "Blocks-champ stretch five" },
  { id: "domantas-sabonis-pacers-2010s", name: "Domantas Sabonis", franchiseId: "pacers", decade: "2010s", positions: ["PF", "C"], stats: { pts: 13.5, reb: 8.5, ast: 2.8, stl: 0.6, blk: 0.4 }, years: "2017–2019", accolades: "Bench double-double big" },

  // ---------------- 2020s ----------------
  { id: "tyrese-haliburton-pacers-2020s", name: "Tyrese Haliburton", franchiseId: "pacers", decade: "2020s", positions: ["PG"], stats: { pts: 19.5, reb: 3.8, ast: 10.0, stl: 1.6, blk: 0.6 }, years: "2022–2026", accolades: "Assist champ · Finals run ’25" },
  { id: "pascal-siakam-pacers-2020s", name: "Pascal Siakam", franchiseId: "pacers", decade: "2020s", positions: ["PF"], stats: { pts: 20.5, reb: 7.0, ast: 3.7, stl: 0.9, blk: 0.4 }, years: "2024–2026", accolades: "ECF MVP ’25" },
  { id: "myles-turner-pacers-2020s", name: "Myles Turner", franchiseId: "pacers", decade: "2020s", positions: ["C"], stats: { pts: 16.0, reb: 7.0, ast: 1.5, stl: 0.8, blk: 2.3 }, years: "2020–2025", accolades: "2× blocks champ" },
  { id: "domantas-sabonis-pacers-2020s", name: "Domantas Sabonis", franchiseId: "pacers", decade: "2020s", positions: ["PF", "C"], stats: { pts: 19.5, reb: 11.5, ast: 5.5, stl: 0.9, blk: 0.4 }, years: "2020–2022", accolades: "2× All-Star engine" },
  { id: "bennedict-mathurin-pacers-2020s", name: "Bennedict Mathurin", franchiseId: "pacers", decade: "2020s", positions: ["SG", "SF"], stats: { pts: 16.5, reb: 4.5, ast: 1.8, stl: 0.7, blk: 0.2 }, years: "2022–2026", accolades: "All-Rookie scorer" },
  { id: "andrew-nembhard-pacers-2020s", name: "Andrew Nembhard", franchiseId: "pacers", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 10.5, reb: 3.0, ast: 5.0, stl: 1.0, blk: 0.2 }, years: "2022–2026", accolades: "Playoff riser" },
  { id: "tj-mcconnell-pacers-2020s", name: "T.J. McConnell", franchiseId: "pacers", decade: "2020s", positions: ["PG"], stats: { pts: 9.0, reb: 3.0, ast: 5.0, stl: 1.3, blk: 0.1 }, years: "2020–2026", accolades: "Full-court pest" },
  { id: "aaron-nesmith-pacers-2020s", name: "Aaron Nesmith", franchiseId: "pacers", decade: "2020s", positions: ["SF", "SG"], stats: { pts: 11.0, reb: 4.5, ast: 1.5, stl: 0.9, blk: 0.5 }, years: "2022–2026", accolades: "3-and-D motor" },
  { id: "caris-levert-pacers-2020s", name: "Caris LeVert", franchiseId: "pacers", decade: "2020s", positions: ["SG"], stats: { pts: 17.5, reb: 4.5, ast: 4.5, stl: 1.1, blk: 0.5 }, years: "2021–2022", accolades: "Slashing shot creator" },
];
