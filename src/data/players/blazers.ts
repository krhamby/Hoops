import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1970s ----------------
  { id: "bill-walton-blazers-1970s", name: "Bill Walton", franchiseId: "blazers", decade: "1970s", positions: ["C"], stats: { pts: 17.1, reb: 13.5, ast: 4.4, stl: 0.9, blk: 2.6 }, years: "1974–1978", accolades: "1977 Finals MVP · 1978 MVP" },
  { id: "geoff-petrie-blazers-1970s", name: "Geoff Petrie", franchiseId: "blazers", decade: "1970s", positions: ["SG", "PG"], stats: { pts: 21.8, reb: 3.0, ast: 4.6, stl: 0.8, blk: 0.2 }, years: "1970–1976", accolades: "Co-ROY 1971 · first Blazer star" },
  { id: "sidney-wicks-blazers-1970s", name: "Sidney Wicks", franchiseId: "blazers", decade: "1970s", positions: ["PF"], stats: { pts: 22.3, reb: 10.3, ast: 4.1, stl: 1.0, blk: 0.9 }, years: "1971–1976", accolades: "1972 ROY · 4× All-Star" },
  { id: "maurice-lucas-blazers-1970s", name: "Maurice Lucas", franchiseId: "blazers", decade: "1970s", positions: ["PF"], stats: { pts: 18.5, reb: 10.0, ast: 2.9, stl: 1.0, blk: 0.8 }, years: "1976–1979", accolades: "The Enforcer · '77 champ" },
  { id: "lionel-hollins-blazers-1970s", name: "Lionel Hollins", franchiseId: "blazers", decade: "1970s", positions: ["PG"], stats: { pts: 14.5, reb: 3.0, ast: 4.5, stl: 1.9, blk: 0.3 }, years: "1975–1979", accolades: "All-Star · '77 title guard" },
  { id: "dave-twardzik-blazers-1970s", name: "Dave Twardzik", franchiseId: "blazers", decade: "1970s", positions: ["PG"], stats: { pts: 9.5, reb: 2.7, ast: 3.3, stl: 1.2, blk: 0.1 }, years: "1976–1979", accolades: "Efficient title-team starter" },
  { id: "bob-gross-blazers-1970s", name: "Bob Gross", franchiseId: "blazers", decade: "1970s", positions: ["SF"], stats: { pts: 10.5, reb: 4.8, ast: 3.0, stl: 1.2, blk: 0.7 }, years: "1975–1979", accolades: "Smart cutter of the '77 champs" },
  { id: "lloyd-neal-blazers-1970s", name: "Lloyd Neal", franchiseId: "blazers", decade: "1970s", positions: ["PF", "C"], stats: { pts: 11.5, reb: 8.5, ast: 1.5, stl: 0.5, blk: 0.8 }, years: "1972–1979", accolades: "Undersized rebounding force" },

  // ---------------- 1980s ----------------
  { id: "clyde-drexler-blazers-1980s", name: "Clyde Drexler", franchiseId: "blazers", decade: "1980s", positions: ["SG", "SF"], stats: { pts: 21.5, reb: 6.2, ast: 5.8, stl: 2.2, blk: 0.7 }, years: "1983–1989", accolades: "The Glide takes off" },
  { id: "jim-paxson-blazers-1980s", name: "Jim Paxson", franchiseId: "blazers", decade: "1980s", positions: ["SG"], stats: { pts: 17.5, reb: 2.5, ast: 3.0, stl: 1.2, blk: 0.1 }, years: "1980–1988", accolades: "2× All-Star wing" },
  { id: "mychal-thompson-blazers-1980s", name: "Mychal Thompson", franchiseId: "blazers", decade: "1980s", positions: ["C", "PF"], stats: { pts: 16.5, reb: 8.5, ast: 3.0, stl: 0.7, blk: 1.0 }, years: "1980–1986", accolades: "No. 1 pick frontcourt anchor" },
  { id: "kiki-vandeweghe-blazers-1980s", name: "Kiki Vandeweghe", franchiseId: "blazers", decade: "1980s", positions: ["SF"], stats: { pts: 23.5, reb: 3.5, ast: 2.4, stl: 0.6, blk: 0.2 }, years: "1984–1989", accolades: "Elite one-on-one scorer" },
  { id: "terry-porter-blazers-1980s", name: "Terry Porter", franchiseId: "blazers", decade: "1980s", positions: ["PG"], stats: { pts: 14.5, reb: 3.5, ast: 7.8, stl: 1.7, blk: 0.2 }, years: "1985–1989", accolades: "All-Star floor general" },
  { id: "jerome-kersey-blazers-1980s", name: "Jerome Kersey", franchiseId: "blazers", decade: "1980s", positions: ["SF"], stats: { pts: 14.0, reb: 6.5, ast: 2.4, stl: 1.5, blk: 0.8 }, years: "1984–1989", accolades: "High-flying hustle wing" },
  { id: "kevin-duckworth-blazers-1980s", name: "Kevin Duckworth", franchiseId: "blazers", decade: "1980s", positions: ["C"], stats: { pts: 15.5, reb: 7.0, ast: 1.0, stl: 0.4, blk: 0.5 }, years: "1986–1989", accolades: "1988 MIP · All-Star center" },
  { id: "buck-williams-blazers-1980s", name: "Buck Williams", franchiseId: "blazers", decade: "1980s", positions: ["PF"], stats: { pts: 13.6, reb: 10.1, ast: 1.4, stl: 0.7, blk: 0.7 }, years: "1989–1990", accolades: "All-Defense rebounding rock" },
  { id: "calvin-natt-blazers-1980s", name: "Calvin Natt", franchiseId: "blazers", decade: "1980s", positions: ["SF", "PF"], stats: { pts: 18.5, reb: 6.5, ast: 2.2, stl: 0.8, blk: 0.4 }, years: "1980–1984", accolades: "Sturdy scoring forward" },

  // ---------------- 1990s ----------------
  { id: "clyde-drexler-blazers-1990s", name: "Clyde Drexler", franchiseId: "blazers", decade: "1990s", positions: ["SG"], stats: { pts: 22.5, reb: 6.5, ast: 5.5, stl: 1.9, blk: 0.7 }, years: "1990–1995", accolades: "1992 Finals run · Dream Teamer" },
  { id: "terry-porter-blazers-1990s", name: "Terry Porter", franchiseId: "blazers", decade: "1990s", positions: ["PG"], stats: { pts: 16.5, reb: 3.5, ast: 7.0, stl: 1.5, blk: 0.2 }, years: "1990–1995", accolades: "Two Finals trips at the helm" },
  { id: "jerome-kersey-blazers-1990s", name: "Jerome Kersey", franchiseId: "blazers", decade: "1990s", positions: ["SF"], stats: { pts: 12.5, reb: 6.5, ast: 2.5, stl: 1.3, blk: 0.7 }, years: "1990–1995", accolades: "Relentless two-way forward" },
  { id: "buck-williams-blazers-1990s", name: "Buck Williams", franchiseId: "blazers", decade: "1990s", positions: ["PF"], stats: { pts: 11.5, reb: 9.5, ast: 1.2, stl: 0.7, blk: 0.6 }, years: "1990–1996", accolades: "FG% champ · interior anchor" },
  { id: "clifford-robinson-blazers-1990s", name: "Clifford Robinson", franchiseId: "blazers", decade: "1990s", positions: ["PF", "C"], stats: { pts: 16.5, reb: 5.5, ast: 2.2, stl: 1.1, blk: 1.2 }, years: "1990–1997", accolades: "1993 Sixth Man of the Year" },
  { id: "rod-strickland-blazers-1990s", name: "Rod Strickland", franchiseId: "blazers", decade: "1990s", positions: ["PG"], stats: { pts: 16.0, reb: 4.3, ast: 8.5, stl: 1.5, blk: 0.2 }, years: "1992–1996", accolades: "Crafty handle wizard" },
  { id: "rasheed-wallace-blazers-1990s", name: "Rasheed Wallace", franchiseId: "blazers", decade: "1990s", positions: ["PF"], stats: { pts: 15.5, reb: 6.5, ast: 1.6, stl: 1.0, blk: 1.1 }, years: "1996–1999", accolades: "All-Star talent · fiery edge" },
  { id: "arvydas-sabonis-blazers-1990s", name: "Arvydas Sabonis", franchiseId: "blazers", decade: "1990s", positions: ["C"], stats: { pts: 13.5, reb: 8.0, ast: 2.5, stl: 0.8, blk: 1.1 }, years: "1995–1999", accolades: "Legendary passing big man" },
  { id: "damon-stoudamire-blazers-1990s", name: "Damon Stoudamire", franchiseId: "blazers", decade: "1990s", positions: ["PG"], stats: { pts: 14.5, reb: 3.5, ast: 6.5, stl: 1.0, blk: 0.2 }, years: "1998–1999", accolades: "Mighty Mouse comes home" },
  { id: "isaiah-rider-blazers-1990s", name: "Isaiah Rider", franchiseId: "blazers", decade: "1990s", positions: ["SG"], stats: { pts: 15.5, reb: 4.0, ast: 2.8, stl: 0.8, blk: 0.3 }, years: "1996–1999", accolades: "Talented, volatile scorer" },

  // ---------------- 2000s ----------------
  { id: "rasheed-wallace-blazers-2000s", name: "Rasheed Wallace", franchiseId: "blazers", decade: "2000s", positions: ["PF", "C"], stats: { pts: 18.0, reb: 7.5, ast: 2.0, stl: 1.1, blk: 1.2 }, years: "2000–2004", accolades: "2× All-Star stretch four" },
  { id: "scottie-pippen-blazers-2000s", name: "Scottie Pippen", franchiseId: "blazers", decade: "2000s", positions: ["SF"], stats: { pts: 11.5, reb: 5.0, ast: 4.8, stl: 1.7, blk: 0.6 }, years: "2000–2003", accolades: "6× champ orchestrator" },
  { id: "bonzi-wells-blazers-2000s", name: "Bonzi Wells", franchiseId: "blazers", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 14.5, reb: 4.8, ast: 2.7, stl: 1.3, blk: 0.4 }, years: "2000–2003", accolades: "Physical post-up guard" },
  { id: "damon-stoudamire-blazers-2000s", name: "Damon Stoudamire", franchiseId: "blazers", decade: "2000s", positions: ["PG"], stats: { pts: 12.5, reb: 3.2, ast: 5.5, stl: 1.0, blk: 0.1 }, years: "2000–2005", accolades: "Hometown floor leader" },
  { id: "zach-randolph-blazers-2000s", name: "Zach Randolph", franchiseId: "blazers", decade: "2000s", positions: ["PF"], stats: { pts: 16.5, reb: 8.5, ast: 1.6, stl: 0.7, blk: 0.3 }, years: "2001–2007", accolades: "2004 MIP · 20-10 seasons" },
  { id: "brandon-roy-blazers-2000s", name: "Brandon Roy", franchiseId: "blazers", decade: "2000s", positions: ["SG"], stats: { pts: 19.5, reb: 4.5, ast: 5.0, stl: 1.0, blk: 0.3 }, years: "2006–2009", accolades: "2007 ROY · The Natural" },
  { id: "lamarcus-aldridge-blazers-2000s", name: "LaMarcus Aldridge", franchiseId: "blazers", decade: "2000s", positions: ["PF", "C"], stats: { pts: 15.5, reb: 7.0, ast: 1.7, stl: 0.8, blk: 1.0 }, years: "2006–2009", accolades: "Rising mid-post star" },
  { id: "travis-outlaw-blazers-2000s", name: "Travis Outlaw", franchiseId: "blazers", decade: "2000s", positions: ["SF", "PF"], stats: { pts: 10.5, reb: 4.0, ast: 0.9, stl: 0.6, blk: 0.8 }, years: "2003–2009", accolades: "Bouncy bench scorer" },
  { id: "joel-przybilla-blazers-2000s", name: "Joel Przybilla", franchiseId: "blazers", decade: "2000s", positions: ["C"], stats: { pts: 5.0, reb: 7.5, ast: 0.5, stl: 0.3, blk: 1.6 }, years: "2004–2009", accolades: "The Vanilla Gorilla" },

  // ---------------- 2010s ----------------
  { id: "damian-lillard-blazers-2010s", name: "Damian Lillard", franchiseId: "blazers", decade: "2010s", positions: ["PG"], stats: { pts: 24.0, reb: 4.2, ast: 6.5, stl: 1.0, blk: 0.3 }, years: "2012–2019", accolades: "2013 ROY · Dame Time daggers" },
  { id: "lamarcus-aldridge-blazers-2010s", name: "LaMarcus Aldridge", franchiseId: "blazers", decade: "2010s", positions: ["PF"], stats: { pts: 21.5, reb: 9.0, ast: 2.0, stl: 0.8, blk: 1.0 }, years: "2010–2015", accolades: "4× All-Star · playoff 46-burger" },
  { id: "cj-mccollum-blazers-2010s", name: "CJ McCollum", franchiseId: "blazers", decade: "2010s", positions: ["SG"], stats: { pts: 20.5, reb: 3.6, ast: 3.3, stl: 0.9, blk: 0.4 }, years: "2013–2019", accolades: "2016 MIP · shot-making artist" },
  { id: "wesley-matthews-blazers-2010s", name: "Wesley Matthews", franchiseId: "blazers", decade: "2010s", positions: ["SG"], stats: { pts: 15.0, reb: 3.4, ast: 2.3, stl: 1.2, blk: 0.2 }, years: "2010–2015", accolades: "Iron Man 3-and-D guard" },
  { id: "nicolas-batum-blazers-2010s", name: "Nicolas Batum", franchiseId: "blazers", decade: "2010s", positions: ["SF"], stats: { pts: 12.5, reb: 5.5, ast: 4.0, stl: 1.0, blk: 0.7 }, years: "2010–2015", accolades: "Do-everything French wing" },
  { id: "jusuf-nurkic-blazers-2010s", name: "Jusuf Nurkic", franchiseId: "blazers", decade: "2010s", positions: ["C"], stats: { pts: 14.5, reb: 9.5, ast: 2.8, stl: 1.0, blk: 1.3 }, years: "2017–2019", accolades: "Bosnian Beast · Nurk Fever" },
  { id: "brandon-roy-blazers-2010s", name: "Brandon Roy", franchiseId: "blazers", decade: "2010s", positions: ["SG"], stats: { pts: 16.5, reb: 3.5, ast: 3.5, stl: 0.8, blk: 0.2 }, years: "2010–2011", accolades: "Game 4 comeback legend" },
  { id: "robin-lopez-blazers-2010s", name: "Robin Lopez", franchiseId: "blazers", decade: "2010s", positions: ["C"], stats: { pts: 10.0, reb: 7.5, ast: 0.9, stl: 0.4, blk: 1.5 }, years: "2013–2015", accolades: "Screen-setting enforcer" },
  { id: "evan-turner-blazers-2010s", name: "Evan Turner", franchiseId: "blazers", decade: "2010s", positions: ["SF", "SG"], stats: { pts: 8.5, reb: 4.0, ast: 3.5, stl: 0.7, blk: 0.3 }, years: "2016–2019", accolades: "Secondary playmaking vet" },

  // ---------------- 2020s ----------------
  { id: "damian-lillard-blazers-2020s", name: "Damian Lillard", franchiseId: "blazers", decade: "2020s", positions: ["PG"], stats: { pts: 29.5, reb: 4.4, ast: 7.3, stl: 0.9, blk: 0.3 }, years: "2020–2023", accolades: "71-point game · logo bombs" },
  { id: "cj-mccollum-blazers-2020s", name: "CJ McCollum", franchiseId: "blazers", decade: "2020s", positions: ["SG"], stats: { pts: 21.5, reb: 4.0, ast: 4.5, stl: 0.9, blk: 0.4 }, years: "2020–2022", accolades: "Backcourt running mate" },
  { id: "anfernee-simons-blazers-2020s", name: "Anfernee Simons", franchiseId: "blazers", decade: "2020s", positions: ["SG", "PG"], stats: { pts: 19.5, reb: 2.8, ast: 4.5, stl: 0.8, blk: 0.2 }, years: "2020–2025", accolades: "Dunk champ turned flamethrower" },
  { id: "jusuf-nurkic-blazers-2020s", name: "Jusuf Nurkic", franchiseId: "blazers", decade: "2020s", positions: ["C"], stats: { pts: 12.5, reb: 10.0, ast: 2.5, stl: 1.0, blk: 1.0 }, years: "2020–2023", accolades: "Bruising hub center" },
  { id: "jerami-grant-blazers-2020s", name: "Jerami Grant", franchiseId: "blazers", decade: "2020s", positions: ["PF", "SF"], stats: { pts: 20.5, reb: 4.0, ast: 2.5, stl: 0.8, blk: 0.8 }, years: "2022–2026", accolades: "Smooth scoring forward" },
  { id: "scoot-henderson-blazers-2020s", name: "Scoot Henderson", franchiseId: "blazers", decade: "2020s", positions: ["PG"], stats: { pts: 13.5, reb: 3.2, ast: 5.3, stl: 0.9, blk: 0.2 }, years: "2023–2026", accolades: "Explosive No. 3 pick guard" },
  { id: "shaedon-sharpe-blazers-2020s", name: "Shaedon Sharpe", franchiseId: "blazers", decade: "2020s", positions: ["SG", "SF"], stats: { pts: 16.5, reb: 4.5, ast: 2.8, stl: 0.8, blk: 0.4 }, years: "2022–2026", accolades: "Highlight-reel bounce" },
  { id: "deni-avdija-blazers-2020s", name: "Deni Avdija", franchiseId: "blazers", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 17.0, reb: 7.5, ast: 4.5, stl: 0.9, blk: 0.5 }, years: "2024–2026", accolades: "Point-forward breakout" },
  { id: "donovan-clingan-blazers-2020s", name: "Donovan Clingan", franchiseId: "blazers", decade: "2020s", positions: ["C"], stats: { pts: 8.0, reb: 8.5, ast: 1.2, stl: 0.5, blk: 1.7 }, years: "2024–2026", accolades: "Towering rim deterrent" },
];
