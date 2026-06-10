import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1970s (Buffalo Braves) ----------------
  { id: "bob-mcadoo-clippers-1970s", name: "Bob McAdoo", franchiseId: "clippers", decade: "1970s", positions: ["C", "PF"], stats: { pts: 28.2, reb: 12.7, ast: 2.3, stl: 1.1, blk: 1.8 }, years: "1972–1976", accolades: "1975 MVP · 3× scoring champ" },
  { id: "randy-smith-clippers-1970s", name: "Randy Smith", franchiseId: "clippers", decade: "1970s", positions: ["SG", "PG"], stats: { pts: 18.5, reb: 4.0, ast: 5.0, stl: 1.8, blk: 0.1 }, years: "1971–1979", accolades: "1978 ASG MVP · iron man" },
  { id: "ernie-digregorio-clippers-1970s", name: "Ernie DiGregorio", franchiseId: "clippers", decade: "1970s", positions: ["PG"], stats: { pts: 12.5, reb: 2.5, ast: 6.5, stl: 0.6, blk: 0.1 }, years: "1973–1977", accolades: "1974 ROY · passing showman" },
  { id: "elmore-smith-clippers-1970s", name: "Elmore Smith", franchiseId: "clippers", decade: "1970s", positions: ["C"], stats: { pts: 15.5, reb: 13.5, ast: 1.3, stl: 0.7, blk: 3.0 }, years: "1971–1973", accolades: "Elmore the Rejector" },
  { id: "jim-mcmillian-clippers-1970s", name: "Jim McMillian", franchiseId: "clippers", decade: "1970s", positions: ["SF"], stats: { pts: 16.5, reb: 5.5, ast: 2.8, stl: 1.1, blk: 0.2 }, years: "1973–1976", accolades: "Smart two-way forward" },
  { id: "adrian-dantley-clippers-1970s", name: "Adrian Dantley", franchiseId: "clippers", decade: "1970s", positions: ["SF"], stats: { pts: 20.3, reb: 7.6, ast: 2.5, stl: 1.2, blk: 0.2 }, years: "1976–1977", accolades: "1977 ROY in Buffalo" },
  { id: "world-b-free-clippers-1970s", name: "World B. Free", franchiseId: "clippers", decade: "1970s", positions: ["SG"], stats: { pts: 29.4, reb: 3.5, ast: 4.1, stl: 1.2, blk: 0.4 }, years: "1978–1980", accolades: "28.8 ppg in San Diego" },
  { id: "swen-nater-clippers-1970s", name: "Swen Nater", franchiseId: "clippers", decade: "1970s", positions: ["C"], stats: { pts: 12.5, reb: 12.0, ast: 1.7, stl: 0.4, blk: 0.6 }, years: "1977–1979", accolades: "Board-crashing big" },

  // ---------------- 1980s (San Diego/LA) ----------------
  { id: "bill-walton-clippers-1980s", name: "Bill Walton", franchiseId: "clippers", decade: "1980s", positions: ["C"], stats: { pts: 12.5, reb: 8.5, ast: 3.0, stl: 0.7, blk: 1.8 }, years: "1980–1985", accolades: "Hall of Fame center, hurt years" },
  { id: "tom-chambers-clippers-1980s", name: "Tom Chambers", franchiseId: "clippers", decade: "1980s", positions: ["PF"], stats: { pts: 17.5, reb: 6.5, ast: 1.8, stl: 0.7, blk: 0.7 }, years: "1981–1983", accolades: "Young high-flying scorer" },
  { id: "norm-nixon-clippers-1980s", name: "Norm Nixon", franchiseId: "clippers", decade: "1980s", positions: ["PG"], stats: { pts: 16.0, reb: 2.6, ast: 8.5, stl: 1.2, blk: 0.1 }, years: "1983–1989", accolades: "All-Star ex-Laker general" },
  { id: "marques-johnson-clippers-1980s", name: "Marques Johnson", franchiseId: "clippers", decade: "1980s", positions: ["SF"], stats: { pts: 19.0, reb: 5.5, ast: 3.8, stl: 1.2, blk: 0.5 }, years: "1984–1987", accolades: "5× All-Star wing" },
  { id: "derek-smith-clippers-1980s", name: "Derek Smith", franchiseId: "clippers", decade: "1980s", positions: ["SG"], stats: { pts: 18.5, reb: 4.0, ast: 2.8, stl: 1.0, blk: 0.6 }, years: "1983–1986", accolades: "Breakout 22-ppg season" },
  { id: "danny-manning-clippers-1980s", name: "Danny Manning", franchiseId: "clippers", decade: "1980s", positions: ["PF", "SF"], stats: { pts: 16.5, reb: 6.5, ast: 2.8, stl: 1.5, blk: 0.5 }, years: "1988–1989", accolades: "No. 1 pick cornerstone" },
  { id: "ken-norman-clippers-1980s", name: "Ken Norman", franchiseId: "clippers", decade: "1980s", positions: ["SF", "PF"], stats: { pts: 15.5, reb: 7.5, ast: 2.5, stl: 0.9, blk: 0.6 }, years: "1987–1989", accolades: "The Snake · physical wing" },
  { id: "benoit-benjamin-clippers-1980s", name: "Benoit Benjamin", franchiseId: "clippers", decade: "1980s", positions: ["C"], stats: { pts: 12.5, reb: 8.5, ast: 1.9, stl: 0.6, blk: 2.6 }, years: "1985–1989", accolades: "Shot-blocking 7-footer" },

  // ---------------- 1990s ----------------
  { id: "danny-manning-clippers-1990s", name: "Danny Manning", franchiseId: "clippers", decade: "1990s", positions: ["PF", "SF"], stats: { pts: 20.5, reb: 6.5, ast: 3.5, stl: 1.4, blk: 0.5 }, years: "1990–1994", accolades: "2× All-Star · playoff trips" },
  { id: "ron-harper-clippers-1990s", name: "Ron Harper", franchiseId: "clippers", decade: "1990s", positions: ["SG", "PG"], stats: { pts: 18.5, reb: 4.5, ast: 4.5, stl: 1.9, blk: 0.7 }, years: "1990–1994", accolades: "Athletic two-way guard" },
  { id: "mark-jackson-clippers-1990s", name: "Mark Jackson", franchiseId: "clippers", decade: "1990s", positions: ["PG"], stats: { pts: 11.5, reb: 4.0, ast: 8.5, stl: 1.1, blk: 0.1 }, years: "1992–1994", accolades: "Post-up point maestro" },
  { id: "loy-vaught-clippers-1990s", name: "Loy Vaught", franchiseId: "clippers", decade: "1990s", positions: ["PF"], stats: { pts: 12.5, reb: 8.5, ast: 1.2, stl: 0.8, blk: 0.4 }, years: "1990–1998", accolades: "Steady double-double forward" },
  { id: "lamond-murray-clippers-1990s", name: "Lamond Murray", franchiseId: "clippers", decade: "1990s", positions: ["SF"], stats: { pts: 13.5, reb: 4.5, ast: 1.8, stl: 1.0, blk: 0.5 }, years: "1994–1999", accolades: "Lottery-pick wing scorer" },
  { id: "eric-piatkowski-clippers-1990s", name: "Eric Piatkowski", franchiseId: "clippers", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 9.5, reb: 2.8, ast: 1.4, stl: 0.7, blk: 0.2 }, years: "1994–1999", accolades: "Polish Rifle sharpshooter" },
  { id: "maurice-taylor-clippers-1990s", name: "Maurice Taylor", franchiseId: "clippers", decade: "1990s", positions: ["PF"], stats: { pts: 13.5, reb: 4.7, ast: 1.2, stl: 0.6, blk: 0.5 }, years: "1997–1999", accolades: "Skilled young post scorer" },
  { id: "pooh-richardson-clippers-1990s", name: "Pooh Richardson", franchiseId: "clippers", decade: "1990s", positions: ["PG"], stats: { pts: 10.5, reb: 3.2, ast: 5.5, stl: 1.1, blk: 0.1 }, years: "1994–1998", accolades: "Veteran lead guard" },

  // ---------------- 2000s ----------------
  { id: "elton-brand-clippers-2000s", name: "Elton Brand", franchiseId: "clippers", decade: "2000s", positions: ["PF"], stats: { pts: 20.3, reb: 10.0, ast: 2.5, stl: 1.0, blk: 2.1 }, years: "2001–2008", accolades: "2× All-Star · 2006 playoff run" },
  { id: "corey-maggette-clippers-2000s", name: "Corey Maggette", franchiseId: "clippers", decade: "2000s", positions: ["SF", "SG"], stats: { pts: 17.5, reb: 5.3, ast: 2.6, stl: 0.9, blk: 0.3 }, years: "2000–2008", accolades: "Free-throw-drawing machine" },
  { id: "lamar-odom-clippers-2000s", name: "Lamar Odom", franchiseId: "clippers", decade: "2000s", positions: ["SF", "PF"], stats: { pts: 15.5, reb: 7.5, ast: 4.8, stl: 1.0, blk: 0.8 }, years: "2000–2003", accolades: "Jumbo playmaking forward" },
  { id: "sam-cassell-clippers-2000s", name: "Sam Cassell", franchiseId: "clippers", decade: "2000s", positions: ["PG"], stats: { pts: 16.0, reb: 3.5, ast: 6.5, stl: 1.0, blk: 0.2 }, years: "2005–2008", accolades: "Vet brain of '06 playoff team" },
  { id: "chris-kaman-clippers-2000s", name: "Chris Kaman", franchiseId: "clippers", decade: "2000s", positions: ["C"], stats: { pts: 12.5, reb: 8.5, ast: 1.4, stl: 0.5, blk: 1.5 }, years: "2003–2009", accolades: "Skilled future All-Star center" },
  { id: "cuttino-mobley-clippers-2000s", name: "Cuttino Mobley", franchiseId: "clippers", decade: "2000s", positions: ["SG"], stats: { pts: 13.5, reb: 3.5, ast: 2.5, stl: 1.1, blk: 0.4 }, years: "2005–2008", accolades: "Veteran scoring guard" },
  { id: "quentin-richardson-clippers-2000s", name: "Quentin Richardson", franchiseId: "clippers", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 13.0, reb: 5.0, ast: 1.7, stl: 0.9, blk: 0.2 }, years: "2000–2004", accolades: "Head-tap three-point threat" },
  { id: "baron-davis-clippers-2000s", name: "Baron Davis", franchiseId: "clippers", decade: "2000s", positions: ["PG"], stats: { pts: 15.0, reb: 3.7, ast: 7.7, stl: 1.7, blk: 0.5 }, years: "2008–2009", accolades: "Hometown star signing" },
  { id: "darius-miles-clippers-2000s", name: "Darius Miles", franchiseId: "clippers", decade: "2000s", positions: ["SF"], stats: { pts: 9.5, reb: 5.5, ast: 1.5, stl: 0.8, blk: 1.2 }, years: "2000–2002", accolades: "Prep-to-pro highlight reel" },

  // ---------------- 2010s ----------------
  { id: "chris-paul-clippers-2010s", name: "Chris Paul", franchiseId: "clippers", decade: "2010s", positions: ["PG"], stats: { pts: 18.8, reb: 4.1, ast: 9.8, stl: 2.2, blk: 0.1 }, years: "2011–2017", accolades: "Lob City conductor · Point God" },
  { id: "blake-griffin-clippers-2010s", name: "Blake Griffin", franchiseId: "clippers", decade: "2010s", positions: ["PF"], stats: { pts: 21.5, reb: 9.0, ast: 4.2, stl: 1.0, blk: 0.5 }, years: "2010–2018", accolades: "2011 ROY · Mozgov poster" },
  { id: "deandre-jordan-clippers-2010s", name: "DeAndre Jordan", franchiseId: "clippers", decade: "2010s", positions: ["C"], stats: { pts: 10.5, reb: 13.0, ast: 0.9, stl: 0.6, blk: 1.9 }, years: "2010–2018", accolades: "Lob City finisher · All-NBA 1st" },
  { id: "jamal-crawford-clippers-2010s", name: "Jamal Crawford", franchiseId: "clippers", decade: "2010s", positions: ["SG", "PG"], stats: { pts: 15.5, reb: 1.9, ast: 2.9, stl: 0.8, blk: 0.2 }, years: "2012–2017", accolades: "2× Sixth Man as a Clipper" },
  { id: "jj-redick-clippers-2010s", name: "JJ Redick", franchiseId: "clippers", decade: "2010s", positions: ["SG"], stats: { pts: 15.8, reb: 2.1, ast: 1.8, stl: 0.6, blk: 0.1 }, years: "2013–2017", accolades: "Movement-shooting metronome" },
  { id: "lou-williams-clippers-2010s", name: "Lou Williams", franchiseId: "clippers", decade: "2010s", positions: ["SG", "PG"], stats: { pts: 21.0, reb: 2.9, ast: 5.3, stl: 0.8, blk: 0.2 }, years: "2017–2019", accolades: "Sixth Man of the Year ×2 here" },
  { id: "kawhi-leonard-clippers-2010s", name: "Kawhi Leonard", franchiseId: "clippers", decade: "2010s", positions: ["SF"], stats: { pts: 27.1, reb: 7.1, ast: 4.9, stl: 1.8, blk: 0.6 }, years: "2019–2020", accolades: "Two-way superstar arrival" },
  { id: "paul-george-clippers-2010s", name: "Paul George", franchiseId: "clippers", decade: "2010s", positions: ["SF", "SG"], stats: { pts: 21.5, reb: 5.7, ast: 3.9, stl: 1.4, blk: 0.4 }, years: "2019–2020", accolades: "PG-13 comes home" },
  { id: "matt-barnes-clippers-2010s", name: "Matt Barnes", franchiseId: "clippers", decade: "2010s", positions: ["SF"], stats: { pts: 9.5, reb: 4.5, ast: 1.9, stl: 1.0, blk: 0.5 }, years: "2012–2015", accolades: "Tone-setting role wing" },

  // ---------------- 2020s ----------------
  { id: "kawhi-leonard-clippers-2020s", name: "Kawhi Leonard", franchiseId: "clippers", decade: "2020s", positions: ["SF"], stats: { pts: 24.5, reb: 6.3, ast: 4.5, stl: 1.6, blk: 0.6 }, years: "2020–2026", accolades: "The Klaw · clinical two-way star" },
  { id: "paul-george-clippers-2020s", name: "Paul George", franchiseId: "clippers", decade: "2020s", positions: ["SF", "SG"], stats: { pts: 23.0, reb: 6.0, ast: 4.8, stl: 1.5, blk: 0.4 }, years: "2020–2024", accolades: "2021 WCF run leader" },
  { id: "james-harden-clippers-2020s", name: "James Harden", franchiseId: "clippers", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 19.5, reb: 5.5, ast: 8.0, stl: 1.2, blk: 0.6 }, years: "2023–2026", accolades: "Crafty vet floor-raiser" },
  { id: "norman-powell-clippers-2020s", name: "Norman Powell", franchiseId: "clippers", decade: "2020s", positions: ["SG"], stats: { pts: 18.5, reb: 3.0, ast: 1.9, stl: 1.0, blk: 0.3 }, years: "2022–2025", accolades: "Understand the Grind scorer" },
  { id: "ivica-zubac-clippers-2020s", name: "Ivica Zubac", franchiseId: "clippers", decade: "2020s", positions: ["C"], stats: { pts: 12.5, reb: 10.0, ast: 1.8, stl: 0.4, blk: 1.2 }, years: "2020–2026", accolades: "Dependable two-way anchor" },
  { id: "reggie-jackson-clippers-2020s", name: "Reggie Jackson", franchiseId: "clippers", decade: "2020s", positions: ["PG"], stats: { pts: 14.0, reb: 3.2, ast: 4.2, stl: 0.7, blk: 0.2 }, years: "2020–2023", accolades: "Mr. June of the 2021 run" },
  { id: "marcus-morris-clippers-2020s", name: "Marcus Morris", franchiseId: "clippers", decade: "2020s", positions: ["PF"], stats: { pts: 13.5, reb: 4.4, ast: 1.6, stl: 0.6, blk: 0.3 }, years: "2020–2023", accolades: "Tough-shot forward" },
  { id: "terance-mann-clippers-2020s", name: "Terance Mann", franchiseId: "clippers", decade: "2020s", positions: ["SG", "SF"], stats: { pts: 9.5, reb: 3.8, ast: 2.0, stl: 0.7, blk: 0.3 }, years: "2020–2025", accolades: "39-point closeout legend" },
];
