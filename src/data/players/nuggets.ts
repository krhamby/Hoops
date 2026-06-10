import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1970s (incl. ABA years) ----------------
  { id: "david-thompson-nuggets-1970s", name: "David Thompson", franchiseId: "nuggets", decade: "1970s", positions: ["SG", "SF"], stats: { pts: 25.0, reb: 4.5, ast: 3.8, stl: 1.0, blk: 1.0 }, years: "1975–1979", accolades: "Skywalker · 73-point game" },
  { id: "dan-issel-nuggets-1970s", name: "Dan Issel", franchiseId: "nuggets", decade: "1970s", positions: ["C", "PF"], stats: { pts: 23.0, reb: 9.5, ast: 2.3, stl: 0.9, blk: 0.5 }, years: "1975–1979", accolades: "The Horse · ABA/NBA star" },
  { id: "bobby-jones-nuggets-1970s", name: "Bobby Jones", franchiseId: "nuggets", decade: "1970s", positions: ["PF", "SF"], stats: { pts: 14.5, reb: 8.5, ast: 3.5, stl: 1.9, blk: 1.9 }, years: "1974–1978", accolades: "Defensive saint of the ABA" },
  { id: "ralph-simpson-nuggets-1970s", name: "Ralph Simpson", franchiseId: "nuggets", decade: "1970s", positions: ["SG"], stats: { pts: 19.0, reb: 4.5, ast: 4.5, stl: 1.1, blk: 0.2 }, years: "1970–1976", accolades: "5× ABA All-Star" },
  { id: "byron-beck-nuggets-1970s", name: "Byron Beck", franchiseId: "nuggets", decade: "1970s", positions: ["C", "PF"], stats: { pts: 11.5, reb: 7.5, ast: 2.0, stl: 0.5, blk: 0.5 }, years: "1970–1977", accolades: "Original Nugget · retired number" },
  { id: "spencer-haywood-nuggets-1970s", name: "Spencer Haywood", franchiseId: "nuggets", decade: "1970s", positions: ["PF", "C"], stats: { pts: 30.0, reb: 19.5, ast: 2.3, stl: 1.0, blk: 1.5 }, years: "1969–1970", accolades: "ABA MVP + ROY same year" },
  { id: "mack-calvin-nuggets-1970s", name: "Mack Calvin", franchiseId: "nuggets", decade: "1970s", positions: ["PG"], stats: { pts: 16.5, reb: 2.5, ast: 6.5, stl: 1.3, blk: 0.1 }, years: "1974–1976", accolades: "ABA All-Star playmaker" },
  { id: "george-mcginnis-nuggets-1970s", name: "George McGinnis", franchiseId: "nuggets", decade: "1970s", positions: ["PF"], stats: { pts: 22.6, reb: 11.4, ast: 3.7, stl: 1.5, blk: 0.5 }, years: "1978–1979", accolades: "Powerful All-Star forward" },

  // ---------------- 1980s ----------------
  { id: "alex-english-nuggets-1980s", name: "Alex English", franchiseId: "nuggets", decade: "1980s", positions: ["SF"], stats: { pts: 26.0, reb: 5.5, ast: 4.3, stl: 1.0, blk: 0.5 }, years: "1980–1989", accolades: "8× All-Star · '80s scoring leader" },
  { id: "kiki-vandeweghe-nuggets-1980s", name: "Kiki Vandeweghe", franchiseId: "nuggets", decade: "1980s", positions: ["SF", "PF"], stats: { pts: 23.5, reb: 4.8, ast: 2.3, stl: 0.6, blk: 0.3 }, years: "1980–1984", accolades: "29.4 ppg in 1984" },
  { id: "dan-issel-nuggets-1980s", name: "Dan Issel", franchiseId: "nuggets", decade: "1980s", positions: ["C", "PF"], stats: { pts: 19.5, reb: 7.0, ast: 2.3, stl: 0.8, blk: 0.6 }, years: "1980–1985", accolades: "Hall of Fame scorer's last act" },
  { id: "fat-lever-nuggets-1980s", name: "Fat Lever", franchiseId: "nuggets", decade: "1980s", positions: ["PG", "SG"], stats: { pts: 17.0, reb: 7.5, ast: 7.0, stl: 2.2, blk: 0.3 }, years: "1984–1989", accolades: "Triple-double machine" },
  { id: "calvin-natt-nuggets-1980s", name: "Calvin Natt", franchiseId: "nuggets", decade: "1980s", positions: ["SF", "PF"], stats: { pts: 17.5, reb: 6.5, ast: 2.5, stl: 0.8, blk: 0.3 }, years: "1984–1989", accolades: "All-Star bruiser wing" },
  { id: "tr-dunn-nuggets-1980s", name: "T.R. Dunn", franchiseId: "nuggets", decade: "1980s", positions: ["SG", "SF"], stats: { pts: 6.5, reb: 5.0, ast: 2.0, stl: 1.6, blk: 0.3 }, years: "1980–1989", accolades: "Defensive specialist" },
  { id: "michael-adams-nuggets-1980s", name: "Michael Adams", franchiseId: "nuggets", decade: "1980s", positions: ["PG"], stats: { pts: 17.0, reb: 3.5, ast: 7.0, stl: 1.9, blk: 0.1 }, years: "1987–1989", accolades: "Deep-bombing mighty mite" },
  { id: "wayne-cooper-nuggets-1980s", name: "Wayne Cooper", franchiseId: "nuggets", decade: "1980s", positions: ["C"], stats: { pts: 9.0, reb: 7.5, ast: 1.0, stl: 0.4, blk: 2.0 }, years: "1984–1989", accolades: "Shot-blocking center" },

  // ---------------- 1990s ----------------
  { id: "dikembe-mutombo-nuggets-1990s", name: "Dikembe Mutombo", franchiseId: "nuggets", decade: "1990s", positions: ["C"], stats: { pts: 12.9, reb: 12.3, ast: 1.4, stl: 0.5, blk: 3.8 }, years: "1991–1996", accolades: "Finger wag · '94 upset of Sonics" },
  { id: "mahmoud-abdul-rauf-nuggets-1990s", name: "Mahmoud Abdul-Rauf", franchiseId: "nuggets", decade: "1990s", positions: ["PG"], stats: { pts: 16.0, reb: 1.9, ast: 4.5, stl: 1.0, blk: 0.1 }, years: "1990–1996", accolades: "Lights-out free-throw artist" },
  { id: "laphonso-ellis-nuggets-1990s", name: "LaPhonso Ellis", franchiseId: "nuggets", decade: "1990s", positions: ["PF"], stats: { pts: 14.5, reb: 7.5, ast: 1.7, stl: 0.7, blk: 1.0 }, years: "1992–1998", accolades: "Athletic All-Rookie forward" },
  { id: "antonio-mcdyess-nuggets-1990s", name: "Antonio McDyess", franchiseId: "nuggets", decade: "1990s", positions: ["PF"], stats: { pts: 18.5, reb: 9.0, ast: 1.5, stl: 0.8, blk: 1.7 }, years: "1995–1997", accolades: "Springy two-way big" },
  { id: "bryant-stith-nuggets-1990s", name: "Bryant Stith", franchiseId: "nuggets", decade: "1990s", positions: ["SG"], stats: { pts: 11.5, reb: 3.7, ast: 2.3, stl: 1.0, blk: 0.2 }, years: "1992–1999", accolades: "Steady two-guard" },
  { id: "dale-ellis-nuggets-1990s", name: "Dale Ellis", franchiseId: "nuggets", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 14.5, reb: 3.5, ast: 1.3, stl: 0.7, blk: 0.2 }, years: "1994–1997", accolades: "Elite catch-and-shoot vet" },
  { id: "nick-van-exel-nuggets-1990s", name: "Nick Van Exel", franchiseId: "nuggets", decade: "1990s", positions: ["PG"], stats: { pts: 16.5, reb: 3.5, ast: 8.0, stl: 1.0, blk: 0.1 }, years: "1998–1999", accolades: "Nick the Quick" },
  { id: "reggie-williams-nuggets-1990s", name: "Reggie Williams", franchiseId: "nuggets", decade: "1990s", positions: ["SF", "SG"], stats: { pts: 14.5, reb: 4.5, ast: 3.0, stl: 1.5, blk: 0.7 }, years: "1991–1996", accolades: "Versatile wing scorer" },

  // ---------------- 2000s ----------------
  { id: "carmelo-anthony-nuggets-2000s", name: "Carmelo Anthony", franchiseId: "nuggets", decade: "2000s", positions: ["SF"], stats: { pts: 24.4, reb: 6.2, ast: 3.1, stl: 1.1, blk: 0.4 }, years: "2003–2009", accolades: "Jab-step bucket machine" },
  { id: "allen-iverson-nuggets-2000s", name: "Allen Iverson", franchiseId: "nuggets", decade: "2000s", positions: ["PG", "SG"], stats: { pts: 25.6, reb: 3.1, ast: 7.1, stl: 1.9, blk: 0.2 }, years: "2006–2008", accolades: "The Answer in powder blue" },
  { id: "marcus-camby-nuggets-2000s", name: "Marcus Camby", franchiseId: "nuggets", decade: "2000s", positions: ["C"], stats: { pts: 10.5, reb: 11.5, ast: 2.5, stl: 1.1, blk: 3.0 }, years: "2002–2008", accolades: "2007 DPOY eraser" },
  { id: "andre-miller-nuggets-2000s", name: "Andre Miller", franchiseId: "nuggets", decade: "2000s", positions: ["PG"], stats: { pts: 13.8, reb: 4.3, ast: 8.5, stl: 1.3, blk: 0.1 }, years: "2003–2006", accolades: "Old-school post-up PG" },
  { id: "nene-nuggets-2000s", name: "Nene", franchiseId: "nuggets", decade: "2000s", positions: ["PF", "C"], stats: { pts: 12.5, reb: 6.8, ast: 1.8, stl: 1.0, blk: 1.0 }, years: "2002–2009", accolades: "Powerful Brazilian big" },
  { id: "kenyon-martin-nuggets-2000s", name: "Kenyon Martin", franchiseId: "nuggets", decade: "2000s", positions: ["PF"], stats: { pts: 12.5, reb: 7.0, ast: 1.9, stl: 1.1, blk: 1.0 }, years: "2004–2009", accolades: "K-Mart · tone-setting dunker" },
  { id: "jr-smith-nuggets-2000s", name: "J.R. Smith", franchiseId: "nuggets", decade: "2000s", positions: ["SG"], stats: { pts: 13.5, reb: 3.0, ast: 2.1, stl: 0.9, blk: 0.2 }, years: "2006–2009", accolades: "Heat-check artist" },
  { id: "chauncey-billups-nuggets-2000s", name: "Chauncey Billups", franchiseId: "nuggets", decade: "2000s", positions: ["PG"], stats: { pts: 17.7, reb: 3.0, ast: 6.4, stl: 1.2, blk: 0.2 }, years: "2008–2009", accolades: "Mr. Big Shot comes home" },

  // ---------------- 2010s ----------------
  { id: "nikola-jokic-nuggets-2010s", name: "Nikola Jokic", franchiseId: "nuggets", decade: "2010s", positions: ["C"], stats: { pts: 16.9, reb: 9.7, ast: 5.5, stl: 1.0, blk: 0.7 }, years: "2015–2019", accolades: "Second-round steal turned All-NBA" },
  { id: "jamal-murray-nuggets-2010s", name: "Jamal Murray", franchiseId: "nuggets", decade: "2010s", positions: ["PG", "SG"], stats: { pts: 15.5, reb: 3.5, ast: 4.0, stl: 0.9, blk: 0.3 }, years: "2016–2019", accolades: "Blue Arrow rising" },
  { id: "carmelo-anthony-nuggets-2010s", name: "Carmelo Anthony", franchiseId: "nuggets", decade: "2010s", positions: ["SF"], stats: { pts: 25.2, reb: 7.6, ast: 2.9, stl: 0.8, blk: 0.6 }, years: "2010–2011", accolades: "Final All-Star run in Denver" },
  { id: "ty-lawson-nuggets-2010s", name: "Ty Lawson", franchiseId: "nuggets", decade: "2010s", positions: ["PG"], stats: { pts: 14.5, reb: 2.9, ast: 7.0, stl: 1.2, blk: 0.1 }, years: "2010–2015", accolades: "Blur of the 57-win team" },
  { id: "danilo-gallinari-nuggets-2010s", name: "Danilo Gallinari", franchiseId: "nuggets", decade: "2010s", positions: ["SF", "PF"], stats: { pts: 16.0, reb: 4.9, ast: 2.2, stl: 0.8, blk: 0.4 }, years: "2011–2017", accolades: "Smooth Italian scorer" },
  { id: "kenneth-faried-nuggets-2010s", name: "Kenneth Faried", franchiseId: "nuggets", decade: "2010s", positions: ["PF"], stats: { pts: 11.5, reb: 8.5, ast: 1.0, stl: 0.8, blk: 0.9 }, years: "2011–2018", accolades: "The Manimal energy" },
  { id: "wilson-chandler-nuggets-2010s", name: "Wilson Chandler", franchiseId: "nuggets", decade: "2010s", positions: ["SF"], stats: { pts: 13.0, reb: 5.5, ast: 1.8, stl: 0.7, blk: 0.6 }, years: "2011–2018", accolades: "Do-everything wing" },
  { id: "andre-iguodala-nuggets-2010s", name: "Andre Iguodala", franchiseId: "nuggets", decade: "2010s", positions: ["SF", "SG"], stats: { pts: 13.0, reb: 5.3, ast: 5.4, stl: 1.7, blk: 0.7 }, years: "2012–2013", accolades: "All-Defense Swiss Army wing" },
  { id: "gary-harris-nuggets-2010s", name: "Gary Harris", franchiseId: "nuggets", decade: "2010s", positions: ["SG"], stats: { pts: 12.5, reb: 2.8, ast: 2.4, stl: 1.4, blk: 0.2 }, years: "2014–2019", accolades: "3-and-D backcourt fixture" },

  // ---------------- 2020s ----------------
  { id: "nikola-jokic-nuggets-2020s", name: "Nikola Jokic", franchiseId: "nuggets", decade: "2020s", positions: ["C"], stats: { pts: 27.5, reb: 12.5, ast: 9.0, stl: 1.4, blk: 0.8 }, years: "2020–2026", accolades: "3× MVP · 2023 Finals MVP" },
  { id: "jamal-murray-nuggets-2020s", name: "Jamal Murray", franchiseId: "nuggets", decade: "2020s", positions: ["PG"], stats: { pts: 20.5, reb: 4.0, ast: 5.5, stl: 1.0, blk: 0.3 }, years: "2020–2026", accolades: "Bubble legend · 2023 champ" },
  { id: "michael-porter-jr-nuggets-2020s", name: "Michael Porter Jr.", franchiseId: "nuggets", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 16.5, reb: 6.5, ast: 1.3, stl: 0.6, blk: 0.5 }, years: "2020–2025", accolades: "Effortless elevation shooter" },
  { id: "aaron-gordon-nuggets-2020s", name: "Aaron Gordon", franchiseId: "nuggets", decade: "2020s", positions: ["PF"], stats: { pts: 14.5, reb: 6.0, ast: 3.0, stl: 0.7, blk: 0.7 }, years: "2021–2026", accolades: "Perfect-fit dunker · 2023 champ" },
  { id: "kentavious-caldwell-pope-nuggets-2020s", name: "Kentavious Caldwell-Pope", franchiseId: "nuggets", decade: "2020s", positions: ["SG"], stats: { pts: 10.5, reb: 2.7, ast: 2.4, stl: 1.3, blk: 0.4 }, years: "2022–2024", accolades: "2× champ 3-and-D guard" },
  { id: "bruce-brown-nuggets-2020s", name: "Bruce Brown", franchiseId: "nuggets", decade: "2020s", positions: ["SG", "SF"], stats: { pts: 11.5, reb: 4.1, ast: 3.4, stl: 1.1, blk: 0.6 }, years: "2022–2023", accolades: "Title-run super-sub" },
  { id: "christian-braun-nuggets-2020s", name: "Christian Braun", franchiseId: "nuggets", decade: "2020s", positions: ["SG", "SF"], stats: { pts: 10.5, reb: 4.5, ast: 2.0, stl: 0.9, blk: 0.4 }, years: "2022–2026", accolades: "Rookie champ turned starter" },
  { id: "monte-morris-nuggets-2020s", name: "Monte Morris", franchiseId: "nuggets", decade: "2020s", positions: ["PG"], stats: { pts: 11.0, reb: 2.8, ast: 4.0, stl: 0.7, blk: 0.2 }, years: "2020–2022", accolades: "Turnover-proof backup" },
];
