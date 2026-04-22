import type { Metadata } from "next";
import ContributorForm from "./ContributorForm";

export const metadata: Metadata = {
  title: "Contribute — Watering My Grass",
  description:
    "Write for WMG. Apply to contribute science-backed wellness content to a community that actually reads.",
};

const guidelines = [
  {
    heading: "Write from practice, not from theory",
    body: "WMG readers have their own practice. They can tell immediately when something is academic performance vs. lived experience. Ground your work in what you've actually done.",
  },
  {
    heading: "Cite the science",
    body: "We welcome strong personal perspective and strong empirical grounding. When you make a claim about the nervous system, back it with a study. Link it. We'll review it.",
  },
  {
    heading: "No wellness theater",
    body: "We don't publish: miracle claims, vague 'energy' language without definition, product placements disguised as editorial, or anything that requires you to capitalize Energy.",
  },
  {
    heading: "Respect the reader's intelligence",
    body: "WMG readers are biohackers, athletes, researchers, and curious practitioners. Write up to them. Don't explain what TM is if the piece is about its neurophysiology.",
  },
  {
    heading: "Length",
    body: "800–3,000 words. Long enough to do justice to the topic. Short enough to be read. We don't accept excerpts from books or repurposed SEO articles.",
  },
  {
    heading: "Format",
    body: "Submit as a Google Doc with comment access. Include a 1–2 sentence bio, a headshot or avatar, and 3–5 tags from our taxonomy (TM, Gamma, HRV, Breathwork, Frequency, Personal, Beginner, Analysis, Research, Community).",
  },
];

const formats = [
  {
    type: "Deep Dive",
    description: "2,000–3,000 words. Takes a specific scientific concept, practice, or dataset and goes all the way in.",
    examples: "The Tsai Lab 40Hz research. HRV data from a 30-day practice. Breathwork CO2 tolerance protocols.",
  },
  {
    type: "Personal Essay",
    description: "800–1,500 words. A specific experience, with specific detail, that illuminates something real about practice.",
    examples: "What happened to my sleep when I started daily meditation. Why I quit TM after 3 years. My first float tank.",
  },
  {
    type: "Research Analysis",
    description: "1,000–2,500 words. Takes a published study or body of research and makes it readable without dumbing it down.",
    examples: "Breaking down the MBSR meta-analysis. What the HRV biofeedback literature actually shows.",
  },
  {
    type: "Community Report",
    description: "500–1,200 words. Covers a WMG event, session, or community thread with journalistic rigor.",
    examples: "What happened at the April 18 global session. A month inside the WMG community feed.",
  },
];

export default function ContributorPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Contributor Program
        </p>
        <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-[-0.02em] max-w-3xl mb-6">
          Write for an audience
          <br />
          <span className="text-[#888888]">that actually practices.</span>
        </h1>
        <p className="text-[#888888] max-w-xl leading-relaxed">
          WMG is built by practitioners for practitioners. We're looking for writers
          who have skin in the game — researchers, athletes, meditators, and
          scientists who can translate complexity without losing it.
        </p>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: "12–15 min", label: "Avg. read time" },
            { stat: "40+", label: "Studies cited weekly" },
            { stat: "Free", label: "All content, always" },
            { stat: "Open", label: "Applications" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="text-xl md:text-2xl font-light mb-1">{stat}</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we publish */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-10">
          Formats We Publish
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#222222]">
          {formats.map((format) => (
            <div key={format.type} className="bg-[#0a0a0a] p-8">
              <h3 className="text-sm font-medium tracking-[0.05em] uppercase mb-3">
                {format.type}
              </h3>
              <p className="text-[#888888] text-sm leading-relaxed mb-4">
                {format.description}
              </p>
              <p className="text-[10px] tracking-[0.1em] uppercase text-[#444444]">
                e.g.
              </p>
              <p className="text-xs text-[#555555] mt-1 leading-relaxed">
                {format.examples}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial guidelines */}
      <section className="border-t border-[#222222] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-10">
            Editorial Guidelines
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {guidelines.map((item) => (
              <div key={item.heading}>
                <h3 className="text-sm font-medium mb-3">{item.heading}</h3>
                <p className="text-xs text-[#888888] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="border-t border-[#222222] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
              Apply to Contribute
            </p>
            <h2 className="text-2xl font-light mb-8">
              Tell us about your work.
            </h2>

            <ContributorForm />
          </div>
        </div>
      </section>

      {/* Compensation note */}
      <section className="border-t border-[#222222] py-16 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
              A note on compensation
            </p>
            <p className="text-[#888888] text-sm leading-relaxed mb-4">
              WMG is currently bootstrapped and pre-revenue. We cannot pay contributors
              at this stage. What we can offer: editorial development, a genuine audience
              that reads deeply, and a permanent byline in a publication built to last.
            </p>
            <p className="text-[#888888] text-sm leading-relaxed">
              As we grow, contributor compensation is a priority. Contributors who
              build with us now will be first in line when that changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
