// Tiny shared badge for room titles won across rematch rounds.

export default function Crowns({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span
      className="crowns mono"
      title={`${count} room title${count === 1 ? "" : "s"}`}
    >
      {" "}
      👑×{count}
    </span>
  );
}
