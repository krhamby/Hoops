import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1960s ----------------
  { id: "jerry-sloan-bulls-1960s", name: "Jerry Sloan", franchiseId: "bulls", decade: "1960s", positions: ["SG", "SF"], stats: { pts: 16.0, reb: 8.0, ast: 2.5, stl: 2.0, blk: 0.4 }, years: "1966–1969", accolades: "Original Bull · All-Star" },
  { id: "bob-boozer-bulls-1960s", name: "Bob Boozer", franchiseId: "bulls", decade: "1960s", positions: ["PF", "SF"], stats: { pts: 20.0, reb: 8.5, ast: 1.8, stl: 0.6, blk: 0.3 }, years: "1966–1969", accolades: "All-Star ’68" },
  { id: "guy-rodgers-bulls-1960s", name: "Guy Rodgers", franchiseId: "bulls", decade: "1960s", positions: ["PG"], stats: { pts: 18.0, reb: 4.0, ast: 11.2, stl: 1.0, blk: 0.1 }, years: "1966–1967", accolades: "Assist champ ’67" },
  { id: "clem-haskins-bulls-1960s", name: "Clem Haskins", franchiseId: "bulls", decade: "1960s", positions: ["PG", "SG"], stats: { pts: 13.5, reb: 4.0, ast: 4.5, stl: 0.9, blk: 0.1 }, years: "1967–1969", accolades: "Smooth combo guard" },
  { id: "bob-love-bulls-1960s", name: "Bob Love", franchiseId: "bulls", decade: "1960s", positions: ["SF", "PF"], stats: { pts: 12.5, reb: 5.5, ast: 1.2, stl: 0.7, blk: 0.3 }, years: "1968–1969", accolades: "Butterbean warming up" },
  { id: "tom-boerwinkle-bulls-1960s", name: "Tom Boerwinkle", franchiseId: "bulls", decade: "1960s", positions: ["C"], stats: { pts: 9.5, reb: 10.5, ast: 2.0, stl: 0.4, blk: 0.5 }, years: "1968–1969", accolades: "Wide-body passer" },
  { id: "flynn-robinson-bulls-1960s", name: "Flynn Robinson", franchiseId: "bulls", decade: "1960s", positions: ["PG", "SG"], stats: { pts: 16.0, reb: 3.0, ast: 4.0, stl: 0.8, blk: 0.1 }, years: "1966–1968", accolades: "Instant offense guard" },

  // ---------------- 1970s ----------------
  { id: "bob-love-bulls-1970s", name: "Bob Love", franchiseId: "bulls", decade: "1970s", positions: ["SF", "PF"], stats: { pts: 23.0, reb: 6.5, ast: 2.0, stl: 0.9, blk: 0.4 }, years: "1970–1976", accolades: "3× All-Star · Butterbean" },
  { id: "chet-walker-bulls-1970s", name: "Chet Walker", franchiseId: "bulls", decade: "1970s", positions: ["SF"], stats: { pts: 20.5, reb: 6.0, ast: 2.5, stl: 0.9, blk: 0.2 }, years: "1970–1975", accolades: "4× All-Star as a Bull" },
  { id: "jerry-sloan-bulls-1970s", name: "Jerry Sloan", franchiseId: "bulls", decade: "1970s", positions: ["SG", "SF"], stats: { pts: 15.5, reb: 7.5, ast: 2.5, stl: 2.2, blk: 0.4 }, years: "1970–1976", accolades: "All-Defense original Bull" },
  { id: "norm-van-lier-bulls-1970s", name: "Norm Van Lier", franchiseId: "bulls", decade: "1970s", positions: ["PG"], stats: { pts: 12.5, reb: 4.5, ast: 6.5, stl: 1.8, blk: 0.2 }, years: "1971–1978", accolades: "Stormin’ Norman · All-Defense" },
  { id: "artis-gilmore-bulls-1970s", name: "Artis Gilmore", franchiseId: "bulls", decade: "1970s", positions: ["C"], stats: { pts: 20.5, reb: 12.5, ast: 2.5, stl: 0.5, blk: 2.2 }, years: "1976–1979", accolades: "The A-Train" },
  { id: "tom-boerwinkle-bulls-1970s", name: "Tom Boerwinkle", franchiseId: "bulls", decade: "1970s", positions: ["C"], stats: { pts: 8.5, reb: 9.0, ast: 3.5, stl: 0.4, blk: 0.5 }, years: "1970–1978", accolades: "Elbow-pass hub" },
  { id: "mickey-johnson-bulls-1970s", name: "Mickey Johnson", franchiseId: "bulls", decade: "1970s", positions: ["PF", "SF"], stats: { pts: 15.5, reb: 8.5, ast: 2.7, stl: 1.1, blk: 0.7 }, years: "1974–1979", accolades: "Do-everything forward" },
  { id: "reggie-theus-bulls-1970s", name: "Reggie Theus", franchiseId: "bulls", decade: "1970s", positions: ["SG", "PG"], stats: { pts: 18.0, reb: 3.5, ast: 5.0, stl: 1.0, blk: 0.2 }, years: "1978–1979", accolades: "Rookie flash" },

  // ---------------- 1980s ----------------
  { id: "michael-jordan-bulls-1980s", name: "Michael Jordan", franchiseId: "bulls", decade: "1980s", positions: ["SG"], stats: { pts: 32.5, reb: 6.0, ast: 5.5, stl: 2.7, blk: 1.0 }, years: "1984–1989", accolades: "MVP ’88 · scoring machine" },
  { id: "scottie-pippen-bulls-1980s", name: "Scottie Pippen", franchiseId: "bulls", decade: "1980s", positions: ["SF"], stats: { pts: 11.5, reb: 5.0, ast: 3.0, stl: 1.6, blk: 0.8 }, years: "1987–1989", accolades: "Rising do-it-all wing" },
  { id: "reggie-theus-bulls-1980s", name: "Reggie Theus", franchiseId: "bulls", decade: "1980s", positions: ["SG", "PG"], stats: { pts: 21.5, reb: 3.5, ast: 6.0, stl: 1.2, blk: 0.2 }, years: "1980–1984", accolades: "2× All-Star showman" },
  { id: "artis-gilmore-bulls-1980s", name: "Artis Gilmore", franchiseId: "bulls", decade: "1980s", positions: ["C"], stats: { pts: 18.5, reb: 10.0, ast: 2.2, stl: 0.5, blk: 2.2 }, years: "1980–1982", accolades: "FG% champ" },
  { id: "orlando-woolridge-bulls-1980s", name: "Orlando Woolridge", franchiseId: "bulls", decade: "1980s", positions: ["SF", "PF"], stats: { pts: 17.5, reb: 4.5, ast: 1.8, stl: 0.7, blk: 0.7 }, years: "1981–1986", accolades: "Rim-rocking forward" },
  { id: "horace-grant-bulls-1980s", name: "Horace Grant", franchiseId: "bulls", decade: "1980s", positions: ["PF"], stats: { pts: 10.0, reb: 7.5, ast: 1.8, stl: 1.0, blk: 0.8 }, years: "1987–1989", accolades: "Goggled glass-cleaner" },
  { id: "charles-oakley-bulls-1980s", name: "Charles Oakley", franchiseId: "bulls", decade: "1980s", positions: ["PF"], stats: { pts: 12.0, reb: 12.0, ast: 2.5, stl: 0.9, blk: 0.4 }, years: "1985–1988", accolades: "Rebound leader ’87" },
  { id: "dave-corzine-bulls-1980s", name: "Dave Corzine", franchiseId: "bulls", decade: "1980s", positions: ["C"], stats: { pts: 9.5, reb: 6.0, ast: 1.8, stl: 0.4, blk: 0.8 }, years: "1982–1989", accolades: "Steady pivot" },
  { id: "john-paxson-bulls-1980s", name: "John Paxson", franchiseId: "bulls", decade: "1980s", positions: ["PG", "SG"], stats: { pts: 6.5, reb: 1.0, ast: 3.5, stl: 0.5, blk: 0.1 }, years: "1985–1989", accolades: "Spot-up specialist" },

  // ---------------- 1990s ----------------
  { id: "michael-jordan-bulls-1990s", name: "Michael Jordan", franchiseId: "bulls", decade: "1990s", positions: ["SG"], stats: { pts: 30.5, reb: 6.3, ast: 5.5, stl: 2.4, blk: 0.9 }, years: "1990–1993, 1995–1998", accolades: "6× champ · 6× FMVP" },
  { id: "scottie-pippen-bulls-1990s", name: "Scottie Pippen", franchiseId: "bulls", decade: "1990s", positions: ["SF", "PG"], stats: { pts: 19.5, reb: 7.0, ast: 5.5, stl: 2.1, blk: 0.9 }, years: "1990–1998", accolades: "6× champ · all-time defender" },
  { id: "dennis-rodman-bulls-1990s", name: "Dennis Rodman", franchiseId: "bulls", decade: "1990s", positions: ["PF"], stats: { pts: 5.5, reb: 15.5, ast: 2.8, stl: 0.6, blk: 0.3 }, years: "1995–1998", accolades: "3× champ · rebound king" },
  { id: "horace-grant-bulls-1990s", name: "Horace Grant", franchiseId: "bulls", decade: "1990s", positions: ["PF"], stats: { pts: 13.5, reb: 9.0, ast: 2.5, stl: 1.1, blk: 1.0 }, years: "1990–1994", accolades: "3× champ forward" },
  { id: "toni-kukoc-bulls-1990s", name: "Toni Kukoc", franchiseId: "bulls", decade: "1990s", positions: ["SF", "PF"], stats: { pts: 13.5, reb: 4.5, ast: 4.0, stl: 1.0, blk: 0.4 }, years: "1993–1999", accolades: "6MOY ’96 · 3× champ" },
  { id: "bj-armstrong-bulls-1990s", name: "B.J. Armstrong", franchiseId: "bulls", decade: "1990s", positions: ["PG"], stats: { pts: 10.5, reb: 2.0, ast: 3.5, stl: 0.8, blk: 0.1 }, years: "1990–1995", accolades: "All-Star ’94 · 3× champ" },
  { id: "steve-kerr-bulls-1990s", name: "Steve Kerr", franchiseId: "bulls", decade: "1990s", positions: ["PG", "SG"], stats: { pts: 7.5, reb: 1.5, ast: 2.0, stl: 0.6, blk: 0.0 }, years: "1993–1998", accolades: "’97 Finals dagger" },
  { id: "ron-harper-bulls-1990s", name: "Ron Harper", franchiseId: "bulls", decade: "1990s", positions: ["PG", "SG"], stats: { pts: 7.5, reb: 3.0, ast: 3.0, stl: 1.2, blk: 0.4 }, years: "1994–1999", accolades: "3× champ defender" },
  { id: "luc-longley-bulls-1990s", name: "Luc Longley", franchiseId: "bulls", decade: "1990s", positions: ["C"], stats: { pts: 9.0, reb: 5.5, ast: 2.0, stl: 0.4, blk: 1.0 }, years: "1994–1998", accolades: "3× champ center" },
  { id: "john-paxson-bulls-1990s", name: "John Paxson", franchiseId: "bulls", decade: "1990s", positions: ["PG"], stats: { pts: 7.5, reb: 1.5, ast: 3.5, stl: 0.5, blk: 0.1 }, years: "1990–1994", accolades: "’93 Finals game-winner" },

  // ---------------- 2000s ----------------
  { id: "derrick-rose-bulls-2000s", name: "Derrick Rose", franchiseId: "bulls", decade: "2000s", positions: ["PG"], stats: { pts: 16.8, reb: 3.9, ast: 6.3, stl: 0.8, blk: 0.2 }, years: "2008–2009", accolades: "ROY ’09" },
  { id: "elton-brand-bulls-2000s", name: "Elton Brand", franchiseId: "bulls", decade: "2000s", positions: ["PF"], stats: { pts: 20.0, reb: 10.0, ast: 2.5, stl: 0.9, blk: 1.6 }, years: "2000–2001", accolades: "Co-ROY 20-10 big" },
  { id: "ben-gordon-bulls-2000s", name: "Ben Gordon", franchiseId: "bulls", decade: "2000s", positions: ["SG"], stats: { pts: 18.5, reb: 3.0, ast: 3.0, stl: 0.8, blk: 0.2 }, years: "2004–2009", accolades: "6MOY ’05 · clutch gene" },
  { id: "kirk-hinrich-bulls-2000s", name: "Kirk Hinrich", franchiseId: "bulls", decade: "2000s", positions: ["PG", "SG"], stats: { pts: 13.5, reb: 3.5, ast: 6.0, stl: 1.2, blk: 0.3 }, years: "2003–2009", accolades: "Captain Kirk · All-Defense" },
  { id: "luol-deng-bulls-2000s", name: "Luol Deng", franchiseId: "bulls", decade: "2000s", positions: ["SF"], stats: { pts: 15.5, reb: 6.5, ast: 2.0, stl: 1.0, blk: 0.6 }, years: "2004–2009", accolades: "Two-way workhorse" },
  { id: "joakim-noah-bulls-2000s", name: "Joakim Noah", franchiseId: "bulls", decade: "2000s", positions: ["C"], stats: { pts: 8.5, reb: 8.5, ast: 1.5, stl: 0.7, blk: 1.3 }, years: "2007–2009", accolades: "Motor and mayhem" },
  { id: "ben-wallace-bulls-2000s", name: "Ben Wallace", franchiseId: "bulls", decade: "2000s", positions: ["C", "PF"], stats: { pts: 6.0, reb: 10.0, ast: 2.0, stl: 1.3, blk: 2.0 }, years: "2006–2008", accolades: "4× DPOY pedigree" },
  { id: "eddy-curry-bulls-2000s", name: "Eddy Curry", franchiseId: "bulls", decade: "2000s", positions: ["C"], stats: { pts: 12.5, reb: 5.5, ast: 0.7, stl: 0.4, blk: 0.9 }, years: "2001–2005", accolades: "Soft-touch giant" },

  // ---------------- 2010s ----------------
  { id: "derrick-rose-bulls-2010s", name: "Derrick Rose", franchiseId: "bulls", decade: "2010s", positions: ["PG"], stats: { pts: 19.5, reb: 3.5, ast: 6.5, stl: 0.9, blk: 0.3 }, years: "2010–2016", accolades: "MVP ’11 · youngest ever" },
  { id: "jimmy-butler-bulls-2010s", name: "Jimmy Butler", franchiseId: "bulls", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 15.5, reb: 4.8, ast: 3.3, stl: 1.6, blk: 0.5 }, years: "2011–2017", accolades: "MIP ’15 · 3× All-Star" },
  { id: "joakim-noah-bulls-2010s", name: "Joakim Noah", franchiseId: "bulls", decade: "2010s", positions: ["C"], stats: { pts: 10.0, reb: 10.5, ast: 3.5, stl: 0.9, blk: 1.4 }, years: "2010–2016", accolades: "DPOY ’14" },
  { id: "luol-deng-bulls-2010s", name: "Luol Deng", franchiseId: "bulls", decade: "2010s", positions: ["SF"], stats: { pts: 16.5, reb: 6.0, ast: 2.7, stl: 1.1, blk: 0.5 }, years: "2010–2014", accolades: "2× All-Star ironman" },
  { id: "pau-gasol-bulls-2010s", name: "Pau Gasol", franchiseId: "bulls", decade: "2010s", positions: ["PF", "C"], stats: { pts: 17.5, reb: 11.0, ast: 3.5, stl: 0.4, blk: 1.9 }, years: "2014–2016", accolades: "All-Star craft" },
  { id: "zach-lavine-bulls-2010s", name: "Zach LaVine", franchiseId: "bulls", decade: "2010s", positions: ["SG"], stats: { pts: 21.5, reb: 4.5, ast: 4.0, stl: 1.0, blk: 0.4 }, years: "2017–2019", accolades: "2× dunk champ scorer" },
  { id: "taj-gibson-bulls-2010s", name: "Taj Gibson", franchiseId: "bulls", decade: "2010s", positions: ["PF"], stats: { pts: 9.5, reb: 6.5, ast: 1.2, stl: 0.6, blk: 1.1 }, years: "2010–2017", accolades: "Bench bully" },
  { id: "carlos-boozer-bulls-2010s", name: "Carlos Boozer", franchiseId: "bulls", decade: "2010s", positions: ["PF"], stats: { pts: 15.5, reb: 8.5, ast: 2.2, stl: 0.8, blk: 0.3 }, years: "2010–2014", accolades: "Post-scoring vet" },
  { id: "lauri-markkanen-bulls-2010s", name: "Lauri Markkanen", franchiseId: "bulls", decade: "2010s", positions: ["PF", "C"], stats: { pts: 16.5, reb: 8.0, ast: 1.4, stl: 0.7, blk: 0.6 }, years: "2017–2019", accolades: "The Finnisher" },

  // ---------------- 2020s ----------------
  { id: "zach-lavine-bulls-2020s", name: "Zach LaVine", franchiseId: "bulls", decade: "2020s", positions: ["SG"], stats: { pts: 24.0, reb: 4.7, ast: 4.3, stl: 0.9, blk: 0.4 }, years: "2020–2025", accolades: "2× All-Star · Olympian" },
  { id: "demar-derozan-bulls-2020s", name: "DeMar DeRozan", franchiseId: "bulls", decade: "2020s", positions: ["SF", "SG"], stats: { pts: 25.5, reb: 4.8, ast: 5.0, stl: 1.0, blk: 0.4 }, years: "2021–2024", accolades: "All-NBA · clutch king" },
  { id: "nikola-vucevic-bulls-2020s", name: "Nikola Vucevic", franchiseId: "bulls", decade: "2020s", positions: ["C"], stats: { pts: 18.5, reb: 10.5, ast: 3.2, stl: 0.8, blk: 0.8 }, years: "2021–2026", accolades: "Skilled scoring center" },
  { id: "coby-white-bulls-2020s", name: "Coby White", franchiseId: "bulls", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 16.5, reb: 3.8, ast: 4.5, stl: 0.8, blk: 0.2 }, years: "2020–2026", accolades: "MIP runner-up ’24" },
  { id: "lonzo-ball-bulls-2020s", name: "Lonzo Ball", franchiseId: "bulls", decade: "2020s", positions: ["PG"], stats: { pts: 12.0, reb: 5.0, ast: 5.0, stl: 1.6, blk: 0.6 }, years: "2021–2025", accolades: "Two-way connector" },
  { id: "alex-caruso-bulls-2020s", name: "Alex Caruso", franchiseId: "bulls", decade: "2020s", positions: ["SG", "PG"], stats: { pts: 7.5, reb: 3.5, ast: 3.0, stl: 1.7, blk: 0.5 }, years: "2021–2024", accolades: "All-Defense 1st team" },
  { id: "josh-giddey-bulls-2020s", name: "Josh Giddey", franchiseId: "bulls", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 16.5, reb: 8.0, ast: 7.5, stl: 1.0, blk: 0.6 }, years: "2024–2026", accolades: "Triple-double threat" },
  { id: "patrick-williams-bulls-2020s", name: "Patrick Williams", franchiseId: "bulls", decade: "2020s", positions: ["PF", "SF"], stats: { pts: 10.0, reb: 4.0, ast: 1.5, stl: 0.9, blk: 0.8 }, years: "2020–2026", accolades: "Defensive upside wing" },
  { id: "ayo-dosunmu-bulls-2020s", name: "Ayo Dosunmu", franchiseId: "bulls", decade: "2020s", positions: ["SG", "PG"], stats: { pts: 10.5, reb: 3.0, ast: 3.5, stl: 0.9, blk: 0.4 }, years: "2021–2026", accolades: "Hometown two-way guard" },
];
