"use client";

import { useState } from "react";

const ALL_TAGS = [
  "TM", "Gamma", "HRV", "Frequency", "Breathwork",
  "Personal", "Beginner", "Analysis", "Research", "Community",
] as const;

export default function ContributorForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [background, setBackground] = useState("");
  const [pitch, setPitch] = useState("");
  const [links, setLinks] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function toggleTag(tag: string) {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  if (submitted) {
    return (
      <div className="border border-[#333333] p-8 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">
          Application Submitted
        </p>
        <p className="text-white font-light text-lg mb-2">We&apos;ll review it.</p>
        <p className="text-[#888888] text-sm leading-relaxed">
          We review every application and respond within 7–10 business days.
          If your pitch is accepted, you&apos;ll receive editorial guidelines,
          a style guide, and a publication timeline.
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contributor/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, title, background, pitch, links, tags }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#111111] border border-[#333333] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#888888] placeholder:text-[#444444]"
            placeholder="Your full name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#111111] border border-[#333333] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#888888] placeholder:text-[#444444]"
            placeholder="you@domain.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">
          Proposed Article Title &amp; Format
        </label>
        <input
          type="text"
          name="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-[#111111] border border-[#333333] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#888888] placeholder:text-[#444444]"
          placeholder="e.g. 'The Wim Hof Protocols: What the Data Actually Shows' (Deep Dive)"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">
          Your Practice / Background
        </label>
        <textarea
          name="background"
          required
          rows={4}
          value={background}
          onChange={(e) => setBackground(e.target.value)}
          className="bg-[#111111] border border-[#333333] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#888888] placeholder:text-[#444444] resize-none"
          placeholder="How long have you been practicing? What's your relevant expertise or lived experience? What gives you the standing to write this piece?"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">
          Pitch (3–5 sentences)
        </label>
        <textarea
          name="pitch"
          required
          rows={5}
          value={pitch}
          onChange={(e) => setPitch(e.target.value)}
          className="bg-[#111111] border border-[#333333] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#888888] placeholder:text-[#444444] resize-none"
          placeholder="What's the piece about? What specific angle are you taking? What will the reader know or understand differently when they're done? What primary sources or research will you cite?"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">
          Links to Previous Work (optional)
        </label>
        <input
          type="text"
          name="links"
          value={links}
          onChange={(e) => setLinks(e.target.value)}
          className="bg-[#111111] border border-[#333333] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#888888] placeholder:text-[#444444]"
          placeholder="Substack, blog, academic profile, published articles..."
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">
          Relevant Tags (select all that apply)
        </label>
        <div className="flex flex-wrap gap-2">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              className={`text-[9px] tracking-[0.25em] uppercase border px-2 py-1 transition-colors ${
                tags.includes(tag)
                  ? "border-white text-white"
                  : "border-[#333333] text-[#555555] hover:border-[#888888]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <p className="text-red-400 text-xs">{error}</p>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting…" : "Submit Application →"}
        </button>
        <p className="text-[10px] text-[#444444] mt-4 leading-relaxed">
          We review every application and respond within 7–10 business days.
          If your pitch is accepted, you&apos;ll receive editorial guidelines,
          a style guide, and a publication timeline.
        </p>
      </div>
    </form>
  );
}
