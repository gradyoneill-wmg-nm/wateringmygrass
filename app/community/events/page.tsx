"use client";

import { useState } from "react";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "April 18 Global Meditation — NYC In-Person",
    type: "Signature Event",
    typeColor: "text-white border-white",
    date: "Apr 18, 2026",
    time: "5:00 AM EST",
    location: "Sheep Meadow, Central Park",
    neighborhood: "Midtown Manhattan",
    host: "WMG + Non Magic",
    cost: "Free",
    capacity: "500+",
    description:
      "The flagship WMG event. Worldwide synchronized 40Hz gamma session via Non Magic app. NYC in-person gathering at Central Park Sheep Meadow. Coffee at a nearby spot after. Non Magic app required.",
    tags: ["Gamma", "In-Person", "Remote"],
    registrationUrl: "/april18",
    featured: true,
  },
  {
    id: 2,
    title: "Sound Bath + Breathwork",
    type: "Breathwork",
    typeColor: "text-cyan-400 border-cyan-900",
    date: "Apr 20, 2026",
    time: "7:00 PM EST",
    location: "Brooklyn, NY (address on RSVP)",
    neighborhood: "Brooklyn",
    host: "Resonance Collective",
    cost: "Donation",
    capacity: "40",
    description:
      "Guided sound bath and Wim Hof-derived breathwork session. Instruments tuned to 432Hz. No experience necessary. Bring a mat.",
    tags: ["Breathwork", "Sound Bath"],
    registrationUrl: null,
    featured: false,
  },
  {
    id: 3,
    title: "HRV Biofeedback Workshop",
    type: "Workshop",
    typeColor: "text-green-400 border-green-900",
    date: "Apr 22, 2026",
    time: "6:30 PM EST",
    location: "Flatiron, Manhattan",
    neighborhood: "Flatiron",
    host: "Bio Performance NYC",
    cost: "$20",
    capacity: "20",
    description:
      "Hands-on with HRV monitoring equipment. Learn to read your own data. Correlate your practice results to biometrics. Bring your wearable if you have one.",
    tags: ["HRV", "Workshop"],
    registrationUrl: null,
    featured: false,
  },
  {
    id: 4,
    title: "Outdoor Gamma Session — Riverside",
    type: "Community",
    typeColor: "text-[#888888] border-[#555555]",
    date: "Apr 26, 2026",
    time: "6:00 AM EST",
    location: "Riverside Park, 79th St",
    neighborhood: "Upper West Side",
    host: "WMG Community",
    cost: "Free",
    capacity: "Open",
    description:
      "Early morning outdoor 40Hz gamma session. Non Magic app on your phone. Fresh air, Hudson view, no talking. Show up. Meditate. Leave.",
    tags: ["Gamma", "Outdoor"],
    registrationUrl: null,
    featured: false,
  },
  {
    id: 5,
    title: "Frequency Science Talk with Grady",
    type: "Talk",
    typeColor: "text-yellow-400 border-yellow-900",
    date: "May 3, 2026",
    time: "7:00 PM EST",
    location: "TBD — Lower East Side",
    neighborhood: "Lower East Side",
    host: "Grady O'Neill",
    cost: "Free",
    capacity: "80",
    description:
      "Grady walks through the MIT Tsai Lab research, the HRV data from 90 days of daily practice, and what he thinks is actually happening neurologically. Q&A after. Informal, no slides.",
    tags: ["Research", "Talk"],
    registrationUrl: null,
    featured: false,
  },
  {
    id: 6,
    title: "May Rave: The 1960s Edition",
    type: "Event",
    typeColor: "text-purple-400 border-purple-900",
    date: "May 17, 2026",
    time: "9:00 PM EST",
    location: "TBD — Manhattan",
    neighborhood: "Manhattan",
    host: "Non Magic + WMG",
    cost: "Invite Only",
    capacity: "200",
    description:
      "The flagship monthly gathering. 1960s theme. Pill invitations. Music, meditation, community. Details sent to Non Magic newsletter subscribers only.",
    tags: ["Community", "Event"],
    registrationUrl: "/newsletter",
    featured: false,
  },
];

const neighborhoods = ["All", "Manhattan", "Brooklyn", "Upper West Side", "Flatiron", "Lower East Side", "Midtown Manhattan"];

const tagColors: Record<string, string> = {
  Gamma: "text-yellow-500",
  HRV: "text-green-500",
  TM: "text-blue-400",
  Breathwork: "text-cyan-400",
  Research: "text-pink-400",
  Community: "text-emerald-400",
  Workshop: "text-orange-400",
  Talk: "text-amber-400",
  "Sound Bath": "text-purple-400",
  Outdoor: "text-teal-400",
  Event: "text-purple-400",
  "In-Person": "text-white",
  Remote: "text-[#888888]",
};

export default function CommunityEventsPage() {
  const [filter, setFilter] = useState("All");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    eventTitle: "",
    date: "",
    time: "",
    location: "",
    neighborhood: "",
    host: "",
    description: "",
    cost: "",
    capacity: "",
    email: "",
  });

  const filtered = filter === "All"
    ? events
    : events.filter((e) => e.neighborhood === filter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Community / NYC Events
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-light leading-[1.05] tracking-[-0.02em] mb-4">
              What's happening
              <br />
              <span className="text-[#888888]">in New York.</span>
            </h1>
            <p className="text-[#888888] text-base font-light max-w-md">
              Community meditation sessions, breathwork classes, talks, and sound baths. Curated from the WMG community. Free to post.
            </p>
          </div>
          <a
            href="#post-event"
            className="shrink-0 px-6 py-3 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors whitespace-nowrap"
          >
            Post Your Event ↓
          </a>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="border-y border-[#222222]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="h-64 md:h-80 bg-[#0d0d0d] border border-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
            {/* Fake map grid */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                {Array.from({ length: 96 }).map((_, i) => (
                  <div key={i} className="border border-[#1a1a1a]" />
                ))}
              </div>
            </div>
            {/* Event pins */}
            {[
              { label: "Apr 18", x: "48%", y: "35%" },
              { label: "Apr 26", x: "38%", y: "25%" },
              { label: "May 3", x: "55%", y: "65%" },
              { label: "Apr 20", x: "65%", y: "72%" },
              { label: "Apr 22", x: "50%", y: "55%" },
            ].map((pin) => (
              <div
                key={pin.label}
                className="absolute flex flex-col items-center"
                style={{ left: pin.x, top: pin.y, transform: "translate(-50%, -50%)" }}
              >
                <div className="w-2 h-2 bg-white rounded-full mb-1" />
                <span className="text-[8px] text-[#888888] whitespace-nowrap bg-[#0a0a0a] px-1">
                  {pin.label}
                </span>
              </div>
            ))}
            <div className="relative z-10 text-center">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#333333] mb-1">
                NYC Event Map
              </p>
              <p className="text-[10px] text-[#2a2a2a]">
                Full interactive map coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Events */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Neighborhood filter */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
          {neighborhoods.map((n) => (
            <button
              key={n}
              onClick={() => setFilter(n)}
              className={`px-4 py-2 text-[9px] tracking-[0.2em] uppercase border transition-colors whitespace-nowrap ${
                filter === n
                  ? "border-white text-white bg-[#111111]"
                  : "border-[#222222] text-[#555555] hover:border-[#444444] hover:text-[#888888]"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        {/* Event list */}
        <div className="space-y-px">
          {filtered.map((event) => (
            <div
              key={event.id}
              className={`bg-[#0d0d0d] border transition-colors group ${
                event.featured ? "border-[#333333]" : "border-[#1a1a1a] hover:border-[#2a2a2a]"
              }`}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Date column */}
                  <div className="shrink-0 w-24">
                    <div className="text-xs text-[#555555]">{event.date}</div>
                    <div className="text-sm font-light text-white mt-0.5">{event.time}</div>
                    <div className="mt-1">
                      <span className={`text-[9px] tracking-[0.15em] uppercase border px-1.5 py-0.5 ${event.typeColor}`}>
                        {event.type}
                      </span>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1">
                    {event.featured && (
                      <p className="text-[9px] tracking-[0.2em] uppercase text-white mb-2">
                        Featured Event
                      </p>
                    )}
                    <h3 className="text-base md:text-lg font-light mb-1 group-hover:text-[#cccccc] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs text-[#555555] mb-3">
                      Hosted by {event.host} · {event.location}
                    </p>
                    <p className="text-sm text-[#666666] leading-relaxed mb-4 max-w-2xl">
                      {event.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[9px] tracking-[0.15em] uppercase ${tagColors[tag] || "text-[#555555]"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta row */}
                    <div className="flex flex-wrap gap-6">
                      <div>
                        <p className="text-[9px] tracking-[0.1em] uppercase text-[#333333] mb-0.5">Cost</p>
                        <p className="text-xs text-[#666666]">{event.cost}</p>
                      </div>
                      <div>
                        <p className="text-[9px] tracking-[0.1em] uppercase text-[#333333] mb-0.5">Capacity</p>
                        <p className="text-xs text-[#666666]">{event.capacity}</p>
                      </div>
                      <div>
                        <p className="text-[9px] tracking-[0.1em] uppercase text-[#333333] mb-0.5">Neighborhood</p>
                        <p className="text-xs text-[#666666]">{event.neighborhood}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="shrink-0">
                    {event.registrationUrl ? (
                      <Link
                        href={event.registrationUrl}
                        className="px-5 py-2.5 border border-[#333333] text-[#888888] text-[9px] tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors block text-center whitespace-nowrap"
                      >
                        Register →
                      </Link>
                    ) : (
                      <span className="px-5 py-2.5 border border-[#222222] text-[#333333] text-[9px] tracking-[0.15em] uppercase block text-center whitespace-nowrap">
                        No RSVP Needed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#444444] text-sm">No events in {filter} right now.</p>
            <button
              onClick={() => setFilter("All")}
              className="mt-4 text-[10px] tracking-[0.2em] uppercase text-[#555555] hover:text-white transition-colors"
            >
              Show all events →
            </button>
          </div>
        )}
      </section>

      {/* Post Your Event Form */}
      <section id="post-event" className="border-t border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
              Small Business Directory
            </p>
            <h2 className="text-3xl font-light mb-3">Post your event</h2>
            <p className="text-[#555555] text-sm leading-relaxed mb-10">
              Yoga studios, breathwork teachers, sound healers, meditation spaces — if you&apos;re running wellness events in NYC, post them here for free. Community moderated. WMG reserves the right to decline listings that don&apos;t fit the community.
            </p>

            {formSubmitted ? (
              <div className="border border-[#333333] p-8">
                <p className="text-sm font-light mb-2">Event submitted.</p>
                <p className="text-[#555555] text-sm">
                  We review all submissions within 24 hours. You&apos;ll hear back at the email you provided.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 text-[9px] tracking-[0.2em] uppercase text-[#555555] hover:text-white transition-colors"
                >
                  Submit Another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-2">
                      Event Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.eventTitle}
                      onChange={(e) => setFormData((d) => ({ ...d, eventTitle: e.target.value }))}
                      placeholder="Sound Bath at the Resonance Collective"
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#555555] placeholder:text-[#333333]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData((d) => ({ ...d, date: e.target.value }))}
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#555555] [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-2">
                      Time *
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData((d) => ({ ...d, time: e.target.value }))}
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#555555] [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-2">
                      Venue / Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData((d) => ({ ...d, location: e.target.value }))}
                      placeholder="123 Main St, Brooklyn"
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#555555] placeholder:text-[#333333]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-2">
                      Neighborhood
                    </label>
                    <select
                      value={formData.neighborhood}
                      onChange={(e) => setFormData((d) => ({ ...d, neighborhood: e.target.value }))}
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#555555] [color-scheme:dark]"
                    >
                      <option value="">Select neighborhood</option>
                      {neighborhoods.filter((n) => n !== "All").map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                      <option value="Other">Other NYC</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-2">
                      Host / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.host}
                      onChange={(e) => setFormData((d) => ({ ...d, host: e.target.value }))}
                      placeholder="Your studio or name"
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#555555] placeholder:text-[#333333]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-2">
                      Cost
                    </label>
                    <input
                      type="text"
                      value={formData.cost}
                      onChange={(e) => setFormData((d) => ({ ...d, cost: e.target.value }))}
                      placeholder="Free / $20 / Donation"
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#555555] placeholder:text-[#333333]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-2">
                      Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData((d) => ({ ...d, description: e.target.value }))}
                      placeholder="What happens at this event? Who is it for?"
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#555555] placeholder:text-[#333333] resize-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                      placeholder="you@yourstudio.com"
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#555555] placeholder:text-[#333333]"
                    />
                    <p className="text-[9px] text-[#333333] mt-1.5">
                      We&apos;ll contact you here with any questions. Not published.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors"
                  >
                    Submit Event →
                  </button>
                  <p className="text-[9px] text-[#333333] mt-3">
                    Free. Community moderated. Approved events appear within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* WMG community note */}
      <section className="border-t border-[#222222] py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-2">The Village</p>
            <p className="text-sm font-light mb-1">Everybody wants a village.</p>
            <p className="text-[#555555] text-sm">These events are it. Show up.</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/community"
              className="px-5 py-2.5 border border-[#333333] text-[#888888] text-[9px] tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors"
            >
              Community Feed →
            </Link>
            <Link
              href="/april18"
              className="px-5 py-2.5 bg-white text-black text-[9px] tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors"
            >
              April 18 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
