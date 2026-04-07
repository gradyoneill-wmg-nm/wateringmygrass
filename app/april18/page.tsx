import type { Metadata } from "next";
import Countdown from "@/components/Countdown";
import RegistrationForm from "./RegistrationForm";

export const metadata: Metadata = {
  title: "April 18 Global Meditation — Watering My Grass",
  description:
    "Join a synchronized global meditation session on April 18, 2026 at 5:00 AM EST. NYC in-person and worldwide via the Non Magic app.",
};

const APRIL_18 = "2026-04-18T05:00:00-04:00";

export default function April18Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero — centered, full impact */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#444444]">
            Global Event · April 18, 2026
          </p>
          <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.25em] uppercase text-[#4CBB17] border border-[#4CBB17]/40 px-2 py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4CBB17] animate-pulse shrink-0" />
            Live
          </span>
        </div>

        <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-light leading-[1.0] tracking-[-0.03em] mb-6">
          5:00 AM EST
          <br />
          <span className="text-[#444444]">Every Timezone.</span>
          <br />
          One Frequency.
        </h1>

        <p className="text-[#666666] text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed mb-16">
          A synchronized global meditation session. Thousands of nervous systems
          tuning to the same frequency at the same moment.
        </p>

        {/* Large monospace countdown */}
        <div className="flex justify-center mb-14">
          <Countdown targetDate={APRIL_18} large />
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#register"
            className="px-10 py-4 bg-[#F5841F] text-black text-xs tracking-[0.2em] uppercase hover:bg-[#e0751a] transition-colors font-medium"
          >
            Join Remotely — Register Free
          </a>
          <a
            href="https://nonmagic.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-[#333333] text-[#888888] text-xs tracking-[0.2em] uppercase hover:border-white hover:text-white transition-all"
          >
            Download Non Magic ↗
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#1a1a1a]" />

      {/* Event details */}
      <section className="max-w-4xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#444444] mb-6">
            What&apos;s Happening
          </p>
          <div className="space-y-5 text-sm text-[#666666] leading-relaxed">
            <p>
              On April 18 at exactly 5:00 AM Eastern, people around the world will open
              Non Magic and complete a 20-minute Gamma frequency session simultaneously.
            </p>
            <p>
              This isn&apos;t a livestream event. It&apos;s a synchronized practice — thousands
              of nervous systems tuning to the same frequency at the same moment.
            </p>
            <p>
              In NYC, we&apos;re gathering in person. If you&apos;re remote, you&apos;ll be
              connected through the app.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {[
              { label: "Session", value: "20-minute Gamma (40Hz)" },
              { label: "Host", value: "Grady O\u2019Neill" },
              { label: "Cost", value: "Free" },
            ].map((item) => (
              <div key={item.label} className="border border-[#1a1a1a] p-4 flex items-center justify-between gap-4">
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#444444]">
                  {item.label}
                </p>
                <p className="text-white text-sm font-light">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#444444] mb-6">
            NYC In-Person
          </p>
          <div className="space-y-5 text-sm text-[#666666] leading-relaxed">
            <p>
              New York City participants will gather at a Central Park location (details
              sent to registered NYC attendees 48 hours before the event).
            </p>
            <p>
              After the session, we move to a nearby coffee shop for the first WMG
              community meetup.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {[
              { label: "Location", value: "Central Park, NYC", sub: "Exact location sent to registrants" },
              { label: "After", value: "Coffee + community", sub: "Location TBD near park" },
            ].map((item) => (
              <div key={item.label} className="border border-[#1a1a1a] p-4">
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#444444] mb-1">
                  {item.label}
                </p>
                <p className="text-white text-sm font-light">{item.value}</p>
                {item.sub && (
                  <p className="text-[#444444] text-xs mt-0.5">{item.sub}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non Magic requirement */}
      <section className="border-y border-[#1a1a1a] bg-[#060606] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#444444] mb-4">
            Required for Remote Participants
          </p>
          <h3 className="text-2xl md:text-3xl font-light mb-4">Download Non Magic</h3>
          <p className="text-[#666666] text-sm max-w-md mx-auto mb-8">
            The session runs through Non Magic. All remote participants must have the
            app installed and a free account created before April 18.
          </p>
          <a
            href="https://nonmagic.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-white text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all"
          >
            Get Non Magic Free ↗
          </a>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="max-w-4xl mx-auto px-6 py-24">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#444444] mb-4">
            Register
          </p>
          <h2 className="text-3xl font-light mb-3">Save your spot</h2>
          <p className="text-[#666666] text-sm mb-10">
            Free for everyone. NYC-specific logistics sent to local registrants.
          </p>
          <RegistrationForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#444444] mb-12 text-center">
            Questions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Do I need meditation experience?",
                a: "No. The Non Magic app guides you through the session. You just need to show up.",
              },
              {
                q: "What timezone do I use?",
                a: "5:00 AM Eastern Standard Time. That's 2:00 AM PST, 10:00 AM GMT, 11:00 AM CET.",
              },
              {
                q: "Is Non Magic free?",
                a: "The app has a free tier that includes access to the April 18 global session.",
              },
              {
                q: "What if I can't make 5am?",
                a: "Register anyway. We'll share the session recording and you can practice on your own schedule.",
              },
            ].map((item) => (
              <div key={item.q} className="border-t border-[#1a1a1a] pt-6">
                <h4 className="text-sm font-light mb-2 text-white">{item.q}</h4>
                <p className="text-[#666666] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
