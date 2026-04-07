'use client';

import { useEffect, useRef, useState } from 'react';
import EvidenceMap from '@/src/components/EvidenceMap';

export default function EvidencePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 960, height: 600 });

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setDims({
          width: containerRef.current.offsetWidth,
          height: Math.max(520, window.innerHeight - 220),
        });
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className="min-h-screen bg-[#050504]">

      {/* Page header */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
          Non Magic / Evidence
        </p>
        <h1
          className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '-0.02em' }}
        >
          Evidence Map
        </h1>
        <p className="text-[#888888] text-sm leading-relaxed max-w-xl mb-6">
          Every wellness claim Non Magic references, mapped by evidence quality.
          Drag nodes to rearrange. Click any claim for citations and study counts.
          Zoom and pan to explore connections.
        </p>

        {/* Inline tier legend */}
        <div className="flex items-center gap-6 flex-wrap">
          {[
            { color: '#4CBB17', label: 'Strong Evidence' },
            { color: '#F5841F', label: 'Preliminary' },
            { color: '#2D4E9E', label: 'Plausible, Weak' },
            { color: '#2A2A28', label: 'Not Supported', border: '#555555' },
          ].map(({ color, label, border }) => (
            <div key={label} className="flex items-center gap-2">
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: color,
                  border: border ? `1px solid ${border}` : undefined,
                  flexShrink: 0,
                }}
              />
              <span
                className="text-[9px] tracking-[0.15em] uppercase"
                style={{ color: border ?? color }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Force graph — full width, measured container */}
      <div ref={containerRef} className="w-full">
        <EvidenceMap width={dims.width} height={dims.height} />
      </div>

      {/* Disclaimer */}
      <div className="max-w-6xl mx-auto px-6 py-12 border-t border-[#111111] mt-4">
        <p className="text-[10px] tracking-[0.12em] uppercase text-[#333333] max-w-2xl leading-loose">
          Evidence tiers assigned by the Non Magic editorial team based on study quality,
          replication rate, and sample size. Updated as new research is published.
          Not medical advice.
        </p>
      </div>

    </div>
  );
}
