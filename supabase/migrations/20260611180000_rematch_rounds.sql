-- Rematch + live-room support:
--  * rooms cycle through numbered rounds in place ("run it back")
--  * players accumulate "crowns" (room titles) across rounds
--  * players report live draft progress (picks made, 0-5)
--  * leaving a room is recorded so waits/rematches skip ghosts

alter table public.rooms
  add column if not exists round int not null default 1;

alter table public.room_players
  add column if not exists crowns int not null default 0;

alter table public.room_players
  add column if not exists progress int not null default 0;

alter table public.room_players
  add column if not exists left_at timestamptz;
