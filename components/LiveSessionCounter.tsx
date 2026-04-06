"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

function useCountUp(target: number, duration = 900): number {
  const [display, setDisplay] = useState(target);
  const prevRef = useRef(target);

  useEffect(() => {
    const from = prevRef.current;
    const diff = target - from;
    if (diff === 0) return;

    const startTime = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // cubic ease-out
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + diff * eased));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        prevRef.current = target;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return display;
}

export default function LiveSessionCounter() {
  const [total, setTotal] = useState<number | null>(null);
  const animated = useCountUp(total ?? 0);

  useEffect(() => {
    const client = supabase;
    if (!client) return;

    const fetch = async () => {
      const { count } = await client
        .from("sessions")
        .select("*", { count: "exact", head: true });
      if (typeof count === "number") setTotal(count);
    };

    fetch();
    const interval = setInterval(fetch, 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!supabase || total === null) return null;

  return (
    <div className="flex items-center gap-2.5 mt-8">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <p className="text-sm text-[#888888]">
        <span className="text-white tabular-nums font-light">
          {animated.toLocaleString()}
        </span>
        {" "}Non Magic sessions completed globally
      </p>
    </div>
  );
}
