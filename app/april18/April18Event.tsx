"use client";

import { useState, useEffect, useRef } from "react";
import RegistrationForm from "./RegistrationForm";

// ─── Constants ─────────────────────────────────────────────────────────────────
const APRIL_18 = new Date("2026-04-18T05:00:00-04:00");
const REG_TARGET = 2847;
const HEADLINE = "ONE SIGNAL. EVERYONE.";

// ─── Time ──────────────────────────────────────────────────────────────────────
function getTimeLeft() {
  const diff = Math.max(0, APRIL_18.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

// ─── Particles (deterministic to avoid hydration mismatch) ────────────────────
const PARTICLES = Array.from({ length: 38 }, (_, i) => ({
  id: i,
  x: (i * 127 + 43) % 100,
  y: (i * 83 + 17) % 100,
  size: 1.5 + (i % 3) * 0.5,
  dur: 22 + (i % 6) * 4,
  delay: -((i * 3.7) % 22),
  // drift direction: alternating so particles spread in different directions
  angle: (i * 47) % 360,
  dist: 30 + (i % 4) * 15,
}));

// ─── Globe participant dots ────────────────────────────────────────────────────
// positions approximate city lat/lon mapped to CSS % on 280×280 sphere
const GLOBE_DOTS = [
  { top: "35%", left: "23%", delay: 0.0 },    // NYC
  { top: "28%", left: "49%", delay: 0.5 },    // London
  { top: "34%", left: "80%", delay: 1.0 },    // Tokyo
  { top: "66%", left: "80%", delay: 1.5 },    // Sydney
  { top: "60%", left: "30%", delay: 0.3 },    // São Paulo
  { top: "46%", left: "51%", delay: 0.8 },    // Lagos
  { top: "40%", left: "66%", delay: 1.3 },    // Mumbai
  { top: "27%", left: "24%", delay: 0.6 },    // Toronto
];

// ─── App screenshots ───────────────────────────────────────────────────────────
const SCREENSHOTS = [
  { bg: "#060606", accent: "#F5841F", freq: "40Hz GAMMA", status: "Session in progress", bars: [0.9, 0.7, 0.95, 0.6, 0.85, 0.75, 0.88] },
  { bg: "#060606", accent: "#4CBB17", freq: "DELTA 2Hz",  status: "Deep sleep protocol", bars: [0.3, 0.5, 0.2, 0.4, 0.3, 0.6, 0.25] },
  { bg: "#060606", accent: "#6B8CFF", freq: "THETA 6Hz",  status: "Meditation state",    bars: [0.55, 0.7, 0.5, 0.65, 0.6, 0.7, 0.55] },
];

// ─── FlipDigit ─────────────────────────────────────────────────────────────────
function FlipDigit({ value }: { value: string }) {
  const [displayed, setDisplayed] = useState(value);
  const [animKey, setAnimKey] = useState(0);
  const prev = useRef(value);

  useEffect(() => {
    if (value !== prev.current) {
      prev.current = value;
      setAnimKey((k) => k + 1);
      // Update displayed value after the "out" phase
      const t = setTimeout(() => setDisplayed(value), 180);
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <span
      key={animKey}
      className="flip-digit"
      style={{ display: "inline-block", lineHeight: 1 }}
    >
      {displayed}
    </span>
  );
}

// ─── Globe ─────────────────────────────────────────────────────────────────────
function Globe() {
  return (
    <div style={{ position: "relative", width: 280, height: 280 }}>
      {/* Atmospheric glow behind sphere */}
      <div
        style={{
          position: "absolute",
          inset: -24,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(30,100,200,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Sphere shell (overflow:hidden clips the spinning surface) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 35% 30%, #1e3a6e 0%, #0b1e3c 55%, #04091a 100%)",
          boxShadow:
            "inset -22px -12px 50px rgba(0,0,0,0.65), 0 0 0 1px rgba(80,130,255,0.07)",
        }}
      >
        {/* Spinning surface: continents + longitude grid */}
        <div
          className="globe-surface"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "200%",
            height: "100%",
            background: `
              radial-gradient(ellipse 14% 11% at 17% 38%, rgba(45,110,45,0.28) 0%, transparent 100%),
              radial-gradient(ellipse 7%  17% at 22% 34%, rgba(45,110,45,0.22) 0%, transparent 100%),
              radial-gradient(ellipse 19% 14% at 51% 37%, rgba(45,110,45,0.22) 0%, transparent 100%),
              radial-gradient(ellipse 11% 19% at 57% 31%, rgba(55,120,55,0.20) 0%, transparent 100%),
              radial-gradient(ellipse 17% 11% at 74% 34%, rgba(45,110,45,0.24) 0%, transparent 100%),
              radial-gradient(ellipse 9%  8%  at 79% 65%, rgba(45,110,45,0.22) 0%, transparent 100%),
              radial-gradient(ellipse 13% 9%  at 31% 57%, rgba(45,110,45,0.20) 0%, transparent 100%),
              repeating-linear-gradient(90deg, transparent, transparent 34px, rgba(100,160,255,0.04) 35px)
            `,
          }}
        />

        {/* Latitude grid lines (static, not spinning) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(100,160,255,0.04) 28px)",
            pointerEvents: "none",
          }}
        />

        {/* Specular highlight (light source top-left) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.06) 0%, transparent 45%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Participant dots — positioned over sphere, outside overflow:hidden */}
      {GLOBE_DOTS.map((dot, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: dot.top,
            left: dot.left,
            width: 8,
            height: 8,
            marginLeft: -4,
            marginTop: -4,
            zIndex: 2,
          }}
        >
          <div
            className="globe-dot-core"
            style={{ animationDelay: `${dot.delay}s` }}
          />
          <div
            className="globe-dot-ring"
            style={{ animationDelay: `${dot.delay}s` }}
          />
        </div>
      ))}

      {/* Equator highlight */}
      <div
        style={{
          position: "absolute",
          top: "49%",
          left: "10%",
          right: "10%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(100,160,255,0.12), transparent)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

// ─── Join Remotely Button ──────────────────────────────────────────────────────
function JoinButton() {
  const [clicked, setClicked] = useState(false);
  const W = 264;
  const H = 52;
  const perim = 2 * (W - 2 + H - 2);

  return (
    <a
      href="#register"
      onClick={() => setClicked(true)}
      className={`join-btn${clicked ? " join-btn--filled" : ""}`}
      style={{ display: "inline-block", position: "relative", width: W, height: H }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          overflow: "visible",
        }}
      >
        <rect
          x="1"
          y="1"
          width={W - 2}
          height={H - 2}
          fill="none"
          stroke="#F5841F"
          strokeWidth="1.5"
          className="join-btn-rect"
          style={{
            strokeDasharray: perim,
            strokeDashoffset: perim,
          }}
        />
      </svg>
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          fontWeight: 400,
          color: clicked ? "#000" : "#F5841F",
          transition: "color 0.15s",
          whiteSpace: "nowrap",
        }}
      >
        JOIN REMOTELY — FREE
      </span>
    </a>
  );
}

// ─── Phone Mockup ──────────────────────────────────────────────────────────────
function PhoneMockup() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % SCREENSHOTS.length);
        setFade(true);
      }, 300);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  const screen = SCREENSHOTS[idx];

  return (
    <div
      className="phone-float"
      style={{
        position: "relative",
        width: 180,
        height: 360,
        borderRadius: 28,
        background: "#0a0a0a",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow:
          "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 0 0 1px rgba(255,255,255,0.02)",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: "50%",
          transform: "translateX(-50%)",
          width: 60,
          height: 6,
          borderRadius: 3,
          background: "rgba(255,255,255,0.15)",
          zIndex: 3,
        }}
      />

      {/* Screen content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: screen.bg,
          transition: "opacity 0.3s ease",
          opacity: fade ? 1 : 0,
          padding: "48px 16px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {/* App header */}
        <div
          style={{
            fontSize: 9,
            letterSpacing: "0.25em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
          }}
        >
          Non Magic
        </div>

        {/* Frequency label */}
        <div
          style={{
            fontSize: 13,
            letterSpacing: "0.15em",
            color: screen.accent,
            fontFamily: "var(--font-space-mono, monospace)",
            textTransform: "uppercase",
            marginTop: 8,
          }}
        >
          {screen.freq}
        </div>

        {/* Status */}
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>
          {screen.status}
        </div>

        {/* Frequency bars */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 4,
            height: 60,
            marginTop: "auto",
          }}
        >
          {screen.bars.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h * 100}%`,
                background: screen.accent,
                opacity: 0.6 + h * 0.4,
                borderRadius: 2,
                transition: "height 0.4s ease",
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div
          style={{
            height: 2,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 1,
            marginTop: 8,
          }}
        >
          <div
            style={{
              height: "100%",
              width: "62%",
              background: screen.accent,
              borderRadius: 1,
              opacity: 0.7,
            }}
          />
        </div>
      </div>

      {/* Screen glare */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
    </div>
  );
}

// ─── Blur-Reveal Headline ──────────────────────────────────────────────────────
function BlurHeadline() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <h1
      aria-label={HEADLINE}
      style={{
        fontSize: "clamp(2.8rem, 9vw, 6.5rem)",
        fontWeight: 300,
        lineHeight: 1.0,
        letterSpacing: "-0.03em",
        margin: 0,
      }}
    >
      {HEADLINE.split("").map((char, i) => (
        <span
          key={i}
          className={`blur-char${visible ? " blur-char--visible" : ""}`}
          style={
            {
              "--delay": `${i * 60}ms`,
              display: char === " " ? "inline" : "inline-block",
              whiteSpace: "pre",
            } as React.CSSProperties
          }
        >
          {char}
        </span>
      ))}
    </h1>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────────
export default function April18Event() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [regCount, setRegCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Countdown
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Registration count-up
  useEffect(() => {
    const start = performance.now();
    const duration = 2200;
    let raf: number;
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setRegCount(Math.floor(eased * REG_TARGET));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  const D = pad(timeLeft.days);
  const H = pad(timeLeft.hours);
  const M = pad(timeLeft.minutes);
  const S = pad(timeLeft.seconds);

  return (
    <>
      {/* ─── CSS ─────────────────────────────────────────────────────────────── */}
      <style>{`
        /* Particle drift */
        @keyframes particleDrift {
          0%   { transform: translate(0, 0); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)); opacity: 0; }
        }

        /* Flip digit */
        @keyframes digitFlip {
          0%   { transform: perspective(400px) rotateX(90deg) translateY(-8px); opacity: 0; }
          55%  { transform: perspective(400px) rotateX(-6deg); opacity: 1; }
          100% { transform: perspective(400px) rotateX(0deg); opacity: 1; }
        }
        .flip-digit {
          display: inline-block;
          animation: digitFlip 0.38s cubic-bezier(0.23, 1, 0.32, 1) both;
          transform-origin: 50% 50%;
        }

        /* Globe spin */
        @keyframes globeSpin {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .globe-surface {
          animation: globeSpin 32s linear infinite;
        }

        /* Globe dots */
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50%       { transform: scale(1.3); opacity: 1; }
        }
        @keyframes dotRing {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(3.5); opacity: 0; }
        }
        .globe-dot-core {
          width: 8px; height: 8px; border-radius: 50%;
          background: #F5841F;
          box-shadow: 0 0 8px rgba(245,132,31,0.9), 0 0 16px rgba(245,132,31,0.4);
          animation: dotPulse 2.2s ease-in-out infinite;
          position: relative; z-index: 1;
        }
        .globe-dot-ring {
          position: absolute; inset: 0; border-radius: 50%;
          border: 1px solid rgba(245,132,31,0.5);
          animation: dotRing 2.2s ease-out infinite;
        }

        /* Join button border draw */
        @keyframes borderFill {
          from { background: transparent; }
          to   { background: #F5841F; }
        }
        .join-btn {
          cursor: pointer;
          text-decoration: none;
          border: 1px solid rgba(245,132,31,0.25);
          transition: border-color 0.2s, background 0.15s;
        }
        .join-btn:hover {
          border-color: transparent;
        }
        .join-btn:hover .join-btn-rect {
          stroke-dashoffset: 0 !important;
          transition: stroke-dashoffset 0.55s ease-in-out !important;
        }
        .join-btn--filled {
          background: #F5841F !important;
          border-color: transparent !important;
        }
        .join-btn--filled span {
          color: #000 !important;
        }
        .join-btn-rect {
          transition: none;
        }

        /* Blur-reveal headline */
        .blur-char {
          opacity: 0;
          filter: blur(12px);
          transform: translateY(6px);
          transition: opacity 0.5s ease, filter 0.5s ease, transform 0.5s ease;
          transition-delay: var(--delay);
        }
        .blur-char--visible {
          opacity: 1;
          filter: blur(0px);
          transform: translateY(0);
        }

        /* Phone float */
        @keyframes phoneFloat {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50%       { transform: translateY(-14px) rotate(-1deg); }
        }
        .phone-float {
          animation: phoneFloat 4.5s ease-in-out infinite;
        }

        /* Section fade in */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease both; }
        .fade-up-1 { animation-delay: 0.1s; }
        .fade-up-2 { animation-delay: 0.2s; }
        .fade-up-3 { animation-delay: 0.35s; }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background: "#070707",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ─── Particle background ──────────────────────────────────────────── */}
        {mounted && (
          <div
            aria-hidden
            style={{
              position: "fixed",
              inset: 0,
              pointerEvents: "none",
              zIndex: 0,
              overflow: "hidden",
            }}
          >
            {PARTICLES.map((p) => {
              const dx = Math.cos((p.angle * Math.PI) / 180) * p.dist;
              const dy = Math.sin((p.angle * Math.PI) / 180) * p.dist;
              return (
                <div
                  key={p.id}
                  style={
                    {
                      position: "absolute",
                      left: `${p.x}%`,
                      top: `${p.y}%`,
                      width: p.size,
                      height: p.size,
                      borderRadius: "50%",
                      background: "rgba(245,132,31,0.6)",
                      "--dx": `${dx}px`,
                      "--dy": `${dy}px`,
                      animation: `particleDrift ${p.dur}s ${p.delay}s ease-in-out infinite`,
                      opacity: 0.05,
                    } as React.CSSProperties
                  }
                />
              );
            })}
          </div>
        )}

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* ─── Hero ─────────────────────────────────────────────────────── */}
          <section
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              padding: "clamp(80px,12vw,140px) 24px clamp(60px,8vw,100px)",
              textAlign: "center",
            }}
          >
            {/* Event badge */}
            <div
              className="fade-up fade-up-1"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                marginBottom: 32,
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#444",
                }}
              >
                Global Event · April 18, 2026
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 9,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#4CBB17",
                  border: "1px solid rgba(76,187,23,0.35)",
                  padding: "3px 8px",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#4CBB17",
                    display: "inline-block",
                    animation: "dotPulse 2s ease-in-out infinite",
                  }}
                />
                Live
              </span>
            </div>

            {/* Headline */}
            <div className="fade-up fade-up-2" style={{ marginBottom: 24 }}>
              <BlurHeadline />
            </div>

            {/* Subhead */}
            <p
              className="fade-up fade-up-3"
              style={{
                color: "#555",
                fontSize: "clamp(14px, 2vw, 17px)",
                fontWeight: 300,
                maxWidth: 480,
                margin: "0 auto 40px",
                lineHeight: 1.65,
              }}
            >
              April 18, 2026 · 5:00 AM EST
              <br />A synchronized global meditation. One frequency.
            </p>

            {/* CTA buttons */}
            <div
              className="fade-up fade-up-3"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
              }}
            >
              <JoinButton />
              <a
                href="https://nonmagic.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 264,
                  height: 52,
                  border: "1px solid #333",
                  color: "#666",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#666";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#333";
                  (e.currentTarget as HTMLElement).style.color = "#666";
                }}
              >
                DOWNLOAD NON MAGIC ↗
              </a>
            </div>
          </section>

          {/* ─── Flip Countdown ───────────────────────────────────────────── */}
          <section
            style={{
              borderTop: "1px solid #111",
              borderBottom: "1px solid #111",
              padding: "clamp(48px,8vw,80px) 24px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 9,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#333",
                marginBottom: 32,
              }}
            >
              Time Until Signal
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "clamp(12px, 3vw, 32px)",
                flexWrap: "wrap",
              }}
            >
              {[
                { digits: D, label: "Days" },
                { digits: H, label: "Hours" },
                { digits: M, label: "Min" },
                { digits: S, label: "Sec" },
              ].map((unit, ui) => (
                <div
                  key={unit.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  {/* Two digits side by side */}
                  <div
                    style={{
                      display: "flex",
                      gap: 4,
                      fontFamily: "var(--font-space-mono, 'Space Mono', monospace)",
                      fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
                      color: "#F5841F",
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    <FlipDigit value={unit.digits[0]} />
                    <FlipDigit value={unit.digits[1]} />
                  </div>
                  <span
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "#333",
                    }}
                  >
                    {unit.label}
                  </span>
                </div>
              ))}

              {/* Colons between units */}
            </div>
          </section>

          {/* ─── Globe + Registration count ───────────────────────────────── */}
          <section
            style={{
              maxWidth: 860,
              margin: "0 auto",
              padding: "clamp(60px,8vw,100px) 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 48,
              textAlign: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 9,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: 8,
                }}
              >
                Participants Joining Worldwide
              </p>
              <div
                style={{
                  fontFamily:
                    "var(--font-space-mono, 'Space Mono', monospace)",
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  color: "#fff",
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  tabularNums: "true",
                } as React.CSSProperties}
              >
                {regCount.toLocaleString()}
              </div>
              <p
                style={{
                  fontSize: 11,
                  color: "#444",
                  marginTop: 10,
                  letterSpacing: "0.1em",
                }}
              >
                registered and counting
              </p>
            </div>

            <Globe />

            <p
              style={{
                fontSize: 11,
                color: "#333",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                maxWidth: 320,
              }}
            >
              8 cities · 40 countries · one frequency
            </p>
          </section>

          {/* ─── Event details ────────────────────────────────────────────── */}
          <section
            style={{
              borderTop: "1px solid #0f0f0f",
              background: "#050505",
            }}
          >
            <div
              style={{
                maxWidth: 840,
                margin: "0 auto",
                padding: "clamp(48px,7vw,80px) 24px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 48,
              }}
            >
              {/* What's happening */}
              <div>
                <p
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: 20,
                  }}
                >
                  What&apos;s Happening
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    fontSize: 13,
                    color: "#555",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  <p>
                    April 18 at exactly 5:00 AM Eastern — thousands of people
                    open Non Magic and complete a 20-minute Gamma session
                    simultaneously.
                  </p>
                  <p>
                    This is not a livestream. It&apos;s synchronized practice.
                    Thousands of nervous systems tuning to the same frequency
                    at the same moment.
                  </p>
                </div>
                <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { k: "Session", v: "20-min Gamma (40Hz)" },
                    { k: "Host", v: "Grady O'Neill" },
                    { k: "Cost", v: "Free" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      style={{
                        border: "1px solid #111",
                        padding: "12px 16px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 16,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.25em",
                          textTransform: "uppercase",
                          color: "#333",
                        }}
                      >
                        {row.k}
                      </span>
                      <span
                        style={{ fontSize: 13, color: "#ccc", fontWeight: 300 }}
                      >
                        {row.v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* NYC in-person */}
              <div>
                <p
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: 20,
                  }}
                >
                  NYC In-Person
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    fontSize: 13,
                    color: "#555",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  <p>
                    New York City participants gather at a Central Park location
                    (details sent 48 hours before the event).
                  </p>
                  <p>
                    After the session: the first WMG community meetup at a
                    nearby coffee shop.
                  </p>
                </div>
                <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { k: "Location", v: "Central Park, NYC", s: "Exact location sent to registrants" },
                    { k: "After", v: "Coffee + community", s: "Location TBD near park" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      style={{ border: "1px solid #111", padding: "12px 16px" }}
                    >
                      <span
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.25em",
                          textTransform: "uppercase",
                          color: "#333",
                          display: "block",
                          marginBottom: 4,
                        }}
                      >
                        {row.k}
                      </span>
                      <span
                        style={{ fontSize: 13, color: "#ccc", fontWeight: 300 }}
                      >
                        {row.v}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          color: "#333",
                          display: "block",
                          marginTop: 2,
                        }}
                      >
                        {row.s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ─── Non Magic download ───────────────────────────────────────── */}
          <section
            style={{
              borderTop: "1px solid #0f0f0f",
              padding: "clamp(60px,8vw,100px) 24px",
            }}
          >
            <div
              style={{
                maxWidth: 840,
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(40px,6vw,80px)",
                flexWrap: "wrap",
              }}
            >
              {/* Phone mockup */}
              <PhoneMockup />

              {/* Copy */}
              <div style={{ maxWidth: 360 }}>
                <p
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: 16,
                  }}
                >
                  Required for Remote Participants
                </p>
                <h2
                  style={{
                    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                    fontWeight: 300,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    marginBottom: 16,
                    color: "#fff",
                  }}
                >
                  Download
                  <br />
                  Non Magic
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    color: "#555",
                    lineHeight: 1.7,
                    fontWeight: 300,
                    marginBottom: 28,
                  }}
                >
                  The session runs through Non Magic. All remote participants
                  must have the app installed and a free account before
                  April 18.
                </p>

                {/* Download badges */}
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {[
                    { label: "App Store — iOS", sub: "iPhone & iPad" },
                    { label: "Google Play — Android", sub: "All Android devices" },
                  ].map((badge) => (
                    <a
                      key={badge.label}
                      href="https://nonmagic.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 16px",
                        border: "1px solid #1a1a1a",
                        textDecoration: "none",
                        transition: "border-color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.borderColor = "#333")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.borderColor = "#1a1a1a")
                      }
                    >
                      <div>
                        <div
                          style={{
                            fontSize: 11,
                            color: "#ccc",
                            letterSpacing: "0.08em",
                            marginBottom: 2,
                          }}
                        >
                          {badge.label}
                        </div>
                        <div style={{ fontSize: 10, color: "#444" }}>
                          {badge.sub}
                        </div>
                      </div>
                      <span style={{ color: "#333", fontSize: 16 }}>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ─── Registration form ────────────────────────────────────────── */}
          <section
            id="register"
            style={{
              borderTop: "1px solid #0f0f0f",
              padding: "clamp(60px,8vw,96px) 24px",
            }}
          >
            <div
              style={{
                maxWidth: 440,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: 9,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: 12,
                }}
              >
                Register
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                  color: "#fff",
                }}
              >
                Save your spot
              </h2>
              <p
                style={{
                  fontSize: 13,
                  color: "#555",
                  marginBottom: 36,
                  lineHeight: 1.6,
                }}
              >
                Free for everyone. NYC logistics sent to local registrants.
              </p>
              <RegistrationForm />
            </div>
          </section>

          {/* ─── FAQ ──────────────────────────────────────────────────────── */}
          <section
            style={{
              borderTop: "1px solid #0f0f0f",
              padding: "clamp(48px,6vw,72px) 24px",
            }}
          >
            <div
              style={{
                maxWidth: 800,
                margin: "0 auto",
              }}
            >
              <p
                style={{
                  fontSize: 9,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: 40,
                  textAlign: "center",
                }}
              >
                Questions
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 0,
                }}
              >
                {[
                  {
                    q: "Do I need meditation experience?",
                    a: "No. Non Magic guides you through the session. You just need to show up.",
                  },
                  {
                    q: "What timezone do I use?",
                    a: "5:00 AM Eastern (EST). That's 2:00 AM PST, 10:00 AM GMT, 11:00 AM CET.",
                  },
                  {
                    q: "Is Non Magic free?",
                    a: "The app has a free tier that includes access to the April 18 global session.",
                  },
                  {
                    q: "What if I can't make 5am?",
                    a: "Register anyway. We'll share the session recording so you can practice on your schedule.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.q}
                    style={{
                      borderTop: "1px solid #111",
                      borderRight: i % 2 === 0 ? "1px solid #111" : "none",
                      padding: "28px 24px",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: 13,
                        fontWeight: 300,
                        color: "#ccc",
                        marginBottom: 10,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.q}
                    </h4>
                    <p
                      style={{
                        fontSize: 12,
                        color: "#444",
                        lineHeight: 1.7,
                        fontWeight: 300,
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
