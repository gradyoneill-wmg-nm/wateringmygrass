import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#222222] py-12 px-6 mt-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-2">
                Watering My Grass
              </p>
              <p className="text-[#888888] text-sm max-w-sm">
                A community publication for people who found something deeper.
                NYC-based. Globally accessible.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-[#888888]">
              <a
                href="https://nonmagic.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Non Magic App ↗
              </a>
              <a href="/about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="/articles" className="hover:text-white transition-colors">
                Articles
              </a>
              <a href="/april18" className="hover:text-white transition-colors">
                April 18 Event
              </a>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#1a1a1a]">
            <p className="text-xs text-[#444444]">
              © 2026 Watering My Grass. Community-driven. Not corporate.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
