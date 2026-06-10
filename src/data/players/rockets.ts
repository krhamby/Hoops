import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1960s (San Diego Rockets) ----------------
  { id: "elvin-hayes-rockets-1960s", name: "Elvin Hayes", franchiseId: "rockets", decade: "1960s", positions: ["PF", "C"], stats: { pts: 28.4, reb: 17.1, ast: 1.4, stl: 0.9, blk: 2.5 }, years: "1968–1969", accolades: "Rookie scoring champ" },
  { id: "don-kojis-rockets-1960s", name: "Don Kojis", franchiseId: "rockets", decade: "1960s", positions: ["SF", "PF"], stats: { pts: 19.7, reb: 8.4, ast: 2.5, stl: 0.8, blk: 0.4 }, years: "1967–1969", accolades: "2× All-Star in San Diego" },
  { id: "jim-barnett-rockets-1960s", name: "Jim Barnett", franchiseId: "rockets", decade: "1960s", positions: ["SG"], stats: { pts: 16.5, reb: 4.0, ast: 3.5, stl: 0.9, blk: 0.2 }, years: "1967–1969", accolades: "Crazy Horse · fearless scorer" },
  { id: "john-block-rockets-1960s", name: "John Block", franchiseId: "rockets", decade: "1960s", positions: ["PF", "C"], stats: { pts: 16.0, reb: 8.0, ast: 1.8, stl: 0.6, blk: 0.6 }, years: "1967–1969", accolades: "Reliable frontcourt scorer" },
  { id: "art-williams-rockets-1960s", name: "Art Williams", franchiseId: "rockets", decade: "1960s", positions: ["PG"], stats: { pts: 9.8, reb: 4.5, ast: 5.5, stl: 1.0, blk: 0.1 }, years: "1967–1969", accolades: "Hustling table-setter" },
  { id: "stu-lantz-rockets-1960s", name: "Stu Lantz", franchiseId: "rockets", decade: "1960s", positions: ["SG"], stats: { pts: 10.5, reb: 3.5, ast: 2.5, stl: 0.8, blk: 0.1 }, years: "1968–1969", accolades: "Sweet-shooting rookie guard" },
  { id: "pat-riley-rockets-1960s", name: "Pat Riley", franchiseId: "rockets", decade: "1960s", positions: ["SG", "SF"], stats: { pts: 8.5, reb: 2.7, ast: 1.6, stl: 0.7, blk: 0.1 }, years: "1967–1969", accolades: "Future coaching legend" },

  // ---------------- 1970s ----------------
  { id: "elvin-hayes-rockets-1970s", name: "Elvin Hayes", franchiseId: "rockets", decade: "1970s", positions: ["PF", "C"], stats: { pts: 27.6, reb: 16.2, ast: 1.9, stl: 0.9, blk: 2.3 }, years: "1970–1972", accolades: "The Big E · rebounding machine" },
  { id: "rudy-tomjanovich-rockets-1970s", name: "Rudy Tomjanovich", franchiseId: "rockets", decade: "1970s", positions: ["SF", "PF"], stats: { pts: 19.0, reb: 8.5, ast: 2.5, stl: 0.8, blk: 0.3 }, years: "1970–1979", accolades: "5× All-Star · Rocket lifer" },
  { id: "calvin-murphy-rockets-1970s", name: "Calvin Murphy", franchiseId: "rockets", decade: "1970s", positions: ["PG"], stats: { pts: 19.0, reb: 2.4, ast: 5.0, stl: 1.5, blk: 0.1 }, years: "1970–1979", accolades: "5'9\" Hall of Famer" },
  { id: "moses-malone-rockets-1970s", name: "Moses Malone", franchiseId: "rockets", decade: "1970s", positions: ["C"], stats: { pts: 21.7, reb: 15.0, ast: 1.4, stl: 0.9, blk: 1.6 }, years: "1976–1979", accolades: "1979 MVP · offensive glass king" },
  { id: "mike-newlin-rockets-1970s", name: "Mike Newlin", franchiseId: "rockets", decade: "1970s", positions: ["SG"], stats: { pts: 15.5, reb: 3.2, ast: 4.3, stl: 1.0, blk: 0.1 }, years: "1971–1979", accolades: "Tough, crafty scorer" },
  { id: "rick-barry-rockets-1970s", name: "Rick Barry", franchiseId: "rockets", decade: "1970s", positions: ["SF"], stats: { pts: 13.0, reb: 4.0, ast: 4.5, stl: 1.1, blk: 0.4 }, years: "1978–1979", accolades: "Hall of Famer's final act" },
  { id: "john-lucas-rockets-1970s", name: "John Lucas", franchiseId: "rockets", decade: "1970s", positions: ["PG"], stats: { pts: 12.3, reb: 2.8, ast: 8.8, stl: 1.5, blk: 0.1 }, years: "1976–1978", accolades: "No. 1 pick playmaker" },
  { id: "robert-reid-rockets-1970s", name: "Robert Reid", franchiseId: "rockets", decade: "1970s", positions: ["SF", "SG"], stats: { pts: 10.5, reb: 5.0, ast: 2.5, stl: 1.2, blk: 0.4 }, years: "1977–1979", accolades: "Versatile defensive wing" },

  // ---------------- 1980s ----------------
  { id: "moses-malone-rockets-1980s", name: "Moses Malone", franchiseId: "rockets", decade: "1980s", positions: ["C"], stats: { pts: 28.7, reb: 14.8, ast: 1.6, stl: 1.0, blk: 1.6 }, years: "1980–1982", accolades: "1982 MVP · carried '81 Finals run" },
  { id: "hakeem-olajuwon-rockets-1980s", name: "Hakeem Olajuwon", franchiseId: "rockets", decade: "1980s", positions: ["C"], stats: { pts: 23.0, reb: 12.4, ast: 2.1, stl: 1.9, blk: 3.2 }, years: "1984–1989", accolades: "The Dream · Twin Tower" },
  { id: "ralph-sampson-rockets-1980s", name: "Ralph Sampson", franchiseId: "rockets", decade: "1980s", positions: ["C", "PF"], stats: { pts: 19.7, reb: 10.5, ast: 2.5, stl: 0.9, blk: 1.9 }, years: "1983–1987", accolades: "1984 ROY · 7'4\" unicorn" },
  { id: "rodney-mccray-rockets-1980s", name: "Rodney McCray", franchiseId: "rockets", decade: "1980s", positions: ["SF"], stats: { pts: 12.5, reb: 7.0, ast: 3.8, stl: 0.8, blk: 0.6 }, years: "1983–1988", accolades: "All-Defense glue forward" },
  { id: "lewis-lloyd-rockets-1980s", name: "Lewis Lloyd", franchiseId: "rockets", decade: "1980s", positions: ["SG", "SF"], stats: { pts: 14.5, reb: 3.8, ast: 3.0, stl: 1.1, blk: 0.3 }, years: "1983–1987", accolades: "Silky slasher" },
  { id: "robert-reid-rockets-1980s", name: "Robert Reid", franchiseId: "rockets", decade: "1980s", positions: ["SF", "SG"], stats: { pts: 13.0, reb: 4.8, ast: 3.0, stl: 1.0, blk: 0.4 }, years: "1980–1988", accolades: "Two Finals trips · stopper" },
  { id: "sleepy-floyd-rockets-1980s", name: "Sleepy Floyd", franchiseId: "rockets", decade: "1980s", positions: ["PG"], stats: { pts: 13.2, reb: 2.8, ast: 6.5, stl: 1.2, blk: 0.2 }, years: "1987–1989", accolades: "All-Star playmaker" },
  { id: "otis-thorpe-rockets-1980s", name: "Otis Thorpe", franchiseId: "rockets", decade: "1980s", positions: ["PF"], stats: { pts: 16.5, reb: 9.5, ast: 2.2, stl: 0.7, blk: 0.5 }, years: "1988–1989", accolades: "Powerful frontcourt partner" },
  { id: "allen-leavell-rockets-1980s", name: "Allen Leavell", franchiseId: "rockets", decade: "1980s", positions: ["PG"], stats: { pts: 9.5, reb: 1.8, ast: 4.5, stl: 1.1, blk: 0.1 }, years: "1980–1989", accolades: "Quick backup spark" },

  // ---------------- 1990s ----------------
  { id: "hakeem-olajuwon-rockets-1990s", name: "Hakeem Olajuwon", franchiseId: "rockets", decade: "1990s", positions: ["C"], stats: { pts: 25.4, reb: 11.4, ast: 3.0, stl: 1.8, blk: 3.4 }, years: "1990–1999", accolades: "2× champ · 2× Finals MVP · '94 MVP" },
  { id: "clyde-drexler-rockets-1990s", name: "Clyde Drexler", franchiseId: "rockets", decade: "1990s", positions: ["SG"], stats: { pts: 19.4, reb: 6.0, ast: 5.0, stl: 1.8, blk: 0.5 }, years: "1995–1998", accolades: "The Glide · 1995 champion" },
  { id: "otis-thorpe-rockets-1990s", name: "Otis Thorpe", franchiseId: "rockets", decade: "1990s", positions: ["PF"], stats: { pts: 14.6, reb: 9.5, ast: 2.4, stl: 0.7, blk: 0.4 }, years: "1990–1995", accolades: "1994 champion power forward" },
  { id: "kenny-smith-rockets-1990s", name: "Kenny Smith", franchiseId: "rockets", decade: "1990s", positions: ["PG"], stats: { pts: 12.6, reb: 1.9, ast: 5.0, stl: 0.9, blk: 0.1 }, years: "1990–1996", accolades: "The Jet · 2× champ" },
  { id: "vernon-maxwell-rockets-1990s", name: "Vernon Maxwell", franchiseId: "rockets", decade: "1990s", positions: ["SG"], stats: { pts: 13.8, reb: 3.0, ast: 3.8, stl: 1.2, blk: 0.2 }, years: "1990–1995", accolades: "Mad Max · fearless shooter" },
  { id: "robert-horry-rockets-1990s", name: "Robert Horry", franchiseId: "rockets", decade: "1990s", positions: ["SF", "PF"], stats: { pts: 10.5, reb: 5.2, ast: 3.0, stl: 1.2, blk: 0.9 }, years: "1992–1996", accolades: "Big Shot Bob begins" },
  { id: "sam-cassell-rockets-1990s", name: "Sam Cassell", franchiseId: "rockets", decade: "1990s", positions: ["PG"], stats: { pts: 10.5, reb: 2.5, ast: 4.0, stl: 0.9, blk: 0.1 }, years: "1993–1996", accolades: "Rookie with title nerve · 2× champ" },
  { id: "mario-elie-rockets-1990s", name: "Mario Elie", franchiseId: "rockets", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 9.5, reb: 3.0, ast: 2.8, stl: 0.9, blk: 0.2 }, years: "1993–1998", accolades: "Kiss of Death · 2× champ" },
  { id: "charles-barkley-rockets-1990s", name: "Charles Barkley", franchiseId: "rockets", decade: "1990s", positions: ["PF"], stats: { pts: 16.5, reb: 12.5, ast: 4.0, stl: 1.0, blk: 0.5 }, years: "1996–1999", accolades: "Hall of Fame board crasher" },
  { id: "steve-francis-rockets-1990s", name: "Steve Francis", franchiseId: "rockets", decade: "1990s", positions: ["PG"], stats: { pts: 18.0, reb: 5.3, ast: 6.6, stl: 1.5, blk: 0.4 }, years: "1999–2000", accolades: "Stevie Franchise · co-ROY" },

  // ---------------- 2000s ----------------
  { id: "yao-ming-rockets-2000s", name: "Yao Ming", franchiseId: "rockets", decade: "2000s", positions: ["C"], stats: { pts: 19.1, reb: 9.3, ast: 1.6, stl: 0.4, blk: 1.9 }, years: "2002–2009", accolades: "8× All-Star · global icon" },
  { id: "tracy-mcgrady-rockets-2000s", name: "Tracy McGrady", franchiseId: "rockets", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 22.7, reb: 5.5, ast: 5.6, stl: 1.3, blk: 0.6 }, years: "2004–2009", accolades: "13 points in 35 seconds" },
  { id: "steve-francis-rockets-2000s", name: "Steve Francis", franchiseId: "rockets", decade: "2000s", positions: ["PG"], stats: { pts: 19.4, reb: 6.0, ast: 6.3, stl: 1.5, blk: 0.4 }, years: "2000–2004", accolades: "3× All-Star explosion" },
  { id: "cuttino-mobley-rockets-2000s", name: "Cuttino Mobley", franchiseId: "rockets", decade: "2000s", positions: ["SG"], stats: { pts: 17.5, reb: 4.0, ast: 2.7, stl: 1.2, blk: 0.4 }, years: "2000–2004", accolades: "Cat · Francis' running mate" },
  { id: "shane-battier-rockets-2000s", name: "Shane Battier", franchiseId: "rockets", decade: "2000s", positions: ["SF"], stats: { pts: 9.0, reb: 4.8, ast: 1.9, stl: 1.0, blk: 0.9 }, years: "2006–2009", accolades: "No-stats All-Star defender" },
  { id: "luis-scola-rockets-2000s", name: "Luis Scola", franchiseId: "rockets", decade: "2000s", positions: ["PF"], stats: { pts: 11.5, reb: 7.0, ast: 1.7, stl: 0.8, blk: 0.2 }, years: "2007–2009", accolades: "Crafty Argentine big" },
  { id: "ron-artest-rockets-2000s", name: "Ron Artest", franchiseId: "rockets", decade: "2000s", positions: ["SF"], stats: { pts: 17.1, reb: 5.2, ast: 3.3, stl: 1.5, blk: 0.4 }, years: "2008–2009", accolades: "Elite wing stopper" },
  { id: "rafer-alston-rockets-2000s", name: "Rafer Alston", franchiseId: "rockets", decade: "2000s", positions: ["PG"], stats: { pts: 11.8, reb: 3.5, ast: 5.0, stl: 1.4, blk: 0.2 }, years: "2005–2009", accolades: "Skip to My Lou" },
  { id: "aaron-brooks-rockets-2000s", name: "Aaron Brooks", franchiseId: "rockets", decade: "2000s", positions: ["PG"], stats: { pts: 11.5, reb: 2.0, ast: 3.0, stl: 0.7, blk: 0.1 }, years: "2007–2009", accolades: "Pocket rocket scorer" },

  // ---------------- 2010s ----------------
  { id: "james-harden-rockets-2010s", name: "James Harden", franchiseId: "rockets", decade: "2010s", positions: ["SG", "PG"], stats: { pts: 29.6, reb: 6.0, ast: 7.7, stl: 1.7, blk: 0.6 }, years: "2012–2019", accolades: "2018 MVP · 3× scoring champ" },
  { id: "dwight-howard-rockets-2010s", name: "Dwight Howard", franchiseId: "rockets", decade: "2010s", positions: ["C"], stats: { pts: 16.0, reb: 11.7, ast: 1.4, stl: 1.0, blk: 1.6 }, years: "2013–2016", accolades: "8× All-Star anchor" },
  { id: "chris-paul-rockets-2010s", name: "Chris Paul", franchiseId: "rockets", decade: "2010s", positions: ["PG"], stats: { pts: 17.0, reb: 5.0, ast: 8.1, stl: 1.9, blk: 0.2 }, years: "2017–2019", accolades: "65-win season co-pilot" },
  { id: "clint-capela-rockets-2010s", name: "Clint Capela", franchiseId: "rockets", decade: "2010s", positions: ["C"], stats: { pts: 12.5, reb: 10.5, ast: 1.0, stl: 0.7, blk: 1.5 }, years: "2014–2019", accolades: "Lob-catching rim runner" },
  { id: "trevor-ariza-rockets-2010s", name: "Trevor Ariza", franchiseId: "rockets", decade: "2010s", positions: ["SF"], stats: { pts: 12.0, reb: 5.0, ast: 2.0, stl: 1.6, blk: 0.3 }, years: "2014–2018", accolades: "3-and-D mainstay" },
  { id: "eric-gordon-rockets-2010s", name: "Eric Gordon", franchiseId: "rockets", decade: "2010s", positions: ["SG"], stats: { pts: 16.5, reb: 2.4, ast: 2.4, stl: 0.6, blk: 0.4 }, years: "2016–2019", accolades: "2017 Sixth Man of the Year" },
  { id: "patrick-beverley-rockets-2010s", name: "Patrick Beverley", franchiseId: "rockets", decade: "2010s", positions: ["PG"], stats: { pts: 9.5, reb: 4.5, ast: 3.4, stl: 1.4, blk: 0.4 }, years: "2013–2017", accolades: "Pit-bull point-of-attack defender" },
  { id: "kyle-lowry-rockets-2010s", name: "Kyle Lowry", franchiseId: "rockets", decade: "2010s", positions: ["PG"], stats: { pts: 13.0, reb: 4.5, ast: 6.0, stl: 1.4, blk: 0.3 }, years: "2010–2012", accolades: "Bulldog guard pre-Toronto" },
  { id: "russell-westbrook-rockets-2010s", name: "Russell Westbrook", franchiseId: "rockets", decade: "2010s", positions: ["PG"], stats: { pts: 27.2, reb: 7.9, ast: 7.0, stl: 1.6, blk: 0.4 }, years: "2019–2020", accolades: "MVP motor in Houston" },

  // ---------------- 2020s ----------------
  { id: "jalen-green-rockets-2020s", name: "Jalen Green", franchiseId: "rockets", decade: "2020s", positions: ["SG"], stats: { pts: 20.5, reb: 4.5, ast: 3.5, stl: 0.8, blk: 0.3 }, years: "2021–2025", accolades: "Explosive young scorer" },
  { id: "alperen-sengun-rockets-2020s", name: "Alperen Sengun", franchiseId: "rockets", decade: "2020s", positions: ["C"], stats: { pts: 19.0, reb: 9.5, ast: 5.0, stl: 1.1, blk: 0.8 }, years: "2021–2026", accolades: "All-Star · point-center playmaker" },
  { id: "fred-vanvleet-rockets-2020s", name: "Fred VanVleet", franchiseId: "rockets", decade: "2020s", positions: ["PG"], stats: { pts: 16.0, reb: 3.7, ast: 6.8, stl: 1.4, blk: 0.6 }, years: "2023–2026", accolades: "Champ vet steadying the young core" },
  { id: "jabari-smith-jr-rockets-2020s", name: "Jabari Smith Jr.", franchiseId: "rockets", decade: "2020s", positions: ["PF"], stats: { pts: 13.0, reb: 7.5, ast: 1.3, stl: 0.7, blk: 0.9 }, years: "2022–2026", accolades: "Stretch-four with defense" },
  { id: "amen-thompson-rockets-2020s", name: "Amen Thompson", franchiseId: "rockets", decade: "2020s", positions: ["SF", "PG"], stats: { pts: 13.5, reb: 7.5, ast: 3.5, stl: 1.4, blk: 1.0 }, years: "2023–2026", accolades: "Freak athlete · All-Defense rise" },
  { id: "dillon-brooks-rockets-2020s", name: "Dillon Brooks", franchiseId: "rockets", decade: "2020s", positions: ["SF"], stats: { pts: 13.0, reb: 3.5, ast: 1.7, stl: 0.9, blk: 0.3 }, years: "2023–2025", accolades: "Villain-mode wing defender" },
  { id: "christian-wood-rockets-2020s", name: "Christian Wood", franchiseId: "rockets", decade: "2020s", positions: ["PF", "C"], stats: { pts: 19.1, reb: 9.9, ast: 2.0, stl: 0.8, blk: 1.0 }, years: "2020–2022", accolades: "Smooth-scoring big" },
  { id: "kevin-porter-jr-rockets-2020s", name: "Kevin Porter Jr.", franchiseId: "rockets", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 17.0, reb: 4.8, ast: 5.7, stl: 1.0, blk: 0.3 }, years: "2020–2023", accolades: "Shot-creating combo guard" },
  { id: "kevin-durant-rockets-2020s", name: "Kevin Durant", franchiseId: "rockets", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 26.0, reb: 6.0, ast: 4.2, stl: 0.8, blk: 1.1 }, years: "2025–2026", accolades: "All-time scorer joins H-Town" },
];
