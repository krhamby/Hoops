import { useState } from "react";
import Modal from "./components/Modal";
import { fmtRecord, type DailyRecord } from "./util";

interface HomeProps {
  todayKey: string;
  dailyRecord: DailyRecord | null;
  versusConfigured: boolean;
  onDaily: () => void;
  onFree: () => void;
  onVersus: () => void;
}

export default function Home({
  todayKey,
  dailyRecord,
  versusConfigured,
  onDaily,
  onFree,
  onVersus,
}: HomeProps) {
  const [howOpen, setHowOpen] = useState(false);

  return (
    <main className="screen home">
      <div className="home-hero">
        <div className="wordmark" aria-label="82 to 0">
          82–0
        </div>
        <p className="tagline">Draft an all-time five. Chase the perfect season.</p>
        <button type="button" className="btn btn-ghost how-btn" onClick={() => setHowOpen(true)}>
          How to play
        </button>
      </div>

      <div className="mode-grid">
        <button type="button" className="mode-card mode-daily" onClick={onDaily}>
          <span className="mode-kicker mono">{todayKey}</span>
          <span className="mode-title display">Daily Challenge</span>
          <span className="mode-desc">Everyone gets the same spins. One board, one leader.</span>
          {dailyRecord ? (
            <span className="mode-note mono">
              You went {fmtRecord(dailyRecord.wins, dailyRecord.losses)} today
              {dailyRecord.losses === 0 ? " 🏆" : ""}
            </span>
          ) : (
            <span className="mode-note mode-note-dim">Not played yet</span>
          )}
        </button>

        <button type="button" className="mode-card mode-free" onClick={onFree}>
          <span className="mode-kicker mono">∞</span>
          <span className="mode-title display">Free Play</span>
          <span className="mode-desc">Fresh random spins every run. Practice the perfect draft.</span>
          <span className="mode-note mode-note-dim">Unlimited runs</span>
        </button>

        <button type="button" className="mode-card mode-versus" onClick={onVersus}>
          <span className="mode-kicker mono">1v1+</span>
          <span className="mode-title display">
            Versus
            {!versusConfigured && <span className="badge">setup needed</span>}
          </span>
          <span className="mode-desc">
            Friends draft from identical spins, then settle it best-of-7.
          </span>
          <span className="mode-note mode-note-dim">Private rooms · 4-letter codes</span>
        </button>
      </div>

      <footer className="home-foot">inspired by 82-0.com</footer>

      {howOpen && (
        <Modal title="How to play" onClose={() => setHowOpen(false)}>
          <ol className="howto">
            <li>
              <b>Spin.</b> Each of 5 rounds spins up a random NBA franchise and a decade.
            </li>
            <li>
              <b>Pick.</b> Choose one real player from that franchise/era and slot him into an
              open position — PG, SG, SF, PF, C — each filled exactly once.
            </li>
            <li>
              <b>Skips.</b> Once per game you may re-spin the <b>team</b>, and once the{" "}
              <b>era</b>. Spend them wisely.
            </li>
            <li>
              <b>Simulate.</b> Your five plays a full 82-game season. Chemistry matters — five
              ball-dominant scorers won't share one ball.
            </li>
            <li>
              <b>82–0 or bust.</b> A perfect season is the holy grail. Share your record and
              dare your friends to beat it.
            </li>
          </ol>
          <p className="howto-modes">
            <b>Daily</b> — same spins for everyone, one shot a day worth bragging about.
            <br />
            <b>Free play</b> — endless random boards.
            <br />
            <b>Versus</b> — draft live with friends from identical spins; season records plus a
            head-to-head best-of-7 round-robin crown a champion.
          </p>
        </Modal>
      )}
    </main>
  );
}
