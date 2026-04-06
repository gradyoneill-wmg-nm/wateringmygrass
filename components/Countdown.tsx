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
}

export default function Countdown({ targetDate, label }: CountdownProps) {
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

  return (
    <div className="flex flex-col items-center gap-3">
      {label && (
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#888888]">
          {label}
        </p>
      )}
      <div className="flex gap-4 md:gap-6">
        {units.map((u) => (
          <div key={u.label} className="flex flex-col items-center gap-1">
            <span className="text-3xl md:text-5xl font-light tabular-nums text-white">
              {String(u.value).padStart(2, "0")}
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#555555]">
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
