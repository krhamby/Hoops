import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1980s (expansion 1988) ----------------
  { id: "rony-seikaly-heat-1980s", name: "Rony Seikaly", franchiseId: "heat", decade: "1980s", positions: ["C"], stats: { pts: 11.5, reb: 7.5, ast: 0.8, stl: 0.6, blk: 1.2 }, years: "1988–1989", accolades: "Franchise’s first draft pick" },
  { id: "kevin-edwards-heat-1980s", name: "Kevin Edwards", franchiseId: "heat", decade: "1980s", positions: ["SG"], stats: { pts: 13.5, reb: 3.0, ast: 3.5, stl: 1.3, blk: 0.3 }, years: "1988–1989", accolades: "Expansion-era scorer" },
  { id: "billy-thompson-heat-1980s", name: "Billy Thompson", franchiseId: "heat", decade: "1980s", positions: ["PF", "SF"], stats: { pts: 11.0, reb: 6.5, ast: 2.0, stl: 0.8, blk: 1.0 }, years: "1988–1989", accolades: "Inaugural starter" },
  { id: "grant-long-heat-1980s", name: "Grant Long", franchiseId: "heat", decade: "1980s", positions: ["PF"], stats: { pts: 11.5, reb: 6.5, ast: 1.8, stl: 1.4, blk: 0.4 }, years: "1988–1989", accolades: "Hard-hat forward" },
  { id: "rory-sparrow-heat-1980s", name: "Rory Sparrow", franchiseId: "heat", decade: "1980s", positions: ["PG"], stats: { pts: 12.5, reb: 2.5, ast: 5.5, stl: 1.1, blk: 0.1 }, years: "1988–1989", accolades: "First Heat point guard" },
  { id: "jon-sundvold-heat-1980s", name: "Jon Sundvold", franchiseId: "heat", decade: "1980s", positions: ["SG"], stats: { pts: 12.0, reb: 1.5, ast: 2.5, stl: 0.5, blk: 0.0 }, years: "1988–1989", accolades: "3-pt % leader ’89" },
  { id: "glen-rice-heat-1980s", name: "Glen Rice", franchiseId: "heat", decade: "1980s", positions: ["SF"], stats: { pts: 13.5, reb: 4.5, ast: 1.8, stl: 0.9, blk: 0.3 }, years: "1989–1990", accolades: "Rookie sharpshooter" },

  // ---------------- 1990s ----------------
  { id: "alonzo-mourning-heat-1990s", name: "Alonzo Mourning", franchiseId: "heat", decade: "1990s", positions: ["C"], stats: { pts: 20.5, reb: 10.0, ast: 1.5, stl: 0.7, blk: 3.0 }, years: "1995–1999", accolades: "DPOY ’99 · franchise anchor" },
  { id: "tim-hardaway-heat-1990s", name: "Tim Hardaway", franchiseId: "heat", decade: "1990s", positions: ["PG"], stats: { pts: 17.5, reb: 3.5, ast: 8.0, stl: 1.7, blk: 0.1 }, years: "1996–1999", accolades: "All-NBA 1st team ’97" },
  { id: "glen-rice-heat-1990s", name: "Glen Rice", franchiseId: "heat", decade: "1990s", positions: ["SF", "SG"], stats: { pts: 19.5, reb: 4.5, ast: 2.5, stl: 1.2, blk: 0.3 }, years: "1990–1995", accolades: "Smoothest stroke in Miami" },
  { id: "rony-seikaly-heat-1990s", name: "Rony Seikaly", franchiseId: "heat", decade: "1990s", positions: ["C"], stats: { pts: 15.5, reb: 10.5, ast: 1.5, stl: 0.6, blk: 1.4 }, years: "1990–1994", accolades: "MIP ’90 double-double" },
  { id: "steve-smith-heat-1990s", name: "Steve Smith", franchiseId: "heat", decade: "1990s", positions: ["SG", "PG"], stats: { pts: 13.5, reb: 3.5, ast: 5.0, stl: 1.0, blk: 0.3 }, years: "1991–1994", accolades: "All-Rookie smooth guard" },
  { id: "jamal-mashburn-heat-1990s", name: "Jamal Mashburn", franchiseId: "heat", decade: "1990s", positions: ["SF"], stats: { pts: 15.0, reb: 5.0, ast: 3.5, stl: 1.0, blk: 0.2 }, years: "1997–1999", accolades: "Monster Mash scoring" },
  { id: "pj-brown-heat-1990s", name: "P.J. Brown", franchiseId: "heat", decade: "1990s", positions: ["PF"], stats: { pts: 9.5, reb: 8.0, ast: 1.5, stl: 0.9, blk: 1.1 }, years: "1996–1999", accolades: "All-Defense forward" },
  { id: "voshon-lenard-heat-1990s", name: "Voshon Lenard", franchiseId: "heat", decade: "1990s", positions: ["SG"], stats: { pts: 11.5, reb: 3.0, ast: 2.0, stl: 0.8, blk: 0.1 }, years: "1995–1999", accolades: "Corner-three specialist" },
  { id: "dan-majerle-heat-1990s", name: "Dan Majerle", franchiseId: "heat", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 9.5, reb: 4.0, ast: 2.5, stl: 1.0, blk: 0.3 }, years: "1996–1999", accolades: "Thunder Dan grit" },
  { id: "sherman-douglas-heat-1990s", name: "Sherman Douglas", franchiseId: "heat", decade: "1990s", positions: ["PG"], stats: { pts: 16.5, reb: 2.5, ast: 8.0, stl: 1.2, blk: 0.1 }, years: "1990–1992", accolades: "The General" },

  // ---------------- 2000s ----------------
  { id: "dwyane-wade-heat-2000s", name: "Dwyane Wade", franchiseId: "heat", decade: "2000s", positions: ["SG"], stats: { pts: 25.5, reb: 5.0, ast: 6.5, stl: 1.8, blk: 1.0 }, years: "2003–2009", accolades: "FMVP ’06 · Flash" },
  { id: "shaquille-oneal-heat-2000s", name: "Shaquille O'Neal", franchiseId: "heat", decade: "2000s", positions: ["C"], stats: { pts: 19.5, reb: 9.5, ast: 2.0, stl: 0.5, blk: 1.8 }, years: "2004–2008", accolades: "Champ ’06 · The Big Diesel" },
  { id: "alonzo-mourning-heat-2000s", name: "Alonzo Mourning", franchiseId: "heat", decade: "2000s", positions: ["C"], stats: { pts: 13.5, reb: 7.5, ast: 0.9, stl: 0.5, blk: 2.3 }, years: "2000–2002, 2005–2008", accolades: "DPOY ’00 · champ ’06" },
  { id: "eddie-jones-heat-2000s", name: "Eddie Jones", franchiseId: "heat", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 17.0, reb: 4.5, ast: 3.5, stl: 1.5, blk: 0.6 }, years: "2000–2005", accolades: "All-Star two-way wing" },
  { id: "lamar-odom-heat-2000s", name: "Lamar Odom", franchiseId: "heat", decade: "2000s", positions: ["PF", "SF"], stats: { pts: 17.1, reb: 9.7, ast: 4.1, stl: 1.1, blk: 0.9 }, years: "2003–2004", accolades: "Point-forward season" },
  { id: "udonis-haslem-heat-2000s", name: "Udonis Haslem", franchiseId: "heat", decade: "2000s", positions: ["PF", "C"], stats: { pts: 10.5, reb: 7.5, ast: 1.0, stl: 0.6, blk: 0.3 }, years: "2003–2009", accolades: "Heart of Heat culture" },
  { id: "brian-grant-heat-2000s", name: "Brian Grant", franchiseId: "heat", decade: "2000s", positions: ["PF", "C"], stats: { pts: 11.0, reb: 8.0, ast: 1.3, stl: 0.7, blk: 0.7 }, years: "2000–2004", accolades: "Rasta-powered rebounding" },
  { id: "caron-butler-heat-2000s", name: "Caron Butler", franchiseId: "heat", decade: "2000s", positions: ["SF"], stats: { pts: 13.5, reb: 5.5, ast: 2.5, stl: 1.4, blk: 0.3 }, years: "2002–2004", accolades: "Tough Juice rookie years" },
  { id: "jason-williams-heat-2000s", name: "Jason Williams", franchiseId: "heat", decade: "2000s", positions: ["PG"], stats: { pts: 10.5, reb: 2.0, ast: 5.5, stl: 0.9, blk: 0.1 }, years: "2005–2008", accolades: "White Chocolate · champ ’06" },

  // ---------------- 2010s ----------------
  { id: "lebron-james-heat-2010s", name: "LeBron James", franchiseId: "heat", decade: "2010s", positions: ["SF", "PF"], stats: { pts: 27.0, reb: 7.5, ast: 7.0, stl: 1.7, blk: 0.8 }, years: "2010–2014", accolades: "2× MVP · 2× champ in Miami" },
  { id: "dwyane-wade-heat-2010s", name: "Dwyane Wade", franchiseId: "heat", decade: "2010s", positions: ["SG"], stats: { pts: 20.5, reb: 4.5, ast: 5.0, stl: 1.4, blk: 0.8 }, years: "2010–2016, 2018–2019", accolades: "3× champ · One Last Dance" },
  { id: "chris-bosh-heat-2010s", name: "Chris Bosh", franchiseId: "heat", decade: "2010s", positions: ["PF", "C"], stats: { pts: 18.0, reb: 7.5, ast: 2.0, stl: 0.8, blk: 1.0 }, years: "2010–2017", accolades: "2× champ · clutch rebound ’13" },
  { id: "goran-dragic-heat-2010s", name: "Goran Dragic", franchiseId: "heat", decade: "2010s", positions: ["PG"], stats: { pts: 16.5, reb: 3.5, ast: 5.0, stl: 1.0, blk: 0.2 }, years: "2015–2019", accolades: "All-Star ’18 Dragon" },
  { id: "hassan-whiteside-heat-2010s", name: "Hassan Whiteside", franchiseId: "heat", decade: "2010s", positions: ["C"], stats: { pts: 14.0, reb: 11.5, ast: 0.8, stl: 0.6, blk: 2.4 }, years: "2014–2019", accolades: "Blocks champ ’16 · board king" },
  { id: "mario-chalmers-heat-2010s", name: "Mario Chalmers", franchiseId: "heat", decade: "2010s", positions: ["PG"], stats: { pts: 9.0, reb: 2.5, ast: 4.0, stl: 1.5, blk: 0.2 }, years: "2010–2015", accolades: "2× champ starter" },
  { id: "ray-allen-heat-2010s", name: "Ray Allen", franchiseId: "heat", decade: "2010s", positions: ["SG"], stats: { pts: 10.0, reb: 2.8, ast: 2.0, stl: 0.8, blk: 0.2 }, years: "2012–2014", accolades: "The corner three · Game 6" },
  { id: "josh-richardson-heat-2010s", name: "Josh Richardson", franchiseId: "heat", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 12.5, reb: 3.5, ast: 3.0, stl: 1.2, blk: 0.7 }, years: "2015–2019", accolades: "Second-round steal" },
  { id: "dion-waiters-heat-2010s", name: "Dion Waiters", franchiseId: "heat", decade: "2010s", positions: ["SG"], stats: { pts: 14.5, reb: 3.0, ast: 3.5, stl: 0.9, blk: 0.4 }, years: "2016–2019", accolades: "Waiters Island heroics" },
  { id: "justise-winslow-heat-2010s", name: "Justise Winslow", franchiseId: "heat", decade: "2010s", positions: ["SF", "PG"], stats: { pts: 9.0, reb: 5.5, ast: 3.0, stl: 1.0, blk: 0.4 }, years: "2015–2019", accolades: "Point-forward defender" },

  // ---------------- 2020s ----------------
  { id: "jimmy-butler-heat-2020s", name: "Jimmy Butler", franchiseId: "heat", decade: "2020s", positions: ["SF", "SG"], stats: { pts: 21.5, reb: 6.0, ast: 5.5, stl: 1.7, blk: 0.4 }, years: "2020–2025", accolades: "2× Finals runs · Playoff Jimmy" },
  { id: "bam-adebayo-heat-2020s", name: "Bam Adebayo", franchiseId: "heat", decade: "2020s", positions: ["C", "PF"], stats: { pts: 19.0, reb: 9.5, ast: 3.8, stl: 1.1, blk: 1.0 }, years: "2020–2026", accolades: "All-Defense switch-everything" },
  { id: "tyler-herro-heat-2020s", name: "Tyler Herro", franchiseId: "heat", decade: "2020s", positions: ["SG", "PG"], stats: { pts: 20.5, reb: 5.0, ast: 4.5, stl: 0.8, blk: 0.2 }, years: "2020–2026", accolades: "6MOY ’22 · All-Star ’25" },
  { id: "kyle-lowry-heat-2020s", name: "Kyle Lowry", franchiseId: "heat", decade: "2020s", positions: ["PG"], stats: { pts: 11.5, reb: 4.0, ast: 6.0, stl: 1.0, blk: 0.3 }, years: "2021–2024", accolades: "Champion-grade vet" },
  { id: "duncan-robinson-heat-2020s", name: "Duncan Robinson", franchiseId: "heat", decade: "2020s", positions: ["SF", "SG"], stats: { pts: 12.5, reb: 2.5, ast: 2.0, stl: 0.6, blk: 0.2 }, years: "2020–2025", accolades: "Undrafted movement shooter" },
  { id: "caleb-martin-heat-2020s", name: "Caleb Martin", franchiseId: "heat", decade: "2020s", positions: ["SF"], stats: { pts: 9.5, reb: 4.5, ast: 1.5, stl: 1.0, blk: 0.4 }, years: "2021–2024", accolades: "ECF ’23 near-MVP" },
  { id: "terry-rozier-heat-2020s", name: "Terry Rozier", franchiseId: "heat", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 12.5, reb: 4.0, ast: 4.0, stl: 1.0, blk: 0.3 }, years: "2024–2026", accolades: "Veteran scoring guard" },
  { id: "andrew-wiggins-heat-2020s", name: "Andrew Wiggins", franchiseId: "heat", decade: "2020s", positions: ["SF"], stats: { pts: 18.0, reb: 4.5, ast: 2.5, stl: 1.0, blk: 0.7 }, years: "2025–2026", accolades: "Two-way wing addition" },
  { id: "norman-powell-heat-2020s", name: "Norman Powell", franchiseId: "heat", decade: "2020s", positions: ["SG"], stats: { pts: 23.0, reb: 3.5, ast: 2.5, stl: 1.1, blk: 0.3 }, years: "2025–2026", accolades: "Understand the grind" },
];
