"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

type Done = Record<string, boolean>;

interface ProgressContextValue {
  done: Done;
  loaded: boolean;
  toggle: (id: string) => void;
  reset: () => void;
}

const KEY = "roadmap-progress";
const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [done, setDone] = useState<Done>({});
  const [loaded, setLoaded] = useState(false);

  // Browser ki localStorage se progress load karo (sirf client par)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) setDone(JSON.parse(saved) as Done);
    } catch {
      // kharab data ho to ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(done));
    } catch {
      // storage blocked ho to ignore
    }
  }, [done, loaded]);

  const toggle = useCallback((id: string) => setDone((prev) => ({ ...prev, [id]: !prev[id] })), []);
  const reset = useCallback(() => setDone({}), []);

  const value = useMemo(() => ({ done, loaded, toggle, reset }), [done, loaded, toggle, reset]);
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used inside ProgressProvider");
  return ctx;
}
