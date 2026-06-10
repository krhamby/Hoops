import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1950s (Rochester Royals) ----------------
  { id: "bob-davies-kings-1950s", name: "Bob Davies", franchiseId: "kings", decade: "1950s", positions: ["PG"], stats: { pts: 14.5, reb: 3.0, ast: 5.5, stl: 1.2, blk: 0.1 }, years: "1950–1955", accolades: "Behind-the-back pioneer · '51 champ" },
  { id: "bobby-wanzer-kings-1950s", name: "Bobby Wanzer", franchiseId: "kings", decade: "1950s", positions: ["SG"], stats: { pts: 13.5, reb: 4.0, ast: 3.0, stl: 0.8, blk: 0.1 }, years: "1950–1957", accolades: "5× All-Star · '51 champ" },
  { id: "arnie-risen-kings-1950s", name: "Arnie Risen", franchiseId: "kings", decade: "1950s", positions: ["C"], stats: { pts: 13.5, reb: 11.0, ast: 1.8, stl: 0.4, blk: 0.7 }, years: "1950–1955", accolades: "Title-team Hall of Fame center" },
  { id: "jack-coleman-kings-1950s", name: "Jack Coleman", franchiseId: "kings", decade: "1950s", positions: ["PF"], stats: { pts: 10.5, reb: 9.5, ast: 2.5, stl: 0.5, blk: 0.3 }, years: "1950–1955", accolades: "Rugged '51 champion forward" },
  { id: "maurice-stokes-kings-1950s", name: "Maurice Stokes", franchiseId: "kings", decade: "1950s", positions: ["PF", "C"], stats: { pts: 16.4, reb: 17.3, ast: 5.3, stl: 0.8, blk: 0.8 }, years: "1955–1958", accolades: "1956 ROY · tragic legend" },
  { id: "jack-twyman-kings-1950s", name: "Jack Twyman", franchiseId: "kings", decade: "1950s", positions: ["SF"], stats: { pts: 17.5, reb: 7.0, ast: 2.2, stl: 0.6, blk: 0.2 }, years: "1955–1959", accolades: "Sharpshooting Hall of Famer" },
  { id: "arnie-johnson-kings-1950s", name: "Arnie Johnson", franchiseId: "kings", decade: "1950s", positions: ["PF"], stats: { pts: 8.5, reb: 7.0, ast: 1.8, stl: 0.4, blk: 0.3 }, years: "1950–1953", accolades: "Powerful '51 title big" },

  // ---------------- 1960s (Cincinnati Royals) ----------------
  { id: "oscar-robertson-kings-1960s", name: "Oscar Robertson", franchiseId: "kings", decade: "1960s", positions: ["PG"], stats: { pts: 29.3, reb: 8.5, ast: 10.3, stl: 1.8, blk: 0.3 }, years: "1960–1969", accolades: "Triple-double season · 1964 MVP" },
  { id: "jack-twyman-kings-1960s", name: "Jack Twyman", franchiseId: "kings", decade: "1960s", positions: ["SF"], stats: { pts: 19.5, reb: 6.5, ast: 2.5, stl: 0.6, blk: 0.2 }, years: "1960–1966", accolades: "31 ppg peak · 6× All-Star" },
  { id: "jerry-lucas-kings-1960s", name: "Jerry Lucas", franchiseId: "kings", decade: "1960s", positions: ["PF", "C"], stats: { pts: 19.1, reb: 19.1, ast: 2.8, stl: 0.7, blk: 0.6 }, years: "1963–1969", accolades: "1964 ROY · 20-20 machine" },
  { id: "wayne-embry-kings-1960s", name: "Wayne Embry", franchiseId: "kings", decade: "1960s", positions: ["C"], stats: { pts: 14.5, reb: 10.5, ast: 1.8, stl: 0.5, blk: 0.7 }, years: "1960–1966", accolades: "5× All-Star wall in the post" },
  { id: "adrian-smith-kings-1960s", name: "Adrian Smith", franchiseId: "kings", decade: "1960s", positions: ["SG"], stats: { pts: 13.5, reb: 2.5, ast: 2.8, stl: 0.6, blk: 0.1 }, years: "1961–1969", accolades: "1966 All-Star Game MVP" },
  { id: "bob-boozer-kings-1960s", name: "Bob Boozer", franchiseId: "kings", decade: "1960s", positions: ["PF"], stats: { pts: 13.5, reb: 8.0, ast: 1.4, stl: 0.5, blk: 0.3 }, years: "1960–1964", accolades: "Smooth-scoring forward" },
  { id: "tom-van-arsdale-kings-1960s", name: "Tom Van Arsdale", franchiseId: "kings", decade: "1960s", positions: ["SF", "SG"], stats: { pts: 16.5, reb: 4.5, ast: 2.5, stl: 0.7, blk: 0.2 }, years: "1968–1969", accolades: "All-Star twin wing" },

  // ---------------- 1970s (Cincinnati/KC-Omaha Kings) ----------------
  { id: "nate-tiny-archibald-kings-1970s", name: "Nate 'Tiny' Archibald", franchiseId: "kings", decade: "1970s", positions: ["PG"], stats: { pts: 25.2, reb: 2.8, ast: 9.2, stl: 1.4, blk: 0.2 }, years: "1970–1976", accolades: "Led NBA in pts & ast same year" },
  { id: "sam-lacey-kings-1970s", name: "Sam Lacey", franchiseId: "kings", decade: "1970s", positions: ["C"], stats: { pts: 11.5, reb: 11.0, ast: 3.5, stl: 1.3, blk: 1.6 }, years: "1970–1979", accolades: "All-Star passing center" },
  { id: "jimmie-walker-kings-1970s", name: "Jimmie Walker", franchiseId: "kings", decade: "1970s", positions: ["SG"], stats: { pts: 15.5, reb: 3.0, ast: 3.8, stl: 0.8, blk: 0.1 }, years: "1972–1976", accolades: "Polished scoring guard" },
  { id: "scott-wedman-kings-1970s", name: "Scott Wedman", franchiseId: "kings", decade: "1970s", positions: ["SF"], stats: { pts: 15.5, reb: 5.5, ast: 2.2, stl: 1.0, blk: 0.3 }, years: "1974–1979", accolades: "2× All-Star forward" },
  { id: "ron-behagen-kings-1970s", name: "Ron Behagen", franchiseId: "kings", decade: "1970s", positions: ["PF"], stats: { pts: 12.5, reb: 7.5, ast: 1.8, stl: 0.8, blk: 0.7 }, years: "1973–1976", accolades: "Active frontcourt piece" },
  { id: "otis-birdsong-kings-1970s", name: "Otis Birdsong", franchiseId: "kings", decade: "1970s", positions: ["SG"], stats: { pts: 19.5, reb: 3.5, ast: 3.2, stl: 1.2, blk: 0.2 }, years: "1977–1979", accolades: "Silky All-Star two-guard" },
  { id: "norm-van-lier-kings-1970s", name: "Norm Van Lier", franchiseId: "kings", decade: "1970s", positions: ["PG"], stats: { pts: 12.5, reb: 5.0, ast: 8.5, stl: 1.5, blk: 0.2 }, years: "1970–1971", accolades: "Stormin' Norman · assist leader" },
  { id: "phil-ford-kings-1970s", name: "Phil Ford", franchiseId: "kings", decade: "1970s", positions: ["PG"], stats: { pts: 15.9, reb: 2.3, ast: 8.6, stl: 1.9, blk: 0.1 }, years: "1978–1979", accolades: "1979 Rookie of the Year" },

  // ---------------- 1980s ----------------
  { id: "otis-birdsong-kings-1980s", name: "Otis Birdsong", franchiseId: "kings", decade: "1980s", positions: ["SG"], stats: { pts: 23.5, reb: 3.5, ast: 3.5, stl: 1.2, blk: 0.2 }, years: "1980–1981", accolades: "All-Star scoring peak" },
  { id: "eddie-johnson-kings-1980s", name: "Eddie Johnson", franchiseId: "kings", decade: "1980s", positions: ["SF"], stats: { pts: 17.5, reb: 4.5, ast: 2.5, stl: 0.8, blk: 0.2 }, years: "1981–1987", accolades: "Smooth 20-ppg wing" },
  { id: "reggie-theus-kings-1980s", name: "Reggie Theus", franchiseId: "kings", decade: "1980s", positions: ["SG", "PG"], stats: { pts: 18.5, reb: 3.3, ast: 7.5, stl: 1.1, blk: 0.2 }, years: "1984–1988", accolades: "All-Star showman guard" },
  { id: "mike-woodson-kings-1980s", name: "Mike Woodson", franchiseId: "kings", decade: "1980s", positions: ["SG", "SF"], stats: { pts: 17.0, reb: 3.3, ast: 2.8, stl: 1.2, blk: 0.4 }, years: "1981–1986", accolades: "Reliable mid-range scorer" },
  { id: "larry-drew-kings-1980s", name: "Larry Drew", franchiseId: "kings", decade: "1980s", positions: ["PG"], stats: { pts: 14.5, reb: 2.3, ast: 6.5, stl: 1.0, blk: 0.1 }, years: "1981–1986", accolades: "Quick lead guard" },
  { id: "lasalle-thompson-kings-1980s", name: "LaSalle Thompson", franchiseId: "kings", decade: "1980s", positions: ["C", "PF"], stats: { pts: 10.5, reb: 8.5, ast: 1.2, stl: 0.8, blk: 1.1 }, years: "1982–1989", accolades: "Tank · interior workhorse" },
  { id: "kenny-smith-kings-1980s", name: "Kenny Smith", franchiseId: "kings", decade: "1980s", positions: ["PG"], stats: { pts: 14.5, reb: 2.5, ast: 7.0, stl: 1.2, blk: 0.1 }, years: "1987–1989", accolades: "All-Rookie jet guard" },
  { id: "danny-ainge-kings-1980s", name: "Danny Ainge", franchiseId: "kings", decade: "1980s", positions: ["SG", "PG"], stats: { pts: 17.5, reb: 3.5, ast: 5.5, stl: 1.5, blk: 0.2 }, years: "1989–1990", accolades: "Fiery veteran combo guard" },

  // ---------------- 1990s ----------------
  { id: "mitch-richmond-kings-1990s", name: "Mitch Richmond", franchiseId: "kings", decade: "1990s", positions: ["SG"], stats: { pts: 23.5, reb: 3.7, ast: 4.0, stl: 1.3, blk: 0.3 }, years: "1991–1998", accolades: "6× All-Star · '95 ASG MVP" },
  { id: "lionel-simmons-kings-1990s", name: "Lionel Simmons", franchiseId: "kings", decade: "1990s", positions: ["SF"], stats: { pts: 14.5, reb: 6.5, ast: 3.0, stl: 1.0, blk: 0.7 }, years: "1990–1997", accolades: "L-Train · All-Rookie star" },
  { id: "wayman-tisdale-kings-1990s", name: "Wayman Tisdale", franchiseId: "kings", decade: "1990s", positions: ["PF"], stats: { pts: 18.5, reb: 6.5, ast: 1.7, stl: 0.9, blk: 0.6 }, years: "1990–1994", accolades: "Lefty post scorer" },
  { id: "spud-webb-kings-1990s", name: "Spud Webb", franchiseId: "kings", decade: "1990s", positions: ["PG"], stats: { pts: 12.5, reb: 2.3, ast: 6.5, stl: 1.2, blk: 0.1 }, years: "1991–1995", accolades: "5'6\" dunk-champ playmaker" },
  { id: "brian-grant-kings-1990s", name: "Brian Grant", franchiseId: "kings", decade: "1990s", positions: ["PF"], stats: { pts: 13.5, reb: 8.0, ast: 1.4, stl: 0.8, blk: 1.2 }, years: "1994–1997", accolades: "Rasta-braid rebounder" },
  { id: "olden-polynice-kings-1990s", name: "Olden Polynice", franchiseId: "kings", decade: "1990s", positions: ["C"], stats: { pts: 9.5, reb: 8.5, ast: 0.9, stl: 0.5, blk: 0.7 }, years: "1994–1998", accolades: "Sturdy starting center" },
  { id: "chris-webber-kings-1990s", name: "Chris Webber", franchiseId: "kings", decade: "1990s", positions: ["PF"], stats: { pts: 20.0, reb: 13.0, ast: 4.1, stl: 1.4, blk: 1.7 }, years: "1998–1999", accolades: "Rebound champ · new era begins" },
  { id: "jason-williams-kings-1990s", name: "Jason Williams", franchiseId: "kings", decade: "1990s", positions: ["PG"], stats: { pts: 12.8, reb: 3.1, ast: 6.0, stl: 1.9, blk: 0.1 }, years: "1998–1999", accolades: "White Chocolate dazzle" },
  { id: "vlade-divac-kings-1990s", name: "Vlade Divac", franchiseId: "kings", decade: "1990s", positions: ["C"], stats: { pts: 14.3, reb: 10.0, ast: 4.3, stl: 0.9, blk: 1.0 }, years: "1998–1999", accolades: "Hub of the new-look Kings" },
  { id: "corliss-williamson-kings-1990s", name: "Corliss Williamson", franchiseId: "kings", decade: "1990s", positions: ["SF", "PF"], stats: { pts: 12.5, reb: 4.5, ast: 1.5, stl: 0.7, blk: 0.4 }, years: "1995–1999", accolades: "Big Nasty post bully" },

  // ---------------- 2000s ----------------
  { id: "chris-webber-kings-2000s", name: "Chris Webber", franchiseId: "kings", decade: "2000s", positions: ["PF"], stats: { pts: 23.5, reb: 10.5, ast: 4.8, stl: 1.4, blk: 1.5 }, years: "2000–2005", accolades: "All-NBA heart of 61-win team" },
  { id: "vlade-divac-kings-2000s", name: "Vlade Divac", franchiseId: "kings", decade: "2000s", positions: ["C"], stats: { pts: 11.5, reb: 8.0, ast: 3.6, stl: 1.0, blk: 1.1 }, years: "2000–2004", accolades: "Wily passing pivot" },
  { id: "peja-stojakovic-kings-2000s", name: "Peja Stojakovic", franchiseId: "kings", decade: "2000s", positions: ["SF"], stats: { pts: 19.5, reb: 5.2, ast: 1.8, stl: 1.0, blk: 0.2 }, years: "2000–2006", accolades: "All-NBA · 3-point virtuoso" },
  { id: "mike-bibby-kings-2000s", name: "Mike Bibby", franchiseId: "kings", decade: "2000s", positions: ["PG"], stats: { pts: 17.5, reb: 3.2, ast: 5.5, stl: 1.1, blk: 0.1 }, years: "2001–2008", accolades: "2002 WCF clutch gene" },
  { id: "doug-christie-kings-2000s", name: "Doug Christie", franchiseId: "kings", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 9.5, reb: 4.3, ast: 4.0, stl: 2.0, blk: 0.4 }, years: "2000–2005", accolades: "4× All-Defense wing" },
  { id: "bobby-jackson-kings-2000s", name: "Bobby Jackson", franchiseId: "kings", decade: "2000s", positions: ["PG"], stats: { pts: 11.5, reb: 3.0, ast: 2.8, stl: 1.0, blk: 0.2 }, years: "2000–2005", accolades: "2003 Sixth Man of the Year" },
  { id: "brad-miller-kings-2000s", name: "Brad Miller", franchiseId: "kings", decade: "2000s", positions: ["C"], stats: { pts: 13.5, reb: 8.5, ast: 4.0, stl: 0.8, blk: 0.9 }, years: "2003–2009", accolades: "2× All-Star passing center" },
  { id: "kevin-martin-kings-2000s", name: "Kevin Martin", franchiseId: "kings", decade: "2000s", positions: ["SG"], stats: { pts: 19.5, reb: 3.8, ast: 2.1, stl: 1.1, blk: 0.2 }, years: "2004–2009", accolades: "Funky-form 24-ppg scorer" },
  { id: "jason-williams-kings-2000s", name: "Jason Williams", franchiseId: "kings", decade: "2000s", positions: ["PG"], stats: { pts: 11.5, reb: 2.9, ast: 7.0, stl: 1.4, blk: 0.1 }, years: "2000–2001", accolades: "Greatest-show flair" },

  // ---------------- 2010s ----------------
  { id: "demarcus-cousins-kings-2010s", name: "DeMarcus Cousins", franchiseId: "kings", decade: "2010s", positions: ["C"], stats: { pts: 21.1, reb: 10.8, ast: 3.0, stl: 1.4, blk: 1.2 }, years: "2010–2017", accolades: "Boogie · 2× All-NBA" },
  { id: "tyreke-evans-kings-2010s", name: "Tyreke Evans", franchiseId: "kings", decade: "2010s", positions: ["SG", "PG"], stats: { pts: 17.0, reb: 4.8, ast: 5.0, stl: 1.4, blk: 0.3 }, years: "2010–2013", accolades: "20-5-5 ROY season prior" },
  { id: "rudy-gay-kings-2010s", name: "Rudy Gay", franchiseId: "kings", decade: "2010s", positions: ["SF"], stats: { pts: 19.5, reb: 6.0, ast: 2.8, stl: 1.2, blk: 0.7 }, years: "2013–2017", accolades: "Veteran wing scorer" },
  { id: "isaiah-thomas-kings-2010s", name: "Isaiah Thomas", franchiseId: "kings", decade: "2010s", positions: ["PG"], stats: { pts: 16.5, reb: 2.6, ast: 5.5, stl: 1.0, blk: 0.1 }, years: "2011–2014", accolades: "Mr. Irrelevant to 20-ppg" },
  { id: "darren-collison-kings-2010s", name: "Darren Collison", franchiseId: "kings", decade: "2010s", positions: ["PG"], stats: { pts: 14.5, reb: 2.9, ast: 5.3, stl: 1.2, blk: 0.1 }, years: "2014–2017", accolades: "Efficient veteran starter" },
  { id: "buddy-hield-kings-2010s", name: "Buddy Hield", franchiseId: "kings", decade: "2010s", positions: ["SG"], stats: { pts: 17.5, reb: 4.5, ast: 2.3, stl: 0.9, blk: 0.3 }, years: "2017–2019", accolades: "Buddy Buckets from deep" },
  { id: "deaaron-fox-kings-2010s", name: "De'Aaron Fox", franchiseId: "kings", decade: "2010s", positions: ["PG"], stats: { pts: 15.5, reb: 3.4, ast: 6.0, stl: 1.3, blk: 0.4 }, years: "2017–2019", accolades: "Fastest man in the league" },
  { id: "willie-cauley-stein-kings-2010s", name: "Willie Cauley-Stein", franchiseId: "kings", decade: "2010s", positions: ["C"], stats: { pts: 10.5, reb: 6.7, ast: 1.7, stl: 0.9, blk: 0.8 }, years: "2015–2019", accolades: "Athletic rim-running big" },
  { id: "jason-thompson-kings-2010s", name: "Jason Thompson", franchiseId: "kings", decade: "2010s", positions: ["PF", "C"], stats: { pts: 9.5, reb: 6.8, ast: 1.4, stl: 0.7, blk: 0.7 }, years: "2010–2015", accolades: "Longtime frontcourt regular" },

  // ---------------- 2020s ----------------
  { id: "deaaron-fox-kings-2020s", name: "De'Aaron Fox", franchiseId: "kings", decade: "2020s", positions: ["PG"], stats: { pts: 25.5, reb: 4.2, ast: 6.1, stl: 1.4, blk: 0.4 }, years: "2020–2025", accolades: "All-Star · Clutch POY 2023" },
  { id: "domantas-sabonis-kings-2020s", name: "Domantas Sabonis", franchiseId: "kings", decade: "2020s", positions: ["C", "PF"], stats: { pts: 19.0, reb: 12.8, ast: 7.0, stl: 0.8, blk: 0.5 }, years: "2022–2026", accolades: "Rebound champ · triple-double hub" },
  { id: "tyrese-haliburton-kings-2020s", name: "Tyrese Haliburton", franchiseId: "kings", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 13.5, reb: 3.5, ast: 6.5, stl: 1.5, blk: 0.5 }, years: "2020–2022", accolades: "All-Rookie playmaking savant" },
  { id: "harrison-barnes-kings-2020s", name: "Harrison Barnes", franchiseId: "kings", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 14.5, reb: 5.0, ast: 1.8, stl: 0.7, blk: 0.2 }, years: "2020–2024", accolades: "Pro's pro · beam-team starter" },
  { id: "kevin-huerter-kings-2020s", name: "Kevin Huerter", franchiseId: "kings", decade: "2020s", positions: ["SG"], stats: { pts: 13.5, reb: 3.5, ast: 3.2, stl: 0.9, blk: 0.3 }, years: "2022–2025", accolades: "Red Velvet movement shooting" },
  { id: "malik-monk-kings-2020s", name: "Malik Monk", franchiseId: "kings", decade: "2020s", positions: ["SG", "PG"], stats: { pts: 15.5, reb: 2.9, ast: 4.5, stl: 0.7, blk: 0.3 }, years: "2022–2026", accolades: "Sixth-man spark scorer" },
  { id: "keegan-murray-kings-2020s", name: "Keegan Murray", franchiseId: "kings", decade: "2020s", positions: ["PF", "SF"], stats: { pts: 13.5, reb: 5.5, ast: 1.4, stl: 0.8, blk: 0.6 }, years: "2022–2026", accolades: "Rookie 3-point record" },
  { id: "demar-derozan-kings-2020s", name: "DeMar DeRozan", franchiseId: "kings", decade: "2020s", positions: ["SF", "SG"], stats: { pts: 21.5, reb: 4.0, ast: 4.3, stl: 0.9, blk: 0.4 }, years: "2024–2026", accolades: "6× All-Star mid-range master" },
];
