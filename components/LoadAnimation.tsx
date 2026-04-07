"use client";

import { useEffect, useState } from "react";

const WORDMARK = "NON MAGIC";

// Fixed scatter offsets — deterministic, no hydration mismatch
const OFFSETS = [
  { x: -60, y: -30, r: -15 },
  { x: -20, y: 50, r: 10 },
  { x: 40, y: -45, r: -8 },
  { x: 8, y: -8, r: 4 }, // space
  { x: -35, y: 35, r: 12 },
  { x: 55, y: -20, r: -18 },
  { x: -50, y: -15, r: 20 },
  { x: 30, y: 40, r: -10 },
  { x: -15, y: -50, r: 15 },
];

type Phase = "scatter" | "assembling" | "hold" | "fading" | "done";

export default function LoadAnimation() {
  const [phase, setPhase] = useState<Phase>("scatter");

  useEffect(() => {
    try {
      if (sessionStorage.getItem("wmg-loaded")) {
        setPhase("done");
        return;
      }
    } catch {}

    const t0 = setTimeout(() => setPhase("assembling"), 80);
    const t1 = setTimeout(() => setPhase("hold"), 1000);
    const t2 = setTimeout(() => setPhase("fading"), 2100);
    const t3 = setTimeout(() => {
      setPhase("done");
      try {
        sessionStorage.setItem("wmg-loaded", "1");
      } catch {}
    }, 2650);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  const assembled = phase === "hold" || phase === "fading";

  return (
    <div
      className="fixed inset-0 z-[10000] bg-[#0C0C0A] flex items-center justify-center"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transition: phase === "fading" ? "opacity 0.5s ease" : "none",
        pointerEvents: phase === "fading" ? "none" : "all",
      }}
    >
      <div className="flex items-center">
        {WORDMARK.split("").map((char, i) => {
          const off = OFFSETS[i] ?? { x: 0, y: 0, r: 0 };
          return (
            <span
              key={i}
              className="text-white text-3xl md:text-4xl tracking-[0.5em] uppercase font-light select-none"
              style={{
                display: "inline-block",
                transform: assembled
                  ? "translate(0,0) rotate(0deg)"
                  : `translate(${off.x}px,${off.y}px) rotate(${off.r}deg)`,
                opacity: assembled ? 1 : 0,
                transition: assembled
                  ? `transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.05}s, opacity 0.5s ease ${i * 0.04}s`
                  : "none",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </div>
    </div>
  );
}
