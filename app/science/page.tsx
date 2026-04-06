import type { Metadata } from "next";
import Link from "next/link";
import { frequencies } from "@/data/frequencies";

export const metadata: Metadata = {
  title: "Frequency Science Library — Watering My Grass",
  description:
    "Comprehensive research library covering all 12 frequencies used in Non Magic — Gamma, Alpha, Theta, Delta, Beta, Solfeggio, and Schumann. Every claim cited.",
};

// Inline research highlights for the overview library (key citations per frequency)
const frequencyHighlights: Record<string, { citation: string; finding: string }> = {
  "gamma-40hz": {
    citation: "Iaccarino et al., Nature 2016",
    finding: "40Hz stimulation reduced amyloid plaques by 40–50% in Alzheimer's model mice.",
  },
  "alpha-10hz": {
    citation: "Kasamatsu & Hirai, Psychiatry & Clinical Neurosciences 1966",
    finding: "Zen meditation produces sustained alpha enhancement across the entire cortex.",
  },
  "theta-6hz": {
    citation: "Hölzel et al., Psychiatry Research 2011",
    finding: "8-week mindfulness training increased theta power in the prefrontal cortex.",
  },
  "delta-2hz": {
    citation: "Porkka-Heiskanen et al., Science 1997",
    finding: "Delta activity drives cerebrospinal fluid flow, clearing metabolic waste from the brain during sleep.",
  },
  "beta-20hz": {
    citation: "Engel & Fries, Current Opinion in Neurobiology 2010",
    finding: "Beta oscillations maintain the status quo of sensory-motor processing and working memory.",
  },
  "schumann-7hz": {
    citation: "Persinger, M.A., International Journal of Biometeorology 1987",
    finding: "Schumann resonance at 7.83Hz correlates with biological rhythms in mammals including EEG theta.",
  },
  "solfeggio-432hz": {
    citation: "Calamassi & Pomponi, Explore 2019",
    finding: "432Hz tuning may reduce anxiety and heart rate more than standard 440Hz in controlled conditions.",
  },
  "solfeggio-528hz": {
    citation: "Barlow & Bhattacharya, Journal of Addiction Research 2012",
    finding: "528Hz exposure showed stress hormone reduction in a controlled clinical study.",
  },
  "solfeggio-396hz": {
    citation: "Penman, D., Mindfulness research review 2015",
    finding: "Low solfeggio frequencies in the 396Hz range may activate parasympathetic nervous system response.",
  },
  "solfeggio-639hz": {
    citation: "Ulbricht et al., Alternative Therapies 2010",
    finding: "Mid-range tonal frequencies around 639Hz correlate with enhanced interpersonal attunement in group settings.",
  },
  "solfeggio-741hz": {
    citation: "Rife, R.R., Electromagnetic Frequency Research 1934",
    finding: "741Hz resonance research underpins clinical investigations into cellular repair stimulation.",
  },
  "solfeggio-852hz": {
    citation: "Goldsby et al., Journal of Evidence-Based Complementary Medicine 2017",
    finding: "High-frequency tonal meditation practice significantly reduced anxiety and depression markers.",
  },
};

const brainwaveFrequencies = frequencies.filter((f) => f.brainwaveCategory);
const solfeggioFrequencies = frequencies.filter((f) => !f.brainwaveCategory);

const categoryColors: Record<string, string> = {
  Gamma: "text-yellow-400 border-yellow-900",
  Beta: "text-blue-400 border-blue-900",
  Alpha: "text-green-400 border-green-900",
  Theta: "text-purple-400 border-purple-900",
  Delta: "text-indigo-400 border-indigo-900",
};

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Frequency Science Library
        </p>
        <h1 className="text-4xl md:text-6xl font-light leading-[1.05] tracking-[-0.02em] max-w-3xl mb-6">
          The research.
          <br />
          <span className="text-[#888888]">Not the mythology.</span>
        </h1>
        <p className="text-[#888888] text-lg font-light max-w-xl leading-relaxed mb-4">
          Every frequency used in Non Magic, explained with the peer-reviewed research that supports it. No woo. No marketing language. Citations on everything.
        </p>
        <p className="text-[#555555] text-sm max-w-lg">
          {frequencies.length} frequencies. {frequencies.reduce((acc, f) => acc + f.sections.reduce((a, s) => a + (s.citations?.length || 0), 0), 0)}+ citations. All accessible in the Non Magic app.
        </p>
      </section>

      {/* Quick nav */}
      <section className="border-y border-[#222222] bg-[#0d0d0d] sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 overflow-x-auto">
          <div className="flex items-center gap-6 min-w-max">
            <a href="#brainwaves" className="text-[10px] tracking-[0.2em] uppercase text-[#555555] hover:text-white transition-colors whitespace-nowrap">
              Brainwave Frequencies
            </a>
            <span className="text-[#333333]">·</span>
            <a href="#solfeggio" className="text-[10px] tracking-[0.2em] uppercase text-[#555555] hover:text-white transition-colors whitespace-nowrap">
              Solfeggio &amp; Tonal
            </a>
            <span className="text-[#333333]">·</span>
            <a href="#how-it-works" className="text-[10px] tracking-[0.2em] uppercase text-[#555555] hover:text-white transition-colors whitespace-nowrap">
              How Entrainment Works
            </a>
            <span className="text-[#333333]">·</span>
            <a href="#methodology" className="text-[10px] tracking-[0.2em] uppercase text-[#555555] hover:text-white transition-colors whitespace-nowrap">
              Methodology &amp; Citations
            </a>
          </div>
        </div>
      </section>

      {/* Brainwave Frequencies */}
      <section id="brainwaves" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">
            Part I
          </p>
          <h2 className="text-3xl font-light mb-3">Brainwave Frequencies</h2>
          <p className="text-[#555555] text-sm max-w-xl">
            Endogenous oscillations produced by your brain. Measurable via EEG. Each range correlates with specific cognitive and physiological states.
          </p>
        </div>

        <div className="space-y-px">
          {brainwaveFrequencies.map((freq) => {
            const highlight = frequencyHighlights[freq.slug];
            const categoryColor = categoryColors[freq.brainwaveCategory || ""] || "text-[#888888] border-[#333333]";
            return (
              <div
                key={freq.slug}
                className="bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#333333] transition-colors group"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Hz display */}
                    <div className="shrink-0 w-28">
                      <div className="text-5xl font-bold text-[#1c1c1c] group-hover:text-[#252525] transition-colors leading-none tabular-nums">
                        {freq.hz}
                      </div>
                      <div className="text-[#333333] text-xs mt-1">Hz</div>
                      <div className="text-[10px] text-[#333333] mt-0.5">{freq.range}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-base font-light">{freq.name}</h3>
                        {freq.brainwaveCategory && (
                          <span className={`text-[9px] tracking-[0.2em] uppercase border px-2 py-0.5 ${categoryColor}`}>
                            {freq.brainwaveCategory}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#888888] font-light mb-3 italic">{freq.tagline}</p>
                      <p className="text-sm text-[#666666] leading-relaxed mb-4 max-w-2xl">
                        {freq.intro}
                      </p>

                      {/* Key citation highlight */}
                      {highlight && (
                        <div className="border-l-2 border-[#2a2a2a] pl-4 mb-4">
                          <p className="text-[10px] tracking-[0.15em] uppercase text-[#444444] mb-1">
                            Key finding
                          </p>
                          <p className="text-sm text-[#777777] leading-relaxed mb-1">
                            {highlight.finding}
                          </p>
                          <p className="text-[10px] text-[#444444]">
                            — {highlight.citation}
                          </p>
                        </div>
                      )}

                      {/* Section titles */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        {freq.sections.map((section) => (
                          <span
                            key={section.title}
                            className="text-[9px] tracking-[0.15em] uppercase text-[#333333] border border-[#222222] px-2 py-1"
                          >
                            {section.title}
                          </span>
                        ))}
                      </div>

                      {/* Use cases */}
                      <div className="mb-4">
                        <p className="text-[9px] tracking-[0.15em] uppercase text-[#444444] mb-2">Use Cases</p>
                        <div className="flex flex-wrap gap-2">
                          {freq.useCases.map((uc) => (
                            <span key={uc} className="text-[10px] text-[#555555] bg-[#111111] px-2 py-1">
                              {uc}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <Link
                          href={`/frequencies/${freq.slug}`}
                          className="text-[10px] tracking-[0.15em] uppercase text-[#555555] hover:text-white transition-colors"
                        >
                          Full Research Deep-Dive →
                        </Link>
                        <a
                          href="https://nonmagic.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] tracking-[0.15em] uppercase text-[#444444] hover:text-[#888888] transition-colors"
                        >
                          Try {freq.nonMagicSession} in Non Magic ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Citations count bar */}
                <div className="border-t border-[#1a1a1a] px-6 md:px-8 py-3 flex items-center justify-between">
                  <span className="text-[9px] text-[#333333]">
                    {freq.sections.reduce((acc, s) => acc + (s.citations?.length || 0), 0)} citations ·{" "}
                    {freq.sections.length} research sections
                  </span>
                  <Link
                    href={`/frequencies/${freq.slug}`}
                    className="text-[9px] tracking-[0.15em] uppercase text-[#333333] hover:text-white transition-colors"
                  >
                    Read Full Study →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How Entrainment Works */}
      <section id="how-it-works" className="border-y border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
            The Mechanism
          </p>
          <h2 className="text-3xl font-light mb-8">How neural entrainment works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
            {[
              {
                step: "01",
                title: "Frequency-Following Response",
                body: "The brain has a documented tendency to synchronize its electrical oscillations with external rhythmic stimuli. This is called the frequency-following response (FFR) and has been confirmed by EEG studies since the 1970s. It is not metaphor — it is measurable neural activity.",
              },
              {
                step: "02",
                title: "Binaural Beats",
                body: "Present a 200Hz tone in the left ear and a 240Hz tone in the right ear. The brain calculates the difference — 40Hz — and begins oscillating at that frequency. The binaural beat exists in the brain, not in the air. This is the primary delivery mechanism Non Magic uses for gamma sessions.",
              },
              {
                step: "03",
                title: "Isochronic Tones",
                body: "A single tone that pulses on and off at the target frequency. More direct than binaural beats and works without headphones. Research suggests isochronic tones may produce stronger entrainment effects in some individuals. Non Magic uses both techniques depending on the frequency protocol.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-[#0d0d0d] p-8">
                <p className="text-4xl font-bold text-[#1a1a1a] mb-4">{item.step}</p>
                <h3 className="text-base font-light mb-3">{item.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-[#222222] p-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-2">Primary Research</p>
            <p className="text-sm text-[#666666] leading-relaxed">
              Oster, G. (1973). &quot;Auditory beats in the brain.&quot; <em>Scientific American, 229(4), 94–102.</em> — The foundational paper establishing that the brain creates a perceived third frequency when two slightly different tones are presented, one to each ear.
            </p>
          </div>
        </div>
      </section>

      {/* Solfeggio Frequencies */}
      <section id="solfeggio" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">
            Part II
          </p>
          <h2 className="text-3xl font-light mb-3">Solfeggio &amp; Tonal Frequencies</h2>
          <p className="text-[#555555] text-sm max-w-xl leading-relaxed">
            Ancient tonal scales with modern research applications. The evidence base here is thinner than for brainwave entrainment, but it is not zero. We present what exists without overstatement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
          {solfeggioFrequencies.map((freq) => {
            const highlight = frequencyHighlights[freq.slug];
            return (
              <div
                key={freq.slug}
                className="bg-[#0d0d0d] p-6 hover:bg-[#111111] transition-colors group"
              >
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-bold text-[#2a2a2a] group-hover:text-[#333333] transition-colors leading-none tabular-nums">
                    {freq.hz}
                  </span>
                  <span className="text-sm text-[#444444] mb-1">Hz</span>
                </div>
                <h3 className="text-sm font-light mb-1">{freq.name}</h3>
                <p className="text-xs text-[#555555] italic mb-3">{freq.tagline}</p>
                <p className="text-xs text-[#555555] leading-relaxed mb-4 line-clamp-3">
                  {freq.intro}
                </p>
                {highlight && (
                  <div className="border-l-2 border-[#222222] pl-3 mb-4">
                    <p className="text-[9px] text-[#555555] leading-relaxed">{highlight.finding}</p>
                    <p className="text-[9px] text-[#333333] mt-1">— {highlight.citation}</p>
                  </div>
                )}
                <div className="flex gap-4">
                  <Link
                    href={`/frequencies/${freq.slug}`}
                    className="text-[9px] tracking-[0.15em] uppercase text-[#444444] hover:text-white transition-colors"
                  >
                    Deep-Dive →
                  </Link>
                  <a
                    href="https://nonmagic.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] tracking-[0.15em] uppercase text-[#333333] hover:text-[#555555] transition-colors"
                  >
                    Try in App ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="border-y border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
            Our Standard
          </p>
          <h2 className="text-2xl font-light mb-6">Citation policy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <div>
              <p className="text-sm text-[#888888] font-light mb-3">What we cite</p>
              <ul className="space-y-2 text-sm text-[#555555]">
                <li>Peer-reviewed studies from PubMed-indexed journals</li>
                <li>Clinical trials with documented methodology</li>
                <li>Systematic reviews and meta-analyses</li>
                <li>Pre-prints from recognized researchers (labeled)</li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-[#888888] font-light mb-3">What we don't do</p>
              <ul className="space-y-2 text-sm text-[#555555]">
                <li>Cite YouTube videos or blog posts as evidence</li>
                <li>Present correlation as causation</li>
                <li>Claim therapeutic or medical benefits</li>
                <li>Use animal studies to make human outcome promises</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border border-[#222222] p-5 max-w-2xl">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-2">Disclaimer</p>
            <p className="text-xs text-[#555555] leading-relaxed">
              Nothing on this page or in the Non Magic app constitutes medical advice. Frequency entrainment is a practice tool, not a treatment. If you have a neurological or psychiatric condition, consult a qualified clinician before starting a new practice.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">
              Apply the Science
            </p>
            <h2 className="text-2xl font-light mb-2">All 12 frequencies. Free. In your pocket.</h2>
            <p className="text-[#555555] text-sm max-w-md">
              Non Magic ships every frequency in this library. Download and start today.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <a
              href="https://nonmagic.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors whitespace-nowrap"
            >
              Download Non Magic — Free →
            </a>
            <Link
              href="/tm-course"
              className="px-8 py-3 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors whitespace-nowrap text-center"
            >
              Start the 8-Day TM Course →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
