import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1950s (Fort Wayne / Detroit) ----------------
  { id: "george-yardley-pistons-1950s", name: "George Yardley", franchiseId: "pistons", decade: "1950s", positions: ["SF", "PF"], stats: { pts: 19.5, reb: 9.0, ast: 2.0, stl: 0.7, blk: 0.3 }, years: "1953–1959", accolades: "First to 2,000 points" },
  { id: "larry-foust-pistons-1950s", name: "Larry Foust", franchiseId: "pistons", decade: "1950s", positions: ["C"], stats: { pts: 14.5, reb: 10.5, ast: 2.0, stl: 0.4, blk: 0.6 }, years: "1950–1957", accolades: "8× All-Star pivot" },
  { id: "andy-phillip-pistons-1950s", name: "Andy Phillip", franchiseId: "pistons", decade: "1950s", positions: ["PG"], stats: { pts: 9.5, reb: 4.5, ast: 6.5, stl: 0.8, blk: 0.1 }, years: "1952–1956", accolades: "HOF assist leader" },
  { id: "mel-hutchins-pistons-1950s", name: "Mel Hutchins", franchiseId: "pistons", decade: "1950s", positions: ["PF", "SF"], stats: { pts: 10.5, reb: 8.5, ast: 2.2, stl: 0.6, blk: 0.4 }, years: "1953–1957", accolades: "All-Star defender" },
  { id: "gene-shue-pistons-1950s", name: "Gene Shue", franchiseId: "pistons", decade: "1950s", positions: ["PG", "SG"], stats: { pts: 16.5, reb: 4.5, ast: 4.0, stl: 0.8, blk: 0.1 }, years: "1957–1959", accolades: "All-NBA guard" },
  { id: "frankie-brian-pistons-1950s", name: "Frankie Brian", franchiseId: "pistons", decade: "1950s", positions: ["SG"], stats: { pts: 12.0, reb: 3.0, ast: 3.0, stl: 0.6, blk: 0.1 }, years: "1951–1956", accolades: "All-Star scorer" },
  { id: "walter-dukes-pistons-1950s", name: "Walter Dukes", franchiseId: "pistons", decade: "1950s", positions: ["C"], stats: { pts: 11.0, reb: 11.5, ast: 1.0, stl: 0.4, blk: 0.8 }, years: "1957–1959", accolades: "7-foot board man" },
  { id: "dick-mcguire-pistons-1950s", name: "Dick McGuire", franchiseId: "pistons", decade: "1950s", positions: ["PG"], stats: { pts: 9.0, reb: 4.5, ast: 5.5, stl: 0.7, blk: 0.1 }, years: "1957–1959", accolades: "HOF playmaker" },

  // ---------------- 1960s ----------------
  { id: "dave-bing-pistons-1960s", name: "Dave Bing", franchiseId: "pistons", decade: "1960s", positions: ["PG", "SG"], stats: { pts: 22.5, reb: 4.5, ast: 6.0, stl: 1.2, blk: 0.2 }, years: "1966–1969", accolades: "ROY ’67 · scoring champ ’68" },
  { id: "bailey-howell-pistons-1960s", name: "Bailey Howell", franchiseId: "pistons", decade: "1960s", positions: ["PF"], stats: { pts: 20.5, reb: 10.5, ast: 1.8, stl: 0.7, blk: 0.3 }, years: "1960–1964", accolades: "4× All-Star forward" },
  { id: "dave-debusschere-pistons-1960s", name: "Dave DeBusschere", franchiseId: "pistons", decade: "1960s", positions: ["PF", "SF"], stats: { pts: 16.0, reb: 11.0, ast: 2.5, stl: 0.8, blk: 0.5 }, years: "1962–1968", accolades: "Player-coach at 24" },
  { id: "gene-shue-pistons-1960s", name: "Gene Shue", franchiseId: "pistons", decade: "1960s", positions: ["PG", "SG"], stats: { pts: 20.5, reb: 4.5, ast: 5.5, stl: 0.8, blk: 0.1 }, years: "1960–1962", accolades: "All-NBA 1st team ’60" },
  { id: "eddie-miles-pistons-1960s", name: "Eddie Miles", franchiseId: "pistons", decade: "1960s", positions: ["SG"], stats: { pts: 13.5, reb: 3.5, ast: 2.0, stl: 0.6, blk: 0.1 }, years: "1963–1969", accolades: "The Man with the Golden Arm" },
  { id: "ray-scott-pistons-1960s", name: "Ray Scott", franchiseId: "pistons", decade: "1960s", positions: ["PF", "C"], stats: { pts: 14.5, reb: 9.5, ast: 1.8, stl: 0.5, blk: 0.5 }, years: "1961–1967", accolades: "Versatile big" },
  { id: "terry-dischinger-pistons-1960s", name: "Terry Dischinger", franchiseId: "pistons", decade: "1960s", positions: ["SF", "PF"], stats: { pts: 13.0, reb: 5.5, ast: 1.5, stl: 0.5, blk: 0.2 }, years: "1964–1969", accolades: "ROY ’63 efficiency" },
  { id: "don-ohl-pistons-1960s", name: "Don Ohl", franchiseId: "pistons", decade: "1960s", positions: ["SG"], stats: { pts: 15.5, reb: 3.5, ast: 3.5, stl: 0.6, blk: 0.1 }, years: "1960–1964", accolades: "All-Star guard" },

  // ---------------- 1970s ----------------
  { id: "bob-lanier-pistons-1970s", name: "Bob Lanier", franchiseId: "pistons", decade: "1970s", positions: ["C"], stats: { pts: 22.5, reb: 11.5, ast: 3.5, stl: 1.0, blk: 2.0 }, years: "1970–1979", accolades: "7× All-Star · HOF lefty" },
  { id: "dave-bing-pistons-1970s", name: "Dave Bing", franchiseId: "pistons", decade: "1970s", positions: ["PG", "SG"], stats: { pts: 21.0, reb: 4.0, ast: 7.0, stl: 1.3, blk: 0.2 }, years: "1970–1975", accolades: "All-NBA leader" },
  { id: "jimmy-walker-pistons-1970s", name: "Jimmy Walker", franchiseId: "pistons", decade: "1970s", positions: ["SG"], stats: { pts: 19.5, reb: 3.0, ast: 4.0, stl: 0.8, blk: 0.1 }, years: "1970–1972", accolades: "Smooth All-Star" },
  { id: "curtis-rowe-pistons-1970s", name: "Curtis Rowe", franchiseId: "pistons", decade: "1970s", positions: ["PF", "SF"], stats: { pts: 14.0, reb: 8.0, ast: 1.8, stl: 0.5, blk: 0.5 }, years: "1971–1976", accolades: "UCLA-bred forward" },
  { id: "kevin-porter-pistons-1970s", name: "Kevin Porter", franchiseId: "pistons", decade: "1970s", positions: ["PG"], stats: { pts: 14.0, reb: 3.0, ast: 9.5, stl: 1.5, blk: 0.1 }, years: "1975–1979", accolades: "Assist champ ’79" },
  { id: "ml-carr-pistons-1970s", name: "M.L. Carr", franchiseId: "pistons", decade: "1970s", positions: ["SF", "SG"], stats: { pts: 13.5, reb: 6.5, ast: 2.5, stl: 2.0, blk: 0.4 }, years: "1976–1979", accolades: "Steals leader ’79" },
  { id: "chris-ford-pistons-1970s", name: "Chris Ford", franchiseId: "pistons", decade: "1970s", positions: ["SG"], stats: { pts: 11.0, reb: 3.5, ast: 3.5, stl: 1.8, blk: 0.2 }, years: "1972–1978", accolades: "Heads-up guard" },
  { id: "eric-money-pistons-1970s", name: "Eric Money", franchiseId: "pistons", decade: "1970s", positions: ["PG", "SG"], stats: { pts: 12.5, reb: 3.0, ast: 4.5, stl: 1.3, blk: 0.1 }, years: "1974–1978", accolades: "Quick combo guard" },

  // ---------------- 1980s ----------------
  { id: "isiah-thomas-pistons-1980s", name: "Isiah Thomas", franchiseId: "pistons", decade: "1980s", positions: ["PG"], stats: { pts: 20.5, reb: 3.8, ast: 9.8, stl: 2.0, blk: 0.3 }, years: "1981–1989", accolades: "Bad Boys captain · champ ’89" },
  { id: "joe-dumars-pistons-1980s", name: "Joe Dumars", franchiseId: "pistons", decade: "1980s", positions: ["SG", "PG"], stats: { pts: 14.5, reb: 2.5, ast: 4.8, stl: 0.9, blk: 0.2 }, years: "1985–1989", accolades: "FMVP ’89" },
  { id: "bill-laimbeer-pistons-1980s", name: "Bill Laimbeer", franchiseId: "pistons", decade: "1980s", positions: ["C"], stats: { pts: 14.5, reb: 11.0, ast: 2.0, stl: 0.7, blk: 0.9 }, years: "1982–1989", accolades: "4× All-Star agitator" },
  { id: "dennis-rodman-pistons-1980s", name: "Dennis Rodman", franchiseId: "pistons", decade: "1980s", positions: ["PF", "SF"], stats: { pts: 8.0, reb: 8.5, ast: 1.3, stl: 0.8, blk: 0.7 }, years: "1986–1989", accolades: "Worm · defensive terror" },
  { id: "vinnie-johnson-pistons-1980s", name: "Vinnie Johnson", franchiseId: "pistons", decade: "1980s", positions: ["SG"], stats: { pts: 13.0, reb: 3.5, ast: 3.5, stl: 0.8, blk: 0.2 }, years: "1981–1989", accolades: "The Microwave" },
  { id: "adrian-dantley-pistons-1980s", name: "Adrian Dantley", franchiseId: "pistons", decade: "1980s", positions: ["SF"], stats: { pts: 19.5, reb: 4.0, ast: 3.0, stl: 0.7, blk: 0.1 }, years: "1986–1989", accolades: "HOF post scorer" },
  { id: "rick-mahorn-pistons-1980s", name: "Rick Mahorn", franchiseId: "pistons", decade: "1980s", positions: ["PF", "C"], stats: { pts: 9.0, reb: 7.0, ast: 1.0, stl: 0.5, blk: 0.7 }, years: "1985–1989", accolades: "Bad Boys enforcer" },
  { id: "kelly-tripucka-pistons-1980s", name: "Kelly Tripucka", franchiseId: "pistons", decade: "1980s", positions: ["SF"], stats: { pts: 21.5, reb: 4.5, ast: 3.0, stl: 1.0, blk: 0.2 }, years: "1981–1986", accolades: "2× All-Star scorer" },
  { id: "john-long-pistons-1980s", name: "John Long", franchiseId: "pistons", decade: "1980s", positions: ["SG"], stats: { pts: 14.5, reb: 3.0, ast: 2.5, stl: 0.9, blk: 0.2 }, years: "1980–1986", accolades: "Mid-range pro" },
  { id: "mark-aguirre-pistons-1980s", name: "Mark Aguirre", franchiseId: "pistons", decade: "1980s", positions: ["SF"], stats: { pts: 15.5, reb: 4.5, ast: 2.5, stl: 0.6, blk: 0.3 }, years: "1988–1989", accolades: "Champ ’89 addition" },

  // ---------------- 1990s ----------------
  { id: "isiah-thomas-pistons-1990s", name: "Isiah Thomas", franchiseId: "pistons", decade: "1990s", positions: ["PG"], stats: { pts: 17.5, reb: 3.0, ast: 7.5, stl: 1.5, blk: 0.2 }, years: "1990–1994", accolades: "FMVP ’90 · back-to-back" },
  { id: "joe-dumars-pistons-1990s", name: "Joe Dumars", franchiseId: "pistons", decade: "1990s", positions: ["SG"], stats: { pts: 16.5, reb: 2.5, ast: 4.5, stl: 0.9, blk: 0.1 }, years: "1990–1999", accolades: "Champ ’90 · class act" },
  { id: "dennis-rodman-pistons-1990s", name: "Dennis Rodman", franchiseId: "pistons", decade: "1990s", positions: ["PF"], stats: { pts: 7.0, reb: 16.5, ast: 1.5, stl: 0.8, blk: 0.7 }, years: "1990–1993", accolades: "2× DPOY · rebound titles" },
  { id: "bill-laimbeer-pistons-1990s", name: "Bill Laimbeer", franchiseId: "pistons", decade: "1990s", positions: ["C"], stats: { pts: 11.0, reb: 9.0, ast: 2.0, stl: 0.6, blk: 0.7 }, years: "1990–1993", accolades: "Champ ’90 villain" },
  { id: "grant-hill-pistons-1990s", name: "Grant Hill", franchiseId: "pistons", decade: "1990s", positions: ["SF", "PG"], stats: { pts: 21.5, reb: 8.0, ast: 6.5, stl: 1.6, blk: 0.6 }, years: "1994–1999", accolades: "Co-ROY ’95 · all-around star" },
  { id: "allan-houston-pistons-1990s", name: "Allan Houston", franchiseId: "pistons", decade: "1990s", positions: ["SG"], stats: { pts: 14.5, reb: 2.5, ast: 2.5, stl: 0.7, blk: 0.2 }, years: "1993–1996", accolades: "Sweet-stroke riser" },
  { id: "lindsey-hunter-pistons-1990s", name: "Lindsey Hunter", franchiseId: "pistons", decade: "1990s", positions: ["PG", "SG"], stats: { pts: 10.5, reb: 2.5, ast: 3.5, stl: 1.6, blk: 0.2 }, years: "1993–1999", accolades: "Press-defense pest" },
  { id: "terry-mills-pistons-1990s", name: "Terry Mills", franchiseId: "pistons", decade: "1990s", positions: ["PF"], stats: { pts: 11.5, reb: 6.0, ast: 1.5, stl: 0.5, blk: 0.4 }, years: "1992–1997", accolades: "Stretch-four pioneer" },
  { id: "jerry-stackhouse-pistons-1990s", name: "Jerry Stackhouse", franchiseId: "pistons", decade: "1990s", positions: ["SG"], stats: { pts: 14.5, reb: 2.8, ast: 3.0, stl: 1.0, blk: 0.6 }, years: "1998–1999", accolades: "Athletic scorer" },

  // ---------------- 2000s ----------------
  { id: "chauncey-billups-pistons-2000s", name: "Chauncey Billups", franchiseId: "pistons", decade: "2000s", positions: ["PG"], stats: { pts: 17.0, reb: 3.2, ast: 6.5, stl: 1.0, blk: 0.2 }, years: "2002–2008", accolades: "FMVP ’04 · Mr. Big Shot" },
  { id: "richard-hamilton-pistons-2000s", name: "Richard Hamilton", franchiseId: "pistons", decade: "2000s", positions: ["SG"], stats: { pts: 18.5, reb: 3.5, ast: 4.0, stl: 0.8, blk: 0.2 }, years: "2002–2009", accolades: "Champ ’04 · masked marathon" },
  { id: "ben-wallace-pistons-2000s", name: "Ben Wallace", franchiseId: "pistons", decade: "2000s", positions: ["C", "PF"], stats: { pts: 7.0, reb: 12.0, ast: 1.5, stl: 1.4, blk: 2.3 }, years: "2000–2006", accolades: "4× DPOY · champ ’04" },
  { id: "rasheed-wallace-pistons-2000s", name: "Rasheed Wallace", franchiseId: "pistons", decade: "2000s", positions: ["PF", "C"], stats: { pts: 13.5, reb: 7.5, ast: 1.8, stl: 1.0, blk: 1.6 }, years: "2004–2009", accolades: "Champ ’04 · ball don’t lie" },
  { id: "tayshaun-prince-pistons-2000s", name: "Tayshaun Prince", franchiseId: "pistons", decade: "2000s", positions: ["SF"], stats: { pts: 12.5, reb: 5.0, ast: 2.7, stl: 0.7, blk: 0.6 }, years: "2002–2009", accolades: "The Block on Reggie" },
  { id: "jerry-stackhouse-pistons-2000s", name: "Jerry Stackhouse", franchiseId: "pistons", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 26.5, reb: 4.0, ast: 4.5, stl: 1.1, blk: 0.6 }, years: "2000–2002", accolades: "29.8 ppg season" },
  { id: "antonio-mcdyess-pistons-2000s", name: "Antonio McDyess", franchiseId: "pistons", decade: "2000s", positions: ["PF", "C"], stats: { pts: 8.5, reb: 6.5, ast: 1.0, stl: 0.5, blk: 0.6 }, years: "2004–2009", accolades: "Reliable vet big" },
  { id: "corliss-williamson-pistons-2000s", name: "Corliss Williamson", franchiseId: "pistons", decade: "2000s", positions: ["SF", "PF"], stats: { pts: 12.0, reb: 4.0, ast: 1.3, stl: 0.6, blk: 0.3 }, years: "2001–2004", accolades: "6MOY ’02" },
  { id: "rodney-stuckey-pistons-2000s", name: "Rodney Stuckey", franchiseId: "pistons", decade: "2000s", positions: ["PG", "SG"], stats: { pts: 11.5, reb: 3.0, ast: 4.0, stl: 0.9, blk: 0.2 }, years: "2007–2009", accolades: "Strong combo guard" },

  // ---------------- 2010s ----------------
  { id: "andre-drummond-pistons-2010s", name: "Andre Drummond", franchiseId: "pistons", decade: "2010s", positions: ["C"], stats: { pts: 14.0, reb: 13.5, ast: 1.2, stl: 1.4, blk: 1.6 }, years: "2012–2019", accolades: "2× rebound champ" },
  { id: "blake-griffin-pistons-2010s", name: "Blake Griffin", franchiseId: "pistons", decade: "2010s", positions: ["PF"], stats: { pts: 21.5, reb: 8.0, ast: 5.5, stl: 0.7, blk: 0.4 }, years: "2018–2019", accolades: "All-NBA ’19 season" },
  { id: "greg-monroe-pistons-2010s", name: "Greg Monroe", franchiseId: "pistons", decade: "2010s", positions: ["C", "PF"], stats: { pts: 14.5, reb: 9.0, ast: 2.2, stl: 1.1, blk: 0.6 }, years: "2010–2015", accolades: "Skilled post hub" },
  { id: "reggie-jackson-pistons-2010s", name: "Reggie Jackson", franchiseId: "pistons", decade: "2010s", positions: ["PG"], stats: { pts: 15.5, reb: 2.8, ast: 5.5, stl: 0.8, blk: 0.1 }, years: "2015–2019", accolades: "Pick-and-roll scorer" },
  { id: "rodney-stuckey-pistons-2010s", name: "Rodney Stuckey", franchiseId: "pistons", decade: "2010s", positions: ["SG", "PG"], stats: { pts: 13.0, reb: 2.8, ast: 4.0, stl: 0.9, blk: 0.2 }, years: "2010–2014", accolades: "Downhill guard" },
  { id: "tobias-harris-pistons-2010s", name: "Tobias Harris", franchiseId: "pistons", decade: "2010s", positions: ["PF", "SF"], stats: { pts: 17.0, reb: 4.8, ast: 2.0, stl: 0.8, blk: 0.4 }, years: "2016–2018", accolades: "Efficient forward" },
  { id: "kentavious-caldwell-pope-pistons-2010s", name: "Kentavious Caldwell-Pope", franchiseId: "pistons", decade: "2010s", positions: ["SG"], stats: { pts: 12.5, reb: 3.0, ast: 2.0, stl: 1.2, blk: 0.2 }, years: "2013–2017", accolades: "3-and-D guard" },
  { id: "brandon-jennings-pistons-2010s", name: "Brandon Jennings", franchiseId: "pistons", decade: "2010s", positions: ["PG"], stats: { pts: 15.5, reb: 2.5, ast: 7.0, stl: 1.2, blk: 0.1 }, years: "2013–2016", accolades: "Lefty shot maker" },

  // ---------------- 2020s ----------------
  { id: "cade-cunningham-pistons-2020s", name: "Cade Cunningham", franchiseId: "pistons", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 23.5, reb: 6.5, ast: 8.0, stl: 1.0, blk: 0.6 }, years: "2021–2026", accolades: "All-NBA ’25 · franchise PG" },
  { id: "jaden-ivey-pistons-2020s", name: "Jaden Ivey", franchiseId: "pistons", decade: "2020s", positions: ["SG", "PG"], stats: { pts: 15.5, reb: 3.5, ast: 4.5, stl: 0.8, blk: 0.4 }, years: "2022–2026", accolades: "Blur in transition" },
  { id: "jalen-duren-pistons-2020s", name: "Jalen Duren", franchiseId: "pistons", decade: "2020s", positions: ["C"], stats: { pts: 13.0, reb: 10.5, ast: 2.0, stl: 0.7, blk: 1.0 }, years: "2022–2026", accolades: "Teen double-double big" },
  { id: "ausar-thompson-pistons-2020s", name: "Ausar Thompson", franchiseId: "pistons", decade: "2020s", positions: ["SF", "SG"], stats: { pts: 10.5, reb: 6.0, ast: 2.5, stl: 1.7, blk: 0.9 }, years: "2023–2026", accolades: "Freak athlete defender" },
  { id: "tobias-harris-pistons-2020s", name: "Tobias Harris", franchiseId: "pistons", decade: "2020s", positions: ["PF", "SF"], stats: { pts: 13.5, reb: 6.0, ast: 2.2, stl: 0.7, blk: 0.5 }, years: "2024–2026", accolades: "Veteran stabilizer" },
  { id: "saddiq-bey-pistons-2020s", name: "Saddiq Bey", franchiseId: "pistons", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 14.5, reb: 5.0, ast: 1.8, stl: 0.8, blk: 0.2 }, years: "2020–2023", accolades: "All-Rookie wing" },
  { id: "jerami-grant-pistons-2020s", name: "Jerami Grant", franchiseId: "pistons", decade: "2020s", positions: ["PF", "SF"], stats: { pts: 20.5, reb: 4.5, ast: 2.6, stl: 0.7, blk: 1.0 }, years: "2020–2022", accolades: "Breakout No. 1 option" },
  { id: "malik-beasley-pistons-2020s", name: "Malik Beasley", franchiseId: "pistons", decade: "2020s", positions: ["SG"], stats: { pts: 16.5, reb: 3.0, ast: 1.7, stl: 0.9, blk: 0.1 }, years: "2024–2025", accolades: "300-threes season" },
];
