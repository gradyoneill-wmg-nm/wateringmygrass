import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import "../styles/WMGGrain.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Watering My Grass — Science, Community, Practice",
  description:
    "A community-driven wellness publication built around meditation and frequency science. NYC-based, globally accessible.",
  openGraph: {
    title: "Watering My Grass — Science, Community, Practice",
    description:
      "Everybody wants a village. No one wants to be a villager. This is not magic. It is science. And it is for all of us.",
    siteName: "Watering My Grass",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Watering My Grass",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Watering My Grass — Science, Community, Practice",
    description:
      "Everybody wants a village. No one wants to be a villager.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="wmg-grain wmg-vignette min-h-full flex flex-col bg-[#0C0C0A] text-white">
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#222222] pt-16 pb-10 px-6 mt-20">
          <div className="max-w-6xl mx-auto">
            {/* Top row: brand + newsletter */}
            <div className="flex flex-col lg:flex-row justify-between gap-12 mb-14">
              {/* Brand */}
              <div className="max-w-sm">
                <p className="text-xs tracking-[0.25em] uppercase text-white mb-3">
                  Watering My Grass
                </p>
                <p className="text-[#888888] text-sm leading-relaxed mb-5">
                  A community publication for people who found something deeper.
                  NYC-based. Globally accessible. Not corporate.
                </p>
                {/* Social links */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://twitter.com/wateringmygrass"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X / Twitter"
                    className="text-[#555555] hover:text-white transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.904-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/wateringmygrass"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-[#555555] hover:text-white transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@wateringmygrass"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="text-[#555555] hover:text-white transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Newsletter inline signup */}
              <div className="max-w-sm w-full">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#555555] mb-3">
                  Weekly Newsletter
                </p>
                <p className="text-[#888888] text-xs leading-relaxed mb-4">
                  Science, practice notes, community. Every Thursday. Free.
                </p>
                <form action="/api/subscribe" method="POST" className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="flex-1 min-w-0 bg-[#111111] border border-[#333333] text-white text-xs px-3 py-2.5 focus:outline-none focus:border-[#888888] placeholder:text-[#444444]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-white text-black text-[9px] tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors whitespace-nowrap"
                  >
                    Join →
                  </button>
                </form>
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14 border-t border-[#1a1a1a] pt-10">
              {/* Editorial */}
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#444444] mb-4">
                  Editorial
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { href: "/articles", label: "Articles" },
                    { href: "/research", label: "Research Library" },
                    { href: "/podcast", label: "Podcast" },
                    { href: "/newsletter", label: "Newsletter" },
                    { href: "/manifesto", label: "Manifesto" },
                    { href: "/founders-log", label: "Founder's Log" },
                  ].map(({ href, label }) => (
                    <a key={href} href={href} className="text-xs text-[#555555] hover:text-white transition-colors">
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Community */}
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#444444] mb-4">
                  Community
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { href: "/community", label: "Community Feed" },
                    { href: "/events", label: "NYC Events" },
                    { href: "/contributor", label: "Contribute" },
                    { href: "/grants", label: "Grants & Funding" },
                    { href: "/april18", label: "April 18 Event" },
                    { href: "/directory", label: "Directory" },
                  ].map(({ href, label }) => (
                    <a key={href} href={href} className="text-xs text-[#555555] hover:text-white transition-colors">
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Practice */}
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#444444] mb-4">
                  Practice
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { href: "/meditation", label: "5AM Meditation" },
                    { href: "/frequencies", label: "Frequencies" },
                    { href: "/build-log", label: "Build Log" },
                    { href: "/calendar", label: "Content Calendar" },
                  ].map(({ href, label }) => (
                    <a key={href} href={href} className="text-xs text-[#555555] hover:text-white transition-colors">
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Non Magic CTA */}
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#444444] mb-4">
                  The App
                </p>
                <a
                  href="https://nonmagic.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-[#333333] p-4 hover:border-white transition-colors group"
                >
                  <p className="text-xs font-light mb-1 group-hover:text-white transition-colors">
                    Non Magic ↗
                  </p>
                  <p className="text-[10px] text-[#555555] leading-relaxed">
                    Free frequency meditation. iOS + Android. Required for April 18.
                  </p>
                </a>
                <div className="flex flex-col gap-2 mt-4">
                  <a href="/about" className="text-xs text-[#555555] hover:text-white transition-colors">About WMG</a>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[#1a1a1a] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <p className="text-[10px] text-[#444444]">
                © 2026 Watering My Grass. Community-driven. Not corporate.
              </p>
              <p className="text-[10px] text-[#333333]">
                Built in NYC by{" "}
                <a
                  href="https://nonmagic.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#888888] transition-colors"
                >
                  Non Magic
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
