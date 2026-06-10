import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1970s (ABA New York Nets / NJ Nets) ----------------
  { id: "julius-erving-nets-1970s", name: "Julius Erving", franchiseId: "nets", decade: "1970s", positions: ["SF"], stats: { pts: 28.2, reb: 10.9, ast: 4.8, stl: 2.2, blk: 1.9 }, years: "1973–1976", accolades: "3× ABA MVP · 2× ABA champ" },
  { id: "rick-barry-nets-1970s", name: "Rick Barry", franchiseId: "nets", decade: "1970s", positions: ["SF"], stats: { pts: 30.6, reb: 7.5, ast: 5.0, stl: 1.8, blk: 0.4 }, years: "1970–1972", accolades: "ABA scoring machine" },
  { id: "billy-paultz-nets-1970s", name: "Billy Paultz", franchiseId: "nets", decade: "1970s", positions: ["C"], stats: { pts: 14.0, reb: 9.5, ast: 2.0, stl: 0.6, blk: 1.4 }, years: "1970–1975", accolades: "The Whopper · ABA champ" },
  { id: "john-williamson-nets-1970s", name: "John Williamson", franchiseId: "nets", decade: "1970s", positions: ["SG"], stats: { pts: 16.5, reb: 2.5, ast: 2.5, stl: 1.1, blk: 0.1 }, years: "1973–1979", accolades: "Super John · 2× ABA champ" },
  { id: "brian-taylor-nets-1970s", name: "Brian Taylor", franchiseId: "nets", decade: "1970s", positions: ["PG"], stats: { pts: 12.5, reb: 3.0, ast: 4.0, stl: 2.0, blk: 0.2 }, years: "1972–1976", accolades: "ABA ROY ’73 · 2× champ" },
  { id: "bill-melchionni-nets-1970s", name: "Bill Melchionni", franchiseId: "nets", decade: "1970s", positions: ["PG"], stats: { pts: 15.0, reb: 3.0, ast: 7.5, stl: 1.2, blk: 0.1 }, years: "1970–1975", accolades: "3× ABA assist leader" },
  { id: "larry-kenon-nets-1970s", name: "Larry Kenon", franchiseId: "nets", decade: "1970s", positions: ["PF"], stats: { pts: 17.0, reb: 10.0, ast: 2.0, stl: 1.3, blk: 0.5 }, years: "1973–1975", accolades: "Dr. K · ABA champ ’74" },
  { id: "bernard-king-nets-1970s", name: "Bernard King", franchiseId: "nets", decade: "1970s", positions: ["SF"], stats: { pts: 23.5, reb: 7.5, ast: 2.7, stl: 1.4, blk: 0.4 }, years: "1977–1979", accolades: "Rookie scoring sensation" },

  // ---------------- 1980s ----------------
  { id: "buck-williams-nets-1980s", name: "Buck Williams", franchiseId: "nets", decade: "1980s", positions: ["PF"], stats: { pts: 16.5, reb: 12.0, ast: 1.5, stl: 0.8, blk: 1.1 }, years: "1981–1989", accolades: "ROY ’82 · rebounding rock" },
  { id: "otis-birdsong-nets-1980s", name: "Otis Birdsong", franchiseId: "nets", decade: "1980s", positions: ["SG"], stats: { pts: 16.5, reb: 2.5, ast: 3.5, stl: 1.1, blk: 0.2 }, years: "1981–1988", accolades: "4× All-Star scorer" },
  { id: "micheal-ray-richardson-nets-1980s", name: "Micheal Ray Richardson", franchiseId: "nets", decade: "1980s", positions: ["PG", "SG"], stats: { pts: 15.5, reb: 5.5, ast: 7.0, stl: 2.5, blk: 0.3 }, years: "1983–1986", accolades: "Steals king · upset ’84 Sixers" },
  { id: "darryl-dawkins-nets-1980s", name: "Darryl Dawkins", franchiseId: "nets", decade: "1980s", positions: ["C"], stats: { pts: 15.5, reb: 6.0, ast: 1.5, stl: 0.5, blk: 1.6 }, years: "1982–1987", accolades: "Chocolate Thunder" },
  { id: "albert-king-nets-1980s", name: "Albert King", franchiseId: "nets", decade: "1980s", positions: ["SF"], stats: { pts: 14.0, reb: 4.5, ast: 2.5, stl: 0.9, blk: 0.3 }, years: "1981–1987", accolades: "Smooth scoring wing" },
  { id: "mike-gminski-nets-1980s", name: "Mike Gminski", franchiseId: "nets", decade: "1980s", positions: ["C"], stats: { pts: 11.5, reb: 7.5, ast: 1.5, stl: 0.5, blk: 1.1 }, years: "1980–1988", accolades: "The G-Man" },
  { id: "darwin-cook-nets-1980s", name: "Darwin Cook", franchiseId: "nets", decade: "1980s", positions: ["PG", "SG"], stats: { pts: 10.5, reb: 2.5, ast: 3.5, stl: 1.6, blk: 0.2 }, years: "1980–1987", accolades: "Pesky backcourt defender" },

  // ---------------- 1990s ----------------
  { id: "drazen-petrovic-nets-1990s", name: "Drazen Petrovic", franchiseId: "nets", decade: "1990s", positions: ["SG"], stats: { pts: 19.5, reb: 2.8, ast: 3.0, stl: 1.2, blk: 0.1 }, years: "1991–1993", accolades: "Mozart of basketball" },
  { id: "derrick-coleman-nets-1990s", name: "Derrick Coleman", franchiseId: "nets", decade: "1990s", positions: ["PF"], stats: { pts: 19.5, reb: 10.5, ast: 3.0, stl: 0.9, blk: 1.5 }, years: "1990–1995", accolades: "ROY ’91 · skilled big" },
  { id: "kenny-anderson-nets-1990s", name: "Kenny Anderson", franchiseId: "nets", decade: "1990s", positions: ["PG"], stats: { pts: 15.5, reb: 3.5, ast: 8.0, stl: 1.6, blk: 0.2 }, years: "1991–1996", accolades: "All-Star ’94 · shifty lefty" },
  { id: "jayson-williams-nets-1990s", name: "Jayson Williams", franchiseId: "nets", decade: "1990s", positions: ["PF", "C"], stats: { pts: 9.5, reb: 9.0, ast: 1.0, stl: 0.6, blk: 0.6 }, years: "1992–1999", accolades: "All-Star rebound hound" },
  { id: "kerry-kittles-nets-1990s", name: "Kerry Kittles", franchiseId: "nets", decade: "1990s", positions: ["SG"], stats: { pts: 15.0, reb: 4.0, ast: 2.5, stl: 1.7, blk: 0.4 }, years: "1996–1999", accolades: "Sleek two-way guard" },
  { id: "keith-van-horn-nets-1990s", name: "Keith Van Horn", franchiseId: "nets", decade: "1990s", positions: ["PF", "SF"], stats: { pts: 20.0, reb: 7.5, ast: 1.7, stl: 0.9, blk: 0.6 }, years: "1997–1999", accolades: "All-Rookie stretch four" },
  { id: "stephon-marbury-nets-1990s", name: "Stephon Marbury", franchiseId: "nets", decade: "1990s", positions: ["PG"], stats: { pts: 23.0, reb: 3.0, ast: 8.5, stl: 1.2, blk: 0.1 }, years: "1999", accolades: "Starbury comes home" },
  { id: "chris-morris-nets-1990s", name: "Chris Morris", franchiseId: "nets", decade: "1990s", positions: ["SF"], stats: { pts: 12.5, reb: 5.5, ast: 1.5, stl: 1.2, blk: 0.6 }, years: "1990–1995", accolades: "Athletic forward" },

  // ---------------- 2000s ----------------
  { id: "jason-kidd-nets-2000s", name: "Jason Kidd", franchiseId: "nets", decade: "2000s", positions: ["PG"], stats: { pts: 14.5, reb: 7.0, ast: 9.0, stl: 2.0, blk: 0.3 }, years: "2001–2008", accolades: "2× Finals runs · triple-double" },
  { id: "vince-carter-nets-2000s", name: "Vince Carter", franchiseId: "nets", decade: "2000s", positions: ["SG", "SF"], stats: { pts: 23.5, reb: 5.5, ast: 4.5, stl: 1.2, blk: 0.6 }, years: "2004–2009", accolades: "Half-man, half-amazing" },
  { id: "richard-jefferson-nets-2000s", name: "Richard Jefferson", franchiseId: "nets", decade: "2000s", positions: ["SF"], stats: { pts: 17.5, reb: 5.5, ast: 3.0, stl: 0.9, blk: 0.3 }, years: "2001–2008", accolades: "Finals-run slasher" },
  { id: "kenyon-martin-nets-2000s", name: "Kenyon Martin", franchiseId: "nets", decade: "2000s", positions: ["PF"], stats: { pts: 14.5, reb: 7.5, ast: 2.0, stl: 1.1, blk: 1.2 }, years: "2000–2004", accolades: "K-Mart · All-Star ’04" },
  { id: "kerry-kittles-nets-2000s", name: "Kerry Kittles", franchiseId: "nets", decade: "2000s", positions: ["SG"], stats: { pts: 12.5, reb: 4.0, ast: 2.5, stl: 1.5, blk: 0.4 }, years: "2000–2004", accolades: "2× Finals starter" },
  { id: "devin-harris-nets-2000s", name: "Devin Harris", franchiseId: "nets", decade: "2000s", positions: ["PG"], stats: { pts: 18.5, reb: 3.0, ast: 6.0, stl: 1.5, blk: 0.2 }, years: "2008–2009", accolades: "All-Star ’09 speedster" },
  { id: "nenad-krstic-nets-2000s", name: "Nenad Krstic", franchiseId: "nets", decade: "2000s", positions: ["C"], stats: { pts: 10.5, reb: 6.0, ast: 1.0, stl: 0.4, blk: 0.8 }, years: "2004–2008", accolades: "Skilled Serbian big" },
  { id: "brook-lopez-nets-2000s", name: "Brook Lopez", franchiseId: "nets", decade: "2000s", positions: ["C"], stats: { pts: 13.0, reb: 8.1, ast: 1.0, stl: 0.5, blk: 1.8 }, years: "2008–2009", accolades: "All-Rookie anchor" },

  // ---------------- 2010s ----------------
  { id: "brook-lopez-nets-2010s", name: "Brook Lopez", franchiseId: "nets", decade: "2010s", positions: ["C"], stats: { pts: 19.5, reb: 7.0, ast: 1.5, stl: 0.5, blk: 1.7 }, years: "2010–2017", accolades: "All-Star ’13 · franchise scorer" },
  { id: "deron-williams-nets-2010s", name: "Deron Williams", franchiseId: "nets", decade: "2010s", positions: ["PG"], stats: { pts: 17.0, reb: 3.0, ast: 7.5, stl: 1.1, blk: 0.2 }, years: "2011–2015", accolades: "All-Star floor general" },
  { id: "joe-johnson-nets-2010s", name: "Joe Johnson", franchiseId: "nets", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 14.5, reb: 3.5, ast: 3.5, stl: 0.7, blk: 0.2 }, years: "2012–2016", accolades: "Joe Jesus · iso clutch" },
  { id: "dangelo-russell-nets-2010s", name: "D'Angelo Russell", franchiseId: "nets", decade: "2010s", positions: ["PG", "SG"], stats: { pts: 19.0, reb: 3.7, ast: 6.5, stl: 1.2, blk: 0.2 }, years: "2017–2019", accolades: "All-Star ’19 · ice in veins" },
  { id: "spencer-dinwiddie-nets-2010s", name: "Spencer Dinwiddie", franchiseId: "nets", decade: "2010s", positions: ["PG", "SG"], stats: { pts: 13.5, reb: 2.8, ast: 5.0, stl: 0.7, blk: 0.3 }, years: "2016–2019", accolades: "Bargain-bin gem" },
  { id: "caris-levert-nets-2010s", name: "Caris LeVert", franchiseId: "nets", decade: "2010s", positions: ["SG", "SF"], stats: { pts: 13.0, reb: 4.0, ast: 3.8, stl: 1.0, blk: 0.3 }, years: "2016–2019", accolades: "Shifty shot creator" },
  { id: "thaddeus-young-nets-2010s", name: "Thaddeus Young", franchiseId: "nets", decade: "2010s", positions: ["PF"], stats: { pts: 14.0, reb: 7.5, ast: 2.0, stl: 1.5, blk: 0.4 }, years: "2014–2016", accolades: "Versatile vet forward" },
  { id: "jarrett-allen-nets-2010s", name: "Jarrett Allen", franchiseId: "nets", decade: "2010s", positions: ["C"], stats: { pts: 9.5, reb: 7.5, ast: 1.3, stl: 0.5, blk: 1.4 }, years: "2017–2019", accolades: "Fro-tected rim" },

  // ---------------- 2020s ----------------
  { id: "kevin-durant-nets-2020s", name: "Kevin Durant", franchiseId: "nets", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 29.0, reb: 7.1, ast: 5.8, stl: 0.8, blk: 1.4 }, years: "2020–2023", accolades: "Unguardable · 50/40/90" },
  { id: "kyrie-irving-nets-2020s", name: "Kyrie Irving", franchiseId: "nets", decade: "2020s", positions: ["PG"], stats: { pts: 27.0, reb: 4.8, ast: 5.7, stl: 1.2, blk: 0.6 }, years: "2020–2023", accolades: "50-point nights · wizardry" },
  { id: "james-harden-nets-2020s", name: "James Harden", franchiseId: "nets", decade: "2020s", positions: ["SG", "PG"], stats: { pts: 23.5, reb: 8.0, ast: 10.0, stl: 1.2, blk: 0.7 }, years: "2021–2022", accolades: "Point-Beard triple-doubles" },
  { id: "mikal-bridges-nets-2020s", name: "Mikal Bridges", franchiseId: "nets", decade: "2020s", positions: ["SF", "SG"], stats: { pts: 21.5, reb: 4.5, ast: 3.0, stl: 1.0, blk: 0.4 }, years: "2023–2024", accolades: "Iron-man two-way wing" },
  { id: "cam-thomas-nets-2020s", name: "Cam Thomas", franchiseId: "nets", decade: "2020s", positions: ["SG"], stats: { pts: 19.5, reb: 3.2, ast: 3.0, stl: 0.7, blk: 0.2 }, years: "2021–2026", accolades: "Microwave bucket-getter" },
  { id: "nic-claxton-nets-2020s", name: "Nic Claxton", franchiseId: "nets", decade: "2020s", positions: ["C"], stats: { pts: 11.0, reb: 7.5, ast: 1.8, stl: 0.8, blk: 2.0 }, years: "2020–2026", accolades: "Switchable rim protector" },
  { id: "joe-harris-nets-2020s", name: "Joe Harris", franchiseId: "nets", decade: "2020s", positions: ["SG", "SF"], stats: { pts: 12.5, reb: 3.8, ast: 1.8, stl: 0.6, blk: 0.2 }, years: "2020–2023", accolades: "3-pt % champ" },
  { id: "cam-johnson-nets-2020s", name: "Cam Johnson", franchiseId: "nets", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 16.5, reb: 4.3, ast: 2.8, stl: 0.9, blk: 0.4 }, years: "2023–2025", accolades: "Sweet-shooting forward" },
];
