import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1970s (incl. ABA years) ----------------
  { id: "george-gervin-spurs-1970s", name: "George Gervin", franchiseId: "spurs", decade: "1970s", positions: ["SG", "SF"], stats: { pts: 25.6, reb: 5.5, ast: 3.1, stl: 1.3, blk: 1.0 }, years: "1974–1979", accolades: "The Iceman · 2× scoring champ" },
  { id: "james-silas-spurs-1970s", name: "James Silas", franchiseId: "spurs", decade: "1970s", positions: ["PG"], stats: { pts: 16.5, reb: 3.2, ast: 5.0, stl: 1.2, blk: 0.1 }, years: "1972–1979", accolades: "Captain Late · clutch legend" },
  { id: "larry-kenon-spurs-1970s", name: "Larry Kenon", franchiseId: "spurs", decade: "1970s", positions: ["SF", "PF"], stats: { pts: 20.0, reb: 10.0, ast: 2.5, stl: 1.5, blk: 0.4 }, years: "1975–1979", accolades: "Dr. K · 2× All-Star" },
  { id: "billy-paultz-spurs-1970s", name: "Billy Paultz", franchiseId: "spurs", decade: "1970s", positions: ["C"], stats: { pts: 12.5, reb: 8.5, ast: 2.2, stl: 0.6, blk: 1.3 }, years: "1976–1979", accolades: "The Whopper · sturdy pivot" },
  { id: "mike-gale-spurs-1970s", name: "Mike Gale", franchiseId: "spurs", decade: "1970s", positions: ["PG", "SG"], stats: { pts: 9.5, reb: 3.2, ast: 4.5, stl: 1.8, blk: 0.3 }, years: "1974–1979", accolades: "Ball-hawking guard" },
  { id: "swen-nater-spurs-1970s", name: "Swen Nater", franchiseId: "spurs", decade: "1970s", positions: ["C"], stats: { pts: 14.0, reb: 12.5, ast: 1.5, stl: 0.5, blk: 0.8 }, years: "1973–1975", accolades: "1974 ABA ROY rebounder" },
  { id: "louie-dampier-spurs-1970s", name: "Louie Dampier", franchiseId: "spurs", decade: "1970s", positions: ["PG"], stats: { pts: 9.5, reb: 1.8, ast: 4.0, stl: 0.8, blk: 0.1 }, years: "1976–1979", accolades: "ABA 3-point pioneer" },
  { id: "mark-olberding-spurs-1970s", name: "Mark Olberding", franchiseId: "spurs", decade: "1970s", positions: ["PF"], stats: { pts: 9.5, reb: 5.5, ast: 2.0, stl: 0.7, blk: 0.3 }, years: "1975–1979", accolades: "Burly young forward" },

  // ---------------- 1980s ----------------
  { id: "george-gervin-spurs-1980s", name: "George Gervin", franchiseId: "spurs", decade: "1980s", positions: ["SG"], stats: { pts: 25.8, reb: 4.8, ast: 2.7, stl: 1.0, blk: 0.8 }, years: "1980–1985", accolades: "4× scoring champ finger roll" },
  { id: "mike-mitchell-spurs-1980s", name: "Mike Mitchell", franchiseId: "spurs", decade: "1980s", positions: ["SF"], stats: { pts: 19.5, reb: 6.0, ast: 1.5, stl: 0.8, blk: 0.5 }, years: "1981–1988", accolades: "Smooth-scoring forward" },
  { id: "artis-gilmore-spurs-1980s", name: "Artis Gilmore", franchiseId: "spurs", decade: "1980s", positions: ["C"], stats: { pts: 15.5, reb: 9.5, ast: 1.7, stl: 0.5, blk: 1.7 }, years: "1982–1987", accolades: "The A-Train · FG% machine" },
  { id: "johnny-moore-spurs-1980s", name: "Johnny Moore", franchiseId: "spurs", decade: "1980s", positions: ["PG"], stats: { pts: 10.0, reb: 2.8, ast: 8.0, stl: 1.7, blk: 0.2 }, years: "1980–1988", accolades: "Assist-leading floor general" },
  { id: "alvin-robertson-spurs-1980s", name: "Alvin Robertson", franchiseId: "spurs", decade: "1980s", positions: ["SG"], stats: { pts: 16.5, reb: 5.5, ast: 5.0, stl: 2.9, blk: 0.4 }, years: "1984–1989", accolades: "1986 DPOY · quadruple-double" },
  { id: "willie-anderson-spurs-1980s", name: "Willie Anderson", franchiseId: "spurs", decade: "1980s", positions: ["SG", "SF"], stats: { pts: 17.0, reb: 5.0, ast: 4.5, stl: 1.6, blk: 0.7 }, years: "1988–1989", accolades: "All-Rookie smooth wing" },
  { id: "david-robinson-spurs-1980s", name: "David Robinson", franchiseId: "spurs", decade: "1980s", positions: ["C"], stats: { pts: 24.3, reb: 12.0, ast: 2.0, stl: 1.7, blk: 3.9 }, years: "1989–1990", accolades: "The Admiral · 1990 ROY" },
  { id: "terry-cummings-spurs-1980s", name: "Terry Cummings", franchiseId: "spurs", decade: "1980s", positions: ["PF"], stats: { pts: 22.4, reb: 8.4, ast: 2.5, stl: 1.2, blk: 0.4 }, years: "1989–1990", accolades: "All-Star power scorer" },

  // ---------------- 1990s ----------------
  { id: "david-robinson-spurs-1990s", name: "David Robinson", franchiseId: "spurs", decade: "1990s", positions: ["C"], stats: { pts: 24.0, reb: 11.5, ast: 2.9, stl: 1.5, blk: 3.4 }, years: "1990–1999", accolades: "1995 MVP · 1999 champ" },
  { id: "tim-duncan-spurs-1990s", name: "Tim Duncan", franchiseId: "spurs", decade: "1990s", positions: ["PF", "C"], stats: { pts: 21.4, reb: 11.8, ast: 2.9, stl: 0.8, blk: 2.5 }, years: "1997–1999", accolades: "1998 ROY · 1999 Finals MVP" },
  { id: "sean-elliott-spurs-1990s", name: "Sean Elliott", franchiseId: "spurs", decade: "1990s", positions: ["SF"], stats: { pts: 15.5, reb: 4.5, ast: 2.7, stl: 0.9, blk: 0.4 }, years: "1990–1999", accolades: "Memorial Day Miracle" },
  { id: "avery-johnson-spurs-1990s", name: "Avery Johnson", franchiseId: "spurs", decade: "1990s", positions: ["PG"], stats: { pts: 10.5, reb: 1.9, ast: 7.0, stl: 1.0, blk: 0.1 }, years: "1994–1999", accolades: "Little General · '99 title shot" },
  { id: "vinny-del-negro-spurs-1990s", name: "Vinny Del Negro", franchiseId: "spurs", decade: "1990s", positions: ["SG"], stats: { pts: 12.0, reb: 2.8, ast: 3.8, stl: 0.8, blk: 0.1 }, years: "1992–1998", accolades: "Reliable mid-range guard" },
  { id: "dennis-rodman-spurs-1990s", name: "Dennis Rodman", franchiseId: "spurs", decade: "1990s", positions: ["PF"], stats: { pts: 5.5, reb: 17.1, ast: 2.5, stl: 0.7, blk: 0.4 }, years: "1993–1995", accolades: "2× rebound champ in silver" },
  { id: "terry-cummings-spurs-1990s", name: "Terry Cummings", franchiseId: "spurs", decade: "1990s", positions: ["PF"], stats: { pts: 13.5, reb: 7.0, ast: 1.7, stl: 0.9, blk: 0.3 }, years: "1990–1995", accolades: "Veteran post scorer" },
  { id: "mario-elie-spurs-1990s", name: "Mario Elie", franchiseId: "spurs", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 9.7, reb: 3.3, ast: 2.1, stl: 0.8, blk: 0.2 }, years: "1998–1999", accolades: "3× champ veteran glue" },

  // ---------------- 2000s ----------------
  { id: "tim-duncan-spurs-2000s", name: "Tim Duncan", franchiseId: "spurs", decade: "2000s", positions: ["PF", "C"], stats: { pts: 21.6, reb: 11.6, ast: 3.2, stl: 0.8, blk: 2.3 }, years: "2000–2009", accolades: "2× MVP · 3 titles this decade" },
  { id: "tony-parker-spurs-2000s", name: "Tony Parker", franchiseId: "spurs", decade: "2000s", positions: ["PG"], stats: { pts: 16.5, reb: 3.2, ast: 5.8, stl: 1.0, blk: 0.1 }, years: "2001–2009", accolades: "2007 Finals MVP · teardrop king" },
  { id: "manu-ginobili-spurs-2000s", name: "Manu Ginobili", franchiseId: "spurs", decade: "2000s", positions: ["SG"], stats: { pts: 15.0, reb: 4.0, ast: 3.9, stl: 1.5, blk: 0.3 }, years: "2002–2009", accolades: "Eurostep pioneer · 3× champ" },
  { id: "david-robinson-spurs-2000s", name: "David Robinson", franchiseId: "spurs", decade: "2000s", positions: ["C"], stats: { pts: 13.5, reb: 8.5, ast: 1.5, stl: 1.0, blk: 2.0 }, years: "2000–2003", accolades: "Rode off with 2003 title" },
  { id: "bruce-bowen-spurs-2000s", name: "Bruce Bowen", franchiseId: "spurs", decade: "2000s", positions: ["SF"], stats: { pts: 6.5, reb: 2.8, ast: 1.3, stl: 0.8, blk: 0.4 }, years: "2001–2009", accolades: "8× All-Defense corner-3 specialist" },
  { id: "robert-horry-spurs-2000s", name: "Robert Horry", franchiseId: "spurs", decade: "2000s", positions: ["PF"], stats: { pts: 5.5, reb: 3.9, ast: 1.3, stl: 0.6, blk: 0.6 }, years: "2003–2008", accolades: "Big Shot Rob · Game 5 of '05" },
  { id: "michael-finley-spurs-2000s", name: "Michael Finley", franchiseId: "spurs", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 9.5, reb: 3.2, ast: 1.5, stl: 0.7, blk: 0.2 }, years: "2005–2009", accolades: "Veteran wing · 2007 champ" },
  { id: "brent-barry-spurs-2000s", name: "Brent Barry", franchiseId: "spurs", decade: "2000s", positions: ["SG"], stats: { pts: 7.5, reb: 2.5, ast: 1.9, stl: 0.6, blk: 0.2 }, years: "2004–2008", accolades: "Sharpshooting 2× champ" },
  { id: "stephen-jackson-spurs-2000s", name: "Stephen Jackson", franchiseId: "spurs", decade: "2000s", positions: ["SF", "SG"], stats: { pts: 11.5, reb: 3.5, ast: 2.0, stl: 1.4, blk: 0.3 }, years: "2002–2003", accolades: "2003 title starter" },

  // ---------------- 2010s ----------------
  { id: "tim-duncan-spurs-2010s", name: "Tim Duncan", franchiseId: "spurs", decade: "2010s", positions: ["PF", "C"], stats: { pts: 14.5, reb: 9.3, ast: 2.8, stl: 0.8, blk: 1.8 }, years: "2010–2016", accolades: "2014 champ · timeless fundamentals" },
  { id: "tony-parker-spurs-2010s", name: "Tony Parker", franchiseId: "spurs", decade: "2010s", positions: ["PG"], stats: { pts: 15.5, reb: 2.6, ast: 6.0, stl: 0.8, blk: 0.1 }, years: "2010–2018", accolades: "2013 MVP candidate engine" },
  { id: "manu-ginobili-spurs-2010s", name: "Manu Ginobili", franchiseId: "spurs", decade: "2010s", positions: ["SG"], stats: { pts: 11.5, reb: 3.0, ast: 3.8, stl: 1.1, blk: 0.3 }, years: "2010–2018", accolades: "Sixth-man wizard · 2014 champ" },
  { id: "kawhi-leonard-spurs-2010s", name: "Kawhi Leonard", franchiseId: "spurs", decade: "2010s", positions: ["SF"], stats: { pts: 16.3, reb: 6.2, ast: 2.3, stl: 1.8, blk: 0.7 }, years: "2011–2018", accolades: "2014 Finals MVP · 2× DPOY" },
  { id: "lamarcus-aldridge-spurs-2010s", name: "LaMarcus Aldridge", franchiseId: "spurs", decade: "2010s", positions: ["PF", "C"], stats: { pts: 19.5, reb: 8.4, ast: 2.0, stl: 0.6, blk: 1.2 }, years: "2015–2019", accolades: "All-NBA mid-post scorer" },
  { id: "danny-green-spurs-2010s", name: "Danny Green", franchiseId: "spurs", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 9.1, reb: 3.5, ast: 1.6, stl: 1.0, blk: 0.8 }, years: "2010–2018", accolades: "Finals 3-point record · 2014 champ" },
  { id: "patty-mills-spurs-2010s", name: "Patty Mills", franchiseId: "spurs", decade: "2010s", positions: ["PG"], stats: { pts: 9.4, reb: 1.9, ast: 2.4, stl: 0.7, blk: 0.1 }, years: "2011–2019", accolades: "Bench spark · 2014 champ" },
  { id: "boris-diaw-spurs-2010s", name: "Boris Diaw", franchiseId: "spurs", decade: "2010s", positions: ["PF"], stats: { pts: 8.5, reb: 4.4, ast: 2.9, stl: 0.6, blk: 0.4 }, years: "2012–2016", accolades: "Point-forward of beautiful game" },
  { id: "demar-derozan-spurs-2010s", name: "DeMar DeRozan", franchiseId: "spurs", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 21.5, reb: 5.5, ast: 6.0, stl: 1.0, blk: 0.4 }, years: "2018–2019", accolades: "Mid-range maestro" },
  { id: "tiago-splitter-spurs-2010s", name: "Tiago Splitter", franchiseId: "spurs", decade: "2010s", positions: ["C"], stats: { pts: 8.5, reb: 5.5, ast: 1.5, stl: 0.6, blk: 0.7 }, years: "2010–2015", accolades: "Smart screening big · 2014 champ" },

  // ---------------- 2020s ----------------
  { id: "victor-wembanyama-spurs-2020s", name: "Victor Wembanyama", franchiseId: "spurs", decade: "2020s", positions: ["C", "PF"], stats: { pts: 23.0, reb: 10.8, ast: 3.8, stl: 1.2, blk: 3.7 }, years: "2023–2026", accolades: "2024 ROY · alien shot-eraser" },
  { id: "dejounte-murray-spurs-2020s", name: "Dejounte Murray", franchiseId: "spurs", decade: "2020s", positions: ["PG"], stats: { pts: 17.5, reb: 7.5, ast: 7.5, stl: 1.9, blk: 0.3 }, years: "2020–2022", accolades: "All-Star triple-double threat" },
  { id: "keldon-johnson-spurs-2020s", name: "Keldon Johnson", franchiseId: "spurs", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 16.5, reb: 5.5, ast: 2.5, stl: 0.8, blk: 0.3 }, years: "2020–2026", accolades: "Big Body Benz energy" },
  { id: "devin-vassell-spurs-2020s", name: "Devin Vassell", franchiseId: "spurs", decade: "2020s", positions: ["SG", "SF"], stats: { pts: 16.0, reb: 4.0, ast: 3.0, stl: 1.1, blk: 0.4 }, years: "2020–2026", accolades: "Two-way wing sniper" },
  { id: "jakob-poeltl-spurs-2020s", name: "Jakob Poeltl", franchiseId: "spurs", decade: "2020s", positions: ["C"], stats: { pts: 11.5, reb: 9.0, ast: 2.5, stl: 0.7, blk: 1.6 }, years: "2020–2023", accolades: "Screen-and-dive anchor" },
  { id: "jeremy-sochan-spurs-2020s", name: "Jeremy Sochan", franchiseId: "spurs", decade: "2020s", positions: ["PF", "SF"], stats: { pts: 11.5, reb: 6.5, ast: 3.0, stl: 0.9, blk: 0.5 }, years: "2022–2026", accolades: "Positionless defensive chaos" },
  { id: "stephon-castle-spurs-2020s", name: "Stephon Castle", franchiseId: "spurs", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 14.5, reb: 3.5, ast: 4.5, stl: 1.0, blk: 0.3 }, years: "2024–2026", accolades: "2025 Rookie of the Year" },
  { id: "deaaron-fox-spurs-2020s", name: "De'Aaron Fox", franchiseId: "spurs", decade: "2020s", positions: ["PG"], stats: { pts: 22.5, reb: 4.5, ast: 6.5, stl: 1.5, blk: 0.4 }, years: "2025–2026", accolades: "Blazing-speed co-star for Wemby" },
];
