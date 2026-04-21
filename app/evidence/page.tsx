'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

// ─── Types ────────────────────────────────────────────────────────────────────

interface NodeDatum extends d3.SimulationNodeDatum {
  id: string;
  label: string;
  tier: 'strong' | 'moderate' | 'weak' | 'none';
  category: string;
  citation: string;
  summary: string;
  studies: number;
}

interface LinkDatum extends d3.SimulationLinkDatum<NodeDatum> {
  value: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NODES: NodeDatum[] = [
  { id: '40hz',          label: '40Hz Gamma',        tier: 'strong',   category: 'Frequency', citation: 'Iaccarino et al., Nature, 2016 + MIT replication 2021',       summary: '~50% amyloid reduction in mice. MIT replicated independently 2019 and 2021. Human trials ongoing. The strongest single finding in the NM frequency library. Non Magic 40Hz sessions directly target this pathway.',                                                                                                   studies: 14 },
  { id: 'delta',         label: 'Delta Sleep',        tier: 'strong',   category: 'Recovery',  citation: 'Walker, 2017 · Tononi & Cirelli, 2014',                       summary: 'Deep slow-wave sleep (0.5–4Hz) is essential for immune function, memory consolidation, glymphatic clearance, and growth hormone release. Among the most replicated findings in sleep science.',                                                                                                                        studies: 41 },
  { id: 'cold-exposure', label: 'Cold Exposure',      tier: 'strong',   category: 'Recovery',  citation: 'Kox et al., PNAS, 2014 · N=24 · Søberg et al., 2021',         summary: 'Deliberate cold water immersion (11–15°C, 11 min/week) activates brown adipose tissue and raises norepinephrine 300% and dopamine 250%. Voluntary immune modulation confirmed via Kox 2014 Wim Hof protocol RCT.',                                                                                              studies: 19 },
  { id: 'exercise-bdnf', label: 'Exercise & BDNF',    tier: 'strong',   category: 'Cognition', citation: 'Cotman et al., Trends in Neurosciences, 2002 + meta-analysis 2018', summary: 'Aerobic exercise is the most reliable known way to raise brain-derived neurotrophic factor. HIIT produces the largest acute spikes. Effect replicated across hundreds of studies spanning 20+ years.',                                                                                                             studies: 67 },
  { id: 'alpha',         label: 'Alpha Waves & Calm', tier: 'strong',   category: 'Stress',    citation: 'Benson, 1975 · Lazar et al., NeuroReport, 2005',               summary: 'Alpha EEG (8–12Hz) is the signature of the relaxation response. Meditation reliably increases alpha power. Decades of research confirm cortisol reduction and mood improvement from regular alpha-state practice.',                                                                                            studies: 52 },
  { id: 'schumann',      label: '7.83Hz Schumann',    tier: 'moderate', category: 'Frequency', citation: 'Pobachenko et al., Biophysics, 2006 · N=48',                   summary: 'Correlation between Schumann resonance and human alpha EEG documented in observational study. Mechanism unconfirmed — may be coincidence of similar frequencies rather than causal entrainment. Needs RCT.',                                                                                                      studies:  3 },
  { id: 'theta-binaural',label: 'Theta Binaural',     tier: 'moderate', category: 'Cognition', citation: 'Kraus & Porubanova, PeerJ, 2015 · Colzato et al., 2017',       summary: 'Theta binaural beats (4–7Hz) showed working memory and attention improvement in controlled conditions. Requires stereo headphones for binaural effect. Effect sizes moderate, replication ongoing.',                                                                                                                studies:  7 },
  { id: 'magnesium',     label: 'Magnesium & Sleep',  tier: 'moderate', category: 'Recovery',  citation: 'Abbasi et al., J Research Med Sci, 2012 · N=46',               summary: 'Magnesium glycinate supplementation improved sleep efficiency, sleep time, and insomnia severity in elderly with low magnesium. Effect size moderate. Most meaningful for deficient individuals (common in Western diet).',                                                                                       studies: 11 },
  { id: 'ashwagandha',   label: 'Ashwagandha',        tier: 'moderate', category: 'Stress',    citation: 'Chandrasekhar et al., Indian J Psych Medicine, 2012 · N=64',   summary: 'KSM-66 ashwagandha extract (300mg 2×/day) reduced serum cortisol by 27% and improved all stress scale scores vs placebo over 60 days. Well-controlled RCT. Needs larger multi-site replication.',                                                                                                              studies:  8 },
  { id: 'earthing',      label: 'Earthing',           tier: 'weak',     category: 'Recovery',  citation: 'Chevalier et al., J Environ Public Health, 2012 (industry-funded)', summary: 'Biologically plausible mechanism (free electron transfer from earth surface). No independent replication at scale. All primary studies are from researchers with financial ties to earthing product companies.',                                                                                              studies:  4 },
  { id: 'red-light',     label: 'Red Light Therapy',  tier: 'weak',     category: 'Recovery',  citation: 'Hamblin et al., Photobiomodulation reviews, 2017',             summary: 'Photobiomodulation via 630–850nm light activates cytochrome c oxidase in mitochondria (in vitro evidence solid). Systemic in vivo effects in healthy humans less established. Protocol variance very high across studies.',                                                                                      studies: 12 },
  { id: 'dna-528hz',     label: '528Hz "DNA Repair"', tier: 'none',     category: 'Frequency', citation: 'No peer-reviewed evidence',                                    summary: 'Claim originated in non-scientific publications with no proposed biological mechanism. No studies exist in PubMed or any indexed scientific journal. The "Solfeggio frequency" framework has no scientific basis.',                                                                                             studies:  0 },
  { id: 'schumann-rising',label:'Schumann "Rising"',  tier: 'none',     category: 'Frequency', citation: 'Misreading of HeartMath amplitude data',                       summary: 'The claim that Schumann resonances are increasing conflates amplitude spikes (which do occur) with frequency change. The base frequency (~7.83Hz) is determined by Earth\'s circumference and electromagnetic properties — it does not meaningfully change.',                                            studies:  0 },
];

const LINKS: LinkDatum[] = [
  { source: '40hz',          target: 'alpha',           value: 3 },
  { source: '40hz',          target: 'delta',           value: 2 },
  { source: 'schumann',      target: 'alpha',           value: 2 },
  { source: 'schumann',      target: 'schumann-rising', value: 1 },
  { source: 'cold-exposure', target: 'exercise-bdnf',   value: 2 },
  { source: 'exercise-bdnf', target: 'alpha',           value: 2 },
  { source: 'theta-binaural',target: 'schumann',        value: 1 },
  { source: 'magnesium',     target: 'delta',           value: 2 },
  { source: 'ashwagandha',   target: 'alpha',           value: 2 },
  { source: 'earthing',      target: 'schumann',        value: 1 },
  { source: 'earthing',      target: 'schumann-rising', value: 1 },
  { source: 'red-light',     target: 'cold-exposure',   value: 1 },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const TIER_RADIUS: Record<string, number> = { strong: 18, moderate: 13, weak: 10, none: 8 };
const MONO  = "'Space Mono', 'Courier New', monospace";
const SERIF = "'Playfair Display', Georgia, serif";
const KELLY = '#4CBB17';
const ORANGE = '#F5841F';
const TIER_LABEL: Record<string, string> = { strong: 'Strong', moderate: 'Preliminary', weak: 'Plausible / weak', none: 'Not supported' };

function nodeColor(d: NodeDatum) {
  if (d.category === 'Frequency') return ORANGE;
  if (d.category === 'Recovery')  return KELLY;
  return '#F5F0E8';
}

// ─────────────────────────────────────────────────────────────────────────────

export default function EvidencePage() {
  const svgRef       = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [selected,     setSelected]     = useState<NodeDatum | null>(null);
  const [panelOpen,    setPanelOpen]     = useState(false);
  const [displayCount, setDisplayCount]  = useState(0);

  // Count-up when panel opens
  useEffect(() => {
    if (!selected || !panelOpen) { setDisplayCount(0); return; }
    const target = selected.studies;
    if (target === 0) { setDisplayCount(0); return; }
    setDisplayCount(0);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 28));
    const id = setInterval(() => {
      current = Math.min(current + step, target);
      setDisplayCount(current);
      if (current >= target) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, [selected?.id, panelOpen]);

  // ─── D3 ──────────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const W = containerRef.current.offsetWidth  || window.innerWidth;
    const H = containerRef.current.offsetHeight || window.innerHeight - 56;

    const svg = d3.select<SVGSVGElement, unknown>(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('width', W).attr('height', H);

    // ── Defs ─────────────────────────────────────────────────────────────────
    const defs = svg.append('defs');

    // Kelly-green glow (hover)
    const glowF = defs.append('filter').attr('id', 'ev-glow')
      .attr('x', '-80%').attr('y', '-80%').attr('width', '260%').attr('height', '260%');
    glowF.append('feGaussianBlur').attr('in', 'SourceGraphic').attr('stdDeviation', 7).attr('result', 'blur');
    glowF.append('feColorMatrix').attr('in', 'blur').attr('type', 'matrix')
      .attr('values', '0 0 0 0 0.298  0 0 0 0 0.733  0 0 0 0 0.09  0 0 0 1 0').attr('result', 'tinted');
    const gm = glowF.append('feMerge');
    gm.append('feMergeNode').attr('in', 'tinted');
    gm.append('feMergeNode').attr('in', 'SourceGraphic');

    // ── Graph group (zoom target) ─────────────────────────────────────────────
    const g = svg.append('g').attr('class', 'ev-root');
    svg.call(
      d3.zoom<SVGSVGElement, unknown>()
        .scaleExtent([0.25, 4])
        .on('zoom', (e) => g.attr('transform', e.transform))
    );

    // ── Node data — all explode from center ───────────────────────────────────
    const nodeData: NodeDatum[] = NODES.map((n, i) => {
      const angle = (i / NODES.length) * 2 * Math.PI + Math.random() * 0.4;
      const speed = 18 + Math.random() * 28;
      return {
        ...n,
        x:  W / 2 + (Math.random() - 0.5) * 3,
        y:  H / 2 + (Math.random() - 0.5) * 3,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
      };
    });
    const linkData: LinkDatum[] = LINKS.map(l => ({ ...l }));

    // ── Simulation ────────────────────────────────────────────────────────────
    const sim = d3.forceSimulation<NodeDatum, LinkDatum>(nodeData)
      .force('link',    d3.forceLink<NodeDatum, LinkDatum>(linkData).id(d => d.id).distance(145).strength(0.5))
      .force('charge',  d3.forceManyBody<NodeDatum>().strength(-370))
      .force('center',  d3.forceCenter(W / 2, H / 2))
      .force('collide', d3.forceCollide<NodeDatum>(d => TIER_RADIUS[d.tier] + 26))
      .alphaDecay(0.026);

    // ── Links ─────────────────────────────────────────────────────────────────
    const linkSel = g.append('g').attr('class', 'ev-links')
      .selectAll<SVGLineElement, LinkDatum>('line')
      .data(linkData)
      .join('line')
      .attr('class', 'ev-link')
      .attr('stroke', '#252520')
      .attr('stroke-width', d => 0.5 + d.value * 0.45)
      .attr('stroke-dasharray', '800 0')
      .attr('stroke-dashoffset', '800')
      .attr('opacity', 0);

    // Lines draw themselves after nodes explode out (~800ms)
    linkSel.each(function (_, i) {
      d3.select(this)
        .transition().delay(820 + i * 55).duration(0).attr('opacity', 0.45)
        .transition().duration(480 + i * 18).ease(d3.easeLinear).attr('stroke-dashoffset', '0');
    });

    // ── Node groups ───────────────────────────────────────────────────────────
    const nodeGrp = g.append('g').attr('class', 'ev-nodes')
      .selectAll<SVGGElement, NodeDatum>('g')
      .data(nodeData)
      .join('g')
      .attr('class', 'ev-node')
      .style('cursor', 'pointer')
      .call(
        d3.drag<SVGGElement, NodeDatum>()
          .on('start', (event, d) => { if (!event.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
          .on('drag',  (event, d) => { d.fx = event.x; d.fy = event.y; })
          .on('end',   (event, d) => { if (!event.active) sim.alphaTarget(0); d.fx = null; d.fy = null; })
      );

    // Inner group for CSS scale transform
    const scaleGrp = nodeGrp.append('g').attr('class', 'ev-scale');

    // Glow halo (hover reveal)
    scaleGrp.append('circle').attr('class', 'ev-halo')
      .attr('r', d => TIER_RADIUS[d.tier] + 14)
      .attr('fill', KELLY)
      .attr('filter', 'url(#ev-glow)')
      .attr('opacity', 0)
      .attr('pointer-events', 'none');

    // Orbit ring
    scaleGrp.append('circle').attr('class', 'ev-orbit')
      .attr('r', d => TIER_RADIUS[d.tier] + 9)
      .attr('fill', 'none')
      .attr('stroke', d => nodeColor(d))
      .attr('stroke-width', 0.6)
      .attr('opacity', 0.14)
      .attr('pointer-events', 'none');

    // Main dot — springs in from r=0 with stagger
    scaleGrp.append('circle').attr('class', 'ev-dot')
      .attr('r', 0)
      .attr('fill', d => nodeColor(d))
      .attr('stroke', '#0C0C0A')
      .attr('stroke-width', 1.5);

    // Label
    scaleGrp.append('text').attr('class', 'ev-label')
      .text(d => d.label.toUpperCase())
      .attr('text-anchor', 'middle')
      .attr('dy', d => TIER_RADIUS[d.tier] + 18)
      .attr('fill', d => nodeColor(d))
      .attr('font-size', 7.5)
      .attr('font-family', MONO)
      .attr('letter-spacing', 1.8)
      .attr('opacity', 0)
      .attr('pointer-events', 'none');

    // ── Entry: nodes appear one-by-one with 50ms stagger ──────────────────────
    nodeGrp.each(function (d, i) {
      const el = d3.select<SVGGElement, NodeDatum>(this);
      el.select<SVGCircleElement>('.ev-dot')
        .transition().delay(i * 50).duration(520).ease(d3.easeBackOut.overshoot(1.9))
        .attr('r', TIER_RADIUS[d.tier]);
      el.select<SVGTextElement>('.ev-label')
        .transition().delay(80 + i * 50).duration(380)
        .attr('opacity', 0.72);
    });

    // ── Ambient pulse — breathes asynchronously by index ──────────────────────
    function breathe(el: d3.Selection<SVGGElement, NodeDatum, null, unknown>, d: NodeDatum) {
      const base = TIER_RADIUS[d.tier];
      const cycle = () => {
        el.select<SVGCircleElement>('.ev-dot')
          .transition().duration(1850 + Math.random() * 700).ease(d3.easeSinInOut).attr('r', base * 1.11)
          .transition().duration(1850 + Math.random() * 700).ease(d3.easeSinInOut).attr('r', base)
          .on('end', cycle);
      };
      cycle();
    }

    nodeGrp.each(function (d, i) {
      setTimeout(() => breathe(d3.select<SVGGElement, NodeDatum>(this as SVGGElement), d), 1600 + i * 160);
    });

    // ── Hover ─────────────────────────────────────────────────────────────────
    nodeGrp
      .on('mouseenter', function (_, d) {
        const el = d3.select<SVGGElement, NodeDatum>(this);
        el.raise();

        // Kelly green glow
        el.select<SVGCircleElement>('.ev-halo')
          .transition().duration(150).attr('opacity', 0.28);

        // Scale group
        (el.select('.ev-scale') as d3.Selection<SVGGElement, NodeDatum, null, unknown>)
          .style('transform', 'scale(1.15)')
          .style('transform-box', 'fill-box')
          .style('transform-origin', 'center');

        // Label brightens to white
        el.select<SVGTextElement>('.ev-label')
          .transition().duration(150).attr('opacity', 1).attr('fill', '#F5F0E8');

        // Connected lines brighten
        linkSel
          .filter(l => (l.source as NodeDatum).id === d.id || (l.target as NodeDatum).id === d.id)
          .transition().duration(150).attr('stroke', '#888880').attr('opacity', 0.95);
      })
      .on('mouseleave', function (_, d) {
        const el = d3.select<SVGGElement, NodeDatum>(this);

        el.select<SVGCircleElement>('.ev-halo')
          .transition().duration(300).attr('opacity', 0);

        (el.select('.ev-scale') as d3.Selection<SVGGElement, NodeDatum, null, unknown>)
          .style('transform', 'scale(1)')
          .style('transform-box', 'fill-box')
          .style('transform-origin', 'center');

        // Restart breathing (hover interrupted D3 transitions)
        el.select<SVGCircleElement>('.ev-dot').interrupt();
        el.select<SVGCircleElement>('.ev-dot')
          .transition().duration(260).attr('r', TIER_RADIUS[d.tier])
          .on('end', () => breathe(el, d));

        el.select<SVGTextElement>('.ev-label')
          .transition().duration(300).attr('opacity', 0.72).attr('fill', nodeColor(d));

        // Restore non-selected links
        linkSel
          .filter(l => (l.source as NodeDatum).id === d.id || (l.target as NodeDatum).id === d.id)
          .transition().duration(300).attr('stroke', '#252520').attr('opacity', 0.45);
      });

    // ── Click ──────────────────────────────────────────────────────────────────
    nodeGrp.on('click', function (event, d) {
      event.stopPropagation();
      setSelected({ ...d });
      setPanelOpen(true);

      // Reset all links
      linkSel.interrupt()
        .transition().duration(200)
        .attr('stroke', '#252520')
        .attr('stroke-width', (l: LinkDatum) => 0.5 + l.value * 0.45)
        .attr('opacity', 0.45);

      // Highlight connected links orange
      linkSel
        .filter(l => (l.source as NodeDatum).id === d.id || (l.target as NodeDatum).id === d.id)
        .interrupt()
        .transition().duration(200)
        .attr('stroke', ORANGE)
        .attr('stroke-width', 2)
        .attr('opacity', 1);
    });

    // ── Click backdrop — close panel, reset lines ─────────────────────────────
    svg.on('click', () => {
      setPanelOpen(false);
      linkSel.interrupt()
        .transition().duration(300)
        .attr('stroke', '#252520')
        .attr('stroke-width', (l: LinkDatum) => 0.5 + l.value * 0.45)
        .attr('opacity', 0.45);
    });

    // ── Tick ──────────────────────────────────────────────────────────────────
    sim.on('tick', () => {
      linkSel
        .attr('x1', d => (d.source as NodeDatum).x!)
        .attr('y1', d => (d.source as NodeDatum).y!)
        .attr('x2', d => (d.target as NodeDatum).x!)
        .attr('y2', d => (d.target as NodeDatum).y!);
      nodeGrp.attr('transform', d => `translate(${d.x},${d.y})`);
    });

    return () => { sim.stop(); };
  }, []);

  // ─── Render ──────────────────────────────────────────────────────────────────
  return (
    <div
      ref={containerRef}
      style={{
        height: 'calc(100vh - 56px)',
        overflow: 'hidden',
        position: 'relative',
        background: '#0C0C0A',
      }}
      onClick={() => setPanelOpen(false)}
    >
      <svg
        ref={svgRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />

      {/* Legend — top-left */}
      <div style={{
        position: 'absolute', top: 22, left: 22,
        display: 'flex', flexDirection: 'column', gap: 9,
        pointerEvents: 'none',
      }}>
        {([
          { color: '#F5841F', label: 'FREQUENCY' },
          { color: '#4CBB17', label: 'RECOVERY' },
          { color: '#F5F0E8', label: 'COGNITION / STRESS' },
        ] as const).map(({ color, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
            <span style={{ fontFamily: MONO, fontSize: 7, letterSpacing: '0.18em', color: '#444' }}>{label}</span>
          </div>
        ))}
        <div style={{ marginTop: 12, borderTop: '1px solid #1A1A18', paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {(['strong','moderate','weak','none'] as const).map(tier => (
            <div key={tier} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <div style={{
                width: TIER_RADIUS[tier] * 0.55, height: TIER_RADIUS[tier] * 0.55,
                borderRadius: '50%', background: '#333', border: '1px solid #444', flexShrink: 0,
              }} />
              <span style={{ fontFamily: MONO, fontSize: 7, letterSpacing: '0.15em', color: '#333' }}>{TIER_LABEL[tier].toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hint */}
      <div style={{
        position: 'absolute', bottom: 22, left: 22,
        fontFamily: MONO, fontSize: 7, letterSpacing: '0.15em', color: '#2A2A28',
        pointerEvents: 'none',
      }}>
        DRAG · ZOOM · CLICK FOR CITATIONS
      </div>

      {/* Detail panel — slides in from right on click */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute', top: 0, right: 0,
          width: 320, height: '100%',
          background: 'rgba(12,12,10,0.97)',
          borderLeft: '1px solid #1A1A18',
          transform: panelOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
          overflowY: 'auto',
          zIndex: 20,
          padding: '32px 24px',
          boxSizing: 'border-box',
          display: 'flex', flexDirection: 'column', gap: 16,
          fontFamily: MONO,
        }}
      >
        {selected && (
          <>
            {/* Close */}
            <button
              onClick={() => setPanelOpen(false)}
              style={{
                alignSelf: 'flex-end', background: 'none', border: 'none',
                color: '#333', fontSize: 8, letterSpacing: '0.18em',
                cursor: 'pointer', fontFamily: MONO, padding: '4px 0',
              }}
            >
              CLOSE ×
            </button>

            {/* Category + tier badge */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span style={{
                padding: '3px 8px', border: `1px solid ${nodeColor(selected)}44`,
                fontSize: 7, letterSpacing: '0.18em', color: nodeColor(selected),
              }}>
                {selected.category.toUpperCase()}
              </span>
              <span style={{
                padding: '3px 8px', border: '1px solid #1A1A18',
                fontSize: 7, letterSpacing: '0.18em', color: '#444',
              }}>
                {TIER_LABEL[selected.tier].toUpperCase()}
              </span>
            </div>

            {/* Title */}
            <h2 style={{
              fontFamily: SERIF, fontSize: 24, fontWeight: 900,
              color: '#F5F0E8', margin: 0, lineHeight: 1.25, letterSpacing: '-0.02em',
            }}>
              {selected.label}
            </h2>

            {/* Citation */}
            <div style={{ borderLeft: `2px solid ${nodeColor(selected)}`, paddingLeft: 10 }}>
              <span style={{ fontSize: 8.5, letterSpacing: '0.05em', lineHeight: 1.9, color: nodeColor(selected) }}>
                {selected.citation}
              </span>
            </div>

            {/* Summary */}
            <p style={{
              fontSize: 12, color: '#888', lineHeight: 1.9, margin: 0,
              fontFamily: "'Inter', sans-serif",
            }}>
              {selected.summary}
            </p>

            {/* Stats — N= count-up */}
            <div style={{
              display: 'flex', gap: 24, borderTop: '1px solid #1A1A18', paddingTop: 18,
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <span style={{
                  fontSize: 32, fontWeight: 200, color: nodeColor(selected),
                  fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em',
                  transition: 'color 0.3s',
                }}>
                  {selected.studies === 0 ? '—' : displayCount}
                </span>
                <span style={{ fontSize: 7, letterSpacing: '0.18em', color: '#2A2A28' }}>
                  STUDIES REVIEWED
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <span style={{
                  fontSize: 32, fontWeight: 200, color: '#F5F0E8',
                  fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em',
                }}>
                  {selected.tier.slice(0, 2).toUpperCase()}
                </span>
                <span style={{ fontSize: 7, letterSpacing: '0.18em', color: '#2A2A28' }}>
                  EVIDENCE TIER
                </span>
              </div>
            </div>

            {/* Disclaimer */}
            <p style={{
              fontSize: 9, color: '#2A2A28', lineHeight: 1.8, margin: '8px 0 0',
              letterSpacing: '0.05em',
            }}>
              Evidence tiers assigned by the Non Magic editorial team. Not medical advice.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
