import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Watering My Grass",
  description:
    "Grady O'Neill's story: from monk to meditation tech founder. The mission behind Watering My Grass.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          About
        </p>
        <h1 className="text-4xl md:text-6xl font-light leading-[1.05] tracking-[-0.02em] mb-8">
          Grady O&apos;Neill
        </h1>
        <p className="text-xl text-[#888888] font-light max-w-xl leading-relaxed">
          Founder, Watering My Grass. Builder, Non Magic. Former monk.
          Current gym rat. NYC.
        </p>
      </section>

      <div className="border-t border-[#222222]" />

      {/* Story */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
          {/* Sidebar */}
          <div className="space-y-6">
            <div>
              <p className="text-[9px] tracking-[0.25em] uppercase text-[#444444] mb-1">
                Based
              </p>
              <p className="text-sm text-[#888888]">New York City</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.25em] uppercase text-[#444444] mb-1">
                Background
              </p>
              <p className="text-sm text-[#888888]">Meditation, Technology, Athletics</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.25em] uppercase text-[#444444] mb-1">
                Building
              </p>
              <div className="space-y-1">
                <p className="text-sm text-[#888888]">Watering My Grass</p>
                <a
                  href="https://nonmagic.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#888888] hover:text-white transition-colors"
                >
                  Non Magic ↗
                </a>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-8 text-[#888888] leading-relaxed">
            <div>
              <h2 className="text-white text-lg font-light mb-4">The Monk Chapter</h2>
              <p>
                In 2024, I spent two months living as a monk. No phone. No talking during
                designated periods. 4am wake-ups. Cold water. Meditation for hours each day.
              </p>
              <p className="mt-4">
                I didn&apos;t go looking for spirituality. I went looking for data. I wanted to
                understand what was actually happening in my nervous system during deep practice
                — not the mythology around it, but the biology.
              </p>
              <p className="mt-4">
                What I found changed how I understood stress, attention, and recovery. And I
                realized almost nobody had access to what I experienced — not because it requires
                monk life, but because the tools and community didn&apos;t exist yet.
              </p>
            </div>

            <div>
              <h2 className="text-white text-lg font-light mb-4">The Performance Background</h2>
              <p>
                Before the monastery, I came up through competitive athletics. The gym was my
                first laboratory. HRV monitors before most people knew what HRV was. Cold
                exposure before it had an influencer attached to it.
              </p>
              <p className="mt-4">
                That mindset — optimize everything, trust data, ignore the woo — is what I
                brought to meditation. And it&apos;s the lens through which WMG is written.
              </p>
            </div>

            <div>
              <h2 className="text-white text-lg font-light mb-4">Why WMG Exists</h2>
              <p>
                Non Magic is the tool. Watering My Grass is the village.
              </p>
              <p className="mt-4">
                I kept meeting people — athletes, biohackers, skeptics, burnt-out professionals —
                who had found something real in their meditation practice and had nobody to talk to
                about it. Their gym friends thought it was soft. Their yoga friends wanted to burn
                sage. There was no community for people who wanted the science and the
                camaraderie without the performance.
              </p>
              <p className="mt-4">
                Everybody wants a village. No one wants to be a villager. WMG is an attempt to
                fix that.
              </p>
            </div>

            <div>
              <h2 className="text-white text-lg font-light mb-4">The Mission</h2>
              <p>
                WMG is a non-profit in positioning. Revenue comes from grants, sponsorships,
                and events — not paywalls. The articles are free. The science is cited. The
                community is open.
              </p>
              <p className="mt-4">
                We&apos;re NYC-based but globally accessible. The April 18 event is the first proof
                of concept: people in every timezone sitting down at 5am EST to do 20 minutes
                of 40Hz Gamma together.
              </p>
              <p className="mt-4">
                That&apos;s the village. Come water your grass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission pillars */}
      <section className="border-t border-[#222222] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-10">
            What We Are
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222222]">
            {[
              {
                title: "A Publication",
                body: "Long-form, evidence-based articles on frequency science, TM, breathwork, and HRV. Every claim cited. No woo.",
              },
              {
                title: "An Event Platform",
                body: "Global synchronized sessions and NYC in-person gatherings. The first is April 18. More to come.",
              },
              {
                title: "A Community",
                body: "For athletes, biohackers, skeptics, and seekers who found something real and want to go deeper together.",
              },
            ].map((p) => (
              <div key={p.title} className="bg-[#0a0a0a] p-8">
                <h3 className="text-white text-sm font-light mb-3">{p.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#222222] py-20">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-light mb-2">Join the April 18 session</h2>
            <p className="text-[#888888] text-sm">The first global WMG meditation. Free.</p>
          </div>
          <Link
            href="/april18"
            className="px-8 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors whitespace-nowrap"
          >
            Register Now →
          </Link>
        </div>
      </section>
    </div>
  );
}
