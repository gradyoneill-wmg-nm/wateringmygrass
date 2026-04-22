"use client";

import { useState } from "react";

type Category = "veteran" | "low-income" | "school" | "";

export default function FreeAccessForm() {
  const [category, setCategory] = useState<Category>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <div className="border border-[#333333] p-8 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">
          Application Received
        </p>
        <p className="text-white font-light text-lg mb-2">We&apos;ll be in touch.</p>
        <p className="text-[#888888] text-sm leading-relaxed">
          Your application is under review. We respond to all requests within
          5 business days. Free access is granted on a rolling basis.
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!category) return;
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/grants/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, category, message }),
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-[9px] tracking-[0.25em] uppercase text-[#555555] mb-2">
          Full Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full bg-[#111111] border border-[#333333] px-4 py-3 text-sm text-white placeholder-[#444444] focus:outline-none focus:border-[#666666]"
        />
      </div>

      <div>
        <label className="block text-[9px] tracking-[0.25em] uppercase text-[#555555] mb-2">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full bg-[#111111] border border-[#333333] px-4 py-3 text-sm text-white placeholder-[#444444] focus:outline-none focus:border-[#666666]"
        />
      </div>

      <div>
        <label className="block text-[9px] tracking-[0.25em] uppercase text-[#555555] mb-2">
          Category
        </label>
        <div className="flex gap-px">
          {(
            [
              { value: "veteran", label: "Veteran" },
              { value: "low-income", label: "Low Income" },
              { value: "school", label: "School / Org" },
            ] as { value: Category; label: string }[]
          ).map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => setCategory(value)}
              className={`flex-1 py-3 text-xs tracking-[0.1em] uppercase transition-colors ${
                category === value
                  ? "bg-white text-black"
                  : "bg-[#111111] border border-[#333333] text-[#888888] hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-[9px] tracking-[0.25em] uppercase text-[#555555] mb-2">
          How will you use Non Magic?
        </label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your situation and how free access would help."
          className="w-full bg-[#111111] border border-[#333333] px-4 py-3 text-sm text-white placeholder-[#444444] focus:outline-none focus:border-[#666666] resize-none"
        />
      </div>

      {error && (
        <p className="text-red-400 text-xs">{error}</p>
      )}

      <button
        type="submit"
        disabled={!category || loading}
        className="w-full py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors mt-2 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting…" : "Submit Application"}
      </button>

      <p className="text-[#444444] text-[10px] leading-relaxed text-center">
        All applications are reviewed by the WMG team. We respond within 5 business days.
        Free access is funded through grants and community sponsorships.
      </p>
    </form>
  );
}
