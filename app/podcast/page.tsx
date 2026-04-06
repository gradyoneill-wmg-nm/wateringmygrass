import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcast — Watering My Grass",
  description:
    "The WMG podcast: unfiltered conversations on meditation science, frequency research, and what it actually means to build a practice.",
};

const episodes = [
  {
    number: 8,
    title: "40Hz Gamma and the Alzheimer's Connection: What MIT Found",
    guest: "Dr. Li-Huei Tsai (simulated)",
    date: "Apr 3, 2026",
    duration: "58 min",
    tag: "Gamma",
    description:
      "We break down the MIT Tsai Lab research on 40Hz light and sound stimulation. What it actually shows. What the press got wrong. What it means for daily practice.",
    available: true,
  },
  {
    number: 7,
    title: "From Monastery to Manhattan: Grady's 60-Day Silence",
    guest: "Grady (Host)",
    date: "Mar 27, 2026",
    duration: "1h 12 min",
    tag: "Personal",
    description:
      "No phone. No talking. 4am wake-ups. Grady unpacks what two months of monastic silence revealed about the nervous system—and why he left.",
    available: true,
  },
  {
    number: 6,
    title: "HRV as a Practice Mirror: What Your Heart Is Telling You",
    guest: "Solo episode",
    date: "Mar 20, 2026",
    duration: "42 min",
    tag: "HRV",
    description:
      "Heart rate variability is the only objective metric that actually reflects meditation quality. Here's how to read it, track it, and use it to improve.",
    available: true,
  },
  {
    number: 5,
    title: "The Schumann Resonance: Real Science or Wellness Noise?",
    guest: "Solo episode",
    date: "Mar 13, 2026",
    duration: "37 min",
    tag: "Frequency",
    description:
      "7.83Hz. Earth's electromagnetic pulse. We look at what the actual literature says vs. what the wellness internet has invented.",
    available: true,
  },
  {
    number: 4,
    title: "Transcendental Meditation: Separating the Science from the Cult",
    guest: "Solo episode",
    date: "Mar 6, 2026",
    duration: "49 min",
    tag: "TM",
    description:
      "TM has legitimate neuroscience behind it and a complicated institutional history. We cover both without flinching.",
    available: true,
  },
  {
    number: 3,
    title: "The Gym Bro Who Started Meditating",
    guest: "Community member",
    date: "Feb 27, 2026",
    duration: "44 min",
    tag: "Beginner",
    description:
      "A strength athlete who dismissed meditation for years talks about what finally clicked—and how it changed his performance metrics.",
    available: true,
  },
  {
    number: 2,
    title: "Building Non Magic: Why We Made the App Free",
    guest: "Grady + Rat",
    date: "Feb 20, 2026",
    duration: "1h 3 min",
    tag: "NM",
    description:
      "The business logic and the moral logic behind making a frequency meditation app free. What we're optimizing for and what we're not.",
    available: true,
  },
  {
    number: 1,
    title: "Why We Started This",
    guest: "Grady + Rat",
    date: "Feb 13, 2026",
    duration: "31 min",
    tag: "Origin",
    description:
      "Episode one. What Watering My Grass is, what it isn't, and why we think the wellness industry needs a community publication built by practitioners.",
    available: true,
  },
  {
    number: 9,
    title: "Breathwork vs. Meditation: Are They the Same?",
    guest: "TBD",
    date: "Coming Apr 10",
    duration: "~50 min",
    tag: "Breathwork",
    description:
      "Pranayama, Wim Hof, box breathing—all of these alter your physiological state. But are they meditation? We dig into the neuroscience of both.",
    available: false,
  },
  {
    number: 10,
    title: "The April 18 Event: What Happens When 1,000 People Meditate Together",
    guest: "Grady + community",
    date: "Coming Apr 24",
    duration: "~60 min",
    tag: "Event",
    description:
      "Post-event debrief. What happened, what we measured, what surprised us. Recorded live at the NYC event.",
    available: false,
  },
];

const tagColors: Record<string, string> = {
  Gamma: "text-yellow-500 border-yellow-900",
  HRV: "text-green-500 border-green-900",
  TM: "text-blue-400 border-blue-900",
  Frequency: "text-purple-400 border-purple-900",
  Breathwork: "text-cyan-400 border-cyan-900",
  Personal: "text-orange-400 border-orange-900",
  Beginner: "text-emerald-400 border-emerald-900",
  NM: "text-white border-[#444444]",
  Origin: "text-[#888888] border-[#333333]",
  Event: "text-red-400 border-red-900",
};

export default function PodcastPage() {
  const availableEpisodes = episodes.filter((e) => e.available).sort((a, b) => b.number - a.number);
  const upcomingEpisodes = episodes.filter((e) => !e.available).sort((a, b) => b.number - a.number);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Podcast
        </p>
        <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-[-0.02em] max-w-3xl mb-6">
          Conversations on practice,
          <br />
          <span className="text-[#888888]">science, and community.</span>
        </h1>
        <p className="text-[#888888] max-w-xl leading-relaxed mb-10">
          No wellness theater. No manifesting. The WMG podcast goes deep on
          meditation science, frequency research, and what it actually takes to
          build a practice that survives contact with real life.
        </p>

        {/* Platform links */}
        <div className="flex flex-wrap gap-3">
          <a
            href="https://podcasts.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 4.8c2.6 0 4.8 2.2 4.8 4.8S14.6 14.4 12 14.4 7.2 12.2 7.2 9.6 9.4 4.8 12 4.8zm0 14.4c-3 0-5.7-1.5-7.3-3.8.4-1.3 1.8-2.2 4.3-2.2h6c2.5 0 3.9.9 4.3 2.2-1.6 2.3-4.3 3.8-7.3 3.8z"/>
            </svg>
            Apple Podcasts
          </a>
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-[#1DB954] hover:text-[#1DB954] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.3c-.2.3-.6.4-1 .2-2.6-1.6-5.9-2-9.8-1.1-.4.1-.8-.2-.9-.5-.1-.4.2-.8.5-.9 4.2-.9 7.9-.5 10.8 1.3.4.2.5.7.4 1zm1.5-3.2c-.3.4-.8.5-1.2.3-3-1.8-7.5-2.4-11-1.3-.5.1-.9-.1-1.1-.6-.1-.5.1-.9.6-1.1 4-.1 8.9.5 12.4 1.6.4.1.6.7.3 1.1zm.1-3.3c-3.5-2.1-9.3-2.3-12.7-1.3-.5.2-1.1-.1-1.3-.6-.2-.5.1-1.1.6-1.3 3.8-1.2 10.3-.9 14.3 1.5.5.3.7 1 .4 1.5-.3.5-.8.5-1.3.2z"/>
            </svg>
            Spotify
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-red-600 hover:text-red-500 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
            </svg>
            YouTube
          </a>
          <a
            href="/api/subscribe"
            className="flex items-center gap-2 px-5 py-2.5 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors"
          >
            RSS Feed
          </a>
        </div>
      </section>

      {/* Latest episode player placeholder */}
      <section className="border-y border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
            Latest Episode
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-[9px] tracking-[0.25em] uppercase border px-2 py-0.5 ${tagColors[availableEpisodes[0].tag] || "text-[#888888] border-[#333333]"}`}>
                  {availableEpisodes[0].tag}
                </span>
                <span className="text-[9px] text-[#444444]">Ep. {availableEpisodes[0].number} · {availableEpisodes[0].duration}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-light mb-2">{availableEpisodes[0].title}</h2>
              <p className="text-sm text-[#888888] mb-1">with {availableEpisodes[0].guest}</p>
              <p className="text-sm text-[#666666] leading-relaxed max-w-xl">{availableEpisodes[0].description}</p>
            </div>
            {/* Player embed placeholder */}
            <div className="w-full md:w-80 shrink-0 border border-[#222222] bg-[#111111] p-6 flex flex-col items-center justify-center gap-4 min-h-[160px]">
              <div className="w-12 h-12 rounded-full border border-[#333333] flex items-center justify-center hover:border-white transition-colors cursor-pointer group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#888888] group-hover:text-white transition-colors ml-0.5">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="w-full h-1 bg-[#222222] rounded-full">
                <div className="w-0 h-full bg-white rounded-full" />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#444444]">Player coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Episode list */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-8">
          All Episodes
        </p>

        <div className="divide-y divide-[#1a1a1a]">
          {availableEpisodes.map((episode) => (
            <div key={episode.number} className="py-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group hover:bg-[#0d0d0d] -mx-4 px-4 transition-colors">
              <div className="shrink-0 text-[#333333] text-xs font-mono w-8 pt-1">
                {String(episode.number).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className={`text-[9px] tracking-[0.25em] uppercase border px-2 py-0.5 ${tagColors[episode.tag] || "text-[#888888] border-[#333333]"}`}>
                    {episode.tag}
                  </span>
                  <span className="text-[9px] text-[#444444]">{episode.date} · {episode.duration}</span>
                </div>
                <h3 className="text-sm font-light mb-1 group-hover:text-[#cccccc] transition-colors">
                  {episode.title}
                </h3>
                <p className="text-[11px] text-[#555555] mb-2">with {episode.guest}</p>
                <p className="text-xs text-[#666666] leading-relaxed max-w-xl">{episode.description}</p>
              </div>
              <div className="shrink-0">
                <button className="px-4 py-2 border border-[#333333] text-[#888888] text-[9px] tracking-[0.2em] uppercase hover:border-white hover:text-white transition-colors">
                  Play →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming */}
        {upcomingEpisodes.length > 0 && (
          <div className="mt-16">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
              Coming Soon
            </p>
            <div className="divide-y divide-[#1a1a1a] opacity-50">
              {upcomingEpisodes.map((episode) => (
                <div key={episode.number} className="py-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="shrink-0 text-[#333333] text-xs font-mono w-8 pt-1">
                    {String(episode.number).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-[9px] tracking-[0.25em] uppercase border border-[#333333] text-[#555555] px-2 py-0.5">
                        {episode.tag}
                      </span>
                      <span className="text-[9px] text-[#444444]">{episode.date} · {episode.duration}</span>
                    </div>
                    <h3 className="text-sm font-light mb-1 text-[#888888]">{episode.title}</h3>
                    <p className="text-[11px] text-[#444444] mb-2">with {episode.guest}</p>
                    <p className="text-xs text-[#555555] leading-relaxed max-w-xl">{episode.description}</p>
                  </div>
                  <div className="shrink-0">
                    <span className="px-4 py-2 border border-[#222222] text-[#333333] text-[9px] tracking-[0.2em] uppercase">
                      Soon
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Subscribe CTA */}
      <section className="border-t border-[#222222] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
              Don't miss an episode
            </p>
            <h2 className="text-2xl font-light mb-4">
              Subscribe on your platform of choice.
            </h2>
            <p className="text-[#888888] text-sm leading-relaxed mb-6">
              New episodes drop every Thursday. Or get them delivered to your inbox
              with the WMG newsletter.
            </p>
            <Link
              href="/newsletter"
              className="inline-block px-6 py-2.5 border border-white text-white text-xs tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all"
            >
              Subscribe to Newsletter →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
