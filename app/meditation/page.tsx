import type { Metadata } from "next";
import Link from "next/link";
import {
  DailyCountdown,
  April18Countdown,
  ParticipantCounter,
} from "./MeditationCountdown";
import SessionFlow from "./SessionFlow";

export const metadata: Metadata = {
  title: "5 AM Meditation — Watering My Grass",
  description:
    "Join the daily 5 AM synchronized meditation session. Live countdown, session archive, and global participant tracking. April 18: the first global event.",
};

const pastSessions = [
  {
    id: "apr-05",
    date: "April 5, 2026",
    title: "Morning Gamma — Day 1",
    duration: "20 min",
    participants: 312,
    frequency: "40Hz Gamma",
    thumbnail: null,
  },
  {
    id: "apr-04",
    date: "April 4, 2026",
    title: "Morning Gamma — Pre-Launch",
    duration: "20 min",
    participants: 204,
    frequency: "40Hz Gamma",
    thumbnail: null,
  },
  {
    id: "apr-03",
    date: "April 3, 2026",
    title: "Delta Recovery Session",
    duration: "20 min",
    participants: 178,
    frequency: "2Hz Delta",
    thumbnail: null,
  },
  {
    id: "apr-02",
    date: "April 2, 2026",
    title: "Theta Deep Work",
    duration: "20 min",
    participants: 156,
    frequency: "6Hz Theta",
    thumbnail: null,
  },
  {
    id: "apr-01",
    date: "April 1, 2026",
    title: "First Session",
    duration: "20 min",
    participants: 89,
    frequency: "40Hz Gamma",
    thumbnail: null,
  },
  {
    id: "mar-31",
    date: "March 31, 2026",
    title: "Pre-Launch Beta",
    duration: "20 min",
    participants: 42,
    frequency: "40Hz Gamma",
    thumbnail: null,
  },
];

export default function MeditationPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Daily Practice
        </p>
        <h1 className="text-4xl md:text-7xl font-light leading-[1.0] tracking-[-0.02em] mb-6">
          5 AM
          <br />
          Meditation
        </h1>
        <p className="text-lg font-light text-[#888888] mb-12 max-w-xl leading-relaxed">
          Every morning at 5:00 AM Eastern. Live and synchronized. Join from
          anywhere via the Non Magic app.
        </p>

        {/* Daily countdown */}
        <div className="mb-4">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#888888] mb-5">
            Next session
          </p>
          <DailyCountdown />
        </div>
      </section>

      {/* April 18 feature banner */}
      <section className="border-y border-[#333333] bg-[#0f0f0f] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white mb-3">
                April 18 — Global Event
              </p>
              <h2 className="text-2xl md:text-3xl font-light mb-2">
                The First Global Session
              </h2>
              <p className="text-[#888888] text-sm max-w-md leading-relaxed">
                April 18, 2026 at 5:00 AM EST. Thousands of people. One
                frequency. NYC in-person and worldwide via Non Magic.
              </p>
              <div className="mt-6">
                <April18Countdown />
              </div>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href="/april18"
                className="px-8 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors text-center"
              >
                Event Details →
              </Link>
              <a
                href="https://nonmagic.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors text-center"
              >
                Join Remotely ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Livestream */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Live / Replay
        </p>
        <h2 className="text-xl font-light mb-8">Today&apos;s Session</h2>

        {/* Video embed placeholder */}
        <div className="relative w-full bg-[#111111] border border-[#222222] aspect-video flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-16 border border-[#333333] flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="6,4 20,12 6,20"
                fill="#444444"
              />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-[#555555] text-sm mb-1">
              Live at 5:00 AM Eastern
            </p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#444444]">
              Stream begins automatically
            </p>
          </div>
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#333333]" />
            <span className="text-[9px] tracking-[0.15em] uppercase text-[#444444]">
              Offline
            </span>
          </div>
        </div>

        <p className="text-[#555555] text-xs mt-4 leading-relaxed">
          The livestream goes live at 5:00 AM EST each morning. Missed it? Past
          sessions are archived below.
        </p>
      </section>

      {/* Mood check-in / session flow */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <SessionFlow />
      </section>

      <div className="border-t border-[#222222]" />

      {/* Participant counter */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222222]">
          <div className="bg-[#0a0a0a] p-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
              Global Participants
            </p>
            <ParticipantCounter />
            <p className="text-[#555555] text-xs mt-2">
              across all sessions to date
            </p>
          </div>
          <div className="bg-[#0a0a0a] p-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
              Sessions Completed
            </p>
            <span className="text-5xl md:text-7xl font-light tabular-nums text-white">
              06
            </span>
            <p className="text-[#555555] text-xs mt-2">days of 5 AM practice</p>
          </div>
          <div className="bg-[#0a0a0a] p-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
              Next Milestone
            </p>
            <span className="text-5xl md:text-7xl font-light tabular-nums text-white">
              Apr 18
            </span>
            <p className="text-[#555555] text-xs mt-2">global synchronized event</p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#222222]" />

      {/* Join Remotely CTA */}
      <section className="border-b border-[#222222] bg-[#0d0d0d] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-2">
                Participate From Anywhere
              </p>
              <h3 className="text-lg font-light mb-2">Join Remotely</h3>
              <p className="text-[#888888] text-sm max-w-md">
                The 5 AM session runs through Non Magic. Download the app,
                create a free account, and open it at 5:00 AM Eastern. That&apos;s it.
              </p>
            </div>
            <a
              href="https://nonmagic.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors whitespace-nowrap"
            >
              Join Remotely ↗
            </a>
          </div>
        </div>
      </section>

      {/* Session archive */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-2">
              Archive
            </p>
            <h2 className="text-xl font-light">Past Sessions</h2>
          </div>
          <p className="text-[#555555] text-xs tracking-[0.1em] uppercase">
            {pastSessions.length} recordings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#222222]">
          {pastSessions.map((session) => (
            <div
              key={session.id}
              className="bg-[#0a0a0a] p-6 group cursor-pointer hover:bg-[#0f0f0f] transition-colors"
            >
              {/* Thumbnail placeholder */}
              <div className="w-full aspect-video bg-[#111111] border border-[#1a1a1a] mb-4 flex items-center justify-center group-hover:border-[#333333] transition-colors">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="6,4 20,12 6,20" fill="#333333" />
                </svg>
              </div>

              <p className="text-[9px] tracking-[0.2em] uppercase text-[#555555] mb-1">
                {session.date}
              </p>
              <h3 className="text-sm font-light text-white mb-3 leading-snug">
                {session.title}
              </h3>

              <div className="flex items-center gap-4 text-[10px] text-[#555555] tracking-[0.1em]">
                <span>{session.frequency}</span>
                <span>·</span>
                <span>{session.duration}</span>
                <span>·</span>
                <span>{session.participants.toLocaleString()} joined</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#444444] text-xs mt-10 tracking-[0.15em] uppercase">
          New sessions added daily at 5:00 AM Eastern
        </p>
      </section>

      {/* April 18 bottom CTA */}
      <section className="border-t border-[#222222] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
            Don&apos;t miss it
          </p>
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            April 18, 2026
          </h2>
          <p className="text-[#888888] text-sm mb-10 max-w-md mx-auto leading-relaxed">
            The first global synchronized session. 5:00 AM Eastern. Every
            timezone. Register now — NYC spots are limited.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/april18"
              className="px-10 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors"
            >
              Register for April 18
            </Link>
            <a
              href="https://nonmagic.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors"
            >
              Download Non Magic ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
