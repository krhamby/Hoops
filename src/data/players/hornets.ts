import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1980s (expansion 1988) ----------------
  { id: "rex-chapman-hornets-1980s", name: "Rex Chapman", franchiseId: "hornets", decade: "1980s", positions: ["SG"], stats: { pts: 16.5, reb: 2.5, ast: 2.5, stl: 0.9, blk: 0.2 }, years: "1988–1989", accolades: "Inaugural-pick leaper" },
  { id: "kelly-tripucka-hornets-1980s", name: "Kelly Tripucka", franchiseId: "hornets", decade: "1980s", positions: ["SF"], stats: { pts: 22.5, reb: 5.0, ast: 3.5, stl: 1.0, blk: 0.2 }, years: "1988–1989", accolades: "Expansion scoring leader" },
  { id: "dell-curry-hornets-1980s", name: "Dell Curry", franchiseId: "hornets", decade: "1980s", positions: ["SG"], stats: { pts: 12.0, reb: 3.0, ast: 2.0, stl: 0.9, blk: 0.2 }, years: "1988–1989", accolades: "Original Hornet marksman" },
  { id: "muggsy-bogues-hornets-1980s", name: "Muggsy Bogues", franchiseId: "hornets", decade: "1980s", positions: ["PG"], stats: { pts: 6.5, reb: 2.5, ast: 8.0, stl: 1.5, blk: 0.0 }, years: "1988–1989", accolades: "5-3 fan favorite" },
  { id: "kurt-rambis-hornets-1980s", name: "Kurt Rambis", franchiseId: "hornets", decade: "1980s", positions: ["PF"], stats: { pts: 10.5, reb: 8.5, ast: 1.5, stl: 0.9, blk: 0.4 }, years: "1988–1989", accolades: "Showtime-bred grinder" },
  { id: "robert-reid-hornets-1980s", name: "Robert Reid", franchiseId: "hornets", decade: "1980s", positions: ["SF", "SG"], stats: { pts: 10.5, reb: 3.0, ast: 2.0, stl: 0.7, blk: 0.3 }, years: "1988–1989", accolades: "Veteran wing leader" },

  // ---------------- 1990s ----------------
  { id: "larry-johnson-hornets-1990s", name: "Larry Johnson", franchiseId: "hornets", decade: "1990s", positions: ["PF"], stats: { pts: 19.5, reb: 9.5, ast: 4.0, stl: 0.8, blk: 0.4 }, years: "1991–1996", accolades: "ROY ’92 · Grandmama" },
  { id: "alonzo-mourning-hornets-1990s", name: "Alonzo Mourning", franchiseId: "hornets", decade: "1990s", positions: ["C"], stats: { pts: 21.5, reb: 10.0, ast: 1.3, stl: 0.6, blk: 3.2 }, years: "1992–1995", accolades: "Series-winner vs Boston ’93" },
  { id: "glen-rice-hornets-1990s", name: "Glen Rice", franchiseId: "hornets", decade: "1990s", positions: ["SF", "SG"], stats: { pts: 23.5, reb: 4.5, ast: 2.0, stl: 1.1, blk: 0.3 }, years: "1995–1998", accolades: "ASG MVP ’97 · pure heat" },
  { id: "muggsy-bogues-hornets-1990s", name: "Muggsy Bogues", franchiseId: "hornets", decade: "1990s", positions: ["PG"], stats: { pts: 9.0, reb: 2.8, ast: 8.5, stl: 1.8, blk: 0.0 }, years: "1990–1997", accolades: "Assist-to-TO wizard" },
  { id: "dell-curry-hornets-1990s", name: "Dell Curry", franchiseId: "hornets", decade: "1990s", positions: ["SG"], stats: { pts: 13.5, reb: 3.0, ast: 2.0, stl: 1.0, blk: 0.2 }, years: "1990–1998", accolades: "6MOY ’94" },
  { id: "anthony-mason-hornets-1990s", name: "Anthony Mason", franchiseId: "hornets", decade: "1990s", positions: ["PF", "SF"], stats: { pts: 13.5, reb: 9.5, ast: 4.5, stl: 0.9, blk: 0.4 }, years: "1996–1999", accolades: "All-NBA 3rd team ’97" },
  { id: "kendall-gill-hornets-1990s", name: "Kendall Gill", franchiseId: "hornets", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 15.5, reb: 4.5, ast: 4.0, stl: 1.5, blk: 0.4 }, years: "1990–1993, 1995–1996", accolades: "Athletic two-way guard" },
  { id: "david-wesley-hornets-1990s", name: "David Wesley", franchiseId: "hornets", decade: "1990s", positions: ["PG", "SG"], stats: { pts: 13.5, reb: 2.5, ast: 5.5, stl: 1.3, blk: 0.1 }, years: "1997–1999", accolades: "Underrated lead guard" },
  { id: "vlade-divac-hornets-1990s", name: "Vlade Divac", franchiseId: "hornets", decade: "1990s", positions: ["C"], stats: { pts: 11.5, reb: 8.5, ast: 3.0, stl: 1.0, blk: 1.5 }, years: "1996–1998", accolades: "Passing-hub center" },
  { id: "rex-chapman-hornets-1990s", name: "Rex Chapman", franchiseId: "hornets", decade: "1990s", positions: ["SG"], stats: { pts: 16.5, reb: 3.0, ast: 3.0, stl: 0.8, blk: 0.2 }, years: "1990–1992", accolades: "Above-the-rim scorer" },

  // ---------------- 2000s (Hornets + Bobcats) ----------------
  { id: "baron-davis-hornets-2000s", name: "Baron Davis", franchiseId: "hornets", decade: "2000s", positions: ["PG"], stats: { pts: 17.5, reb: 4.0, ast: 7.5, stl: 2.0, blk: 0.4 }, years: "2000–2002", accolades: "All-Star ’02 · power PG" },
  { id: "jamal-mashburn-hornets-2000s", name: "Jamal Mashburn", franchiseId: "hornets", decade: "2000s", positions: ["SF"], stats: { pts: 21.5, reb: 6.5, ast: 5.0, stl: 1.0, blk: 0.2 }, years: "2000–2002", accolades: "All-NBA ’03 talent" },
  { id: "david-wesley-hornets-2000s", name: "David Wesley", franchiseId: "hornets", decade: "2000s", positions: ["SG", "PG"], stats: { pts: 15.5, reb: 3.0, ast: 4.5, stl: 1.2, blk: 0.1 }, years: "2000–2002", accolades: "Reliable veteran scorer" },
  { id: "pj-brown-hornets-2000s", name: "P.J. Brown", franchiseId: "hornets", decade: "2000s", positions: ["PF", "C"], stats: { pts: 9.5, reb: 8.5, ast: 1.5, stl: 0.8, blk: 1.0 }, years: "2000–2002", accolades: "All-Defense workhorse" },
  { id: "gerald-wallace-hornets-2000s", name: "Gerald Wallace", franchiseId: "hornets", decade: "2000s", positions: ["SF", "PF"], stats: { pts: 15.5, reb: 7.0, ast: 2.0, stl: 1.8, blk: 1.0 }, years: "2004–2009", accolades: "Crash · steals+blocks freak" },
  { id: "emeka-okafor-hornets-2000s", name: "Emeka Okafor", franchiseId: "hornets", decade: "2000s", positions: ["C", "PF"], stats: { pts: 14.0, reb: 10.5, ast: 1.0, stl: 0.7, blk: 1.9 }, years: "2004–2009", accolades: "ROY ’05 double-double" },
  { id: "raymond-felton-hornets-2000s", name: "Raymond Felton", franchiseId: "hornets", decade: "2000s", positions: ["PG"], stats: { pts: 13.0, reb: 3.5, ast: 6.5, stl: 1.2, blk: 0.2 }, years: "2005–2009", accolades: "Bobcats floor general" },
  { id: "jason-richardson-hornets-2000s", name: "Jason Richardson", franchiseId: "hornets", decade: "2000s", positions: ["SG"], stats: { pts: 21.0, reb: 5.0, ast: 3.0, stl: 1.2, blk: 0.5 }, years: "2007–2008", accolades: "Dunk-champ wing scorer" },

  // ---------------- 2010s ----------------
  { id: "kemba-walker-hornets-2010s", name: "Kemba Walker", franchiseId: "hornets", decade: "2010s", positions: ["PG"], stats: { pts: 19.5, reb: 3.8, ast: 5.5, stl: 1.3, blk: 0.3 }, years: "2011–2019", accolades: "3× All-Star · Cardiac Kemba" },
  { id: "al-jefferson-hornets-2010s", name: "Al Jefferson", franchiseId: "hornets", decade: "2010s", positions: ["C"], stats: { pts: 18.5, reb: 9.5, ast: 1.8, stl: 0.8, blk: 1.2 }, years: "2013–2016", accolades: "All-NBA ’14 post scorer" },
  { id: "nicolas-batum-hornets-2010s", name: "Nicolas Batum", franchiseId: "hornets", decade: "2010s", positions: ["SF", "SG"], stats: { pts: 12.5, reb: 5.5, ast: 5.0, stl: 1.0, blk: 0.5 }, years: "2015–2019", accolades: "Swiss-army wing" },
  { id: "gerald-wallace-hornets-2010s", name: "Gerald Wallace", franchiseId: "hornets", decade: "2010s", positions: ["SF"], stats: { pts: 17.0, reb: 9.5, ast: 2.5, stl: 1.6, blk: 1.0 }, years: "2010–2011", accolades: "Franchise’s first All-Star" },
  { id: "stephen-jackson-hornets-2010s", name: "Stephen Jackson", franchiseId: "hornets", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 19.5, reb: 4.5, ast: 3.5, stl: 1.4, blk: 0.5 }, years: "2010–2011", accolades: "Captain Jack scoring" },
  { id: "marvin-williams-hornets-2010s", name: "Marvin Williams", franchiseId: "hornets", decade: "2010s", positions: ["PF", "SF"], stats: { pts: 10.5, reb: 5.5, ast: 1.3, stl: 0.7, blk: 0.6 }, years: "2014–2019", accolades: "Stretch-four pro" },
  { id: "michael-kidd-gilchrist-hornets-2010s", name: "Michael Kidd-Gilchrist", franchiseId: "hornets", decade: "2010s", positions: ["SF"], stats: { pts: 9.0, reb: 6.0, ast: 1.3, stl: 0.7, blk: 0.7 }, years: "2012–2019", accolades: "Defense-first No. 2 pick" },
  { id: "jeremy-lamb-hornets-2010s", name: "Jeremy Lamb", franchiseId: "hornets", decade: "2010s", positions: ["SG"], stats: { pts: 11.5, reb: 4.0, ast: 1.8, stl: 0.8, blk: 0.4 }, years: "2015–2019", accolades: "Half-court game-winner" },
  { id: "dwight-howard-hornets-2010s", name: "Dwight Howard", franchiseId: "hornets", decade: "2010s", positions: ["C"], stats: { pts: 16.5, reb: 12.5, ast: 1.3, stl: 0.6, blk: 1.6 }, years: "2017–2018", accolades: "Vintage double-double year" },

  // ---------------- 2020s ----------------
  { id: "lamelo-ball-hornets-2020s", name: "LaMelo Ball", franchiseId: "hornets", decade: "2020s", positions: ["PG"], stats: { pts: 22.0, reb: 6.0, ast: 7.5, stl: 1.5, blk: 0.3 }, years: "2020–2026", accolades: "ROY ’21 · All-Star ’22" },
  { id: "miles-bridges-hornets-2020s", name: "Miles Bridges", franchiseId: "hornets", decade: "2020s", positions: ["PF", "SF"], stats: { pts: 19.0, reb: 7.0, ast: 3.5, stl: 0.9, blk: 0.6 }, years: "2020–2026", accolades: "High-flying forward" },
  { id: "terry-rozier-hornets-2020s", name: "Terry Rozier", franchiseId: "hornets", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 19.5, reb: 4.0, ast: 4.5, stl: 1.1, blk: 0.3 }, years: "2020–2024", accolades: "Scary Terry buckets" },
  { id: "gordon-hayward-hornets-2020s", name: "Gordon Hayward", franchiseId: "hornets", decade: "2020s", positions: ["SF"], stats: { pts: 17.5, reb: 4.5, ast: 4.0, stl: 1.0, blk: 0.3 }, years: "2020–2023", accolades: "Polished playmaking wing" },
  { id: "pj-washington-hornets-2020s", name: "P.J. Washington", franchiseId: "hornets", decade: "2020s", positions: ["PF"], stats: { pts: 13.5, reb: 5.5, ast: 2.3, stl: 0.9, blk: 0.9 }, years: "2020–2024", accolades: "Modern combo big" },
  { id: "brandon-miller-hornets-2020s", name: "Brandon Miller", franchiseId: "hornets", decade: "2020s", positions: ["SF", "SG"], stats: { pts: 18.5, reb: 4.5, ast: 3.0, stl: 0.9, blk: 0.6 }, years: "2023–2026", accolades: "All-Rookie smooth wing" },
  { id: "mark-williams-hornets-2020s", name: "Mark Williams", franchiseId: "hornets", decade: "2020s", positions: ["C"], stats: { pts: 11.5, reb: 8.5, ast: 1.2, stl: 0.7, blk: 1.1 }, years: "2022–2025", accolades: "Lob-threat rim guard" },
  { id: "kelly-oubre-jr-hornets-2020s", name: "Kelly Oubre Jr.", franchiseId: "hornets", decade: "2020s", positions: ["SF", "SG"], stats: { pts: 17.5, reb: 4.5, ast: 1.3, stl: 1.2, blk: 0.6 }, years: "2021–2023", accolades: "Wave-rider scorer" },
];
