"use client";

import { useState } from "react";

const MOODS = [
  { score: 0, label: "Rough", sub: "stressed / heavy" },
  { score: 1, label: "Low", sub: "tired / off" },
  { score: 2, label: "Neutral", sub: "okay / baseline" },
  { score: 3, label: "Good", sub: "calm / present" },
  { score: 4, label: "Great", sub: "clear / energized" },
];

interface MoodCheckInProps {
  phase: "pre" | "post";
  sessionId: string;
  onComplete: (score: number) => void;
}

export default function MoodCheckIn({ phase, sessionId, onComplete }: MoodCheckInProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const heading =
    phase === "pre"
      ? "Before you begin — how are you feeling right now?"
      : "How do you feel after today's session?";

  async function submit() {
    if (selected === null) return;
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/mood", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          phase,
          mood_score: selected,
          text_content: text.trim() || undefined,
          local_date: new Date().toLocaleDateString("en-CA"),
        }),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Failed to save");
      }

      onComplete(selected);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">
          {phase === "pre" ? "Pre-Session Check-In" : "Post-Session Check-In"}
        </p>
        <h3 className="text-xl md:text-2xl font-light leading-snug">{heading}</h3>
      </div>

      {/* Mood scale */}
      <div className="grid grid-cols-5 gap-px bg-[#222222]">
        {MOODS.map((m) => (
          <button
            key={m.score}
            type="button"
            onClick={() => setSelected(m.score)}
            className={`p-4 md:p-6 text-center transition-colors cursor-pointer ${
              selected === m.score
                ? "bg-white text-black"
                : "bg-[#0a0a0a] hover:bg-[#111111] text-white"
            }`}
          >
            <p
              className={`text-xs md:text-sm font-light tracking-wide mb-1 ${
                selected === m.score ? "text-black" : "text-white"
              }`}
            >
              {m.label}
            </p>
            <p
              className={`text-[9px] tracking-[0.05em] leading-tight hidden md:block ${
                selected === m.score ? "text-[#555555]" : "text-[#555555]"
              }`}
            >
              {m.sub}
            </p>
          </button>
        ))}
      </div>

      {/* Optional note */}
      {selected !== null && (
        <div className="animate-in fade-in duration-200">
          <label className="block text-[9px] tracking-[0.25em] uppercase text-[#555555] mb-2">
            Anything else? <span className="text-[#444444]">(optional)</span>
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's on your mind…"
            rows={2}
            maxLength={280}
            className="w-full bg-[#111111] border border-[#333333] px-4 py-3 text-sm text-white placeholder-[#444444] focus:outline-none focus:border-[#666666] resize-none"
          />
        </div>
      )}

      {error && (
        <p className="text-[#ff4444] text-xs tracking-wide">{error}</p>
      )}

      <button
        type="button"
        onClick={submit}
        disabled={selected === null || submitting}
        className="w-full py-3 bg-white text-black text-xs tracking-[0.15em] uppercase transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#e0e0e0]"
      >
        {submitting ? "Saving…" : phase === "pre" ? "Begin Session →" : "Complete Check-In →"}
      </button>
    </div>
  );
}
