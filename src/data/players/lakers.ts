import type { Player } from "../../types";

export const PLAYERS: Player[] = [
  // ---------------- 1950s (Minneapolis Lakers) ----------------
  { id: "george-mikan-lakers-1950s", name: "George Mikan", franchiseId: "lakers", decade: "1950s", positions: ["C"], stats: { pts: 23.5, reb: 13.4, ast: 2.8, stl: 0.5, blk: 2.0 }, years: "1950–1956", accolades: "First NBA superstar · 4 titles" },
  { id: "jim-pollard-lakers-1950s", name: "Jim Pollard", franchiseId: "lakers", decade: "1950s", positions: ["SF"], stats: { pts: 13.5, reb: 8.5, ast: 3.0, stl: 0.8, blk: 0.4 }, years: "1950–1955", accolades: "The Kangaroo Kid · 4× champ" },
  { id: "vern-mikkelsen-lakers-1950s", name: "Vern Mikkelsen", franchiseId: "lakers", decade: "1950s", positions: ["PF"], stats: { pts: 14.5, reb: 9.0, ast: 2.2, stl: 0.6, blk: 0.5 }, years: "1950–1959", accolades: "Prototype power forward" },
  { id: "slater-martin-lakers-1950s", name: "Slater Martin", franchiseId: "lakers", decade: "1950s", positions: ["PG"], stats: { pts: 9.8, reb: 3.0, ast: 4.0, stl: 1.2, blk: 0.1 }, years: "1950–1956", accolades: "Hall of Fame pest defender" },
  { id: "clyde-lovellette-lakers-1950s", name: "Clyde Lovellette", franchiseId: "lakers", decade: "1950s", positions: ["C", "PF"], stats: { pts: 17.5, reb: 9.5, ast: 1.5, stl: 0.5, blk: 0.5 }, years: "1953–1957", accolades: "1954 champ scoring big" },
  { id: "elgin-baylor-lakers-1950s", name: "Elgin Baylor", franchiseId: "lakers", decade: "1950s", positions: ["SF"], stats: { pts: 26.5, reb: 15.5, ast: 4.1, stl: 1.0, blk: 0.4 }, years: "1958–1959", accolades: "1959 ROY · aerial pioneer" },
  { id: "dick-garmaker-lakers-1950s", name: "Dick Garmaker", franchiseId: "lakers", decade: "1950s", positions: ["SG"], stats: { pts: 12.5, reb: 4.0, ast: 2.5, stl: 0.6, blk: 0.1 }, years: "1955–1959", accolades: "All-Star Minneapolis guard" },
  { id: "bob-leonard-lakers-1950s", name: "Bob Leonard", franchiseId: "lakers", decade: "1950s", positions: ["PG", "SG"], stats: { pts: 9.5, reb: 2.8, ast: 3.0, stl: 0.6, blk: 0.1 }, years: "1956–1959", accolades: "Slick · future coaching great" },

  // ---------------- 1960s ----------------
  { id: "jerry-west-lakers-1960s", name: "Jerry West", franchiseId: "lakers", decade: "1960s", positions: ["PG", "SG"], stats: { pts: 27.4, reb: 5.9, ast: 6.0, stl: 2.0, blk: 0.5 }, years: "1960–1969", accolades: "The Logo · Mr. Clutch" },
  { id: "elgin-baylor-lakers-1960s", name: "Elgin Baylor", franchiseId: "lakers", decade: "1960s", positions: ["SF"], stats: { pts: 28.9, reb: 13.4, ast: 4.4, stl: 1.0, blk: 0.3 }, years: "1960–1969", accolades: "71-point game · 61 in Finals" },
  { id: "wilt-chamberlain-lakers-1960s", name: "Wilt Chamberlain", franchiseId: "lakers", decade: "1960s", positions: ["C"], stats: { pts: 20.5, reb: 21.1, ast: 4.5, stl: 0.9, blk: 3.2 }, years: "1968–1969", accolades: "Goliath joins the Lakers" },
  { id: "gail-goodrich-lakers-1960s", name: "Gail Goodrich", franchiseId: "lakers", decade: "1960s", positions: ["SG", "PG"], stats: { pts: 13.5, reb: 2.5, ast: 3.0, stl: 0.9, blk: 0.1 }, years: "1965–1968", accolades: "Stumpy · lefty scorer" },
  { id: "rudy-larusso-lakers-1960s", name: "Rudy LaRusso", franchiseId: "lakers", decade: "1960s", positions: ["PF"], stats: { pts: 14.5, reb: 9.0, ast: 2.0, stl: 0.7, blk: 0.5 }, years: "1960–1967", accolades: "All-Star banger" },
  { id: "frank-selvy-lakers-1960s", name: "Frank Selvy", franchiseId: "lakers", decade: "1960s", positions: ["SG"], stats: { pts: 11.5, reb: 3.5, ast: 3.0, stl: 0.6, blk: 0.1 }, years: "1960–1964", accolades: "100-point college legend" },
  { id: "dick-barnett-lakers-1960s", name: "Dick Barnett", franchiseId: "lakers", decade: "1960s", positions: ["SG"], stats: { pts: 16.5, reb: 3.0, ast: 3.0, stl: 0.8, blk: 0.2 }, years: "1962–1965", accolades: "Fall back, baby" },
  { id: "tommy-hawkins-lakers-1960s", name: "Tommy Hawkins", franchiseId: "lakers", decade: "1960s", positions: ["SF", "PF"], stats: { pts: 8.5, reb: 5.5, ast: 1.0, stl: 0.5, blk: 0.3 }, years: "1960–1966", accolades: "Athletic frontcourt regular" },

  // ---------------- 1970s ----------------
  { id: "wilt-chamberlain-lakers-1970s", name: "Wilt Chamberlain", franchiseId: "lakers", decade: "1970s", positions: ["C"], stats: { pts: 16.0, reb: 19.0, ast: 4.2, stl: 0.9, blk: 3.0 }, years: "1970–1973", accolades: "1972 Finals MVP · 33-game streak" },
  { id: "jerry-west-lakers-1970s", name: "Jerry West", franchiseId: "lakers", decade: "1970s", positions: ["PG"], stats: { pts: 25.5, reb: 4.5, ast: 8.0, stl: 2.2, blk: 0.4 }, years: "1970–1974", accolades: "1972 champion at last" },
  { id: "gail-goodrich-lakers-1970s", name: "Gail Goodrich", franchiseId: "lakers", decade: "1970s", positions: ["SG"], stats: { pts: 22.5, reb: 3.0, ast: 4.5, stl: 1.0, blk: 0.1 }, years: "1970–1976", accolades: "Top scorer of '72 champs" },
  { id: "kareem-abdul-jabbar-lakers-1970s", name: "Kareem Abdul-Jabbar", franchiseId: "lakers", decade: "1970s", positions: ["C"], stats: { pts: 26.6, reb: 13.5, ast: 4.2, stl: 1.2, blk: 3.5 }, years: "1975–1979", accolades: "2 MVPs in forum blue & gold" },
  { id: "happy-hairston-lakers-1970s", name: "Happy Hairston", franchiseId: "lakers", decade: "1970s", positions: ["PF"], stats: { pts: 13.5, reb: 11.5, ast: 2.5, stl: 0.8, blk: 0.3 }, years: "1970–1975", accolades: "Rebounder of the 69-13 team" },
  { id: "jim-mcmillian-lakers-1970s", name: "Jim McMillian", franchiseId: "lakers", decade: "1970s", positions: ["SF"], stats: { pts: 16.0, reb: 5.5, ast: 2.7, stl: 0.9, blk: 0.2 }, years: "1970–1973", accolades: "Quiet star of the streak" },
  { id: "norm-nixon-lakers-1970s", name: "Norm Nixon", franchiseId: "lakers", decade: "1970s", positions: ["PG"], stats: { pts: 15.5, reb: 2.9, ast: 7.5, stl: 1.7, blk: 0.1 }, years: "1977–1979", accolades: "Smooth lead guard" },
  { id: "jamaal-wilkes-lakers-1970s", name: "Jamaal Wilkes", franchiseId: "lakers", decade: "1970s", positions: ["SF"], stats: { pts: 14.5, reb: 6.5, ast: 2.7, stl: 1.3, blk: 0.4 }, years: "1977–1979", accolades: "Silk · 20-foot layups" },

  // ---------------- 1980s ----------------
  { id: "magic-johnson-lakers-1980s", name: "Magic Johnson", franchiseId: "lakers", decade: "1980s", positions: ["PG"], stats: { pts: 19.4, reb: 7.3, ast: 11.0, stl: 1.9, blk: 0.4 }, years: "1979–1989", accolades: "3× MVP · 5 titles · Showtime" },
  { id: "kareem-abdul-jabbar-lakers-1980s", name: "Kareem Abdul-Jabbar", franchiseId: "lakers", decade: "1980s", positions: ["C"], stats: { pts: 22.0, reb: 7.8, ast: 3.0, stl: 0.8, blk: 2.0 }, years: "1980–1989", accolades: "Skyhook · all-time scoring lead" },
  { id: "james-worthy-lakers-1980s", name: "James Worthy", franchiseId: "lakers", decade: "1980s", positions: ["SF", "PF"], stats: { pts: 18.5, reb: 5.5, ast: 2.8, stl: 1.2, blk: 0.8 }, years: "1982–1989", accolades: "Big Game James · 3× champ" },
  { id: "byron-scott-lakers-1980s", name: "Byron Scott", franchiseId: "lakers", decade: "1980s", positions: ["SG"], stats: { pts: 17.0, reb: 3.5, ast: 3.0, stl: 1.3, blk: 0.2 }, years: "1983–1989", accolades: "Showtime sniper · 3× champ" },
  { id: "michael-cooper-lakers-1980s", name: "Michael Cooper", franchiseId: "lakers", decade: "1980s", positions: ["SG", "SF"], stats: { pts: 9.5, reb: 3.2, ast: 4.0, stl: 1.1, blk: 0.6 }, years: "1980–1989", accolades: "1987 DPOY · Coop-a-loop" },
  { id: "jamaal-wilkes-lakers-1980s", name: "Jamaal Wilkes", franchiseId: "lakers", decade: "1980s", positions: ["SF"], stats: { pts: 18.5, reb: 5.0, ast: 2.8, stl: 1.2, blk: 0.3 }, years: "1980–1985", accolades: "37 in the '80 clincher" },
  { id: "norm-nixon-lakers-1980s", name: "Norm Nixon", franchiseId: "lakers", decade: "1980s", positions: ["PG"], stats: { pts: 17.0, reb: 2.8, ast: 8.0, stl: 1.4, blk: 0.1 }, years: "1980–1983", accolades: "2× champ backcourt star" },
  { id: "ac-green-lakers-1980s", name: "A.C. Green", franchiseId: "lakers", decade: "1980s", positions: ["PF"], stats: { pts: 10.5, reb: 7.8, ast: 1.1, stl: 0.9, blk: 0.6 }, years: "1985–1989", accolades: "Iron Man · 2× champ" },
  { id: "bob-mcadoo-lakers-1980s", name: "Bob McAdoo", franchiseId: "lakers", decade: "1980s", positions: ["PF", "C"], stats: { pts: 12.0, reb: 4.5, ast: 1.2, stl: 0.6, blk: 0.7 }, years: "1981–1985", accolades: "MVP turned super-sub" },
  { id: "kurt-rambis-lakers-1980s", name: "Kurt Rambis", franchiseId: "lakers", decade: "1980s", positions: ["PF"], stats: { pts: 5.5, reb: 6.5, ast: 1.0, stl: 0.8, blk: 0.4 }, years: "1981–1988", accolades: "Glasses, hustle, 4 rings" },

  // ---------------- 1990s ----------------
  { id: "magic-johnson-lakers-1990s", name: "Magic Johnson", franchiseId: "lakers", decade: "1990s", positions: ["PG"], stats: { pts: 19.4, reb: 7.0, ast: 12.5, stl: 1.6, blk: 0.2 }, years: "1990–1991", accolades: "Final MVP-level seasons" },
  { id: "james-worthy-lakers-1990s", name: "James Worthy", franchiseId: "lakers", decade: "1990s", positions: ["SF"], stats: { pts: 18.0, reb: 4.8, ast: 3.2, stl: 1.0, blk: 0.4 }, years: "1990–1994", accolades: "Hall of Fame finisher" },
  { id: "shaquille-oneal-lakers-1990s", name: "Shaquille O'Neal", franchiseId: "lakers", decade: "1990s", positions: ["C"], stats: { pts: 27.1, reb: 11.4, ast: 2.9, stl: 0.7, blk: 2.6 }, years: "1996–1999", accolades: "Most dominant force arrives" },
  { id: "kobe-bryant-lakers-1990s", name: "Kobe Bryant", franchiseId: "lakers", decade: "1990s", positions: ["SG"], stats: { pts: 15.4, reb: 3.5, ast: 2.7, stl: 1.0, blk: 0.5 }, years: "1996–1999", accolades: "Teen phenom · youngest All-Star" },
  { id: "eddie-jones-lakers-1990s", name: "Eddie Jones", franchiseId: "lakers", decade: "1990s", positions: ["SG", "SF"], stats: { pts: 14.5, reb: 3.7, ast: 3.0, stl: 2.0, blk: 0.6 }, years: "1994–1999", accolades: "All-Star two-way wing" },
  { id: "nick-van-exel-lakers-1990s", name: "Nick Van Exel", franchiseId: "lakers", decade: "1990s", positions: ["PG"], stats: { pts: 15.5, reb: 2.9, ast: 7.5, stl: 1.0, blk: 0.1 }, years: "1993–1998", accolades: "Fearless deep-range lefty" },
  { id: "vlade-divac-lakers-1990s", name: "Vlade Divac", franchiseId: "lakers", decade: "1990s", positions: ["C"], stats: { pts: 12.5, reb: 8.5, ast: 3.0, stl: 1.0, blk: 1.4 }, years: "1990–1996", accolades: "Passing-savant center" },
  { id: "elden-campbell-lakers-1990s", name: "Elden Campbell", franchiseId: "lakers", decade: "1990s", positions: ["PF", "C"], stats: { pts: 10.5, reb: 6.0, ast: 1.3, stl: 0.6, blk: 1.5 }, years: "1990–1999", accolades: "Long shot-blocking big" },
  { id: "sedale-threatt-lakers-1990s", name: "Sedale Threatt", franchiseId: "lakers", decade: "1990s", positions: ["PG"], stats: { pts: 12.5, reb: 2.5, ast: 5.5, stl: 1.5, blk: 0.1 }, years: "1991–1996", accolades: "Bridge-era starting guard" },
  { id: "byron-scott-lakers-1990s", name: "Byron Scott", franchiseId: "lakers", decade: "1990s", positions: ["SG"], stats: { pts: 14.5, reb: 3.0, ast: 2.5, stl: 1.1, blk: 0.2 }, years: "1990–1993", accolades: "Showtime holdover" },

  // ---------------- 2000s ----------------
  { id: "kobe-bryant-lakers-2000s", name: "Kobe Bryant", franchiseId: "lakers", decade: "2000s", positions: ["SG"], stats: { pts: 28.6, reb: 5.9, ast: 5.0, stl: 1.6, blk: 0.6 }, years: "2000–2009", accolades: "81 points · 2008 MVP · 4 rings" },
  { id: "shaquille-oneal-lakers-2000s", name: "Shaquille O'Neal", franchiseId: "lakers", decade: "2000s", positions: ["C"], stats: { pts: 27.2, reb: 12.0, ast: 3.1, stl: 0.5, blk: 2.5 }, years: "2000–2004", accolades: "3× straight Finals MVP" },
  { id: "pau-gasol-lakers-2000s", name: "Pau Gasol", franchiseId: "lakers", decade: "2000s", positions: ["PF", "C"], stats: { pts: 18.3, reb: 9.8, ast: 3.4, stl: 0.5, blk: 1.2 }, years: "2008–2009", accolades: "Trade that flipped the West" },
  { id: "derek-fisher-lakers-2000s", name: "Derek Fisher", franchiseId: "lakers", decade: "2000s", positions: ["PG"], stats: { pts: 8.5, reb: 2.3, ast: 2.8, stl: 1.1, blk: 0.1 }, years: "2000–2004", accolades: "0.4 shot · 5 rings total" },
  { id: "lamar-odom-lakers-2000s", name: "Lamar Odom", franchiseId: "lakers", decade: "2000s", positions: ["PF", "SF"], stats: { pts: 13.5, reb: 8.9, ast: 3.8, stl: 0.9, blk: 0.9 }, years: "2004–2009", accolades: "Point-forward Swiss Army knife" },
  { id: "robert-horry-lakers-2000s", name: "Robert Horry", franchiseId: "lakers", decade: "2000s", positions: ["PF"], stats: { pts: 6.5, reb: 5.0, ast: 2.2, stl: 0.9, blk: 0.7 }, years: "2000–2003", accolades: "2002 Game 4 buzzer-beater" },
  { id: "rick-fox-lakers-2000s", name: "Rick Fox", franchiseId: "lakers", decade: "2000s", positions: ["SF"], stats: { pts: 8.0, reb: 3.8, ast: 2.7, stl: 0.9, blk: 0.3 }, years: "2000–2004", accolades: "3× champ glue wing" },
  { id: "andrew-bynum-lakers-2000s", name: "Andrew Bynum", franchiseId: "lakers", decade: "2000s", positions: ["C"], stats: { pts: 10.5, reb: 7.0, ast: 1.2, stl: 0.4, blk: 1.5 }, years: "2005–2009", accolades: "Youngest player in NBA history" },
  { id: "trevor-ariza-lakers-2000s", name: "Trevor Ariza", franchiseId: "lakers", decade: "2000s", positions: ["SF"], stats: { pts: 8.5, reb: 4.0, ast: 1.8, stl: 1.4, blk: 0.3 }, years: "2007–2009", accolades: "2009 title steals artist" },
  { id: "glen-rice-lakers-2000s", name: "Glen Rice", franchiseId: "lakers", decade: "2000s", positions: ["SF"], stats: { pts: 15.9, reb: 4.1, ast: 2.2, stl: 0.6, blk: 0.2 }, years: "2000", accolades: "2000 title sharpshooter" },

  // ---------------- 2010s ----------------
  { id: "kobe-bryant-lakers-2010s", name: "Kobe Bryant", franchiseId: "lakers", decade: "2010s", positions: ["SG"], stats: { pts: 25.0, reb: 4.9, ast: 4.8, stl: 1.2, blk: 0.3 }, years: "2010–2016", accolades: "2010 Finals MVP · 60 in finale" },
  { id: "pau-gasol-lakers-2010s", name: "Pau Gasol", franchiseId: "lakers", decade: "2010s", positions: ["PF", "C"], stats: { pts: 17.5, reb: 10.5, ast: 3.5, stl: 0.5, blk: 1.4 }, years: "2010–2014", accolades: "2010 Game 7 hero" },
  { id: "lebron-james-lakers-2010s", name: "LeBron James", franchiseId: "lakers", decade: "2010s", positions: ["SF", "PG"], stats: { pts: 26.4, reb: 8.0, ast: 8.3, stl: 1.2, blk: 0.6 }, years: "2018–2019", accolades: "The King arrives in LA" },
  { id: "anthony-davis-lakers-2010s", name: "Anthony Davis", franchiseId: "lakers", decade: "2010s", positions: ["PF", "C"], stats: { pts: 26.1, reb: 9.3, ast: 3.2, stl: 1.5, blk: 2.3 }, years: "2019–2020", accolades: "Blockbuster arrival season" },
  { id: "andrew-bynum-lakers-2010s", name: "Andrew Bynum", franchiseId: "lakers", decade: "2010s", positions: ["C"], stats: { pts: 15.0, reb: 9.8, ast: 1.4, stl: 0.4, blk: 1.9 }, years: "2010–2012", accolades: "All-NBA center · 2010 champ" },
  { id: "dwight-howard-lakers-2010s", name: "Dwight Howard", franchiseId: "lakers", decade: "2010s", positions: ["C"], stats: { pts: 17.1, reb: 12.4, ast: 1.4, stl: 1.1, blk: 2.4 }, years: "2012–2013", accolades: "All-Star season in purple" },
  { id: "steve-nash-lakers-2010s", name: "Steve Nash", franchiseId: "lakers", decade: "2010s", positions: ["PG"], stats: { pts: 12.7, reb: 2.8, ast: 6.7, stl: 0.6, blk: 0.1 }, years: "2012–2014", accolades: "2× MVP's final chapter" },
  { id: "metta-world-peace-lakers-2010s", name: "Metta World Peace", franchiseId: "lakers", decade: "2010s", positions: ["SF"], stats: { pts: 9.5, reb: 4.0, ast: 2.2, stl: 1.4, blk: 0.4 }, years: "2010–2013", accolades: "2010 Game 7 dagger three" },
  { id: "jordan-clarkson-lakers-2010s", name: "Jordan Clarkson", franchiseId: "lakers", decade: "2010s", positions: ["PG", "SG"], stats: { pts: 14.5, reb: 3.2, ast: 2.9, stl: 0.9, blk: 0.2 }, years: "2014–2018", accolades: "Young-core bucket-getter" },
  { id: "julius-randle-lakers-2010s", name: "Julius Randle", franchiseId: "lakers", decade: "2010s", positions: ["PF"], stats: { pts: 13.5, reb: 8.5, ast: 2.6, stl: 0.7, blk: 0.4 }, years: "2014–2018", accolades: "Bowling-ball young forward" },

  // ---------------- 2020s ----------------
  { id: "lebron-james-lakers-2020s", name: "LeBron James", franchiseId: "lakers", decade: "2020s", positions: ["SF", "PF"], stats: { pts: 26.5, reb: 7.8, ast: 8.0, stl: 1.1, blk: 0.6 }, years: "2020–2026", accolades: "2020 Finals MVP · scoring record" },
  { id: "anthony-davis-lakers-2020s", name: "Anthony Davis", franchiseId: "lakers", decade: "2020s", positions: ["PF", "C"], stats: { pts: 25.0, reb: 11.0, ast: 3.2, stl: 1.2, blk: 2.2 }, years: "2020–2025", accolades: "2020 bubble title co-star" },
  { id: "luka-doncic-lakers-2020s", name: "Luka Doncic", franchiseId: "lakers", decade: "2020s", positions: ["PG", "SG"], stats: { pts: 28.5, reb: 8.2, ast: 7.8, stl: 1.1, blk: 0.5 }, years: "2025–2026", accolades: "Stunning trade · new face of LA" },
  { id: "austin-reaves-lakers-2020s", name: "Austin Reaves", franchiseId: "lakers", decade: "2020s", positions: ["SG", "PG"], stats: { pts: 15.5, reb: 4.0, ast: 4.8, stl: 0.8, blk: 0.3 }, years: "2021–2026", accolades: "Undrafted to core piece" },
  { id: "russell-westbrook-lakers-2020s", name: "Russell Westbrook", franchiseId: "lakers", decade: "2020s", positions: ["PG"], stats: { pts: 17.4, reb: 6.7, ast: 7.0, stl: 1.0, blk: 0.4 }, years: "2021–2023", accolades: "Triple-double Hall of Famer" },
  { id: "dangelo-russell-lakers-2020s", name: "D'Angelo Russell", franchiseId: "lakers", decade: "2020s", positions: ["PG"], stats: { pts: 16.5, reb: 3.0, ast: 6.0, stl: 0.9, blk: 0.4 }, years: "2023–2024", accolades: "Smooth-shooting return stint" },
  { id: "rui-hachimura-lakers-2020s", name: "Rui Hachimura", franchiseId: "lakers", decade: "2020s", positions: ["PF", "SF"], stats: { pts: 12.5, reb: 4.5, ast: 1.2, stl: 0.6, blk: 0.4 }, years: "2023–2026", accolades: "Playoff-riser forward" },
  { id: "dennis-schroder-lakers-2020s", name: "Dennis Schroder", franchiseId: "lakers", decade: "2020s", positions: ["PG"], stats: { pts: 14.5, reb: 3.3, ast: 5.0, stl: 1.0, blk: 0.2 }, years: "2020–2021", accolades: "Speedy lead-guard stints" },
];
