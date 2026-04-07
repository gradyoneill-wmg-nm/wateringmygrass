"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────
type Segment = "meditator" | "biohacker" | "athlete" | "healer" | "student" | "curious";
type Tier = "free" | "pro" | "founding";
type HRVTrend = "up" | "down" | "flat";

interface Contact {
  id: number;
  name: string;
  email: string;
  segment: Segment;
  hrv: number;
  hrvTrend: HRVTrend;
  tier: Tier;
  lastActive: string;
  ltv: number;
  country: string;
  joinedDaysAgo: number;
  tmCompleted: boolean;
  notes?: string;
  apr18: boolean;
}

// ── Mock contacts ─────────────────────────────────────────────────────────────
const contacts: Contact[] = [
  { id: 1,  name: "Amara Osei",        email: "amara@gmail.com",        segment: "meditator", hrv: 78, hrvTrend: "up",   tier: "founding", lastActive: "Today",    ltv: 497, country: "US",  joinedDaysAgo: 210, tmCompleted: true  },
  { id: 2,  name: "Ryo Tanaka",        email: "ryo.t@icloud.com",       segment: "biohacker", hrv: 91, hrvTrend: "up",   tier: "pro",      lastActive: "Today",    ltv: 297, country: "JP",  joinedDaysAgo: 88,  tmCompleted: true  },
  { id: 3,  name: "Sofia Reyes",       email: "sofiareyes@me.com",      segment: "athlete",   hrv: 84, hrvTrend: "flat", tier: "pro",      lastActive: "Yesterday",ltv: 297, country: "MX",  joinedDaysAgo: 141, tmCompleted: true  },
  { id: 4,  name: "Marcus Webb",       email: "m.webb@proton.me",       segment: "biohacker", hrv: 66, hrvTrend: "up",   tier: "founding", lastActive: "Today",    ltv: 497, country: "UK",  joinedDaysAgo: 320, tmCompleted: true  },
  { id: 5,  name: "Ines Martínez",     email: "ines.m@outlook.com",     segment: "healer",    hrv: 72, hrvTrend: "up",   tier: "pro",      lastActive: "2d ago",   ltv: 297, country: "ES",  joinedDaysAgo: 62,  tmCompleted: false },
  { id: 6,  name: "Devon Park",        email: "devonpark@gmail.com",    segment: "student",   hrv: 58, hrvTrend: "flat", tier: "free",     lastActive: "4d ago",   ltv: 0,   country: "US",  joinedDaysAgo: 14,  tmCompleted: false },
  { id: 7,  name: "Fatima Al-Hassan",  email: "fatima.ah@gmail.com",    segment: "meditator", hrv: 80, hrvTrend: "up",   tier: "founding", lastActive: "Today",    ltv: 594, country: "AE",  joinedDaysAgo: 280, tmCompleted: true  },
  { id: 8,  name: "Luca Ferretti",     email: "luca.ferretti@me.com",   segment: "curious",   hrv: 55, hrvTrend: "down", tier: "free",     lastActive: "1w ago",   ltv: 0,   country: "IT",  joinedDaysAgo: 7,   tmCompleted: false },
  { id: 9,  name: "Priya Nair",        email: "priya.nair@gmail.com",   segment: "healer",    hrv: 76, hrvTrend: "up",   tier: "pro",      lastActive: "Today",    ltv: 297, country: "IN",  joinedDaysAgo: 190, tmCompleted: true  },
  { id: 10, name: "James O'Sullivan",  email: "james.os@proton.me",     segment: "biohacker", hrv: 88, hrvTrend: "up",   tier: "founding", lastActive: "Today",    ltv: 791, country: "IE",  joinedDaysAgo: 430, tmCompleted: true  },
  { id: 11, name: "Yuki Shimizu",      email: "yuki.sh@icloud.com",     segment: "meditator", hrv: 82, hrvTrend: "flat", tier: "pro",      lastActive: "Yesterday",ltv: 297, country: "JP",  joinedDaysAgo: 120, tmCompleted: true  },
  { id: 12, name: "Chloe Dubois",      email: "chloe.d@gmail.com",      segment: "athlete",   hrv: 69, hrvTrend: "up",   tier: "pro",      lastActive: "3d ago",   ltv: 297, country: "FR",  joinedDaysAgo: 55,  tmCompleted: false },
  { id: 13, name: "Tariq Okonkwo",     email: "tariq.o@gmail.com",      segment: "student",   hrv: 61, hrvTrend: "down", tier: "free",     lastActive: "5d ago",   ltv: 0,   country: "NG",  joinedDaysAgo: 22,  tmCompleted: false },
  { id: 14, name: "Elena Volkov",      email: "e.volkov@mail.ru",       segment: "meditator", hrv: 74, hrvTrend: "up",   tier: "founding", lastActive: "Today",    ltv: 497, country: "RU",  joinedDaysAgo: 260, tmCompleted: true  },
  { id: 15, name: "Noah Christiansen", email: "noahc@gmail.com",        segment: "biohacker", hrv: 93, hrvTrend: "up",   tier: "founding", lastActive: "Today",    ltv: 994, country: "DK",  joinedDaysAgo: 510, tmCompleted: true  },
  { id: 16, name: "Maya Goldstein",    email: "maya.g@proton.me",       segment: "healer",    hrv: 77, hrvTrend: "flat", tier: "pro",      lastActive: "Yesterday",ltv: 297, country: "IL",  joinedDaysAgo: 99,  tmCompleted: true  },
  { id: 17, name: "Darius Cole",       email: "darius.cole@gmail.com",  segment: "athlete",   hrv: 85, hrvTrend: "up",   tier: "pro",      lastActive: "Today",    ltv: 297, country: "US",  joinedDaysAgo: 175, tmCompleted: true  },
  { id: 18, name: "Anika Patel",       email: "anika.p@outlook.com",    segment: "curious",   hrv: 60, hrvTrend: "flat", tier: "free",     lastActive: "2w ago",   ltv: 0,   country: "CA",  joinedDaysAgo: 3,   tmCompleted: false },
  { id: 19, name: "Bjorn Lindqvist",   email: "bjorn.l@icloud.com",     segment: "biohacker", hrv: 90, hrvTrend: "up",   tier: "founding", lastActive: "Today",    ltv: 694, country: "SE",  joinedDaysAgo: 380, tmCompleted: true  },
  { id: 20, name: "Carmen López",      email: "carmen.l@gmail.com",     segment: "meditator", hrv: 71, hrvTrend: "up",   tier: "pro",      lastActive: "Yesterday",ltv: 297, country: "CO",  joinedDaysAgo: 148, tmCompleted: false },
  { id: 21, name: "Felix Wang",        email: "felix.wang@me.com",      segment: "student",   hrv: 63, hrvTrend: "flat", tier: "free",     lastActive: "Today",    ltv: 0,   country: "SG",  joinedDaysAgo: 11,  tmCompleted: false },
  { id: 22, name: "Ingrid Haugen",     email: "ingrid.h@proton.me",     segment: "healer",    hrv: 79, hrvTrend: "up",   tier: "founding", lastActive: "Today",    ltv: 497, country: "NO",  joinedDaysAgo: 295, tmCompleted: true  },
  { id: 23, name: "Kwame Asante",      email: "k.asante@gmail.com",     segment: "curious",   hrv: 57, hrvTrend: "down", tier: "free",     lastActive: "3d ago",   ltv: 0,   country: "GH",  joinedDaysAgo: 18,  tmCompleted: false },
  { id: 24, name: "Layla Nassar",      email: "layla.n@icloud.com",     segment: "meditator", hrv: 83, hrvTrend: "up",   tier: "pro",      lastActive: "Today",    ltv: 594, country: "EG",  joinedDaysAgo: 220, tmCompleted: true  },
  { id: 25, name: "Samuel Byrne",      email: "sam.byrne@gmail.com",    segment: "athlete",   hrv: 87, hrvTrend: "flat", tier: "pro",      lastActive: "Yesterday",ltv: 297, country: "AU",  joinedDaysAgo: 133, tmCompleted: true  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
const segmentColors: Record<Segment, string> = {
  meditator: "text-violet-400 border-violet-400/30 bg-violet-400/5",
  biohacker:  "text-cyan-400   border-cyan-400/30   bg-cyan-400/5",
  athlete:    "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  healer:     "text-rose-400   border-rose-400/30   bg-rose-400/5",
  student:    "text-amber-400  border-amber-400/30  bg-amber-400/5",
  curious:    "text-slate-400  border-slate-400/30  bg-slate-400/5",
};

const tierColors: Record<Tier, string> = {
  founding: "text-amber-300 border-amber-300/30 bg-amber-300/5",
  pro:      "text-white     border-white/20      bg-white/5",
  free:     "text-[#444444] border-[#333333]     bg-transparent",
};

function HRVBadge({ value, trend }: { value: number; trend: HRVTrend }) {
  const trendIcon = trend === "up" ? "↑" : trend === "down" ? "↓" : "→";
  const trendColor = trend === "up" ? "text-emerald-400" : trend === "down" ? "text-red-400" : "text-[#555555]";
  const barWidth = Math.min(100, ((value - 40) / 60) * 100);
  return (
    <div className="flex items-center gap-2 min-w-[80px]">
      <div className="w-12 h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-400/60 rounded-full"
          style={{ width: `${barWidth}%` }}
        />
      </div>
      <span className="text-[11px] text-[#888888] font-mono">{value}</span>
      <span className={`text-[10px] ${trendColor}`}>{trendIcon}</span>
    </div>
  );
}

const ALL_SEGMENTS = "all" as const;
type SegmentFilter = Segment | typeof ALL_SEGMENTS;

const ALL_TIERS = "all" as const;
type TierFilter = Tier | typeof ALL_TIERS;

type SortKey = "name" | "hrv" | "ltv" | "joinedDaysAgo";
type SortDir = "asc" | "desc";

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactsPage() {
  const [query, setQuery] = useState("");
  const [segmentFilter, setSegmentFilter] = useState<SegmentFilter>(ALL_SEGMENTS);
  const [tierFilter, setTierFilter] = useState<TierFilter>(ALL_TIERS);
  const [sortKey, setSortKey] = useState<SortKey>("ltv");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const filtered = useMemo(() => {
    let list = contacts;
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.email.toLowerCase().includes(q) ||
          c.country.toLowerCase().includes(q)
      );
    }
    if (segmentFilter !== ALL_SEGMENTS) {
      list = list.filter((c) => c.segment === segmentFilter);
    }
    if (tierFilter !== ALL_TIERS) {
      list = list.filter((c) => c.tier === tierFilter);
    }
    list = [...list].sort((a, b) => {
      let av: number | string = a[sortKey];
      let bv: number | string = b[sortKey];
      if (sortDir === "asc") return av > bv ? 1 : -1;
      return av < bv ? 1 : -1;
    });
    return list;
  }, [query, segmentFilter, tierFilter, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  function SortButton({ label, skey }: { label: string; skey: SortKey }) {
    const active = sortKey === skey;
    return (
      <button
        onClick={() => toggleSort(skey)}
        className={`text-[10px] tracking-[0.15em] uppercase flex items-center gap-1 transition-colors ${
          active ? "text-white" : "text-[#444444] hover:text-[#888888]"
        }`}
      >
        {label}
        {active && <span className="text-[8px]">{sortDir === "asc" ? "▲" : "▼"}</span>}
      </button>
    );
  }

  const totalLTV = filtered.reduce((s, c) => s + c.ltv, 0);
  const avgHRV = Math.round(filtered.reduce((s, c) => s + c.hrv, 0) / (filtered.length || 1));

  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* ── Header ── */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10 md:pt-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">
              CRM · Non Magic Users
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-[-0.03em] leading-[1.0]">
              Contacts
            </h1>
            <p className="text-[#555555] text-sm mt-3">
              {contacts.length.toLocaleString()} users &mdash; sorted by LTV
            </p>
          </div>
          <Link
            href="/crm"
            className="px-5 py-2.5 border border-[#333333] text-[#888888] text-xs tracking-[0.12em] uppercase hover:border-white hover:text-white transition-colors self-start md:self-auto"
          >
            ← Dashboard
          </Link>
        </div>
      </section>

      <div className="border-t border-[#222222]" />

      {/* ── Filter bar ── */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, email, or country…"
            className="flex-1 bg-[#111111] border border-[#333333] text-white text-sm px-4 py-2.5 focus:outline-none focus:border-[#888888] placeholder:text-[#444444] min-w-0"
          />
          {/* Segment filter */}
          <div className="flex gap-1 flex-wrap">
            {([ALL_SEGMENTS, "meditator", "biohacker", "athlete", "healer", "student", "curious"] as SegmentFilter[]).map((s) => (
              <button
                key={s}
                onClick={() => setSegmentFilter(s)}
                className={`px-3 py-2 text-[10px] tracking-[0.1em] uppercase border transition-colors ${
                  segmentFilter === s
                    ? "border-white text-white bg-white/5"
                    : "border-[#333333] text-[#555555] hover:border-[#555555] hover:text-[#888888]"
                }`}
              >
                {s === ALL_SEGMENTS ? "All" : s}
              </button>
            ))}
          </div>
          {/* Tier filter */}
          <div className="flex gap-1">
            {([ALL_TIERS, "founding", "pro", "free"] as TierFilter[]).map((t) => (
              <button
                key={t}
                onClick={() => setTierFilter(t)}
                className={`px-3 py-2 text-[10px] tracking-[0.1em] uppercase border transition-colors ${
                  tierFilter === t
                    ? "border-white text-white bg-white/5"
                    : "border-[#333333] text-[#555555] hover:border-[#555555] hover:text-[#888888]"
                }`}
              >
                {t === ALL_TIERS ? "All tiers" : t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Summary stats ── */}
      <section className="max-w-7xl mx-auto px-6 pb-4">
        <div className="grid grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          <div className="bg-[#0a0a0a] px-5 py-3 flex items-center justify-between">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">Showing</span>
            <span className="text-sm font-mono text-white">{filtered.length}</span>
          </div>
          <div className="bg-[#0a0a0a] px-5 py-3 flex items-center justify-between">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">Total LTV</span>
            <span className="text-sm font-mono text-white">${totalLTV.toLocaleString()}</span>
          </div>
          <div className="bg-[#0a0a0a] px-5 py-3 flex items-center justify-between">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">Avg HRV</span>
            <span className="text-sm font-mono text-emerald-400">{avgHRV} ms</span>
          </div>
        </div>
      </section>

      {/* ── Table ── */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="border border-[#1a1a1a] overflow-x-auto">
          {/* Table header */}
          <div className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr_1fr_1fr] gap-0 bg-[#0d0d0d] border-b border-[#222222] px-4 py-3 min-w-[800px]">
            <SortButton label="Name" skey="name" />
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#444444]">Email</span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#444444]">Segment</span>
            <SortButton label="HRV" skey="hrv" />
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#444444]">Tier</span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#444444]">Last active</span>
            <SortButton label="LTV" skey="ltv" />
          </div>

          {/* Rows */}
          <div className="flex flex-col divide-y divide-[#111111] min-w-[800px]">
            {filtered.length === 0 ? (
              <div className="px-4 py-12 text-center text-[#444444] text-sm">
                No contacts match your filters.
              </div>
            ) : (
              filtered.map((c) => (
                <div
                  key={c.id}
                  className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr_1fr_1fr] gap-0 px-4 py-3.5 bg-[#0a0a0a] hover:bg-[#0d0d0d] transition-colors items-center"
                >
                  {/* Name */}
                  <div>
                    <p className="text-[13px] text-white">{c.name}</p>
                    <p className="text-[10px] text-[#555555]">{c.country} · {c.joinedDaysAgo}d ago{c.tmCompleted ? " · TM ✓" : ""}</p>
                  </div>
                  {/* Email */}
                  <p className="text-[11px] text-[#555555] truncate pr-4">{c.email}</p>
                  {/* Segment */}
                  <span className={`inline-flex w-fit px-2 py-0.5 text-[10px] tracking-[0.05em] uppercase border ${segmentColors[c.segment]}`}>
                    {c.segment}
                  </span>
                  {/* HRV */}
                  <HRVBadge value={c.hrv} trend={c.hrvTrend} />
                  {/* Tier */}
                  <span className={`inline-flex w-fit px-2 py-0.5 text-[10px] tracking-[0.05em] uppercase border ${tierColors[c.tier]}`}>
                    {c.tier}
                  </span>
                  {/* Last active */}
                  <p className="text-[11px] text-[#555555]">{c.lastActive}</p>
                  {/* LTV */}
                  <p className={`text-[12px] font-mono ${c.ltv > 0 ? "text-white" : "text-[#444444]"}`}>
                    {c.ltv > 0 ? `$${c.ltv.toLocaleString()}` : "—"}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
        <p className="text-[10px] text-[#333333] mt-4 text-right">
          Showing {filtered.length} of {contacts.length} contacts &middot; Mock data — connect Supabase to hydrate
        </p>
      </section>
    </div>
  );
}
