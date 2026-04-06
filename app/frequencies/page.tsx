import type { Metadata } from "next";
import Link from "next/link";
import { frequencies } from "@/data/frequencies";

export const metadata: Metadata = {
  title: "Frequency Science — Watering My Grass",
  description:
    "Deep research guides on every frequency used in Non Magic meditation — Gamma, Alpha, Theta, Delta, Solfeggio, and beyond.",
};

export default function FrequenciesIndexPage() {
  const brainwaves = frequencies.filter((f) => f.brainwaveCategory);
  const tones = frequencies.filter((f) => !f.brainwaveCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-32">
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
            The Science
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.02em] mb-6 max-w-2xl">
            Frequency Reference
          </h1>
          <p className="text-[#888888] max-w-lg leading-relaxed">
            Every frequency used in Non Magic — explained with the research behind it.
            Citations included. No mythology.
          </p>
        </div>

        {/* Brainwaves */}
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#444444] mb-6">
            Brainwave Frequencies
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
            {brainwaves.map((freq) => (
              <Link
                key={freq.slug}
                href={`/frequencies/${freq.slug}`}
                className="bg-[#0a0a0a] p-7 hover:bg-[#111111] transition-colors group"
              >
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-4xl font-bold tabular-nums text-[#2a2a2a] leading-none group-hover:text-[#3a3a3a] transition-colors">
                    {freq.hz}
                  </span>
                  <span className="text-sm text-[#444444] mb-1">Hz</span>
                  {freq.brainwaveCategory && (
                    <span className="ml-auto text-[9px] tracking-[0.2em] uppercase border border-[#2a2a2a] text-[#555555] px-1.5 py-0.5 mb-0.5">
                      {freq.brainwaveCategory}
                    </span>
                  )}
                </div>
                <h2 className="text-base font-light mb-2 group-hover:text-white transition-colors">
                  {freq.name}
                </h2>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {freq.tagline}
                </p>
                <div className="mt-4 text-[10px] tracking-[0.15em] uppercase text-[#333333] group-hover:text-[#555555] transition-colors">
                  Read Research →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Solfeggio Tones */}
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#444444] mb-6">
            Solfeggio &amp; Tonal Frequencies
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
            {tones.map((freq) => (
              <Link
                key={freq.slug}
                href={`/frequencies/${freq.slug}`}
                className="bg-[#0a0a0a] p-7 hover:bg-[#111111] transition-colors group"
              >
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-4xl font-bold tabular-nums text-[#2a2a2a] leading-none group-hover:text-[#3a3a3a] transition-colors">
                    {freq.hz}
                  </span>
                  <span className="text-sm text-[#444444] mb-1">Hz</span>
                </div>
                <h2 className="text-base font-light mb-2 group-hover:text-white transition-colors">
                  {freq.name}
                </h2>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {freq.tagline}
                </p>
                <div className="mt-4 text-[10px] tracking-[0.15em] uppercase text-[#333333] group-hover:text-[#555555] transition-colors">
                  Read Research →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
