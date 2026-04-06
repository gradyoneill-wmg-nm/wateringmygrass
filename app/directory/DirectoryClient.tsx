"use client";

import { useState } from "react";

const CATEGORIES = ["all", "yoga", "meditation", "breathwork", "sound bath", "cold plunge"] as const;
type Category = (typeof CATEGORIES)[number];

const events = [
  {
    id: 1,
    name: "Sunrise Yoga in Central Park",
    business: "Sol & Soil",
    location: "Sheep Meadow, Central Park, Manhattan",
    date: "Apr 12, 2026",
    time: "6:30 AM",
    category: "yoga",
    description:
      "Open-air flow class on the Sheep Meadow lawn. All levels welcome. Bring a mat and arrive five minutes early.",
    signupLink: "https://solandsoil.com/events",
  },
  {
    id: 2,
    name: "Guided TM Intro Session",
    business: "Stillwater NYC",
    location: "Gramercy, Manhattan",
    date: "Apr 13, 2026",
    time: "7:00 PM",
    category: "meditation",
    description:
      "A two-hour introduction to Transcendental Meditation. Taught by a certified TM teacher. No experience required.",
    signupLink: "https://stillwaternyc.com/intro",
  },
  {
    id: 3,
    name: "Holotropic Breathwork Circle",
    business: "Resonance Collective",
    location: "Williamsburg, Brooklyn",
    date: "Apr 14, 2026",
    time: "6:00 PM",
    category: "breathwork",
    description:
      "A facilitated two-hour breathwork session using the Holotropic method. Small group, 12 spots max. Mats and blankets provided.",
    signupLink: "https://resonancecollective.nyc",
  },
  {
    id: 4,
    name: "Crystal Bowl Sound Bath",
    business: "Frequency House",
    location: "Nolita, Manhattan",
    date: "Apr 15, 2026",
    time: "7:30 PM",
    category: "sound bath",
    description:
      "Ninety-minute immersive sound journey with Tibetan singing bowls and crystal frequencies. Lie down, close your eyes, let go.",
    signupLink: "https://frequencyhouse.nyc/soundbath",
  },
  {
    id: 5,
    name: "Cold Plunge & Recovery Morning",
    business: "Plunge East",
    location: "East Village, Manhattan",
    date: "Apr 16, 2026",
    time: "7:00 AM",
    category: "cold plunge",
    description:
      "Two rounds of cold exposure (38°F) with guided breathwork between sets. Sauna access included. Wim Hof protocol.",
    signupLink: "https://plungeeast.com/book",
  },
  {
    id: 6,
    name: "Vinyasa Flow — Rooftop",
    business: "Altitude Yoga Co.",
    location: "Long Island City, Queens",
    date: "Apr 17, 2026",
    time: "9:00 AM",
    category: "yoga",
    description:
      "A dynamic vinyasa class on a rooftop deck overlooking Manhattan. Intermediate level. Limited to 20 spots.",
    signupLink: "https://altitudeyogaco.com",
  },
  {
    id: 7,
    name: "40Hz Gamma Meditation Session",
    business: "WMG Community",
    location: "Riverside Park, 79th St, Manhattan",
    date: "Apr 18, 2026",
    time: "5:00 AM",
    category: "meditation",
    description:
      "The global April 18 synchronized session, in-person at Riverside Park. Bring the Non Magic app. Coffee after.",
    signupLink: "/april18",
  },
  {
    id: 8,
    name: "Wim Hof Breathwork Fundamentals",
    business: "Cold Current NYC",
    location: "Bushwick, Brooklyn",
    date: "Apr 19, 2026",
    time: "10:00 AM",
    category: "breathwork",
    description:
      "Learn the Wim Hof breathing technique from a certified instructor. Includes breath retention exercises and cold exposure intro.",
    signupLink: "https://coldcurrentnyc.com/wim-hof",
  },
  {
    id: 9,
    name: "Gong Bath Ceremony",
    business: "The Listening Room",
    location: "Park Slope, Brooklyn",
    date: "Apr 20, 2026",
    time: "4:00 PM",
    category: "sound bath",
    description:
      "A two-hour ceremonial gong bath. Planetary gongs, ocean drum, and voice. Deep delta-wave induction. Transformative.",
    signupLink: "https://thelisteningroom.nyc",
  },
  {
    id: 10,
    name: "Ice Bath + Infrared Sauna",
    business: "Contrast Club",
    location: "Chelsea, Manhattan",
    date: "Apr 21, 2026",
    time: "6:00 PM",
    category: "cold plunge",
    description:
      "Three-round contrast therapy protocol: sauna, cold plunge, recovery. Guided by a certified recovery coach. HRV monitoring available.",
    signupLink: "https://contrastclub.nyc",
  },
  {
    id: 11,
    name: "Yin Yoga + Nidra",
    business: "Ground Studio",
    location: "Cobble Hill, Brooklyn",
    date: "Apr 23, 2026",
    time: "7:00 PM",
    category: "yoga",
    description:
      "A 90-minute slow practice: 45 minutes of deep yin holds followed by 45 minutes of yoga nidra for nervous system restoration.",
    signupLink: "https://groundstudio.nyc",
  },
  {
    id: 12,
    name: "Mindfulness Meditation — Drop-In",
    business: "Open Mind NYC",
    location: "Upper West Side, Manhattan",
    date: "Apr 24, 2026",
    time: "7:30 AM",
    category: "meditation",
    description:
      "Secular mindfulness session, 45 minutes. No booking required, just show up. Cushions provided. Science-based instruction.",
    signupLink: "https://openmindnyc.com/drop-in",
  },
];

const CATEGORY_LABELS: Record<Category, string> = {
  all: "All Events",
  yoga: "Yoga",
  meditation: "Meditation",
  breathwork: "Breathwork",
  "sound bath": "Sound Bath",
  "cold plunge": "Cold Plunge",
};

type FormState = "idle" | "submitting" | "success";

export default function DirectoryClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [formState, setFormState] = useState<FormState>("idle");
  const [showForm, setShowForm] = useState(false);

  const filtered =
    activeCategory === "all"
      ? events
      : events.filter((e) => e.category === activeCategory);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 800);
  }

  return (
    <>
      {/* Category Filter */}
      <div className="border-b border-[#222222] sticky top-0 z-10 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase border transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? "border-white text-white bg-white/5"
                    : "border-[#333333] text-[#555555] hover:border-[#555555] hover:text-[#888888]"
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Event Count */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-4">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#444444]">
          {filtered.length} event{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "all" ? ` — ${CATEGORY_LABELS[activeCategory]}` : ""}
        </p>
      </div>

      {/* Events Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
          {filtered.map((event) => (
            <div
              key={event.id}
              className="bg-[#0a0a0a] p-6 hover:bg-[#0d0d0d] transition-colors flex flex-col"
            >
              {/* Category tag */}
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#555555] border border-[#333333] px-2 py-0.5 self-start mb-4">
                {event.category}
              </span>

              <h3 className="text-base font-light leading-snug mb-1">{event.name}</h3>
              <p className="text-[11px] text-[#555555] tracking-wide mb-3">{event.business}</p>

              <div className="space-y-1 mb-4">
                <p className="text-[11px] text-[#666666]">
                  {event.date} — {event.time}
                </p>
                <p className="text-[11px] text-[#555555]">{event.location}</p>
              </div>

              <p className="text-xs text-[#777777] leading-relaxed flex-1 mb-5">
                {event.description}
              </p>

              <a
                href={event.signupLink}
                target={event.signupLink.startsWith("http") ? "_blank" : undefined}
                rel={event.signupLink.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[10px] tracking-[0.2em] uppercase text-[#555555] hover:text-white transition-colors border border-[#333333] hover:border-white px-4 py-2.5 text-center"
              >
                Sign Up →
              </a>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-[#444444] text-sm">No events in this category yet.</p>
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 text-[10px] tracking-[0.2em] uppercase text-[#555555] hover:text-white transition-colors"
            >
              Be the first to post one →
            </button>
          </div>
        )}
      </section>

      {/* Post Your Event CTA */}
      <section className="border-t border-[#222222] py-20 bg-[#0d0d0d]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
              NYC Wellness Businesses
            </p>
            <h2 className="text-3xl md:text-4xl font-light leading-[1.1] tracking-[-0.02em] mb-4">
              Post Your Event
            </h2>
            <p className="text-[#888888] text-sm leading-relaxed">
              Free for all NYC wellness businesses. Yoga studios, meditation centers,
              breathwork facilitators, sound healers, cold plunge facilities — list your
              events here and reach the WMG community directly.
            </p>
          </div>

          {!showForm && formState !== "success" && (
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors"
            >
              Post Your Event — Free →
            </button>
          )}

          {(showForm || formState !== "idle") && formState !== "success" && (
            <form onSubmit={handleSubmit} className="space-y-5 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#555555] mb-2">
                    Event Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sunday Sound Bath"
                    className="w-full bg-transparent border border-[#333333] px-4 py-3 text-sm text-white placeholder-[#444444] focus:border-[#666666] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#555555] mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Frequency House NYC"
                    className="w-full bg-transparent border border-[#333333] px-4 py-3 text-sm text-white placeholder-[#444444] focus:border-[#666666] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#555555] mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Neighborhood + Borough (e.g. Park Slope, Brooklyn)"
                  className="w-full bg-transparent border border-[#333333] px-4 py-3 text-sm text-white placeholder-[#444444] focus:border-[#666666] focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#555555] mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full bg-transparent border border-[#333333] px-4 py-3 text-sm text-[#888888] focus:border-[#666666] focus:outline-none transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#555555] mb-2">
                    Time *
                  </label>
                  <input
                    type="time"
                    required
                    className="w-full bg-transparent border border-[#333333] px-4 py-3 text-sm text-[#888888] focus:border-[#666666] focus:outline-none transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#555555] mb-2">
                    Category *
                  </label>
                  <select
                    required
                    className="w-full bg-[#111111] border border-[#333333] px-4 py-3 text-sm text-[#888888] focus:border-[#666666] focus:outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    <option value="yoga">Yoga</option>
                    <option value="meditation">Meditation</option>
                    <option value="breathwork">Breathwork</option>
                    <option value="sound bath">Sound Bath</option>
                    <option value="cold plunge">Cold Plunge</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#555555] mb-2">
                  Description *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="What's happening, who it's for, what to bring."
                  className="w-full bg-transparent border border-[#333333] px-4 py-3 text-sm text-white placeholder-[#444444] focus:border-[#666666] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#555555] mb-2">
                  Sign Up / RSVP Link *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://yourstudio.com/events"
                  className="w-full bg-transparent border border-[#333333] px-4 py-3 text-sm text-white placeholder-[#444444] focus:border-[#666666] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#555555] mb-2">
                  Your Email (for review notifications)
                </label>
                <input
                  type="email"
                  placeholder="you@yourstudio.com"
                  className="w-full bg-transparent border border-[#333333] px-4 py-3 text-sm text-white placeholder-[#444444] focus:border-[#666666] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="px-8 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors disabled:opacity-50"
                >
                  {formState === "submitting" ? "Submitting…" : "Submit Event →"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-[10px] tracking-[0.2em] uppercase text-[#444444] hover:text-[#888888] transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {formState === "success" && (
            <div className="border border-[#333333] p-8">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">
                Received
              </p>
              <h3 className="text-xl font-light mb-2">Event submitted.</h3>
              <p className="text-[#888888] text-sm leading-relaxed">
                We review submissions within 24 hours. Once approved, your event will
                appear in the directory. Thanks for building the village.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
