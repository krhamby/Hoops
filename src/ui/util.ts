// Small shared helpers for the UI layer.

/** Human-friendly message from an unknown thrown value. */
export function errMsg(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  return "Something went wrong";
}

/** "79–3" style record formatting (en dash, mono-friendly). */
export function fmtRecord(wins: number, losses: number): string {
  return `${wins}–${losses}`;
}

export interface DailyRecord {
  wins: number;
  losses: number;
}

const dailyKeyFor = (dateKey: string) => `hoops.daily.${dateKey}`;

export function readDailyRecord(dateKey: string): DailyRecord | null {
  try {
    const raw = window.localStorage.getItem(dailyKeyFor(dateKey));
    if (!raw) return null;
    const v = JSON.parse(raw) as Partial<DailyRecord>;
    if (typeof v.wins === "number" && typeof v.losses === "number") {
      return { wins: v.wins, losses: v.losses };
    }
    return null;
  } catch {
    return null;
  }
}

export function writeDailyRecord(dateKey: string, rec: DailyRecord): void {
  try {
    window.localStorage.setItem(dailyKeyFor(dateKey), JSON.stringify(rec));
  } catch {
    // localStorage unavailable; non-fatal.
  }
}
