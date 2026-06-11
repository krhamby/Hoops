-- Authoritative round results: the first client to see the room
-- finish computes the standings/series once and stores them here, so
-- every player renders the same outcome even across app versions.
-- Cleared when a rematch starts a new round.

alter table public.rooms
  add column if not exists results jsonb;
