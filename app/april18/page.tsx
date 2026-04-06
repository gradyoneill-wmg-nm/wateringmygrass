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
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Global Event
        </p>
        <h1 className="text-4xl md:text-6xl font-light leading-[1.05] tracking-[-0.02em] mb-6">
          April 18, 2026
          <br />
          <span className="text-[#888888]">5:00 AM EST</span>
        </h1>
        <p className="text-xl font-light text-[#888888] mb-12 max-w-xl leading-relaxed">
          A synchronized global meditation session. Every timezone. One frequency.
        </p>
        <Countdown targetDate={APRIL_18} label="Time until the session" />
      </section>

      {/* Divider */}
      <div className="border-t border-[#222222]" />

      {/* Event details */}
      <section className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
            What&apos;s Happening
          </p>
          <div className="space-y-6 text-sm text-[#888888] leading-relaxed">
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

          <div className="mt-10 space-y-4">
            <div className="border border-[#222222] p-4">
              <p className="text-[9px] tracking-[0.25em] uppercase text-[#555555] mb-1">
                Session
              </p>
              <p className="text-white text-sm">20-minute Gamma (40Hz)</p>
            </div>
            <div className="border border-[#222222] p-4">
              <p className="text-[9px] tracking-[0.25em] uppercase text-[#555555] mb-1">
                Host
              </p>
              <p className="text-white text-sm">Grady O&apos;Neill</p>
            </div>
            <div className="border border-[#222222] p-4">
              <p className="text-[9px] tracking-[0.25em] uppercase text-[#555555] mb-1">
                Cost
              </p>
              <p className="text-white text-sm">Free</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
            NYC In-Person
          </p>
          <div className="space-y-6 text-sm text-[#888888] leading-relaxed">
            <p>
              New York City participants will gather at a Central Park location (details
              sent to registered NYC attendees 48 hours before the event).
            </p>
            <p>
              After the session, we move to a nearby coffee shop for the first WMG
              community meetup. Bring your questions, bring your practice, leave the
              corporate wellness pitch at home.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            <div className="border border-[#222222] p-4">
              <p className="text-[9px] tracking-[0.25em] uppercase text-[#555555] mb-1">
                Location
              </p>
              <p className="text-white text-sm">Central Park, NYC</p>
              <p className="text-[#555555] text-xs mt-0.5">
                Exact location sent to registrants
              </p>
            </div>
            <div className="border border-[#222222] p-4">
              <p className="text-[9px] tracking-[0.25em] uppercase text-[#555555] mb-1">
                After
              </p>
              <p className="text-white text-sm">Coffee + community</p>
              <p className="text-[#555555] text-xs mt-0.5">Location TBD near park</p>
            </div>
          </div>
        </div>
      </section>

      {/* Non Magic requirement */}
      <section className="border-y border-[#222222] bg-[#0d0d0d] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-2">
                Required for Remote Participants
              </p>
              <h3 className="text-lg font-light mb-2">Download Non Magic</h3>
              <p className="text-[#888888] text-sm max-w-md">
                The session runs through Non Magic. All remote participants must have the
                app installed and a free account created before April 18.
              </p>
            </div>
            <a
              href="https://nonmagic.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors whitespace-nowrap"
            >
              Get Non Magic ↗
            </a>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="max-w-lg">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
            Register
          </p>
          <h2 className="text-2xl font-light mb-2">Save your spot</h2>
          <p className="text-[#888888] text-sm mb-8">
            Free for everyone. NYC-specific logistics sent to local registrants.
          </p>
          <RegistrationForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#222222] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-10">
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
              <div key={item.q} className="border-t border-[#222222] pt-6">
                <h4 className="text-sm font-light mb-2">{item.q}</h4>
                <p className="text-[#888888] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
