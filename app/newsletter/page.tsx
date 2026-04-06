"use client";

import { useState } from "react";
import Link from "next/link";

const issues = [
  {
    number: 12,
    title: "What April 18 Is Actually About",
    date: "Apr 3, 2026",
    preview:
      "It's not a concert. It's not a wellness event. It's a coordinated global meditation session built on 40Hz gamma technology. Here's the full picture.",
    tags: ["Event", "Gamma", "Community"],
    readTime: "6 min",
    highlight: "500+ people registered in 72 hours",
  },
  {
    number: 11,
    title: "The MIT Study Everyone Got Wrong",
    date: "Mar 27, 2026",
    preview:
      "The Tsai Lab 40Hz paper got picked up by every health publication and almost all of them misread it. We go through the methodology line by line.",
    tags: ["Research", "Gamma"],
    readTime: "9 min",
    highlight: null,
  },
  {
    number: 10,
    title: "HRV: Your Practice in Numbers",
    date: "Mar 20, 2026",
    preview:
      "Heart rate variability tells you what self-report can't. This week: how to measure it, what the numbers mean, and why most meditation apps get it wrong.",
    tags: ["HRV", "Practice"],
    readTime: "8 min",
    highlight: null,
  },
  {
    number: 9,
    title: "Notes from 60 Days of Silence",
    date: "Mar 13, 2026",
    preview:
      "Grady came back from the monastery. This week he writes about what happened to his nervous system and why he left before the program ended.",
    tags: ["Personal", "TM"],
    readTime: "11 min",
    highlight: "Most opened issue in WMG history",
  },
  {
    number: 8,
    title: "Building in Public: The Non Magic Stack",
    date: "Mar 6, 2026",
    preview:
      "We made the app free. Here's what that decision cost us, what we got in return, and what our unit economics actually look like.",
    tags: ["NM", "Building"],
    readTime: "7 min",
    highlight: null,
  },
  {
    number: 7,
    title: "Schumann, Theta, and the Outdoor Meditator",
    date: "Feb 27, 2026",
    preview:
      "7.83Hz is the Earth's resonant frequency. It's also the top of the theta band. We look at whether this is coincidence, correlation, or causation.",
    tags: ["Frequency", "Research"],
    readTime: "8 min",
    highlight: null,
  },
  {
    number: 6,
    title: "The Gym Bro Conversion Arc",
    date: "Feb 20, 2026",
    preview:
      "Three community members who came from performance backgrounds and found meditation through biometrics. Their protocols, their data, their PRs.",
    tags: ["Community", "HRV"],
    readTime: "10 min",
    highlight: null,
  },
  {
    number: 5,
    title: "Breathwork Is Not Meditation. Here's Why That Matters.",
    date: "Feb 13, 2026",
    preview:
      "Physiological distinction with practical implications. Box breathing and pranayama alter your state. TM changes your baseline. Understanding the difference changes your practice.",
    tags: ["Breathwork", "TM"],
    readTime: "7 min",
    highlight: null,
  },
  {
    number: 4,
    title: "The Grant Application We Filed for WMG",
    date: "Feb 6, 2026",
    preview:
      "We applied for arts and community journalism funding. We shared the full application. This week: what happened, what we learned, what we'd do differently.",
    tags: ["Building", "Community"],
    readTime: "6 min",
    highlight: null,
  },
  {
    number: 3,
    title: "Frequency Taxonomy: A Field Guide",
    date: "Jan 30, 2026",
    preview:
      "Delta, Theta, Alpha, Beta, Gamma. What each frequency range actually does neurologically, when to use it, and what the research supports.",
    tags: ["Frequency", "Research"],
    readTime: "12 min",
    highlight: null,
  },
  {
    number: 2,
    title: "Why We're Starting a Community Publication",
    date: "Jan 23, 2026",
    preview:
      "The wellness space is full of content. It's almost empty of community. This is why WMG exists and what we're trying to build.",
    tags: ["Community", "Building"],
    readTime: "5 min",
    highlight: null,
  },
  {
    number: 1,
    title: "Issue Zero: Before We Launched",
    date: "Jan 16, 2026",
    preview:
      "The founding note. What this is. What this isn't. Who it's for. Written before we had a single reader.",
    tags: ["Origin"],
    readTime: "4 min",
    highlight: null,
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

const whatToExpect = [
  {
    label: "1 Deep Dive",
    description: "One long-form article on frequency science, TM research, HRV, or the intersection of performance and consciousness.",
  },
  {
    label: "1 Science Note",
    description: "A single research finding, explained in plain language. No overstatement. Just what the study actually shows.",
  },
  {
    label: "1 Community Spotlight",
    description: "Someone in the community doing something worth knowing about. A protocol. A result. A story.",
  },
  {
    label: "1 NYC Event",
    description: "One thing worth showing up for in New York. Or attending remotely if you're not here.",
  },
];

const activeTags = ["All", "Research", "Gamma", "HRV", "TM", "Community", "Frequency", "Personal", "Building"];

export default function NewsletterPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filtered = activeTag === "All"
    ? issues
    : issues.filter((i) => i.tags.includes(activeTag));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Newsletter
        </p>
        <h1 className="text-4xl md:text-7xl font-light leading-[1.0] tracking-[-0.03em] max-w-3xl mb-6">
          Weekly reading.
          <br />
          <span className="text-[#888888]">No noise. No upsells.</span>
        </h1>
        <p className="text-[#888888] text-lg font-light max-w-xl leading-relaxed">
          Science, practice notes, community updates, and the one or two reads actually worth your time. Published every Thursday morning. Free.
        </p>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a]">
            {[
              { value: "1,200+", label: "Subscribers" },
              { value: issues.length.toString(), label: "Issues Published" },
              { value: "Every Thu", label: "Publish Schedule" },
              { value: "Free", label: "Always" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0d0d0d] p-6">
                <p className="text-2xl font-light mb-1">{stat.value}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#444444]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* What to expect */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
              What You Get
            </p>
            <h2 className="text-2xl font-light mb-6">Every Thursday. Four things.</h2>
            <div className="space-y-px">
              {whatToExpect.map((item) => (
                <div key={item.label} className="bg-[#0d0d0d] border border-[#1a1a1a] p-5">
                  <p className="text-sm font-light text-white mb-1">{item.label}</p>
                  <p className="text-xs text-[#555555] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Signup form */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
              Subscribe
            </p>
            <h2 className="text-2xl font-light mb-6">
              Join 1,200+ practitioners.
            </h2>

            {submitted ? (
              <div className="border border-[#333333] p-8">
                <p className="text-sm font-light mb-2">You&apos;re in.</p>
                <p className="text-[#555555] text-sm leading-relaxed">
                  Expect the first issue this Thursday. Check your spam folder once — then it&apos;ll always land in your inbox.
                </p>
                <div className="mt-6 pt-6 border-t border-[#222222]">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-3">
                    While you wait
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link href="/science" className="text-xs text-[#555555] hover:text-white transition-colors">
                      Browse the Frequency Science Library →
                    </Link>
                    <Link href="/tm-course" className="text-xs text-[#555555] hover:text-white transition-colors">
                      Start the 8-Day TM Course →
                    </Link>
                    <Link href="/community/events" className="text-xs text-[#555555] hover:text-white transition-colors">
                      See NYC Events →
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="border border-[#222222] p-6 bg-[#0d0d0d]">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-[#444444] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-[#0a0a0a] border border-[#333333] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#888888] placeholder:text-[#444444]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors"
                  >
                    Subscribe Free →
                  </button>
                  <p className="text-[9px] text-[#333333]">
                    No spam. Unsubscribe any time. Powered by ConvertKit.
                  </p>
                </form>

                {/* Social proof */}
                <div className="mt-6 pt-6 border-t border-[#1a1a1a]">
                  <p className="text-[9px] tracking-[0.15em] uppercase text-[#444444] mb-3">
                    Recent readers say
                  </p>
                  <blockquote className="text-xs text-[#555555] leading-relaxed border-l-2 border-[#2a2a2a] pl-3">
                    &quot;The only wellness newsletter that doesn&apos;t treat me like an idiot. Cites everything. No manifestation BS.&quot;
                  </blockquote>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="border-t border-[#222222] max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-2">
              Archive
            </p>
            <h2 className="text-2xl font-light">Past Issues</h2>
          </div>
          <p className="text-[10px] text-[#444444] hidden md:block">
            {issues.length} issues · {issues.reduce((acc, i) => acc + parseInt(i.readTime), 0)} min total reading
          </p>
        </div>

        {/* Tag filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {activeTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 text-[9px] tracking-[0.2em] uppercase border transition-colors ${
                activeTag === tag
                  ? "border-white text-white"
                  : "border-[#222222] text-[#444444] hover:border-[#333333] hover:text-[#666666]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="divide-y divide-[#1a1a1a]">
          {filtered.map((issue) => (
            <div
              key={issue.number}
              className="py-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group hover:bg-[#0d0d0d] -mx-4 px-4 transition-colors"
            >
              {/* Issue number */}
              <div className="shrink-0 text-[#2a2a2a] text-xs font-mono w-8 pt-0.5">
                #{String(issue.number).padStart(2, "0")}
              </div>

              {/* Content */}
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
                  <span className="text-[9px] text-[#333333]">
                    {issue.date} · {issue.readTime}
                  </span>
                </div>
                <h3 className="text-sm font-light mb-2 group-hover:text-[#cccccc] transition-colors leading-snug">
                  {issue.title}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed max-w-2xl">
                  {issue.preview}
                </p>
                {issue.highlight && (
                  <p className="text-[9px] text-[#444444] mt-2 italic">
                    ↳ {issue.highlight}
                  </p>
                )}
              </div>

              {/* Read CTA */}
              <div className="shrink-0">
                <span className="px-4 py-2 border border-[#1a1a1a] text-[#333333] text-[9px] tracking-[0.2em] uppercase cursor-not-allowed">
                  Archive
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#444444] text-sm">No issues with tag &quot;{activeTag}&quot; yet.</p>
            <button
              onClick={() => setActiveTag("All")}
              className="mt-3 text-[10px] tracking-[0.2em] uppercase text-[#555555] hover:text-white transition-colors"
            >
              Show all issues →
            </button>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#222222] py-16 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-sm font-light mb-1">You&apos;ve read the archive.</p>
            <p className="text-[#888888] text-sm">Now get Thursday&apos;s issue in your inbox.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="px-6 py-2.5 border border-white text-white text-xs tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all whitespace-nowrap"
            >
              Subscribe Above ↑
            </Link>
            <Link
              href="/science"
              className="px-6 py-2.5 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-all whitespace-nowrap"
            >
              Science Library →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
