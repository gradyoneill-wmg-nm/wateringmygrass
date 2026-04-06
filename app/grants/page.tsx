import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import FreeAccessForm from "./FreeAccessForm";

export const metadata: Metadata = {
  title: "Grants & Funding — Watering My Grass",
  description:
    "WMG is community-funded through grants and sponsorships — never paywalls. See our impact, active grant applications, and apply for free access to Non Magic.",
};

const impactMetrics = [
  {
    value: "2,400+",
    label: "Sessions Completed",
    detail: "Across the Non Magic community since launch",
  },
  {
    value: "1,200+",
    label: "Community Members",
    detail: "Readers, practitioners, and contributors worldwide",
  },
  {
    value: "47",
    label: "Free Access Grants",
    detail: "Given to veterans, low-income users, and schools",
  },
  {
    value: "12",
    label: "Countries Reached",
    detail: "April 18 global session participation",
  },
];

const grantsInProgress = [
  {
    name: "NIH Community Health Innovation Grant",
    funder: "National Institutes of Health",
    status: "In Review",
    amount: "$75,000",
    purpose:
      "Expand free Non Magic access to underserved communities. Fund a 6-month longitudinal study on meditation's effect on stress biomarkers in low-income populations.",
    submitted: "March 2026",
  },
  {
    name: "NYC Department of Veterans' Services",
    funder: "City of New York",
    status: "Application Open",
    amount: "$25,000",
    purpose:
      "Provide free Non Magic subscriptions and facilitated group sessions for NYC veterans dealing with PTSD, anxiety, and sleep disorders.",
    submitted: "April 2026",
  },
  {
    name: "Wellbeing for Life Foundation",
    funder: "Private Foundation",
    status: "Letter of Intent Submitted",
    amount: "$40,000",
    purpose:
      "Seed funding to build a research library of frequency science papers and partner with 3 NYC public schools for a pilot mindfulness program.",
    submitted: "February 2026",
  },
];

const missionPillars = [
  {
    title: "No Paywalls",
    body: "Every article, every community space, every session guide is free. The science doesn't belong behind a gate.",
  },
  {
    title: "Grant-Funded",
    body: "Revenue comes from grants, sponsorships, and events — not subscriptions. This lets us serve everyone, not just people who can pay.",
  },
  {
    title: "Transparent Reporting",
    body: "We publish every grant we apply for, its status, and what the funding goes toward. No black boxes.",
  },
];

export default function GrantsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Grants & Funding
        </p>
        <h1 className="text-4xl md:text-6xl font-light leading-[1.05] tracking-[-0.02em] mb-8">
          The village is funded by the village.
        </h1>
        <p className="text-xl text-[#888888] font-light max-w-2xl leading-relaxed">
          Watering My Grass is a community-funded publication. No subscriptions.
          No paywalls. We run on grants, sponsorships, and the belief that access
          to tools that work shouldn&apos;t depend on what you earn.
        </p>
      </section>

      <div className="border-t border-[#222222]" />

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-10">
          The Mission
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222222]">
          {missionPillars.map((pillar) => (
            <div key={pillar.title} className="bg-[#0a0a0a] p-8">
              <h3 className="text-white text-sm font-light mb-3">{pillar.title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-6 text-[#888888] leading-relaxed max-w-2xl">
          <p>
            Meditation research consistently shows the strongest outcomes for the people
            with the least access to it — veterans managing PTSD, low-income communities
            with chronic stress, students in underfunded schools. The tools exist. The
            barrier is distribution.
          </p>
          <p>
            WMG and Non Magic are built to close that gap. Grants let us give free
            subscriptions directly to the people who need them most, fund original
            research, and keep the community open to everyone.
          </p>
          <p>
            We are currently pursuing 501(c)(3) status. In the interim, all grant
            funding is tracked transparently and reported publicly on this page.
          </p>
        </div>
      </section>

      <div className="border-t border-[#222222]" />

      {/* Impact Metrics */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-10">
          Impact to Date
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#222222]">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="bg-[#0a0a0a] p-8">
              <p className="text-3xl md:text-4xl font-light text-white mb-2">
                {metric.value}
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#555555] mb-2">
                {metric.label}
              </p>
              <p className="text-xs text-[#444444] leading-relaxed">{metric.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-[#444444] text-[10px] tracking-[0.15em] uppercase mt-6">
          Updated April 2026 — metrics reflect Non Magic app + WMG community
        </p>
      </section>

      <div className="border-t border-[#222222]" />

      {/* Active Grants */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-10">
          Grant Applications in Progress
        </p>
        <div className="space-y-px bg-[#222222]">
          {grantsInProgress.map((grant) => (
            <div key={grant.name} className="bg-[#0a0a0a] p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-white font-light text-lg mb-1">{grant.name}</h3>
                  <p className="text-[#555555] text-xs tracking-[0.1em] uppercase">
                    {grant.funder}
                  </p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-white text-sm font-light">{grant.amount}</span>
                  <span
                    className={`text-[9px] tracking-[0.2em] uppercase px-3 py-1 border ${
                      grant.status === "In Review"
                        ? "border-[#555555] text-[#888888]"
                        : grant.status === "Letter of Intent Submitted"
                        ? "border-[#333333] text-[#555555]"
                        : "border-[#444444] text-[#666666]"
                    }`}
                  >
                    {grant.status}
                  </span>
                </div>
              </div>
              <p className="text-[#666666] text-sm leading-relaxed mb-4">
                {grant.purpose}
              </p>
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#444444]">
                Submitted {grant.submitted}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[#444444] text-xs leading-relaxed mt-8 max-w-xl">
          We publish all active applications and their outcomes. Funded grants will be
          listed here with full allocation details once awarded.
        </p>
      </section>

      <div className="border-t border-[#222222]" />

      {/* Free Access Form */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16">
          {/* Left — copy */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
              Free Access
            </p>
            <h2 className="text-2xl md:text-3xl font-light leading-snug mb-6">
              Apply for free Non Magic access
            </h2>
            <p className="text-[#888888] text-sm leading-relaxed mb-8">
              We reserve a portion of every grant for direct free access to Non Magic.
              If you are a veteran, experiencing financial hardship, or represent a
              school or organization, apply below.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#444444] mb-2">
                  Veterans
                </p>
                <p className="text-[#666666] text-xs leading-relaxed">
                  Active duty, reserves, and discharged veterans receive lifetime free
                  access. No means testing. Thank you for your service.
                </p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#444444] mb-2">
                  Low Income
                </p>
                <p className="text-[#666666] text-xs leading-relaxed">
                  If the Non Magic subscription is a genuine barrier, we want to
                  remove it. Applications are reviewed with dignity — no documentation
                  required.
                </p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#444444] mb-2">
                  Schools & Organizations
                </p>
                <p className="text-[#666666] text-xs leading-relaxed">
                  Schools, clinics, community centers, and non-profits can apply for
                  group access. Ideal for pilot programs, classroom use, or group
                  therapy settings.
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <FreeAccessForm />
          </div>
        </div>
      </section>

      <div className="border-t border-[#222222]" />

      {/* Partner / Sponsor CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-3">
              For Funders
            </p>
            <h2 className="text-2xl font-light mb-2">
              Interested in sponsoring WMG?
            </h2>
            <p className="text-[#888888] text-sm max-w-md leading-relaxed">
              We work with foundations, wellness companies, and mission-aligned sponsors.
              All partnerships are disclosed publicly.
            </p>
          </div>
          <a
            href="mailto:grants@wateringmygrass.com"
            className="px-8 py-3 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors whitespace-nowrap"
          >
            Get in Touch →
          </a>
        </div>
      </section>

      <div className="border-t border-[#222222]" />

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-light mb-2">Stay updated on our work</h2>
            <p className="text-[#888888] text-sm">
              Grant outcomes, impact reports, and community milestones in the weekly
              newsletter.
            </p>
          </div>
        </div>
        <div className="max-w-md">
          <NewsletterSignup variant="inline" />
        </div>
      </section>

      {/* Back link */}
      <section className="border-t border-[#222222] py-10">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/about"
            className="text-[#555555] text-xs tracking-[0.15em] uppercase hover:text-white transition-colors"
          >
            ← About WMG
          </Link>
        </div>
      </section>
    </div>
  );
}
