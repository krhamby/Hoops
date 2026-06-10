# 🏀 Hoops · Can you go 82–0?

A recreation (and glow-up) of the viral [82-0](https://www.82-0.com/) NBA game —
draft an all-time starting five and chase the perfect season — plus a brand-new
**Versus mode** where you and your friends draft from the *same* spins and your
teams go head-to-head.

**Play it:** https://krhamby.github.io/Hoops/

## How it works

Five rounds. Each round the wheel spins up a random NBA franchise and a random
decade (1950s–2020s, including ABA years and relocated identities like the
Seattle SuperSonics and St. Louis Hawks). You pick one real player from that
team and era — full per-game stats shown — and slot him into PG/SG/SF/PF/C.
You get one team re-spin and one era re-spin per game. When your five is set,
the engine simulates a full 82-game season. The goal: **82–0**.

### Modes

- **Daily Challenge** — everyone in the world gets the same five spins each day
  (seeded by the UTC date). Share your result as a Wordle-style emoji grid.
- **Free Play** — endless random runs.
- **Versus** — create a room, send friends the 4-letter code, and everyone
  drafts from identical spins. When all teams are in, the engine runs each
  team's 82-game season **plus a head-to-head best-of-7 round-robin** and
  crowns a champion. Works for 1v1 or a whole friend group.

### The simulation

Each roster gets offense/defense/chemistry ratings from real per-game stats
(points, rebounds, assists, steals, blocks), with chemistry rewarding balanced
rosters over five volume scorers. The season runs game-by-game against a
realistic spread of opponents (tanking → contender) with seeded randomness, so
the same seed always replays the same season — which is what keeps Versus and
the Daily fair.

## Versus mode setup (Supabase)

Solo modes work with zero backend. Versus needs a free Supabase project —
see **[supabase/README.md](supabase/README.md)** for the 5-minute setup
(create project → run `supabase/schema.sql` → provide the URL + anon key
either as GitHub Actions variables or in the in-app settings panel).

## Development

```bash
npm install
npm run dev      # local dev server
npm test         # engine simulation tests (vitest)
npm run build    # type-check + production build
```

Deploys automatically to GitHub Pages from `main` via
`.github/workflows/deploy.yml`. One-time setup: repo **Settings → Pages →
Source: GitHub Actions**.

## Project layout

```
src/types.ts            shared contracts (Player, Roster, Room, …)
src/data/franchises.ts  all 30 franchises + decades + colors
src/data/players/       ~1,500 real players, per franchise per decade
src/engine/             seeded RNG, wheel, ratings, season + series sims
src/multiplayer/        Supabase rooms (optional at runtime)
src/ui/                 React screens & components
supabase/               schema.sql + setup guide
```

*Not affiliated with the NBA or 82-0.com — just a fan project. Stats are
approximate per-game averages for each player's tenure with that franchise in
that decade.*
