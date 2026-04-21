"use client";

import { useEffect, useState } from "react";
import MoodCheckIn from "./MoodCheckIn";

type Stage = "idle" | "pre" | "active" | "post" | "done";

const MOOD_LABELS = ["Rough", "Low", "Neutral", "Good", "Great"];
const MOOD_DELTA = ["much worse", "a bit lower", "about the same", "a bit better", "much better"];

function generateSessionId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

const STORAGE_KEY = "wmg_meditation_session";

interface SessionState {
  id: string;
  date: string;
  stage: Stage;
  preScore?: number;
  postScore?: number;
}

function todayKey() {
  return new Date().toLocaleDateString("en-CA");
}

function loadSession(): SessionState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const s: SessionState = JSON.parse(raw);
    // Only keep today's session
    if (s.date !== todayKey()) return null;
    return s;
  } catch {
    return null;
  }
}

function saveSession(s: SessionState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {}
}

export default function SessionFlow() {
  const [session, setSession] = useState<SessionState | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const existing = loadSession();
    if (existing) {
      setSession(existing);
    }
    setMounted(true);
  }, []);

  function updateSession(updates: Partial<SessionState>) {
    setSession((prev) => {
      const next = { ...(prev!), ...updates };
      saveSession(next);
      return next;
    });
  }

  function startFlow() {
    const fresh: SessionState = {
      id: generateSessionId(),
      date: todayKey(),
      stage: "pre",
    };
    saveSession(fresh);
    setSession(fresh);
  }

  function handlePreComplete(score: number) {
    updateSession({ stage: "active", preScore: score });
  }

  function handlePostComplete(score: number) {
    updateSession({ stage: "done", postScore: score });
  }

  function resetSession() {
    localStorage.removeItem(STORAGE_KEY);
    setSession(null);
  }

  if (!mounted) return null;

  const stage = session?.stage ?? "idle";

  // ── Idle ──────────────────────────────────────────────────────────────────
  if (stage === "idle") {
    return (
      <div className="border border-[#222222] p-8 md:p-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
          Today&apos;s Session
        </p>
        <h3 className="text-xl md:text-2xl font-light mb-3">
          Track your progress
        </h3>
        <p className="text-[#888888] text-sm leading-relaxed mb-8 max-w-md">
          Check in before and after each session. Your data trains the Matrix —
          personalizing future frequencies to your baseline.
        </p>
        <button
          type="button"
          onClick={startFlow}
          className="px-8 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors"
        >
          Start Check-In →
        </button>
      </div>
    );
  }

  // ── Pre check-in ─────────────────────────────────────────────────────────
  if (stage === "pre") {
    return (
      <div className="border border-[#222222] p-8 md:p-10">
        <MoodCheckIn
          phase="pre"
          sessionId={session!.id}
          onComplete={handlePreComplete}
        />
      </div>
    );
  }

  // ── Active (in-session) ───────────────────────────────────────────────────
  if (stage === "active") {
    const preLabel = session?.preScore != null ? MOOD_LABELS[session.preScore] : "";
    return (
      <div className="border border-[#222222] p-8 md:p-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
          Session Active
        </p>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-sm text-[#888888] tracking-wide">
            Pre-session mood logged — {preLabel}
          </span>
        </div>
        <p className="text-[#888888] text-sm leading-relaxed mb-8 max-w-md">
          Open the Non Magic app and complete your session. Come back here
          afterward to log how you feel.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://nonmagic.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors text-center"
          >
            Open Non Magic ↗
          </a>
          <button
            type="button"
            onClick={() => updateSession({ stage: "post" })}
            className="px-8 py-3 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors"
          >
            Session Complete →
          </button>
        </div>
      </div>
    );
  }

  // ── Post check-in ─────────────────────────────────────────────────────────
  if (stage === "post") {
    return (
      <div className="border border-[#222222] p-8 md:p-10">
        <MoodCheckIn
          phase="post"
          sessionId={session!.id}
          onComplete={handlePostComplete}
        />
      </div>
    );
  }

  // ── Done ─────────────────────────────────────────────────────────────────
  if (stage === "done") {
    const pre = session?.preScore ?? 0;
    const post = session?.postScore ?? 0;
    const delta = post - pre;
    const improved = delta > 0;
    const same = delta === 0;

    return (
      <div className="border border-[#222222] p-8 md:p-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
          Session Complete
        </p>
        <h3 className="text-xl md:text-2xl font-light mb-6">
          {improved
            ? "You feel better."
            : same
            ? "Holding steady."
            : "Rest is part of the work."}
        </h3>

        <div className="grid grid-cols-2 gap-px bg-[#222222] mb-8">
          <div className="bg-[#0a0a0a] p-6">
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#555555] mb-2">
              Before
            </p>
            <p className="text-2xl font-light text-white">
              {MOOD_LABELS[pre]}
            </p>
          </div>
          <div className="bg-[#0a0a0a] p-6">
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#555555] mb-2">
              After
            </p>
            <p className="text-2xl font-light text-white">
              {MOOD_LABELS[post]}
            </p>
          </div>
        </div>

        <p className="text-[#888888] text-xs leading-relaxed mb-6">
          {improved
            ? `You moved ${MOOD_DELTA[delta + 2]}. This data feeds the Matrix — your next session will be tuned to your baseline.`
            : same
            ? "Consistency matters. Your data has been recorded."
            : "Every session is data. The Matrix learns from all of it."}
        </p>

        <button
          type="button"
          onClick={resetSession}
          className="text-[10px] tracking-[0.2em] uppercase text-[#444444] hover:text-[#888888] transition-colors"
        >
          Clear for tomorrow
        </button>
      </div>
    );
  }

  return null;
}
