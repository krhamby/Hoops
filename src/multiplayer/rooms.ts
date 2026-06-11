// ============================================================
// Room lifecycle for Versus mode, backed by Supabase tables
// `rooms` and `room_players` (see supabase/schema.sql).
//
// Framework-free (no React). Every entry point throws
// Error("Multiplayer is not configured") when Supabase is not
// set up, so the UI can gate Versus behind isConfigured().
// ============================================================

import type { SupabaseClient, RealtimeChannel } from "@supabase/supabase-js";
import type {
  Position,
  Room,
  RoomPlayer,
  RoomStatus,
  StoredResults,
} from "../types";
import { getSupabase, isConfigured } from "./config";
import { getIdentity } from "./identity";

// ---------------- DB row shapes ----------------

interface RoomRow {
  code: string;
  seed: string;
  status: RoomStatus;
  host_id: string;
  created_at: string;
  /** Absent until the rematch_rounds migration has been applied. */
  round?: number | null;
  /** Absent until the round_results migration has been applied. */
  results?: unknown;
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
  /** Absent until the rematch_rounds migration has been applied. */
  crowns?: number | null;
  progress?: number | null;
  left_at?: string | null;
}

/** PostgREST "column does not exist" — the migration isn't applied yet. */
function isMissingColumn(error: { code?: string } | null): boolean {
  return error?.code === "42703" || error?.code === "PGRST204";
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
    crowns: row.crowns ?? 0,
    progress: row.progress ?? 0,
    left: row.left_at != null,
  };
}

/**
 * Stored round results come back from jsonb as parsed JSON. Null/absent
 * (pre-migration column, or round not finalized yet) maps to null so the
 * UI falls back to client-side computation.
 */
function parseStoredResults(value: unknown): StoredResults | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as StoredResults;
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
    round: roomRow.round ?? 1,
    results: parseStoredResults(roomRow.results),
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

/**
 * Upsert only identity/liveness columns so a (re-)join never clobbers
 * a previously submitted roster/record, and always reactivates a row
 * that was marked as departed. Falls back to the pre-migration column
 * set when left_at doesn't exist yet. Returns an error message or null.
 */
async function seatPlayer(
  client: SupabaseClient,
  code: string,
  identity: { id: string; name: string; emoji: string }
): Promise<string | null> {
  const base = {
    room_code: code,
    player_id: identity.id,
    name: identity.name,
    emoji: identity.emoji,
  };
  const { error } = await client
    .from("room_players")
    .upsert({ ...base, left_at: null }, { onConflict: "room_code,player_id" });
  if (!error) return null;
  if (isMissingColumn(error)) {
    const { error: retryError } = await client
      .from("room_players")
      .upsert(base, { onConflict: "room_code,player_id" });
    return retryError ? retryError.message : null;
  }
  return error.message;
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

  const playerError = await seatPlayer(client, code, identity);
  if (playerError) {
    throw new Error(`Could not join created room: ${playerError}`);
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

  const seatError = await seatPlayer(client, normalized, identity);
  if (seatError) throw new Error(`Could not join room: ${seatError}`);

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

/**
 * Host action: move the room from "lobby" to "drafting". Gated on the
 * current status so a stale double-start (e.g. a retried click after the
 * room already advanced, or a backgrounded tab waking up) matches zero
 * rows instead of yanking an in-flight round back to "drafting".
 */
export async function startRoom(code: string): Promise<void> {
  const client = requireClient();
  const { error } = await client
    .from("rooms")
    .update({ status: "drafting" satisfies RoomStatus })
    .eq("code", normalizeCode(code))
    .eq("status", "lobby" satisfies RoomStatus);
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

  // If everyone (who hasn't left) has submitted, close out the room.
  type SubmissionRow = Pick<RoomPlayerRow, "roster" | "wins" | "losses"> & {
    left_at?: string | null;
  };
  let playerRows: SubmissionRow[] | null = null;
  let playersError: { code?: string; message: string } | null = null;
  {
    const res = await client
      .from("room_players")
      .select("roster, wins, losses, left_at")
      .eq("room_code", normalized);
    playerRows = res.data as SubmissionRow[] | null;
    playersError = res.error;
  }
  if (playersError && isMissingColumn(playersError)) {
    const res = await client
      .from("room_players")
      .select("roster, wins, losses")
      .eq("room_code", normalized);
    playerRows = res.data as SubmissionRow[] | null;
    playersError = res.error;
  }
  if (playersError) {
    throw new Error(`Could not check submissions: ${playersError.message}`);
  }

  const rows = (playerRows ?? []).filter((r) => r.left_at == null);
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
 * Store the authoritative round outcome on the room, first-writer-wins:
 * the update is guarded by `results is null`, so when another client
 * already finalized this round the update matches zero rows and this
 * call SILENTLY succeeds (the loser simply renders the stored results
 * it receives via its subscription). Likewise a silent no-op on
 * databases without the round_results migration — those clients keep
 * computing results locally, exactly as before.
 */
export async function finalizeResults(
  code: string,
  results: StoredResults
): Promise<void> {
  const client = requireClient();
  const { error } = await client
    .from("rooms")
    .update({ results })
    .eq("code", normalizeCode(code))
    .is("results", null);
  if (error && !isMissingColumn(error)) {
    throw new Error(`Could not store round results: ${error.message}`);
  }
}

/**
 * Host action: run it back. Awards the finished round's champion a
 * crown, wipes every player's roster/record, rolls a fresh shared
 * seed, bumps the round counter, and drops the whole room straight
 * back into "drafting". All clients react via their subscription.
 *
 * Requires the rematch_rounds migration (rooms.round,
 * room_players.crowns) — throws a friendly hint otherwise.
 */
export async function rematchRoom(
  code: string,
  championId: string | null
): Promise<void> {
  const client = requireClient();
  const normalized = normalizeCode(code);

  const migrationHint =
    "Rematch needs the latest database migration — run supabase/migrations/20260611180000_rematch_rounds.sql on your Supabase project.";
  const describe = (action: string, error: { code?: string; message: string }) =>
    isMissingColumn(error)
      ? new Error(migrationHint)
      : new Error(`${action}: ${error.message}`);

  const { data: roomRow, error: roomError } = await client
    .from("rooms")
    .select("round, status")
    .eq("code", normalized)
    .maybeSingle();
  if (roomError) throw describe("Could not start the rematch", roomError);
  if (!roomRow) throw new Error(`Room "${normalized}" was not found.`);
  const current = roomRow as { round: number | null; status: RoomStatus };
  const currentRound = current.round ?? 1;

  // Commit point: flip the room first, guarded so exactly one client
  // performs the done -> drafting transition for this round (a retry
  // after a partial failure, or a double-click, can't re-transition).
  // Clients never see "done with wiped rosters", which previously
  // flashed an error screen. Also clears the stored round results so
  // the new round's first finisher can finalize fresh ones.
  const newSeed = randomSeed();
  const flip = {
    seed: newSeed,
    status: "drafting" satisfies RoomStatus,
    round: currentRound + 1,
  };
  let flipped: unknown[] | null = null;
  let flipError: { code?: string; message: string } | null = null;
  {
    const res = await client
      .from("rooms")
      .update({ ...flip, results: null })
      .eq("code", normalized)
      .eq("status", "done" satisfies RoomStatus)
      .eq("round", currentRound)
      .select("code");
    flipped = res.data;
    flipError = res.error;
  }
  if (flipError && isMissingColumn(flipError)) {
    // The results column may not exist yet (round_results migration not
    // applied); retry without it. If `round` is the missing column the
    // retry fails the same way and is reported as the migration hint.
    const res = await client
      .from("rooms")
      .update(flip)
      .eq("code", normalized)
      .eq("status", "done" satisfies RoomStatus)
      .eq("round", currentRound)
      .select("code");
    flipped = res.data;
    flipError = res.error;
  }
  if (flipError) throw describe("Could not start the rematch", flipError);
  const wonTransition = (flipped?.length ?? 0) > 0;

  // Reset players for the new round. Idempotent — also runs on a
  // retry that lost the transition race, recovering a half-applied
  // rematch. The crown is awarded only by the transition winner so a
  // retry can never double-crown the champion.
  const resetPlayers = async () => {
    const { error } = await client
      .from("room_players")
      .update({ roster: null, wins: null, losses: null, progress: 0 })
      .eq("room_code", normalized);
    if (error) throw describe("Could not reset the room", error);
  };
  const awardCrown = async () => {
    if (!wonTransition || !championId) return;
    const { data: champRow, error: readError } = await client
      .from("room_players")
      .select("crowns")
      .eq("room_code", normalized)
      .eq("player_id", championId)
      .maybeSingle();
    if (readError) throw describe("Could not award the crown", readError);
    const crowns = ((champRow as { crowns: number | null } | null)?.crowns ?? 0) + 1;
    const { error } = await client
      .from("room_players")
      .update({ crowns })
      .eq("room_code", normalized)
      .eq("player_id", championId);
    if (error) throw describe("Could not award the crown", error);
  };
  await Promise.all([resetPlayers(), awardCrown()]);
}

/**
 * Mark the local player as having left the room. Their row is kept
 * (finished-round standings stay intact) but waits and rematches skip
 * them. Re-joining with the same identity reactivates the row.
 * No-op on databases without the rematch_rounds migration.
 */
export async function markLeftRoom(code: string): Promise<void> {
  const client = requireClient();
  const identity = getIdentity();
  const { error } = await client
    .from("room_players")
    .update({ left_at: new Date().toISOString() })
    .eq("room_code", normalizeCode(code))
    .eq("player_id", identity.id);
  if (error && !isMissingColumn(error)) {
    throw new Error(`Could not leave the room: ${error.message}`);
  }
}

// ---------------- Live draft-progress broadcast ----------------
//
// Draft progress rides Supabase Realtime BROADCAST as the primary
// liveness channel: instant, and immune to the PostgREST schema-cache
// windows that can silently drop the `progress` column write. One
// shared channel per room code (`room:CODE:live`), kept in a
// module-level refcounted registry so the Draft screen's sender and
// App's room subscriber reuse the same socket channel. The table
// column stays as the durable fallback for poll-only clients.

type ProgressListener = (playerId: string, progress: number, at: number) => void;

interface LiveEntry {
  client: SupabaseClient;
  channel: RealtimeChannel;
  /** Held only by subscribeRoom callers; senders borrow without a ref. */
  refs: number;
  listeners: Set<ProgressListener>;
}

const liveEntries = new Map<string, LiveEntry>();

/**
 * Get (or lazily create + subscribe) the shared live channel for a
 * room. Does NOT take a ref — callers that need teardown semantics use
 * acquireLiveEntry/releaseLiveEntry.
 */
function ensureLiveEntry(client: SupabaseClient, code: string): LiveEntry {
  const existing = liveEntries.get(code);
  if (existing) return existing;

  const listeners = new Set<ProgressListener>();
  const channel = client
    .channel(`room:${code}:live`, { config: { broadcast: { self: true } } })
    .on("broadcast", { event: "progress" }, (message) => {
      const payload = (
        message as {
          payload?: { playerId?: unknown; progress?: unknown; at?: unknown };
        }
      ).payload;
      const playerId = payload?.playerId;
      const progress = payload?.progress;
      if (typeof playerId !== "string" || typeof progress !== "number") return;
      const at = typeof payload?.at === "number" ? payload.at : Date.now();
      for (const listener of listeners) listener(playerId, progress, at);
    });
  channel.subscribe();

  const entry: LiveEntry = { client, channel, refs: 0, listeners };
  liveEntries.set(code, entry);
  return entry;
}

function acquireLiveEntry(client: SupabaseClient, code: string): LiveEntry {
  const entry = ensureLiveEntry(client, code);
  entry.refs += 1;
  return entry;
}

function releaseLiveEntry(code: string): void {
  const entry = liveEntries.get(code);
  if (!entry) return;
  entry.refs -= 1;
  if (entry.refs <= 0) {
    liveEntries.delete(code);
    void entry.client.removeChannel(entry.channel);
  }
}

/** Trailing-edge debounce for the durable progress column write. */
const PROGRESS_WRITE_DEBOUNCE_MS = 1500;
const progressWriteTimers = new Map<string, ReturnType<typeof setTimeout>>();

/**
 * Report live draft progress (picks made this round, 0-5) so the rest
 * of the room sees "Pick N of 5" instead of a generic spinner.
 * Fire-and-forget and never throws:
 *
 *   1. Broadcasts a "progress" event on the shared room live channel
 *      immediately (instant for everyone subscribed via subscribeRoom).
 *   2. Durably writes the room_players.progress column via
 *      updateProgress, debounced ~1.5s — except the final pick (5),
 *      which writes immediately so the submitted state lands fast.
 */
export function sendProgress(code: string, progress: number): void {
  const client = getSupabase();
  if (!client) return; // Unconfigured — Versus UI is gated behind isConfigured().
  const normalized = normalizeCode(code);
  const clamped = Math.max(0, Math.min(5, Math.round(progress)));

  try {
    const entry = ensureLiveEntry(client, normalized);
    void entry.channel.send({
      type: "broadcast",
      event: "progress",
      payload: { playerId: getIdentity().id, progress: clamped, at: Date.now() },
    });
  } catch {
    // Broadcast is best-effort; the durable write below still lands.
  }

  const pending = progressWriteTimers.get(normalized);
  if (pending !== undefined) clearTimeout(pending);
  const write = () => {
    progressWriteTimers.delete(normalized);
    updateProgress(normalized, clamped).catch(() => {
      // Best-effort: pre-migration databases (or a schema-cache window)
      // just miss the durable copy; the broadcast already went out.
    });
  };
  if (clamped >= 5) {
    write();
  } else {
    progressWriteTimers.set(
      normalized,
      setTimeout(write, PROGRESS_WRITE_DEBOUNCE_MS)
    );
  }
}

/**
 * Durable draft-progress write (the table column behind sendProgress).
 * Best-effort: silently a no-op on pre-migration databases.
 */
export async function updateProgress(
  code: string,
  progress: number
): Promise<void> {
  const client = requireClient();
  const identity = getIdentity();
  const clamped = Math.max(0, Math.min(5, Math.round(progress)));
  const { error } = await client
    .from("room_players")
    .update({ progress: clamped })
    .eq("room_code", normalizeCode(code))
    .eq("player_id", identity.id);
  if (error && !isMissingColumn(error)) {
    throw new Error(`Could not update progress: ${error.message}`);
  }
}

/**
 * Subscribe to live updates for a room. Three sources, fastest wins:
 *
 *   1. "progress" BROADCASTS on the shared live channel — delivered
 *      instantly by overlaying the broadcast progress onto the last
 *      fetched room (no database round-trip).
 *   2. postgres_changes on both tables, filtered to the room.
 *   3. A 5-second poll as a fallback for users whose connections block
 *      websockets or projects with realtime disabled (plus an initial
 *      snapshot fetch).
 *
 * Every room delivered to cb carries, per player,
 * progress = max(durable column, latest broadcast overlay); the
 * overlay is cleared whenever the round changes or the room leaves
 * "drafting". Returns an unsubscribe function that tears everything
 * down (the shared live channel is refcounted with sendProgress).
 */
export function subscribeRoom(
  code: string,
  cb: (room: Room) => void
): () => void {
  const client = requireClient();
  const normalized = normalizeCode(code);

  let active = true;
  let fetching = false;
  /** Last room fetched from the database, pre-overlay. */
  let lastRoom: Room | null = null;
  /** Round the overlay belongs to (null until the first fetch lands). */
  let overlayRound: number | null = null;
  const overlay = new Map<string, { progress: number; at: number }>();

  /** Drop stale broadcast progress when the round moves on. */
  const syncOverlay = (room: Room) => {
    const roundChanged = overlayRound !== null && overlayRound !== room.round;
    if (roundChanged || room.status !== "drafting") overlay.clear();
    overlayRound = room.round;
  };

  /** Emit to cb with the broadcast overlay applied (max per player). */
  const deliver = (room: Room) => {
    if (!active) return;
    const players = room.players.map((p) => {
      const live = overlay.get(p.id);
      return live && live.progress > p.progress
        ? { ...p, progress: live.progress }
        : p;
    });
    cb({ ...room, players });
  };

  const refresh = async () => {
    if (!active || fetching) return;
    fetching = true;
    try {
      const room = await fetchRoomWithClient(client, normalized);
      if (active && room) {
        lastRoom = room;
        syncOverlay(room);
        deliver(room);
      }
    } catch {
      // Transient fetch failure; the next poll/event will retry.
    } finally {
      fetching = false;
    }
  };

  // 1. Instant liveness: progress broadcasts update the overlay and
  //    re-deliver immediately, synthesized from the last fetched room.
  const liveEntry = acquireLiveEntry(client, normalized);
  const onProgress: ProgressListener = (playerId, progress, at) => {
    if (!active) return;
    const prev = overlay.get(playerId);
    overlay.set(playerId, {
      progress: prev && prev.progress > progress ? prev.progress : progress,
      at,
    });
    if (lastRoom && lastRoom.status === "drafting") deliver(lastRoom);
  };
  liveEntry.listeners.add(onProgress);

  // 2. Database change events.
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

  // 3. Polling fallback (GitHub Pages users may have realtime disabled).
  const interval = setInterval(() => void refresh(), 5000);

  // Initial snapshot so subscribers don't wait for the first tick.
  void refresh();

  return () => {
    active = false;
    clearInterval(interval);
    liveEntry.listeners.delete(onProgress);
    releaseLiveEntry(normalized);
    void client.removeChannel(channel);
  };
}
