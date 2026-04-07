"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

interface CountdownProps {
  targetDate: string; // ISO string
  label?: string;
  large?: boolean;
}

export default function Countdown({ targetDate, label, large = false }: CountdownProps) {
  const target = new Date(targetDate);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  const numSize = large
    ? "text-6xl md:text-8xl lg:text-9xl"
    : "text-3xl md:text-4xl";
  const labelSize = large ? "text-[10px]" : "text-[9px]";
  const gap = large ? "gap-6 md:gap-10" : "gap-4 md:gap-6";

  return (
    <div className="flex flex-col items-start gap-3">
      {label && (
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555]">
          {label}
        </p>
      )}
      <div className={`flex ${gap}`}>
        {units.map((u, i) => (
          <div key={u.label} className="flex items-start">
            <div className="flex flex-col items-center gap-2">
              <span
                className={`${numSize} font-normal tabular-nums text-[#F5841F] leading-none`}
                style={{ fontFamily: "var(--font-space-mono), monospace" }}
              >
                {String(u.value).padStart(2, "0")}
              </span>
              <span className={`${labelSize} tracking-[0.25em] uppercase text-[#555555]`}>
                {u.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span
                className={`${numSize} font-normal text-[#333333] mx-1 md:mx-2 leading-none select-none`}
                style={{ fontFamily: "var(--font-space-mono), monospace" }}
              >
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
