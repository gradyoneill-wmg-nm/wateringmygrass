import Link from "next/link";
import Countdown from "@/components/Countdown";

const APRIL_18 = "2026-04-18T05:00:00-04:00";

const articles = [
  {
    slug: "what-is-transcendental-meditation",
    tag: "TM",
    title: "What is Transcendental Meditation? The Science Behind the Practice",
    excerpt:
      "TM isn't mysticism. It's a reproducible neurological state. Here's what the research actually says.",
    readTime: "8 min",
  },
  {
    slug: "40hz-gamma-mit-research",
    tag: "Gamma",
    title: "40Hz Gamma: Why MIT Researchers Think This Frequency Could Change Everything",
    excerpt:
      "MIT's Tsai Lab found that 40Hz stimulation reduces amyloid plaques in Alzheimer's mice by 40-50%. The implications go further.",
    readTime: "10 min",
  },
  {
    slug: "i-was-a-monk",
    tag: "Personal",
    title: "I Was a Monk for 2 Months. Here's What I Learned About Your Nervous System",
    excerpt:
      "No phone. No talking. 4am wake-ups. What I discovered about stress physiology you can't read in a paper.",
    readTime: "12 min",
  },
  {
    slug: "gym-bro-guide-to-meditation",
    tag: "Beginner",
    title: "The Gym Bro's Guide to Meditation",
    excerpt:
      "You PR your bench. You track your macros. Why aren't you training your nervous system? A performance-first intro.",
    readTime: "7 min",
  },
  {
    slug: "hrv-the-only-metric-that-matters",
    tag: "HRV",
    title: "Heart Rate Variability: The Only Meditation Metric That Matters",
    excerpt:
      "Forget self-report. HRV tells you exactly how your practice is affecting your nervous system. Here's how to read it.",
    readTime: "9 min",
  },
  {
    slug: "schumann-resonance",
    tag: "Frequency",
    title: "The Schumann Resonance: Earth's Heartbeat and Your Brain",
    excerpt:
      "7.83Hz. The Earth's electromagnetic pulse. And it might be why some people meditate better outdoors.",
    readTime: "8 min",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-36">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-8">
          Est. 2026 — NYC
        </p>
        <h1 className="text-5xl md:text-8xl font-bold leading-[1.0] tracking-[-0.03em] max-w-4xl mb-8">
          This is not magic.
          <br />
          It is science.
          <br />
          <span className="text-[#888888]">And it is for all of us.</span>
        </h1>
        <p className="text-[#888888] text-lg md:text-xl font-light max-w-xl leading-relaxed mb-12">
          Everybody wants a village. No one wants to be a villager.
          <br />
          WMG is the community for people who found something deeper.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/april18"
            className="px-8 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors"
          >
            Join April 18 Global Session
          </Link>
          <a
            href="https://nonmagic.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors"
          >
            Download Non Magic ↗
          </a>
        </div>
      </section>

      {/* April 18 countdown bar */}
      <section className="border-y border-[#222222] bg-[#0d0d0d] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-1">
              Global Meditation Event
            </p>
            <h2 className="text-xl font-light">April 18, 2026 — 5:00 AM EST</h2>
            <p className="text-[#888888] text-sm mt-1">
              NYC in-person + worldwide via Non Magic app
            </p>
          </div>
          <Countdown targetDate={APRIL_18} label="Countdown to April 18" />
          <Link
            href="/april18"
            className="px-6 py-2.5 border border-white text-white text-xs tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all whitespace-nowrap"
          >
            Register Free →
          </Link>
        </div>
      </section>

      {/* Articles grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-2">
              Featured Reading
            </p>
            <h2 className="text-2xl md:text-3xl font-light">Latest Articles</h2>
          </div>
          <Link
            href="/articles"
            className="text-xs tracking-[0.15em] uppercase text-[#888888] hover:text-white transition-colors hidden md:block"
          >
            All Articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#222222]">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-[#0a0a0a] p-6 hover:bg-[#111111] transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#555555] border border-[#333333] px-2 py-0.5">
                  {article.tag}
                </span>
                <span className="text-[9px] text-[#444444]">{article.readTime} read</span>
              </div>
              <h3 className="text-sm font-light leading-snug mb-3 group-hover:text-[#cccccc] transition-colors">
                {article.title}
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">{article.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Link
            href="/articles"
            className="text-xs tracking-[0.15em] uppercase text-[#888888] hover:text-white transition-colors"
          >
            All Articles →
          </Link>
        </div>
      </section>

      {/* Non Magic CTA */}
      <section className="border-t border-[#222222] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
              The App
            </p>
            <h2 className="text-2xl md:text-4xl font-light leading-snug mb-6">
              Practice requires a tool.
              <br />
              <span className="text-[#888888]">Non Magic is that tool.</span>
            </h2>
            <p className="text-[#888888] leading-relaxed mb-8 max-w-lg">
              Frequency-based meditation sessions — Gamma, Alpha, Theta, Delta. Built on
              the science WMG covers. Required for April 18 participants.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* App Store button */}
              <a
                href="https://nonmagic.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 bg-white text-black hover:bg-[#e0e0e0] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] tracking-[0.1em] uppercase leading-none mb-0.5">Download on the</span>
                  <span className="text-sm font-semibold leading-none">App Store</span>
                </div>
              </a>
              {/* Google Play placeholder */}
              <a
                href="https://nonmagic.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 border border-[#333333] text-white hover:border-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72-10.87 9.79zM.5 1.4C.19 1.74 0 2.28 0 2.98v18.04c0 .7.19 1.24.5 1.57l.08.08 10.1-10.1v-.24L.58 1.32.5 1.4zM20.4 10.37l-2.72-1.57-3.07 3.07 3.07 3.07 2.75-1.59c.78-.45.78-1.53-.03-1.98zM4.17.28L16.77 7.5l-2.72 2.72L3.18.43A1.17 1.17 0 014.17.28z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] tracking-[0.1em] uppercase leading-none mb-0.5 text-[#888888]">Get it on</span>
                  <span className="text-sm font-semibold leading-none">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-[#222222] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
              Newsletter
            </p>
            <h2 className="text-2xl font-light mb-2">The WMG Weekly</h2>
            <p className="text-[#888888] text-sm mb-6">
              1 deep-dive article. 1 science note. 1 community spotlight. 1 NYC event.
              Every Sunday.
            </p>
            <form className="flex gap-0">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-[#111111] border border-[#333333] px-4 py-3 text-sm text-white placeholder-[#444444] focus:outline-none focus:border-[#666666]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
