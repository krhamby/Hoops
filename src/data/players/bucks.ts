import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1960s (expansion 1968) ----------------
  { id: "kareem-abdul-jabbar-bucks-1960s", name: "Kareem Abdul-Jabbar", franchiseId: "bucks", decade: "1960s", positions: ["C"], stats: { pts: 28.8, reb: 14.5, ast: 4.1, stl: 1.0, blk: 3.0 }, years: "1969–1970", accolades: "ROY ’70 · instant superstar" },
  { id: "flynn-robinson-bucks-1960s", name: "Flynn Robinson", franchiseId: "bucks", decade: "1960s", positions: ["PG", "SG"], stats: { pts: 21.0, reb: 3.5, ast: 5.0, stl: 0.9, blk: 0.1 }, years: "1968–1969", accolades: "All-Star ’70 scorer" },
  { id: "jon-mcglocklin-bucks-1960s", name: "Jon McGlocklin", franchiseId: "bucks", decade: "1960s", positions: ["SG"], stats: { pts: 19.5, reb: 4.5, ast: 4.0, stl: 0.8, blk: 0.1 }, years: "1968–1969", accolades: "Original Buck All-Star" },
  { id: "bob-dandridge-bucks-1960s", name: "Bob Dandridge", franchiseId: "bucks", decade: "1960s", positions: ["SF"], stats: { pts: 13.2, reb: 7.5, ast: 2.5, stl: 0.9, blk: 0.3 }, years: "1969–1970", accolades: "All-Rookie smooth wing" },
  { id: "wayne-embry-bucks-1960s", name: "Wayne Embry", franchiseId: "bucks", decade: "1960s", positions: ["C"], stats: { pts: 13.5, reb: 8.5, ast: 1.5, stl: 0.4, blk: 0.5 }, years: "1968–1969", accolades: "Veteran anchor" },
  { id: "greg-smith-bucks-1960s", name: "Greg Smith", franchiseId: "bucks", decade: "1960s", positions: ["PF"], stats: { pts: 11.5, reb: 7.5, ast: 1.8, stl: 0.7, blk: 0.4 }, years: "1968–1969", accolades: "Springy starter" },
  { id: "len-chappell-bucks-1960s", name: "Len Chappell", franchiseId: "bucks", decade: "1960s", positions: ["PF", "C"], stats: { pts: 10.5, reb: 5.5, ast: 1.0, stl: 0.4, blk: 0.3 }, years: "1968–1969", accolades: "Expansion vet scorer" },

  // ---------------- 1970s ----------------
  { id: "kareem-abdul-jabbar-bucks-1970s", name: "Kareem Abdul-Jabbar", franchiseId: "bucks", decade: "1970s", positions: ["C"], stats: { pts: 30.5, reb: 15.5, ast: 4.5, stl: 1.1, blk: 3.5 }, years: "1970–1975", accolades: "3× MVP · champ ’71" },
  { id: "oscar-robertson-bucks-1970s", name: "Oscar Robertson", franchiseId: "bucks", decade: "1970s", positions: ["PG"], stats: { pts: 16.5, reb: 4.5, ast: 7.5, stl: 1.2, blk: 0.1 }, years: "1970–1974", accolades: "Big O · champ ’71" },
  { id: "bob-dandridge-bucks-1970s", name: "Bob Dandridge", franchiseId: "bucks", decade: "1970s", positions: ["SF"], stats: { pts: 19.0, reb: 7.5, ast: 3.5, stl: 1.1, blk: 0.5 }, years: "1970–1977", accolades: "Champ ’71 · 3× All-Star" },
  { id: "jon-mcglocklin-bucks-1970s", name: "Jon McGlocklin", franchiseId: "bucks", decade: "1970s", positions: ["SG"], stats: { pts: 12.5, reb: 2.5, ast: 3.0, stl: 0.6, blk: 0.1 }, years: "1970–1976", accolades: "Champ ’71 sniper" },
  { id: "lucius-allen-bucks-1970s", name: "Lucius Allen", franchiseId: "bucks", decade: "1970s", positions: ["PG", "SG"], stats: { pts: 13.5, reb: 3.5, ast: 4.5, stl: 1.2, blk: 0.2 }, years: "1970–1974", accolades: "Champ ’71 guard" },
  { id: "brian-winters-bucks-1970s", name: "Brian Winters", franchiseId: "bucks", decade: "1970s", positions: ["SG"], stats: { pts: 19.0, reb: 3.0, ast: 4.5, stl: 1.3, blk: 0.2 }, years: "1975–1979", accolades: "2× All-Star · retired No. 32" },
  { id: "marques-johnson-bucks-1970s", name: "Marques Johnson", franchiseId: "bucks", decade: "1970s", positions: ["SF"], stats: { pts: 21.5, reb: 8.5, ast: 2.5, stl: 1.2, blk: 0.8 }, years: "1977–1979", accolades: "All-NBA 1st team ’79" },
  { id: "junior-bridgeman-bucks-1970s", name: "Junior Bridgeman", franchiseId: "bucks", decade: "1970s", positions: ["SG", "SF"], stats: { pts: 13.5, reb: 3.5, ast: 2.5, stl: 0.9, blk: 0.2 }, years: "1975–1979", accolades: "Bench bucket machine" },
  { id: "quinn-buckner-bucks-1970s", name: "Quinn Buckner", franchiseId: "bucks", decade: "1970s", positions: ["PG"], stats: { pts: 9.5, reb: 3.0, ast: 4.5, stl: 2.0, blk: 0.1 }, years: "1976–1979", accolades: "Defensive quarterback" },

  // ---------------- 1980s ----------------
  { id: "sidney-moncrief-bucks-1980s", name: "Sidney Moncrief", franchiseId: "bucks", decade: "1980s", positions: ["SG"], stats: { pts: 18.5, reb: 5.0, ast: 4.0, stl: 1.4, blk: 0.3 }, years: "1980–1989", accolades: "2× DPOY · 5× All-Star" },
  { id: "marques-johnson-bucks-1980s", name: "Marques Johnson", franchiseId: "bucks", decade: "1980s", positions: ["SF"], stats: { pts: 20.5, reb: 6.5, ast: 3.5, stl: 1.1, blk: 0.6 }, years: "1980–1984", accolades: "3× All-Star wing" },
  { id: "terry-cummings-bucks-1980s", name: "Terry Cummings", franchiseId: "bucks", decade: "1980s", positions: ["PF"], stats: { pts: 20.5, reb: 8.0, ast: 2.5, stl: 1.1, blk: 0.7 }, years: "1984–1989", accolades: "All-NBA forward" },
  { id: "paul-pressey-bucks-1980s", name: "Paul Pressey", franchiseId: "bucks", decade: "1980s", positions: ["SF", "PG"], stats: { pts: 12.5, reb: 5.0, ast: 6.0, stl: 1.7, blk: 0.7 }, years: "1982–1989", accolades: "Point-forward pioneer" },
  { id: "ricky-pierce-bucks-1980s", name: "Ricky Pierce", franchiseId: "bucks", decade: "1980s", positions: ["SG"], stats: { pts: 16.5, reb: 3.0, ast: 2.0, stl: 0.8, blk: 0.2 }, years: "1984–1989", accolades: "6MOY ’87" },
  { id: "junior-bridgeman-bucks-1980s", name: "Junior Bridgeman", franchiseId: "bucks", decade: "1980s", positions: ["SG", "SF"], stats: { pts: 15.5, reb: 3.5, ast: 2.5, stl: 0.8, blk: 0.2 }, years: "1980–1984", accolades: "Sixth-man standard" },
  { id: "bob-lanier-bucks-1980s", name: "Bob Lanier", franchiseId: "bucks", decade: "1980s", positions: ["C"], stats: { pts: 13.5, reb: 6.0, ast: 2.5, stl: 0.8, blk: 1.0 }, years: "1980–1984", accolades: "HOF division-title runs" },
  { id: "jack-sikma-bucks-1980s", name: "Jack Sikma", franchiseId: "bucks", decade: "1980s", positions: ["C", "PF"], stats: { pts: 14.5, reb: 8.0, ast: 2.8, stl: 0.9, blk: 0.9 }, years: "1986–1989", accolades: "7× All-Star stretch big" },
  { id: "craig-hodges-bucks-1980s", name: "Craig Hodges", franchiseId: "bucks", decade: "1980s", positions: ["PG", "SG"], stats: { pts: 10.0, reb: 2.0, ast: 3.5, stl: 0.9, blk: 0.1 }, years: "1984–1988", accolades: "3-pt contest legend" },

  // ---------------- 1990s ----------------
  { id: "glenn-robinson-bucks-1990s", name: "Glenn Robinson", franchiseId: "bucks", decade: "1990s", positions: ["SF"], stats: { pts: 20.5, reb: 6.0, ast: 2.7, stl: 1.1, blk: 0.5 }, years: "1994–1999", accolades: "Big Dog · No. 1 pick" },
  { id: "ray-allen-bucks-1990s", name: "Ray Allen", franchiseId: "bucks", decade: "1990s", positions: ["SG"], stats: { pts: 17.5, reb: 4.5, ast: 3.5, stl: 1.1, blk: 0.2 }, years: "1996–1999", accolades: "Sugar Ray rising" },
  { id: "vin-baker-bucks-1990s", name: "Vin Baker", franchiseId: "bucks", decade: "1990s", positions: ["PF", "C"], stats: { pts: 18.5, reb: 9.5, ast: 2.5, stl: 0.9, blk: 1.2 }, years: "1993–1997", accolades: "3× All-Star as a Buck" },
  { id: "sam-cassell-bucks-1990s", name: "Sam Cassell", franchiseId: "bucks", decade: "1990s", positions: ["PG"], stats: { pts: 18.5, reb: 3.5, ast: 7.0, stl: 1.0, blk: 0.2 }, years: "1999", accolades: "Big-shot floor general" },
  { id: "alvin-robertson-bucks-1990s", name: "Alvin Robertson", franchiseId: "bucks", decade: "1990s", positions: ["SG"], stats: { pts: 13.5, reb: 5.5, ast: 5.0, stl: 2.7, blk: 0.2 }, years: "1990–1993", accolades: "Steals machine" },
  { id: "eric-murdock-bucks-1990s", name: "Eric Murdock", franchiseId: "bucks", decade: "1990s", positions: ["PG"], stats: { pts: 12.5, reb: 3.5, ast: 5.5, stl: 2.0, blk: 0.2 }, years: "1992–1996", accolades: "Thieving point guard" },
  { id: "todd-day-bucks-1990s", name: "Todd Day", franchiseId: "bucks", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 13.5, reb: 4.0, ast: 2.0, stl: 1.2, blk: 0.6 }, years: "1992–1997", accolades: "Athletic scoring wing" },
  { id: "terry-cummings-bucks-1990s", name: "Terry Cummings", franchiseId: "bucks", decade: "1990s", positions: ["PF"], stats: { pts: 14.0, reb: 6.5, ast: 1.8, stl: 0.9, blk: 0.5 }, years: "1990–1995", accolades: "Veteran post presence" },

  // ---------------- 2000s ----------------
  { id: "ray-allen-bucks-2000s", name: "Ray Allen", franchiseId: "bucks", decade: "2000s", positions: ["SG"], stats: { pts: 23.0, reb: 4.5, ast: 4.5, stl: 1.3, blk: 0.2 }, years: "2000–2003", accolades: "ECF run ’01 · All-Star" },
  { id: "michael-redd-bucks-2000s", name: "Michael Redd", franchiseId: "bucks", decade: "2000s", positions: ["SG"], stats: { pts: 21.5, reb: 4.0, ast: 2.5, stl: 1.0, blk: 0.1 }, years: "2000–2009", accolades: "All-Star ’04 · lefty heat" },
  { id: "sam-cassell-bucks-2000s", name: "Sam Cassell", franchiseId: "bucks", decade: "2000s", positions: ["PG"], stats: { pts: 19.0, reb: 4.0, ast: 7.5, stl: 1.0, blk: 0.2 }, years: "2000–2003", accolades: "Big Three engine" },
  { id: "glenn-robinson-bucks-2000s", name: "Glenn Robinson", franchiseId: "bucks", decade: "2000s", positions: ["SF"], stats: { pts: 21.5, reb: 6.5, ast: 3.0, stl: 1.1, blk: 0.6 }, years: "2000–2002", accolades: "2× All-Star scorer" },
  { id: "andrew-bogut-bucks-2000s", name: "Andrew Bogut", franchiseId: "bucks", decade: "2000s", positions: ["C"], stats: { pts: 11.5, reb: 8.5, ast: 2.5, stl: 0.6, blk: 1.2 }, years: "2005–2009", accolades: "No. 1 pick anchor" },
  { id: "mo-williams-bucks-2000s", name: "Mo Williams", franchiseId: "bucks", decade: "2000s", positions: ["PG"], stats: { pts: 14.0, reb: 3.0, ast: 5.5, stl: 1.0, blk: 0.1 }, years: "2004–2008", accolades: "Smooth scoring PG" },
  { id: "desmond-mason-bucks-2000s", name: "Desmond Mason", franchiseId: "bucks", decade: "2000s", positions: ["SF", "SG"], stats: { pts: 14.5, reb: 4.5, ast: 1.8, stl: 0.8, blk: 0.4 }, years: "2003–2007", accolades: "Dunk-champ athlete" },
  { id: "tim-thomas-bucks-2000s", name: "Tim Thomas", franchiseId: "bucks", decade: "2000s", positions: ["SF", "PF"], stats: { pts: 12.5, reb: 4.5, ast: 1.8, stl: 0.8, blk: 0.4 }, years: "2000–2004", accolades: "Smooth combo forward" },

  // ---------------- 2010s ----------------
  { id: "giannis-antetokounmpo-bucks-2010s", name: "Giannis Antetokounmpo", franchiseId: "bucks", decade: "2010s", positions: ["PF", "SF"], stats: { pts: 18.5, reb: 8.0, ast: 4.0, stl: 1.2, blk: 1.3 }, years: "2013–2019", accolades: "MVP ’19 · Greek Freak" },
  { id: "khris-middleton-bucks-2010s", name: "Khris Middleton", franchiseId: "bucks", decade: "2010s", positions: ["SF", "SG"], stats: { pts: 17.0, reb: 4.8, ast: 3.8, stl: 1.2, blk: 0.2 }, years: "2013–2019", accolades: "All-Star ’19 two-way wing" },
  { id: "brandon-jennings-bucks-2010s", name: "Brandon Jennings", franchiseId: "bucks", decade: "2010s", positions: ["PG"], stats: { pts: 17.0, reb: 3.0, ast: 5.8, stl: 1.4, blk: 0.2 }, years: "2010–2013", accolades: "55-pt rookie night" },
  { id: "eric-bledsoe-bucks-2010s", name: "Eric Bledsoe", franchiseId: "bucks", decade: "2010s", positions: ["PG"], stats: { pts: 16.5, reb: 4.5, ast: 5.0, stl: 1.5, blk: 0.4 }, years: "2017–2019", accolades: "All-Defense guard" },
  { id: "brook-lopez-bucks-2010s", name: "Brook Lopez", franchiseId: "bucks", decade: "2010s", positions: ["C"], stats: { pts: 12.5, reb: 4.5, ast: 1.5, stl: 0.6, blk: 2.2 }, years: "2018–2019", accolades: "Splash Mountain rim wall" },
  { id: "ersan-ilyasova-bucks-2010s", name: "Ersan Ilyasova", franchiseId: "bucks", decade: "2010s", positions: ["PF"], stats: { pts: 10.5, reb: 6.5, ast: 1.3, stl: 0.7, blk: 0.4 }, years: "2010–2015", accolades: "Charge-taking stretch four" },
  { id: "monta-ellis-bucks-2010s", name: "Monta Ellis", franchiseId: "bucks", decade: "2010s", positions: ["SG"], stats: { pts: 19.0, reb: 3.5, ast: 6.0, stl: 1.8, blk: 0.4 }, years: "2012–2013", accolades: "Have it all scorer" },
  { id: "john-henson-bucks-2010s", name: "John Henson", franchiseId: "bucks", decade: "2010s", positions: ["C", "PF"], stats: { pts: 8.5, reb: 5.5, ast: 1.0, stl: 0.5, blk: 1.5 }, years: "2012–2018", accolades: "Lanky shot blocker" },
  { id: "andrew-bogut-bucks-2010s", name: "Andrew Bogut", franchiseId: "bucks", decade: "2010s", positions: ["C"], stats: { pts: 11.5, reb: 9.5, ast: 2.0, stl: 0.6, blk: 2.4 }, years: "2010–2012", accolades: "Blocks leader ’11" },

  // ---------------- 2020s ----------------
  { id: "giannis-antetokounmpo-bucks-2020s", name: "Giannis Antetokounmpo", franchiseId: "bucks", decade: "2020s", positions: ["PF", "C"], stats: { pts: 30.5, reb: 11.5, ast: 6.0, stl: 1.0, blk: 1.2 }, years: "2020–2026", accolades: "FMVP ’21 · 50-pt closeout" },
  { id: "khris-middleton-bucks-2020s", name: "Khris Middleton", franchiseId: "bucks", decade: "2020s", positions: ["SF", "SG"], stats: { pts: 18.0, reb: 5.0, ast: 4.8, stl: 1.0, blk: 0.3 }, years: "2020–2025", accolades: "Champ ’21 closer" },
  { id: "jrue-holiday-bucks-2020s", name: "Jrue Holiday", franchiseId: "bucks", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 18.5, reb: 4.8, ast: 6.8, stl: 1.5, blk: 0.4 }, years: "2020–2023", accolades: "Champ ’21 · elite defense" },
  { id: "brook-lopez-bucks-2020s", name: "Brook Lopez", franchiseId: "bucks", decade: "2020s", positions: ["C"], stats: { pts: 13.5, reb: 5.0, ast: 1.4, stl: 0.6, blk: 2.3 }, years: "2020–2025", accolades: "Champ ’21 · DPOY runner-up" },
  { id: "damian-lillard-bucks-2020s", name: "Damian Lillard", franchiseId: "bucks", decade: "2020s", positions: ["PG"], stats: { pts: 24.5, reb: 4.5, ast: 7.0, stl: 1.0, blk: 0.3 }, years: "2023–2025", accolades: "Dame Time · All-NBA" },
  { id: "bobby-portis-bucks-2020s", name: "Bobby Portis", franchiseId: "bucks", decade: "2020s", positions: ["PF", "C"], stats: { pts: 12.5, reb: 8.5, ast: 1.5, stl: 0.6, blk: 0.4 }, years: "2020–2026", accolades: "Champ ’21 · crowd favorite" },
  { id: "pat-connaughton-bucks-2020s", name: "Pat Connaughton", franchiseId: "bucks", decade: "2020s", positions: ["SG", "SF"], stats: { pts: 8.0, reb: 4.0, ast: 1.5, stl: 0.6, blk: 0.3 }, years: "2020–2025", accolades: "Champ ’21 glue" },
  { id: "myles-turner-bucks-2020s", name: "Myles Turner", franchiseId: "bucks", decade: "2020s", positions: ["C"], stats: { pts: 13.0, reb: 6.5, ast: 1.8, stl: 0.7, blk: 2.0 }, years: "2025–2026", accolades: "Stretch-five rim guard" },
];
