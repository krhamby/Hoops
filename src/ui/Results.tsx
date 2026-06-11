import { useEffect, useMemo, useState, type CSSProperties } from "react";
import type { GameMode, Room, Roster, SeasonResult } from "../types";
import { POSITIONS } from "../types";
import { shareText } from "../engine";
import { getFranchise } from "../data/franchises";
import SeasonStrip from "./components/SeasonStrip";
import SynergyList from "./components/SynergyList";
import Confetti from "./components/Confetti";
import { useReducedMotion } from "./useReducedMotion";
import { useToast } from "./components/Toast";
import { fmtRecord, playerStatus } from "./util";

interface ResultsProps {
  mode: GameMode;
  result: SeasonResult;
  roster: Roster;
  dailyKey?: string;
  /** Versus: live room (for "n of m finished" + results gate). */
  room?: Room | null;
  myId?: string;
  onPlayAgain: () => void;
  onHome: () => void;
  onViewRoom?: () => void;
}

function ratingPct(v: number, lo: number, hi: number): number {
  return Math.max(6, Math.min(100, ((v - lo) / (hi - lo)) * 100));
}

export default function Results({
  mode,
  result,
  roster,
  dailyKey,
  room,
  myId,
  onPlayAgain,
  onHome,
  onViewRoom,
}: ResultsProps) {
  const reduced = useReducedMotion();
  const total = result.games.length;
  const [revealed, setRevealed] = useState(() => (reduced ? total : 0));
  const [copied, setCopied] = useState(false);
  const toast = useToast();
  const done = revealed >= total;
  const perfect = result.losses === 0;

  // Reveal the 82 games over ~3.5s.
  useEffect(() => {
    if (reduced) {
      setRevealed(total);
      return;
    }
    const id = window.setInterval(() => {
      setRevealed((r) => {
        if (r >= total) {
          window.clearInterval(id);
          return r;
        }
        return r + 1;
      });
    }, 42);
    return () => window.clearInterval(id);
  }, [reduced, total]);

  const shown = result.games.slice(0, revealed);
  const liveWins = useMemo(() => shown.filter((g) => g.win).length, [shown]);
  const current = revealed > 0 ? result.games[Math.min(revealed, total) - 1] : null;
  const firstLossGame = result.firstLoss
    ? result.games[result.firstLoss - 1] ?? null
    : null;

  async function share() {
    const text = shareText(result, { mode, dateKey: dailyKey });
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast("Couldn't copy — your browser blocked the clipboard", "error");
    }
  }

  const activePlayers = room ? room.players.filter((p) => !p.left) : [];
  const submittedCount = activePlayers.filter((p) => p.roster).length;
  const roomDone = room?.status === "done";

  // Versus: once everyone is in, auto-advance to the room results so the
  // showdown is impossible to miss. "Stay here" cancels. The countdown
  // ticks purely; navigation happens in its own effect when it hits 0.
  // (onViewRoom is a stable useCallback from App, so room poll
  // refreshes don't restart the countdown.)
  const [autoCountdown, setAutoCountdown] = useState<number | null>(null);
  const [stayHere, setStayHere] = useState(false);
  const counting =
    mode === "versus" && roomDone && done && !stayHere && Boolean(onViewRoom);
  useEffect(() => {
    if (!counting) {
      setAutoCountdown(null);
      return;
    }
    setAutoCountdown(5);
    const id = window.setInterval(() => {
      setAutoCountdown((c) => (c === null || c <= 0 ? c : c - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [counting]);
  useEffect(() => {
    if (counting && autoCountdown === 0) onViewRoom?.();
  }, [counting, autoCountdown, onViewRoom]);

  return (
    <main className={`screen results ${perfect && done ? "results-perfect" : ""}`}>
      {perfect && done && !reduced && <Confetti />}

      <header className="results-head">
        {mode === "daily" && dailyKey ? (
          <span className="results-kicker mono">Daily #{dailyKey}</span>
        ) : mode === "versus" && room ? (
          <span className="results-kicker mono">Room {room.code}</span>
        ) : (
          <span className="results-kicker mono">Free play</span>
        )}
        <h1 className="display">{done ? "Final" : "Season in progress…"}</h1>
      </header>

      <section className="season-play">
        <SeasonStrip games={result.games} revealed={revealed} />
        {!done && current && (
          <div className="ticker mono" aria-live="off">
            <span className={current.win ? "tick-w" : "tick-l"}>
              G{current.gameNo} · {current.teamScore}–{current.oppScore}{" "}
              {current.win ? "W" : "L"}
            </span>
            <span className="tick-record">
              {fmtRecord(liveWins, shown.length - liveWins)}
            </span>
          </div>
        )}
        {!done && (
          <button type="button" className="btn btn-ghost skip-reveal" onClick={() => setRevealed(total)}>
            Skip ⏭
          </button>
        )}
      </section>

      {done && (
        <section className="final-block">
          <div className={`final-record mono ${perfect ? "gold" : ""}`}>
            {fmtRecord(result.wins, result.losses)}
          </div>
          {perfect ? (
            <p className="final-callout gold-text">PERFECT SEASON. 82–0. Immortality.</p>
          ) : result.firstLoss ? (
            <p className="final-callout">
              Heartbreak in game {result.firstLoss}
              {firstLossGame
                ? ` — fell ${firstLossGame.teamScore}–${firstLossGame.oppScore} to a ${firstLossGame.opponentTier} team`
                : ""}
              .
            </p>
          ) : null}

          {mode === "versus" && room && (
            <div className={`versus-next ${roomDone ? "versus-next-ready" : ""}`}>
              {roomDone ? (
                <>
                  <p className="versus-next-title display">All teams are in. Time for the showdown.</p>
                  <button type="button" className="btn btn-primary btn-big versus-next-cta" onClick={onViewRoom}>
                    🏆 See who won →
                  </button>
                  {autoCountdown !== null && autoCountdown > 0 && (
                    <p className="versus-next-count mono">
                      heading there in {autoCountdown}…{" "}
                      <button type="button" className="link-btn" onClick={() => setStayHere(true)}>
                        stay here
                      </button>
                    </p>
                  )}
                </>
              ) : (
                <>
                  <p className="versus-next-title display">
                    Don't leave yet — the head-to-head starts when everyone finishes.
                  </p>
                  <p className="mono versus-next-count">
                    {submittedCount}/{activePlayers.length} teams in
                  </p>
                  <ul className="wait-list">
                    {activePlayers.map((p) => (
                      <li key={p.id} className={p.roster ? "wl-done" : ""}>
                        <span>{p.emoji}</span>
                        <span className="wl-name">
                          {p.name}
                          {p.id === myId ? " (you)" : ""}
                        </span>
                        <span className="mono wl-status">{playerStatus(p)}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}

          <div className="roster-recap">
            {POSITIONS.map((pos) => {
              const p = roster[pos];
              if (!p) return null;
              const colors = getFranchise(p.franchiseId).colors;
              return (
                <div
                  key={pos}
                  className="recap-card"
                  style={{ "--c1": colors[0], "--c2": colors[1] } as CSSProperties}
                >
                  <span className="recap-pos mono">{pos}</span>
                  <span className="recap-name">{p.name}</span>
                  <span className="recap-meta mono">
                    {getFranchise(p.franchiseId).abbr} · {p.decade} · {p.stats.pts.toFixed(1)} PPG
                  </span>
                </div>
              );
            })}
          </div>

          <SynergyList roster={roster} />

          <div className="rating-bars">
            <RatingBar label="Offense" value={result.rating.offense} pct={ratingPct(result.rating.offense, 95, 135)} fmt={(v) => v.toFixed(1)} />
            <RatingBar label="Defense" value={result.rating.defense} pct={ratingPct(result.rating.defense, 0, 20)} fmt={(v) => v.toFixed(1)} />
            <RatingBar label="Chemistry" value={result.rating.chemistry} pct={ratingPct(result.rating.chemistry, 0, 1)} fmt={(v) => `${Math.round(v * 100)}%`} />
          </div>

          <div className="results-actions">
            <button type="button" className="btn btn-primary" onClick={share}>
              {copied ? "Copied!" : "Share"}
            </button>
            {mode !== "versus" && (
              <button type="button" className="btn btn-secondary" onClick={onPlayAgain}>
                Play again
              </button>
            )}
            <button type="button" className="btn btn-ghost" onClick={onHome}>
              Home
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

function RatingBar({
  label,
  value,
  pct,
  fmt,
}: {
  label: string;
  value: number;
  pct: number;
  fmt: (v: number) => string;
}) {
  return (
    <div className="rating-row">
      <span className="rating-label">{label}</span>
      <div className="bar">
        <div className="bar-fill bar-orange" style={{ width: `${pct}%` }} />
      </div>
      <span className="rating-num mono">{fmt(value)}</span>
    </div>
  );
}
