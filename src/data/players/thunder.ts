import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1960s (Seattle SuperSonics) ----------------
  { id: "bob-rule-thunder-1960s", name: "Bob Rule", franchiseId: "thunder", decade: "1960s", positions: ["C"], stats: { pts: 21.0, reb: 10.3, ast: 1.5, stl: 0.7, blk: 1.2 }, years: "1967–1969", accolades: "Original Sonics scoring star" },
  { id: "lenny-wilkens-thunder-1960s", name: "Lenny Wilkens", franchiseId: "thunder", decade: "1960s", positions: ["PG"], stats: { pts: 22.4, reb: 6.2, ast: 8.2, stl: 1.5, blk: 0.1 }, years: "1968–1969", accolades: "Hall of Fame player-coach" },
  { id: "walt-hazzard-thunder-1960s", name: "Walt Hazzard", franchiseId: "thunder", decade: "1960s", positions: ["PG"], stats: { pts: 23.9, reb: 4.0, ast: 6.2, stl: 1.2, blk: 0.1 }, years: "1967–1968", accolades: "All-Star in inaugural season" },
  { id: "tom-meschery-thunder-1960s", name: "Tom Meschery", franchiseId: "thunder", decade: "1960s", positions: ["PF"], stats: { pts: 12.5, reb: 9.5, ast: 1.8, stl: 0.6, blk: 0.4 }, years: "1967–1969", accolades: "Rugged expansion forward" },
  { id: "al-tucker-thunder-1960s", name: "Al Tucker", franchiseId: "thunder", decade: "1960s", positions: ["SF", "PF"], stats: { pts: 12.0, reb: 6.5, ast: 1.2, stl: 0.6, blk: 0.6 }, years: "1967–1969", accolades: "Springy original Sonic" },
  { id: "bob-kauffman-thunder-1960s", name: "Bob Kauffman", franchiseId: "thunder", decade: "1960s", positions: ["PF", "C"], stats: { pts: 7.5, reb: 5.5, ast: 1.0, stl: 0.5, blk: 0.4 }, years: "1968–1969", accolades: "Strong young big man" },

  // ---------------- 1970s ----------------
  { id: "spencer-haywood-thunder-1970s", name: "Spencer Haywood", franchiseId: "thunder", decade: "1970s", positions: ["PF", "C"], stats: { pts: 24.9, reb: 12.1, ast: 2.0, stl: 0.9, blk: 1.2 }, years: "1970–1975", accolades: "4× All-Star · landmark court case" },
  { id: "fred-brown-thunder-1970s", name: "Fred Brown", franchiseId: "thunder", decade: "1970s", positions: ["SG"], stats: { pts: 17.5, reb: 3.2, ast: 3.5, stl: 1.4, blk: 0.2 }, years: "1971–1979", accolades: "Downtown Freddie Brown" },
  { id: "gus-williams-thunder-1970s", name: "Gus Williams", franchiseId: "thunder", decade: "1970s", positions: ["PG"], stats: { pts: 19.0, reb: 3.2, ast: 4.0, stl: 2.2, blk: 0.3 }, years: "1977–1979", accolades: "The Wizard · '79 title engine" },
  { id: "dennis-johnson-thunder-1970s", name: "Dennis Johnson", franchiseId: "thunder", decade: "1970s", positions: ["SG", "PG"], stats: { pts: 13.5, reb: 4.0, ast: 3.0, stl: 1.4, blk: 0.9 }, years: "1976–1979", accolades: "1979 Finals MVP" },
  { id: "jack-sikma-thunder-1970s", name: "Jack Sikma", franchiseId: "thunder", decade: "1970s", positions: ["C"], stats: { pts: 15.5, reb: 11.0, ast: 2.8, stl: 0.9, blk: 0.9 }, years: "1977–1979", accolades: "Reverse-pivot Hall of Famer" },
  { id: "slick-watts-thunder-1970s", name: "Slick Watts", franchiseId: "thunder", decade: "1970s", positions: ["PG"], stats: { pts: 10.5, reb: 3.5, ast: 7.0, stl: 2.4, blk: 0.3 }, years: "1973–1978", accolades: "Headband icon · steals leader" },
  { id: "lonnie-shelton-thunder-1970s", name: "Lonnie Shelton", franchiseId: "thunder", decade: "1970s", positions: ["PF"], stats: { pts: 12.5, reb: 6.0, ast: 1.8, stl: 1.0, blk: 0.7 }, years: "1978–1979", accolades: "Enforcer on the '79 champs" },
  { id: "john-johnson-thunder-1970s", name: "John Johnson", franchiseId: "thunder", decade: "1970s", positions: ["SF"], stats: { pts: 11.5, reb: 4.5, ast: 4.4, stl: 0.8, blk: 0.3 }, years: "1977–1979", accolades: "Point-forward of title team" },

  // ---------------- 1980s ----------------
  { id: "gus-williams-thunder-1980s", name: "Gus Williams", franchiseId: "thunder", decade: "1980s", positions: ["PG"], stats: { pts: 20.5, reb: 2.9, ast: 6.5, stl: 2.1, blk: 0.3 }, years: "1980–1984", accolades: "All-NBA backcourt blur" },
  { id: "jack-sikma-thunder-1980s", name: "Jack Sikma", franchiseId: "thunder", decade: "1980s", positions: ["C"], stats: { pts: 18.0, reb: 10.5, ast: 3.2, stl: 1.0, blk: 1.0 }, years: "1980–1986", accolades: "7× All-Star center" },
  { id: "tom-chambers-thunder-1980s", name: "Tom Chambers", franchiseId: "thunder", decade: "1980s", positions: ["PF", "SF"], stats: { pts: 20.0, reb: 6.5, ast: 2.3, stl: 0.9, blk: 0.6 }, years: "1983–1988", accolades: "1987 All-Star Game MVP" },
  { id: "xavier-mcdaniel-thunder-1980s", name: "Xavier McDaniel", franchiseId: "thunder", decade: "1980s", positions: ["SF"], stats: { pts: 20.5, reb: 7.5, ast: 2.5, stl: 1.2, blk: 0.7 }, years: "1985–1989", accolades: "X-Man · snarling scorer" },
  { id: "dale-ellis-thunder-1980s", name: "Dale Ellis", franchiseId: "thunder", decade: "1980s", positions: ["SG", "SF"], stats: { pts: 23.5, reb: 4.5, ast: 2.0, stl: 1.0, blk: 0.2 }, years: "1986–1989", accolades: "1987 MIP · deep-range assassin" },
  { id: "dennis-johnson-thunder-1980s", name: "Dennis Johnson", franchiseId: "thunder", decade: "1980s", positions: ["SG"], stats: { pts: 18.5, reb: 4.5, ast: 4.5, stl: 1.7, blk: 1.0 }, years: "1980", accolades: "All-Defense Sonic finale" },
  { id: "derrick-mckey-thunder-1980s", name: "Derrick McKey", franchiseId: "thunder", decade: "1980s", positions: ["SF", "PF"], stats: { pts: 14.5, reb: 5.5, ast: 2.6, stl: 1.2, blk: 0.9 }, years: "1987–1989", accolades: "Silky two-way forward" },
  { id: "lonnie-shelton-thunder-1980s", name: "Lonnie Shelton", franchiseId: "thunder", decade: "1980s", positions: ["PF"], stats: { pts: 13.5, reb: 6.0, ast: 2.4, stl: 0.9, blk: 0.8 }, years: "1980–1983", accolades: "All-Star muscle up front" },

  // ---------------- 1990s ----------------
  { id: "gary-payton-thunder-1990s", name: "Gary Payton", franchiseId: "thunder", decade: "1990s", positions: ["PG"], stats: { pts: 18.5, reb: 4.2, ast: 7.3, stl: 2.3, blk: 0.2 }, years: "1990–1999", accolades: "The Glove · 1996 DPOY" },
  { id: "shawn-kemp-thunder-1990s", name: "Shawn Kemp", franchiseId: "thunder", decade: "1990s", positions: ["PF", "C"], stats: { pts: 16.8, reb: 10.4, ast: 1.9, stl: 1.2, blk: 1.6 }, years: "1990–1997", accolades: "Reign Man · poster factory" },
  { id: "detlef-schrempf-thunder-1990s", name: "Detlef Schrempf", franchiseId: "thunder", decade: "1990s", positions: ["SF", "PF"], stats: { pts: 16.5, reb: 6.0, ast: 3.8, stl: 0.8, blk: 0.2 }, years: "1993–1999", accolades: "3× All-Star Euro pioneer" },
  { id: "hersey-hawkins-thunder-1990s", name: "Hersey Hawkins", franchiseId: "thunder", decade: "1990s", positions: ["SG"], stats: { pts: 14.5, reb: 3.6, ast: 2.9, stl: 1.7, blk: 0.3 }, years: "1995–1999", accolades: "Sniper of the '96 Finals team" },
  { id: "sam-perkins-thunder-1990s", name: "Sam Perkins", franchiseId: "thunder", decade: "1990s", positions: ["PF", "C"], stats: { pts: 11.5, reb: 5.5, ast: 1.5, stl: 0.8, blk: 0.7 }, years: "1993–1998", accolades: "Big Smooth stretch five" },
  { id: "nate-mcmillan-thunder-1990s", name: "Nate McMillan", franchiseId: "thunder", decade: "1990s", positions: ["PG", "SG"], stats: { pts: 6.5, reb: 4.0, ast: 5.5, stl: 1.9, blk: 0.4 }, years: "1990–1998", accolades: "Mr. Sonic · defensive captain" },
  { id: "vin-baker-thunder-1990s", name: "Vin Baker", franchiseId: "thunder", decade: "1990s", positions: ["PF", "C"], stats: { pts: 16.5, reb: 7.5, ast: 1.8, stl: 0.8, blk: 0.9 }, years: "1997–1999", accolades: "All-Star lefty post scorer" },
  { id: "ricky-pierce-thunder-1990s", name: "Ricky Pierce", franchiseId: "thunder", decade: "1990s", positions: ["SG"], stats: { pts: 18.5, reb: 2.8, ast: 2.5, stl: 1.0, blk: 0.1 }, years: "1991–1994", accolades: "Elite scoring guard" },
  { id: "eddie-johnson-thunder-1990s", name: "Eddie Johnson", franchiseId: "thunder", decade: "1990s", positions: ["SF"], stats: { pts: 12.5, reb: 3.0, ast: 1.3, stl: 0.5, blk: 0.1 }, years: "1990–1993", accolades: "Instant-offense veteran" },

  // ---------------- 2000s ----------------
  { id: "gary-payton-thunder-2000s", name: "Gary Payton", franchiseId: "thunder", decade: "2000s", positions: ["PG"], stats: { pts: 22.0, reb: 5.0, ast: 8.5, stl: 1.8, blk: 0.2 }, years: "2000–2003", accolades: "Franchise legend's last Sonic years" },
  { id: "ray-allen-thunder-2000s", name: "Ray Allen", franchiseId: "thunder", decade: "2000s", positions: ["SG"], stats: { pts: 24.6, reb: 4.5, ast: 4.0, stl: 1.2, blk: 0.2 }, years: "2003–2007", accolades: "Perfect-form jumper · All-Star" },
  { id: "rashard-lewis-thunder-2000s", name: "Rashard Lewis", franchiseId: "thunder", decade: "2000s", positions: ["SF", "PF"], stats: { pts: 18.1, reb: 6.4, ast: 1.9, stl: 1.1, blk: 0.5 }, years: "2000–2007", accolades: "Smooth stretch forward" },
  { id: "kevin-durant-thunder-2000s", name: "Kevin Durant", franchiseId: "thunder", decade: "2000s", positions: ["SF"], stats: { pts: 23.0, reb: 5.5, ast: 2.7, stl: 1.1, blk: 0.8 }, years: "2007–2009", accolades: "2008 ROY · last Sonic, first Thunder" },
  { id: "russell-westbrook-thunder-2000s", name: "Russell Westbrook", franchiseId: "thunder", decade: "2000s", positions: ["PG"], stats: { pts: 15.3, reb: 4.9, ast: 5.3, stl: 1.3, blk: 0.2 }, years: "2008–2009", accolades: "All-Rookie tone-setter" },
  { id: "jeff-green-thunder-2000s", name: "Jeff Green", franchiseId: "thunder", decade: "2000s", positions: ["SF", "PF"], stats: { pts: 13.5, reb: 5.5, ast: 1.7, stl: 0.8, blk: 0.5 }, years: "2007–2009", accolades: "Versatile young forward" },
  { id: "nick-collison-thunder-2000s", name: "Nick Collison", franchiseId: "thunder", decade: "2000s", positions: ["PF", "C"], stats: { pts: 8.5, reb: 6.5, ast: 1.2, stl: 0.6, blk: 0.5 }, years: "2004–2009", accolades: "Beloved glue big" },
  { id: "desmond-mason-thunder-2000s", name: "Desmond Mason", franchiseId: "thunder", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 12.5, reb: 4.5, ast: 1.7, stl: 0.8, blk: 0.4 }, years: "2000–2003", accolades: "Dunk-contest champ wing" },

  // ---------------- 2010s ----------------
  { id: "kevin-durant-thunder-2010s", name: "Kevin Durant", franchiseId: "thunder", decade: "2010s", positions: ["SF"], stats: { pts: 28.8, reb: 7.4, ast: 4.3, stl: 1.3, blk: 1.1 }, years: "2010–2016", accolades: "2014 MVP · 4× scoring champ" },
  { id: "russell-westbrook-thunder-2010s", name: "Russell Westbrook", franchiseId: "thunder", decade: "2010s", positions: ["PG"], stats: { pts: 25.7, reb: 7.5, ast: 8.6, stl: 1.8, blk: 0.3 }, years: "2010–2019", accolades: "2017 MVP · triple-double season" },
  { id: "james-harden-thunder-2010s", name: "James Harden", franchiseId: "thunder", decade: "2010s", positions: ["SG"], stats: { pts: 14.0, reb: 3.7, ast: 2.9, stl: 1.0, blk: 0.3 }, years: "2010–2012", accolades: "2012 Sixth Man of the Year" },
  { id: "serge-ibaka-thunder-2010s", name: "Serge Ibaka", franchiseId: "thunder", decade: "2010s", positions: ["PF", "C"], stats: { pts: 12.5, reb: 7.5, ast: 0.8, stl: 0.5, blk: 2.6 }, years: "2010–2016", accolades: "3× block champ · Air Congo" },
  { id: "paul-george-thunder-2010s", name: "Paul George", franchiseId: "thunder", decade: "2010s", positions: ["SF", "SG"], stats: { pts: 25.0, reb: 7.2, ast: 3.7, stl: 2.1, blk: 0.4 }, years: "2017–2019", accolades: "MVP runner-up 2019" },
  { id: "carmelo-anthony-thunder-2010s", name: "Carmelo Anthony", franchiseId: "thunder", decade: "2010s", positions: ["PF", "SF"], stats: { pts: 16.2, reb: 5.8, ast: 1.3, stl: 0.6, blk: 0.6 }, years: "2017–2018", accolades: "Hoodie Melo season" },
  { id: "steven-adams-thunder-2010s", name: "Steven Adams", franchiseId: "thunder", decade: "2010s", positions: ["C"], stats: { pts: 11.0, reb: 8.5, ast: 1.5, stl: 1.0, blk: 1.0 }, years: "2013–2019", accolades: "Funniest strongman in hoops" },
  { id: "victor-oladipo-thunder-2010s", name: "Victor Oladipo", franchiseId: "thunder", decade: "2010s", positions: ["SG"], stats: { pts: 15.9, reb: 4.3, ast: 2.6, stl: 1.2, blk: 0.3 }, years: "2016–2017", accolades: "Pre-breakout athletic guard" },
  { id: "enes-kanter-thunder-2010s", name: "Enes Kanter", franchiseId: "thunder", decade: "2010s", positions: ["C"], stats: { pts: 14.0, reb: 8.0, ast: 0.8, stl: 0.4, blk: 0.5 }, years: "2015–2017", accolades: "Bench scoring big" },

  // ---------------- 2020s ----------------
  { id: "shai-gilgeous-alexander-thunder-2020s", name: "Shai Gilgeous-Alexander", franchiseId: "thunder", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 29.5, reb: 5.2, ast: 5.8, stl: 1.7, blk: 0.9 }, years: "2020–2026", accolades: "2025 MVP · champ · scoring king" },
  { id: "jalen-williams-thunder-2020s", name: "Jalen Williams", franchiseId: "thunder", decade: "2020s", positions: ["SF", "SG"], stats: { pts: 18.5, reb: 5.0, ast: 4.5, stl: 1.3, blk: 0.6 }, years: "2022–2026", accolades: "All-Star two-way wing · 2025 champ" },
  { id: "chet-holmgren-thunder-2020s", name: "Chet Holmgren", franchiseId: "thunder", decade: "2020s", positions: ["C", "PF"], stats: { pts: 16.0, reb: 8.0, ast: 2.3, stl: 0.7, blk: 2.4 }, years: "2023–2026", accolades: "Unicorn rim protector · 2025 champ" },
  { id: "luguentz-dort-thunder-2020s", name: "Luguentz Dort", franchiseId: "thunder", decade: "2020s", positions: ["SG", "SF"], stats: { pts: 12.5, reb: 4.0, ast: 1.8, stl: 1.0, blk: 0.4 }, years: "2020–2026", accolades: "All-Defense brick wall" },
  { id: "josh-giddey-thunder-2020s", name: "Josh Giddey", franchiseId: "thunder", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 13.5, reb: 7.5, ast: 6.0, stl: 0.8, blk: 0.5 }, years: "2021–2024", accolades: "Jumbo playmaker" },
  { id: "isaiah-hartenstein-thunder-2020s", name: "Isaiah Hartenstein", franchiseId: "thunder", decade: "2020s", positions: ["C"], stats: { pts: 11.0, reb: 10.5, ast: 3.5, stl: 0.8, blk: 1.1 }, years: "2024–2026", accolades: "Title-team double-double big" },
  { id: "alex-caruso-thunder-2020s", name: "Alex Caruso", franchiseId: "thunder", decade: "2020s", positions: ["SG", "PG"], stats: { pts: 8.0, reb: 3.0, ast: 2.8, stl: 1.7, blk: 0.5 }, years: "2024–2026", accolades: "Champion chaos defender" },
  { id: "aaron-wiggins-thunder-2020s", name: "Aaron Wiggins", franchiseId: "thunder", decade: "2020s", positions: ["SG", "SF"], stats: { pts: 8.5, reb: 3.3, ast: 1.5, stl: 0.7, blk: 0.3 }, years: "2021–2026", accolades: "Efficient depth wing · 2025 champ" },
];
