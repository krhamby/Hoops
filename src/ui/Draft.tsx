import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import type { GameMode, Player, Position, Room, Roster, SkipState, Spin } from "../types";
import { POSITIONS } from "../types";
import {
  emptyRoster,
  generateSpins,
  isComplete,
  respinDecade,
  respinFranchise,
} from "../engine";
import { playersFor } from "../data/players";
import { FRANCHISES, getFranchise } from "../data/franchises";
import Wheel from "./components/Wheel";
import PlayerCard from "./components/PlayerCard";
import Court from "./components/Court";
import StrengthMeter from "./components/StrengthMeter";
import SynergyList from "./components/SynergyList";
import Modal from "./components/Modal";
import { useToast } from "./components/Toast";
import { updateProgress } from "../multiplayer/rooms";
import { playerStatus } from "./util";

type Phase = "team" | "era" | "pick";

interface DraftProps {
  mode: GameMode;
  /** Seed the 5 spins are generated from (room.seed in versus). */
  spinSeed: string;
  /** Seed used for re-spins (per-player in versus). */
  respinSeed: string;
  /** Live room state in versus mode, for the "who's finished" sidebar. */
  room?: Room | null;
  myId?: string;
  onComplete: (roster: Roster) => void;
  onQuit: () => void;
}

export default function Draft({
  mode,
  spinSeed,
  respinSeed,
  room,
  myId,
  onComplete,
  onQuit,
}: DraftProps) {
  const [spins, setSpins] = useState<Spin[]>(() => generateSpins(spinSeed));
  const [round, setRound] = useState(0);
  const [roster, setRoster] = useState<Roster>(() => emptyRoster());
  const [skips, setSkips] = useState<SkipState>({
    franchiseSkipUsed: false,
    decadeSkipUsed: false,
  });
  const [phase, setPhase] = useState<Phase>("team");
  const [picker, setPicker] = useState<{ player: Player; anyPosition: boolean } | null>(null);
  const [lastFilled, setLastFilled] = useState<Position | null>(null);
  const firedRef = useRef(false);
  // After a team re-spin the era is kept, so the era reel is skipped.
  const skipEraReelRef = useRef(false);
  const toast = useToast();

  const spin = spins[round];
  const franchise = useMemo(() => getFranchise(spin.franchiseId), [spin.franchiseId]);

  const players = useMemo(() => {
    try {
      return playersFor(spin.franchiseId, spin.decade);
    } catch {
      return [];
    }
  }, [spin.franchiseId, spin.decade]);

  const openPositions = useMemo(
    () => POSITIONS.filter((p) => roster[p] === null),
    [roster],
  );
  const filledCount = POSITIONS.length - openPositions.length;

  // Share live draft progress with the room (best effort — silently
  // skipped on pre-migration databases or flaky connections).
  const roomCode = room?.code;
  useEffect(() => {
    if (mode !== "versus" || !roomCode) return;
    updateProgress(roomCode, filledCount).catch(() => {});
  }, [mode, roomCode, filledCount]);
  const pickedNames = useMemo(
    () =>
      new Set(
        POSITIONS.map((p) => roster[p]?.name).filter((n): n is string => Boolean(n)),
      ),
    [roster],
  );

  // Soft-lock escape hatch: when nobody in the pool fits an open slot at
  // their natural position, allow anyone (non-duplicate) to play anywhere.
  const poolStuck = useMemo(
    () =>
      players.length > 0 &&
      openPositions.length > 0 &&
      players.every(
        (p) =>
          pickedNames.has(p.name) ||
          p.positions.every((pos) => roster[pos] !== null),
      ),
    [players, openPositions, pickedNames, roster],
  );

  // Auto-advance to the season sim once all 5 slots are filled.
  useEffect(() => {
    if (firedRef.current || !isComplete(roster)) return;
    const t = window.setTimeout(() => {
      firedRef.current = true;
      onComplete(roster);
    }, 800);
    return () => window.clearTimeout(t);
  }, [roster, onComplete]);

  function placePlayer(player: Player, pos: Position) {
    setRoster((r) => ({ ...r, [pos]: player }));
    setLastFilled(pos);
    setPicker(null);
    if (round < spins.length - 1) {
      setRound((r) => r + 1);
      setPhase("team");
    }
  }

  function handlePick(player: Player) {
    if (pickedNames.has(player.name)) return;
    const open = player.positions.filter((p) => roster[p] === null);
    if (open.length === 0) {
      // Out-of-position emergency pick (only when the whole pool is stuck).
      if (poolStuck && openPositions.length > 0) {
        if (openPositions.length === 1) placePlayer(player, openPositions[0]);
        else setPicker({ player, anyPosition: true });
      }
      return;
    }
    if (open.length === 1) placePlayer(player, open[0]);
    else setPicker({ player, anyPosition: false });
  }

  function respinTeam() {
    if (skips.franchiseSkipUsed) return;
    const next = respinFranchise(respinSeed, spins, round);
    setSpins((s) => s.map((sp, i) => (i === round ? next : sp)));
    setSkips((k) => ({ ...k, franchiseSkipUsed: true }));
    // The team lifeline keeps the era, so don't replay the era reel.
    skipEraReelRef.current = next.decade === spin.decade;
    setPhase("team");
  }

  function respinEra() {
    if (skips.decadeSkipUsed) return;
    const next = respinDecade(respinSeed, spins[round]);
    if (next.decade === spins[round].decade) {
      // No alternative era for this franchise — don't burn the lifeline.
      toast("No other era available for this team — lifeline not used", "error");
      return;
    }
    setSpins((s) => s.map((sp, i) => (i === round ? next : sp)));
    setSkips((k) => ({ ...k, decadeSkipUsed: true }));
    setPhase("era");
  }

  const franchiseReelItems = useMemo(
    () => FRANCHISES.map((f) => ({ label: f.short, colors: f.colors })),
    [],
  );
  const decadeReelItems = useMemo(
    () => franchise.decades.map((d) => ({ label: d, colors: franchise.colors })),
    [franchise],
  );

  return (
    <main className="screen draft">
      <header className="draft-head">
        <button type="button" className="btn btn-ghost" onClick={onQuit}>
          ← Quit
        </button>
        <div className="draft-round">
          <span className="display draft-round-label">
            Pick {Math.min(round + 1, 5)} of 5
          </span>
          <span className="round-dots" aria-hidden="true">
            {spins.map((_, i) => (
              <i
                key={i}
                className={
                  i < round || (i === round && isComplete(roster))
                    ? "rd rd-done"
                    : i === round
                      ? "rd rd-now"
                      : "rd"
                }
              />
            ))}
          </span>
        </div>
        <div className="draft-skips">
          <button
            type="button"
            className="btn btn-skip"
            onClick={respinTeam}
            disabled={skips.franchiseSkipUsed || phase !== "pick"}
            title={skips.franchiseSkipUsed ? "Team re-spin already used" : "Re-spin the franchise (once per game)"}
          >
            🔁 Re-spin team {skips.franchiseSkipUsed ? "· used" : ""}
          </button>
          <button
            type="button"
            className="btn btn-skip"
            onClick={respinEra}
            disabled={skips.decadeSkipUsed || phase !== "pick"}
            title={skips.decadeSkipUsed ? "Era re-spin already used" : "Re-spin the decade (once per game)"}
          >
            🔁 Re-spin era {skips.decadeSkipUsed ? "· used" : ""}
          </button>
        </div>
      </header>

      <div className="draft-body">
        <section className="draft-main">
          {phase === "team" && (
            <div className="reel-stage">
              <Wheel
                key={`team-${round}-${spin.franchiseId}`}
                title="Franchise"
                items={franchiseReelItems}
                final={{ label: franchise.name, sub: franchise.lineage, colors: franchise.colors }}
                onLocked={() => {
                  if (skipEraReelRef.current) {
                    skipEraReelRef.current = false;
                    setPhase("pick");
                  } else {
                    setPhase("era");
                  }
                }}
              />
            </div>
          )}

          {phase === "era" && (
            <div className="reel-stage">
              <div className="reel-locked-chip" style={{ background: franchise.colors[0] }}>
                {franchise.name}
              </div>
              <Wheel
                key={`era-${round}-${spin.franchiseId}-${spin.decade}`}
                title="Era"
                items={decadeReelItems}
                final={{ label: spin.decade, colors: franchise.colors }}
                onLocked={() => setPhase("pick")}
              />
            </div>
          )}

          {phase === "pick" && (
            <>
              <div
                className="spin-banner"
                style={{ "--c1": franchise.colors[0], "--c2": franchise.colors[1] } as CSSProperties}
              >
                <span className="spin-banner-team display">{franchise.name}</span>
                <span className="spin-banner-era mono">{spin.decade}</span>
              </div>
              {players.length === 0 ? (
                <div className="empty-pool">
                  <p>No players in our database for this franchise and era yet.</p>
                  <p className="empty-pool-hint">
                    Use a re-spin{!skips.franchiseSkipUsed || !skips.decadeSkipUsed ? "" : " — but you've used both. Sorry, that's a brick."}
                  </p>
                </div>
              ) : (
                <>
                  {poolStuck && (
                    <div className="stuck-banner" role="status">
                      No one here plays your open position{openPositions.length > 1 ? "s" : ""} —
                      emergency rules: anyone can play anywhere this round.
                    </div>
                  )}
                  <div className="player-grid">
                    {players.map((p, i) => {
                      const open = p.positions.filter((pos) => roster[pos] === null);
                      const dup = pickedNames.has(p.name);
                      const disabled = dup || (open.length === 0 && !poolStuck);
                      return (
                        <PlayerCard
                          key={p.id}
                          player={p}
                          accent={franchise.colors}
                          openPositions={poolStuck && open.length === 0 ? openPositions : open}
                          disabled={disabled}
                          disabledReason={
                            dup ? "Already on your roster" : open.length === 0 && !poolStuck ? "No open position" : undefined
                          }
                          onPick={handlePick}
                          index={i}
                        />
                      );
                    })}
                  </div>
                </>
              )}
            </>
          )}
        </section>

        <aside className="draft-side">
          <Court roster={roster} lastFilled={lastFilled} />
          <StrengthMeter roster={roster} />
          <SynergyList roster={roster} compact />
          {mode === "versus" && room && (
            <div className="room-mini">
              <div className="room-mini-title">
                Room <span className="mono">{room.code}</span>
              </div>
              <ul className="room-mini-list">
                {room.players.filter((p) => !p.left).map((p) => (
                  <li key={p.id} className={p.id === myId ? "me" : ""}>
                    <span className="rm-emoji">{p.emoji}</span>
                    <span className="rm-name">
                      {p.name}
                      {p.id === myId ? " (you)" : ""}
                    </span>
                    <span className="rm-status mono">
                      {p.id === myId ? `Pick ${Math.min(filledCount + 1, 5)} of 5` : playerStatus(p)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      {picker && (
        <Modal title={`Slot ${picker.player.name}`} onClose={() => setPicker(null)}>
          <p className="picker-hint">
            Pick a position for {picker.player.name}
            {picker.anyPosition ? " (out of position — emergency rules)" : ""}:
          </p>
          <div className="picker-buttons">
            {(picker.anyPosition ? openPositions : picker.player.positions.filter((pos) => roster[pos] === null)).map(
              (pos) => (
                <button
                  key={pos}
                  type="button"
                  className="btn btn-primary picker-pos"
                  onClick={() => placePlayer(picker.player, pos)}
                >
                  {pos}
                </button>
              ),
            )}
          </div>
        </Modal>
      )}
    </main>
  );
}
