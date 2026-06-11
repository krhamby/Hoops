# Supabase setup for Versus mode

Hoops 82-0 works fully offline for solo modes. **Versus** (play against
friends via 4-letter room codes) needs a free Supabase project as its
shared backend. Setup takes about five minutes.

## 1. Create a free Supabase project

1. Go to [supabase.com](https://supabase.com) and sign up (free tier is plenty).
2. Click **New project**, pick any name (e.g. `hoops`), set a database
   password (you won't need it for the game), and choose a region near
   your friends.
3. Wait a minute or two for the project to finish provisioning.

## 2. Create the tables

1. In the Supabase dashboard, open **SQL Editor** (left sidebar).
2. Click **New query**.
3. Paste the entire contents of [`schema.sql`](./schema.sql) and click **Run**.

This creates the `rooms` and `room_players` tables, enables row level
security with permissive policies, and turns on realtime updates for
both tables. The file is safe to re-run if you ever need to.

## 3. Get your project credentials

1. Go to **Project Settings → API** (gear icon in the sidebar).
2. Copy two values:
   - **Project URL** — looks like `https://abcdefgh.supabase.co`
   - **anon / public key** — a long string starting with `eyJ...`

> The anon key is **safe to expose publicly** — that's by design. It only
> grants the permissions defined by the row level security policies in
> `schema.sql`, which for this casual game are intentionally open.

## 4. Plug the credentials into the game

Pick **one** of these options:

### Option A: GitHub Actions repository variables (recommended for the deployed site)

The GitHub Pages deploy workflow reads these at build time, so everyone
who visits your deployed site gets Versus enabled automatically.

1. In your GitHub repo, go to **Settings → Secrets and variables → Actions → Variables**.
2. Add two repository variables:
   - `VITE_SUPABASE_URL` = your Project URL
   - `VITE_SUPABASE_ANON_KEY` = your anon key
3. Re-run the Pages deploy workflow (or push any commit) so the site is
   rebuilt with the new variables.

For local development, you can instead put the same two variables in a
`.env.local` file at the repo root.

### Option B: In-app settings panel (no rebuild needed)

1. Open the game and go to **Versus**.
2. When multiplayer is unconfigured, a settings panel appears.
3. Paste the Project URL and anon key there.

These are stored in your browser's localStorage (keys
`hoops.supabaseUrl` / `hoops.supabaseAnonKey`), so each player who joins
this way enters them once per browser. Build-time variables from
Option A take precedence when both are present.

## That's it

Create a room in Versus, share the 4-letter code, and draft away. All
players in a room draft from identical spins (shared seed), and final
standings are computed locally on every client once everyone submits.

## Migrations

Schema changes now live in [`migrations/`](migrations/) as timestamped SQL
files (the Supabase GitHub integration / `supabase db push` picks these up
automatically if you've linked the repo):

| File | What it does |
|---|---|
| `20260610200000_initial_schema.sql` | rooms + room_players tables, RLS, realtime |
| `20260611180000_rematch_rounds.sql` | `rooms.round` + `room_players.crowns` for "Run it back" rematches |

**No GitHub integration?** Just paste the new migration file (or re-run all
of `schema.sql`, which is kept up to date and idempotent) in the Supabase
SQL editor. Until the rematch migration is applied, everything works except
the "Run it back" button, which will show a hint pointing here.
