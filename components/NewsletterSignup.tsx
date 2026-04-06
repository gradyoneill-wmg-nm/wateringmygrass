"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  variant?: "inline" | "full";
}

export default function NewsletterSignup({ variant = "full" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Placeholder — wire to ConvertKit/Mailchimp when ready
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    setEmail("");
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-0">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === "loading" || status === "success"}
          className="flex-1 bg-[#111111] border border-[#333333] px-4 py-3 text-sm text-white placeholder-[#444444] focus:outline-none focus:border-[#666666] disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-6 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors whitespace-nowrap disabled:opacity-50"
        >
          {status === "loading" ? "..." : status === "success" ? "Subscribed ✓" : "Subscribe"}
        </button>
      </form>
    );
  }

  return (
    <div className="border border-[#222222] bg-[#0d0d0d] p-8">
      <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">
        Newsletter
      </p>
      <h3 className="text-xl font-light mb-1">The WMG Weekly</h3>
      <p className="text-[#888888] text-sm mb-6">
        1 deep-dive article. 1 science note. 1 community spotlight. 1 NYC event. Every Sunday.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-0">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === "loading" || status === "success"}
          className="flex-1 bg-[#0a0a0a] border border-[#333333] px-4 py-3 text-sm text-white placeholder-[#444444] focus:outline-none focus:border-[#666666] disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-6 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors whitespace-nowrap disabled:opacity-50"
        >
          {status === "loading" ? "..." : status === "success" ? "Subscribed ✓" : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-xs text-red-400 mt-2">Something went wrong. Try again.</p>
      )}
    </div>
  );
}
