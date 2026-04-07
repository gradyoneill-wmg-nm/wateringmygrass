"use client";

import { useState, useCallback } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

type Platform = "instagram" | "tiktok" | "youtube" | "linkedin" | "twitter";
type Status = "idea" | "scripted" | "produced" | "posted";
type Feature =
  | "homepage"
  | "articles"
  | "april18"
  | "community"
  | "newsletter"
  | "directory"
  | "non-magic";
type Tab = "calendar" | "matrix" | "repurpose" | "competitors";

type Post = {
  id: string;
  platform: Platform;
  date: string;
  contentType: string;
  title: string;
  status: Status;
  agent: string;
  features: Feature[];
};

// ── Data ──────────────────────────────────────────────────────────────────────

const INITIAL_POSTS: Post[] = [
  // ── Week 1: Apr 6–12 ────────────────────────────────────────────────────────
  { id: "ig-1", platform: "instagram", date: "2026-04-07", contentType: "Reel", title: "Gym Bro Guide teaser", status: "scripted", agent: "Rockbird", features: ["articles", "homepage"] },
  { id: "ig-2", platform: "instagram", date: "2026-04-09", contentType: "Carousel", title: "40Hz science breakdown", status: "produced", agent: "Rockbird", features: ["articles", "non-magic"] },
  { id: "ig-3", platform: "instagram", date: "2026-04-11", contentType: "Story", title: "Community spotlight #1", status: "posted", agent: "Rockbird", features: ["community"] },
  { id: "tt-1", platform: "tiktok", date: "2026-04-07", contentType: "Short", title: "What is Non Magic?", status: "scripted", agent: "Rose Finch", features: ["non-magic", "homepage"] },
  { id: "tt-2", platform: "tiktok", date: "2026-04-08", contentType: "Short", title: "40Hz gamma explainer", status: "produced", agent: "Rockbird", features: ["articles", "non-magic"] },
  { id: "tt-3", platform: "tiktok", date: "2026-04-10", contentType: "Short", title: "Non Magic is live 🚀", status: "posted", agent: "Rose Finch", features: ["non-magic", "homepage"] },
  { id: "tt-4", platform: "tiktok", date: "2026-04-12", contentType: "Short", title: "I Was a Monk teaser", status: "scripted", agent: "Rockbird", features: ["articles"] },
  { id: "yt-1", platform: "youtube", date: "2026-04-10", contentType: "Short", title: "Non Magic app walkthrough", status: "produced", agent: "Rose Finch", features: ["non-magic"] },
  { id: "li-1", platform: "linkedin", date: "2026-04-07", contentType: "Article", title: "Science of meditation at scale", status: "scripted", agent: "Rat", features: ["articles"] },
  { id: "li-2", platform: "linkedin", date: "2026-04-10", contentType: "Post", title: "Non Magic launch announcement", status: "posted", agent: "Rat", features: ["non-magic", "homepage"] },
  { id: "tw-1", platform: "twitter", date: "2026-04-06", contentType: "Thread", title: "WMG launch thread", status: "posted", agent: "Rat", features: ["homepage"] },
  { id: "tw-2", platform: "twitter", date: "2026-04-07", contentType: "Thread", title: "Gym Bro article thread", status: "scripted", agent: "Rat", features: ["articles"] },
  { id: "tw-3", platform: "twitter", date: "2026-04-08", contentType: "Post", title: "MIT 40Hz research cite", status: "scripted", agent: "Raccoon", features: ["articles"] },
  { id: "tw-4", platform: "twitter", date: "2026-04-10", contentType: "Post", title: "Non Magic is live", status: "posted", agent: "Rat", features: ["non-magic"] },
  { id: "tw-5", platform: "twitter", date: "2026-04-12", contentType: "Post", title: "I Was a Monk article drop", status: "scripted", agent: "Rockbird", features: ["articles"] },

  // ── Week 2: Apr 13–19 ───────────────────────────────────────────────────────
  { id: "ig-4", platform: "instagram", date: "2026-04-14", contentType: "Reel", title: "April 18 countdown reel", status: "scripted", agent: "Rockbird", features: ["april18"] },
  { id: "ig-5", platform: "instagram", date: "2026-04-16", contentType: "Carousel", title: "How to prepare: global session guide", status: "idea", agent: "Rockbird", features: ["april18", "non-magic"] },
  { id: "ig-6", platform: "instagram", date: "2026-04-18", contentType: "Story", title: "Live from Central Park 5AM", status: "idea", agent: "Rose Finch", features: ["april18", "community"] },
  { id: "ig-7", platform: "instagram", date: "2026-04-19", contentType: "Reel", title: "April 18 recap highlights", status: "idea", agent: "Rockbird", features: ["april18", "community"] },
  { id: "tt-5", platform: "tiktok", date: "2026-04-14", contentType: "Short", title: "April 18 — what to expect", status: "scripted", agent: "Rose Finch", features: ["april18"] },
  { id: "tt-6", platform: "tiktok", date: "2026-04-16", contentType: "Short", title: "HRV during group meditation?", status: "idea", agent: "Raccoon", features: ["articles"] },
  { id: "tt-7", platform: "tiktok", date: "2026-04-18", contentType: "Short", title: "Event day vlog", status: "idea", agent: "Rose Finch", features: ["april18", "community"] },
  { id: "yt-2", platform: "youtube", date: "2026-04-15", contentType: "Short", title: "April 18 explainer", status: "scripted", agent: "Rose Finch", features: ["april18"] },
  { id: "yt-3", platform: "youtube", date: "2026-04-19", contentType: "Short", title: "Post-event recap", status: "idea", agent: "Rockbird", features: ["april18", "community"] },
  { id: "li-3", platform: "linkedin", date: "2026-04-15", contentType: "Post", title: "Synchronized global meditation — the science", status: "scripted", agent: "Rat", features: ["april18", "articles"] },
  { id: "li-4", platform: "linkedin", date: "2026-04-18", contentType: "Post", title: "April 18 — 3,000 people, one frequency", status: "idea", agent: "Rat", features: ["april18"] },
  { id: "tw-6", platform: "twitter", date: "2026-04-13", contentType: "Thread", title: "5 days until April 18", status: "scripted", agent: "Rat", features: ["april18"] },
  { id: "tw-7", platform: "twitter", date: "2026-04-15", contentType: "Post", title: "Register now — link in bio", status: "scripted", agent: "Rose Finch", features: ["april18"] },
  { id: "tw-8", platform: "twitter", date: "2026-04-17", contentType: "Thread", title: "Tomorrow is the day", status: "idea", agent: "Rat", features: ["april18"] },
  { id: "tw-9", platform: "twitter", date: "2026-04-18", contentType: "Thread", title: "Live thread — global session", status: "idea", agent: "Rat", features: ["april18", "community"] },
  { id: "tw-10", platform: "twitter", date: "2026-04-19", contentType: "Post", title: "Post-event numbers + energy", status: "idea", agent: "Raccoon", features: ["april18", "community"] },

  // ── Week 3: Apr 20–26 ───────────────────────────────────────────────────────
  { id: "ig-8", platform: "instagram", date: "2026-04-21", contentType: "Carousel", title: "HRV: the only metric that matters", status: "idea", agent: "Rockbird", features: ["articles"] },
  { id: "ig-9", platform: "instagram", date: "2026-04-24", contentType: "Reel", title: "Schumann resonance explainer", status: "idea", agent: "Rockbird", features: ["articles"] },
  { id: "tt-8", platform: "tiktok", date: "2026-04-21", contentType: "Short", title: "HRV for beginners", status: "idea", agent: "Raccoon", features: ["articles", "non-magic"] },
  { id: "tt-9", platform: "tiktok", date: "2026-04-23", contentType: "Short", title: "Breathwork protocol walkthrough", status: "idea", agent: "Rockbird", features: ["articles"] },
  { id: "tt-10", platform: "tiktok", date: "2026-04-26", contentType: "Short", title: "NYC sound bath recap", status: "idea", agent: "Rose Finch", features: ["community", "directory"] },
  { id: "yt-4", platform: "youtube", date: "2026-04-22", contentType: "Short", title: "Community feed highlights", status: "idea", agent: "Rose Finch", features: ["community"] },
  { id: "yt-5", platform: "youtube", date: "2026-04-26", contentType: "Short", title: "Breathwork protocols guide", status: "idea", agent: "Rockbird", features: ["articles"] },
  { id: "li-5", platform: "linkedin", date: "2026-04-22", contentType: "Article", title: "Non-profit wellness: the WMG model", status: "idea", agent: "Roadrunner", features: ["homepage"] },
  { id: "li-6", platform: "linkedin", date: "2026-04-25", contentType: "Post", title: "Contributor program is open", status: "idea", agent: "Rat", features: ["community"] },
  { id: "tw-11", platform: "twitter", date: "2026-04-20", contentType: "Thread", title: "Schumann resonance deep dive", status: "idea", agent: "Raccoon", features: ["articles"] },
  { id: "tw-12", platform: "twitter", date: "2026-04-22", contentType: "Post", title: "HRV article drop", status: "idea", agent: "Rockbird", features: ["articles"] },
  { id: "tw-13", platform: "twitter", date: "2026-04-24", contentType: "Post", title: "May event sneak peek", status: "idea", agent: "Rose Finch", features: ["community"] },
  { id: "tw-14", platform: "twitter", date: "2026-04-26", contentType: "Thread", title: "Community stats — week 3", status: "idea", agent: "Rat", features: ["community"] },
];

const PLATFORMS: { id: Platform; label: string; color: string }[] = [
  { id: "instagram", label: "Instagram", color: "#C13584" },
  { id: "tiktok", label: "TikTok", color: "#69C9D0" },
  { id: "youtube", label: "YouTube", color: "#FF4444" },
  { id: "linkedin", label: "LinkedIn", color: "#60A5FA" },
  { id: "twitter", label: "Twitter / X", color: "#9CA3AF" },
];

const FEATURES: { id: Feature; label: string }[] = [
  { id: "homepage", label: "Homepage" },
  { id: "articles", label: "Articles" },
  { id: "april18", label: "April 18 Event" },
  { id: "community", label: "Community Feed" },
  { id: "newsletter", label: "Newsletter" },
  { id: "directory", label: "Business Directory" },
  { id: "non-magic", label: "Non Magic App" },
];

const WEEKS = [
  { label: "Apr 6 – Apr 12", sublabel: "Launch Week", dates: ["2026-04-06","2026-04-07","2026-04-08","2026-04-09","2026-04-10","2026-04-11","2026-04-12"] },
  { label: "Apr 13 – Apr 19", sublabel: "April 18 Event", dates: ["2026-04-13","2026-04-14","2026-04-15","2026-04-16","2026-04-17","2026-04-18","2026-04-19"] },
  { label: "Apr 20 – Apr 26", sublabel: "Post-Event", dates: ["2026-04-20","2026-04-21","2026-04-22","2026-04-23","2026-04-24","2026-04-25","2026-04-26"] },
];

const COMPETITOR_GAPS = [
  {
    topic: "40Hz Gamma Frequency",
    description: "MIT-researched neural entrainment. Calm/Headspace don't touch it.",
    calm: false, headspace: false,
    opportunity: "Exclusive — only Non Magic",
    slots: [
      { platform: "tiktok" as Platform, title: "40Hz gamma: the MIT research Calm won't tell you", date: "2026-04-28", features: ["articles", "non-magic"] as Feature[] },
      { platform: "instagram" as Platform, title: "Why other apps skip 40Hz (and why we don't)", date: "2026-04-29", features: ["articles", "non-magic"] as Feature[] },
    ],
  },
  {
    topic: "HRV-Based Meditation Metrics",
    description: "Data-driven session tracking. Competitors offer generic timers.",
    calm: false, headspace: false,
    opportunity: "High — biohacker audience",
    slots: [
      { platform: "linkedin" as Platform, title: "HRV is the only meditation metric that matters", date: "2026-04-28", features: ["articles"] as Feature[] },
      { platform: "twitter" as Platform, title: "Thread: HRV vs. streak counters — what Headspace won't say", date: "2026-04-27", features: ["articles"] as Feature[] },
    ],
  },
  {
    topic: "Schumann Resonance / Earth Frequency",
    description: "Earth's electromagnetic frequency and brain entrainment.",
    calm: false, headspace: false,
    opportunity: "High — science + spirituality crossover",
    slots: [
      { platform: "tiktok" as Platform, title: "Earth's heartbeat: the Schumann resonance explained", date: "2026-04-30", features: ["articles"] as Feature[] },
      { platform: "youtube" as Platform, title: "Schumann resonance: what Calm doesn't know", date: "2026-05-01", features: ["articles"] as Feature[] },
    ],
  },
  {
    topic: "Transcendental Meditation (TM) Science",
    description: "Evidence-based TM research. Competitors use generic 'mindfulness'.",
    calm: true, headspace: true,
    opportunity: "Differentiation — science-first framing",
    slots: [
      { platform: "instagram" as Platform, title: "What TM actually does to your brain (cited research)", date: "2026-04-27", features: ["articles"] as Feature[] },
      { platform: "linkedin" as Platform, title: "TM vs mindfulness apps: why the research matters", date: "2026-04-30", features: ["articles"] as Feature[] },
    ],
  },
  {
    topic: "Community / In-Person Events",
    description: "Real-world gatherings. Calm/Headspace are solo apps.",
    calm: false, headspace: false,
    opportunity: "Exclusive — WMG community layer",
    slots: [
      { platform: "instagram" as Platform, title: "NYC 5AM meditation — next session", date: "2026-05-02", features: ["community", "april18"] as Feature[] },
      { platform: "twitter" as Platform, title: "Calm doesn't have a village. We do.", date: "2026-04-29", features: ["community"] as Feature[] },
    ],
  },
  {
    topic: "Breathwork Protocols",
    description: "Specific protocols (box breathing, Wim Hof, etc.) with science.",
    calm: true, headspace: false,
    opportunity: "Differentiation — protocol depth",
    slots: [
      { platform: "youtube" as Platform, title: "Box breathing protocol: the science + how-to", date: "2026-04-28", features: ["articles"] as Feature[] },
      { platform: "tiktok" as Platform, title: "4-7-8 breathing vs. Wim Hof: which one is for you?", date: "2026-05-03", features: ["articles"] as Feature[] },
    ],
  },
];

const DAY_ABBR = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function dayOfMonth(dateStr: string) {
  return parseInt(dateStr.split("-")[2], 10);
}

function platformColor(platform: Platform): string {
  return PLATFORMS.find((p) => p.id === platform)?.color ?? "#888888";
}

function statusConfig(status: Status) {
  switch (status) {
    case "idea":      return { dot: "bg-[#333333]", badge: "border border-[#333333] text-[#444444]", label: "Idea" };
    case "scripted":  return { dot: "bg-[#555555]", badge: "border border-[#555555] text-[#888888]", label: "Scripted" };
    case "produced":  return { dot: "bg-white",     badge: "border border-white text-white",          label: "Produced" };
    case "posted":    return { dot: "bg-white",     badge: "bg-white text-black",                     label: "Posted" };
  }
}

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function PlatformIcon({ platform, className = "w-4 h-4", style }: { platform: Platform; className?: string; style?: React.CSSProperties }) {
  const cls = `${className} flex-shrink-0`;
  switch (platform) {
    case "instagram": return (
      <svg className={cls} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
    case "tiktok": return (
      <svg className={cls} style={style} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z" />
      </svg>
    );
    case "youtube": return (
      <svg className={cls} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="5" width="20" height="14" rx="3.5" />
        <polygon points="10,9.5 16,12 10,14.5" fill="currentColor" stroke="none" />
      </svg>
    );
    case "linkedin": return (
      <svg className={cls} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="3.5" />
        <line x1="7" y1="10" x2="7" y2="17" strokeLinecap="round" />
        <circle cx="7" cy="7.2" r="0.8" fill="currentColor" stroke="none" />
        <path d="M11 17v-3.5a2.5 2.5 0 0 1 5 0V17M11 10v7" strokeLinecap="round" />
      </svg>
    );
    case "twitter": return (
      <svg className={cls} style={style} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
}

// ── Edit Modal ─────────────────────────────────────────────────────────────────

function EditModal({
  post,
  onSave,
  onClose,
}: {
  post: Post;
  onSave: (updated: Post) => void;
  onClose: () => void;
}) {
  const [draft, setDraft] = useState<Post>({ ...post });

  const toggleFeature = (f: Feature) => {
    setDraft((d) => ({
      ...d,
      features: d.features.includes(f)
        ? d.features.filter((x) => x !== f)
        : [...d.features, f],
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-[#111111] border border-[#333333] w-full max-w-md mx-4 p-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#555555]">Edit Post</p>
          <button onClick={onClose} className="text-[#555555] hover:text-white transition-colors text-xs">✕</button>
        </div>

        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-1.5">Title</label>
            <input
              value={draft.title}
              onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
              className="w-full bg-[#0a0a0a] border border-[#333333] text-white text-sm font-light px-3 py-2 focus:outline-none focus:border-[#555555] placeholder:text-[#333333]"
            />
          </div>

          {/* Platform + Status row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-1.5">Platform</label>
              <select
                value={draft.platform}
                onChange={(e) => setDraft((d) => ({ ...d, platform: e.target.value as Platform }))}
                className="w-full bg-[#0a0a0a] border border-[#333333] text-white text-xs font-light px-3 py-2 focus:outline-none focus:border-[#555555]"
              >
                {PLATFORMS.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-1.5">Status</label>
              <select
                value={draft.status}
                onChange={(e) => setDraft((d) => ({ ...d, status: e.target.value as Status }))}
                className="w-full bg-[#0a0a0a] border border-[#333333] text-white text-xs font-light px-3 py-2 focus:outline-none focus:border-[#555555]"
              >
                {(["idea", "scripted", "produced", "posted"] as Status[]).map((s) => (
                  <option key={s} value={s}>{statusConfig(s).label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Date + Type row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-1.5">Date</label>
              <input
                type="date"
                value={draft.date}
                onChange={(e) => setDraft((d) => ({ ...d, date: e.target.value }))}
                className="w-full bg-[#0a0a0a] border border-[#333333] text-white text-xs font-light px-3 py-2 focus:outline-none focus:border-[#555555]"
              />
            </div>
            <div>
              <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-1.5">Format</label>
              <input
                value={draft.contentType}
                onChange={(e) => setDraft((d) => ({ ...d, contentType: e.target.value }))}
                className="w-full bg-[#0a0a0a] border border-[#333333] text-white text-xs font-light px-3 py-2 focus:outline-none focus:border-[#555555]"
              />
            </div>
          </div>

          {/* Agent */}
          <div>
            <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-1.5">Agent</label>
            <select
              value={draft.agent}
              onChange={(e) => setDraft((d) => ({ ...d, agent: e.target.value }))}
              className="w-full bg-[#0a0a0a] border border-[#333333] text-white text-xs font-light px-3 py-2 focus:outline-none focus:border-[#555555]"
            >
              {["Rat", "Rose Finch", "Rockbird", "Raccoon", "Roadrunner"].map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          {/* Feature tags */}
          <div>
            <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-2">Features Promoted</label>
            <div className="flex flex-wrap gap-1.5">
              {FEATURES.map((f) => {
                const active = draft.features.includes(f.id);
                return (
                  <button
                    key={f.id}
                    onClick={() => toggleFeature(f.id)}
                    className={`text-[8px] tracking-[0.1em] uppercase px-2 py-1 border transition-colors ${
                      active
                        ? "border-white text-white bg-white/10"
                        : "border-[#333333] text-[#444444] hover:border-[#555555] hover:text-[#666666]"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6 pt-5 border-t border-[#222222]">
          <button
            onClick={() => onSave(draft)}
            className="flex-1 bg-white text-black text-[9px] tracking-[0.2em] uppercase px-4 py-2.5 hover:bg-[#cccccc] transition-colors"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2.5 border border-[#333333] text-[#666666] text-[9px] tracking-[0.2em] uppercase hover:border-white hover:text-white transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Post Card ─────────────────────────────────────────────────────────────────

function PostCard({
  post,
  onEdit,
  onDragStart,
}: {
  post: Post;
  onEdit: (post: Post) => void;
  onDragStart: (e: React.DragEvent, postId: string) => void;
}) {
  const sc = statusConfig(post.status);
  const color = platformColor(post.platform);

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, post.id)}
      onClick={() => onEdit(post)}
      className="mb-1.5 last:mb-0 bg-[#111111] border border-[#1a1a1a] hover:border-[#333333] transition-all p-2 cursor-grab active:cursor-grabbing group relative overflow-hidden"
      style={{ borderLeftColor: color, borderLeftWidth: "2px" }}
    >
      <div className="flex items-center justify-between gap-1 mb-1">
        <span className="text-[8px] tracking-[0.15em] uppercase text-[#555555]">{post.contentType}</span>
        <span className={`text-[8px] tracking-[0.1em] uppercase px-1 py-px ${sc.badge}`}>{sc.label}</span>
      </div>
      <p className="text-[10px] text-[#cccccc] leading-snug mb-1.5 line-clamp-2 font-light">{post.title}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className={`w-1 h-1 rounded-full flex-shrink-0 ${sc.dot}`} />
          <span className="text-[8px] text-[#444444] truncate">{post.agent}</span>
        </div>
        <span className="text-[7px] text-[#333333] group-hover:text-[#444444] transition-colors opacity-0 group-hover:opacity-100">
          click to edit
        </span>
      </div>
    </div>
  );
}

// ── Calendar View ──────────────────────────────────────────────────────────────

function CalendarView({
  posts,
  onUpdatePost,
}: {
  posts: Post[];
  onUpdatePost: (updated: Post) => void;
}) {
  const [weekIndex, setWeekIndex] = useState(0);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragOverCell, setDragOverCell] = useState<{ platform: Platform; date: string } | null>(null);
  const [platformFilter, setPlatformFilter] = useState<Platform | null>(null);

  const week = WEEKS[weekIndex];

  const weekPosts = posts.filter((p) => week.dates.includes(p.date));
  const stats = {
    idea:     weekPosts.filter((p) => p.status === "idea").length,
    scripted: weekPosts.filter((p) => p.status === "scripted").length,
    produced: weekPosts.filter((p) => p.status === "produced").length,
    posted:   weekPosts.filter((p) => p.status === "posted").length,
  };

  const visiblePlatforms = platformFilter
    ? PLATFORMS.filter((p) => p.id === platformFilter)
    : PLATFORMS;

  const getCell = (platform: Platform, date: string) =>
    posts.filter((p) => p.platform === platform && p.date === date);

  const handleDragStart = (e: React.DragEvent, postId: string) => {
    e.dataTransfer.effectAllowed = "move";
    setDraggingId(postId);
  };

  const handleDragOver = (e: React.DragEvent, platform: Platform, date: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverCell({ platform, date });
  };

  const handleDrop = (e: React.DragEvent, platform: Platform, date: string) => {
    e.preventDefault();
    if (!draggingId) return;
    const post = posts.find((p) => p.id === draggingId);
    if (post) onUpdatePost({ ...post, platform, date });
    setDraggingId(null);
    setDragOverCell(null);
  };

  const handleDragEnd = () => {
    setDraggingId(null);
    setDragOverCell(null);
  };

  return (
    <>
      {editingPost && (
        <EditModal
          post={editingPost}
          onSave={(updated) => { onUpdatePost(updated); setEditingPost(null); }}
          onClose={() => setEditingPost(null)}
        />
      )}

      {/* Pipeline stats */}
      <section className="border-y border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[#222222]">
            <div className="bg-[#0d0d0d] px-5 py-4">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-1">Total Posts</p>
              <p className="text-2xl font-light">{posts.length}</p>
            </div>
            {(["idea", "scripted", "produced", "posted"] as Status[]).map((s) => {
              const sc = statusConfig(s);
              return (
                <div key={s} className="bg-[#0d0d0d] px-5 py-4">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-1">
                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${sc.dot} mr-1.5 -mb-px`} />
                    {sc.label}
                  </p>
                  <p className="text-2xl font-light text-[#888888]">{stats[s]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-1">{week.sublabel}</p>
            <h2 className="text-xl font-light">{week.label}</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {/* Platform filter */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setPlatformFilter(null)}
                className={`text-[8px] tracking-[0.15em] uppercase px-2 py-1 border transition-colors ${
                  !platformFilter ? "border-white text-white" : "border-[#333333] text-[#444444] hover:border-[#555555]"
                }`}
              >
                All
              </button>
              {PLATFORMS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPlatformFilter(platformFilter === p.id ? null : p.id)}
                  className={`text-[8px] tracking-[0.15em] uppercase px-2 py-1 border transition-colors`}
                  style={platformFilter === p.id
                    ? { borderColor: p.color, color: p.color }
                    : { borderColor: "#333333", color: "#444444" }
                  }
                >
                  <PlatformIcon platform={p.id} className="w-3 h-3 inline -mt-px" />
                </button>
              ))}
            </div>
            {/* Week nav */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setWeekIndex((i) => Math.max(0, i - 1))}
                disabled={weekIndex === 0}
                className="px-4 py-2 border border-[#333333] text-[#888888] text-[9px] tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Prev
              </button>
              <div className="flex gap-1.5">
                {WEEKS.map((w, i) => (
                  <button
                    key={w.label}
                    onClick={() => setWeekIndex(i)}
                    className={`w-2 h-2 transition-colors ${i === weekIndex ? "bg-white" : "bg-[#333333] hover:bg-[#555555]"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setWeekIndex((i) => Math.min(WEEKS.length - 1, i + 1))}
                disabled={weekIndex === WEEKS.length - 1}
                className="px-4 py-2 border border-[#333333] text-[#888888] text-[9px] tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="overflow-x-auto">
          <div style={{ minWidth: "780px" }}>
            {/* Day header */}
            <div className="grid border border-[#222222] bg-[#0d0d0d]" style={{ gridTemplateColumns: "110px repeat(7, 1fr)" }}>
              <div className="p-3 border-r border-[#222222]">
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#444444]">Platform</p>
              </div>
              {week.dates.map((date, i) => {
                const isEvent = date === "2026-04-18";
                return (
                  <div key={date} className={`p-3 border-r border-[#222222] last:border-r-0 ${isEvent ? "bg-[#111111]" : ""}`}>
                    <p className="text-[9px] tracking-[0.15em] uppercase text-[#555555] mb-0.5">{DAY_ABBR[i]}</p>
                    <p className={`text-base font-light ${isEvent ? "text-white" : "text-[#888888]"}`}>{dayOfMonth(date)}</p>
                    {isEvent && <p className="text-[7px] tracking-[0.1em] uppercase text-[#555555] mt-0.5">Event</p>}
                  </div>
                );
              })}
            </div>

            {/* Platform rows */}
            {visiblePlatforms.map((platform) => {
              const rowPosts = weekPosts.filter((p) => p.platform === platform.id);
              return (
                <div key={platform.id} className="grid border-b border-x border-[#222222]" style={{ gridTemplateColumns: "110px repeat(7, 1fr)" }}>
                  <div className="p-3 border-r border-[#222222] flex flex-col justify-start gap-2 bg-[#0d0d0d]">
                    <PlatformIcon platform={platform.id} className="w-4 h-4 mt-0.5" style={{ color: platform.color } as React.CSSProperties} />
                    <div>
                      <p className="text-[10px] font-light leading-tight" style={{ color: platform.color }}>{platform.label}</p>
                      <p className="text-[8px] text-[#444444] mt-0.5">{rowPosts.length} post{rowPosts.length !== 1 ? "s" : ""}</p>
                    </div>
                  </div>
                  {week.dates.map((date) => {
                    const cellPosts = getCell(platform.id, date);
                    const isEvent = date === "2026-04-18";
                    const isOver = dragOverCell?.platform === platform.id && dragOverCell?.date === date;
                    return (
                      <div
                        key={date}
                        onDragOver={(e) => handleDragOver(e, platform.id, date)}
                        onDrop={(e) => handleDrop(e, platform.id, date)}
                        onDragLeave={() => setDragOverCell(null)}
                        className={`p-2 border-r border-[#222222] last:border-r-0 min-h-[80px] transition-colors ${
                          isOver ? "bg-[#1a1a1a]" : isEvent ? "bg-[#0e0e0e]" : ""
                        }`}
                      >
                        {cellPosts.length === 0 ? (
                          <div className={`h-full flex items-center justify-center min-h-[64px] border-2 border-dashed transition-colors ${isOver ? "border-[#333333]" : "border-transparent"}`}>
                            <div className="w-1 h-1 rounded-full bg-[#1a1a1a]" />
                          </div>
                        ) : (
                          cellPosts.map((post) => (
                            <PostCard
                              key={post.id}
                              post={post}
                              onEdit={setEditingPost}
                              onDragStart={handleDragStart}
                            />
                          ))
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <p className="text-[9px] tracking-[0.2em] uppercase text-[#444444]">Status</p>
          {(["idea", "scripted", "produced", "posted"] as Status[]).map((s) => {
            const sc = statusConfig(s);
            return (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                <span className="text-[9px] tracking-[0.1em] uppercase text-[#555555]">{sc.label}</span>
              </div>
            );
          })}
          <div className="ml-auto text-[9px] text-[#333333] hidden md:block">
            Drag cards to reschedule · Click to edit
          </div>
        </div>
      </section>
    </>
  );
}

// ── Feature Coverage Matrix ────────────────────────────────────────────────────

function FeatureMatrix({ posts }: { posts: Post[] }) {
  const matrix: Record<Feature, Record<Platform, number>> = {} as Record<Feature, Record<Platform, number>>;
  for (const f of FEATURES) {
    matrix[f.id] = {} as Record<Platform, number>;
    for (const p of PLATFORMS) {
      matrix[f.id][p.id] = posts.filter((post) => post.features.includes(f.id) && post.platform === p.id).length;
    }
  }

  const totalGaps = FEATURES.reduce((acc, f) =>
    acc + PLATFORMS.filter((p) => matrix[f.id][p.id] === 0).length, 0
  );

  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">Coverage Analysis</p>
          <h2 className="text-2xl font-light">Feature Coverage Matrix</h2>
          <p className="text-[#555555] text-sm font-light mt-2">
            Which app features each platform is promoting. Orange cells = gaps.
          </p>
        </div>
        <div className="text-right">
          <p className="text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-1">Coverage Gaps</p>
          <p className="text-3xl font-light" style={{ color: "#F5841F" }}>{totalGaps}</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ minWidth: "600px" }}>
          <thead>
            <tr>
              <th className="text-left p-3 border border-[#222222] bg-[#0d0d0d] text-[9px] tracking-[0.2em] uppercase text-[#444444] font-normal w-40">Feature</th>
              {PLATFORMS.map((p) => (
                <th key={p.id} className="p-3 border border-[#222222] bg-[#0d0d0d] text-center">
                  <PlatformIcon platform={p.id} className="w-4 h-4 mx-auto" style={{ color: p.color } as React.CSSProperties} />
                  <p className="text-[8px] tracking-[0.1em] uppercase mt-1.5 font-normal" style={{ color: p.color }}>{p.label.split(" ")[0]}</p>
                </th>
              ))}
              <th className="p-3 border border-[#222222] bg-[#0d0d0d] text-[9px] tracking-[0.2em] uppercase text-[#444444] font-normal text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {FEATURES.map((f) => {
              const rowTotal = PLATFORMS.reduce((sum, p) => sum + matrix[f.id][p.id], 0);
              return (
                <tr key={f.id}>
                  <td className="p-3 border border-[#222222] text-[10px] text-[#888888] font-light">{f.label}</td>
                  {PLATFORMS.map((p) => {
                    const count = matrix[f.id][p.id];
                    const isGap = count === 0;
                    return (
                      <td
                        key={p.id}
                        className="p-3 border border-[#222222] text-center"
                        style={isGap ? { backgroundColor: "rgba(245,132,31,0.06)" } : {}}
                      >
                        {isGap ? (
                          <span className="text-[10px] font-light" style={{ color: "#F5841F" }}>—</span>
                        ) : (
                          <span className="text-[10px] font-light text-white">{count}</span>
                        )}
                      </td>
                    );
                  })}
                  <td className="p-3 border border-[#222222] text-center">
                    <span className={`text-[10px] font-light ${rowTotal === 0 ? "text-[#333333]" : "text-[#888888]"}`}>{rowTotal}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border" style={{ borderColor: "#F5841F", backgroundColor: "rgba(245,132,31,0.06)" }} />
          <span className="text-[9px] tracking-[0.1em] uppercase text-[#444444]">Gap — no posts scheduled</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border border-[#333333] bg-[#111111]" />
          <span className="text-[9px] tracking-[0.1em] uppercase text-[#444444]">Covered</span>
        </div>
      </div>

      {/* Gap recommendations */}
      <div className="mt-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">Biggest Gaps to Fill</p>
        <div className="space-y-2">
          {FEATURES.flatMap((f) =>
            PLATFORMS.filter((p) => matrix[f.id][p.id] === 0).map((p) => ({ feature: f, platform: p }))
          ).slice(0, 6).map(({ feature, platform }, idx) => (
            <div key={idx} className="flex items-center gap-4 p-3 border border-[#1a1a1a] bg-[#0d0d0d]">
              <div className="w-1 h-4" style={{ backgroundColor: "#F5841F" }} />
              <PlatformIcon platform={platform.id} className="w-3.5 h-3.5 flex-shrink-0" style={{ color: platform.color } as React.CSSProperties} />
              <span className="text-[10px] text-[#888888] flex-1 font-light">
                <span className="text-white">{feature.label}</span> not promoted on <span className="text-white">{platform.label}</span>
              </span>
              <span className="text-[8px] tracking-[0.15em] uppercase px-2 py-1 border border-[#333333] text-[#444444]">Add Post</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Repurpose Queue ────────────────────────────────────────────────────────────

const REPURPOSE_FORMATS = [
  { id: "thread", label: "Twitter Thread", icon: "𝕏", platform: "twitter" },
  { id: "video", label: "Video Script", icon: "▶", platform: "tiktok" },
  { id: "email", label: "Email / Newsletter", icon: "✉", platform: "newsletter" },
];

function generateRepurposes(post: Post) {
  const topic = post.title.replace(/[🚀]/g, "").trim();
  return [
    {
      format: "thread",
      label: "Twitter Thread",
      icon: "𝕏",
      title: `Thread: ${topic}`,
      outline: [
        `1/ ${topic} — a thread on what the science actually says.`,
        `2/ Most people think meditation is about clearing your mind. Wrong.`,
        `3/ Here's what the research shows about ${topic.toLowerCase()}.`,
        `4/ Key insight: [insert core finding from the article]`,
        `5/ What this means for your practice: [actionable takeaway]`,
        `6/ Download Non Magic to try it yourself → wateringmygrass.com`,
      ],
    },
    {
      format: "video",
      label: "Video Script",
      icon: "▶",
      title: `TikTok / Reel: ${topic}`,
      outline: [
        `HOOK (0–3s): "Most people don't know this about ${topic.toLowerCase()}"`,
        `CONTEXT (3–15s): "Here's what [Calm / everyone else] gets wrong..."`,
        `MAIN POINT (15–45s): "[Core finding]. The science: [cite MIT / NIH]"`,
        `PROOF (45–55s): "We've seen this in the Non Magic community: [stat]"`,
        `CTA (55–60s): "Full breakdown at wateringmygrass.com"`,
      ],
    },
    {
      format: "email",
      label: "Newsletter Email",
      icon: "✉",
      title: `Email: ${topic}`,
      outline: [
        `SUBJECT: ${topic} — here's what the research actually says`,
        `PREVIEW TEXT: Most apps won't tell you this...`,
        `OPENER: You asked us about ${topic.toLowerCase()}. So we went deep.`,
        `BODY: [3-paragraph breakdown of the article's core argument]`,
        `SCIENCE NOTE: [Key citation from the article]`,
        `COMMUNITY SPOTLIGHT: [Member story related to this topic]`,
        `CTA: Read the full article → wateringmygrass.com/articles`,
      ],
    },
  ];
}

function RepurposeQueue({ posts }: { posts: Post[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [activeFormat, setActiveFormat] = useState<Record<string, number>>({});

  const topPosts = posts
    .filter((p) => p.status === "posted" || p.status === "produced")
    .sort((a, b) => {
      const order = { posted: 0, produced: 1, scripted: 2, idea: 3 };
      return order[a.status] - order[b.status];
    });

  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">Repurpose Queue</p>
        <h2 className="text-2xl font-light">Top Posts to Repurpose</h2>
        <p className="text-[#555555] text-sm font-light mt-2">
          {topPosts.length} posts ready. Auto-generated formats: thread, video script, email.
        </p>
      </div>

      <div className="space-y-2">
        {topPosts.map((post) => {
          const isOpen = expanded === post.id;
          const repurposes = generateRepurposes(post);
          const fIdx = activeFormat[post.id] ?? 0;
          const color = platformColor(post.platform);
          const sc = statusConfig(post.status);

          return (
            <div key={post.id} className="border border-[#1a1a1a] bg-[#0d0d0d]">
              {/* Row header */}
              <button
                onClick={() => setExpanded(isOpen ? null : post.id)}
                className="w-full flex items-center gap-4 p-4 text-left hover:bg-[#111111] transition-colors"
              >
                <div className="w-0.5 h-8 flex-shrink-0" style={{ backgroundColor: color }} />
                <PlatformIcon platform={post.platform} className="w-4 h-4 flex-shrink-0" style={{ color } as React.CSSProperties} />
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-[#555555] tracking-[0.1em] uppercase mb-0.5">{post.contentType} · {post.agent}</p>
                  <p className="text-sm text-white font-light truncate">{post.title}</p>
                </div>
                <span className={`text-[8px] tracking-[0.1em] uppercase px-2 py-1 flex-shrink-0 ${sc.badge}`}>{sc.label}</span>
                <div className="flex gap-1 flex-shrink-0">
                  {REPURPOSE_FORMATS.map((f, i) => (
                    <div key={f.id} className="w-1.5 h-1.5 rounded-full bg-[#333333]" />
                  ))}
                </div>
                <span className={`text-[#444444] text-xs transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}>▾</span>
              </button>

              {/* Repurpose formats */}
              {isOpen && (
                <div className="border-t border-[#1a1a1a] p-4">
                  <div className="flex gap-2 mb-4">
                    {repurposes.map((r, i) => (
                      <button
                        key={r.format}
                        onClick={() => setActiveFormat((prev) => ({ ...prev, [post.id]: i }))}
                        className={`flex items-center gap-2 px-3 py-1.5 border text-[8px] tracking-[0.15em] uppercase transition-colors ${
                          fIdx === i ? "border-white text-white" : "border-[#333333] text-[#444444] hover:border-[#555555] hover:text-[#666666]"
                        }`}
                      >
                        <span>{r.icon}</span>
                        <span>{r.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-4">
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-3">{repurposes[fIdx].title}</p>
                    <div className="space-y-2">
                      {repurposes[fIdx].outline.map((line, i) => (
                        <div key={i} className="flex gap-3">
                          <span className="text-[#333333] text-[9px] w-3 flex-shrink-0 mt-px font-mono">{i + 1}</span>
                          <p className="text-[11px] text-[#888888] font-light leading-relaxed">{line}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-4 pt-4 border-t border-[#1a1a1a]">
                      <button className="text-[8px] tracking-[0.15em] uppercase px-3 py-1.5 bg-white text-black hover:bg-[#cccccc] transition-colors">
                        Copy
                      </button>
                      <button className="text-[8px] tracking-[0.15em] uppercase px-3 py-1.5 border border-[#333333] text-[#444444] hover:border-white hover:text-white transition-colors">
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {topPosts.length === 0 && (
        <div className="border border-[#222222] p-12 text-center">
          <p className="text-[#444444] text-sm font-light">No produced or posted content yet. Complete scripting and production to populate this queue.</p>
        </div>
      )}
    </section>
  );
}

// ── Competitor Gap Calendar ────────────────────────────────────────────────────

function CompetitorGaps({
  posts,
  onAddPost,
}: {
  posts: Post[];
  onAddPost: (post: Post) => void;
}) {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);

  const scheduledTitles = new Set(posts.map((p) => p.title));

  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">Competitor Analysis</p>
        <h2 className="text-2xl font-light">Competitor Gap Calendar</h2>
        <p className="text-[#555555] text-sm font-light mt-2">
          Topics Calm and Headspace don't cover — pre-filled Non Magic slots.
        </p>
      </div>

      {/* Competitor comparison header */}
      <div className="grid grid-cols-3 gap-px bg-[#222222] mb-8">
        {[
          { name: "Calm", desc: "Sleep stories, daily calm, breathing exercises, music", focus: "Relaxation / Sleep", color: "#60A5FA" },
          { name: "Headspace", desc: "Guided meditation courses, sleep, focus sessions, SOS", focus: "Stress / Focus", color: "#4CBB17" },
          { name: "Non Magic / WMG", desc: "Frequency science, HRV, TM, community, biohacking", focus: "Science + Community", color: "#F5841F" },
        ].map((app) => (
          <div key={app.name} className="bg-[#0d0d0d] p-5">
            <p className="text-[9px] tracking-[0.2em] uppercase mb-1" style={{ color: app.color }}>{app.name}</p>
            <p className="text-[10px] font-light text-[#888888] leading-relaxed mb-2">{app.desc}</p>
            <div className="text-[8px] tracking-[0.1em] uppercase px-2 py-1 border inline-block" style={{ borderColor: app.color, color: app.color }}>
              {app.focus}
            </div>
          </div>
        ))}
      </div>

      {/* Gap topics */}
      <div className="space-y-2">
        {COMPETITOR_GAPS.map((gap, idx) => {
          const isOpen = expandedTopic === idx;
          const allScheduled = gap.slots.every((s) => scheduledTitles.has(s.title));

          return (
            <div key={idx} className="border border-[#1a1a1a] bg-[#0d0d0d]">
              <button
                onClick={() => setExpandedTopic(isOpen ? null : idx)}
                className="w-full flex items-center gap-4 p-4 text-left hover:bg-[#111111] transition-colors"
              >
                <div className="flex gap-2 flex-shrink-0">
                  <div
                    className="w-5 h-5 flex items-center justify-center text-[8px] border font-mono"
                    style={gap.calm ? { borderColor: "#60A5FA", color: "#60A5FA" } : { borderColor: "#1a1a1a", color: "#333333" }}
                    title={gap.calm ? "Calm covers this" : "Calm doesn't cover this"}
                  >
                    C
                  </div>
                  <div
                    className="w-5 h-5 flex items-center justify-center text-[8px] border font-mono"
                    style={gap.headspace ? { borderColor: "#4CBB17", color: "#4CBB17" } : { borderColor: "#1a1a1a", color: "#333333" }}
                    title={gap.headspace ? "Headspace covers this" : "Headspace doesn't cover this"}
                  >
                    H
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-light">{gap.topic}</p>
                  <p className="text-[10px] text-[#555555] mt-0.5 truncate">{gap.description}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="text-[8px] tracking-[0.1em] uppercase mb-1" style={{ color: allScheduled ? "#4CBB17" : "#F5841F" }}>
                    {allScheduled ? "Scheduled" : gap.opportunity}
                  </p>
                  <p className="text-[8px] text-[#444444]">{gap.slots.length} slots</p>
                </div>
                <span className={`text-[#444444] text-xs transition-transform flex-shrink-0 ml-2 ${isOpen ? "rotate-180" : ""}`}>▾</span>
              </button>

              {isOpen && (
                <div className="border-t border-[#1a1a1a] p-4 space-y-3">
                  {gap.slots.map((slot, si) => {
                    const isScheduled = scheduledTitles.has(slot.title);
                    const color = platformColor(slot.platform);
                    return (
                      <div key={si} className="flex items-center gap-4 p-3 border border-[#1a1a1a] bg-[#0a0a0a]">
                        <PlatformIcon platform={slot.platform} className="w-4 h-4 flex-shrink-0" style={{ color } as React.CSSProperties} />
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-[#555555] tracking-[0.1em] uppercase mb-0.5">{slot.date}</p>
                          <p className="text-sm text-white font-light">{slot.title}</p>
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {slot.features.map((f) => (
                              <span key={f} className="text-[7px] tracking-[0.08em] uppercase px-1 py-px border border-[#2a2a2a] text-[#444444]">
                                {FEATURES.find((ft) => ft.id === f)?.label}
                              </span>
                            ))}
                          </div>
                        </div>
                        {isScheduled ? (
                          <span className="text-[8px] tracking-[0.1em] uppercase text-[#4CBB17] flex-shrink-0">Scheduled ✓</span>
                        ) : (
                          <button
                            onClick={() =>
                              onAddPost({
                                id: `gap-${Date.now()}-${si}`,
                                platform: slot.platform,
                                date: slot.date,
                                contentType: slot.platform === "twitter" ? "Thread" : slot.platform === "linkedin" ? "Article" : "Short",
                                title: slot.title,
                                status: "idea",
                                agent: "Raccoon",
                                features: slot.features,
                              })
                            }
                            className="text-[8px] tracking-[0.15em] uppercase px-3 py-1.5 border border-[#333333] text-[#444444] hover:border-white hover:text-white transition-colors flex-shrink-0"
                          >
                            Add to Calendar
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center text-[8px] border border-[#60A5FA] text-[#60A5FA] font-mono">C</div>
          <span className="text-[9px] tracking-[0.1em] uppercase text-[#444444]">Calm covers this topic</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center text-[8px] border border-[#4CBB17] text-[#4CBB17] font-mono">H</div>
          <span className="text-[9px] tracking-[0.1em] uppercase text-[#444444]">Headspace covers this topic</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center text-[8px] border border-[#1a1a1a] text-[#333333] font-mono">C</div>
          <span className="text-[9px] tracking-[0.1em] uppercase text-[#444444]">Gap — they don't cover it</span>
        </div>
      </div>
    </section>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function CalendarClient() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [activeTab, setActiveTab] = useState<Tab>("calendar");

  const handleUpdatePost = useCallback((updated: Post) => {
    setPosts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  }, []);

  const handleAddPost = useCallback((post: Post) => {
    setPosts((prev) => {
      if (prev.some((p) => p.title === post.title && p.platform === post.platform)) return prev;
      return [...prev, post];
    });
  }, []);

  const TABS: { id: Tab; label: string }[] = [
    { id: "calendar", label: "Calendar" },
    { id: "matrix", label: "Feature Coverage" },
    { id: "repurpose", label: "Repurpose Queue" },
    { id: "competitors", label: "Competitor Gaps" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-10 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">Content Operations</p>
        <h1 className="text-4xl md:text-6xl font-light leading-[1.05] tracking-[-0.02em] mb-6">
          Content Calendar
        </h1>
        <p className="text-[#888888] text-lg font-light max-w-xl">
          Weekly post schedule, feature coverage matrix, repurpose queue, and competitor gap analysis.
        </p>
      </section>

      {/* Tab nav */}
      <div className="border-b border-[#222222] sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-sm z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 -mb-px overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-[10px] tracking-[0.2em] uppercase whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-white text-white"
                    : "border-transparent text-[#555555] hover:text-[#888888]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="pt-8">
        {activeTab === "calendar" && (
          <CalendarView posts={posts} onUpdatePost={handleUpdatePost} />
        )}
        {activeTab === "matrix" && (
          <FeatureMatrix posts={posts} />
        )}
        {activeTab === "repurpose" && (
          <RepurposeQueue posts={posts} />
        )}
        {activeTab === "competitors" && (
          <CompetitorGaps posts={posts} onAddPost={handleAddPost} />
        )}
      </div>
    </div>
  );
}
