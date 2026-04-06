"use client";

import { useState } from "react";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "April 18 Global Meditation Session",
    type: "Signature Event",
    date: "Apr 18, 2026",
    time: "5:00 AM EST",
    location: "Brooklyn, NY + Worldwide via Non Magic",
    address: "Location TBD — Brooklyn, NY 11201",
    description:
      "The flagship WMG event. 1,000+ practitioners meditating simultaneously in-person and remotely. 40Hz gamma protocol on the Non Magic app. Free to attend.",
    capacity: "1,000+",
    cost: "Free",
    registration: "/april18",
    tags: ["Gamma", "In-Person", "Remote"],
    featured: true,
    upcoming: true,
  },
  {
    id: 2,
    title: "WMG Community Listening Session",
    type: "Community",
    date: "Apr 10, 2026",
    time: "7:00 PM EST",
    location: "Lower East Side, NYC",
    address: "Caveat NYC, 21 A Clinton St, New York, NY 10002",
    description:
      "Informal gathering to listen to Episode 8 of the WMG podcast together and discuss the MIT Tsai Lab findings. Q&A with Grady and Rat after.",
    capacity: "60",
    cost: "Free",
    registration: null,
    tags: ["Community", "Podcast"],
    featured: false,
    upcoming: true,
  },
  {
    id: 3,
    title: "Intro to HRV Biofeedback Workshop",
    type: "Workshop",
    date: "Apr 24, 2026",
    time: "6:30 PM EST",
    location: "Williamsburg, NYC",
    address: "TBD — Williamsburg, Brooklyn",
    description:
      "Hands-on workshop on using HRV as a mirror for your meditation practice. Bring your wearable. We'll teach you to read your own data.",
    capacity: "30",
    cost: "$15",
    registration: null,
    tags: ["HRV", "Workshop", "In-Person"],
    featured: false,
    upcoming: true,
  },
  {
    id: 4,
    title: "WMG x Non Magic Beta Launch Party",
    type: "Social",
    date: "Mar 15, 2026",
    time: "7:00 PM EST",
    location: "Bushwick, NYC",
    address: "Trans-Pecos, 915 Wyckoff Ave, Ridgewood, NY 11385",
    description:
      "The launch of Non Magic's public beta. Live meditation demo, open bar (non-alcoholic), live music by community members. First WMG gathering.",
    capacity: "200",
    cost: "Free",
    registration: null,
    tags: ["NM", "Social", "In-Person"],
    featured: false,
    upcoming: false,
    recap: "140 attendees. First public demo of the 40Hz protocol. The room went quiet.",
  },
  {
    id: 5,
    title: "Frequency Science Reading Group — Vol. 1",
    type: "Community",
    date: "Mar 6, 2026",
    time: "6:00 PM EST",
    location: "Online (Zoom)",
    address: "Remote",
    description:
      "First WMG reading group session. Covered: the Tsai Lab nature paper, the 2019 Cell study on multi-sensory stimulation, and the Lutz et al. monk gamma paper.",
    capacity: "50",
    cost: "Free",
    registration: null,
    tags: ["Research", "Online"],
    featured: false,
    upcoming: false,
    recap: "42 attendees. Recording available to newsletter subscribers.",
  },
];

const typeFilters = ["All", "Signature Event", "Workshop", "Community", "Social"];

const tagColors: Record<string, string> = {
  Gamma: "text-yellow-500 border-yellow-900",
  HRV: "text-green-500 border-green-900",
  TM: "text-blue-400 border-blue-900",
  Community: "text-emerald-400 border-emerald-900",
  Workshop: "text-orange-400 border-orange-900",
  Research: "text-pink-400 border-pink-900",
  "In-Person": "text-white border-[#444444]",
  Remote: "text-cyan-400 border-cyan-900",
  Online: "text-cyan-400 border-cyan-900",
  NM: "text-white border-[#444444]",
  Social: "text-purple-400 border-purple-900",
  Podcast: "text-indigo-400 border-indigo-900",
};

export default function EventsPage() {
  const [filter, setFilter] = useState("All");
  const [formOpen, setFormOpen] = useState(false);

  const upcoming = events.filter((e) => e.upcoming && (filter === "All" || e.type === filter));
  const past = events.filter((e) => !e.upcoming && (filter === "All" || e.type === filter));

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          NYC Events
        </p>
        <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-[-0.02em] max-w-3xl mb-6">
          Practice in person.
          <br />
          <span className="text-[#888888]">Community in the room.</span>
        </h1>
        <p className="text-[#888888] max-w-xl leading-relaxed">
          WMG events are free or close to it. NYC-based but globally accessible via
          Non Magic. No wellness theater — just practitioners in a room.
        </p>
      </section>

      {/* Featured event banner */}
      <section className="border-y border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[9px] tracking-[0.25em] uppercase border border-white text-white px-2 py-0.5">
                  Featured
                </span>
                <span className="text-[9px] text-[#444444]">Apr 18, 2026 · 5:00 AM EST</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light mb-3">
                April 18 Global Meditation Session
              </h2>
              <p className="text-[#888888] text-sm leading-relaxed max-w-xl mb-6">
                The flagship WMG event. 1,000+ practitioners meditating simultaneously
                in-person and remotely. 40Hz gamma protocol on the Non Magic app.
                Free to attend. This is what we've been building toward.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/april18"
                  className="px-6 py-2.5 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors"
                >
                  Register Free →
                </Link>
                <a
                  href="https://nonmagic.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors"
                >
                  Get Non Magic ↗
                </a>
              </div>
            </div>
            {/* Map placeholder */}
            <div className="w-full md:w-80 shrink-0 border border-[#222222] bg-[#111111] flex flex-col items-center justify-center min-h-[200px] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-8 gap-px opacity-5">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-white" />
                  ))}
                </div>
              </div>
              <div className="relative text-center px-6">
                <div className="w-3 h-3 rounded-full bg-white mx-auto mb-3" />
                <p className="text-xs font-light mb-1">Brooklyn, NY</p>
                <p className="text-[10px] text-[#555555]">Location announced Apr 10</p>
              </div>
              <p className="absolute bottom-3 right-3 text-[9px] text-[#333333] tracking-[0.15em] uppercase">Map placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-0">
        <div className="flex flex-wrap gap-2">
          {typeFilters.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`text-[9px] tracking-[0.25em] uppercase px-3 py-1.5 border transition-colors ${
                filter === t
                  ? "border-white text-white"
                  : "border-[#333333] text-[#555555] hover:border-[#888888] hover:text-[#888888]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* Upcoming events */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-8">
          Upcoming — {upcoming.length} event{upcoming.length !== 1 ? "s" : ""}
        </p>

        {upcoming.length === 0 ? (
          <p className="text-[#555555] text-sm">No upcoming events matching this filter.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#222222]">
            {upcoming.map((event) => (
              <div key={event.id} className="bg-[#0a0a0a] p-8 hover:bg-[#0d0d0d] transition-colors">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-[9px] tracking-[0.25em] uppercase border border-[#333333] text-[#555555] px-2 py-0.5">
                    {event.type}
                  </span>
                  {event.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className={`text-[9px] tracking-[0.2em] uppercase border px-2 py-0.5 ${tagColors[tag] || "text-[#555555] border-[#333333]"}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-sm font-light mb-2">{event.title}</h3>
                <div className="flex flex-col gap-1 mb-4">
                  <p className="text-[11px] text-[#888888]">{event.date} at {event.time}</p>
                  <p className="text-[11px] text-[#555555]">{event.location}</p>
                  <p className="text-[11px] text-[#555555]">Capacity: {event.capacity} · {event.cost}</p>
                </div>
                <p className="text-xs text-[#666666] leading-relaxed mb-6">
                  {event.description}
                </p>
                {event.registration ? (
                  <Link
                    href={event.registration}
                    className="text-[10px] tracking-[0.15em] uppercase text-white border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
                  >
                    Register →
                  </Link>
                ) : (
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#555555] border border-[#333333] px-4 py-2">
                    Registration opening soon
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Post your event form */}
      <section className="border-t border-[#222222] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">
                  Community Events
                </p>
                <h2 className="text-2xl font-light">Post your event.</h2>
                <p className="text-[#888888] text-sm mt-2 leading-relaxed">
                  Running a meditation session, workshop, or gathering in NYC?
                  Submit it here. We list community-organized events that align with
                  WMG's values.
                </p>
              </div>
              <button
                onClick={() => setFormOpen(!formOpen)}
                className="px-5 py-2.5 border border-[#333333] text-[#888888] text-[10px] tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors whitespace-nowrap mt-1"
              >
                {formOpen ? "Close ×" : "Add Event +"}
              </button>
            </div>

            {formOpen && (
              <form action="#" method="POST" className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">Event Name</label>
                    <input
                      type="text"
                      name="eventName"
                      required
                      className="bg-[#111111] border border-[#333333] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#888888] placeholder:text-[#444444]"
                      placeholder="What are you hosting?"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">Your Name / Org</label>
                    <input
                      type="text"
                      name="organizer"
                      required
                      className="bg-[#111111] border border-[#333333] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#888888] placeholder:text-[#444444]"
                      placeholder="Name or organization"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">Date & Time</label>
                    <input
                      type="text"
                      name="datetime"
                      required
                      className="bg-[#111111] border border-[#333333] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#888888] placeholder:text-[#444444]"
                      placeholder="e.g. Apr 25, 2026 at 7 PM EST"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">Location</label>
                    <input
                      type="text"
                      name="location"
                      required
                      className="bg-[#111111] border border-[#333333] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#888888] placeholder:text-[#444444]"
                      placeholder="Address or 'Online'"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">Contact Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="bg-[#111111] border border-[#333333] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#888888] placeholder:text-[#444444]"
                    placeholder="you@domain.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">Description</label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    className="bg-[#111111] border border-[#333333] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#888888] placeholder:text-[#444444] resize-none"
                    placeholder="What happens at this event? Who is it for? Is it free? What should people bring?"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors"
                  >
                    Submit Event →
                  </button>
                  <p className="text-[10px] text-[#444444] mt-3">
                    We review and list within 48 hours. We reserve the right to decline
                    events that don't align with WMG values.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Past events */}
      {past.length > 0 && (
        <section className="border-t border-[#222222] py-16">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-8">
              Past Events
            </p>
            <div className="divide-y divide-[#1a1a1a]">
              {past.map((event) => (
                <div key={event.id} className="py-6 opacity-60 hover:opacity-100 transition-opacity">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-[9px] tracking-[0.25em] uppercase border border-[#333333] text-[#555555] px-2 py-0.5">
                      {event.type}
                    </span>
                    <span className="text-[9px] text-[#444444]">{event.date}</span>
                    <span className="text-[9px] text-[#444444]">{event.location}</span>
                  </div>
                  <h3 className="text-sm font-light mb-2">{event.title}</h3>
                  {event.recap && (
                    <p className="text-xs text-[#555555] italic">{event.recap}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
