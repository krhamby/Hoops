import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1990s (Vancouver Grizzlies) ----------------
  { id: "shareef-abdur-rahim-grizzlies-1990s", name: "Shareef Abdur-Rahim", franchiseId: "grizzlies", decade: "1990s", positions: ["PF", "SF"], stats: { pts: 21.1, reb: 7.5, ast: 2.9, stl: 1.1, blk: 1.0 }, years: "1996–1999", accolades: "Franchise cornerstone in Vancouver" },
  { id: "bryant-reeves-grizzlies-1990s", name: "Bryant Reeves", franchiseId: "grizzlies", decade: "1990s", positions: ["C"], stats: { pts: 14.5, reb: 7.5, ast: 1.7, stl: 0.5, blk: 0.8 }, years: "1995–1999", accolades: "Big Country · original Grizzly" },
  { id: "mike-bibby-grizzlies-1990s", name: "Mike Bibby", franchiseId: "grizzlies", decade: "1990s", positions: ["PG"], stats: { pts: 13.7, reb: 2.8, ast: 6.5, stl: 1.6, blk: 0.1 }, years: "1998–1999", accolades: "All-Rookie floor leader" },
  { id: "greg-anthony-grizzlies-1990s", name: "Greg Anthony", franchiseId: "grizzlies", decade: "1990s", positions: ["PG"], stats: { pts: 12.5, reb: 2.6, ast: 6.0, stl: 1.7, blk: 0.1 }, years: "1995–1997", accolades: "Expansion-era starter" },
  { id: "blue-edwards-grizzlies-1990s", name: "Blue Edwards", franchiseId: "grizzlies", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 11.5, reb: 3.8, ast: 2.5, stl: 1.0, blk: 0.4 }, years: "1995–1997", accolades: "Athletic wing veteran" },
  { id: "antonio-daniels-grizzlies-1990s", name: "Antonio Daniels", franchiseId: "grizzlies", decade: "1990s", positions: ["PG"], stats: { pts: 7.8, reb: 1.9, ast: 4.5, stl: 0.7, blk: 0.1 }, years: "1997–1998", accolades: "No. 4 pick point guard" },
  { id: "sam-mack-grizzlies-1990s", name: "Sam Mack", franchiseId: "grizzlies", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 10.5, reb: 3.0, ast: 2.0, stl: 0.7, blk: 0.2 }, years: "1998–1999", accolades: "Journeyman sniper" },

  // ---------------- 2000s ----------------
  { id: "pau-gasol-grizzlies-2000s", name: "Pau Gasol", franchiseId: "grizzlies", decade: "2000s", positions: ["PF", "C"], stats: { pts: 18.8, reb: 8.6, ast: 3.0, stl: 0.5, blk: 1.8 }, years: "2001–2008", accolades: "2002 ROY · first Grizz All-Star" },
  { id: "shane-battier-grizzlies-2000s", name: "Shane Battier", franchiseId: "grizzlies", decade: "2000s", positions: ["SF"], stats: { pts: 10.5, reb: 4.8, ast: 1.8, stl: 1.0, blk: 0.9 }, years: "2001–2006", accolades: "Culture-setting defender" },
  { id: "mike-miller-grizzlies-2000s", name: "Mike Miller", franchiseId: "grizzlies", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 14.5, reb: 4.9, ast: 3.5, stl: 0.8, blk: 0.3 }, years: "2003–2008", accolades: "2006 Sixth Man of the Year" },
  { id: "jason-williams-grizzlies-2000s", name: "Jason Williams", franchiseId: "grizzlies", decade: "2000s", positions: ["PG"], stats: { pts: 11.8, reb: 2.4, ast: 7.0, stl: 1.2, blk: 0.1 }, years: "2001–2005", accolades: "White Chocolate showtime" },
  { id: "stromile-swift-grizzlies-2000s", name: "Stromile Swift", franchiseId: "grizzlies", decade: "2000s", positions: ["PF", "C"], stats: { pts: 9.5, reb: 5.0, ast: 0.7, stl: 0.7, blk: 1.3 }, years: "2000–2005", accolades: "Pogo-stick lob finisher" },
  { id: "rudy-gay-grizzlies-2000s", name: "Rudy Gay", franchiseId: "grizzlies", decade: "2000s", positions: ["SF"], stats: { pts: 17.5, reb: 5.5, ast: 1.8, stl: 1.1, blk: 0.8 }, years: "2006–2009", accolades: "Smooth athletic wing scorer" },
  { id: "mike-conley-grizzlies-2000s", name: "Mike Conley", franchiseId: "grizzlies", decade: "2000s", positions: ["PG"], stats: { pts: 11.0, reb: 2.7, ast: 4.6, stl: 1.2, blk: 0.2 }, years: "2007–2009", accolades: "Steady young floor general" },
  { id: "marc-gasol-grizzlies-2000s", name: "Marc Gasol", franchiseId: "grizzlies", decade: "2000s", positions: ["C"], stats: { pts: 11.9, reb: 7.4, ast: 1.7, stl: 0.8, blk: 1.2 }, years: "2008–2009", accolades: "All-Rookie · arrived in Pau trade" },

  // ---------------- 2010s ----------------
  { id: "marc-gasol-grizzlies-2010s", name: "Marc Gasol", franchiseId: "grizzlies", decade: "2010s", positions: ["C"], stats: { pts: 16.0, reb: 8.0, ast: 3.9, stl: 0.9, blk: 1.5 }, years: "2010–2019", accolades: "2013 DPOY · Grit-and-Grind hub" },
  { id: "mike-conley-grizzlies-2010s", name: "Mike Conley", franchiseId: "grizzlies", decade: "2010s", positions: ["PG"], stats: { pts: 16.5, reb: 3.1, ast: 5.9, stl: 1.5, blk: 0.3 }, years: "2010–2019", accolades: "Franchise wins leader" },
  { id: "zach-randolph-grizzlies-2010s", name: "Zach Randolph", franchiseId: "grizzlies", decade: "2010s", positions: ["PF"], stats: { pts: 16.8, reb: 10.2, ast: 2.0, stl: 0.8, blk: 0.3 }, years: "2010–2017", accolades: "Z-Bo · 2× All-Star bruiser" },
  { id: "tony-allen-grizzlies-2010s", name: "Tony Allen", franchiseId: "grizzlies", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 8.9, reb: 4.4, ast: 1.4, stl: 1.6, blk: 0.5 }, years: "2010–2017", accolades: "The Grindfather · 6× All-Defense" },
  { id: "rudy-gay-grizzlies-2010s", name: "Rudy Gay", franchiseId: "grizzlies", decade: "2010s", positions: ["SF"], stats: { pts: 18.6, reb: 6.0, ast: 2.5, stl: 1.5, blk: 0.8 }, years: "2010–2013", accolades: "Wing scorer of early grind era" },
  { id: "oj-mayo-grizzlies-2010s", name: "O.J. Mayo", franchiseId: "grizzlies", decade: "2010s", positions: ["SG"], stats: { pts: 13.5, reb: 3.2, ast: 2.8, stl: 1.0, blk: 0.3 }, years: "2010–2012", accolades: "Microwave scoring guard" },
  { id: "jeff-green-grizzlies-2010s", name: "Jeff Green", franchiseId: "grizzlies", decade: "2010s", positions: ["SF", "PF"], stats: { pts: 12.5, reb: 4.4, ast: 1.7, stl: 0.8, blk: 0.5 }, years: "2015–2016", accolades: "Versatile veteran forward" },
  { id: "jonas-valanciunas-grizzlies-2010s", name: "Jonas Valanciunas", franchiseId: "grizzlies", decade: "2010s", positions: ["C"], stats: { pts: 17.0, reb: 9.8, ast: 1.8, stl: 0.4, blk: 1.2 }, years: "2019–2020", accolades: "Bruising post presence" },

  // ---------------- 2020s ----------------
  { id: "ja-morant-grizzlies-2020s", name: "Ja Morant", franchiseId: "grizzlies", decade: "2020s", positions: ["PG"], stats: { pts: 24.5, reb: 5.0, ast: 7.5, stl: 1.1, blk: 0.3 }, years: "2020–2026", accolades: "2022 MIP · gravity-defying dunks" },
  { id: "jaren-jackson-jr-grizzlies-2020s", name: "Jaren Jackson Jr.", franchiseId: "grizzlies", decade: "2020s", positions: ["PF", "C"], stats: { pts: 19.5, reb: 6.0, ast: 1.5, stl: 1.0, blk: 2.4 }, years: "2020–2026", accolades: "2023 DPOY · block machine" },
  { id: "desmond-bane-grizzlies-2020s", name: "Desmond Bane", franchiseId: "grizzlies", decade: "2020s", positions: ["SG"], stats: { pts: 18.5, reb: 4.6, ast: 4.0, stl: 1.0, blk: 0.4 }, years: "2020–2025", accolades: "Elite movement shooter" },
  { id: "dillon-brooks-grizzlies-2020s", name: "Dillon Brooks", franchiseId: "grizzlies", decade: "2020s", positions: ["SF", "SG"], stats: { pts: 16.0, reb: 3.5, ast: 2.5, stl: 1.0, blk: 0.3 }, years: "2020–2023", accolades: "All-Defense agitator" },
  { id: "steven-adams-grizzlies-2020s", name: "Steven Adams", franchiseId: "grizzlies", decade: "2020s", positions: ["C"], stats: { pts: 7.5, reb: 10.5, ast: 3.0, stl: 0.9, blk: 0.8 }, years: "2021–2024", accolades: "Offensive-board strongman" },
  { id: "tyus-jones-grizzlies-2020s", name: "Tyus Jones", franchiseId: "grizzlies", decade: "2020s", positions: ["PG"], stats: { pts: 9.5, reb: 2.5, ast: 5.5, stl: 1.0, blk: 0.1 }, years: "2020–2023", accolades: "Best backup PG in the league" },
  { id: "brandon-clarke-grizzlies-2020s", name: "Brandon Clarke", franchiseId: "grizzlies", decade: "2020s", positions: ["PF"], stats: { pts: 10.5, reb: 5.5, ast: 1.2, stl: 0.6, blk: 0.9 }, years: "2020–2026", accolades: "Hyper-efficient energy big" },
  { id: "jonas-valanciunas-grizzlies-2020s", name: "Jonas Valanciunas", franchiseId: "grizzlies", decade: "2020s", positions: ["C"], stats: { pts: 16.5, reb: 11.5, ast: 1.8, stl: 0.5, blk: 1.0 }, years: "2020–2021", accolades: "Double-double machine" },
];
