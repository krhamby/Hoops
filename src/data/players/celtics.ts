import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1950s ----------------
  { id: "bob-cousy-celtics-1950s", name: "Bob Cousy", franchiseId: "celtics", decade: "1950s", positions: ["PG"], stats: { pts: 19.8, reb: 6.0, ast: 7.6, stl: 1.2, blk: 0.1 }, years: "1950–1959", accolades: "MVP ’57 · Houdini of the Hardwood" },
  { id: "bill-sharman-celtics-1950s", name: "Bill Sharman", franchiseId: "celtics", decade: "1950s", positions: ["SG"], stats: { pts: 17.8, reb: 3.9, ast: 3.0, stl: 0.8, blk: 0.1 }, years: "1951–1959", accolades: "All-Star · FT legend" },
  { id: "bill-russell-celtics-1950s", name: "Bill Russell", franchiseId: "celtics", decade: "1950s", positions: ["C"], stats: { pts: 16.2, reb: 22.5, ast: 3.2, stl: 1.2, blk: 4.0 }, years: "1956–1959", accolades: "MVP ’58 · defensive revolution" },
  { id: "ed-macauley-celtics-1950s", name: "Ed Macauley", franchiseId: "celtics", decade: "1950s", positions: ["C", "PF"], stats: { pts: 18.9, reb: 8.2, ast: 3.6, stl: 0.6, blk: 0.7 }, years: "1950–1956", accolades: "Easy Ed · 7× All-Star" },
  { id: "tom-heinsohn-celtics-1950s", name: "Tom Heinsohn", franchiseId: "celtics", decade: "1950s", positions: ["PF", "SF"], stats: { pts: 17.8, reb: 9.0, ast: 2.0, stl: 0.6, blk: 0.3 }, years: "1956–1959", accolades: "ROY ’57 · champ" },
  { id: "frank-ramsey-celtics-1950s", name: "Frank Ramsey", franchiseId: "celtics", decade: "1950s", positions: ["SG", "SF"], stats: { pts: 13.0, reb: 6.5, ast: 1.8, stl: 0.7, blk: 0.2 }, years: "1954–1959", accolades: "Original sixth man" },
  { id: "jim-loscutoff-celtics-1950s", name: "Jim Loscutoff", franchiseId: "celtics", decade: "1950s", positions: ["PF"], stats: { pts: 7.5, reb: 6.5, ast: 0.9, stl: 0.5, blk: 0.2 }, years: "1955–1959", accolades: "Enforcer · champ" },
  { id: "arnie-risen-celtics-1950s", name: "Arnie Risen", franchiseId: "celtics", decade: "1950s", positions: ["C"], stats: { pts: 8.0, reb: 7.5, ast: 1.0, stl: 0.4, blk: 0.5 }, years: "1955–1958", accolades: "Vet big · champ ’57" },

  // ---------------- 1960s ----------------
  { id: "bill-russell-celtics-1960s", name: "Bill Russell", franchiseId: "celtics", decade: "1960s", positions: ["C"], stats: { pts: 15.0, reb: 23.5, ast: 4.2, stl: 1.3, blk: 4.2 }, years: "1960–1969", accolades: "5× MVP · 11× champ" },
  { id: "sam-jones-celtics-1960s", name: "Sam Jones", franchiseId: "celtics", decade: "1960s", positions: ["SG"], stats: { pts: 19.5, reb: 4.5, ast: 2.6, stl: 0.9, blk: 0.2 }, years: "1960–1969", accolades: "10× champ · bank-shot master" },
  { id: "john-havlicek-celtics-1960s", name: "John Havlicek", franchiseId: "celtics", decade: "1960s", positions: ["SF", "SG"], stats: { pts: 19.0, reb: 6.5, ast: 4.5, stl: 1.4, blk: 0.3 }, years: "1962–1969", accolades: "Hondo · stole the ball!" },
  { id: "bob-cousy-celtics-1960s", name: "Bob Cousy", franchiseId: "celtics", decade: "1960s", positions: ["PG"], stats: { pts: 17.5, reb: 4.5, ast: 8.5, stl: 1.1, blk: 0.1 }, years: "1960–1963", accolades: "6× champ floor general" },
  { id: "tom-heinsohn-celtics-1960s", name: "Tom Heinsohn", franchiseId: "celtics", decade: "1960s", positions: ["PF", "SF"], stats: { pts: 19.5, reb: 8.5, ast: 2.3, stl: 0.6, blk: 0.3 }, years: "1960–1965", accolades: "8× champ gunner" },
  { id: "bailey-howell-celtics-1960s", name: "Bailey Howell", franchiseId: "celtics", decade: "1960s", positions: ["PF"], stats: { pts: 19.0, reb: 8.5, ast: 1.6, stl: 0.7, blk: 0.3 }, years: "1966–1969", accolades: "All-Star · 2× champ" },
  { id: "kc-jones-celtics-1960s", name: "K.C. Jones", franchiseId: "celtics", decade: "1960s", positions: ["PG"], stats: { pts: 7.8, reb: 3.8, ast: 4.5, stl: 1.5, blk: 0.1 }, years: "1960–1967", accolades: "8× champ · lockdown guard" },
  { id: "satch-sanders-celtics-1960s", name: "Satch Sanders", franchiseId: "celtics", decade: "1960s", positions: ["PF", "SF"], stats: { pts: 10.5, reb: 7.0, ast: 1.2, stl: 0.8, blk: 0.5 }, years: "1960–1969", accolades: "8× champ stopper" },
  { id: "don-nelson-celtics-1960s", name: "Don Nelson", franchiseId: "celtics", decade: "1960s", positions: ["SF", "PF"], stats: { pts: 10.0, reb: 5.0, ast: 1.3, stl: 0.5, blk: 0.2 }, years: "1965–1969", accolades: "Glue guy · 5× champ" },
  { id: "larry-siegfried-celtics-1960s", name: "Larry Siegfried", franchiseId: "celtics", decade: "1960s", positions: ["SG", "PG"], stats: { pts: 11.0, reb: 3.0, ast: 3.5, stl: 0.8, blk: 0.1 }, years: "1963–1969", accolades: "5× champ combo guard" },

  // ---------------- 1970s ----------------
  { id: "john-havlicek-celtics-1970s", name: "John Havlicek", franchiseId: "celtics", decade: "1970s", positions: ["SF", "SG"], stats: { pts: 22.0, reb: 7.0, ast: 5.5, stl: 1.3, blk: 0.3 }, years: "1970–1978", accolades: "FMVP ’74 · 8× champ" },
  { id: "dave-cowens-celtics-1970s", name: "Dave Cowens", franchiseId: "celtics", decade: "1970s", positions: ["C", "PF"], stats: { pts: 18.2, reb: 14.0, ast: 3.8, stl: 1.1, blk: 0.9 }, years: "1970–1979", accolades: "MVP ’73 · 2× champ" },
  { id: "jo-jo-white-celtics-1970s", name: "Jo Jo White", franchiseId: "celtics", decade: "1970s", positions: ["PG", "SG"], stats: { pts: 18.4, reb: 4.3, ast: 5.1, stl: 1.0, blk: 0.2 }, years: "1970–1979", accolades: "FMVP ’76 · 7× All-Star" },
  { id: "paul-silas-celtics-1970s", name: "Paul Silas", franchiseId: "celtics", decade: "1970s", positions: ["PF"], stats: { pts: 11.5, reb: 12.0, ast: 2.6, stl: 1.0, blk: 0.3 }, years: "1972–1976", accolades: "Glass-eating champ" },
  { id: "don-chaney-celtics-1970s", name: "Don Chaney", franchiseId: "celtics", decade: "1970s", positions: ["SG"], stats: { pts: 9.0, reb: 4.0, ast: 2.5, stl: 1.5, blk: 0.4 }, years: "1970–1975", accolades: "All-Defense wing" },
  { id: "charlie-scott-celtics-1970s", name: "Charlie Scott", franchiseId: "celtics", decade: "1970s", positions: ["SG", "PG"], stats: { pts: 17.5, reb: 4.0, ast: 4.0, stl: 1.3, blk: 0.2 }, years: "1975–1977", accolades: "Champ ’76 scorer" },
  { id: "don-nelson-celtics-1970s", name: "Don Nelson", franchiseId: "celtics", decade: "1970s", positions: ["SF", "PF"], stats: { pts: 11.0, reb: 4.5, ast: 1.5, stl: 0.5, blk: 0.2 }, years: "1970–1976", accolades: "Crafty vet · 2× champ" },
  { id: "cedric-maxwell-celtics-1970s", name: "Cedric Maxwell", franchiseId: "celtics", decade: "1970s", positions: ["SF", "PF"], stats: { pts: 15.5, reb: 8.0, ast: 2.5, stl: 0.9, blk: 0.7 }, years: "1977–1979", accolades: "Cornbread · efficiency king" },

  // ---------------- 1980s ----------------
  { id: "larry-bird-celtics-1980s", name: "Larry Bird", franchiseId: "celtics", decade: "1980s", positions: ["SF", "PF"], stats: { pts: 25.0, reb: 10.0, ast: 6.3, stl: 1.8, blk: 0.8 }, years: "1979–1989", accolades: "3× MVP · 3× champ" },
  { id: "kevin-mchale-celtics-1980s", name: "Kevin McHale", franchiseId: "celtics", decade: "1980s", positions: ["PF", "C"], stats: { pts: 18.0, reb: 7.4, ast: 1.5, stl: 0.4, blk: 1.9 }, years: "1980–1989", accolades: "Post-move torture chamber" },
  { id: "robert-parish-celtics-1980s", name: "Robert Parish", franchiseId: "celtics", decade: "1980s", positions: ["C"], stats: { pts: 16.5, reb: 10.0, ast: 1.6, stl: 0.8, blk: 1.8 }, years: "1980–1989", accolades: "The Chief · 3× champ" },
  { id: "dennis-johnson-celtics-1980s", name: "Dennis Johnson", franchiseId: "celtics", decade: "1980s", positions: ["PG", "SG"], stats: { pts: 12.6, reb: 3.3, ast: 6.4, stl: 1.2, blk: 0.4 }, years: "1983–1989", accolades: "Clutch · All-Defense" },
  { id: "danny-ainge-celtics-1980s", name: "Danny Ainge", franchiseId: "celtics", decade: "1980s", positions: ["SG", "PG"], stats: { pts: 11.3, reb: 2.7, ast: 4.2, stl: 1.2, blk: 0.1 }, years: "1981–1989", accolades: "2× champ pest" },
  { id: "cedric-maxwell-celtics-1980s", name: "Cedric Maxwell", franchiseId: "celtics", decade: "1980s", positions: ["SF", "PF"], stats: { pts: 14.5, reb: 6.0, ast: 2.2, stl: 0.9, blk: 0.6 }, years: "1980–1985", accolades: "FMVP ’81" },
  { id: "nate-archibald-celtics-1980s", name: "Nate Archibald", franchiseId: "celtics", decade: "1980s", positions: ["PG"], stats: { pts: 12.5, reb: 1.9, ast: 7.2, stl: 0.9, blk: 0.1 }, years: "1980–1983", accolades: "Tiny · champ ’81" },
  { id: "bill-walton-celtics-1980s", name: "Bill Walton", franchiseId: "celtics", decade: "1980s", positions: ["C"], stats: { pts: 7.6, reb: 6.8, ast: 2.1, stl: 0.5, blk: 1.3 }, years: "1985–1987", accolades: "6MOY ’86 · champ" },
  { id: "ml-carr-celtics-1980s", name: "M.L. Carr", franchiseId: "celtics", decade: "1980s", positions: ["SF", "SG"], stats: { pts: 7.5, reb: 3.0, ast: 1.6, stl: 1.0, blk: 0.2 }, years: "1980–1985", accolades: "Towel-waving 2× champ" },
  { id: "gerald-henderson-celtics-1980s", name: "Gerald Henderson", franchiseId: "celtics", decade: "1980s", positions: ["PG", "SG"], stats: { pts: 9.5, reb: 2.0, ast: 3.0, stl: 1.2, blk: 0.1 }, years: "1980–1984", accolades: "The steal in ’84 Finals" },

  // ---------------- 1990s ----------------
  { id: "larry-bird-celtics-1990s", name: "Larry Bird", franchiseId: "celtics", decade: "1990s", positions: ["SF", "PF"], stats: { pts: 21.5, reb: 9.0, ast: 7.0, stl: 1.6, blk: 0.8 }, years: "1990–1992", accolades: "Legend’s last stand" },
  { id: "reggie-lewis-celtics-1990s", name: "Reggie Lewis", franchiseId: "celtics", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 19.5, reb: 4.5, ast: 2.5, stl: 1.4, blk: 0.9 }, years: "1990–1993", accolades: "All-Star ’92 · captain" },
  { id: "robert-parish-celtics-1990s", name: "Robert Parish", franchiseId: "celtics", decade: "1990s", positions: ["C"], stats: { pts: 12.5, reb: 9.0, ast: 1.0, stl: 0.6, blk: 1.2 }, years: "1990–1994", accolades: "Ageless Chief" },
  { id: "kevin-mchale-celtics-1990s", name: "Kevin McHale", franchiseId: "celtics", decade: "1990s", positions: ["PF", "C"], stats: { pts: 13.5, reb: 6.0, ast: 1.7, stl: 0.4, blk: 1.5 }, years: "1990–1993", accolades: "Vet post wizard" },
  { id: "dee-brown-celtics-1990s", name: "Dee Brown", franchiseId: "celtics", decade: "1990s", positions: ["PG", "SG"], stats: { pts: 11.5, reb: 3.0, ast: 4.0, stl: 1.4, blk: 0.3 }, years: "1990–1998", accolades: "No-look dunk champ ’91" },
  { id: "dino-radja-celtics-1990s", name: "Dino Radja", franchiseId: "celtics", decade: "1990s", positions: ["PF", "C"], stats: { pts: 16.0, reb: 8.5, ast: 1.5, stl: 0.8, blk: 1.0 }, years: "1993–1997", accolades: "Croatian post scorer" },
  { id: "antoine-walker-celtics-1990s", name: "Antoine Walker", franchiseId: "celtics", decade: "1990s", positions: ["PF", "SF"], stats: { pts: 19.0, reb: 8.5, ast: 3.3, stl: 1.4, blk: 0.5 }, years: "1996–1999", accolades: "Employee No. 8 · shimmy" },
  { id: "paul-pierce-celtics-1990s", name: "Paul Pierce", franchiseId: "celtics", decade: "1990s", positions: ["SF"], stats: { pts: 16.5, reb: 6.4, ast: 2.4, stl: 1.7, blk: 1.0 }, years: "1998–1999", accolades: "The Truth arrives" },

  // ---------------- 2000s ----------------
  { id: "paul-pierce-celtics-2000s", name: "Paul Pierce", franchiseId: "celtics", decade: "2000s", positions: ["SF", "SG"], stats: { pts: 24.0, reb: 6.5, ast: 4.0, stl: 1.5, blk: 0.5 }, years: "2000–2009", accolades: "FMVP ’08 · The Truth" },
  { id: "kevin-garnett-celtics-2000s", name: "Kevin Garnett", franchiseId: "celtics", decade: "2000s", positions: ["PF", "C"], stats: { pts: 17.5, reb: 9.5, ast: 3.8, stl: 1.4, blk: 1.2 }, years: "2007–2009", accolades: "DPOY ’08 · champ" },
  { id: "ray-allen-celtics-2000s", name: "Ray Allen", franchiseId: "celtics", decade: "2000s", positions: ["SG"], stats: { pts: 17.5, reb: 3.6, ast: 2.9, stl: 0.9, blk: 0.2 }, years: "2007–2009", accolades: "Champ ’08 · splash" },
  { id: "rajon-rondo-celtics-2000s", name: "Rajon Rondo", franchiseId: "celtics", decade: "2000s", positions: ["PG"], stats: { pts: 9.5, reb: 4.5, ast: 6.5, stl: 1.7, blk: 0.2 }, years: "2006–2009", accolades: "Champ ’08 playmaker" },
  { id: "antoine-walker-celtics-2000s", name: "Antoine Walker", franchiseId: "celtics", decade: "2000s", positions: ["PF", "SF"], stats: { pts: 21.5, reb: 8.5, ast: 4.8, stl: 1.4, blk: 0.5 }, years: "2000–2003", accolades: "3× All-Star" },
  { id: "kendrick-perkins-celtics-2000s", name: "Kendrick Perkins", franchiseId: "celtics", decade: "2000s", positions: ["C"], stats: { pts: 6.5, reb: 5.5, ast: 1.0, stl: 0.3, blk: 1.4 }, years: "2003–2009", accolades: "Champ ’08 anchor" },
  { id: "tony-allen-celtics-2000s", name: "Tony Allen", franchiseId: "celtics", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 7.0, reb: 3.0, ast: 1.3, stl: 1.0, blk: 0.4 }, years: "2004–2009", accolades: "Grit and grind origins" },
  { id: "glen-davis-celtics-2000s", name: "Glen Davis", franchiseId: "celtics", decade: "2000s", positions: ["PF", "C"], stats: { pts: 7.5, reb: 4.5, ast: 1.0, stl: 0.5, blk: 0.3 }, years: "2007–2009", accolades: "Big Baby · champ ’08" },

  // ---------------- 2010s ----------------
  { id: "paul-pierce-celtics-2010s", name: "Paul Pierce", franchiseId: "celtics", decade: "2010s", positions: ["SF"], stats: { pts: 19.0, reb: 5.5, ast: 4.0, stl: 1.1, blk: 0.5 }, years: "2010–2013", accolades: "Franchise icon" },
  { id: "kevin-garnett-celtics-2010s", name: "Kevin Garnett", franchiseId: "celtics", decade: "2010s", positions: ["PF", "C"], stats: { pts: 15.0, reb: 8.5, ast: 2.7, stl: 1.2, blk: 1.0 }, years: "2010–2013", accolades: "Anything is possible!" },
  { id: "rajon-rondo-celtics-2010s", name: "Rajon Rondo", franchiseId: "celtics", decade: "2010s", positions: ["PG"], stats: { pts: 11.5, reb: 4.7, ast: 9.8, stl: 1.9, blk: 0.1 }, years: "2010–2014", accolades: "Assist king · 4× All-Star" },
  { id: "isaiah-thomas-celtics-2010s", name: "Isaiah Thomas", franchiseId: "celtics", decade: "2010s", positions: ["PG"], stats: { pts: 24.5, reb: 2.7, ast: 6.0, stl: 1.0, blk: 0.1 }, years: "2015–2017", accolades: "King in the Fourth" },
  { id: "al-horford-celtics-2010s", name: "Al Horford", franchiseId: "celtics", decade: "2010s", positions: ["C", "PF"], stats: { pts: 14.0, reb: 7.0, ast: 4.5, stl: 0.8, blk: 1.2 }, years: "2016–2019", accolades: "All-Star · steady hub" },
  { id: "kyrie-irving-celtics-2010s", name: "Kyrie Irving", franchiseId: "celtics", decade: "2010s", positions: ["PG"], stats: { pts: 24.0, reb: 4.0, ast: 5.5, stl: 1.3, blk: 0.4 }, years: "2017–2019", accolades: "Handle wizardry" },
  { id: "jayson-tatum-celtics-2010s", name: "Jayson Tatum", franchiseId: "celtics", decade: "2010s", positions: ["SF", "PF"], stats: { pts: 15.5, reb: 6.5, ast: 2.0, stl: 1.1, blk: 0.7 }, years: "2017–2019", accolades: "Rookie playoff hero" },
  { id: "jaylen-brown-celtics-2010s", name: "Jaylen Brown", franchiseId: "celtics", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 11.5, reb: 4.5, ast: 1.6, stl: 0.9, blk: 0.4 }, years: "2016–2019", accolades: "Rising two-way wing" },
  { id: "marcus-smart-celtics-2010s", name: "Marcus Smart", franchiseId: "celtics", decade: "2010s", positions: ["PG", "SG"], stats: { pts: 9.5, reb: 3.5, ast: 4.0, stl: 1.6, blk: 0.4 }, years: "2014–2019", accolades: "All-Defense heart" },

  // ---------------- 2020s ----------------
  { id: "jayson-tatum-celtics-2020s", name: "Jayson Tatum", franchiseId: "celtics", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 27.5, reb: 8.5, ast: 4.8, stl: 1.1, blk: 0.6 }, years: "2020–2026", accolades: "Champ ’24 · 1st team All-NBA" },
  { id: "jaylen-brown-celtics-2020s", name: "Jaylen Brown", franchiseId: "celtics", decade: "2020s", positions: ["SG", "SF"], stats: { pts: 25.0, reb: 6.5, ast: 3.5, stl: 1.1, blk: 0.4 }, years: "2020–2026", accolades: "FMVP ’24" },
  { id: "marcus-smart-celtics-2020s", name: "Marcus Smart", franchiseId: "celtics", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 11.5, reb: 3.5, ast: 5.5, stl: 1.7, blk: 0.4 }, years: "2020–2023", accolades: "DPOY ’22" },
  { id: "al-horford-celtics-2020s", name: "Al Horford", franchiseId: "celtics", decade: "2020s", positions: ["C", "PF"], stats: { pts: 9.5, reb: 6.5, ast: 3.0, stl: 0.7, blk: 1.0 }, years: "2021–2025", accolades: "Champ ’24 · timeless" },
  { id: "derrick-white-celtics-2020s", name: "Derrick White", franchiseId: "celtics", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 15.5, reb: 4.0, ast: 4.5, stl: 0.9, blk: 1.0 }, years: "2022–2026", accolades: "Champ ’24 · All-Defense" },
  { id: "jrue-holiday-celtics-2020s", name: "Jrue Holiday", franchiseId: "celtics", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 12.0, reb: 5.5, ast: 4.8, stl: 1.0, blk: 0.7 }, years: "2023–2025", accolades: "Champ ’24 · elite defender" },
  { id: "kristaps-porzingis-celtics-2020s", name: "Kristaps Porzingis", franchiseId: "celtics", decade: "2020s", positions: ["C", "PF"], stats: { pts: 20.0, reb: 7.0, ast: 2.0, stl: 0.7, blk: 1.8 }, years: "2023–2025", accolades: "Unicorn · champ ’24" },
  { id: "payton-pritchard-celtics-2020s", name: "Payton Pritchard", franchiseId: "celtics", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 10.5, reb: 3.0, ast: 2.5, stl: 0.7, blk: 0.1 }, years: "2020–2026", accolades: "6MOY ’25 · logo bombs" },
];
