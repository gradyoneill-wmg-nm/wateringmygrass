import type { Metadata } from "next";
import DirectoryClient from "./DirectoryClient";

export const metadata: Metadata = {
  title: "NYC Wellness Directory — Watering My Grass",
  description:
    "NYC wellness events — yoga, meditation, breathwork, sound baths, and cold plunge. Free listings for local businesses. Post your event.",
};

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          NYC Wellness Directory
        </p>
        <h1 className="text-4xl md:text-6xl font-light leading-[1.05] tracking-[-0.02em] mb-6">
          Events Near You
        </h1>
        <p className="text-[#888888] text-lg font-light max-w-xl">
          Yoga. Meditation. Breathwork. Sound baths. Cold plunge. NYC wellness
          businesses posting events for the community — free, always.
        </p>
      </section>

      <DirectoryClient />
    </div>
  );
}
