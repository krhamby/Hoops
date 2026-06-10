import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useReducedMotion } from "../useReducedMotion";

export interface ReelItem {
  label: string;
  sub?: string;
  colors?: [string, string];
}

interface WheelProps {
  /** Small caption above the reel, e.g. "FRANCHISE" or "ERA". */
  title: string;
  /** Pool of labels the reel cycles through while spinning. */
  items: ReelItem[];
  /** The item the reel locks onto. */
  final: ReelItem;
  /** Called once, ~450ms after the reel locks in. */
  onLocked: () => void;
}

/**
 * Slot-machine style reel: cycles labels fast, decelerates over ~1.5s,
 * then locks onto `final` with a pop. Mount with a fresh `key` to re-spin.
 * Respects prefers-reduced-motion (jumps straight to the result).
 */
export default function Wheel({ title, items, final, onLocked }: WheelProps) {
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState<ReelItem>(items[0] ?? final);
  const [tick, setTick] = useState(0);
  const [locked, setLocked] = useState(false);

  const onLockedRef = useRef(onLocked);
  onLockedRef.current = onLocked;

  useEffect(() => {
    const timers: number[] = [];
    const finish = (lockDelay: number) => {
      timers.push(
        window.setTimeout(() => {
          setDisplay(final);
          setLocked(true);
          timers.push(window.setTimeout(() => onLockedRef.current(), 500));
        }, lockDelay),
      );
    };

    if (reduced || items.length < 2) {
      finish(180);
    } else {
      // Accelerating gaps: quick flicker that slows to a stop (~1.5s total).
      let at = 0;
      const steps = 16;
      for (let i = 0; i < steps; i++) {
        at += 40 + Math.pow(i / steps, 2.2) * 190;
        const item = items[Math.floor(Math.random() * items.length)];
        timers.push(
          window.setTimeout(() => {
            setDisplay(item);
            setTick((t) => t + 1);
          }, at),
        );
      }
      finish(at + 220);
    }
    return () => timers.forEach((t) => window.clearTimeout(t));
    // Intentionally runs once per mount; parent re-keys the component to respin.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [c1, c2] = display.colors ?? ["#23232e", "#3a3a48"];
  const style = { "--c1": c1, "--c2": c2 } as CSSProperties;

  return (
    <div className={`wheel ${locked ? "wheel-locked" : ""}`} style={style}>
      <div className="wheel-title">{title}</div>
      <div className="wheel-window" aria-live="polite">
        <div key={tick + (locked ? 1000 : 0)} className={`wheel-face ${locked ? "lock-pop" : "ticking"}`}>
          <span className="wheel-label">{display.label}</span>
          {display.sub ? <span className="wheel-sub">{display.sub}</span> : null}
        </div>
      </div>
      <div className="wheel-foot mono">{locked ? "LOCKED IN" : "SPINNING…"}</div>
    </div>
  );
}
