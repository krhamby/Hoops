import { useCallback, useEffect, useMemo, useState } from "react";
import type { GameMode, Position, Room, Roster, SeasonResult } from "./types";
import { POSITIONS } from "./types";
import { dailySeed, dateKey, simulateSeason } from "./engine";
import { isConfigured } from "./multiplayer/config";
import { getIdentity } from "./multiplayer/identity";
import { fetchRoom, submitResult, subscribeRoom } from "./multiplayer/rooms";
import Home from "./ui/Home";
import Draft from "./ui/Draft";
import Results from "./ui/Results";
import Versus from "./ui/Versus";
import VersusResults from "./ui/VersusResults";
import { ToastProvider, useToast } from "./ui/components/Toast";
import { errMsg, readDailyRecord, writeDailyRecord } from "./ui/util";

interface Session {
  mode: GameMode;
  spinSeed: string;
  respinSeed: string;
  simSeed: string;
  dailyKey?: string;
}

type Screen =
  | { name: "home" }
  | { name: "draft" }
  | { name: "results"; roster: Roster; result: SeasonResult }
  | { name: "versus" }
  | { name: "versusResults" };

export default function App() {
  return (
    <ToastProvider>
      <AppShell />
    </ToastProvider>
  );
}

function AppShell() {
  const toast = useToast();
  const [screen, setScreen] = useState<Screen>({ name: "home" });
  const [session, setSession] = useState<Session | null>(null);
  const [attempt, setAttempt] = useState(0); // remounts <Draft> on "play again"
  const [roomCode, setRoomCode] = useState<string | null>(null);
  const [room, setRoom] = useState<Room | null>(null);

  const todayKey = useMemo(() => dateKey(), []);
  const [dailyRecord, setDailyRecord] = useState(() => readDailyRecord(todayKey));

  // ---- live room subscription (versus) ----
  useEffect(() => {
    if (!roomCode) {
      setRoom(null);
      return;
    }
    let active = true;
    let unsub: (() => void) | null = null;
    try {
      unsub = subscribeRoom(roomCode, (r) => {
        if (active) setRoom(r);
      });
    } catch (e) {
      toast(`Lost the room connection: ${errMsg(e)}`, "error");
    }
    // Initial snapshot in case the subscription only emits on changes.
    fetchRoom(roomCode)
      .then((r) => {
        if (active && r) setRoom((prev) => prev ?? r);
      })
      .catch(() => {});
    return () => {
      active = false;
      unsub?.();
    };
  }, [roomCode, toast]);

  // ---- auto-enter the draft when the host starts the room ----
  const screenName = screen.name;
  useEffect(() => {
    if (!room || screenName !== "versus") return;
    if (room.status === "drafting") {
      const me = getIdentity();
      const mine = room.players.find((p) => p.id === me.id);
      if (mine && !mine.roster) {
        setSession({
          mode: "versus",
          spinSeed: room.seed,
          respinSeed: `${room.seed}:${me.id}`,
          simSeed: `${room.seed}:${me.id}`,
        });
        setAttempt((a) => a + 1);
        setScreen({ name: "draft" });
      }
    } else if (room.status === "done") {
      setScreen({ name: "versusResults" });
    }
  }, [room, screenName]);

  // ---- mode launchers ----
  const startDaily = useCallback(() => {
    const seed = dailySeed();
    setSession({ mode: "daily", spinSeed: seed, respinSeed: seed, simSeed: seed, dailyKey: todayKey });
    setAttempt((a) => a + 1);
    setScreen({ name: "draft" });
  }, [todayKey]);

  const startFree = useCallback(() => {
    const seed = `free-${Date.now()}-${Math.floor(Math.random() * 1e9).toString(36)}`;
    setSession({ mode: "free", spinSeed: seed, respinSeed: seed, simSeed: seed });
    setAttempt((a) => a + 1);
    setScreen({ name: "draft" });
  }, []);

  const goHome = useCallback(() => {
    setScreen({ name: "home" });
    setDailyRecord(readDailyRecord(todayKey));
  }, [todayKey]);

  const leaveRoom = useCallback(() => {
    setRoomCode(null);
    setRoom(null);
  }, []);

  // ---- draft completion: simulate + persist/submit ----
  const handleDraftComplete = useCallback(
    (roster: Roster) => {
      if (!session) return;
      const result = simulateSeason(roster, session.simSeed);

      if (session.mode === "daily" && session.dailyKey) {
        writeDailyRecord(session.dailyKey, { wins: result.wins, losses: result.losses });
        setDailyRecord({ wins: result.wins, losses: result.losses });
      }

      if (session.mode === "versus" && roomCode) {
        const ids = {} as Record<Position, string>;
        for (const pos of POSITIONS) {
          const p = roster[pos];
          if (p) ids[pos] = p.id;
        }
        submitResult(roomCode, ids, result.wins, result.losses).catch((e) => {
          toast(`Couldn't submit your season to the room: ${errMsg(e)}`, "error");
        });
      }

      setScreen({ name: "results", roster, result });
    },
    [session, roomCode, toast],
  );

  const playAgain = useCallback(() => {
    if (!session) return;
    if (session.mode === "free") startFree();
    else if (session.mode === "daily") startDaily();
  }, [session, startDaily, startFree]);

  const myId = useMemo(() => {
    try {
      return getIdentity().id;
    } catch {
      return "";
    }
  }, []);

  switch (screen.name) {
    case "home":
      return (
        <Home
          todayKey={todayKey}
          dailyRecord={dailyRecord}
          versusConfigured={isConfigured()}
          onDaily={startDaily}
          onFree={startFree}
          onVersus={() => setScreen({ name: "versus" })}
        />
      );

    case "draft":
      if (!session) return null;
      return (
        <Draft
          key={`${session.spinSeed}-${attempt}`}
          mode={session.mode}
          spinSeed={session.spinSeed}
          respinSeed={session.respinSeed}
          room={session.mode === "versus" ? room : null}
          myId={myId}
          onComplete={handleDraftComplete}
          onQuit={() => {
            if (session.mode === "versus") leaveRoom();
            goHome();
          }}
        />
      );

    case "results":
      if (!session) return null;
      return (
        <Results
          mode={session.mode}
          result={screen.result}
          roster={screen.roster}
          dailyKey={session.dailyKey}
          room={session.mode === "versus" ? room : null}
          myId={myId}
          onPlayAgain={playAgain}
          onHome={() => {
            if (session.mode === "versus") leaveRoom();
            goHome();
          }}
          onViewRoom={() => setScreen({ name: "versusResults" })}
        />
      );

    case "versus":
      return (
        <Versus
          room={room}
          onJoined={(r) => {
            setRoom(r);
            setRoomCode(r.code);
          }}
          onLeaveRoom={leaveRoom}
          onHome={() => {
            leaveRoom();
            goHome();
          }}
        />
      );

    case "versusResults":
      if (!room) {
        return (
          <Versus
            room={null}
            onJoined={(r) => {
              setRoom(r);
              setRoomCode(r.code);
            }}
            onLeaveRoom={leaveRoom}
            onHome={goHome}
          />
        );
      }
      return (
        <VersusResults
          room={room}
          myId={myId}
          onBackToLobby={() => {
            leaveRoom();
            setScreen({ name: "versus" });
          }}
          onHome={() => {
            leaveRoom();
            goHome();
          }}
        />
      );
  }
}
