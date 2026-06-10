import { useMemo, type CSSProperties } from "react";

const COLORS = ["#ff7a18", "#ffd166", "#f5edda", "#27d17a", "#4cc9f0", "#ff4d5a"];

/** Pure-CSS confetti rain for the 82–0 perfect season. */
export default function Confetti({ count = 90 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 2.5,
        dur: 3 + Math.random() * 3.5,
        color: COLORS[i % COLORS.length],
        w: 6 + Math.random() * 7,
        h: 8 + Math.random() * 10,
        rot: Math.floor(Math.random() * 360),
      })),
    [count],
  );

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p, i) => (
        <span
          key={i}
          style={
            {
              left: `${p.left}%`,
              width: p.w,
              height: p.h,
              background: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              "--rot": `${p.rot}deg`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
