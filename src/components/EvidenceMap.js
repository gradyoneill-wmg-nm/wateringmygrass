/**
 * EvidenceMap.js
 * Watering My Grass — Interactive Evidence Force Graph
 *
 * D3.js force-directed graph where every node is a wellness claim,
 * color-coded by evidence quality. Built to embed in Framer as a code
 * component, or drop into any React app.
 *
 * Features:
 *   - Nodes colored and sized by evidence tier (strong → limited)
 *   - Spring entry: nodes bounce in one-by-one via d3.easeBackOut
 *   - Continuous organic pulse: every node breathes independently
 *   - Drag: grab any node to rearrange the graph
 *   - Click: detail panel slides in from right with full citation + summary
 *   - Zoom + pan via D3 zoom behavior
 *   - Sample WMG data included — replace with CMS / API data in production
 *
 * Requires: d3 ^7.0.0
 */

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

// ─── Evidence tier config ─────────────────────────────────────────────────────

const TIERS = {
  strong:   { color: '#4CBB17', label: 'Strong Evidence',  radius: 18 },
  moderate: { color: '#F5841F', label: 'Preliminary',      radius: 13 },
  weak:     { color: '#2D4E9E', label: 'Plausible, weak',  radius: 10 },
  none:     { color: '#2A2A28', label: 'Not supported',    radius: 8  },
};

// ─── Sample data — replace nodes/links props with CMS data ───────────────────

const DEFAULT_NODES = [
  {
    id: '40hz',
    label: '40Hz Gamma',
    tier: 'strong',
    category: 'Frequency',
    citation: 'Iaccarino et al., Nature, 2016 + MIT replication 2021',
    summary: '~50% amyloid reduction in mice. MIT replicated independently 2019 and 2021. Human trials ongoing. The strongest single finding in the NM frequency library. Non Magic 40Hz sessions directly target this pathway.',
    studies: 14,
  },
  {
    id: 'delta',
    label: 'Delta Sleep',
    tier: 'strong',
    category: 'Recovery',
    citation: 'Walker, 2017 · Tononi & Cirelli, 2014',
    summary: 'Deep slow-wave sleep (0.5–4Hz) is essential for immune function, memory consolidation, glymphatic clearance, and growth hormone release. Among the most replicated findings in sleep science.',
    studies: 41,
  },
  {
    id: 'cold-exposure',
    label: 'Cold Exposure',
    tier: 'strong',
    category: 'Recovery',
    citation: 'Kox et al., PNAS, 2014 · N=24 · Søberg et al., 2021',
    summary: 'Deliberate cold water immersion (11–15°C, 11 min/week) activates brown adipose tissue and raises norepinephrine 300% and dopamine 250%. Voluntary immune modulation confirmed via Kox 2014 Wim Hof protocol RCT.',
    studies: 19,
  },
  {
    id: 'exercise-bdnf',
    label: 'Exercise & BDNF',
    tier: 'strong',
    category: 'Cognition',
    citation: 'Cotman et al., Trends in Neurosciences, 2002 + meta-analysis 2018',
    summary: 'Aerobic exercise is the most reliable known way to raise brain-derived neurotrophic factor. HIIT produces the largest acute spikes. Effect replicated across hundreds of studies spanning 20+ years.',
    studies: 67,
  },
  {
    id: 'alpha',
    label: 'Alpha Waves & Calm',
    tier: 'strong',
    category: 'Stress',
    citation: 'Benson, 1975 · Lazar et al., NeuroReport, 2005',
    summary: 'Alpha EEG (8–12Hz) is the signature of the relaxation response. Meditation reliably increases alpha power. Decades of research confirm cortisol reduction and mood improvement from regular alpha-state practice.',
    studies: 52,
  },
  {
    id: 'schumann',
    label: '7.83Hz Schumann',
    tier: 'moderate',
    category: 'Frequency',
    citation: 'Pobachenko et al., Biophysics, 2006 · N=48',
    summary: 'Correlation between Schumann resonance and human alpha EEG documented in observational study. Mechanism unconfirmed — may be coincidence of similar frequencies rather than causal entrainment. Needs RCT.',
    studies: 3,
  },
  {
    id: 'theta-binaural',
    label: 'Theta Binaural Beats',
    tier: 'moderate',
    category: 'Cognition',
    citation: 'Kraus & Porubanova, PeerJ, 2015 · Colzato et al., 2017',
    summary: 'Theta binaural beats (4–7Hz) showed working memory and attention improvement in controlled conditions. Requires stereo headphones for binaural effect. Effect sizes moderate, replication ongoing.',
    studies: 7,
  },
  {
    id: 'magnesium',
    label: 'Magnesium & Sleep',
    tier: 'moderate',
    category: 'Recovery',
    citation: 'Abbasi et al., J Research Med Sci, 2012 · N=46',
    summary: 'Magnesium glycinate supplementation improved sleep efficiency, sleep time, and insomnia severity in elderly with low magnesium. Effect size moderate. Most meaningful for deficient individuals (common in Western diet).',
    studies: 11,
  },
  {
    id: 'ashwagandha',
    label: 'Ashwagandha',
    tier: 'moderate',
    category: 'Stress',
    citation: 'Chandrasekhar et al., Indian J Psych Medicine, 2012 · N=64',
    summary: 'KSM-66 ashwagandha extract (300mg 2×/day) reduced serum cortisol by 27% and improved all stress scale scores vs placebo over 60 days. Well-controlled RCT. Needs larger multi-site replication.',
    studies: 8,
  },
  {
    id: 'earthing',
    label: 'Earthing / Grounding',
    tier: 'weak',
    category: 'Recovery',
    citation: 'Chevalier et al., J Environ Public Health, 2012 (industry-funded)',
    summary: 'Biologically plausible mechanism (free electron transfer from earth surface). No independent replication at scale. All primary studies are from researchers with financial ties to earthing product companies.',
    studies: 4,
  },
  {
    id: 'red-light',
    label: 'Red Light Therapy',
    tier: 'weak',
    category: 'Recovery',
    citation: 'Hamblin et al., Photobiomodulation reviews, 2017',
    summary: 'Photobiomodulation via 630–850nm light activates cytochrome c oxidase in mitochondria (in vitro evidence solid). Systemic in vivo effects in healthy humans less established. Protocol variance very high across studies.',
    studies: 12,
  },
  {
    id: 'dna-528hz',
    label: '528Hz "DNA Repair"',
    tier: 'none',
    category: 'Frequency',
    citation: 'No peer-reviewed evidence',
    summary: 'Claim originated in non-scientific publications with no proposed biological mechanism. No studies exist in PubMed or any indexed scientific journal. The "Solfeggio frequency" framework has no scientific basis.',
    studies: 0,
  },
  {
    id: 'schumann-rising',
    label: 'Schumann "Rising"',
    tier: 'none',
    category: 'Frequency',
    citation: 'Misreading of HeartMath amplitude data',
    summary: 'The claim that Schumann resonances are increasing conflates amplitude spikes (which do occur) with frequency change. The base frequency (~7.83Hz) is determined by Earth\'s circumference and electromagnetic properties — it does not meaningfully change.',
    studies: 0,
  },
];

const DEFAULT_LINKS = [
  { source: '40hz',         target: 'alpha',        value: 3 },
  { source: '40hz',         target: 'delta',         value: 2 },
  { source: 'schumann',     target: 'alpha',         value: 2 },
  { source: 'schumann',     target: 'schumann-rising', value: 1 },
  { source: 'cold-exposure', target: 'exercise-bdnf', value: 2 },
  { source: 'exercise-bdnf', target: 'alpha',         value: 2 },
  { source: 'theta-binaural', target: 'schumann',     value: 1 },
  { source: 'magnesium',    target: 'delta',          value: 2 },
  { source: 'ashwagandha',  target: 'alpha',          value: 2 },
  { source: 'earthing',     target: 'schumann',       value: 1 },
  { source: 'earthing',     target: 'schumann-rising', value: 1 },
  { source: 'red-light',    target: 'cold-exposure',  value: 1 },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function EvidenceMap({
  nodes = DEFAULT_NODES,
  links = DEFAULT_LINKS,
  width = 960,
  height = 600,
}) {
  const svgRef         = useRef(null);
  const [selected, setSelected]     = useState(null);
  const [panelOpen, setPanelOpen]   = useState(false);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // ── Defs — glow filter ────────────────────────────────────────────────
    const defs = svg.append('defs');
    const filter = defs.append('filter').attr('id', 'em-glow').attr('x', '-50%').attr('y', '-50%').attr('width', '200%').attr('height', '200%');
    filter.append('feGaussianBlur').attr('in', 'SourceGraphic').attr('stdDeviation', 4).attr('result', 'blur');
    filter.append('feComposite').attr('in', 'blur').attr('in2', 'SourceGraphic').attr('operator', 'over');

    // ── Graph group (zoom target) ─────────────────────────────────────────
    const g = svg.append('g').attr('class', 'em-root');

    // Zoom + pan
    svg.call(
      d3.zoom()
        .scaleExtent([0.35, 3.5])
        .on('zoom', (event) => g.attr('transform', event.transform)),
    );

    // ── Force simulation ──────────────────────────────────────────────────
    const nodeData = nodes.map((n) => ({ ...n }));
    const linkData = links.map((l) => ({ ...l }));

    const simulation = d3.forceSimulation(nodeData)
      .force('link',     d3.forceLink(linkData).id((d) => d.id).distance(130).strength(0.55))
      .force('charge',   d3.forceManyBody().strength(-320))
      .force('center',   d3.forceCenter(width / 2, height / 2))
      .force('collide',  d3.forceCollide((d) => TIERS[d.tier].radius + 22));

    // ── Links ─────────────────────────────────────────────────────────────
    const linkSel = g.append('g')
      .selectAll('line')
      .data(linkData)
      .join('line')
      .attr('stroke', '#1E1E1C')
      .attr('stroke-width', (d) => 0.5 + d.value * 0.5)
      .attr('stroke-dasharray', '3 7')
      .attr('opacity', 0);

    // Animate links appearing after nodes settle
    linkSel.each(function (_, i) {
      d3.select(this)
        .transition()
        .delay(900 + i * 100)
        .duration(500)
        .attr('opacity', 0.45);
    });

    // ── Node groups ───────────────────────────────────────────────────────
    const nodeGroup = g.append('g')
      .selectAll('g')
      .data(nodeData)
      .join('g')
      .attr('class', 'em-node')
      .style('cursor', 'pointer')
      .call(
        d3.drag()
          .on('start', (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on('drag', (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on('end', (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          }),
      )
      .on('click', (event, d) => {
        event.stopPropagation();
        setSelected(d);
        setPanelOpen(true);
      });

    // Glow halo (visible on hover)
    nodeGroup.append('circle')
      .attr('class', 'em-glow')
      .attr('r', (d) => TIERS[d.tier].radius + 10)
      .attr('fill', (d) => TIERS[d.tier].color)
      .attr('filter', 'url(#em-glow)')
      .attr('opacity', 0);

    // Outer orbit ring
    nodeGroup.append('circle')
      .attr('r', (d) => TIERS[d.tier].radius + 7)
      .attr('fill', 'none')
      .attr('stroke', (d) => TIERS[d.tier].color)
      .attr('stroke-width', 0.5)
      .attr('opacity', 0.18);

    // Main dot — starts at r=0, springs in with overshoot
    nodeGroup.append('circle')
      .attr('class', 'em-dot')
      .attr('r', 0)
      .attr('fill', (d) => TIERS[d.tier].color)
      .attr('stroke', '#0A0A08')
      .attr('stroke-width', 1.5);

    // Node label
    nodeGroup.append('text')
      .attr('class', 'em-label')
      .text((d) => d.label.toUpperCase())
      .attr('text-anchor', 'middle')
      .attr('dy', (d) => TIERS[d.tier].radius + 16)
      .attr('fill', (d) => TIERS[d.tier].color)
      .attr('font-size', 8)
      .attr('font-family', 'Space Mono, monospace')
      .attr('letter-spacing', 1.5)
      .attr('opacity', 0)
      .attr('pointer-events', 'none');

    // ── Spring entry — staggered, one by one ──────────────────────────────
    nodeGroup.each(function (d, i) {
      const el = d3.select(this);

      // Dot springs in
      el.select('.em-dot')
        .transition()
        .delay(300 + i * 80)
        .duration(550)
        .ease(d3.easeBackOut.overshoot(1.6))
        .attr('r', TIERS[d.tier].radius);

      // Label fades in after dot
      el.select('.em-label')
        .transition()
        .delay(500 + i * 80)
        .duration(400)
        .attr('opacity', 0.65);
    });

    // ── Continuous pulse — each node breathes at its own tempo ────────────
    function breatheNode(el, tierKey, delayMs) {
      const base = TIERS[tierKey].radius;

      function tick() {
        el.select('.em-dot')
          .transition()
          .delay(delayMs)
          .duration(1900)
          .ease(d3.easeSinInOut)
          .attr('r', base * 1.14)
          .transition()
          .duration(1900)
          .ease(d3.easeSinInOut)
          .attr('r', base)
          .on('end', tick);
      }
      tick();
    }

    nodeGroup.each(function (d, i) {
      // Stagger onset so they don't all pulse in sync
      setTimeout(() => breatheNode(d3.select(this), d.tier, 0), 1200 + i * 130);
    });

    // ── Hover ─────────────────────────────────────────────────────────────
    nodeGroup
      .on('mouseenter', function (_, d) {
        d3.select(this).select('.em-glow')
          .transition().duration(180).attr('opacity', 0.18);
        d3.select(this).select('.em-dot')
          .transition().duration(180).attr('r', TIERS[d.tier].radius * 1.3);
        d3.select(this).select('.em-label')
          .transition().duration(180).attr('opacity', 1).attr('fill', '#F5F0E8');
      })
      .on('mouseleave', function (_, d) {
        d3.select(this).select('.em-glow')
          .transition().duration(300).attr('opacity', 0);
        d3.select(this).select('.em-dot')
          .transition().duration(300).attr('r', TIERS[d.tier].radius);
        d3.select(this).select('.em-label')
          .transition().duration(300).attr('opacity', 0.65).attr('fill', TIERS[d.tier].color);
      });

    // ── Tick ──────────────────────────────────────────────────────────────
    simulation.on('tick', () => {
      linkSel
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      nodeGroup.attr('transform', (d) => `translate(${d.x},${d.y})`);
    });

    // Click outside to close panel
    svg.on('click', () => setPanelOpen(false));

    return () => simulation.stop();
  }, [nodes, links, width, height]);

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <div style={S.container}>

      <svg
        ref={svgRef}
        width={width}
        height={height}
        style={{ display: 'block', background: 'transparent' }}
      />

      {/* Legend */}
      <div style={S.legend}>
        {Object.entries(TIERS).map(([key, cfg]) => (
          <div key={key} style={S.legendItem}>
            <div style={{ ...S.legendDot, background: cfg.color }} />
            <span style={S.legendLabel}>{cfg.label.toUpperCase()}</span>
          </div>
        ))}
      </div>

      {/* Detail panel — slides in from right */}
      <div
        style={{
          ...S.panel,
          transform: panelOpen ? 'translateX(0)' : 'translateX(100%)',
          opacity: panelOpen ? 1 : 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {selected && (
          <>
            <button style={S.closeBtn} onClick={() => setPanelOpen(false)}>
              CLOSE ×
            </button>

            {/* Tier badge */}
            <div style={{ ...S.tierBadge, color: TIERS[selected.tier].color, borderColor: TIERS[selected.tier].color + '44' }}>
              {TIERS[selected.tier].label.toUpperCase()}
            </div>

            <h2 style={S.panelTitle}>{selected.label}</h2>

            {/* Citation */}
            <div style={{ ...S.citationBlock, borderLeftColor: TIERS[selected.tier].color }}>
              <span style={{ ...S.citationText, color: TIERS[selected.tier].color }}>
                {selected.citation}
              </span>
            </div>

            {/* Summary */}
            <p style={S.summary}>{selected.summary}</p>

            {/* Stats row */}
            <div style={S.panelStats}>
              <div style={S.panelStat}>
                <span style={S.panelStatNum}>{selected.studies || '—'}</span>
                <span style={S.panelStatLabel}>STUDIES REVIEWED</span>
              </div>
              <div style={S.panelStat}>
                <span style={{ ...S.panelStatNum, color: TIERS[selected.tier].color }}>
                  {selected.tier.toUpperCase()}
                </span>
                <span style={S.panelStatLabel}>EVIDENCE TIER</span>
              </div>
            </div>

            {/* Category tag */}
            <div style={S.categoryTag}>{selected.category.toUpperCase()}</div>
          </>
        )}
      </div>

    </div>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const MONO = "'Space Mono', 'Courier New', monospace";
const SERIF = "'Playfair Display', Georgia, serif";

const S = {
  container: {
    position: 'relative',
    background: '#050504',
    overflow: 'hidden',
    fontFamily: MONO,
  },
  legend: {
    position: 'absolute',
    top: 20,
    left: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    pointerEvents: 'none',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    flexShrink: 0,
  },
  legendLabel: {
    fontSize: 8,
    color: '#333',
    letterSpacing: '0.15em',
  },
  panel: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 300,
    height: '100%',
    background: '#0C0C0A',
    borderLeft: '1px solid #1A1A18',
    padding: '28px 22px',
    boxSizing: 'border-box',
    overflowY: 'auto',
    transition: 'transform 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.38s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  closeBtn: {
    alignSelf: 'flex-end',
    background: 'none',
    border: 'none',
    color: '#333',
    fontSize: 8,
    letterSpacing: '0.15em',
    cursor: 'pointer',
    padding: '4px 0',
    fontFamily: MONO,
  },
  tierBadge: {
    display: 'inline-block',
    padding: '3px 8px',
    border: '1px solid',
    fontSize: 8,
    letterSpacing: '0.15em',
  },
  panelTitle: {
    fontFamily: SERIF,
    fontSize: 22,
    fontWeight: 900,
    color: '#F5F0E8',
    margin: 0,
    lineHeight: 1.3,
    letterSpacing: '-0.02em',
  },
  citationBlock: {
    borderLeft: '2px solid',
    paddingLeft: 10,
  },
  citationText: {
    fontSize: 9,
    letterSpacing: '0.05em',
    lineHeight: 1.8,
    fontFamily: MONO,
  },
  summary: {
    fontSize: 12,
    color: '#888',
    lineHeight: 1.85,
    margin: 0,
    fontFamily: "'Inter', sans-serif",
  },
  panelStats: {
    display: 'flex',
    gap: 20,
    borderTop: '1px solid #1A1A18',
    paddingTop: 16,
  },
  panelStat: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  panelStatNum: {
    fontSize: 26,
    fontWeight: 200,
    color: '#F5F0E8',
    fontFamily: "'Inter', sans-serif",
  },
  panelStatLabel: {
    fontSize: 7,
    color: '#333',
    letterSpacing: '0.15em',
    fontFamily: MONO,
  },
  categoryTag: {
    display: 'inline-block',
    border: '1px solid #1A1A18',
    padding: '3px 8px',
    fontSize: 7,
    color: '#333',
    letterSpacing: '0.15em',
  },
};
