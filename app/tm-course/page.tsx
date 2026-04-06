import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "8-Day TM Course — Non Magic",
  description:
    "Learn Transcendental Meditation in 8 days. The only guided TM program that integrates frequency science and HRV tracking. Structured, evidence-based, free in the Non Magic app.",
};

const curriculum = [
  {
    day: 1,
    title: "Introduction to TM",
    subtitle: "What it is. What it isn't.",
    description:
      "Transcendental Meditation is not mindfulness. It's not concentration. It's effortless mental repetition that produces a unique fourth state of consciousness. Day 1 covers the mechanics, the research, and why TM is different from everything else you've tried.",
    frequency: null,
    duration: "20 min session",
  },
  {
    day: 2,
    title: "The Mantra",
    subtitle: "Your anchor to stillness.",
    description:
      "Traditional TM uses personalized Sanskrit mantras. In Non Magic, we use a structured sound-based approach derived from the same principles — a tonal anchor at Alpha frequency (8–12Hz) that guides the mind without force. Today you learn to use it.",
    frequency: "Alpha Wave (10Hz)",
    duration: "20 min session",
  },
  {
    day: 3,
    title: "The Settling Process",
    subtitle: "Why the mind wanders — and why that's fine.",
    description:
      "The moment you notice you've been thinking about your grocery list instead of meditating, that's the practice. Not the unbroken silence — the return. Day 3 is about understanding the settling curve and why it's neurologically beneficial, not a failure.",
    frequency: "Alpha Wave (10Hz)",
    duration: "20 min session",
  },
  {
    day: 4,
    title: "Gamma Integration",
    subtitle: "Where TM meets frequency science.",
    description:
      "This is where Non Magic diverges from traditional TM. We layer 40Hz gamma entrainment into the post-TM window — when the brain is maximally receptive. MIT's Tsai Lab found 40Hz stimulation drives microglial activity and reduces amyloid plaque by 40–50% in Alzheimer's models. Your TM practice just became a delivery mechanism.",
    frequency: "40Hz Gamma",
    duration: "25 min session",
  },
  {
    day: 5,
    title: "Reading Your HRV",
    subtitle: "The only metric that tells the truth.",
    description:
      "Self-report is unreliable. Heart rate variability is not. HRV measures the time variation between heartbeats — a direct readout of autonomic nervous system balance and parasympathetic tone. Day 5 teaches you to interpret your own data and adjust your practice accordingly.",
    frequency: "Theta Deep (6Hz)",
    duration: "25 min session + HRV review",
  },
  {
    day: 6,
    title: "Building the Habit",
    subtitle: "Twice a day. Every day. Non-negotiable.",
    description:
      "Traditional TM is practiced 20 minutes twice daily. The research on consistency is unambiguous — it's not the duration per session, it's the regularity. Day 6 covers habit stacking, what to do when you miss a session, and how to protect your practice against schedule pressure.",
    frequency: "Alpha Wave (10Hz)",
    duration: "20 min session",
  },
  {
    day: 7,
    title: "Advanced Protocols",
    subtitle: "Delta for sleep. Gamma for performance. Theta for depth.",
    description:
      "Once you have a stable TM foundation, you can start targeting specific outcomes with specific frequencies. Day 7 maps the frequency spectrum to outcomes — delta for sleep quality, theta for creativity and memory consolidation, gamma for cognition and neurological health.",
    frequency: "Delta Sleep (2Hz)",
    duration: "30 min session",
  },
  {
    day: 8,
    title: "Your Practice, Indefinitely",
    subtitle: "This is not a course. It's a practice.",
    description:
      "Day 8 is the handoff. You have the mechanics, the data, the frequency library. The Non Magic app tracks your sessions, your HRV trends, and your progress over time. Grady reviews your first 8 days with community in the live session. Then you're on your own — with everyone else.",
    frequency: "40Hz Gamma",
    duration: "20 min session + community Q&A",
  },
];

const moatTable = [
  {
    feature: "TM-derived technique",
    nonMagic: true,
    calm: false,
    headspace: false,
    traditionalTM: true,
  },
  {
    feature: "Frequency entrainment (binaural / isochronic)",
    nonMagic: true,
    calm: false,
    headspace: false,
    traditionalTM: false,
  },
  {
    feature: "HRV tracking integration",
    nonMagic: true,
    calm: false,
    headspace: false,
    traditionalTM: false,
  },
  {
    feature: "40Hz gamma protocol",
    nonMagic: true,
    calm: false,
    headspace: false,
    traditionalTM: false,
  },
  {
    feature: "Structured 8-day onboarding",
    nonMagic: true,
    calm: true,
    headspace: true,
    traditionalTM: true,
  },
  {
    feature: "Free (no subscription)",
    nonMagic: true,
    calm: false,
    headspace: false,
    traditionalTM: false,
  },
  {
    feature: "Research citations in-app",
    nonMagic: true,
    calm: false,
    headspace: false,
    traditionalTM: false,
  },
  {
    feature: "Community + live sessions",
    nonMagic: true,
    calm: false,
    headspace: false,
    traditionalTM: false,
  },
];

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const X = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#333333]">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function TMCoursePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-20 md:pt-32 md:pb-28">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Non Magic — TM Course
        </p>
        <h1 className="text-5xl md:text-8xl font-bold leading-[1.0] tracking-[-0.03em] max-w-4xl mb-8">
          Learn TM
          <br />
          in 8 days.
          <br />
          <span className="text-[#888888]">Free.</span>
        </h1>
        <p className="text-[#888888] text-lg md:text-xl font-light max-w-xl leading-relaxed mb-4">
          Transcendental Meditation. Frequency science. HRV tracking. All three, together, in one app. Nothing else on the market does this.
        </p>
        <p className="text-[#555555] text-sm max-w-lg leading-relaxed mb-12">
          Traditional TM costs $1,000–$1,500 for in-person instruction. Non Magic is free. And it ships with the frequency and biometric layer that the traditional TM world doesn't have.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://nonmagic.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors"
          >
            Download Non Magic — Free →
          </a>
          <a
            href="#curriculum"
            className="px-8 py-4 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors"
          >
            See the 8-Day Curriculum ↓
          </a>
        </div>
      </section>

      {/* Moat Table */}
      <section className="border-y border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
            Competitive Landscape
          </p>
          <h2 className="text-2xl md:text-3xl font-light mb-2">
            Only Non Magic has all three.
          </h2>
          <p className="text-[#555555] text-sm mb-10 max-w-lg">
            TM technique + frequency entrainment + HRV integration. Every other option gives you one or two of these at best.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#222222]">
                  <th className="text-left py-4 pr-8 text-[10px] tracking-[0.2em] uppercase text-[#444444] font-normal w-1/2">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-center text-[10px] tracking-[0.2em] uppercase text-white font-normal whitespace-nowrap">
                    Non Magic
                  </th>
                  <th className="py-4 px-4 text-center text-[10px] tracking-[0.2em] uppercase text-[#444444] font-normal">
                    Calm
                  </th>
                  <th className="py-4 px-4 text-center text-[10px] tracking-[0.2em] uppercase text-[#444444] font-normal">
                    Headspace
                  </th>
                  <th className="py-4 px-4 text-center text-[10px] tracking-[0.2em] uppercase text-[#444444] font-normal whitespace-nowrap">
                    Traditional TM
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a1a1a]">
                {moatTable.map((row) => (
                  <tr key={row.feature} className="group hover:bg-[#111111] transition-colors">
                    <td className="py-4 pr-8 text-sm text-[#888888] font-light">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center">
                        {row.nonMagic ? <Check /> : <X />}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center">
                        {row.calm ? <Check /> : <X />}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center">
                        {row.headspace ? <Check /> : <X />}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center">
                        {row.traditionalTM ? <Check /> : <X />}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="border border-[#222222] p-5 flex-1 min-w-[200px]">
              <p className="text-2xl font-light mb-1">$0</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">Non Magic cost</p>
            </div>
            <div className="border border-[#222222] p-5 flex-1 min-w-[200px]">
              <p className="text-2xl font-light mb-1">$1,500</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">Traditional TM instruction</p>
            </div>
            <div className="border border-[#222222] p-5 flex-1 min-w-[200px]">
              <p className="text-2xl font-light mb-1">$70/yr</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">Calm subscription (no TM, no HRV, no freq)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
          The Curriculum
        </p>
        <h2 className="text-3xl md:text-4xl font-light mb-4">8 days. 20 minutes a day.</h2>
        <p className="text-[#555555] text-sm max-w-lg mb-14">
          Each day builds on the last. By day 4 you're doing what no traditional TM course teaches.
        </p>

        <div className="space-y-px">
          {curriculum.map((day) => (
            <div
              key={day.day}
              className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 md:p-8 hover:border-[#333333] transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Day number */}
                <div className="shrink-0">
                  <span className="text-6xl md:text-7xl font-bold text-[#1a1a1a] group-hover:text-[#252525] transition-colors leading-none">
                    {String(day.day).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-light">{day.title}</h3>
                    <span className="text-[#555555] text-sm">—</span>
                    <span className="text-[#555555] text-sm font-light">{day.subtitle}</span>
                  </div>
                  <p className="text-[#666666] text-sm leading-relaxed mb-4 max-w-2xl">
                    {day.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {day.frequency && (
                      <div className="border border-[#2a2a2a] px-3 py-1.5">
                        <span className="text-[9px] tracking-[0.2em] uppercase text-[#444444] mr-2">Frequency</span>
                        <span className="text-[10px] text-[#888888]">{day.frequency}</span>
                      </div>
                    )}
                    <div className="border border-[#2a2a2a] px-3 py-1.5">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[#444444] mr-2">Session</span>
                      <span className="text-[10px] text-[#888888]">{day.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Science note */}
      <section className="border-y border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
                The TM Research
              </p>
              <p className="text-2xl font-light mb-4">300+ peer-reviewed studies</p>
              <p className="text-[#555555] text-sm leading-relaxed">
                TM has more research behind it than any other meditation technique. Reduced cortisol, improved cardiovascular markers, documented EEG changes, and reduction in PTSD symptoms in veterans.
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
                The Frequency Layer
              </p>
              <p className="text-2xl font-light mb-4">40Hz + TM = different brain</p>
              <p className="text-[#555555] text-sm leading-relaxed">
                Traditional TM produces alpha and theta. Non Magic adds the 40Hz gamma window — the frequency MIT's Tsai Lab is using to reduce Alzheimer's pathology. When TM opens the receptive window, gamma does its work.
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
                The HRV Feedback Loop
              </p>
              <p className="text-2xl font-light mb-4">Measure what you can't feel</p>
              <p className="text-[#555555] text-sm leading-relaxed">
                HRV tells you what self-report can't. Sessions that felt effortful often show the biggest HRV improvements. Sessions that felt perfect sometimes show flat numbers. Trust the data over the feeling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="border border-[#222222] p-10 md:p-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
            Start Today
          </p>
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 max-w-lg">
            Day 1 is 20 minutes away.
          </h2>
          <p className="text-[#888888] text-base font-light max-w-md leading-relaxed mb-10">
            Download Non Magic. Start the 8-day TM course. Free. No email required. No subscription. iOS and Android.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://nonmagic.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-black text-xs tracking-[0.2em] uppercase hover:bg-[#e0e0e0] transition-colors"
            >
              Download Non Magic — Free →
            </a>
            <Link
              href="/science"
              className="px-10 py-4 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors"
            >
              Read the Frequency Science →
            </Link>
          </div>
          <p className="text-[#333333] text-xs mt-8">
            Non Magic is free. Always. No subscription required to access the TM course.
          </p>
        </div>
      </section>

      {/* Bottom science links */}
      <section className="border-t border-[#222222] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-3">Related Reading</p>
              <div className="flex flex-col gap-2">
                <Link href="/articles/what-is-transcendental-meditation" className="text-xs text-[#555555] hover:text-white transition-colors">
                  What is Transcendental Meditation? →
                </Link>
                <Link href="/articles/40hz-gamma-mit-research" className="text-xs text-[#555555] hover:text-white transition-colors">
                  40Hz Gamma: The MIT Research →
                </Link>
                <Link href="/articles/hrv-the-only-metric-that-matters" className="text-xs text-[#555555] hover:text-white transition-colors">
                  HRV: The Only Metric That Matters →
                </Link>
                <Link href="/science" className="text-xs text-[#555555] hover:text-white transition-colors">
                  Full Frequency Science Library →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
