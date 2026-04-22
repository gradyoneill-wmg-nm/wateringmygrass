"use client";

import { useState } from "react";

type AttendanceType = "remote" | "nyc";

export default function RegistrationForm() {
  const [attendance, setAttendance] = useState<AttendanceType>("remote");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timezone, setTimezone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <div className="border border-[#333333] p-8 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">
          Registered
        </p>
        <p className="text-white font-light text-lg mb-2">You&apos;re in.</p>
        <p className="text-[#888888] text-sm">
          Check your email for confirmation and session details.
          {attendance === "nyc" &&
            " NYC location will be sent 48 hours before the event."}
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, timezone, attendance }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Registration failed. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-[9px] tracking-[0.25em] uppercase text-[#555555] mb-2">
          Name
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
          Timezone
        </label>
        <select
          required
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          className="w-full bg-[#111111] border border-[#333333] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#666666]"
        >
          <option value="" disabled>
            Select your timezone
          </option>
          <option>Eastern (EST/EDT)</option>
          <option>Central (CST/CDT)</option>
          <option>Mountain (MST/MDT)</option>
          <option>Pacific (PST/PDT)</option>
          <option>GMT / UTC</option>
          <option>CET (Central European)</option>
          <option>IST (India)</option>
          <option>JST (Japan)</option>
          <option>AEST (Australia Eastern)</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-[9px] tracking-[0.25em] uppercase text-[#555555] mb-2">
          Attendance
        </label>
        <div className="flex gap-px">
          <button
            type="button"
            onClick={() => setAttendance("remote")}
            className={`flex-1 py-3 text-xs tracking-[0.1em] uppercase transition-colors ${
              attendance === "remote"
                ? "bg-white text-black"
                : "bg-[#111111] border border-[#333333] text-[#888888] hover:text-white"
            }`}
          >
            Remote
          </button>
          <button
            type="button"
            onClick={() => setAttendance("nyc")}
            className={`flex-1 py-3 text-xs tracking-[0.1em] uppercase transition-colors ${
              attendance === "nyc"
                ? "bg-white text-black"
                : "bg-[#111111] border border-[#333333] text-[#888888] hover:text-white"
            }`}
          >
            NYC In-Person
          </button>
        </div>
      </div>

      {attendance === "remote" && (
        <p className="text-[#555555] text-xs leading-relaxed">
          You&apos;ll need the Non Magic app installed before April 18.{" "}
          <a
            href="https://nonmagic.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888888] hover:text-white underline underline-offset-2"
          >
            Get it here ↗
          </a>
        </p>
      )}

      {error && (
        <p className="text-red-400 text-xs">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Registering…" : "Register — It's Free"}
      </button>
    </form>
  );
}
