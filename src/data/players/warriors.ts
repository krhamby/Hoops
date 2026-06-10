import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1950s (Philadelphia Warriors) ----------------
  { id: "paul-arizin-warriors-1950s", name: "Paul Arizin", franchiseId: "warriors", decade: "1950s", positions: ["SF", "SG"], stats: { pts: 22.5, reb: 8.5, ast: 2.3, stl: 0.9, blk: 0.3 }, years: "1950–1959", accolades: "2× scoring champ · '56 title" },
  { id: "neil-johnston-warriors-1950s", name: "Neil Johnston", franchiseId: "warriors", decade: "1950s", positions: ["C"], stats: { pts: 19.4, reb: 11.3, ast: 2.5, stl: 0.6, blk: 0.8 }, years: "1951–1959", accolades: "3× scoring champ hook shot" },
  { id: "joe-fulks-warriors-1950s", name: "Joe Fulks", franchiseId: "warriors", decade: "1950s", positions: ["PF", "SF"], stats: { pts: 15.5, reb: 5.5, ast: 1.3, stl: 0.5, blk: 0.3 }, years: "1950–1954", accolades: "Jumpin' Joe · jump-shot pioneer" },
  { id: "tom-gola-warriors-1950s", name: "Tom Gola", franchiseId: "warriors", decade: "1950s", positions: ["PG", "SF"], stats: { pts: 12.5, reb: 9.0, ast: 4.5, stl: 0.9, blk: 0.3 }, years: "1955–1959", accolades: "Do-it-all '56 champion" },
  { id: "jack-george-warriors-1950s", name: "Jack George", franchiseId: "warriors", decade: "1950s", positions: ["PG"], stats: { pts: 12.0, reb: 4.5, ast: 5.0, stl: 0.7, blk: 0.1 }, years: "1953–1958", accolades: "All-Star playmaker" },
  { id: "andy-phillip-warriors-1950s", name: "Andy Phillip", franchiseId: "warriors", decade: "1950s", positions: ["PG"], stats: { pts: 9.5, reb: 5.5, ast: 6.5, stl: 0.8, blk: 0.1 }, years: "1950–1953", accolades: "Hall of Fame assist leader" },
  { id: "ernie-beck-warriors-1950s", name: "Ernie Beck", franchiseId: "warriors", decade: "1950s", positions: ["SG"], stats: { pts: 8.5, reb: 4.0, ast: 2.2, stl: 0.5, blk: 0.1 }, years: "1953–1959", accolades: "Local Philly product" },

  // ---------------- 1960s ----------------
  { id: "wilt-chamberlain-warriors-1960s", name: "Wilt Chamberlain", franchiseId: "warriors", decade: "1960s", positions: ["C"], stats: { pts: 41.5, reb: 25.1, ast: 2.8, stl: 1.0, blk: 3.8 }, years: "1959–1965", accolades: "100-point game · 50.4 ppg season" },
  { id: "paul-arizin-warriors-1960s", name: "Paul Arizin", franchiseId: "warriors", decade: "1960s", positions: ["SF"], stats: { pts: 22.0, reb: 7.0, ast: 2.0, stl: 0.8, blk: 0.2 }, years: "1960–1962", accolades: "Hall of Famer's final years" },
  { id: "rick-barry-warriors-1960s", name: "Rick Barry", franchiseId: "warriors", decade: "1960s", positions: ["SF"], stats: { pts: 30.5, reb: 9.2, ast: 3.0, stl: 1.5, blk: 0.4 }, years: "1965–1967", accolades: "1967 scoring champ at 35.6" },
  { id: "nate-thurmond-warriors-1960s", name: "Nate Thurmond", franchiseId: "warriors", decade: "1960s", positions: ["C", "PF"], stats: { pts: 17.5, reb: 17.0, ast: 2.5, stl: 0.8, blk: 2.8 }, years: "1963–1969", accolades: "Defensive titan of the pivot" },
  { id: "guy-rodgers-warriors-1960s", name: "Guy Rodgers", franchiseId: "warriors", decade: "1960s", positions: ["PG"], stats: { pts: 12.5, reb: 5.0, ast: 9.0, stl: 1.0, blk: 0.1 }, years: "1960–1966", accolades: "Assist-title floor general" },
  { id: "al-attles-warriors-1960s", name: "Al Attles", franchiseId: "warriors", decade: "1960s", positions: ["PG", "SG"], stats: { pts: 9.0, reb: 3.5, ast: 3.5, stl: 1.0, blk: 0.2 }, years: "1960–1969", accolades: "The Destroyer · franchise lifer" },
  { id: "tom-meschery-warriors-1960s", name: "Tom Meschery", franchiseId: "warriors", decade: "1960s", positions: ["PF"], stats: { pts: 12.5, reb: 8.5, ast: 1.5, stl: 0.6, blk: 0.4 }, years: "1961–1967", accolades: "Poet with elbows" },
  { id: "jeff-mullins-warriors-1960s", name: "Jeff Mullins", franchiseId: "warriors", decade: "1960s", positions: ["SG"], stats: { pts: 16.5, reb: 4.5, ast: 4.0, stl: 1.0, blk: 0.2 }, years: "1966–1969", accolades: "Rising All-Star wing" },

  // ---------------- 1970s ----------------
  { id: "rick-barry-warriors-1970s", name: "Rick Barry", franchiseId: "warriors", decade: "1970s", positions: ["SF"], stats: { pts: 25.5, reb: 5.5, ast: 5.5, stl: 2.0, blk: 0.5 }, years: "1972–1978", accolades: "1975 Finals MVP sweep" },
  { id: "nate-thurmond-warriors-1970s", name: "Nate Thurmond", franchiseId: "warriors", decade: "1970s", positions: ["C"], stats: { pts: 17.0, reb: 16.0, ast: 3.5, stl: 0.8, blk: 2.5 }, years: "1970–1974", accolades: "First official quadruple-double" },
  { id: "jeff-mullins-warriors-1970s", name: "Jeff Mullins", franchiseId: "warriors", decade: "1970s", positions: ["SG"], stats: { pts: 18.5, reb: 4.5, ast: 4.5, stl: 1.0, blk: 0.3 }, years: "1970–1976", accolades: "3× All-Star · '75 champ" },
  { id: "jamaal-wilkes-warriors-1970s", name: "Jamaal Wilkes", franchiseId: "warriors", decade: "1970s", positions: ["SF"], stats: { pts: 16.0, reb: 7.5, ast: 2.5, stl: 1.4, blk: 0.4 }, years: "1974–1977", accolades: "1975 ROY · Silk" },
  { id: "phil-smith-warriors-1970s", name: "Phil Smith", franchiseId: "warriors", decade: "1970s", positions: ["SG"], stats: { pts: 16.5, reb: 3.5, ast: 3.7, stl: 1.3, blk: 0.4 }, years: "1974–1979", accolades: "All-NBA '75 champ guard" },
  { id: "clifford-ray-warriors-1970s", name: "Clifford Ray", franchiseId: "warriors", decade: "1970s", positions: ["C"], stats: { pts: 8.5, reb: 9.5, ast: 2.0, stl: 0.8, blk: 1.2 }, years: "1974–1979", accolades: "Defensive hub of '75 title" },
  { id: "charles-johnson-warriors-1970s", name: "Charles Johnson", franchiseId: "warriors", decade: "1970s", positions: ["SG"], stats: { pts: 9.5, reb: 3.0, ast: 2.0, stl: 1.1, blk: 0.1 }, years: "1971–1977", accolades: "'75 title sparkplug" },
  { id: "robert-parish-warriors-1970s", name: "Robert Parish", franchiseId: "warriors", decade: "1970s", positions: ["C"], stats: { pts: 13.5, reb: 9.5, ast: 1.3, stl: 0.8, blk: 1.5 }, years: "1976–1979", accolades: "The Chief before Boston" },

  // ---------------- 1980s ----------------
  { id: "chris-mullin-warriors-1980s", name: "Chris Mullin", franchiseId: "warriors", decade: "1980s", positions: ["SF", "SG"], stats: { pts: 20.5, reb: 4.5, ast: 3.6, stl: 1.7, blk: 0.5 }, years: "1985–1989", accolades: "Southpaw scoring savant" },
  { id: "purvis-short-warriors-1980s", name: "Purvis Short", franchiseId: "warriors", decade: "1980s", positions: ["SF", "SG"], stats: { pts: 20.5, reb: 4.5, ast: 2.5, stl: 0.9, blk: 0.2 }, years: "1980–1987", accolades: "Rainbow jumper · 28 ppg in '85" },
  { id: "joe-barry-carroll-warriors-1980s", name: "Joe Barry Carroll", franchiseId: "warriors", decade: "1980s", positions: ["C"], stats: { pts: 20.0, reb: 8.0, ast: 1.8, stl: 0.8, blk: 1.6 }, years: "1980–1987", accolades: "All-Star No. 1 pick" },
  { id: "sleepy-floyd-warriors-1980s", name: "Sleepy Floyd", franchiseId: "warriors", decade: "1980s", positions: ["PG"], stats: { pts: 17.5, reb: 3.2, ast: 8.5, stl: 1.5, blk: 0.2 }, years: "1982–1987", accolades: "29-point playoff quarter" },
  { id: "mitch-richmond-warriors-1980s", name: "Mitch Richmond", franchiseId: "warriors", decade: "1980s", positions: ["SG"], stats: { pts: 22.0, reb: 5.9, ast: 4.2, stl: 1.0, blk: 0.4 }, years: "1988–1989", accolades: "1989 Rookie of the Year" },
  { id: "tim-hardaway-warriors-1980s", name: "Tim Hardaway", franchiseId: "warriors", decade: "1980s", positions: ["PG"], stats: { pts: 14.7, reb: 3.9, ast: 8.7, stl: 2.1, blk: 0.1 }, years: "1989–1990", accolades: "Killer crossover arrives" },
  { id: "larry-smith-warriors-1980s", name: "Larry Smith", franchiseId: "warriors", decade: "1980s", positions: ["PF"], stats: { pts: 8.5, reb: 10.5, ast: 1.2, stl: 0.8, blk: 0.6 }, years: "1980–1989", accolades: "Mr. Mean · glass cleaner" },
  { id: "world-b-free-warriors-1980s", name: "World B. Free", franchiseId: "warriors", decade: "1980s", positions: ["SG"], stats: { pts: 23.5, reb: 3.0, ast: 4.0, stl: 0.9, blk: 0.2 }, years: "1980–1982", accolades: "All-Star showtime scorer" },
  { id: "bernard-king-warriors-1980s", name: "Bernard King", franchiseId: "warriors", decade: "1980s", positions: ["SF"], stats: { pts: 22.5, reb: 5.5, ast: 3.3, stl: 0.9, blk: 0.3 }, years: "1980–1982", accolades: "All-Star comeback season" },

  // ---------------- 1990s ----------------
  { id: "chris-mullin-warriors-1990s", name: "Chris Mullin", franchiseId: "warriors", decade: "1990s", positions: ["SF"], stats: { pts: 22.0, reb: 5.0, ast: 4.0, stl: 1.6, blk: 0.7 }, years: "1990–1997", accolades: "Run TMC · Dream Team I" },
  { id: "tim-hardaway-warriors-1990s", name: "Tim Hardaway", franchiseId: "warriors", decade: "1990s", positions: ["PG"], stats: { pts: 21.5, reb: 3.9, ast: 9.5, stl: 1.9, blk: 0.1 }, years: "1990–1996", accolades: "UTEP two-step · 3× All-Star" },
  { id: "mitch-richmond-warriors-1990s", name: "Mitch Richmond", franchiseId: "warriors", decade: "1990s", positions: ["SG"], stats: { pts: 22.5, reb: 5.5, ast: 3.5, stl: 1.2, blk: 0.4 }, years: "1990–1991", accolades: "Run TMC's Rock" },
  { id: "latrell-sprewell-warriors-1990s", name: "Latrell Sprewell", franchiseId: "warriors", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 20.5, reb: 4.5, ast: 4.5, stl: 1.7, blk: 0.5 }, years: "1992–1997", accolades: "All-NBA First Team 1994" },
  { id: "chris-webber-warriors-1990s", name: "Chris Webber", franchiseId: "warriors", decade: "1990s", positions: ["PF", "C"], stats: { pts: 17.5, reb: 9.1, ast: 3.6, stl: 1.2, blk: 2.2 }, years: "1993–1994", accolades: "1994 Rookie of the Year" },
  { id: "billy-owens-warriors-1990s", name: "Billy Owens", franchiseId: "warriors", decade: "1990s", positions: ["SF", "PF"], stats: { pts: 15.0, reb: 7.5, ast: 3.5, stl: 0.9, blk: 0.6 }, years: "1991–1994", accolades: "Versatile point-forward" },
  { id: "joe-smith-warriors-1990s", name: "Joe Smith", franchiseId: "warriors", decade: "1990s", positions: ["PF"], stats: { pts: 16.5, reb: 8.0, ast: 1.2, stl: 0.9, blk: 1.1 }, years: "1995–1998", accolades: "No. 1 pick forward" },
  { id: "antawn-jamison-warriors-1990s", name: "Antawn Jamison", franchiseId: "warriors", decade: "1990s", positions: ["PF", "SF"], stats: { pts: 12.5, reb: 5.5, ast: 1.2, stl: 0.7, blk: 0.3 }, years: "1998–1999", accolades: "Crafty rookie scorer" },

  // ---------------- 2000s ----------------
  { id: "baron-davis-warriors-2000s", name: "Baron Davis", franchiseId: "warriors", decade: "2000s", positions: ["PG"], stats: { pts: 20.1, reb: 4.4, ast: 8.0, stl: 2.1, blk: 0.5 }, years: "2005–2008", accolades: "We Believe ringleader" },
  { id: "jason-richardson-warriors-2000s", name: "Jason Richardson", franchiseId: "warriors", decade: "2000s", positions: ["SG"], stats: { pts: 18.3, reb: 5.0, ast: 3.0, stl: 1.0, blk: 0.4 }, years: "2001–2007", accolades: "2× dunk-contest champion" },
  { id: "antawn-jamison-warriors-2000s", name: "Antawn Jamison", franchiseId: "warriors", decade: "2000s", positions: ["PF", "SF"], stats: { pts: 21.0, reb: 7.0, ast: 1.9, stl: 1.0, blk: 0.4 }, years: "2000–2003", accolades: "Back-to-back 51-point games" },
  { id: "stephen-jackson-warriors-2000s", name: "Stephen Jackson", franchiseId: "warriors", decade: "2000s", positions: ["SF", "SG"], stats: { pts: 19.5, reb: 4.5, ast: 4.0, stl: 1.5, blk: 0.5 }, years: "2007–2009", accolades: "We Believe upset captain" },
  { id: "monta-ellis-warriors-2000s", name: "Monta Ellis", franchiseId: "warriors", decade: "2000s", positions: ["SG", "PG"], stats: { pts: 17.5, reb: 3.7, ast: 3.9, stl: 1.4, blk: 0.3 }, years: "2005–2009", accolades: "2007 Most Improved Player" },
  { id: "gilbert-arenas-warriors-2000s", name: "Gilbert Arenas", franchiseId: "warriors", decade: "2000s", positions: ["PG", "SG"], stats: { pts: 14.5, reb: 4.0, ast: 5.0, stl: 1.6, blk: 0.2 }, years: "2001–2003", accolades: "Agent Zero origin story" },
  { id: "troy-murphy-warriors-2000s", name: "Troy Murphy", franchiseId: "warriors", decade: "2000s", positions: ["PF"], stats: { pts: 11.5, reb: 8.5, ast: 1.5, stl: 0.6, blk: 0.5 }, years: "2001–2007", accolades: "Stretch rebounding big" },
  { id: "andris-biedrins-warriors-2000s", name: "Andris Biedrins", franchiseId: "warriors", decade: "2000s", positions: ["C"], stats: { pts: 9.0, reb: 8.5, ast: 1.5, stl: 0.7, blk: 1.2 }, years: "2004–2009", accolades: "FG%-leading lob catcher" },

  // ---------------- 2010s ----------------
  { id: "stephen-curry-warriors-2010s", name: "Stephen Curry", franchiseId: "warriors", decade: "2010s", positions: ["PG"], stats: { pts: 23.5, reb: 4.4, ast: 6.6, stl: 1.7, blk: 0.2 }, years: "2010–2019", accolades: "2× MVP · 3× champ · 402 threes" },
  { id: "klay-thompson-warriors-2010s", name: "Klay Thompson", franchiseId: "warriors", decade: "2010s", positions: ["SG"], stats: { pts: 19.5, reb: 3.5, ast: 2.3, stl: 1.0, blk: 0.5 }, years: "2011–2019", accolades: "37-point quarter · 3× champ" },
  { id: "kevin-durant-warriors-2010s", name: "Kevin Durant", franchiseId: "warriors", decade: "2010s", positions: ["SF", "PF"], stats: { pts: 25.8, reb: 7.1, ast: 5.4, stl: 0.8, blk: 1.4 }, years: "2016–2019", accolades: "2× Finals MVP in the Bay" },
  { id: "draymond-green-warriors-2010s", name: "Draymond Green", franchiseId: "warriors", decade: "2010s", positions: ["PF", "C"], stats: { pts: 9.5, reb: 7.0, ast: 5.5, stl: 1.4, blk: 1.0 }, years: "2012–2019", accolades: "2017 DPOY · death-lineup hub" },
  { id: "andre-iguodala-warriors-2010s", name: "Andre Iguodala", franchiseId: "warriors", decade: "2010s", positions: ["SF"], stats: { pts: 7.9, reb: 3.9, ast: 3.4, stl: 1.1, blk: 0.4 }, years: "2013–2019", accolades: "2015 Finals MVP" },
  { id: "david-lee-warriors-2010s", name: "David Lee", franchiseId: "warriors", decade: "2010s", positions: ["PF", "C"], stats: { pts: 17.5, reb: 9.6, ast: 2.9, stl: 0.8, blk: 0.4 }, years: "2010–2015", accolades: "All-Star double-double machine" },
  { id: "monta-ellis-warriors-2010s", name: "Monta Ellis", franchiseId: "warriors", decade: "2010s", positions: ["SG"], stats: { pts: 24.5, reb: 3.5, ast: 5.5, stl: 2.1, blk: 0.3 }, years: "2010–2012", accolades: "High-volume highlight scorer" },
  { id: "harrison-barnes-warriors-2010s", name: "Harrison Barnes", franchiseId: "warriors", decade: "2010s", positions: ["SF"], stats: { pts: 10.5, reb: 4.6, ast: 1.5, stl: 0.7, blk: 0.2 }, years: "2012–2016", accolades: "Starter on 73-win team" },
  { id: "andrew-bogut-warriors-2010s", name: "Andrew Bogut", franchiseId: "warriors", decade: "2010s", positions: ["C"], stats: { pts: 6.5, reb: 8.0, ast: 2.2, stl: 0.6, blk: 1.7 }, years: "2012–2016", accolades: "2015 title rim protector" },
  { id: "shaun-livingston-warriors-2010s", name: "Shaun Livingston", franchiseId: "warriors", decade: "2010s", positions: ["PG"], stats: { pts: 5.9, reb: 2.0, ast: 2.1, stl: 0.5, blk: 0.3 }, years: "2014–2019", accolades: "Mid-range comeback story · 3× champ" },

  // ---------------- 2020s ----------------
  { id: "stephen-curry-warriors-2020s", name: "Stephen Curry", franchiseId: "warriors", decade: "2020s", positions: ["PG"], stats: { pts: 27.5, reb: 4.9, ast: 5.8, stl: 1.1, blk: 0.3 }, years: "2020–2026", accolades: "2022 Finals MVP · 4th ring" },
  { id: "klay-thompson-warriors-2020s", name: "Klay Thompson", franchiseId: "warriors", decade: "2020s", positions: ["SG"], stats: { pts: 19.0, reb: 3.5, ast: 2.3, stl: 0.7, blk: 0.5 }, years: "2021–2024", accolades: "Comeback champ · Game 6 Klay" },
  { id: "draymond-green-warriors-2020s", name: "Draymond Green", franchiseId: "warriors", decade: "2020s", positions: ["PF", "C"], stats: { pts: 8.5, reb: 6.8, ast: 6.5, stl: 1.3, blk: 0.9 }, years: "2020–2026", accolades: "Defensive brain · 2022 champ" },
  { id: "andrew-wiggins-warriors-2020s", name: "Andrew Wiggins", franchiseId: "warriors", decade: "2020s", positions: ["SF"], stats: { pts: 17.5, reb: 4.8, ast: 2.3, stl: 1.0, blk: 0.8 }, years: "2020–2025", accolades: "All-Star · 2022 Finals stopper" },
  { id: "jordan-poole-warriors-2020s", name: "Jordan Poole", franchiseId: "warriors", decade: "2020s", positions: ["SG", "PG"], stats: { pts: 18.5, reb: 2.9, ast: 4.0, stl: 0.8, blk: 0.3 }, years: "2020–2023", accolades: "2022 title microwave" },
  { id: "kevon-looney-warriors-2020s", name: "Kevon Looney", franchiseId: "warriors", decade: "2020s", positions: ["C"], stats: { pts: 5.5, reb: 7.5, ast: 2.0, stl: 0.5, blk: 0.5 }, years: "2020–2025", accolades: "Iron-man rebounder · 3× champ" },
  { id: "jonathan-kuminga-warriors-2020s", name: "Jonathan Kuminga", franchiseId: "warriors", decade: "2020s", positions: ["PF", "SF"], stats: { pts: 14.0, reb: 4.5, ast: 2.0, stl: 0.7, blk: 0.5 }, years: "2021–2026", accolades: "Explosive young forward" },
  { id: "jimmy-butler-warriors-2020s", name: "Jimmy Butler", franchiseId: "warriors", decade: "2020s", positions: ["SF", "SG"], stats: { pts: 18.5, reb: 5.5, ast: 5.5, stl: 1.4, blk: 0.4 }, years: "2025–2026", accolades: "Playoff Jimmy joins the Bay" },
  { id: "brandin-podziemski-warriors-2020s", name: "Brandin Podziemski", franchiseId: "warriors", decade: "2020s", positions: ["SG", "PG"], stats: { pts: 11.0, reb: 5.0, ast: 3.5, stl: 0.9, blk: 0.2 }, years: "2023–2026", accolades: "All-Rookie savvy guard" },
];
