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

function getNext5am(): Date {
  const now = new Date();
  const next = new Date(now);
  next.setHours(5, 0, 0, 0);
  if (next <= now) {
    next.setDate(next.getDate() + 1);
  }
  return next;
}

export function DailyCountdown() {
  const [target, setTarget] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const t = getNext5am();
    setTarget(t);
    setTimeLeft(getTimeLeft(t));

    const interval = setInterval(() => {
      const now = new Date();
      // Recalculate target in case we've passed 5am
      const fresh = getNext5am();
      if (target && fresh.getTime() !== target.getTime()) {
        setTarget(fresh);
      }
      setTimeLeft(getTimeLeft(fresh));
    }, 1000);

    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className="flex gap-4 md:gap-8">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center gap-1">
          <span className="text-4xl md:text-6xl font-light tabular-nums text-white">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-[9px] tracking-[0.2em] uppercase text-[#555555]">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function April18Countdown() {
  const APRIL_18 = new Date("2026-04-18T05:00:00-04:00");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(APRIL_18));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(APRIL_18));
    }, 1000);
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
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
  );
}

export function ParticipantCounter() {
  const [count, setCount] = useState(0);
  const TARGET = 1847;

  useEffect(() => {
    // Animate counter up on mount
    let start = 0;
    const step = Math.ceil(TARGET / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= TARGET) {
        setCount(TARGET);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-5xl md:text-7xl font-light tabular-nums text-white">
      {count.toLocaleString()}
    </span>
  );
}
