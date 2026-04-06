import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { frequencies, getFrequency } from "@/data/frequencies";

export async function generateStaticParams() {
  return frequencies.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const freq = getFrequency(slug);
  if (!freq) return {};
  return {
    title: freq.metaTitle,
    description: freq.metaDescription,
    openGraph: {
      title: freq.metaTitle,
      description: freq.metaDescription,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: freq.metaTitle,
      description: freq.metaDescription,
    },
  };
}

export default async function FrequencyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const freq = getFrequency(slug);
  if (!freq) notFound();

  const relatedFreqs = freq.relatedSlugs
    .map((s) => frequencies.find((f) => f.slug === s))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="flex items-center gap-3 mb-6">
          <Link
            href="/frequencies"
            className="text-[10px] tracking-[0.25em] uppercase text-[#555555] hover:text-[#888888] transition-colors"
          >
            Frequencies
          </Link>
          <span className="text-[#333333]">/</span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#555555]">
            {freq.hz}Hz
          </span>
        </div>

        <div className="flex items-start gap-6 mb-6">
          <div className="shrink-0 text-right">
            <div className="text-5xl md:text-7xl font-bold tabular-nums text-[#222222] leading-none">
              {freq.hz}
            </div>
            <div className="text-[9px] tracking-[0.2em] uppercase text-[#444444] mt-1">
              Hz
            </div>
          </div>
          <div className="pt-1">
            {freq.brainwaveCategory && (
              <span className="inline-block text-[9px] tracking-[0.25em] uppercase border border-[#333333] text-[#888888] px-2 py-0.5 mb-3">
                {freq.brainwaveCategory}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-[-0.02em]">
              {freq.name}
            </h1>
          </div>
        </div>

        <p className="text-lg md:text-xl text-[#888888] font-light max-w-2xl leading-relaxed mb-3">
          {freq.tagline}
        </p>
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#444444]">
          Range: {freq.range}
        </p>
      </section>

      {/* Intro */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <p className="text-base md:text-lg text-[#cccccc] leading-relaxed max-w-2xl font-light">
            {freq.intro}
          </p>
        </div>
      </section>

      {/* Non Magic CTA — inline */}
      <section className="border-y border-[#222222] bg-[#0d0d0d] py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="text-[9px] tracking-[0.25em] uppercase text-[#555555] mb-1">
              Practice This Frequency
            </p>
            <p className="text-sm font-light">
              <span className="text-white">{freq.nonMagicSession}</span>
              <span className="text-[#666666]"> — available on Non Magic</span>
            </p>
          </div>
          <a
            href="https://nonmagic.app"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-2.5 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors"
          >
            Open Non Magic ↗
          </a>
        </div>
      </section>

      {/* Sections */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {freq.sections.map((section, i) => (
          <section key={i} className="border-t border-[#1a1a1a] pt-12 first:border-t-0 first:pt-0">
            <h2 className="text-xl md:text-2xl font-light tracking-[-0.01em] mb-6 max-w-2xl">
              {section.title}
            </h2>
            <p className="text-[#aaaaaa] leading-relaxed max-w-2xl text-base">
              {section.content}
            </p>
            {section.citations && section.citations.length > 0 && (
              <div className="mt-6 space-y-2">
                {section.citations.map((c, ci) => (
                  <div
                    key={ci}
                    className="text-[11px] text-[#444444] leading-relaxed border-l-2 border-[#1a1a1a] pl-3"
                  >
                    <span className="text-[#666666]">{c.author}</span>
                    {" "}({c.year}).{" "}
                    <em>{c.title}</em>.{" "}
                    {c.publication}.
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Use Cases */}
      <section className="border-t border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
            Practical Applications
          </p>
          <h2 className="text-xl font-light mb-8">When to use {freq.name}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {freq.useCases.map((use, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-[#888888]"
              >
                <span className="text-[#333333] mt-0.5 shrink-0">—</span>
                {use}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom Non Magic CTA */}
      <section className="border-t border-[#222222] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
              The Tool
            </p>
            <h2 className="text-2xl md:text-3xl font-light leading-snug mb-4">
              Reading about {freq.hz}Hz is one thing.
              <br />
              <span className="text-[#888888]">Experiencing it is another.</span>
            </h2>
            <p className="text-[#666666] text-sm leading-relaxed mb-8 max-w-md">
              The{" "}
              <span className="text-[#aaaaaa]">{freq.nonMagicSession}</span>{" "}
              session in Non Magic uses precision-engineered{" "}
              {freq.hz}Hz binaural entrainment — built on the same research
              cited on this page.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://nonmagic.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors"
              >
                Download Non Magic ↗
              </a>
              <Link
                href="/articles"
                className="px-8 py-3 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors"
              >
                Read the Science →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related frequencies */}
      {relatedFreqs.length > 0 && (
        <section className="border-t border-[#222222] pb-20">
          <div className="max-w-4xl mx-auto px-6 pt-16">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-8">
              Related Frequencies
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1a1a1a]">
              {relatedFreqs.map(
                (r) =>
                  r && (
                    <Link
                      key={r.slug}
                      href={`/frequencies/${r.slug}`}
                      className="bg-[#0a0a0a] p-6 hover:bg-[#111111] transition-colors group"
                    >
                      <div className="text-2xl font-bold text-[#2a2a2a] tabular-nums mb-2">
                        {r.hz}
                        <span className="text-base">Hz</span>
                      </div>
                      <div className="text-sm font-light group-hover:text-white transition-colors mb-1">
                        {r.name}
                      </div>
                      <div className="text-[11px] text-[#555555] leading-snug">
                        {r.tagline}
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
