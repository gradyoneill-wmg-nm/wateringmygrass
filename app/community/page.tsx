import type { Metadata } from "next";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Community — Watering My Grass",
  description:
    "Activity from the WMG community. Session shares, NYC event listings, and the global practice schedule.",
};

const activityFeed = [
  {
    id: 1,
    user: "Grady O'Neill",
    handle: "@grady",
    avatar: "G",
    action: "completed a session",
    frequency: "40Hz Gamma",
    duration: "20 min",
    hrvDelta: "+8ms",
    hrvPositive: true,
    timeAgo: "2h ago",
    note: "Back-to-back days with Gamma. HRV has been trending up all week.",
  },
  {
    id: 2,
    user: "Marcus T.",
    handle: "@marcus_trains",
    avatar: "M",
    action: "completed a session",
    frequency: "Alpha Wave",
    duration: "15 min",
    hrvDelta: "+5ms",
    hrvPositive: true,
    timeAgo: "4h ago",
    note: "First week in. Was skeptical. Numbers don't lie.",
  },
  {
    id: 3,
    user: "Priya S.",
    handle: "@priya_s",
    avatar: "P",
    action: "completed a session",
    frequency: "Theta Deep",
    duration: "30 min",
    hrvDelta: "+12ms",
    hrvPositive: true,
    timeAgo: "6h ago",
    note: null,
  },
  {
    id: 4,
    user: "Jordan K.",
    handle: "@jk_biohack",
    avatar: "J",
    action: "completed a session",
    frequency: "Delta Sleep",
    duration: "45 min",
    hrvDelta: "-2ms",
    hrvPositive: false,
    timeAgo: "8h ago",
    note: "Off day. Poor sleep last night. Still showed up.",
  },
  {
    id: 5,
    user: "Rosa M.",
    handle: "@rosameditate",
    avatar: "R",
    action: "completed a session",
    frequency: "40Hz Gamma",
    duration: "20 min",
    hrvDelta: "+6ms",
    hrvPositive: true,
    timeAgo: "10h ago",
    note: "Day 14 streak. This is now non-negotiable.",
  },
  {
    id: 6,
    user: "Dev P.",
    handle: "@dev_practice",
    avatar: "D",
    action: "completed a session",
    frequency: "Alpha Wave",
    duration: "25 min",
    hrvDelta: "+9ms",
    hrvPositive: true,
    timeAgo: "Yesterday",
    note: null,
  },
];

const nycEvents = [
  {
    id: 1,
    title: "Central Park 5AM Meditation",
    host: "WMG Community",
    location: "Sheep Meadow, Central Park",
    date: "Apr 18, 2026",
    time: "5:00 AM",
    type: "Global Session",
    typeColor: "text-white border-white",
  },
  {
    id: 2,
    title: "Sound Bath + Breathwork",
    host: "Resonance Collective",
    location: "Brooklyn, NY (address on RSVP)",
    date: "Apr 20, 2026",
    time: "7:00 PM",
    type: "Breathwork",
    typeColor: "text-[#888888] border-[#555555]",
  },
  {
    id: 3,
    title: "HRV Training Workshop",
    host: "Bio Performance NYC",
    location: "Flatiron, Manhattan",
    date: "Apr 22, 2026",
    time: "6:30 PM",
    type: "Workshop",
    typeColor: "text-[#888888] border-[#555555]",
  },
  {
    id: 4,
    title: "Outdoor Gamma Session — Riverside",
    host: "WMG Community",
    location: "Riverside Park, 79th St",
    date: "Apr 26, 2026",
    time: "6:00 AM",
    type: "Community",
    typeColor: "text-[#888888] border-[#555555]",
  },
  {
    id: 5,
    title: "Frequency Science Talk",
    host: "Grady O'Neill",
    location: "TBD — Lower East Side",
    date: "May 3, 2026",
    time: "7:00 PM",
    type: "Talk",
    typeColor: "text-[#888888] border-[#555555]",
  },
];

const globalSchedule = [
  {
    time: "5:00 AM EST",
    label: "Morning Session",
    description: "40Hz Gamma — 20 minutes. Synchronized globally via Non Magic.",
  },
  {
    time: "7:30 PM EST",
    label: "Evening Session",
    description: "Alpha / Theta — 25 minutes. Wind-down protocol.",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Community
        </p>
        <h1 className="text-4xl md:text-6xl font-light leading-[1.05] tracking-[-0.02em] mb-6">
          The Village
        </h1>
        <p className="text-[#888888] text-lg font-light max-w-xl">
          Activity from the community. NYC events. The global practice schedule.
          Everybody wants a village.
        </p>
      </section>

      {/* Global Schedule */}
      <section className="border-y border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
            Global Session Schedule — Daily
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#222222]">
            {globalSchedule.map((session) => (
              <div key={session.time} className="bg-[#0d0d0d] p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="text-lg font-light tracking-wide">{session.time}</span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#555555] border border-[#333333] px-2 py-0.5 whitespace-nowrap">
                    {session.label}
                  </span>
                </div>
                <p className="text-[#888888] text-sm">{session.description}</p>
                <a
                  href="https://nonmagic.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[9px] tracking-[0.2em] uppercase text-[#555555] hover:text-white transition-colors"
                >
                  Join via Non Magic ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content: Feed + Events */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Activity Feed */}
          <div className="lg:col-span-2">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-2">
                  Live Activity
                </p>
                <h2 className="text-2xl font-light">Community Feed</h2>
              </div>
              <a
                href="https://nonmagic.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] tracking-[0.2em] uppercase text-[#555555] hover:text-white transition-colors hidden md:block"
              >
                Share Your Session ↗
              </a>
            </div>

            <div className="space-y-px">
              {activityFeed.map((post) => (
                <div
                  key={post.id}
                  className="bg-[#0d0d0d] border border-[#1a1a1a] p-5 hover:border-[#333333] transition-colors"
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-8 h-8 bg-[#222222] border border-[#333333] flex items-center justify-center flex-shrink-0 text-xs text-[#888888] font-light">
                      {post.avatar}
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Header row */}
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-light">{post.user}</span>
                          <span className="text-[#555555] text-xs">{post.handle}</span>
                          <span className="text-[#444444] text-xs">{post.action}</span>
                        </div>
                        <span className="text-[10px] text-[#444444] flex-shrink-0">{post.timeAgo}</span>
                      </div>

                      {/* Session stats */}
                      <div className="flex items-center gap-4 mt-2 mb-3">
                        <div>
                          <p className="text-[9px] tracking-[0.15em] uppercase text-[#444444] mb-0.5">
                            Frequency
                          </p>
                          <p className="text-xs text-[#888888]">{post.frequency}</p>
                        </div>
                        <div className="w-px h-6 bg-[#222222]" />
                        <div>
                          <p className="text-[9px] tracking-[0.15em] uppercase text-[#444444] mb-0.5">
                            Duration
                          </p>
                          <p className="text-xs text-[#888888]">{post.duration}</p>
                        </div>
                        <div className="w-px h-6 bg-[#222222]" />
                        <div>
                          <p className="text-[9px] tracking-[0.15em] uppercase text-[#444444] mb-0.5">
                            HRV Delta
                          </p>
                          <p
                            className={`text-xs font-light ${
                              post.hrvPositive ? "text-white" : "text-[#666666]"
                            }`}
                          >
                            {post.hrvDelta}
                          </p>
                        </div>
                      </div>

                      {/* Note */}
                      {post.note && (
                        <p className="text-xs text-[#666666] leading-relaxed border-l border-[#333333] pl-3">
                          {post.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://nonmagic.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors"
              >
                Share Your Session via Non Magic ↗
              </a>
            </div>
          </div>

          {/* Sidebar: NYC Events + Newsletter */}
          <div className="space-y-8">
            {/* NYC Events */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-2">
                New York City
              </p>
              <h2 className="text-xl font-light mb-6">Upcoming Events</h2>

              <div className="space-y-px">
                {nycEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-[#0d0d0d] border border-[#1a1a1a] p-4 hover:border-[#333333] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span
                        className={`text-[9px] tracking-[0.2em] uppercase border px-2 py-0.5 ${event.typeColor}`}
                      >
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-sm font-light leading-snug mb-1">{event.title}</h3>
                    <p className="text-[10px] text-[#555555] mb-2">{event.host}</p>
                    <div className="space-y-0.5">
                      <p className="text-[10px] text-[#666666]">{event.date} — {event.time}</p>
                      <p className="text-[10px] text-[#555555]">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <button className="text-[9px] tracking-[0.2em] uppercase text-[#555555] hover:text-white transition-colors border border-[#333333] px-4 py-2.5 w-full">
                  Post Your Event — Coming Soon
                </button>
              </div>
            </div>

            {/* Newsletter */}
            <NewsletterSignup variant="full" />
          </div>
        </div>
      </section>

      {/* April 18 CTA */}
      <section className="border-t border-[#222222] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-2">
                Next Global Event
              </p>
              <h2 className="text-2xl font-light mb-1">April 18, 2026 — 5:00 AM EST</h2>
              <p className="text-[#888888] text-sm">
                Synchronized worldwide. NYC in-person at Central Park. Non Magic required.
              </p>
            </div>
            <a
              href="/april18"
              className="flex-shrink-0 px-8 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors"
            >
              Register Free →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
