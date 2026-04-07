"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/articles", label: "Articles" },
  { href: "/community", label: "Community" },
  { href: "/events", label: "Events" },
  { href: "/meditation", label: "5AM Meditation" },
  { href: "/tm-course", label: "TM Course" },
  { href: "/about", label: "About" },
  { href: "/newsletter", label: "Newsletter" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1a1a1a] bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xs tracking-[0.2em] uppercase text-white font-light">
          Watering My Grass
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] tracking-[0.1em] transition-all ${
                pathname === link.href
                  ? "text-[#F5841F]"
                  : "text-white opacity-60 hover:opacity-100 hover:underline hover:underline-offset-4"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://nonmagic.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.1em] border border-[#F5841F] px-3 py-1 text-[#F5841F] hover:bg-[#F5841F] hover:text-black transition-all"
          >
            Non Magic ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white opacity-60 hover:opacity-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#1a1a1a] bg-[#0a0a0a]">
          <div className="px-6 py-6 flex flex-col gap-5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`text-xs tracking-[0.1em] ${
                pathname === "/" ? "text-[#F5841F]" : "text-white opacity-60"
              }`}
            >
              Home
            </Link>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-xs tracking-[0.1em] ${
                  pathname === link.href ? "text-[#F5841F]" : "text-white opacity-60"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://nonmagic.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.1em] text-white opacity-60"
            >
              Non Magic ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
