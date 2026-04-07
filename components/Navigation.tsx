"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const links = [
  { href: "/articles", label: "Articles" },
  { href: "/community", label: "Community" },
  { href: "/events", label: "Events" },
  { href: "/meditation", label: "5AM Meditation" },
  { href: "/evidence", label: "Evidence" },
  { href: "/tm-course", label: "TM Course" },
  { href: "/about", label: "About" },
  { href: "/newsletter", label: "Newsletter" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Collapse on scroll-down past 80px; expand on scroll-up
      setCollapsed(y > lastY.current && y > 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when collapsing
  useEffect(() => {
    if (collapsed) setMenuOpen(false);
  }, [collapsed]);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-[#1a1a1a] bg-[#0a0a0a]/95 backdrop-blur-sm overflow-hidden"
      style={{
        height: collapsed ? "40px" : "56px",
        transition: "height 0.3s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Inner div always 56px so content stays vertically centered */}
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: 56 }}>
        {/* Logo */}
        <Link
          href="/"
          className="nav-link text-xs tracking-[0.2em] uppercase text-white font-light flex-shrink-0"
        >
          Watering My Grass
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-[11px] tracking-[0.1em] transition-colors border-l-2 pl-2 ${
                  isActive
                    ? "text-[#F5841F] border-[#F5841F] nav-link-active"
                    : "text-white/60 hover:text-white border-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
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
          className="md:hidden text-white/60 hover:text-white"
          onClick={() => setMenuOpen((o) => !o)}
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

      {/* Mobile menu — rendered outside the collapsing height via absolute positioning trick */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-[#1a1a1a] bg-[#0a0a0a]"
          style={{ position: "absolute", top: "100%", left: 0, right: 0, zIndex: 50 }}
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`text-xs tracking-[0.1em] transition-colors border-l-2 pl-2 ${
                pathname === "/"
                  ? "text-[#F5841F] border-[#F5841F] nav-link-active"
                  : "text-white/60 border-transparent"
              }`}
            >
              Home
            </Link>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-xs tracking-[0.1em] transition-colors border-l-2 pl-2 ${
                  pathname === link.href
                    ? "text-[#F5841F] border-[#F5841F] nav-link-active"
                    : "text-white/60 border-transparent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://nonmagic.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.1em] text-white/60"
            >
              Non Magic ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
