"use client";

import { useState } from "react";

type Platform = "instagram" | "tiktok" | "youtube" | "linkedin" | "twitter";
type Status = "idea" | "scripted" | "produced" | "posted";

type Post = {
  id: string;
  platform: Platform;
  date: string;
  contentType: string;
  title: string;
  status: Status;
  agent: string;
};

const ALL_POSTS: Post[] = [
  // ── Week 1: Apr 6–12 (Launch Week) ──────────────────────────────────────
  // Instagram
  { id: "ig-1", platform: "instagram", date: "2026-04-07", contentType: "Reel", title: "Gym Bro Guide teaser", status: "scripted", agent: "Rockbird" },
  { id: "ig-2", platform: "instagram", date: "2026-04-09", contentType: "Carousel", title: "40Hz science breakdown", status: "produced", agent: "Rockbird" },
  { id: "ig-3", platform: "instagram", date: "2026-04-11", contentType: "Story", title: "Community spotlight #1", status: "posted", agent: "Rockbird" },
  // TikTok
  { id: "tt-1", platform: "tiktok", date: "2026-04-07", contentType: "Short", title: "What is Non Magic?", status: "scripted", agent: "Rose Finch" },
  { id: "tt-2", platform: "tiktok", date: "2026-04-08", contentType: "Short", title: "40Hz gamma explainer", status: "produced", agent: "Rockbird" },
  { id: "tt-3", platform: "tiktok", date: "2026-04-10", contentType: "Short", title: "Non Magic is live 🚀", status: "posted", agent: "Rose Finch" },
  { id: "tt-4", platform: "tiktok", date: "2026-04-12", contentType: "Short", title: "I Was a Monk teaser", status: "scripted", agent: "Rockbird" },
  // YouTube Shorts
  { id: "yt-1", platform: "youtube", date: "2026-04-10", contentType: "Short", title: "Non Magic app walkthrough", status: "produced", agent: "Rose Finch" },
  // LinkedIn
  { id: "li-1", platform: "linkedin", date: "2026-04-07", contentType: "Article", title: "Science of meditation at scale", status: "scripted", agent: "Rat" },
  { id: "li-2", platform: "linkedin", date: "2026-04-10", contentType: "Post", title: "Non Magic launch announcement", status: "posted", agent: "Rat" },
  // Twitter
  { id: "tw-1", platform: "twitter", date: "2026-04-06", contentType: "Thread", title: "WMG launch thread", status: "posted", agent: "Rat" },
  { id: "tw-2", platform: "twitter", date: "2026-04-07", contentType: "Thread", title: "Gym Bro article thread", status: "scripted", agent: "Rat" },
  { id: "tw-3", platform: "twitter", date: "2026-04-08", contentType: "Post", title: "MIT 40Hz research cite", status: "scripted", agent: "Raccoon" },
  { id: "tw-4", platform: "twitter", date: "2026-04-10", contentType: "Post", title: "Non Magic is live", status: "posted", agent: "Rat" },
  { id: "tw-5", platform: "twitter", date: "2026-04-12", contentType: "Post", title: "I Was a Monk article drop", status: "scripted", agent: "Rockbird" },

  // ── Week 2: Apr 13–19 (April 18 Event Week) ─────────────────────────────
  // Instagram
  { id: "ig-4", platform: "instagram", date: "2026-04-14", contentType: "Reel", title: "April 18 countdown reel", status: "scripted", agent: "Rockbird" },
  { id: "ig-5", platform: "instagram", date: "2026-04-16", contentType: "Carousel", title: "How to prepare: global session guide", status: "idea", agent: "Rockbird" },
  { id: "ig-6", platform: "instagram", date: "2026-04-18", contentType: "Story", title: "Live from Central Park 5AM", status: "idea", agent: "Rose Finch" },
  { id: "ig-7", platform: "instagram", date: "2026-04-19", contentType: "Reel", title: "April 18 recap highlights", status: "idea", agent: "Rockbird" },
  // TikTok
  { id: "tt-5", platform: "tiktok", date: "2026-04-14", contentType: "Short", title: "April 18 — what to expect", status: "scripted", agent: "Rose Finch" },
  { id: "tt-6", platform: "tiktok", date: "2026-04-16", contentType: "Short", title: "HRV during group meditation?", status: "idea", agent: "Raccoon" },
  { id: "tt-7", platform: "tiktok", date: "2026-04-18", contentType: "Short", title: "Event day vlog", status: "idea", agent: "Rose Finch" },
  // YouTube Shorts
  { id: "yt-2", platform: "youtube", date: "2026-04-15", contentType: "Short", title: "April 18 explainer", status: "scripted", agent: "Rose Finch" },
  { id: "yt-3", platform: "youtube", date: "2026-04-19", contentType: "Short", title: "Post-event recap", status: "idea", agent: "Rockbird" },
  // LinkedIn
  { id: "li-3", platform: "linkedin", date: "2026-04-15", contentType: "Post", title: "Synchronized global meditation — the science", status: "scripted", agent: "Rat" },
  { id: "li-4", platform: "linkedin", date: "2026-04-18", contentType: "Post", title: "April 18 — 3,000 people, one frequency", status: "idea", agent: "Rat" },
  // Twitter
  { id: "tw-6", platform: "twitter", date: "2026-04-13", contentType: "Thread", title: "5 days until April 18", status: "scripted", agent: "Rat" },
  { id: "tw-7", platform: "twitter", date: "2026-04-15", contentType: "Post", title: "Register now — link in bio", status: "scripted", agent: "Rose Finch" },
  { id: "tw-8", platform: "twitter", date: "2026-04-17", contentType: "Thread", title: "Tomorrow is the day", status: "idea", agent: "Rat" },
  { id: "tw-9", platform: "twitter", date: "2026-04-18", contentType: "Thread", title: "Live thread — global session", status: "idea", agent: "Rat" },
  { id: "tw-10", platform: "twitter", date: "2026-04-19", contentType: "Post", title: "Post-event numbers + energy", status: "idea", agent: "Raccoon" },

  // ── Week 3: Apr 20–26 (Post-Event Momentum) ──────────────────────────────
  // Instagram
  { id: "ig-8", platform: "instagram", date: "2026-04-21", contentType: "Carousel", title: "HRV: the only metric that matters", status: "idea", agent: "Rockbird" },
  { id: "ig-9", platform: "instagram", date: "2026-04-24", contentType: "Reel", title: "Schumann resonance explainer", status: "idea", agent: "Rockbird" },
  // TikTok
  { id: "tt-8", platform: "tiktok", date: "2026-04-21", contentType: "Short", title: "HRV for beginners", status: "idea", agent: "Raccoon" },
  { id: "tt-9", platform: "tiktok", date: "2026-04-23", contentType: "Short", title: "Breathwork protocol walkthrough", status: "idea", agent: "Rockbird" },
  { id: "tt-10", platform: "tiktok", date: "2026-04-26", contentType: "Short", title: "NYC sound bath recap", status: "idea", agent: "Rose Finch" },
  // YouTube Shorts
  { id: "yt-4", platform: "youtube", date: "2026-04-22", contentType: "Short", title: "Community feed highlights", status: "idea", agent: "Rose Finch" },
  { id: "yt-5", platform: "youtube", date: "2026-04-26", contentType: "Short", title: "Breathwork protocols guide", status: "idea", agent: "Rockbird" },
  // LinkedIn
  { id: "li-5", platform: "linkedin", date: "2026-04-22", contentType: "Article", title: "Non-profit wellness: the WMG model", status: "idea", agent: "Roadrunner" },
  { id: "li-6", platform: "linkedin", date: "2026-04-25", contentType: "Post", title: "Contributor program is open", status: "idea", agent: "Rat" },
  // Twitter
  { id: "tw-11", platform: "twitter", date: "2026-04-20", contentType: "Thread", title: "Schumann resonance deep dive", status: "idea", agent: "Raccoon" },
  { id: "tw-12", platform: "twitter", date: "2026-04-22", contentType: "Post", title: "HRV article drop", status: "idea", agent: "Rockbird" },
  { id: "tw-13", platform: "twitter", date: "2026-04-24", contentType: "Post", title: "May event sneak peek", status: "idea", agent: "Rose Finch" },
  { id: "tw-14", platform: "twitter", date: "2026-04-26", contentType: "Thread", title: "Community stats — week 3", status: "idea", agent: "Rat" },
];

const PLATFORMS: { id: Platform; label: string; shortLabel: string }[] = [
  { id: "instagram", label: "Instagram", shortLabel: "IG" },
  { id: "tiktok", label: "TikTok", shortLabel: "TT" },
  { id: "youtube", label: "YouTube Shorts", shortLabel: "YT" },
  { id: "linkedin", label: "LinkedIn", shortLabel: "LI" },
  { id: "twitter", label: "Twitter / X", shortLabel: "X" },
];

const WEEKS = [
  {
    label: "Apr 6 – Apr 12",
    sublabel: "Launch Week",
    dates: ["2026-04-06", "2026-04-07", "2026-04-08", "2026-04-09", "2026-04-10", "2026-04-11", "2026-04-12"],
  },
  {
    label: "Apr 13 – Apr 19",
    sublabel: "April 18 Event",
    dates: ["2026-04-13", "2026-04-14", "2026-04-15", "2026-04-16", "2026-04-17", "2026-04-18", "2026-04-19"],
  },
  {
    label: "Apr 20 – Apr 26",
    sublabel: "Post-Event",
    dates: ["2026-04-20", "2026-04-21", "2026-04-22", "2026-04-23", "2026-04-24", "2026-04-25", "2026-04-26"],
  },
];

const DAY_ABBR = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function dayOfMonth(dateStr: string) {
  return parseInt(dateStr.split("-")[2], 10);
}

function statusConfig(status: Status) {
  switch (status) {
    case "idea":
      return { dot: "bg-[#333333]", badge: "border border-[#333333] text-[#444444]", label: "Idea" };
    case "scripted":
      return { dot: "bg-[#555555]", badge: "border border-[#555555] text-[#888888]", label: "Scripted" };
    case "produced":
      return { dot: "bg-white", badge: "border border-white text-white", label: "Produced" };
    case "posted":
      return { dot: "bg-white", badge: "bg-white text-black", label: "Posted" };
  }
}

function PlatformIcon({ platform, className = "w-4 h-4" }: { platform: Platform; className?: string }) {
  const cls = `${className} flex-shrink-0`;
  switch (platform) {
    case "instagram":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="5" width="20" height="14" rx="3.5" />
          <polygon points="10,9.5 16,12 10,14.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="3.5" />
          <line x1="7" y1="10" x2="7" y2="17" strokeLinecap="round" />
          <circle cx="7" cy="7.2" r="0.8" fill="currentColor" stroke="none" />
          <path d="M11 17v-3.5a2.5 2.5 0 0 1 5 0V17M11 10v7" strokeLinecap="round" />
        </svg>
      );
    case "twitter":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
  }
}

function PostCard({ post }: { post: Post }) {
  const sc = statusConfig(post.status);
  return (
    <div className="mb-1.5 last:mb-0 bg-[#111111] border border-[#1a1a1a] hover:border-[#333333] transition-colors p-2 group">
      <div className="flex items-center justify-between gap-1 mb-1">
        <span className="text-[8px] tracking-[0.15em] uppercase text-[#555555]">
          {post.contentType}
        </span>
        <span className={`text-[8px] tracking-[0.1em] uppercase px-1 py-px ${sc.badge}`}>
          {sc.label}
        </span>
      </div>
      <p className="text-[10px] text-[#cccccc] leading-snug mb-1.5 line-clamp-2 font-light">
        {post.title}
      </p>
      <div className="flex items-center gap-1">
        <div className={`w-1 h-1 rounded-full flex-shrink-0 ${sc.dot}`} />
        <span className="text-[8px] text-[#444444] truncate">{post.agent}</span>
      </div>
    </div>
  );
}

export default function CalendarClient() {
  const [weekIndex, setWeekIndex] = useState(0);
  const week = WEEKS[weekIndex];

  const getCell = (platform: Platform, date: string) =>
    ALL_POSTS.filter((p) => p.platform === platform && p.date === date);

  const weekPosts = ALL_POSTS.filter((p) => week.dates.includes(p.date));
  const stats = {
    idea: weekPosts.filter((p) => p.status === "idea").length,
    scripted: weekPosts.filter((p) => p.status === "scripted").length,
    produced: weekPosts.filter((p) => p.status === "produced").length,
    posted: weekPosts.filter((p) => p.status === "posted").length,
  };
  const totalAll = ALL_POSTS.length;

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Content Operations
        </p>
        <h1 className="text-4xl md:text-6xl font-light leading-[1.05] tracking-[-0.02em] mb-6">
          Content Calendar
        </h1>
        <p className="text-[#888888] text-lg font-light max-w-xl">
          Weekly post schedule across all platforms. Tracks scripting, production,
          and publishing status per agent.
        </p>
      </section>

      {/* Pipeline stats */}
      <section className="border-y border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[#222222]">
            <div className="bg-[#0d0d0d] px-5 py-4">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-1">Total Posts</p>
              <p className="text-2xl font-light">{totalAll}</p>
            </div>
            <div className="bg-[#0d0d0d] px-5 py-4">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#333333] mr-1.5 -mb-px" />
                Idea
              </p>
              <p className="text-2xl font-light text-[#555555]">{stats.idea}</p>
            </div>
            <div className="bg-[#0d0d0d] px-5 py-4">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#555555] mr-1.5 -mb-px" />
                Scripted
              </p>
              <p className="text-2xl font-light text-[#888888]">{stats.scripted}</p>
            </div>
            <div className="bg-[#0d0d0d] px-5 py-4">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mr-1.5 -mb-px" />
                Produced
              </p>
              <p className="text-2xl font-light">{stats.produced}</p>
            </div>
            <div className="bg-[#0d0d0d] px-5 py-4">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mr-1.5 -mb-px" />
                Posted
              </p>
              <p className="text-2xl font-light">{stats.posted}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Week navigation */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-1">
              {week.sublabel}
            </p>
            <h2 className="text-xl font-light">{week.label}</h2>
          </div>
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
                  className={`w-2 h-2 transition-colors ${
                    i === weekIndex ? "bg-white" : "bg-[#333333] hover:bg-[#555555]"
                  }`}
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
      </section>

      {/* Calendar grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="overflow-x-auto">
          <div style={{ minWidth: "780px" }}>
            {/* Day header row */}
            <div
              className="grid border border-[#222222] bg-[#0d0d0d]"
              style={{ gridTemplateColumns: "110px repeat(7, 1fr)" }}
            >
              {/* Platform column header */}
              <div className="p-3 border-r border-[#222222]">
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#444444]">Platform</p>
              </div>
              {/* Day columns */}
              {week.dates.map((date, i) => {
                const isToday = date === "2026-04-06"; // launch day
                const isEvent = date === "2026-04-18";
                return (
                  <div
                    key={date}
                    className={`p-3 border-r border-[#222222] last:border-r-0 ${
                      isEvent ? "bg-[#111111]" : ""
                    }`}
                  >
                    <p className="text-[9px] tracking-[0.15em] uppercase text-[#555555] mb-0.5">
                      {DAY_ABBR[i]}
                    </p>
                    <p className={`text-base font-light ${isEvent ? "text-white" : "text-[#888888]"}`}>
                      {dayOfMonth(date)}
                    </p>
                    {isEvent && (
                      <p className="text-[7px] tracking-[0.1em] uppercase text-[#555555] mt-0.5">
                        Event
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Platform rows */}
            {PLATFORMS.map((platform) => {
              const rowPosts = weekPosts.filter((p) => p.platform === platform.id);
              return (
                <div
                  key={platform.id}
                  className="grid border-b border-x border-[#222222]"
                  style={{ gridTemplateColumns: "110px repeat(7, 1fr)" }}
                >
                  {/* Platform label */}
                  <div className="p-3 border-r border-[#222222] flex flex-col justify-start gap-2 bg-[#0d0d0d]">
                    <PlatformIcon platform={platform.id} className="w-4 h-4 text-[#888888] mt-0.5" />
                    <div>
                      <p className="text-[10px] font-light text-[#888888] leading-tight">
                        {platform.label}
                      </p>
                      <p className="text-[8px] text-[#444444] mt-0.5">
                        {rowPosts.length} post{rowPosts.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>

                  {/* Day cells */}
                  {week.dates.map((date) => {
                    const cellPosts = getCell(platform.id, date);
                    const isEvent = date === "2026-04-18";
                    return (
                      <div
                        key={date}
                        className={`p-2 border-r border-[#222222] last:border-r-0 min-h-[80px] ${
                          isEvent ? "bg-[#0e0e0e]" : ""
                        }`}
                      >
                        {cellPosts.length === 0 ? (
                          <div className="h-full flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-[#1a1a1a]" />
                          </div>
                        ) : (
                          cellPosts.map((post) => <PostCard key={post.id} post={post} />)
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
                <span className="text-[9px] tracking-[0.1em] uppercase text-[#555555]">
                  {sc.label}
                </span>
              </div>
            );
          })}
          <div className="ml-auto flex items-center gap-4">
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#444444]">Agents</p>
            {["Rat", "Rose Finch", "Rockbird", "Raccoon", "Roadrunner"].map((a) => (
              <span key={a} className="text-[9px] text-[#444444]">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
