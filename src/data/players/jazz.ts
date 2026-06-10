import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1970s (New Orleans Jazz) ----------------
  { id: "pete-maravich-jazz-1970s", name: "Pete Maravich", franchiseId: "jazz", decade: "1970s", positions: ["PG", "SG"], stats: { pts: 25.2, reb: 4.2, ast: 5.6, stl: 1.4, blk: 0.2 }, years: "1974–1979", accolades: "Pistol · 1977 scoring champ" },
  { id: "truck-robinson-jazz-1970s", name: "Truck Robinson", franchiseId: "jazz", decade: "1970s", positions: ["PF"], stats: { pts: 21.0, reb: 14.0, ast: 2.5, stl: 0.8, blk: 0.8 }, years: "1977–1979", accolades: "1978 rebounding champ" },
  { id: "gail-goodrich-jazz-1970s", name: "Gail Goodrich", franchiseId: "jazz", decade: "1970s", positions: ["SG", "PG"], stats: { pts: 14.5, reb: 2.5, ast: 4.0, stl: 0.9, blk: 0.1 }, years: "1976–1979", accolades: "Hall of Fame guard's last stop" },
  { id: "aaron-james-jazz-1970s", name: "Aaron James", franchiseId: "jazz", decade: "1970s", positions: ["SF"], stats: { pts: 12.5, reb: 4.5, ast: 1.4, stl: 0.5, blk: 0.3 }, years: "1974–1979", accolades: "Original Jazz forward" },
  { id: "jim-mcelroy-jazz-1970s", name: "Jim McElroy", franchiseId: "jazz", decade: "1970s", positions: ["PG"], stats: { pts: 10.5, reb: 2.2, ast: 4.0, stl: 0.8, blk: 0.1 }, years: "1975–1979", accolades: "Quick backcourt piece" },
  { id: "rich-kelley-jazz-1970s", name: "Rich Kelley", franchiseId: "jazz", decade: "1970s", positions: ["C"], stats: { pts: 9.5, reb: 8.5, ast: 2.5, stl: 0.7, blk: 1.0 }, years: "1975–1979", accolades: "Cerebral 7-foot Stanford man" },
  { id: "spencer-haywood-jazz-1970s", name: "Spencer Haywood", franchiseId: "jazz", decade: "1970s", positions: ["PF"], stats: { pts: 24.0, reb: 9.7, ast: 2.5, stl: 0.7, blk: 1.1 }, years: "1979", accolades: "All-time talent passing through" },

  // ---------------- 1980s ----------------
  { id: "adrian-dantley-jazz-1980s", name: "Adrian Dantley", franchiseId: "jazz", decade: "1980s", positions: ["SF"], stats: { pts: 29.6, reb: 6.2, ast: 3.7, stl: 1.0, blk: 0.2 }, years: "1979–1986", accolades: "2× scoring champ post genius" },
  { id: "john-stockton-jazz-1980s", name: "John Stockton", franchiseId: "jazz", decade: "1980s", positions: ["PG"], stats: { pts: 12.5, reb: 2.6, ast: 10.5, stl: 2.5, blk: 0.2 }, years: "1984–1989", accolades: "Assist-title machine begins" },
  { id: "karl-malone-jazz-1980s", name: "Karl Malone", franchiseId: "jazz", decade: "1980s", positions: ["PF"], stats: { pts: 24.5, reb: 10.8, ast: 2.4, stl: 1.2, blk: 0.7 }, years: "1985–1989", accolades: "The Mailman delivers" },
  { id: "darrell-griffith-jazz-1980s", name: "Darrell Griffith", franchiseId: "jazz", decade: "1980s", positions: ["SG"], stats: { pts: 18.5, reb: 3.5, ast: 2.3, stl: 1.2, blk: 0.4 }, years: "1980–1989", accolades: "Dr. Dunkenstein · 1981 ROY" },
  { id: "thurl-bailey-jazz-1980s", name: "Thurl Bailey", franchiseId: "jazz", decade: "1980s", positions: ["PF", "SF"], stats: { pts: 14.5, reb: 5.5, ast: 1.6, stl: 0.6, blk: 1.5 }, years: "1983–1989", accolades: "Big T · sixth-man scorer" },
  { id: "mark-eaton-jazz-1980s", name: "Mark Eaton", franchiseId: "jazz", decade: "1980s", positions: ["C"], stats: { pts: 7.5, reb: 9.5, ast: 1.0, stl: 0.4, blk: 4.0 }, years: "1982–1989", accolades: "2× DPOY · 5.6 blk in '85" },
  { id: "rickey-green-jazz-1980s", name: "Rickey Green", franchiseId: "jazz", decade: "1980s", positions: ["PG"], stats: { pts: 12.5, reb: 2.5, ast: 7.0, stl: 1.8, blk: 0.1 }, years: "1980–1988", accolades: "All-Star speedster" },
  { id: "bobby-hansen-jazz-1980s", name: "Bobby Hansen", franchiseId: "jazz", decade: "1980s", positions: ["SG"], stats: { pts: 8.5, reb: 2.7, ast: 2.2, stl: 1.0, blk: 0.2 }, years: "1983–1989", accolades: "Defensive-minded guard" },

  // ---------------- 1990s ----------------
  { id: "john-stockton-jazz-1990s", name: "John Stockton", franchiseId: "jazz", decade: "1990s", positions: ["PG"], stats: { pts: 14.5, reb: 2.8, ast: 11.5, stl: 2.2, blk: 0.2 }, years: "1990–1999", accolades: "All-time assists & steals king" },
  { id: "karl-malone-jazz-1990s", name: "Karl Malone", franchiseId: "jazz", decade: "1990s", positions: ["PF"], stats: { pts: 26.6, reb: 10.6, ast: 3.9, stl: 1.3, blk: 0.8 }, years: "1990–1999", accolades: "2× MVP · pick-and-roll perfection" },
  { id: "jeff-hornacek-jazz-1990s", name: "Jeff Hornacek", franchiseId: "jazz", decade: "1990s", positions: ["SG"], stats: { pts: 15.5, reb: 2.9, ast: 3.9, stl: 1.2, blk: 0.2 }, years: "1994–1999", accolades: "Deadeye third wheel" },
  { id: "jeff-malone-jazz-1990s", name: "Jeff Malone", franchiseId: "jazz", decade: "1990s", positions: ["SG"], stats: { pts: 19.0, reb: 2.5, ast: 1.8, stl: 0.6, blk: 0.1 }, years: "1990–1994", accolades: "Silky mid-range scorer" },
  { id: "bryon-russell-jazz-1990s", name: "Bryon Russell", franchiseId: "jazz", decade: "1990s", positions: ["SF"], stats: { pts: 9.5, reb: 4.0, ast: 1.7, stl: 1.1, blk: 0.3 }, years: "1993–1999", accolades: "Finals-tested 3-and-D wing" },
  { id: "mark-eaton-jazz-1990s", name: "Mark Eaton", franchiseId: "jazz", decade: "1990s", positions: ["C"], stats: { pts: 5.5, reb: 8.0, ast: 0.8, stl: 0.3, blk: 2.8 }, years: "1990–1993", accolades: "Paint-clogging giant" },
  { id: "antoine-carr-jazz-1990s", name: "Antoine Carr", franchiseId: "jazz", decade: "1990s", positions: ["PF", "C"], stats: { pts: 8.0, reb: 3.5, ast: 1.0, stl: 0.4, blk: 0.8 }, years: "1994–1998", accolades: "The Big Dawg · Finals reserve" },
  { id: "greg-ostertag-jazz-1990s", name: "Greg Ostertag", franchiseId: "jazz", decade: "1990s", positions: ["C"], stats: { pts: 6.5, reb: 6.5, ast: 0.6, stl: 0.4, blk: 1.7 }, years: "1995–1999", accolades: "Shot-blocking Finals center" },
  { id: "david-benoit-jazz-1990s", name: "David Benoit", franchiseId: "jazz", decade: "1990s", positions: ["SF", "PF"], stats: { pts: 7.5, reb: 4.5, ast: 0.8, stl: 0.5, blk: 0.5 }, years: "1991–1996", accolades: "Athletic rotation forward" },

  // ---------------- 2000s ----------------
  { id: "john-stockton-jazz-2000s", name: "John Stockton", franchiseId: "jazz", decade: "2000s", positions: ["PG"], stats: { pts: 11.5, reb: 2.8, ast: 8.4, stl: 1.7, blk: 0.2 }, years: "2000–2003", accolades: "Ageless to the very end" },
  { id: "karl-malone-jazz-2000s", name: "Karl Malone", franchiseId: "jazz", decade: "2000s", positions: ["PF"], stats: { pts: 23.0, reb: 8.6, ast: 4.4, stl: 1.1, blk: 0.7 }, years: "2000–2003", accolades: "No. 2 all-time scorer departs" },
  { id: "andrei-kirilenko-jazz-2000s", name: "Andrei Kirilenko", franchiseId: "jazz", decade: "2000s", positions: ["SF", "PF"], stats: { pts: 13.0, reb: 6.0, ast: 2.9, stl: 1.6, blk: 2.2 }, years: "2001–2009", accolades: "AK-47 · 5×5 stat-sheet stuffer" },
  { id: "deron-williams-jazz-2000s", name: "Deron Williams", franchiseId: "jazz", decade: "2000s", positions: ["PG"], stats: { pts: 17.5, reb: 3.2, ast: 9.0, stl: 1.0, blk: 0.2 }, years: "2005–2009", accolades: "All-NBA crossover king" },
  { id: "carlos-boozer-jazz-2000s", name: "Carlos Boozer", franchiseId: "jazz", decade: "2000s", positions: ["PF"], stats: { pts: 19.0, reb: 10.5, ast: 2.8, stl: 1.0, blk: 0.3 }, years: "2004–2009", accolades: "2× All-Star 20-10 forward" },
  { id: "mehmet-okur-jazz-2000s", name: "Mehmet Okur", franchiseId: "jazz", decade: "2000s", positions: ["C", "PF"], stats: { pts: 15.5, reb: 8.0, ast: 1.8, stl: 0.6, blk: 0.7 }, years: "2004–2009", accolades: "Money Mehmet · All-Star stretch 5" },
  { id: "matt-harpring-jazz-2000s", name: "Matt Harpring", franchiseId: "jazz", decade: "2000s", positions: ["SF", "SG"], stats: { pts: 11.5, reb: 4.5, ast: 1.4, stl: 0.7, blk: 0.2 }, years: "2002–2009", accolades: "Bruising glue wing" },
  { id: "paul-millsap-jazz-2000s", name: "Paul Millsap", franchiseId: "jazz", decade: "2000s", positions: ["PF"], stats: { pts: 9.5, reb: 6.5, ast: 1.2, stl: 0.8, blk: 0.8 }, years: "2006–2009", accolades: "Second-round steal" },
  { id: "ronnie-brewer-jazz-2000s", name: "Ronnie Brewer", franchiseId: "jazz", decade: "2000s", positions: ["SG"], stats: { pts: 11.5, reb: 3.0, ast: 1.9, stl: 1.5, blk: 0.3 }, years: "2006–2009", accolades: "Cutting and defense" },

  // ---------------- 2010s ----------------
  { id: "gordon-hayward-jazz-2010s", name: "Gordon Hayward", franchiseId: "jazz", decade: "2010s", positions: ["SF"], stats: { pts: 15.7, reb: 4.2, ast: 3.4, stl: 0.9, blk: 0.4 }, years: "2010–2017", accolades: "2017 All-Star wing" },
  { id: "rudy-gobert-jazz-2010s", name: "Rudy Gobert", franchiseId: "jazz", decade: "2010s", positions: ["C"], stats: { pts: 11.5, reb: 11.0, ast: 1.3, stl: 0.7, blk: 2.2 }, years: "2013–2019", accolades: "Stifle Tower · 2× DPOY" },
  { id: "donovan-mitchell-jazz-2010s", name: "Donovan Mitchell", franchiseId: "jazz", decade: "2010s", positions: ["SG"], stats: { pts: 22.0, reb: 4.0, ast: 4.0, stl: 1.4, blk: 0.3 }, years: "2017–2019", accolades: "Spida · instant franchise scorer" },
  { id: "derrick-favors-jazz-2010s", name: "Derrick Favors", franchiseId: "jazz", decade: "2010s", positions: ["PF", "C"], stats: { pts: 12.5, reb: 7.5, ast: 1.3, stl: 0.8, blk: 1.3 }, years: "2011–2019", accolades: "Steady frontcourt fixture" },
  { id: "joe-ingles-jazz-2010s", name: "Joe Ingles", franchiseId: "jazz", decade: "2010s", positions: ["SF", "SG"], stats: { pts: 9.5, reb: 3.5, ast: 4.0, stl: 1.0, blk: 0.2 }, years: "2014–2019", accolades: "Jinglin' Joe · trash-talk sniper" },
  { id: "al-jefferson-jazz-2010s", name: "Al Jefferson", franchiseId: "jazz", decade: "2010s", positions: ["C"], stats: { pts: 18.5, reb: 9.5, ast: 2.0, stl: 0.8, blk: 1.5 }, years: "2010–2013", accolades: "Post-up centerpiece" },
  { id: "ricky-rubio-jazz-2010s", name: "Ricky Rubio", franchiseId: "jazz", decade: "2010s", positions: ["PG"], stats: { pts: 12.9, reb: 4.4, ast: 5.7, stl: 1.4, blk: 0.1 }, years: "2017–2019", accolades: "Playoff-series closer vs OKC" },
  { id: "rodney-hood-jazz-2010s", name: "Rodney Hood", franchiseId: "jazz", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 13.5, reb: 3.0, ast: 1.9, stl: 0.8, blk: 0.2 }, years: "2014–2018", accolades: "Smooth lefty wing scorer" },

  // ---------------- 2020s ----------------
  { id: "donovan-mitchell-jazz-2020s", name: "Donovan Mitchell", franchiseId: "jazz", decade: "2020s", positions: ["SG"], stats: { pts: 26.0, reb: 4.3, ast: 5.0, stl: 1.2, blk: 0.3 }, years: "2020–2022", accolades: "Back-to-back 1-seed engine" },
  { id: "rudy-gobert-jazz-2020s", name: "Rudy Gobert", franchiseId: "jazz", decade: "2020s", positions: ["C"], stats: { pts: 14.5, reb: 13.8, ast: 1.2, stl: 0.7, blk: 2.5 }, years: "2020–2022", accolades: "3rd DPOY · rebound king" },
  { id: "lauri-markkanen-jazz-2020s", name: "Lauri Markkanen", franchiseId: "jazz", decade: "2020s", positions: ["PF", "SF"], stats: { pts: 23.5, reb: 8.0, ast: 1.9, stl: 0.7, blk: 0.5 }, years: "2022–2026", accolades: "2023 MIP · Finnisher" },
  { id: "jordan-clarkson-jazz-2020s", name: "Jordan Clarkson", franchiseId: "jazz", decade: "2020s", positions: ["SG", "PG"], stats: { pts: 17.5, reb: 3.5, ast: 3.5, stl: 0.8, blk: 0.2 }, years: "2020–2025", accolades: "2021 Sixth Man of the Year" },
  { id: "mike-conley-jazz-2020s", name: "Mike Conley", franchiseId: "jazz", decade: "2020s", positions: ["PG"], stats: { pts: 14.5, reb: 3.2, ast: 5.6, stl: 1.3, blk: 0.2 }, years: "2020–2023", accolades: "First All-Star nod at 33" },
  { id: "bojan-bogdanovic-jazz-2020s", name: "Bojan Bogdanovic", franchiseId: "jazz", decade: "2020s", positions: ["SF"], stats: { pts: 17.5, reb: 3.8, ast: 1.9, stl: 0.6, blk: 0.1 }, years: "2020–2022", accolades: "Croatian flamethrower" },
  { id: "walker-kessler-jazz-2020s", name: "Walker Kessler", franchiseId: "jazz", decade: "2020s", positions: ["C"], stats: { pts: 10.0, reb: 10.0, ast: 1.2, stl: 0.5, blk: 2.3 }, years: "2022–2026", accolades: "Elite young rim protector" },
  { id: "collin-sexton-jazz-2020s", name: "Collin Sexton", franchiseId: "jazz", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 16.5, reb: 2.7, ast: 4.0, stl: 0.9, blk: 0.1 }, years: "2022–2025", accolades: "Young Bull downhill scorer" },
];
