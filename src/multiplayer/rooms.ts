// ============================================================
// Room lifecycle for Versus mode, backed by Supabase tables
// `rooms` and `room_players` (see supabase/schema.sql).
//
// Framework-free (no React). Every entry point throws
// Error("Multiplayer is not configured") when Supabase is not
// set up, so the UI can gate Versus behind isConfigured().
// ============================================================

import type { SupabaseClient, RealtimeChannel } from "@supabase/supabase-js";
import type { Position, Room, RoomPlayer, RoomStatus } from "../types";
import { getSupabase, isConfigured } from "./config";
import { getIdentity } from "./identity";

// ---------------- DB row shapes ----------------

interface RoomRow {
  code: string;
  seed: string;
  status: RoomStatus;
  host_id: string;
  created_at: string;
}

interface RoomPlayerRow {
  room_code: string;
  player_id: string;
  name: string;
  emoji: string;
  roster: Record<Position, string> | null;
  wins: number | null;
  losses: number | null;
  joined_at: string;
}

// ---------------- Helpers ----------------

function requireClient(): SupabaseClient {
  if (!isConfigured()) {
    throw new Error("Multiplayer is not configured");
  }
  const client = getSupabase();
  if (!client) {
    throw new Error("Multiplayer is not configured");
  }
  return client;
}

function normalizeCode(code: string): string {
  return code.trim().toUpperCase();
}

const CODE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomCode(): string {
  let code = "";
  for (let i = 0; i < 4; i++) {
    code += CODE_LETTERS[Math.floor(Math.random() * CODE_LETTERS.length)];
  }
  return code;
}

function randomSeed(): string {
  return (
    Math.random().toString(36).slice(2, 10) +
    Date.now().toString(36) +
    Math.random().toString(36).slice(2, 10)
  );
}

function mapPlayer(row: RoomPlayerRow): RoomPlayer {
  return {
    id: row.player_id,
    name: row.name,
    emoji: row.emoji,
    roster: row.roster ?? null,
    wins: row.wins ?? null,
    losses: row.losses ?? null,
  };
}

function mapRoom(roomRow: RoomRow, playerRows: RoomPlayerRow[]): Room {
  const sorted = [...playerRows].sort((a, b) =>
    a.joined_at < b.joined_at ? -1 : a.joined_at > b.joined_at ? 1 : 0
  );
  return {
    code: roomRow.code,
    seed: roomRow.seed,
    status: roomRow.status,
    hostId: roomRow.host_id,
    createdAt: roomRow.created_at,
    players: sorted.map(mapPlayer),
  };
}

async function fetchRoomWithClient(
  client: SupabaseClient,
  code: string
): Promise<Room | null> {
  const normalized = normalizeCode(code);

  const { data: roomRow, error: roomError } = await client
    .from("rooms")
    .select("*")
    .eq("code", normalized)
    .maybeSingle();
  if (roomError) throw new Error(`Could not load room: ${roomError.message}`);
  if (!roomRow) return null;

  const { data: playerRows, error: playersError } = await client
    .from("room_players")
    .select("*")
    .eq("room_code", normalized)
    .order("joined_at", { ascending: true });
  if (playersError) {
    throw new Error(`Could not load room players: ${playersError.message}`);
  }

  return mapRoom(roomRow as RoomRow, (playerRows ?? []) as RoomPlayerRow[]);
}

// ---------------- Public API ----------------

/**
 * Create a new room with a fresh 4-letter code (retrying on the rare
 * collision) and a random shared seed, and seat the local player as host.
 */
export async function createRoom(): Promise<Room> {
  const client = requireClient();
  const identity = getIdentity();

  const MAX_ATTEMPTS = 8;
  let code = "";
  let inserted = false;

  for (let attempt = 0; attempt < MAX_ATTEMPTS && !inserted; attempt++) {
    code = randomCode();
    const { error } = await client.from("rooms").insert({
      code,
      seed: randomSeed(),
      status: "lobby" satisfies RoomStatus,
      host_id: identity.id,
    });
    if (!error) {
      inserted = true;
    } else if (error.code === "23505") {
      // Code collision — roll a new one.
      continue;
    } else {
      throw new Error(`Could not create room: ${error.message}`);
    }
  }
  if (!inserted) {
    throw new Error("Could not create room: ran out of code attempts");
  }

  const { error: playerError } = await client.from("room_players").upsert(
    {
      room_code: code,
      player_id: identity.id,
      name: identity.name,
      emoji: identity.emoji,
    },
    { onConflict: "room_code,player_id" }
  );
  if (playerError) {
    throw new Error(`Could not join created room: ${playerError.message}`);
  }

  const room = await fetchRoomWithClient(client, code);
  if (!room) throw new Error("Could not create room: it vanished after insert");
  return room;
}

/**
 * Join a room by its 4-letter code (case-insensitive). Idempotent:
 * re-joining a room you are already in just refreshes name/emoji.
 */
export async function joinRoom(code: string): Promise<Room> {
  const client = requireClient();
  const identity = getIdentity();
  const normalized = normalizeCode(code);

  const room = await fetchRoomWithClient(client, normalized);
  if (!room) {
    throw new Error(
      `Room "${normalized}" was not found. Double-check the code with your host.`
    );
  }

  const alreadyJoined = room.players.some((p) => p.id === identity.id);
  if (room.status === "done" && !alreadyJoined) {
    throw new Error(
      `Room "${normalized}" has already finished. Ask your host for a new room.`
    );
  }

  // Upsert only identity columns so a re-join never clobbers a
  // previously submitted roster/record.
  const { error } = await client.from("room_players").upsert(
    {
      room_code: normalized,
      player_id: identity.id,
      name: identity.name,
      emoji: identity.emoji,
    },
    { onConflict: "room_code,player_id" }
  );
  if (error) throw new Error(`Could not join room: ${error.message}`);

  const joined = await fetchRoomWithClient(client, normalized);
  if (!joined) {
    throw new Error(`Room "${normalized}" was not found after joining.`);
  }
  return joined;
}

/** Fetch a room (with its players, ordered by join time), or null. */
export async function fetchRoom(code: string): Promise<Room | null> {
  const client = requireClient();
  return fetchRoomWithClient(client, code);
}

/** Host action: move the room from "lobby" to "drafting". */
export async function startRoom(code: string): Promise<void> {
  const client = requireClient();
  const { error } = await client
    .from("rooms")
    .update({ status: "drafting" satisfies RoomStatus })
    .eq("code", normalizeCode(code));
  if (error) throw new Error(`Could not start room: ${error.message}`);
}

/**
 * Submit the local player's drafted roster and simulated record.
 * When every player in the room has submitted, the room is marked
 * "done" (clients then compute standings locally from the shared seed).
 */
export async function submitResult(
  code: string,
  roster: Record<Position, string>,
  wins: number,
  losses: number
): Promise<void> {
  const client = requireClient();
  const identity = getIdentity();
  const normalized = normalizeCode(code);

  const { error } = await client
    .from("room_players")
    .update({ roster, wins, losses })
    .eq("room_code", normalized)
    .eq("player_id", identity.id);
  if (error) throw new Error(`Could not submit result: ${error.message}`);

  // If everyone has submitted, close out the room.
  const { data: playerRows, error: playersError } = await client
    .from("room_players")
    .select("roster, wins, losses")
    .eq("room_code", normalized);
  if (playersError) {
    throw new Error(`Could not check submissions: ${playersError.message}`);
  }

  const rows = (playerRows ?? []) as Pick<
    RoomPlayerRow,
    "roster" | "wins" | "losses"
  >[];
  const allSubmitted =
    rows.length > 0 &&
    rows.every((r) => r.roster != null && r.wins != null && r.losses != null);

  if (allSubmitted) {
    const { error: doneError } = await client
      .from("rooms")
      .update({ status: "done" satisfies RoomStatus })
      .eq("code", normalized);
    if (doneError) {
      throw new Error(`Could not finish room: ${doneError.message}`);
    }
  }
}

/**
 * Subscribe to live updates for a room. Uses Supabase realtime
 * (postgres_changes on both tables, filtered to the room) and
 * additionally polls every 5 seconds as a fallback for users whose
 * connections block websockets or projects with realtime disabled.
 *
 * Returns an unsubscribe function that tears down both.
 */
export function subscribeRoom(
  code: string,
  cb: (room: Room) => void
): () => void {
  const client = requireClient();
  const normalized = normalizeCode(code);

  let active = true;
  let fetching = false;

  const refresh = async () => {
    if (!active || fetching) return;
    fetching = true;
    try {
      const room = await fetchRoomWithClient(client, normalized);
      if (active && room) cb(room);
    } catch {
      // Transient fetch failure; the next poll/event will retry.
    } finally {
      fetching = false;
    }
  };

  const channel: RealtimeChannel = client
    .channel(`room:${normalized}`)
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "rooms",
        filter: `code=eq.${normalized}`,
      },
      () => void refresh()
    )
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "room_players",
        filter: `room_code=eq.${normalized}`,
      },
      () => void refresh()
    )
    .subscribe();

  // Polling fallback (GitHub Pages users may have realtime disabled).
  const interval = setInterval(() => void refresh(), 5000);

  // Initial snapshot so subscribers don't wait for the first tick.
  void refresh();

  return () => {
    active = false;
    clearInterval(interval);
    void client.removeChannel(channel);
  };
}
