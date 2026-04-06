"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/articles", label: "Articles" },
  { href: "/april18", label: "April 18" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#222222] bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-sm font-light tracking-[0.15em] uppercase text-white">
            Watering My Grass
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.15em] uppercase transition-colors ${
                pathname === link.href
                  ? "text-white"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://nonmagic.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.15em] uppercase border border-white px-4 py-1.5 text-white hover:bg-white hover:text-black transition-all"
          >
            Non Magic ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#888888] hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#222222] bg-[#0a0a0a]">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-xs tracking-[0.15em] uppercase ${
                  pathname === link.href ? "text-white" : "text-[#888888]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://nonmagic.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase text-[#888888]"
            >
              Non Magic ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
