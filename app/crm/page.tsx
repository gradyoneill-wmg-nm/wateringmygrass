import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CRM Dashboard — Watering My Grass",
  description: "Business intelligence hub for Grady — social, email, app, and campaign metrics.",
};

// ── Sparkline helper ──────────────────────────────────────────────────────────
function Sparkline({ data, color = "#ffffff" }: { data: number[]; color?: string }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 80;
  const h = 28;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  });
  const d = `M ${pts.join(" L ")}`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <path d={d} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </svg>
  );
}

// ── Delta badge ───────────────────────────────────────────────────────────────
function Delta({ value }: { value: number }) {
  const up = value >= 0;
  return (
    <span className={`text-[10px] tracking-[0.05em] font-mono ${up ? "text-emerald-400" : "text-red-400"}`}>
      {up ? "▲" : "▼"} {Math.abs(value).toFixed(1)}%
    </span>
  );
}

// ── Generic metric card ───────────────────────────────────────────────────────
function MetricCard({
  label,
  value,
  sub,
  delta,
  spark,
  sparkColor,
  accent,
}: {
  label: string;
  value: string;
  sub?: string;
  delta: number;
  spark: number[];
  sparkColor?: string;
  accent?: string;
}) {
  return (
    <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-5 flex flex-col gap-3 hover:border-[#333333] transition-colors">
      <p className="text-[10px] tracking-[0.25em] uppercase text-[#555555]">{label}</p>
      <div className="flex items-end justify-between gap-2">
        <div>
          <p className={`text-2xl font-light tracking-tight ${accent ?? "text-white"}`}>{value}</p>
          {sub && <p className="text-[11px] text-[#555555] mt-0.5">{sub}</p>}
        </div>
        <Sparkline data={spark} color={sparkColor ?? "#ffffff"} />
      </div>
      <Delta value={delta} />
    </div>
  );
}

// ── Section header ────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">{children}</p>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA (mock — replace with live API calls when ready)
// ─────────────────────────────────────────────────────────────────────────────

const social = [
  {
    platform: "Instagram",
    label: "IG Followers",
    value: "42.1K",
    sub: "4.8% eng. rate",
    delta: 2.3,
    spark: [38.2, 38.9, 39.4, 40.1, 40.6, 41.2, 42.1],
    sparkColor: "#e1306c",
  },
  {
    platform: "TikTok",
    label: "TikTok Views",
    value: "1.24M",
    sub: "this month",
    delta: 18.7,
    spark: [640, 710, 820, 900, 1050, 1180, 1240],
    sparkColor: "#69c9d0",
  },
  {
    platform: "YouTube",
    label: "YT Subscribers",
    value: "8,340",
    sub: "+120 this week",
    delta: 1.5,
    spark: [7800, 7900, 8010, 8080, 8150, 8260, 8340],
    sparkColor: "#ff0000",
  },
  {
    platform: "LinkedIn",
    label: "LI Impressions",
    value: "63.2K",
    sub: "last 30 days",
    delta: 9.1,
    spark: [42, 48, 51, 55, 58, 60, 63.2],
    sparkColor: "#0a66c2",
  },
  {
    platform: "Twitter / X",
    label: "X Engagements",
    value: "28.4K",
    sub: "last 28 days",
    delta: -3.2,
    spark: [32, 31, 30.5, 29.8, 29, 28.9, 28.4],
    sparkColor: "#ffffff",
  },
  {
    platform: "Substack",
    label: "Substack Subs",
    value: "11,820",
    sub: "61% open rate",
    delta: 4.6,
    spark: [10400, 10700, 10900, 11100, 11400, 11620, 11820],
    sparkColor: "#ff6719",
  },
];

const emailMetrics = [
  {
    label: "ConvertKit Subscribers",
    value: "14,203",
    sub: "+387 this week",
    delta: 2.8,
    spark: [12800, 13100, 13400, 13600, 13800, 14010, 14203],
    sparkColor: "#fb923c",
  },
  {
    label: "Weekly Growth",
    value: "387",
    sub: "new subscribers",
    delta: 11.2,
    spark: [280, 310, 340, 360, 350, 348, 387],
    sparkColor: "#fb923c",
  },
  {
    label: "Open Rate",
    value: "58.4%",
    sub: "industry avg 21%",
    delta: 1.1,
    spark: [54, 55.2, 56.1, 57, 57.8, 58.1, 58.4],
    sparkColor: "#fb923c",
  },
  {
    label: "Click Rate",
    value: "12.7%",
    sub: "last broadcast",
    delta: 0.8,
    spark: [11.2, 11.5, 11.9, 12.1, 12.3, 12.5, 12.7],
    sparkColor: "#fb923c",
  },
];

const appMetrics = [
  {
    label: "Daily Active Users",
    value: "3,241",
    sub: "Non Magic app",
    delta: 5.4,
    spark: [2800, 2900, 3010, 3050, 3120, 3190, 3241],
    sparkColor: "#a78bfa",
  },
  {
    label: "Sessions / Day",
    value: "8,820",
    sub: "2.7 sessions/user",
    delta: 3.1,
    spark: [7600, 7900, 8100, 8300, 8500, 8680, 8820],
    sparkColor: "#a78bfa",
  },
  {
    label: "New Installs",
    value: "214",
    sub: "last 7 days",
    delta: 8.6,
    spark: [140, 155, 168, 180, 196, 204, 214],
    sparkColor: "#a78bfa",
  },
  {
    label: "Avg HRV",
    value: "62 ms",
    sub: "across all users",
    delta: 2.2,
    spark: [58, 59, 59.5, 60.1, 60.8, 61.4, 62],
    sparkColor: "#34d399",
  },
  {
    label: "TM Course Completions",
    value: "1,084",
    sub: "all-time",
    delta: 6.3,
    spark: [860, 900, 940, 980, 1010, 1050, 1084],
    sparkColor: "#a78bfa",
  },
  {
    label: "Retention D30",
    value: "71%",
    sub: "day-30 retention",
    delta: 1.9,
    spark: [65, 66.5, 67.8, 68.9, 69.8, 70.4, 71],
    sparkColor: "#a78bfa",
  },
];

const manychat = [
  {
    label: "DMs Sent",
    value: "12,840",
    sub: "last 7 days",
    delta: 14.2,
    spark: [8200, 9100, 10200, 10800, 11400, 12100, 12840],
    sparkColor: "#38bdf8",
  },
  {
    label: "DMs Received",
    value: "6,310",
    sub: "replies & triggers",
    delta: 22.1,
    spark: [3900, 4300, 4900, 5200, 5600, 5980, 6310],
    sparkColor: "#38bdf8",
  },
  {
    label: "App Install CVR",
    value: "8.2%",
    sub: "DM → install",
    delta: 1.8,
    spark: [5.8, 6.2, 6.8, 7.1, 7.5, 7.9, 8.2],
    sparkColor: "#38bdf8",
  },
  {
    label: "Opt-out Rate",
    value: "0.4%",
    sub: "unsubscribe rate",
    delta: -0.1,
    spark: [0.8, 0.7, 0.6, 0.55, 0.5, 0.45, 0.4],
    sparkColor: "#38bdf8",
  },
];

const sms = [
  {
    label: "SMS Sent",
    value: "28,400",
    sub: "this campaign",
    delta: 0,
    spark: [0, 0, 0, 8200, 18000, 24000, 28400],
    sparkColor: "#4ade80",
  },
  {
    label: "Delivery Rate",
    value: "97.8%",
    sub: "delivered / sent",
    delta: 0.3,
    spark: [96.9, 97.1, 97.2, 97.4, 97.5, 97.7, 97.8],
    sparkColor: "#4ade80",
  },
  {
    label: "Response Rate",
    value: "14.3%",
    sub: "replied to CTA",
    delta: 2.1,
    spark: [10.5, 11.2, 12.0, 12.8, 13.4, 14.0, 14.3],
    sparkColor: "#4ade80",
  },
  {
    label: "Opt-out Rate",
    value: "0.9%",
    sub: "STOP replies",
    delta: -0.2,
    spark: [1.4, 1.3, 1.2, 1.1, 1.0, 0.95, 0.9],
    sparkColor: "#4ade80",
  },
];

const meetings = [
  {
    id: 1,
    title: "Non Magic Product Sync",
    date: "Apr 4, 2026",
    attendees: "Grady, Dev team",
    duration: "48 min",
    actions: [
      "Ship HRV trend chart on profile screen by Apr 10",
      "A/B test push notification copy for session reminders",
      "Review Stripe webhook failures from Mar 28",
    ],
  },
  {
    id: 2,
    title: "April 18 Event Logistics",
    date: "Apr 3, 2026",
    attendees: "Grady, Community team",
    duration: "35 min",
    actions: [
      "Confirm Zoom webinar capacity for 5K concurrent viewers",
      "Send reminder sequence: T-7, T-3, T-1, day-of",
      "Translate landing page to Spanish + Portuguese",
    ],
  },
  {
    id: 3,
    title: "Substack Growth Strategy",
    date: "Apr 2, 2026",
    attendees: "Grady, Editorial",
    duration: "52 min",
    actions: [
      "Publish frequency science deep-dive by Apr 7",
      "Cross-promote with 3 aligned Substacks this week",
      "Launch paid tier pilot: 200 founding member spots",
    ],
  },
  {
    id: 4,
    title: "ManyChat Flow Audit",
    date: "Apr 1, 2026",
    attendees: "Grady, Growth",
    duration: "29 min",
    actions: [
      "Fix broken keyword trigger for 'frequency'",
      "Add Spanish language flow variant",
      "Increase delay on follow-up DM from 2h → 4h",
    ],
  },
  {
    id: 5,
    title: "Q2 Revenue Review",
    date: "Mar 31, 2026",
    attendees: "Grady, Finance",
    duration: "61 min",
    actions: [
      "Model TM course cohort pricing at $197, $297, $497",
      "Set up Stripe dashboard webhook for real-time LTV tracking",
      "Explore annual subscription discount (20% off) launch for Apr 18",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function CRMDashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* ── Header ── */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10 md:pt-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">
              Internal · Business Intelligence
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-[-0.03em] leading-[1.0]">
              CRM Dashboard
            </h1>
            <p className="text-[#555555] text-sm mt-3">
              Week of April 6, 2026 &mdash; all data live within 24 h
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/crm/contacts"
              className="px-5 py-2.5 border border-[#333333] text-[#888888] text-xs tracking-[0.12em] uppercase hover:border-white hover:text-white transition-colors"
            >
              Contacts →
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-[#222222]" />

      {/* ── Social Analytics Bar ── */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <SectionLabel>Social Analytics</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#222222]">
          {social.map((s) => (
            <MetricCard
              key={s.platform}
              label={s.label}
              value={s.value}
              sub={s.sub}
              delta={s.delta}
              spark={s.spark}
              sparkColor={s.sparkColor}
            />
          ))}
        </div>
      </section>

      <div className="border-t border-[#222222]" />

      {/* ── Email + App Metrics ── */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Email */}
          <div>
            <SectionLabel>Email — ConvertKit</SectionLabel>
            <div className="grid grid-cols-2 gap-px bg-[#222222]">
              {emailMetrics.map((m) => (
                <MetricCard key={m.label} {...m} />
              ))}
            </div>
          </div>
          {/* App */}
          <div>
            <SectionLabel>Non Magic App</SectionLabel>
            <div className="grid grid-cols-2 gap-px bg-[#222222]">
              {appMetrics.map((m) => (
                <MetricCard key={m.label} {...m} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#222222]" />

      {/* ── DM Automation + SMS ── */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ManyChat */}
          <div>
            <SectionLabel>DM Automation — ManyChat</SectionLabel>
            <div className="grid grid-cols-2 gap-px bg-[#222222]">
              {manychat.map((m) => (
                <MetricCard key={m.label} {...m} />
              ))}
            </div>
          </div>
          {/* Twilio */}
          <div>
            <SectionLabel>SMS Campaigns — Twilio</SectionLabel>
            <div className="grid grid-cols-2 gap-px bg-[#222222]">
              {sms.map((m) => (
                <MetricCard key={m.label} {...m} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#222222]" />

      {/* ── April 18 Event ── */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <SectionLabel>April 18 — Global Meditation Event</SectionLabel>
        <div className="border border-[#222222] bg-[#0d0d0d] p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-light tracking-tight mb-1">
                The World Meditates Together
              </h2>
              <p className="text-sm text-[#555555]">12 days out &mdash; registration open</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 tracking-[0.1em] uppercase">Live registrations</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#222222]">
            <div className="bg-[#0d0d0d] p-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#555555] mb-2">Registrations</p>
              <p className="text-3xl font-light tracking-tight">4,821</p>
              <div className="mt-2 flex items-center gap-2">
                <Delta value={22.4} />
                <Sparkline data={[1200, 1800, 2400, 3100, 3600, 4200, 4821]} color="#ffffff" />
              </div>
            </div>
            <div className="bg-[#0d0d0d] p-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#555555] mb-2">Countries</p>
              <p className="text-3xl font-light tracking-tight">62</p>
              <div className="mt-2 flex items-center gap-2">
                <Delta value={8.3} />
                <Sparkline data={[28, 35, 41, 48, 54, 58, 62]} color="#ffffff" />
              </div>
            </div>
            <div className="bg-[#0d0d0d] p-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#555555] mb-2">Email Confirmed</p>
              <p className="text-3xl font-light tracking-tight">89%</p>
              <div className="mt-2 flex items-center gap-2">
                <Delta value={1.2} />
                <Sparkline data={[82, 84, 85, 86, 87, 88, 89]} color="#ffffff" />
              </div>
            </div>
            <div className="bg-[#0d0d0d] p-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#555555] mb-2">Daily Registrations</p>
              <p className="text-3xl font-light tracking-tight">+341</p>
              <div className="mt-2 flex items-center gap-2">
                <Delta value={31.2} />
                <Sparkline data={[82, 120, 180, 220, 290, 318, 341]} color="#ffffff" />
              </div>
            </div>
          </div>
          {/* Country ticker */}
          <div className="mt-6 pt-6 border-t border-[#1a1a1a]">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#555555] mb-3">Top countries by registration</p>
            <div className="flex flex-wrap gap-2">
              {[
                ["US", "1,840"],["UK", "520"],["Canada", "410"],["Australia", "295"],
                ["Germany", "280"],["Brazil", "265"],["India", "240"],["Netherlands", "185"],
                ["Mexico", "172"],["France", "160"],["Sweden", "148"],["Japan", "132"],
              ].map(([country, count]) => (
                <div key={country} className="border border-[#222222] px-3 py-1.5 flex items-center gap-2">
                  <span className="text-[11px] text-white">{country}</span>
                  <span className="text-[10px] text-[#555555] font-mono">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#222222]" />

      {/* ── Granola Meeting Notes ── */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-4">
          <SectionLabel>Recent Meetings — Granola</SectionLabel>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">Last 5 sessions</span>
        </div>
        <div className="flex flex-col gap-px bg-[#222222]">
          {meetings.map((m) => (
            <div key={m.id} className="bg-[#0a0a0a] p-6 hover:bg-[#0d0d0d] transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-sm font-medium text-white">{m.title}</h3>
                  <p className="text-[11px] text-[#555555] mt-0.5">{m.attendees} &middot; {m.duration}</p>
                </div>
                <span className="text-[10px] text-[#444444] font-mono tracking-wider whitespace-nowrap">{m.date}</span>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-2">Action items</p>
                <ul className="flex flex-col gap-1.5">
                  {m.actions.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12px] text-[#888888]">
                      <span className="text-[#333333] mt-0.5 shrink-0">○</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer nav ── */}
      <div className="border-t border-[#222222]" />
      <section className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-[#444444]">Internal use only &mdash; Watering My Grass</p>
        <Link
          href="/crm/contacts"
          className="text-[11px] text-[#555555] hover:text-white transition-colors tracking-[0.1em] uppercase"
        >
          View all contacts →
        </Link>
      </section>
    </div>
  );
}
