-- ============================================================
-- Hoops 82-0 — multiplayer schema for Supabase
--
-- Paste this whole file into the Supabase SQL editor and run it.
-- It is idempotent-ish: safe to re-run on an existing project.
-- ============================================================

-- ---------------- Tables ----------------

create table if not exists rooms (
  code       text primary key,
  seed       text not null,
  status     text not null default 'lobby'
             check (status in ('lobby', 'drafting', 'done')),
  host_id    uuid not null,
  created_at timestamptz default now()
);

create table if not exists room_players (
  room_code text references rooms(code) on delete cascade,
  player_id uuid not null,
  name      text not null,
  emoji     text not null default '🏀',
  roster    jsonb,
  wins      int,
  losses    int,
  joined_at timestamptz default now(),
  primary key (room_code, player_id)
);

-- ---------------- Row Level Security ----------------
--
-- NOTE: these policies are intentionally permissive. Hoops is a
-- casual party game with no accounts, no secrets, and no valuable
-- data — anyone with the anon key may read and write rooms. The
-- anon key is public by design; the worst-case abuse is someone
-- scribbling on a 4-letter room, which players can simply abandon.

alter table rooms enable row level security;
alter table room_players enable row level security;

drop policy if exists "anon can select rooms" on rooms;
create policy "anon can select rooms"
  on rooms for select to anon using (true);

drop policy if exists "anon can insert rooms" on rooms;
create policy "anon can insert rooms"
  on rooms for insert to anon with check (true);

drop policy if exists "anon can update rooms" on rooms;
create policy "anon can update rooms"
  on rooms for update to anon using (true) with check (true);

drop policy if exists "anon can select room_players" on room_players;
create policy "anon can select room_players"
  on room_players for select to anon using (true);

drop policy if exists "anon can insert room_players" on room_players;
create policy "anon can insert room_players"
  on room_players for insert to anon with check (true);

drop policy if exists "anon can update room_players" on room_players;
create policy "anon can update room_players"
  on room_players for update to anon using (true) with check (true);

-- ---------------- Realtime ----------------
--
-- Add both tables to the realtime publication so clients receive
-- postgres_changes events. Wrapped so re-running the file does not
-- fail when the tables are already in the publication.

do $$
begin
  begin
    alter publication supabase_realtime add table rooms;
  exception
    when duplicate_object then null;
  end;
  begin
    alter publication supabase_realtime add table room_players;
  exception
    when duplicate_object then null;
  end;
end $$;

-- ---------------- Rematch rounds (migration 20260611180000) ----------------

alter table public.rooms
  add column if not exists round int not null default 1;

alter table public.room_players
  add column if not exists crowns int not null default 0;

alter table public.room_players
  add column if not exists progress int not null default 0;

alter table public.room_players
  add column if not exists left_at timestamptz;

-- ---------------- Round results (migration 20260612090000) ----------------

alter table public.rooms
  add column if not exists results jsonb;
