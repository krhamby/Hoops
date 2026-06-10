import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1950s (Tri-Cities/Milwaukee/St. Louis) ----------------
  { id: "bob-pettit-hawks-1950s", name: "Bob Pettit", franchiseId: "hawks", decade: "1950s", positions: ["PF", "C"], stats: { pts: 26.0, reb: 15.5, ast: 3.0, stl: 0.7, blk: 0.5 }, years: "1954–1959", accolades: "2× MVP · champ ’58" },
  { id: "cliff-hagan-hawks-1950s", name: "Cliff Hagan", franchiseId: "hawks", decade: "1950s", positions: ["SF", "SG"], stats: { pts: 19.5, reb: 9.0, ast: 3.0, stl: 0.8, blk: 0.4 }, years: "1956–1959", accolades: "Hook-shot All-Star · champ ’58" },
  { id: "slater-martin-hawks-1950s", name: "Slater Martin", franchiseId: "hawks", decade: "1950s", positions: ["PG"], stats: { pts: 11.5, reb: 3.0, ast: 4.5, stl: 0.9, blk: 0.1 }, years: "1956–1959", accolades: "HOF defender · champ ’58" },
  { id: "ed-macauley-hawks-1950s", name: "Ed Macauley", franchiseId: "hawks", decade: "1950s", positions: ["C", "PF"], stats: { pts: 14.5, reb: 6.5, ast: 2.5, stl: 0.5, blk: 0.5 }, years: "1956–1959", accolades: "HOF big · champ ’58" },
  { id: "chuck-share-hawks-1950s", name: "Chuck Share", franchiseId: "hawks", decade: "1950s", positions: ["C"], stats: { pts: 9.5, reb: 8.5, ast: 1.5, stl: 0.4, blk: 0.6 }, years: "1953–1959", accolades: "Burly champ ’58 pivot" },
  { id: "jack-coleman-hawks-1950s", name: "Jack Coleman", franchiseId: "hawks", decade: "1950s", positions: ["PF"], stats: { pts: 9.5, reb: 8.0, ast: 2.0, stl: 0.5, blk: 0.3 }, years: "1955–1958", accolades: "Rebounding vet · champ" },
  { id: "clyde-lovellette-hawks-1950s", name: "Clyde Lovellette", franchiseId: "hawks", decade: "1950s", positions: ["C", "PF"], stats: { pts: 18.5, reb: 9.5, ast: 1.5, stl: 0.5, blk: 0.4 }, years: "1958–1959", accolades: "HOF scoring big" },
  { id: "med-park-hawks-1950s", name: "Med Park", franchiseId: "hawks", decade: "1950s", positions: ["SG", "SF"], stats: { pts: 7.5, reb: 4.0, ast: 2.5, stl: 0.5, blk: 0.1 }, years: "1955–1959", accolades: "Champ ’58 role man" },

  // ---------------- 1960s (St. Louis) ----------------
  { id: "bob-pettit-hawks-1960s", name: "Bob Pettit", franchiseId: "hawks", decade: "1960s", positions: ["PF", "C"], stats: { pts: 28.0, reb: 16.5, ast: 3.5, stl: 0.7, blk: 0.5 }, years: "1960–1965", accolades: "11× All-Star · relentless" },
  { id: "cliff-hagan-hawks-1960s", name: "Cliff Hagan", franchiseId: "hawks", decade: "1960s", positions: ["SF", "SG"], stats: { pts: 18.5, reb: 6.5, ast: 3.5, stl: 0.7, blk: 0.3 }, years: "1960–1966", accolades: "5× All-Star wing" },
  { id: "lenny-wilkens-hawks-1960s", name: "Lenny Wilkens", franchiseId: "hawks", decade: "1960s", positions: ["PG"], stats: { pts: 16.0, reb: 4.5, ast: 6.5, stl: 1.3, blk: 0.1 }, years: "1960–1968", accolades: "HOF floor general" },
  { id: "zelmo-beaty-hawks-1960s", name: "Zelmo Beaty", franchiseId: "hawks", decade: "1960s", positions: ["C"], stats: { pts: 17.5, reb: 11.0, ast: 1.5, stl: 0.5, blk: 0.8 }, years: "1962–1969", accolades: "2× All-Star bruiser" },
  { id: "lou-hudson-hawks-1960s", name: "Lou Hudson", franchiseId: "hawks", decade: "1960s", positions: ["SG", "SF"], stats: { pts: 21.5, reb: 5.0, ast: 2.5, stl: 0.9, blk: 0.3 }, years: "1966–1969", accolades: "Sweet Lou · pure jumper" },
  { id: "bill-bridges-hawks-1960s", name: "Bill Bridges", franchiseId: "hawks", decade: "1960s", positions: ["PF"], stats: { pts: 13.0, reb: 11.5, ast: 2.5, stl: 0.7, blk: 0.5 }, years: "1962–1969", accolades: "Undersized rebound titan" },
  { id: "joe-caldwell-hawks-1960s", name: "Joe Caldwell", franchiseId: "hawks", decade: "1960s", positions: ["SG", "SF"], stats: { pts: 15.5, reb: 4.5, ast: 3.0, stl: 1.3, blk: 0.4 }, years: "1965–1969", accolades: "Pogo Joe · All-Star" },
  { id: "richie-guerin-hawks-1960s", name: "Richie Guerin", franchiseId: "hawks", decade: "1960s", positions: ["PG"], stats: { pts: 12.5, reb: 3.5, ast: 5.0, stl: 0.8, blk: 0.1 }, years: "1963–1969", accolades: "Player-coach grit" },
  { id: "clyde-lovellette-hawks-1960s", name: "Clyde Lovellette", franchiseId: "hawks", decade: "1960s", positions: ["C"], stats: { pts: 21.0, reb: 9.0, ast: 1.8, stl: 0.5, blk: 0.4 }, years: "1960–1962", accolades: "All-Star pivot scorer" },

  // ---------------- 1970s (Atlanta) ----------------
  { id: "pete-maravich-hawks-1970s", name: "Pete Maravich", franchiseId: "hawks", decade: "1970s", positions: ["PG", "SG"], stats: { pts: 24.5, reb: 4.0, ast: 5.5, stl: 1.3, blk: 0.2 }, years: "1970–1974", accolades: "Pistol · showtime passing" },
  { id: "lou-hudson-hawks-1970s", name: "Lou Hudson", franchiseId: "hawks", decade: "1970s", positions: ["SG", "SF"], stats: { pts: 24.0, reb: 5.0, ast: 3.5, stl: 1.2, blk: 0.3 }, years: "1970–1977", accolades: "6× All-Star · 27.1 ppg peak" },
  { id: "walt-bellamy-hawks-1970s", name: "Walt Bellamy", franchiseId: "hawks", decade: "1970s", positions: ["C"], stats: { pts: 16.0, reb: 12.5, ast: 2.5, stl: 0.6, blk: 0.8 }, years: "1970–1974", accolades: "HOF iron-man center" },
  { id: "john-drew-hawks-1970s", name: "John Drew", franchiseId: "hawks", decade: "1970s", positions: ["SF"], stats: { pts: 22.5, reb: 8.0, ast: 1.5, stl: 1.5, blk: 0.4 }, years: "1974–1979", accolades: "2× All-Star scorer" },
  { id: "dan-roundfield-hawks-1970s", name: "Dan Roundfield", franchiseId: "hawks", decade: "1970s", positions: ["PF"], stats: { pts: 14.5, reb: 10.5, ast: 2.0, stl: 1.1, blk: 2.0 }, years: "1978–1979", accolades: "Two-way big emerging" },
  { id: "eddie-johnson-hawks-1970s", name: "Eddie Johnson", franchiseId: "hawks", decade: "1970s", positions: ["PG", "SG"], stats: { pts: 14.5, reb: 2.5, ast: 4.5, stl: 1.3, blk: 0.1 }, years: "1977–1979", accolades: "Fast Eddie" },
  { id: "tree-rollins-hawks-1970s", name: "Tree Rollins", franchiseId: "hawks", decade: "1970s", positions: ["C"], stats: { pts: 8.5, reb: 8.0, ast: 0.8, stl: 0.5, blk: 2.6 }, years: "1977–1979", accolades: "Branches everywhere" },
  { id: "herm-gilliam-hawks-1970s", name: "Herm Gilliam", franchiseId: "hawks", decade: "1970s", positions: ["SG", "PG"], stats: { pts: 12.5, reb: 3.5, ast: 4.0, stl: 1.4, blk: 0.2 }, years: "1971–1975", accolades: "Crafty combo guard" },

  // ---------------- 1980s ----------------
  { id: "dominique-wilkins-hawks-1980s", name: "Dominique Wilkins", franchiseId: "hawks", decade: "1980s", positions: ["SF"], stats: { pts: 26.5, reb: 7.0, ast: 2.7, stl: 1.4, blk: 0.7 }, years: "1982–1989", accolades: "Human Highlight Film" },
  { id: "doc-rivers-hawks-1980s", name: "Doc Rivers", franchiseId: "hawks", decade: "1980s", positions: ["PG"], stats: { pts: 12.5, reb: 3.5, ast: 7.0, stl: 1.9, blk: 0.4 }, years: "1983–1989", accolades: "All-Star ’88 leader" },
  { id: "kevin-willis-hawks-1980s", name: "Kevin Willis", franchiseId: "hawks", decade: "1980s", positions: ["PF", "C"], stats: { pts: 13.5, reb: 8.5, ast: 1.0, stl: 0.7, blk: 0.7 }, years: "1984–1989", accolades: "Board-crashing big" },
  { id: "dan-roundfield-hawks-1980s", name: "Dan Roundfield", franchiseId: "hawks", decade: "1980s", positions: ["PF"], stats: { pts: 17.0, reb: 11.0, ast: 2.2, stl: 1.0, blk: 1.7 }, years: "1980–1984", accolades: "3× All-Star · All-Defense" },
  { id: "tree-rollins-hawks-1980s", name: "Tree Rollins", franchiseId: "hawks", decade: "1980s", positions: ["C"], stats: { pts: 8.5, reb: 7.5, ast: 0.8, stl: 0.5, blk: 2.9 }, years: "1980–1988", accolades: "Blocks champ ’83" },
  { id: "john-drew-hawks-1980s", name: "John Drew", franchiseId: "hawks", decade: "1980s", positions: ["SF"], stats: { pts: 19.5, reb: 6.5, ast: 1.8, stl: 1.3, blk: 0.3 }, years: "1980–1982", accolades: "Foul-drawing forward" },
  { id: "eddie-johnson-hawks-1980s", name: "Eddie Johnson", franchiseId: "hawks", decade: "1980s", positions: ["PG", "SG"], stats: { pts: 16.5, reb: 3.0, ast: 5.0, stl: 1.2, blk: 0.1 }, years: "1980–1986", accolades: "2× All-Star guard" },
  { id: "spud-webb-hawks-1980s", name: "Spud Webb", franchiseId: "hawks", decade: "1980s", positions: ["PG"], stats: { pts: 9.0, reb: 2.0, ast: 5.0, stl: 1.1, blk: 0.1 }, years: "1985–1989", accolades: "5-7 dunk champ ’86" },
  { id: "randy-wittman-hawks-1980s", name: "Randy Wittman", franchiseId: "hawks", decade: "1980s", positions: ["SG"], stats: { pts: 11.0, reb: 2.0, ast: 3.0, stl: 0.5, blk: 0.1 }, years: "1983–1988", accolades: "Mid-range steady hand" },
  { id: "moses-malone-hawks-1980s", name: "Moses Malone", franchiseId: "hawks", decade: "1980s", positions: ["C"], stats: { pts: 20.0, reb: 11.5, ast: 1.4, stl: 0.9, blk: 1.2 }, years: "1988–1989", accolades: "3× MVP pedigree" },

  // ---------------- 1990s ----------------
  { id: "dominique-wilkins-hawks-1990s", name: "Dominique Wilkins", franchiseId: "hawks", decade: "1990s", positions: ["SF"], stats: { pts: 28.0, reb: 7.0, ast: 3.0, stl: 1.3, blk: 0.6 }, years: "1990–1994", accolades: "9× All-Star · ageless" },
  { id: "mookie-blaylock-hawks-1990s", name: "Mookie Blaylock", franchiseId: "hawks", decade: "1990s", positions: ["PG"], stats: { pts: 15.0, reb: 4.5, ast: 7.0, stl: 2.5, blk: 0.4 }, years: "1992–1999", accolades: "2× steals champ" },
  { id: "steve-smith-hawks-1990s", name: "Steve Smith", franchiseId: "hawks", decade: "1990s", positions: ["SG"], stats: { pts: 18.5, reb: 4.0, ast: 3.5, stl: 1.0, blk: 0.3 }, years: "1994–1999", accolades: "All-Star ’98 · pro’s pro" },
  { id: "kevin-willis-hawks-1990s", name: "Kevin Willis", franchiseId: "hawks", decade: "1990s", positions: ["PF", "C"], stats: { pts: 16.5, reb: 12.0, ast: 1.5, stl: 0.8, blk: 0.6 }, years: "1990–1994", accolades: "All-Star ’92 · 15-15 season" },
  { id: "dikembe-mutombo-hawks-1990s", name: "Dikembe Mutombo", franchiseId: "hawks", decade: "1990s", positions: ["C"], stats: { pts: 12.5, reb: 12.0, ast: 1.0, stl: 0.4, blk: 3.0 }, years: "1996–1999", accolades: "2× DPOY as a Hawk" },
  { id: "stacey-augmon-hawks-1990s", name: "Stacey Augmon", franchiseId: "hawks", decade: "1990s", positions: ["SF", "SG"], stats: { pts: 12.5, reb: 4.5, ast: 2.5, stl: 1.3, blk: 0.5 }, years: "1991–1996", accolades: "Plastic Man defense" },
  { id: "christian-laettner-hawks-1990s", name: "Christian Laettner", franchiseId: "hawks", decade: "1990s", positions: ["PF", "C"], stats: { pts: 14.5, reb: 7.0, ast: 2.5, stl: 0.9, blk: 0.7 }, years: "1996–1999", accolades: "All-Star ’97" },
  { id: "alan-henderson-hawks-1990s", name: "Alan Henderson", franchiseId: "hawks", decade: "1990s", positions: ["PF"], stats: { pts: 11.0, reb: 6.0, ast: 0.8, stl: 0.7, blk: 0.6 }, years: "1995–1999", accolades: "MIP ’98" },

  // ---------------- 2000s ----------------
  { id: "joe-johnson-hawks-2000s", name: "Joe Johnson", franchiseId: "hawks", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 21.5, reb: 4.5, ast: 5.0, stl: 1.0, blk: 0.2 }, years: "2005–2009", accolades: "3× All-Star iso ace" },
  { id: "josh-smith-hawks-2000s", name: "Josh Smith", franchiseId: "hawks", decade: "2000s", positions: ["PF", "SF"], stats: { pts: 15.0, reb: 8.0, ast: 3.0, stl: 1.3, blk: 2.3 }, years: "2004–2009", accolades: "Dunk champ ’05 · swat king" },
  { id: "jason-terry-hawks-2000s", name: "Jason Terry", franchiseId: "hawks", decade: "2000s", positions: ["PG", "SG"], stats: { pts: 17.5, reb: 3.5, ast: 5.5, stl: 1.8, blk: 0.2 }, years: "2000–2004", accolades: "The Jet takes off" },
  { id: "shareef-abdur-rahim-hawks-2000s", name: "Shareef Abdur-Rahim", franchiseId: "hawks", decade: "2000s", positions: ["PF"], stats: { pts: 20.5, reb: 9.0, ast: 3.0, stl: 1.1, blk: 0.5 }, years: "2001–2004", accolades: "All-Star ’02" },
  { id: "al-horford-hawks-2000s", name: "Al Horford", franchiseId: "hawks", decade: "2000s", positions: ["C", "PF"], stats: { pts: 10.5, reb: 9.5, ast: 2.5, stl: 0.8, blk: 1.1 }, years: "2007–2009", accolades: "All-Rookie anchor" },
  { id: "mike-bibby-hawks-2000s", name: "Mike Bibby", franchiseId: "hawks", decade: "2000s", positions: ["PG"], stats: { pts: 14.0, reb: 3.0, ast: 5.5, stl: 0.9, blk: 0.1 }, years: "2008–2009", accolades: "Playoff-tested PG" },
  { id: "marvin-williams-hawks-2000s", name: "Marvin Williams", franchiseId: "hawks", decade: "2000s", positions: ["SF", "PF"], stats: { pts: 11.5, reb: 5.5, ast: 1.3, stl: 0.8, blk: 0.5 }, years: "2005–2009", accolades: "No. 2 pick glue" },
  { id: "josh-childress-hawks-2000s", name: "Josh Childress", franchiseId: "hawks", decade: "2000s", positions: ["SF", "SG"], stats: { pts: 10.5, reb: 5.5, ast: 1.9, stl: 1.0, blk: 0.5 }, years: "2004–2008", accolades: "Efficient sixth man" },

  // ---------------- 2010s ----------------
  { id: "al-horford-hawks-2010s", name: "Al Horford", franchiseId: "hawks", decade: "2010s", positions: ["C", "PF"], stats: { pts: 15.5, reb: 8.5, ast: 3.2, stl: 0.9, blk: 1.3 }, years: "2010–2016", accolades: "4× All-Star · 60-win core" },
  { id: "paul-millsap-hawks-2010s", name: "Paul Millsap", franchiseId: "hawks", decade: "2010s", positions: ["PF"], stats: { pts: 17.0, reb: 8.0, ast: 3.0, stl: 1.7, blk: 1.0 }, years: "2013–2017", accolades: "4× All-Star do-it-all" },
  { id: "jeff-teague-hawks-2010s", name: "Jeff Teague", franchiseId: "hawks", decade: "2010s", positions: ["PG"], stats: { pts: 13.5, reb: 2.5, ast: 6.0, stl: 1.2, blk: 0.3 }, years: "2010–2016", accolades: "All-Star ’15" },
  { id: "kyle-korver-hawks-2010s", name: "Kyle Korver", franchiseId: "hawks", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 11.5, reb: 3.5, ast: 2.5, stl: 0.7, blk: 0.4 }, years: "2012–2017", accolades: "All-Star ’15 · 49% from 3" },
  { id: "josh-smith-hawks-2010s", name: "Josh Smith", franchiseId: "hawks", decade: "2010s", positions: ["PF", "SF"], stats: { pts: 17.0, reb: 8.5, ast: 3.5, stl: 1.3, blk: 1.9 }, years: "2010–2013", accolades: "Highlight-reel forward" },
  { id: "joe-johnson-hawks-2010s", name: "Joe Johnson", franchiseId: "hawks", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 19.5, reb: 4.0, ast: 4.5, stl: 0.8, blk: 0.1 }, years: "2010–2012", accolades: "All-Star wing" },
  { id: "dennis-schroder-hawks-2010s", name: "Dennis Schroder", franchiseId: "hawks", decade: "2010s", positions: ["PG"], stats: { pts: 14.0, reb: 3.0, ast: 5.5, stl: 0.9, blk: 0.1 }, years: "2013–2018", accolades: "Speedy German PG" },
  { id: "trae-young-hawks-2010s", name: "Trae Young", franchiseId: "hawks", decade: "2010s", positions: ["PG"], stats: { pts: 19.1, reb: 3.7, ast: 8.1, stl: 0.9, blk: 0.2 }, years: "2018–2019", accolades: "All-Rookie ice water" },
  { id: "kent-bazemore-hawks-2010s", name: "Kent Bazemore", franchiseId: "hawks", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 11.0, reb: 4.0, ast: 2.3, stl: 1.3, blk: 0.6 }, years: "2014–2019", accolades: "Energy wing" },

  // ---------------- 2020s ----------------
  { id: "trae-young-hawks-2020s", name: "Trae Young", franchiseId: "hawks", decade: "2020s", positions: ["PG"], stats: { pts: 26.0, reb: 3.5, ast: 10.0, stl: 1.1, blk: 0.2 }, years: "2020–2026", accolades: "ECF run ’21 · assist champ" },
  { id: "dejounte-murray-hawks-2020s", name: "Dejounte Murray", franchiseId: "hawks", decade: "2020s", positions: ["SG", "PG"], stats: { pts: 21.5, reb: 5.5, ast: 6.0, stl: 1.5, blk: 0.3 }, years: "2022–2024", accolades: "Two-way combo guard" },
  { id: "jalen-johnson-hawks-2020s", name: "Jalen Johnson", franchiseId: "hawks", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 17.0, reb: 9.0, ast: 4.5, stl: 1.2, blk: 0.9 }, years: "2021–2026", accolades: "Point-forward breakout" },
  { id: "clint-capela-hawks-2020s", name: "Clint Capela", franchiseId: "hawks", decade: "2020s", positions: ["C"], stats: { pts: 12.5, reb: 11.0, ast: 1.0, stl: 0.6, blk: 1.3 }, years: "2020–2025", accolades: "Rebound champ ’21" },
  { id: "bogdan-bogdanovic-hawks-2020s", name: "Bogdan Bogdanovic", franchiseId: "hawks", decade: "2020s", positions: ["SG", "SF"], stats: { pts: 15.5, reb: 3.5, ast: 3.0, stl: 1.0, blk: 0.3 }, years: "2020–2025", accolades: "Flamethrower off the bench" },
  { id: "deandre-hunter-hawks-2020s", name: "De'Andre Hunter", franchiseId: "hawks", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 14.5, reb: 4.0, ast: 1.5, stl: 0.7, blk: 0.4 }, years: "2020–2025", accolades: "Wing stopper" },
  { id: "onyeka-okongwu-hawks-2020s", name: "Onyeka Okongwu", franchiseId: "hawks", decade: "2020s", positions: ["C", "PF"], stats: { pts: 10.5, reb: 7.0, ast: 1.5, stl: 0.7, blk: 1.1 }, years: "2020–2026", accolades: "Switchable young big" },
  { id: "john-collins-hawks-2020s", name: "John Collins", franchiseId: "hawks", decade: "2020s", positions: ["PF", "C"], stats: { pts: 16.5, reb: 8.0, ast: 1.8, stl: 0.6, blk: 1.0 }, years: "2020–2023", accolades: "Lob-catching stretch big" },
  { id: "kristaps-porzingis-hawks-2020s", name: "Kristaps Porzingis", franchiseId: "hawks", decade: "2020s", positions: ["C", "PF"], stats: { pts: 18.0, reb: 7.0, ast: 2.0, stl: 0.7, blk: 1.6 }, years: "2025–2026", accolades: "Unicorn in Atlanta" },
];
