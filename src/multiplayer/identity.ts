// ============================================================
// Local player identity for multiplayer. A client-generated uuid
// plus display name + avatar emoji, persisted in localStorage.
// Framework-free; no network calls.
// ============================================================

export interface Identity {
  id: string;
  name: string;
  emoji: string;
}

const LS_KEY = "hoops.identity";

/** Basketball-ish avatar pool for first-time players. */
const EMOJIS = [
  "🏀",
  "🐐",
  "🔥",
  "👟",
  "🦅",
  "🐂",
  "💪",
  "🎯",
  "🏆",
  "⛹️",
  "🌟",
  "🚀",
  "🦖",
  "🐻",
  "⚡",
  "🤘",
];

function randomEmoji(): string {
  return EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
}

function generateId(): string {
  try {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
  } catch {
    // fall through to manual uuid
  }
  // RFC4122-ish v4 fallback for very old browsers.
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function readStored(): Identity | null {
  try {
    const raw = window.localStorage.getItem(LS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Identity>;
    if (typeof parsed.id !== "string" || !parsed.id) return null;
    return {
      id: parsed.id,
      name: typeof parsed.name === "string" ? parsed.name : "",
      emoji: typeof parsed.emoji === "string" && parsed.emoji ? parsed.emoji : "🏀",
    };
  } catch {
    return null;
  }
}

function persist(identity: Identity): void {
  try {
    window.localStorage.setItem(LS_KEY, JSON.stringify(identity));
  } catch {
    // localStorage unavailable; identity lives for this session only.
  }
}

// In-memory cache so repeated calls are cheap and consistent even
// when localStorage is unavailable.
let cached: Identity | null = null;

/**
 * Get the persisted identity, creating one (uuid + empty name +
 * random fun emoji) on first call.
 */
export function getIdentity(): Identity {
  if (cached) return { ...cached };
  const stored = readStored();
  if (stored) {
    cached = stored;
    return { ...stored };
  }
  const fresh: Identity = { id: generateId(), name: "", emoji: randomEmoji() };
  cached = fresh;
  persist(fresh);
  return { ...fresh };
}

/** Update name and/or emoji; the uuid never changes. */
export function saveIdentity(
  patch: Partial<Pick<Identity, "name" | "emoji">>
): Identity {
  const current = getIdentity();
  const next: Identity = {
    id: current.id,
    name: patch.name !== undefined ? patch.name : current.name,
    emoji: patch.emoji !== undefined ? patch.emoji : current.emoji,
  };
  cached = next;
  persist(next);
  return { ...next };
}
