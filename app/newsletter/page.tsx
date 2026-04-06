import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsletter — Watering My Grass",
  description:
    "The WMG weekly: frequency science, practice notes, community updates, and the reads worth your time. No noise.",
};

const issues = [
  {
    number: 12,
    title: "What April 18 Is Actually About",
    date: "Apr 3, 2026",
    preview:
      "It's not a concert. It's not a wellness event. It's a coordinated global meditation session built on 40Hz gamma technology. Here's the full picture.",
    tags: ["Event", "Gamma", "Community"],
    readTime: "6 min",
  },
  {
    number: 11,
    title: "The MIT Study Everyone Got Wrong",
    date: "Mar 27, 2026",
    preview:
      "The Tsai Lab 40Hz paper got picked up by every health publication and almost all of them misread it. We go through the methodology line by line.",
    tags: ["Research", "Gamma"],
    readTime: "9 min",
  },
  {
    number: 10,
    title: "HRV: Your Practice in Numbers",
    date: "Mar 20, 2026",
    preview:
      "Heart rate variability tells you what self-report can't. This week: how to measure it, what the numbers mean, and why most meditation apps get it wrong.",
    tags: ["HRV", "Practice"],
    readTime: "8 min",
  },
  {
    number: 9,
    title: "Notes from 60 Days of Silence",
    date: "Mar 13, 2026",
    preview:
      "Grady came back from the monastery. This week he writes about what happened to his nervous system and why he left before the program ended.",
    tags: ["Personal", "TM"],
    readTime: "11 min",
  },
  {
    number: 8,
    title: "Building in Public: The Non Magic Stack",
    date: "Mar 6, 2026",
    preview:
      "We made the app free. Here's what that decision cost us, what we got in return, and what our unit economics actually look like.",
    tags: ["NM", "Building"],
    readTime: "7 min",
  },
  {
    number: 7,
    title: "Schumann, Theta, and the Outdoor Meditator",
    date: "Feb 27, 2026",
    preview:
      "7.83Hz is the Earth's resonant frequency. It's also the top of the theta band. We look at whether this is coincidence, correlation, or causation.",
    tags: ["Frequency", "Research"],
    readTime: "8 min",
  },
  {
    number: 6,
    title: "The Gym Bro Conversion Arc",
    date: "Feb 20, 2026",
    preview:
      "Three community members who came from performance backgrounds and found meditation through biometrics. Their protocols, their data, their PRs.",
    tags: ["Community", "HRV"],
    readTime: "10 min",
  },
  {
    number: 5,
    title: "Breathwork Is Not Meditation. Here's Why That Matters.",
    date: "Feb 13, 2026",
    preview:
      "Physiological distinction with practical implications. Box breathing and pranayama alter your state. TM changes your baseline. Understanding the difference changes your practice.",
    tags: ["Breathwork", "TM"],
    readTime: "7 min",
  },
  {
    number: 4,
    title: "The Grant Application We Filed for WMG",
    date: "Feb 6, 2026",
    preview:
      "We applied for arts and community journalism funding. We shared the full application. This week: what happened, what we learned, what we'd do differently.",
    tags: ["Building", "Community"],
    readTime: "6 min",
  },
  {
    number: 3,
    title: "Frequency Taxonomy: A Field Guide",
    date: "Jan 30, 2026",
    preview:
      "Delta, Theta, Alpha, Beta, Gamma. What each frequency range actually does neurologically, when to use it, and what the research supports.",
    tags: ["Frequency", "Research"],
    readTime: "12 min",
  },
  {
    number: 2,
    title: "Why We're Starting a Community Publication",
    date: "Jan 23, 2026",
    preview:
      "The wellness space is full of content. It's almost empty of community. This is why WMG exists and what we're trying to build.",
    tags: ["Community", "Building"],
    readTime: "5 min",
  },
  {
    number: 1,
    title: "Issue Zero: Before We Launched",
    date: "Jan 16, 2026",
    preview:
      "The founding note. What this is. What this isn't. Who it's for. Written before we had a single reader.",
    tags: ["Origin"],
    readTime: "4 min",
  },
];

const tagColors: Record<string, string> = {
  Gamma: "text-yellow-500",
  HRV: "text-green-500",
  TM: "text-blue-400",
  Frequency: "text-purple-400",
  Breathwork: "text-cyan-400",
  Personal: "text-orange-400",
  Research: "text-pink-400",
  Community: "text-emerald-400",
  Building: "text-amber-400",
  NM: "text-white",
  Event: "text-red-400",
  Practice: "text-teal-400",
  Origin: "text-[#888888]",
};

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Newsletter
        </p>
        <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-[-0.02em] max-w-3xl mb-6">
          Weekly reading.
          <br />
          <span className="text-[#888888]">No noise, no upsells.</span>
        </h1>
        <p className="text-[#888888] max-w-xl leading-relaxed">
          Science, practice notes, community updates, and the one or two reads
          actually worth your time each week. Published every Thursday morning.
        </p>
      </section>

      {/* ConvertKit signup embed */}
      <section className="border-y border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="max-w-xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
              Subscribe
            </p>
            <h2 className="text-xl font-light mb-6">
              Join 1,200+ practitioners who read WMG weekly.
            </h2>
            {/* ConvertKit embed placeholder */}
            <div className="border border-[#222222] p-6 bg-[#111111]">
              <form
                action="/api/subscribe"
                method="POST"
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 bg-[#0a0a0a] border border-[#333333] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#888888] placeholder:text-[#444444]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors whitespace-nowrap"
                >
                  Subscribe Free →
                </button>
              </form>
              <p className="text-[10px] text-[#444444] mt-3">
                No spam. Unsubscribe any time. Powered by ConvertKit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-2">
              Archive
            </p>
            <h2 className="text-2xl font-light">Past Issues</h2>
          </div>
          <p className="text-[10px] text-[#444444] hidden md:block">
            {issues.length} issues published
          </p>
        </div>

        <div className="divide-y divide-[#1a1a1a]">
          {issues.map((issue) => (
            <div
              key={issue.number}
              className="py-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group hover:bg-[#0d0d0d] -mx-4 px-4 transition-colors"
            >
              <div className="shrink-0 text-[#333333] text-xs font-mono w-8 pt-1">
                #{String(issue.number).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  {issue.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[9px] tracking-[0.2em] uppercase ${tagColors[tag] || "text-[#555555]"}`}
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-[9px] text-[#444444]">
                    {issue.date} · {issue.readTime}
                  </span>
                </div>
                <h3 className="text-sm font-light mb-2 group-hover:text-[#cccccc] transition-colors">
                  {issue.title}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed max-w-2xl">
                  {issue.preview}
                </p>
              </div>
              <div className="shrink-0">
                <span className="px-4 py-2 border border-[#333333] text-[#555555] text-[9px] tracking-[0.2em] uppercase cursor-not-allowed">
                  Archive
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#222222] py-16 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-sm font-light mb-1">You've read the archive.</p>
            <p className="text-[#888888] text-sm">Now get Thursday's issue in your inbox.</p>
          </div>
          <Link
            href="/newsletter"
            className="px-6 py-2.5 border border-white text-white text-xs tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all whitespace-nowrap"
            scroll={false}
          >
            Subscribe Above ↑
          </Link>
        </div>
      </section>
    </div>
  );
}
