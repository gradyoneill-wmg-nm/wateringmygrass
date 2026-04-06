import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Characters — Watering My Grass",
  description:
    "Meet the cast: Rat, Rockbird, and Cockroach. The brand characters behind Non Magic and Watering My Grass — drawn in Tom & Jerry style.",
};

const characters = [
  {
    id: "rat",
    emoji: "🐀",
    name: "Rat",
    title: "The Hippie Guru",
    role: "Non Magic CTO · WMG Founder",
    color: "#c8a96e",
    personality: [
      "Former monk, current gym rat.",
      "Believes in the data. Trusts the silence.",
      "Will cite the paper. Will also do the cold plunge.",
      "Talks about HRV like most people talk about weather.",
      "Has a 4am alarm he actually likes.",
    ],
    description:
      "Rat is the bridge between ancient practice and modern science. He spent two months in a monastery not because he was lost, but because he wanted to understand what was happening at the cellular level during deep meditation. He came back with answers — and a product idea. Scruffy, wiry, always barefoot when possible. Wears the same black hoodie every day. The kind of character who will hand you a research paper and a pair of headphones at the same time.",
    originStory:
      "Rat didn't choose the spiritual life — the data led him there. After years of HRV tracking and cold exposure and obsessing over recovery metrics, he hit a wall. The numbers kept improving but something felt missing. A friend mentioned a monastery upstate that let outsiders in for two months. He packed a notebook and his Oura ring. He came back a different rat — quieter, more precise, with a full product spec for what would become Non Magic. The monastery didn't convert him. It confirmed his hypothesis.",
    tomAndJerry:
      "In the cartoon, Rat is always the one with a plan. Not a perfect plan — a highly annotated plan with footnotes. He's drawn slightly disheveled, enormous ears always tuned to something no one else hears. He moves in bursts: still for long stretches, then suddenly everywhere at once. When he speaks, a little thought bubble appears above his head with a frequency waveform in it. He loses his temper exactly once per episode, always at a bureaucrat or a wellness grifter, never at the people he's building for.",
    avatarLabel: "RAT · ANIMATED AVATAR",
  },
  {
    id: "rockbird",
    emoji: "🐦",
    name: "Rockbird",
    title: "The Over-Optimizer",
    role: "WMG Editorial · Head of Too Much",
    color: "#6e9ec8",
    personality: [
      "Has a spreadsheet for his spreadsheets.",
      "Runs 14 browser tabs minimum at all times.",
      "Completes the task before the task is fully explained.",
      "Uses the word 'optimize' as a verb, noun, and adjective.",
      "Finishes sentences. Yours and his.",
    ],
    description:
      "Rockbird is the kind of bird who migrates on a Gantt chart. He is constitutionally incapable of under-engineering anything. Ask him to write a headline and he will deliver a headline, three alternatives, a readability score, keyword density analysis, and a note about A/B testing. He means well. He is always right. He is also exhausting in the most loveable way. He's the reason WMG's articles are actually good — and the reason the editorial process takes slightly longer than anyone planned.",
    originStory:
      "Rockbird started out as a regular bird doing regular bird things: eating seeds, flying south, ignoring most emails. Then one winter he discovered productivity content. It started with one YouTube video about morning routines. Then a course on deep work. Then he built a custom Notion system to track his seed intake by macro. By spring he had automated 40% of his migration, was sleeping 6% more efficiently, and had completely lost the ability to sit still. He found WMG through a Rat article about HRV. He emailed asking if there was an opening. The email had a subject line, a table of contents, and an executive summary.",
    tomAndJerry:
      "Rockbird is drawn like a Road Runner cousin who took up journaling. Long neck, small head, enormous eyes that dart between screens. He's almost always shown mid-motion — mid-take, mid-type, mid-sprint down a corridor with papers flying behind him. His cartoon superpower is speed, which is also his cartoon problem. He routinely solves the wrong problem perfectly. There's always a moment per episode where he stops, recalculates, and charges at something completely new with the exact same energy. The laugh track loves him.",
    avatarLabel: "ROCKBIRD · ANIMATED AVATAR",
  },
  {
    id: "cockroach",
    emoji: "🪳",
    name: "Cockroach",
    title: "The Company",
    role: "Non Magic · Institutional Character",
    color: "#888888",
    personality: [
      "Survives everything.",
      "Arrived before you. Will be here after.",
      "Doesn't explain itself.",
      "Has been in the walls the whole time.",
      "The science is real. The cockroach is the proof.",
    ],
    description:
      "Cockroach is not a person. Cockroach is a force. It represents Non Magic the company — the institution, the infrastructure, the thing that keeps running when everything else goes sideways. Cockroaches have been on this planet for 350 million years. They survived the extinction event that killed the dinosaurs. They don't optimize. They don't pivot. They endure. That's the company. That's the mission. The frequency science will outlast the hype cycle. The cockroach is the mascot of the long game.",
    originStory:
      "Cockroach didn't have an origin story. That's the point. It was always there. In the walls of every monastery Rat visited. In the floor of every gym. In the server room. When Grady decided that Non Magic needed a mascot that captured the company's actual nature — not aspirational, not inspirational, just ruthlessly persistent — he went with the oldest survivor on the planet. The cursor effect on the homepage is the reveal: hover over the face, and under the graphic is the cockroach. The company is the cockroach. The cockroach is the company. It pre-dates the funding round.",
    tomAndJerry:
      "Cockroach is the straight man. Always in the corner of the frame, watching. It never runs — it walks with unsettling calm. While Rat schemes and Rockbird sprints, Cockroach is already on the other side of the room, having taken a route no one planned. Its cartoon expressions are minimal: one raised antenna for skepticism, two raised antennae for mild approval. It never loses. It never wins dramatically. It just continues. The most unsettling moment in any episode is when Cockroach laughs — a slow, knowing, six-legged shrug that implies it saw this coming three seasons ago.",
    avatarLabel: "COCKROACH · ANIMATED AVATAR",
  },
];

export default function AnimationPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Brand Characters
        </p>
        <h1 className="text-4xl md:text-6xl font-light leading-[1.05] tracking-[-0.02em] mb-8">
          The Cast
        </h1>
        <p className="text-xl text-[#888888] font-light max-w-xl leading-relaxed">
          Three characters. One world. Drawn in the Tom &amp; Jerry tradition —
          broad archetypes, sharp edges, built for the long run.
        </p>
      </section>

      <div className="border-t border-[#222222]" />

      {/* Style note */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-[#111111] border border-[#222222] p-8">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#444444] mb-4">
            Animation Style
          </p>
          <p className="text-[#888888] leading-relaxed text-sm max-w-2xl">
            All three characters are rendered in hand-drawn, cel-shaded style —
            thick black outlines, limited color palette, exaggerated proportions.
            Think Tom &amp; Jerry meets early-era Cartoon Network: elastic physics,
            expressive silhouettes, readable from a thumbnail. Characters are built
            for both static illustration and looping animation. No 3D. No gradients.
            Black, white, one accent color per character.
          </p>
        </div>
      </section>

      {/* Characters */}
      <section className="max-w-4xl mx-auto px-6 pb-20 space-y-0">
        {characters.map((char, index) => (
          <div key={char.id}>
            <div className="py-20 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12">
              {/* Avatar placeholder */}
              <div className="space-y-4">
                <div
                  className="aspect-square border border-[#222222] flex flex-col items-center justify-center relative overflow-hidden"
                  style={{ background: "#111111" }}
                >
                  {/* Animated placeholder */}
                  <div
                    className="text-8xl mb-4 select-none"
                    style={{ filter: "grayscale(0.3)" }}
                  >
                    {char.emoji}
                  </div>
                  <p
                    className="text-[9px] tracking-[0.3em] uppercase absolute bottom-4 left-0 right-0 text-center"
                    style={{ color: "#333333" }}
                  >
                    {char.avatarLabel}
                  </p>
                  {/* Corner accent */}
                  <div
                    className="absolute top-0 left-0 w-8 h-8 border-t border-l"
                    style={{ borderColor: char.color, opacity: 0.4 }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-8 h-8 border-b border-r"
                    style={{ borderColor: char.color, opacity: 0.4 }}
                  />
                </div>
                {/* Personality traits */}
                <div className="border border-[#222222] p-4 space-y-2">
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#444444] mb-3">
                    Personality
                  </p>
                  {char.personality.map((trait) => (
                    <p key={trait} className="text-[#666666] text-xs leading-relaxed">
                      — {trait}
                    </p>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <p
                    className="text-[10px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: char.color }}
                  >
                    {char.role}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-light tracking-[-0.01em] mb-1">
                    {char.name}
                  </h2>
                  <p className="text-[#555555] text-sm">{char.title}</p>
                </div>

                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#444444] mb-3">
                    Character
                  </p>
                  <p className="text-[#888888] leading-relaxed text-sm">
                    {char.description}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#444444] mb-3">
                    Origin Story
                  </p>
                  <p className="text-[#888888] leading-relaxed text-sm">
                    {char.originStory}
                  </p>
                </div>

                <div className="border-l-2 pl-6" style={{ borderColor: char.color + "33" }}>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#444444] mb-3">
                    In the Cartoon
                  </p>
                  <p className="text-[#666666] leading-relaxed text-sm italic">
                    {char.tomAndJerry}
                  </p>
                </div>
              </div>
            </div>

            {index < characters.length - 1 && (
              <div className="border-t border-[#1a1a1a]" />
            )}
          </div>
        ))}
      </section>

      {/* Production note */}
      <section className="border-t border-[#222222] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
                Animation Brief
              </p>
              <div className="space-y-4 text-sm text-[#666666] leading-relaxed">
                <p>
                  These characters are placeholders for commissioned animation assets.
                  Each should be delivered as a looping sprite (120×120px minimum)
                  and a full-body illustration (SVG or PNG, transparent background).
                </p>
                <p>
                  Style references: Tom &amp; Jerry (1940–1958), early Looney Tunes,
                  Cartoon Network original shorts. No anime influence. No 3D. No
                  gradient fills.
                </p>
                <p>
                  Each character should be legible at 32px and expressive at 512px.
                  The homepage cursor reveal uses Cockroach — that asset is priority one.
                </p>
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
                Delivery Specs
              </p>
              <div className="space-y-3">
                {[
                  { label: "Sprite (looping idle)", spec: "120×120px · WebP · 60fps · transparent" },
                  { label: "Full body illustration", spec: "SVG · transparent · layered" },
                  { label: "Thumbnail / favicon", spec: "32×32px · PNG · flat" },
                  { label: "OG image variant", spec: "1200×630px · all three characters" },
                  { label: "Homepage cursor asset", spec: "Cockroach only · F1-style reveal" },
                ].map((item) => (
                  <div key={item.label} className="border border-[#1a1a1a] p-4">
                    <p className="text-xs text-white font-light mb-1">{item.label}</p>
                    <p className="text-[10px] text-[#444444] tracking-wide">{item.spec}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#222222] py-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-xl font-light mb-2">Join the April 18 session</h2>
            <p className="text-[#888888] text-sm">
              The characters are coming. The session is already real.
            </p>
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
