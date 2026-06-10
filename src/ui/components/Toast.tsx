import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ToastKind = "info" | "success" | "error";

interface ToastMsg {
  id: number;
  text: string;
  kind: ToastKind;
}

type PushToast = (text: string, kind?: ToastKind) => void;

const ToastCtx = createContext<PushToast>(() => {});

/** Fire-and-forget toast notifications. `const toast = useToast(); toast("Copied!", "success")` */
export function useToast(): PushToast {
  return useContext(ToastCtx);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMsg[]>([]);
  const idRef = useRef(1);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    const timers = timersRef.current;
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  const push = useCallback<PushToast>((text, kind = "info") => {
    const id = idRef.current++;
    setToasts((t) => [...t.slice(-3), { id, text, kind }]);
    timersRef.current.push(
      window.setTimeout(() => {
        setToasts((t) => t.filter((x) => x.id !== id));
      }, 4200),
    );
  }, []);

  return (
    <ToastCtx.Provider value={push}>
      {children}
      <div className="toasts" role="status" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`toast toast-${t.kind}`}>
            {t.text}
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}
