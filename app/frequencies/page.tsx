'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { frequencies } from '@/data/frequencies';
import type { FrequencyData } from '@/data/frequencies';

// ─── Typewriter Hook ─────────────────────────────────────────────────────────

function useTypewriter(text: string, speed = 16) {
  const [out, setOut] = useState('');
  useEffect(() => {
    setOut('');
    if (!text) return;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(iv);
    }, speed);
    return () => clearInterval(iv);
  }, [text]);
  return out;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const CONNECTIONS: [string, string][] = [
  ['gamma-40hz', 'beta-20hz'],
  ['beta-20hz', 'alpha-10hz'],
  ['alpha-10hz', 'theta-6hz'],
  ['theta-6hz', 'delta-2hz'],
  ['alpha-10hz', 'schumann-7-83hz'],
  ['theta-6hz', 'schumann-7-83hz'],
  ['delta-2hz', 'schumann-7-83hz'],
  ['528hz', '432hz'],
  ['528hz', '396hz'],
  ['528hz', '639hz'],
  ['396hz', '174hz'],
  ['432hz', '174hz'],
];

const BRAIN_REGIONS: Record<string, { cx: number; cy: number; rx: number; ry: number }[]> = {
  Gamma:  [{ cx: 76, cy: 40, rx: 26, ry: 14 }, { cx: 124, cy: 40, rx: 26, ry: 14 }],
  Beta:   [{ cx: 74, cy: 60, rx: 24, ry: 15 }, { cx: 126, cy: 60, rx: 24, ry: 15 }],
  Alpha:  [{ cx: 100, cy: 60, rx: 42, ry: 17 }],
  Theta:  [{ cx: 40, cy: 90, rx: 16, ry: 24 }, { cx: 160, cy: 90, rx: 16, ry: 24 }],
  Delta:  [{ cx: 100, cy: 85, rx: 68, ry: 58 }],
  Earth:  [{ cx: 100, cy: 75, rx: 60, ry: 50 }],
  Solo:   [{ cx: 100, cy: 95, rx: 40, ry: 30 }],
};

// ─── Brain SVG ────────────────────────────────────────────────────────────────

function BrainSVG({ category, active }: { category: string | null; active: boolean }) {
  const regions = category ? (BRAIN_REGIONS[category] ?? BRAIN_REGIONS.Solo) : [];
  return (
    <svg viewBox="0 0 200 165" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {active && <ellipse cx="100" cy="82" rx="82" ry="72" fill="#F5841F" opacity="0.025" />}
      {/* Left hemisphere */}
      <path d="M100,16 C72,16 44,33 31,62 C19,87 25,114 40,130 C53,144 71,151 85,151 L100,151"
        stroke="#2a2a2a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Right hemisphere */}
      <path d="M100,16 C128,16 156,33 169,62 C181,87 175,114 160,130 C147,144 129,151 115,151 L100,151"
        stroke="#2a2a2a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Longitudinal fissure */}
      <line x1="100" y1="16" x2="100" y2="151" stroke="#1e1e1e" strokeWidth="0.8" />
      {/* Sulci L */}
      <path d="M58,29 Q50,52 44,70" stroke="#1e1e1e" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M36,84 Q33,100 37,118" stroke="#1e1e1e" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M64,139 Q76,147 89,150" stroke="#1e1e1e" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      {/* Sulci R */}
      <path d="M142,29 Q150,52 156,70" stroke="#1e1e1e" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M164,84 Q167,100 163,118" stroke="#1e1e1e" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M136,139 Q124,147 111,150" stroke="#1e1e1e" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      {/* Central sulcus */}
      <path d="M84,19 Q80,42 78,63" stroke="#1e1e1e" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M116,19 Q120,42 122,63" stroke="#1e1e1e" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      {/* Highlighted regions */}
      {regions.map((r, i) => (
        <ellipse key={i} cx={r.cx} cy={r.cy} rx={r.rx} ry={r.ry} fill="#F5841F"
          style={{ opacity: active ? 0.28 : 0, animation: active ? 'brainPulse 0.9s ease-in-out infinite' : 'none' }}
        />
      ))}
      {/* Center dot */}
      <circle cx="100" cy="82" r="3.5" fill="#F5841F"
        style={{ opacity: active ? 0.75 : 0.08, animation: active ? 'brainPulse 0.7s ease-in-out infinite' : 'none' }}
      />
    </svg>
  );
}

// ─── Waveform Background ──────────────────────────────────────────────────────

function WaveformBg({ hz }: { hz: number }) {
  const cycles = 14;
  const cycleW = 108;
  const pathW = cycles * cycleW;
  const H = 80;
  const A = 14;
  const pts = cycles * 40;

  let d = `M 0 ${H / 2}`;
  for (let i = 1; i <= pts; i++) {
    const t = i / pts;
    d += ` L ${(t * pathW).toFixed(1)} ${(H / 2 - A * Math.sin(t * 2 * Math.PI * cycles)).toFixed(1)}`;
  }

  const dur = hz > 100 ? '0.7s' : hz > 20 ? '2s' : hz > 7 ? '4.5s' : hz > 2 ? '8s' : '14s';

  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: H, overflow: 'hidden', pointerEvents: 'none', opacity: 0.38 }}>
      <svg viewBox={`0 0 ${pathW} ${H}`} style={{ width: '200%', height: '100%', display: 'block' }} preserveAspectRatio="none">
        <path d={d} stroke="#F5841F" strokeWidth="1.5" fill="none"
          style={{ animation: `wavePan ${dur} linear infinite` }} />
        <path d={d} stroke="#F5841F" strokeWidth="0.6" fill="none" opacity="0.35"
          style={{ animation: `wavePan ${dur} linear infinite`, animationDelay: `-${parseFloat(dur) / 2}s` }} />
      </svg>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FrequenciesLibraryPage() {
  const [selected, setSelected] = useState<FrequencyData | null>(null);
  const [orbitAngle, setOrbitAngle] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const startRef = useRef<number>(performance.now());
  const pausedMsRef = useRef<number>(0);
  const [dims, setDims] = useState({ w: 680, h: 680 });

  // Responsive sizing
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const w = Math.min(containerRef.current.offsetWidth, 700);
      setDims({ w, h: Math.max(w * 0.92, 460) });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Orbital RAF — only runs when nothing is selected
  useEffect(() => {
    if (selected) return;
    const animate = (ts: number) => {
      const elapsed = ts - startRef.current + pausedMsRef.current;
      setOrbitAngle((elapsed / 64000) * 2 * Math.PI);
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [selected]);

  const cx = dims.w / 2;
  const cy = dims.h / 2;
  const orbRadius = Math.min(cx * 0.72, cy * 0.72, 260);

  // Derive positions from current orbit angle
  const positions = frequencies.map((_, i) => {
    const base = (i / frequencies.length) * 2 * Math.PI - Math.PI / 2;
    return {
      x: cx + orbRadius * Math.cos(base + orbitAngle),
      y: cy + orbRadius * Math.sin(base + orbitAngle),
    };
  });

  const handleSelect = useCallback((freq: FrequencyData) => {
    if (selected?.slug === freq.slug) {
      // Resume from current paused position
      startRef.current = performance.now();
      setSelected(null);
    } else {
      pausedMsRef.current += performance.now() - startRef.current;
      setSelected(freq);
    }
  }, [selected]);

  const connectedSlugs = selected
    ? CONNECTIONS
        .filter(([a, b]) => a === selected.slug || b === selected.slug)
        .map(([a, b]) => (a === selected.slug ? b : a))
    : [];

  const hzNum = selected ? parseFloat(selected.hz) : 0;

  // Visual pulse duration (subtly tied to actual Hz, capped for safety at 6Hz visual)
  const safeHz = Math.min(hzNum, 6);
  const detailPulseDur = hzNum > 0 ? `${(1 / safeHz).toFixed(3)}s` : '1s';

  const brainCategory = selected
    ? selected.brainwaveCategory
      ?? (parseFloat(selected.hz) < 20 ? 'Earth' : 'Solo')
    : null;

  const cite0 = selected?.sections[0]?.citations?.[0];
  const citeStr = cite0
    ? `${cite0.author} (${cite0.year}). "${cite0.title}." ${cite0.publication}.`
    : '';
  const typedCite = useTypewriter(citeStr, 15);

  // Per-card orbital pulse duration
  const cardPulseDur = (hz: number) => {
    const cap = Math.min(hz, 6);
    return cap > 0 ? `${(1 / cap).toFixed(3)}s` : '1s';
  };

  return (
    <>
      <style>{`
        @keyframes brainPulse {
          0%, 100% { opacity: 0.28; }
          50% { opacity: 0.62; }
        }
        @keyframes wavePan {
          to { transform: translateX(-50%); }
        }
        @keyframes hzGlow {
          0%, 100% { opacity: 1; text-shadow: 0 0 12px rgba(245,132,31,0.3); }
          50% { opacity: 0.72; text-shadow: 0 0 28px rgba(245,132,31,0.7); }
        }
        @keyframes cardSelected {
          0%, 100% { box-shadow: 0 0 14px rgba(245,132,31,0.35), 0 0 0 1px rgba(245,132,31,0.55); }
          50% { box-shadow: 0 0 36px rgba(245,132,31,0.65), 0 0 0 1px rgba(245,132,31,0.9); }
        }
        @keyframes lineFlow {
          from { stroke-dashoffset: 12; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes detailReveal {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbitPulse {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.22; }
        }
        @keyframes cardSubtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.78; }
        }
      `}</style>

      <div className="min-h-screen bg-[#060604] overflow-x-hidden">

        {/* Page header */}
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#444444] mb-3">
            Non Magic / Science Library
          </p>
          <h1 className="text-3xl md:text-5xl font-light text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
            Frequency Science
          </h1>
          <p className="text-[#555555] text-sm max-w-md leading-relaxed">
            {frequencies.length} frequencies. Brainwaves orbit linked. Solfeggio tones cluster.
            Click any frequency to enter the research.
          </p>
        </div>

        {/* ── Orbital visualization ── */}
        <div ref={containerRef} className="relative mx-auto overflow-hidden" style={{ width: '100%', maxWidth: 700, height: dims.h }}>

          {/* Waveform */}
          <WaveformBg hz={hzNum || 8} />

          {/* Orbit ring */}
          <div className="absolute rounded-full pointer-events-none" style={{
            left: cx - orbRadius, top: cy - orbRadius,
            width: orbRadius * 2, height: orbRadius * 2,
            border: '1px solid #181818',
            borderRadius: '50%',
            animation: 'orbitPulse 5s ease-in-out infinite',
          }} />

          {/* Connecting lines SVG */}
          <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
            {CONNECTIONS.map(([a, b], i) => {
              const idxA = frequencies.findIndex(f => f.slug === a);
              const idxB = frequencies.findIndex(f => f.slug === b);
              if (idxA < 0 || idxB < 0) return null;
              const pA = positions[idxA];
              const pB = positions[idxB];
              const isActive = !!selected && (a === selected.slug || b === selected.slug);
              return (
                <line key={i}
                  x1={pA.x} y1={pA.y} x2={pB.x} y2={pB.y}
                  stroke={isActive ? '#F5841F' : '#1c1c1c'}
                  strokeWidth={isActive ? 1.2 : 0.5}
                  strokeDasharray={isActive ? '4 3' : '1 8'}
                  opacity={selected && !isActive ? 0.04 : isActive ? 0.75 : 0.45}
                  style={isActive ? { animation: 'lineFlow 0.7s linear infinite' } : undefined}
                />
              );
            })}
          </svg>

          {/* Brain */}
          <div className="absolute" style={{ left: cx - 88, top: cy - 72, width: 176, height: 144 }}>
            <BrainSVG category={brainCategory} active={!!selected} />
          </div>

          {/* Frequency cards */}
          {frequencies.map((freq, i) => {
            const pos = positions[i];
            const isSelected = selected?.slug === freq.slug;
            const isDimmed = !!selected && !isSelected;
            const isConnected = connectedSlugs.includes(freq.slug);
            const cardX = isSelected ? cx : pos.x;
            const cardY = isSelected ? cy : pos.y;
            const hz = parseFloat(freq.hz);
            const pDur = cardPulseDur(hz);
            const label = freq.brainwaveCategory ?? (hz < 20 ? 'Earth' : 'Solfeggio');

            return (
              <div key={freq.slug}
                onClick={() => handleSelect(freq)}
                className="absolute cursor-pointer select-none"
                style={{
                  left: 0, top: 0,
                  transform: `translate(${cardX}px, ${cardY}px) translate(-50%, -50%)`,
                  transition: 'transform 0.65s cubic-bezier(0.23,1,0.32,1), opacity 0.4s',
                  opacity: isDimmed && !isConnected ? 0.1 : isDimmed && isConnected ? 0.5 : 1,
                  zIndex: isSelected ? 30 : isConnected ? 12 : 10,
                }}
              >
                <div style={{
                  background: '#080806',
                  border: `1px solid ${isSelected ? '#F5841F' : isConnected ? 'rgba(245,132,31,0.22)' : '#1c1c1c'}`,
                  padding: isSelected ? '11px 16px' : '7px 10px',
                  textAlign: 'center',
                  minWidth: isSelected ? 116 : 78,
                  animation: isSelected ? 'cardSelected 1.1s ease-in-out infinite' : 'none',
                  transition: 'padding 0.5s, min-width 0.5s, border-color 0.3s',
                }}>
                  <div style={{
                    fontSize: isSelected ? 34 : 21,
                    color: '#F5841F',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    animation: `${isSelected ? 'hzGlow' : 'cardSubtle'} ${pDur} ease-in-out infinite`,
                    transition: 'font-size 0.4s',
                  }}>
                    {freq.hz}
                  </div>
                  <div style={{ fontSize: 7, color: '#4a4a4a', marginTop: 2, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                    Hz
                  </div>
                  <div style={{
                    fontSize: isSelected ? 9 : 8,
                    color: isSelected ? '#888888' : '#2e2e2e',
                    marginTop: isSelected ? 5 : 2,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s, font-size 0.4s',
                  }}>
                    {label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No-selection hint */}
        {!selected && (
          <p className="text-center text-[9px] tracking-[0.25em] uppercase text-[#252525] py-6">
            Click any frequency to enter the research
          </p>
        )}

        {/* ── Detail panel ── */}
        {selected && (
          <div className="max-w-3xl mx-auto px-6 py-0 pb-28" style={{ animation: 'detailReveal 0.45s ease-out forwards' }}>

            {/* Hz + name */}
            <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-7 pt-10 mb-5 border-t border-[#101010]">
              <div style={{
                fontSize: 'clamp(64px, 14vw, 100px)',
                lineHeight: 1,
                color: '#F5841F',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                animation: `hzGlow ${detailPulseDur} ease-in-out infinite`,
              }}>
                {selected.hz}
              </div>
              <div className="pb-2">
                <div className="text-white text-2xl md:text-3xl font-light mb-1" style={{ letterSpacing: '-0.02em' }}>
                  {selected.name}
                </div>
                <div className="text-[#3a3a3a] text-[10px] tracking-[0.22em] uppercase">
                  {selected.range}
                </div>
              </div>
            </div>

            <p className="text-[#666666] text-sm leading-relaxed italic mb-8 max-w-xl">
              {selected.tagline}
            </p>

            {/* Citation typewriter */}
            {citeStr && (
              <div className="bg-[#0b0b09] border border-[#181818] p-6 mb-8">
                <div className="text-[9px] tracking-[0.25em] uppercase text-[#F5841F] mb-3 opacity-80">
                  Primary Research Citation
                </div>
                <p className="text-[#888888] text-sm leading-relaxed font-mono" style={{ minHeight: 56 }}>
                  {typedCite}
                  <span style={{ color: '#F5841F', animation: 'cardSubtle 0.8s step-end infinite' }}>|</span>
                </p>
              </div>
            )}

            {/* First section */}
            <div className="mb-8">
              {selected.sections[0]?.title && (
                <h3 className="text-[#cccccc] text-sm font-light mb-3 tracking-wide">
                  {selected.sections[0].title}
                </h3>
              )}
              <p className="text-[#5a5a5a] text-sm leading-relaxed">
                {selected.sections[0]?.content.slice(0, 400)}
                <span className="text-[#2e2e2e]">…</span>
              </p>
              <a href={`/frequencies/${selected.slug}`}
                className="inline-block mt-4 text-[10px] tracking-[0.15em] uppercase text-[#F5841F] hover:text-white transition-colors">
                Read Full Research →
              </a>
            </div>

            {/* Use cases */}
            {selected.useCases.length > 0 && (
              <div className="mb-10">
                <div className="text-[9px] tracking-[0.22em] uppercase text-[#2e2e2e] mb-3">Best For</div>
                <div className="flex flex-wrap gap-2">
                  {selected.useCases.map((u, i) => (
                    <span key={i} className="text-[10px] text-[#585858] border border-[#1c1c1c] px-2.5 py-1">
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-5 border-t border-[#101010] pt-8">
              <a
                href="https://apps.apple.com/app/non-magic"
                className="inline-flex items-center gap-2 bg-[#F5841F] text-black text-[11px] font-medium tracking-[0.1em] uppercase px-7 py-3.5 hover:bg-white transition-colors"
              >
                Start {selected.nonMagicSession} Session
                <span>→</span>
              </a>
              <button
                onClick={() => {
                  startRef.current = performance.now();
                  setSelected(null);
                }}
                className="text-[9px] tracking-[0.2em] uppercase text-[#333333] hover:text-white transition-colors"
              >
                ← Back to Orbit
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
