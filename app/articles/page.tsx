import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles — Watering My Grass",
  description:
    "Long-form science articles on transcendental meditation, frequency science, HRV, breathwork, and the neuroscience of practice.",
};

const articles = [
  {
    slug: "what-is-transcendental-meditation",
    tag: "TM",
    title: "What is Transcendental Meditation? The Science Behind the Practice",
    excerpt:
      "TM isn't mysticism. It's a reproducible neurological state with decades of peer-reviewed research behind it. Here's what's actually happening in your brain.",
    readTime: "8 min",
    author: "Grady O'Neill",
    date: "Apr 6, 2026",
    status: "available",
  },
  {
    slug: "40hz-gamma-mit-research",
    tag: "Gamma",
    title: "40Hz Gamma: Why MIT Researchers Think This Frequency Could Change Everything",
    excerpt:
      "MIT's Tsai Lab found that 40Hz stimulation reduces amyloid plaques in Alzheimer's mice by 40-50%. The implications extend well beyond neurodegeneration.",
    readTime: "10 min",
    author: "Grady O'Neill",
    date: "Apr 8, 2026",
    status: "available",
  },
  {
    slug: "i-was-a-monk",
    tag: "Personal",
    title: "I Was a Monk for 2 Months. Here's What I Learned About Your Nervous System",
    excerpt:
      "No phone. No talking. 4am wake-ups. What two months of structured monastic practice taught me about stress physiology, HRV, and why your nervous system needs more than a 10-minute app.",
    readTime: "12 min",
    author: "Grady O'Neill",
    date: "Apr 12, 2026",
    status: "available",
  },
  {
    slug: "gym-bro-guide-to-meditation",
    tag: "Beginner",
    title: "The Gym Bro's Guide to Meditation",
    excerpt:
      "You PR your bench. You track your macros. You monitor your sleep. Why aren't you training your nervous system? A performance-first introduction to what meditation actually does.",
    readTime: "7 min",
    author: "Grady O'Neill",
    date: "Apr 7, 2026",
    status: "available",
  },
  {
    slug: "hrv-the-only-metric-that-matters",
    tag: "HRV",
    title: "Heart Rate Variability: The Only Meditation Metric That Matters",
    excerpt:
      "Forget self-report. Forget how relaxed you felt. HRV tells you exactly how your meditation practice is affecting your autonomic nervous system. Here's how to read it.",
    readTime: "9 min",
    author: "Grady O'Neill",
    date: "Apr 9, 2026",
    status: "coming",
  },
  {
    slug: "schumann-resonance",
    tag: "Frequency",
    title: "The Schumann Resonance: Earth's Heartbeat and Your Brain",
    excerpt:
      "7.83Hz. The Earth's fundamental electromagnetic frequency. And it might be why some people report deeper meditation in natural environments. The science is stranger than you'd expect.",
    readTime: "8 min",
    author: "Grady O'Neill",
    date: "Apr 10, 2026",
    status: "coming",
  },
  {
    slug: "why-calm-doesnt-work",
    tag: "Analysis",
    title: "Why Calm Doesn't Work (And What Does)",
    excerpt:
      "78% of Calm subscribers quit within 90 days. Here's why passive guided meditation fails at behavior change — and what the neuroscience says about what actually creates lasting practice.",
    readTime: "11 min",
    author: "Grady O'Neill",
    date: "Apr 11, 2026",
    status: "coming",
  },
  {
    slug: "breathwork-protocols",
    tag: "Breathwork",
    title: "Breathwork Protocols: A Practitioner's Guide",
    excerpt:
      "Box breathing, Wim Hof, 4-7-8, cyclic sighing. Not all protocols are equal. Here's what each one actually does to your autonomic nervous system and when to use which.",
    readTime: "14 min",
    author: "Grady O'Neill",
    date: "Apr 13, 2026",
    status: "coming",
  },
];

const tags = ["All", "TM", "Gamma", "HRV", "Frequency", "Breathwork", "Personal", "Beginner", "Analysis"];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Reading
        </p>
        <h1 className="text-4xl md:text-6xl font-light leading-[1.05] tracking-[-0.02em] mb-6">
          Articles
        </h1>
        <p className="text-[#888888] text-lg font-light max-w-xl">
          Evidence-based writing on meditation, frequency science, and human performance.
          Every claim cited. No woo.
        </p>
      </section>

      {/* Tags filter */}
      <div className="border-y border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-none">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 whitespace-nowrap transition-colors font-space-mono ${
                tag === "All"
                  ? "bg-[#F5841F] text-black"
                  : "border border-[#333333] text-[#666666] hover:border-[#F5841F]/50 hover:text-[#F5841F]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Articles list */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="divide-y divide-[#1a1a1a]">
          {articles.map((article) => (
            <article key={article.slug} className="py-8 group">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                {/* Meta */}
                <div className="md:w-40 flex-shrink-0 flex md:flex-col gap-3 md:gap-2">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-[#F5841F] border border-[#F5841F]/30 px-2 py-0.5 self-start">
                    {article.tag}
                  </span>
                  <span className="text-[9px] text-[#444444] md:mt-1 font-space-mono">{article.date}</span>
                  <span className="text-[9px] text-[#444444] font-space-mono">{article.readTime} read</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-base md:text-lg font-light leading-snug mb-2 group-hover:text-[#cccccc] transition-colors cursor-pointer">
                    {article.title}
                  </h2>
                  <p className="text-[#666666] text-sm leading-relaxed mb-3">
                    {article.excerpt}
                  </p>
                  <p className="text-[9px] tracking-[0.15em] uppercase text-[#444444]">
                    By {article.author}
                  </p>
                </div>

                {/* Status / CTA */}
                <div className="md:w-28 flex-shrink-0 flex md:justify-end">
                  {article.status === "available" ? (
                    <Link
                      href={`/articles/${article.slug}`}
                      className="text-[9px] tracking-[0.2em] uppercase text-[#888888] hover:text-white transition-colors"
                    >
                      Read →
                    </Link>
                  ) : (
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#444444]">
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contributor CTA */}
      <section className="border-t border-[#222222] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
              Contribute
            </p>
            <h2 className="text-2xl font-light mb-3">Write for WMG</h2>
            <p className="text-[#888888] text-sm leading-relaxed mb-6">
              WMG is a contributor platform. If you research, practice, or work in frequency
              science, meditation, breathwork, or related fields — we want to publish you.
              Editorial guidelines apply. Grady curates.
            </p>
            <button className="px-8 py-3 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors">
              Contributor Program — Coming Soon
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
