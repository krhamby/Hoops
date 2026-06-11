// ============================================================
// Player-synergy system: "elite ball knowledge". Three layers:
//
//  1. CURATED LEGENDARY DUOS — hand-written pairs of players whose
//     real-life two-man games were historically special (Stockton/
//     Malone, Splash Brothers...). Matched by NAME so any-era
//     versions pair up (1990s Kobe + 2000s Shaq still works).
//  2. REAL-TEAMMATES FAMILIARITY — derived: two drafted players
//     whose dataset entries share franchise + decade AND whose
//     tenure ranges overlap actually shared a locker room. Small
//     capped bonus per pair.
//  3. ARCHETYPE SYNERGIES — derived from latent attributes:
//     elite passer + rim-running lob big, shooters spacing the
//     floor for a post hub, a defensive spine (anchor + perimeter
//     stoppers), and a paint-clog tax for twin non-shooting bigs
//     in a spacing-era lineup (era-relative: an all-1960s front-
//     court is NOT punished — nobody shot threes in 1965).
//
// Everything here is pure, deterministic, order-independent, and
// cheap enough to run on every keystroke of a partial draft.
// The aggregate effect is clamped (±5% offense, ±4% defense) so
// the calibration bands hold (see strength.ts header).
// ============================================================

import {
  POSITIONS,
  type Player,
  type Position,
  type Roster,
  type Synergy,
} from "../../types";
import { slottedAttributes, type PlayerAttributes } from "./attributes";
import { eraContext } from "./era";

const clamp = (x: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, x));

/** Synergy plus which side of the ball it modifies (engine-internal). */
export interface SynergyEffect extends Synergy {
  side: "offense" | "defense";
}

// ---- tuning knobs --------------------------------------------------
// `boost` is a fraction of team efficiency (+0.015 ≈ +1.5% scoring or
// opponent-suppression). The UI can treat |boost| as +/- intensity.
const FAMILIARITY_PER_PAIR = 0.003;
const FAMILIARITY_CAP = 0.009;
const LOB_PER_PAIR = 0.012;
const LOB_CAP = 0.024;
const SPACED_HUB_BOOST = 0.015;
const SPINE_BOOST = 0.015;
const CLOG_MAX_TAX = 0.02; // scaled by the perimeter's era spacing
/** Total clamps applied when folding synergies into the lineup. */
export const SYNERGY_OFF_CLAMP = 0.05;
export const SYNERGY_DEF_CLAMP = 0.04;
/** Efficiency (TS-like) points per unit of offensive boost: a +1%
 *  team-scoring synergy ≈ +0.005 efficiency for all five. */
export const SYNERGY_EFF_PER_BOOST = 0.5;

// ---- 1. curated legendary duos -------------------------------------
// [nameA, nameB, label, detail, boost]. Direction is flavor only —
// the boost is symmetric. Names must match dataset spelling exactly.
type DuoDef = [string, string, string, string, number];

export const CURATED_DUOS: DuoDef[] = [
  ["John Stockton", "Karl Malone", "Pick-and-roll masters", "1,500 games of the same unstoppable two-man action.", 0.02],
  ["Shaquille O'Neal", "Kobe Bryant", "Three-peat tandem", "The most dominant inside-out pairing ever assembled.", 0.02],
  ["Magic Johnson", "Kareem Abdul-Jabbar", "Showtime", "Magic pushes, the Captain trails for the skyhook.", 0.02],
  ["Michael Jordan", "Scottie Pippen", "Dynasty wings", "Two-way perfection — the triangle's twin blades.", 0.02],
  ["Stephen Curry", "Klay Thompson", "Splash Brothers", "Relocation gravity from both wings warps every defense.", 0.02],
  ["LeBron James", "Dwyane Wade", "Heatles fast break", "Lob-trading wings who turned defense into theater.", 0.02],
  ["Nikola Jokic", "Jamal Murray", "Two-man game masters", "The most-run, least-solved action of the 2020s.", 0.02],
  ["Stephen Curry", "Draymond Green", "Handoff hub", "Split cuts and short-roll playmaking around Curry's gravity.", 0.015],
  ["Steve Nash", "Amar'e Stoudemire", "Seven seconds or less", "Drag screens into dunks before the defense sets.", 0.015],
  ["Kareem Abdul-Jabbar", "Oscar Robertson", "The Captain and the Big O", "The Big O feeds the unstoppable skyhook.", 0.015],
  ["Wilt Chamberlain", "Jerry West", "Twin pillars", "Mr. Clutch outside, the Big Dipper sealing the paint.", 0.015],
  ["Larry Bird", "Kevin McHale", "Frontcourt geometry", "Post genius and passing genius sharing one low block.", 0.015],
  ["Tim Duncan", "David Robinson", "Twin Towers", "Two elite anchors who erased the rim entirely.", 0.015],
  ["Hakeem Olajuwon", "Clyde Drexler", "Phi Slama Jama reunion", "College teammates closing the circle with a title.", 0.015],
  ["Gary Payton", "Shawn Kemp", "Sonic boom", "The Glove throws it anywhere; the Reign Man brings it down.", 0.015],
  ["LeBron James", "Kyrie Irving", "The Shot and The Block", "Co-stars of the only 3-1 Finals comeback.", 0.015],
  ["LeBron James", "Anthony Davis", "Bubble lob geometry", "Pocket passes and lobs no defense could measure.", 0.015],
  ["Kevin Durant", "Stephen Curry", "Gravity overload", "Two unguardable scorers bending one defense.", 0.015],
  ["Kobe Bryant", "Pau Gasol", "High-low artistry", "Elbow reads and trust built over back-to-back titles.", 0.015],
  ["Dirk Nowitzki", "Steve Nash", "Pick-and-pop pioneers", "The action that pulled the NBA's bigs to the arc.", 0.015],
  ["Kevin Garnett", "Paul Pierce", "Ubuntu", "Sacrificed stardom into an instant championship.", 0.015],
  ["Isiah Thomas", "Joe Dumars", "Bad Boys backcourt", "Champions' poise at both guard spots.", 0.015],
  ["Walt Frazier", "Earl Monroe", "Rolls-Royce backcourt", "Style and substance — two Hall of Fame guards in sync.", 0.015],
  ["Jayson Tatum", "Jaylen Brown", "The Jays", "Twin two-way wings who grew into champions together.", 0.015],
  ["Giannis Antetokounmpo", "Khris Middleton", "Freak and the closer", "Downhill terror plus midrange ice in crunch time.", 0.015],
  ["Bill Russell", "Bob Cousy", "Fast-break founders", "Russell's outlet to Cousy invented the modern break.", 0.015],
  ["Julius Erving", "Moses Malone", "Fo' fo' fo'", "The Doctor and the Chairman of the Boards, untouchable in '83.", 0.015],
  ["Chris Paul", "Blake Griffin", "Lob City", "The Point God throws it up; Blake brings the building down.", 0.015],
  ["Elgin Baylor", "Jerry West", "Lakers twin stars", "Two of the smoothest 30-a-night scorers ever, side by side.", 0.015],
  ["Penny Hardaway", "Shaquille O'Neal", "Orlando magic act", "Point-forward wizardry feeding young Shaq's wrath.", 0.015],
  ["Tim Duncan", "Tony Parker", "Spurs engine", "Two decades of drop-coverage-proof pick-and-roll.", 0.012],
  ["John Wall", "Bradley Beal", "Wall-to-Beal express", "Hit-ahead passes into corner threes for a decade.", 0.012],
  ["Kevin Durant", "Russell Westbrook", "OKC twin engines", "Relentless rim pressure plus effortless pull-up scoring.", 0.012],
  ["Ja Morant", "Jaren Jackson Jr.", "Grit and Grind 2.0", "Downhill chaos cleaned up by a DPOY eraser.", 0.012],
  ["Shai Gilgeous-Alexander", "Chet Holmgren", "Thunder rising", "Slithering midrange game with a unicorn safety net.", 0.012],
  ["Luka Doncic", "Kyrie Irving", "Dual maestros", "Two ball-on-a-string creators taking turns hunting.", 0.012],
  ["Joel Embiid", "Tyrese Maxey", "Drive-and-dish dance", "Maxey's speed feasts on the attention Embiid commands.", 0.012],
  ["Tyrese Haliburton", "Pascal Siakam", "Pace pushers", "Hit-ahead passing meets transition spin cycles.", 0.012],
  ["Bill Russell", "Sam Jones", "Dynasty core", "Eleven rings of bank shots and blocked shots.", 0.012],
  ["Tracy McGrady", "Yao Ming", "Inside-out Rockets", "T-Mac's shotmaking orbiting the Great Wall.", 0.012],
  ["Damian Lillard", "LaMarcus Aldridge", "Rip City pick-and-pop", "Deep pull-up gravity opening elbow jumpers.", 0.012],
  ["George Mikan", "Jim Pollard", "The first dynasty", "Basketball's original superstar duo, five titles deep.", 0.012],
  ["Bob Pettit", "Cliff Hagan", "Hawks pioneers", "The 1958 title frontcourt that beat Russell's Celtics.", 0.012],
  ["Tim Hardaway", "Chris Mullin", "Run TMC", "Crossovers into catch-and-shoot perfection at full sprint.", 0.012],
  ["Jimmy Butler", "Bam Adebayo", "Heat culture handoffs", "DHO chemistry forged in zero-fun practices.", 0.012],
  ["Chauncey Billups", "Richard Hamilton", "Goin' to work", "Mr. Big Shot finding Rip off an endless conveyor of screens.", 0.012],
];

/** name-pair key -> duo definition (built once). */
const DUO_INDEX: Map<string, DuoDef> = (() => {
  const m = new Map<string, DuoDef>();
  for (const d of CURATED_DUOS) m.set(pairKey(d[0], d[1]), d);
  return m;
})();

function pairKey(a: string, b: string): string {
  const x = a.toLowerCase();
  const y = b.toLowerCase();
  return x < y ? `${x}|${y}` : `${y}|${x}`;
}

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// ---- 2. tenure parsing (real-teammates familiarity) -----------------

/**
 * Parse a tenure string like "1996–2003" (en dash or hyphen) or a
 * single year like "1979" into [start, end]. Null when unparseable.
 */
export function parseYears(years: string): [number, number] | null {
  const m = years.match(/\d{4}/g);
  if (!m || m.length === 0) return null;
  const start = Number(m[0]);
  const end = Number(m[m.length - 1]);
  return end >= start ? [start, end] : [start, start];
}

/** True when both tenure strings parse and their ranges overlap. */
export function yearsOverlap(a: string, b: string): boolean {
  const ra = parseYears(a);
  const rb = parseYears(b);
  if (!ra || !rb) return false;
  return ra[0] <= rb[1] && rb[0] <= ra[1];
}

// ---- detection ------------------------------------------------------

interface Slotted {
  p: Player;
  pos: Position;
  attrs: PlayerAttributes;
}

/**
 * Detect all synergies on a (possibly partial) roster. Pure, cheap,
 * deterministic, and order-independent: slots are visited in fixed
 * PG..C order and null slots are skipped, so 1-2 player draft states
 * are handled gracefully.
 */
export function detectSynergyEffects(roster: Roster): SynergyEffect[] {
  const present: Slotted[] = [];
  for (const pos of POSITIONS) {
    const p = roster[pos];
    // Slot-aware (incl. out-of-position tax): archetype synergies
    // evaluate the SLOTTED role, so a rim-running center wedged in at
    // PF still reads as a frontcourt lob threat, while a guard parked
    // at C is judged (and found wanting) as the big he's pretending
    // to be. attrs.position reports the slot for off-position players.
    if (p) present.push({ p, pos, attrs: slottedAttributes(p, pos) });
  }
  const out: SynergyEffect[] = [];
  if (present.length < 2) return out;

  // ---- curated duos + real-teammates familiarity (pairwise) ----
  const seenDuos = new Set<string>();
  const familiarity: SynergyEffect[] = [];
  for (let i = 0; i < present.length; i++) {
    for (let j = i + 1; j < present.length; j++) {
      const a = present[i];
      const b = present[j];
      const key = pairKey(a.p.name, b.p.name);
      const duo = DUO_INDEX.get(key);
      if (duo && a.p.name !== b.p.name && !seenDuos.has(key)) {
        seenDuos.add(key);
        out.push({
          id: `duo:${slug(duo[0])}+${slug(duo[1])}`,
          label: duo[2],
          detail: duo[3],
          players: [duo[0], duo[1]],
          boost: duo[4],
          side: "offense",
        });
        continue; // a legendary duo subsumes plain familiarity
      }
      // Familiarity: same franchise, same decade, overlapping tenure
      // (same-franchise different-decade pairs never met — nothing).
      if (
        a.p.id !== b.p.id &&
        a.p.franchiseId === b.p.franchiseId &&
        a.p.decade === b.p.decade &&
        yearsOverlap(a.p.years, b.p.years)
      ) {
        const ids = [a.p.id, b.p.id].sort();
        familiarity.push({
          id: `fam:${ids[0]}+${ids[1]}`,
          label: "Real-life teammates",
          detail: `Shared the ${a.p.decade} ${a.p.franchiseId} locker room (${a.p.years} ∩ ${b.p.years}).`,
          players: [a.p.name, b.p.name],
          boost: FAMILIARITY_PER_PAIR,
          side: "offense",
        });
      }
    }
  }
  // Cap total familiarity, scaling each pair so the UI sum is honest.
  const famTotal = familiarity.length * FAMILIARITY_PER_PAIR;
  const famScale = famTotal > FAMILIARITY_CAP ? FAMILIARITY_CAP / famTotal : 1;
  for (const f of familiarity) out.push({ ...f, boost: f.boost * famScale });

  // ---- 3a. elite passer + rim-running lob big ----
  // A real table-setter (playmaking is era/pos-adjusted assists) turns
  // a low-usage rim-diet big into an alley-oop/PnR finisher.
  const passers = present.filter((s) => s.attrs.playmaking >= 6.5);
  const lobBigs = present.filter(
    (s) =>
      (s.attrs.position === "PF" || s.attrs.position === "C") &&
      s.attrs.rimRate >= 0.48 &&
      s.attrs.usage <= 0.2,
  );
  const lobs: SynergyEffect[] = [];
  for (const g of passers) {
    for (const big of lobBigs) {
      if (g.p.id === big.p.id || g.pos === big.pos) continue;
      const ids = [g.p.id, big.p.id].sort();
      lobs.push({
        id: `lob:${ids[0]}+${ids[1]}`,
        label: "Pick-and-roll lob threat",
        detail: `${g.p.name}'s table-setting turns ${big.p.name}'s rim dives into easy flushes.`,
        players: [g.p.name, big.p.name],
        boost: LOB_PER_PAIR,
        side: "offense",
      });
    }
  }
  const lobTotal = lobs.length * LOB_PER_PAIR;
  const lobScale = lobTotal > LOB_CAP ? LOB_CAP / lobTotal : 1;
  for (const l of lobs) out.push({ ...l, boost: l.boost * lobScale });

  // ---- 3b. floor spacing: shooters around a post hub ----
  // Three credible shooters around a high-usage rim-diet hub mean he
  // can never be doubled cleanly. Hub = highest-usage qualifier.
  const hubs = present
    .filter(
      (s) =>
        s.attrs.usage >= 0.27 &&
        s.attrs.rimRate >= 0.45 &&
        s.attrs.threeRate <= 0.1,
    )
    .sort((x, y) => y.attrs.usage - x.attrs.usage);
  if (hubs.length > 0) {
    const hub = hubs[0];
    const shooters = present.filter(
      (s) =>
        s.p.id !== hub.p.id &&
        s.pos !== hub.pos &&
        s.attrs.threeRate >= 0.18 &&
        s.attrs.threeSkill >= 0.34,
    );
    if (shooters.length >= 3) {
      out.push({
        id: `hub:${hub.p.id}`,
        label: "Spaced floor for the hub",
        detail: `${shooters.length} credible shooters make doubling ${hub.p.name} in the post a death sentence.`,
        players: [hub.p.name, ...shooters.map((s) => s.p.name)],
        boost: SPACED_HUB_BOOST,
        side: "offense",
      });
    }
  }

  // ---- 3c. paint-clog tax: twin non-shooting bigs, era-relative ----
  // Two rim-bound bigs who never shoot threes clog driving lanes —
  // but only relative to the spacing their own lineup's era mix
  // expects. Pre-1980 players all have threeRate 0 by construction,
  // so the tax is anchored to the PERIMETER teammates' three-point
  // environment: an all-1960s lineup expects zero spacing (no tax),
  // while 1960s twin towers wedged between 2020s guards get taxed.
  const pf = roster.PF;
  const c = roster.C;
  if (pf && c && pf.id !== c.id) {
    const pfA = slottedAttributes(pf, "PF");
    const cA = slottedAttributes(c, "C");
    const bothNonShooters =
      pfA.threeRate <= 0.05 &&
      cA.threeRate <= 0.05 &&
      pfA.rimRate >= 0.5 &&
      cA.rimRate >= 0.5;
    if (bothNonShooters) {
      const perim = present.filter((s) => s.pos !== "PF" && s.pos !== "C");
      const perimEnv =
        perim.length > 0
          ? perim.reduce((s, x) => s + eraContext(x.p.decade).threeEnv, 0) /
            perim.length
          : 0;
      if (perimEnv >= 0.2) {
        out.push({
          id: `clog:${[pf.id, c.id].sort().join("+")}`,
          label: "Clogged paint",
          detail: `${pf.name} and ${c.name} both live at the rim with no jumper — in this lineup's spacing era the lane is a traffic jam.`,
          players: [pf.name, c.name],
          boost: -CLOG_MAX_TAX * perimEnv,
          side: "offense",
        });
      }
    }
  }

  // ---- 3d. defensive spine: anchor + perimeter stoppers ----
  // An elite rim protector lets aggressive perimeter defenders gamble
  // at the point of attack: the scheme is worth more than its parts.
  const sortedByRim = [...present].sort(
    (x, y) =>
      y.attrs.rimProtection - x.attrs.rimProtection ||
      POSITIONS.indexOf(x.pos) - POSITIONS.indexOf(y.pos),
  );
  const anchor = sortedByRim[0];
  if (anchor && anchor.attrs.rimProtection >= 0.7) {
    const stoppers = present.filter(
      (s) => s.pos !== anchor.pos && s.attrs.perimeterDefense >= 0.6,
    );
    if (stoppers.length >= 2) {
      out.push({
        id: `spine:${anchor.p.id}`,
        label: "Defensive spine",
        detail: `${anchor.p.name} erases the rim, freeing ${stoppers.map((s) => s.p.name).join(" and ")} to hound the perimeter.`,
        players: [anchor.p.name, ...stoppers.map((s) => s.p.name)],
        boost: SPINE_BOOST,
        side: "defense",
      });
    }
  }

  // NOTE (3e): a "no playmaker" tax is intentionally absent — the
  // lineup model's passBoost already charges an iso tax when team
  // playmaking is starved (lineup.ts); adding it here would double-count.

  return out;
}

/**
 * Public API for the UI: all detected synergies for a (possibly
 * partial) roster, as displayable entries. `boost` is the signed
 * fraction of team efficiency (±0.003 faint .. ±0.02 strong).
 */
export function detectSynergies(roster: Roster): Synergy[] {
  return detectSynergyEffects(roster).map(
    ({ id, label, detail, players, boost }) => ({
      id,
      label,
      detail,
      players,
      boost,
    }),
  );
}

/** Fold effects into bounded offense/defense totals (the clamp is the
 *  calibration guarantee: a curated superteam can't run away). */
export function synergyTotals(effects: SynergyEffect[]): {
  off: number;
  def: number;
} {
  let off = 0;
  let def = 0;
  for (const e of effects) {
    if (e.side === "offense") off += e.boost;
    else def += e.boost;
  }
  return {
    off: clamp(off, -SYNERGY_OFF_CLAMP, SYNERGY_OFF_CLAMP),
    def: clamp(def, -SYNERGY_DEF_CLAMP, SYNERGY_DEF_CLAMP),
  };
}
