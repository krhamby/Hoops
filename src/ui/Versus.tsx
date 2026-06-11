import { useState, type FormEvent } from "react";
import type { Room } from "../types";
import {
  clearLocalConfig,
  getConfigSource,
  isConfigured,
  setLocalConfig,
} from "../multiplayer/config";
import { getIdentity, saveIdentity, type Identity } from "../multiplayer/identity";
import { createRoom, joinRoom, startRoom } from "../multiplayer/rooms";
import { useToast } from "./components/Toast";
import Crowns from "./components/Crowns";
import { errMsg, playerStatus } from "./util";

const EMOJI_CHOICES = ["🏀", "🐐", "🔥", "👟", "🦅", "🐂", "💪", "🎯", "🏆", "⛹️", "🌟", "🧊"];

interface VersusProps {
  /** Live room state (subscribed in App); null when not in a room. */
  room: Room | null;
  onJoined: (room: Room) => void;
  onLeaveRoom: () => void;
  onHome: () => void;
}

export default function Versus({ room, onJoined, onLeaveRoom, onHome }: VersusProps) {
  const toast = useToast();
  const [configured, setConfigured] = useState(() => isConfigured());
  const [identity, setIdentity] = useState<Identity>(() => getIdentity());
  const [url, setUrl] = useState("");
  const [anonKey, setAnonKey] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  const me = identity;
  const isHost = room ? room.hostId === me.id : false;

  function saveConfig(e: FormEvent) {
    e.preventDefault();
    if (!url.trim() || !anonKey.trim()) {
      toast("Paste both the Supabase URL and the anon key", "error");
      return;
    }
    setLocalConfig(url, anonKey);
    setConfigured(isConfigured());
    toast("Supabase connected — versus unlocked", "success");
  }

  function resetConfig() {
    clearLocalConfig();
    setConfigured(isConfigured());
    toast("Cleared saved Supabase settings");
  }

  function updateName(name: string) {
    setIdentity(saveIdentity({ name }));
  }

  function updateEmoji(emoji: string) {
    setIdentity(saveIdentity({ emoji }));
  }

  async function handleCreate() {
    setBusy(true);
    try {
      const r = await createRoom();
      onJoined(r);
    } catch (e) {
      toast(`Couldn't create room: ${errMsg(e)}`, "error");
    } finally {
      setBusy(false);
    }
  }

  async function handleJoin(e: FormEvent) {
    e.preventDefault();
    const code = joinCode.trim().toUpperCase();
    if (code.length !== 4) {
      toast("Room codes are 4 letters", "error");
      return;
    }
    setBusy(true);
    try {
      const r = await joinRoom(code);
      onJoined(r);
    } catch (err) {
      toast(`Couldn't join ${code}: ${errMsg(err)}`, "error");
    } finally {
      setBusy(false);
    }
  }

  async function handleStart() {
    if (!room) return;
    setBusy(true);
    try {
      await startRoom(room.code);
      // Everyone (including us) transitions via the room subscription.
    } catch (e) {
      toast(`Couldn't start the draft: ${errMsg(e)}`, "error");
    } finally {
      setBusy(false);
    }
  }

  async function copyCode() {
    if (!room) return;
    try {
      await navigator.clipboard.writeText(room.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      toast("Couldn't copy the code", "error");
    }
  }

  const mySubmission = room?.players.find((p) => p.id === me.id);

  return (
    <main className="screen versus">
      <header className="versus-head">
        <button type="button" className="btn btn-ghost" onClick={onHome}>
          ← Home
        </button>
        <h1 className="display">Versus</h1>
      </header>

      {!configured ? (
        <section className="panel setup-panel">
          <h2 className="display">One-time setup</h2>
          <p>
            Versus rooms run on a free <a href="https://supabase.com" target="_blank" rel="noreferrer">Supabase</a>{" "}
            project — your group needs exactly one. Follow{" "}
            <a
              href="https://github.com/krhamby/Hoops/blob/main/supabase/README.md"
              target="_blank"
              rel="noreferrer"
            >
              supabase/README.md
            </a>{" "}
            (≈2 minutes), then paste the project URL and anon key below. They're stored only in
            this browser.
          </p>
          <form className="setup-form" onSubmit={saveConfig}>
            <label>
              Supabase URL
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://xxxx.supabase.co"
                autoComplete="off"
              />
            </label>
            <label>
              Anon key
              <input
                type="password"
                value={anonKey}
                onChange={(e) => setAnonKey(e.target.value)}
                placeholder="eyJhbGciOi…"
                autoComplete="off"
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Connect
            </button>
          </form>
          <IdentityEditor identity={me} onName={updateName} onEmoji={updateEmoji} />
        </section>
      ) : !room ? (
        <section className="panel lobby-entry">
          <IdentityEditor identity={me} onName={updateName} onEmoji={updateEmoji} />
          <div className="lobby-actions">
            <button
              type="button"
              className="btn btn-primary btn-big"
              onClick={handleCreate}
              disabled={busy}
            >
              Create room
            </button>
            <form className="join-form" onSubmit={handleJoin}>
              <input
                className="code-input mono"
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value.toUpperCase().slice(0, 4))}
                placeholder="CODE"
                maxLength={4}
                aria-label="4-letter room code"
                autoCapitalize="characters"
                autoComplete="off"
                spellCheck={false}
              />
              <button type="submit" className="btn btn-secondary" disabled={busy}>
                Join
              </button>
            </form>
          </div>
          {getConfigSource() === "local" && (
            <button type="button" className="btn btn-ghost cfg-reset" onClick={resetConfig}>
              Disconnect Supabase
            </button>
          )}
        </section>
      ) : (
        <section className="panel room-panel">
          <div className="room-code-block">
            <span className="room-code-label">Share this with friends</span>
            <div className="room-code display">{room.code}</div>
            {room.round > 1 && <span className="round-tag mono">Round {room.round}</span>}
            <button type="button" className="btn btn-secondary" onClick={copyCode}>
              {copied ? "Copied!" : "Copy code"}
            </button>
          </div>

          <ul className="room-players">
            {room.players.filter((p) => !p.left).map((p) => (
              <li key={p.id} className={p.id === me.id ? "me" : ""}>
                <span className="rp-emoji">{p.emoji}</span>
                <span className="rp-name">
                  {p.name}
                  {p.id === me.id ? " (you)" : ""}
                  {p.id === room.hostId ? <span className="host-tag mono"> HOST</span> : null}
                  <Crowns count={p.crowns} />
                </span>
                {room.status !== "lobby" && (
                  <span className="rp-status mono">{playerStatus(p)}</span>
                )}
              </li>
            ))}
          </ul>

          {room.status === "lobby" ? (
            isHost ? (
              <button
                type="button"
                className="btn btn-primary btn-big"
                onClick={handleStart}
                disabled={busy || room.players.length < 1}
              >
                Start draft
              </button>
            ) : (
              <p className="waiting mono">Waiting for the host to start…</p>
            )
          ) : room.status === "drafting" ? (
            <p className="waiting mono">
              {mySubmission?.roster
                ? "You're done — waiting for the rest of the room…"
                : "Draft in progress…"}
            </p>
          ) : null}

          <button type="button" className="btn btn-ghost" onClick={onLeaveRoom}>
            Leave room
          </button>
        </section>
      )}
    </main>
  );
}

function IdentityEditor({
  identity,
  onName,
  onEmoji,
}: {
  identity: Identity;
  onName: (name: string) => void;
  onEmoji: (emoji: string) => void;
}) {
  return (
    <div className="identity-editor">
      <label className="identity-name">
        Your name
        <input
          type="text"
          value={identity.name}
          maxLength={20}
          onChange={(e) => onName(e.target.value)}
          placeholder="Coach"
        />
      </label>
      <div className="emoji-row" role="radiogroup" aria-label="Avatar emoji">
        {EMOJI_CHOICES.map((em) => (
          <button
            key={em}
            type="button"
            role="radio"
            aria-checked={identity.emoji === em}
            className={`emoji-btn ${identity.emoji === em ? "emoji-active" : ""}`}
            onClick={() => onEmoji(em)}
          >
            {em}
          </button>
        ))}
      </div>
    </div>
  );
}
