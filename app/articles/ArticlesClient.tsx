'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

// ─── Data ────────────────────────────────────────────────────────────────────

const articles = [
  {
    slug: 'what-is-transcendental-meditation',
    tag: 'TM',
    title: "What is Transcendental Meditation? The Science Behind the Practice",
    excerpt:
      "TM isn't mysticism. It's a reproducible neurological state with decades of peer-reviewed research behind it. Here's what's actually happening in your brain.",
    readTime: '8 min',
    readNum: 8,
    author: "Grady O'Neill",
    date: 'Apr 6, 2026',
    status: 'available',
  },
  {
    slug: '40hz-gamma-mit-research',
    tag: 'Gamma',
    title: "40Hz Gamma: Why MIT Researchers Think This Frequency Could Change Everything",
    excerpt:
      "MIT's Tsai Lab found that 40Hz stimulation reduces amyloid plaques in Alzheimer's mice by 40\u201350%. The implications extend well beyond neurodegeneration.",
    readTime: '10 min',
    readNum: 10,
    author: "Grady O'Neill",
    date: 'Apr 8, 2026',
    status: 'available',
  },
  {
    slug: 'i-was-a-monk',
    tag: 'Personal',
    title: "I Was a Monk for 2 Months. Here's What I Learned About Your Nervous System",
    excerpt:
      "No phone. No talking. 4am wake-ups. What two months of structured monastic practice taught me about stress physiology, HRV, and why your nervous system needs more than a 10-minute app.",
    readTime: '12 min',
    readNum: 12,
    author: "Grady O'Neill",
    date: 'Apr 12, 2026',
    status: 'available',
  },
  {
    slug: 'gym-bro-guide-to-meditation',
    tag: 'Beginner',
    title: "The Gym Bro's Guide to Meditation",
    excerpt:
      "You PR your bench. You track your macros. You monitor your sleep. Why aren't you training your nervous system? A performance-first introduction to what meditation actually does.",
    readTime: '7 min',
    readNum: 7,
    author: "Grady O'Neill",
    date: 'Apr 7, 2026',
    status: 'available',
  },
  {
    slug: 'hrv-the-only-metric-that-matters',
    tag: 'HRV',
    title: "Heart Rate Variability: The Only Meditation Metric That Matters",
    excerpt:
      "Forget self-report. Forget how relaxed you felt. HRV tells you exactly how your meditation practice is affecting your autonomic nervous system. Here's how to read it.",
    readTime: '9 min',
    readNum: 9,
    author: "Grady O'Neill",
    date: 'Apr 9, 2026',
    status: 'coming',
  },
  {
    slug: 'schumann-resonance',
    tag: 'Frequency',
    title: "The Schumann Resonance: Earth's Heartbeat and Your Brain",
    excerpt:
      "7.83Hz. The Earth's fundamental electromagnetic frequency. And it might be why some people report deeper meditation in natural environments. The science is stranger than you'd expect.",
    readTime: '8 min',
    readNum: 8,
    author: "Grady O'Neill",
    date: 'Apr 10, 2026',
    status: 'coming',
  },
  {
    slug: 'why-calm-doesnt-work',
    tag: 'Analysis',
    title: "Why Calm Doesn't Work (And What Does)",
    excerpt:
      "78% of Calm subscribers quit within 90 days. Here's why passive guided meditation fails at behavior change \u2014 and what the neuroscience says about what actually creates lasting practice.",
    readTime: '11 min',
    readNum: 11,
    author: "Grady O'Neill",
    date: 'Apr 11, 2026',
    status: 'coming',
  },
  {
    slug: 'breathwork-protocols',
    tag: 'Breathwork',
    title: "Breathwork Protocols: A Practitioner's Guide",
    excerpt:
      "Box breathing, Wim Hof, 4-7-8, cyclic sighing. Not all protocols are equal. Here's what each one actually does to your autonomic nervous system and when to use which.",
    readTime: '14 min',
    readNum: 14,
    author: "Grady O'Neill",
    date: 'Apr 13, 2026',
    status: 'coming',
  },
]

const tags = ['All', 'TM', 'Gamma', 'HRV', 'Frequency', 'Breathwork', 'Personal', 'Beginner', 'Analysis']

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

function useCountUp(target: number, duration: number, active: boolean): number {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active || target === 0) return
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(eased * target))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])
  return value
}

// ─── Marquee ─────────────────────────────────────────────────────────────────

function Marquee() {
  const [fast, setFast] = useState(false)
  const text =
    'FREQUENCY SCIENCE \u00b7 HRV RESEARCH \u00b7 TRANSCENDENTAL MEDITATION \u00b7 40Hz GAMMA \u00b7 SCHUMANN RESONANCE \u00b7 '

  return (
    <div
      className="border-b border-[#1a1a1a] overflow-hidden bg-[#080808] py-3 cursor-default select-none"
      onMouseEnter={() => setFast(true)}
      onMouseLeave={() => setFast(false)}
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: `wmg-marquee ${fast ? '9s' : '24s'} linear infinite` }}
      >
        <span className="text-[9px] tracking-[0.25em] uppercase text-[#3a3a3a] font-space-mono">
          {text.repeat(6)}
        </span>
        <span className="text-[9px] tracking-[0.25em] uppercase text-[#3a3a3a] font-space-mono" aria-hidden>
          {text.repeat(6)}
        </span>
      </div>
    </div>
  )
}

// ─── Featured Card ────────────────────────────────────────────────────────────

type Article = (typeof articles)[number]

function FeaturedCard({ article }: { article: Article }) {
  const { ref, inView } = useInView(0.05)
  const countedRead = useCountUp(article.readNum, 900, inView)

  return (
    <div
      ref={ref}
      className="group relative col-span-full overflow-hidden border border-[#1a1a1a] bg-[#0f0f0f]"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease 0ms, transform 0.6s ease 0ms',
      }}
    >
      {/* Ken Burns background glow — scales 1.0 to 1.02 over 8s, infinite alternate */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 25% 60%, rgba(76,187,23,0.07) 0%, rgba(245,132,31,0.04) 40%, transparent 68%)',
          animation: 'wmg-kenburns 8s ease-in-out infinite alternate',
          transformOrigin: '30% 50%',
        }}
      />

      {/* Kelly green top border — draws left-to-right on hover */}
      <div className="absolute top-0 left-0 h-[2px] bg-[#4CBB17] w-0 group-hover:w-full transition-all duration-300 ease-out z-10" />

      {/* Background lightens 2% on hover */}
      <div className="absolute inset-0 bg-[#141414] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-[1] p-8 md:p-12">
        <div className="flex items-start justify-between mb-6">
          <span className="wmg-tag text-[9px] tracking-[0.25em] uppercase text-[#F5841F] border border-[#F5841F]/30 px-2 py-0.5 cursor-default">
            {article.tag}
          </span>
          <span className="text-[9px] text-[#3a3a3a] font-space-mono">{article.date}</span>
        </div>

        <h2
          className="text-2xl md:text-4xl font-light leading-tight mb-4 max-w-3xl"
          style={{ letterSpacing: '-0.02em', transition: 'letter-spacing 0.3s ease, color 0.3s ease' }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.letterSpacing = 'calc(-0.02em + 1px)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.letterSpacing = '-0.02em'
          }}
        >
          {article.title}
        </h2>

        <p className="text-[#555555] text-sm leading-relaxed mb-8 max-w-2xl">{article.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-[9px] text-[#444444] font-space-mono">
              <span className="text-[#777777] text-sm font-light">{countedRead}</span>
              {' '}min read
            </span>
            <span className="text-[9px] tracking-[0.15em] uppercase text-[#3a3a3a]">
              By {article.author}
            </span>
          </div>
          {article.status === 'available' ? (
            <Link
              href={`/articles/${article.slug}`}
              className="text-[9px] tracking-[0.2em] uppercase text-[#666666] hover:text-white transition-colors"
            >
              Read &rarr;
            </Link>
          ) : (
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#3a3a3a]">Coming soon</span>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Article Card ─────────────────────────────────────────────────────────────

function ArticleCard({ article, cardIndex }: { article: Article; cardIndex: number }) {
  const { ref, inView } = useInView(0.1)
  const countedRead = useCountUp(article.readNum, 700, inView)
  const stagger = (cardIndex % 3) * 80

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden border border-[#1a1a1a] bg-[#0f0f0f] flex flex-col"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${stagger}ms, transform 0.5s ease ${stagger}ms`,
      }}
    >
      {/* Kelly green top border — draws left-to-right on hover */}
      <div className="absolute top-0 left-0 h-[2px] bg-[#4CBB17] w-0 group-hover:w-full transition-all duration-300 ease-out z-10" />

      {/* Background lightens 2% on hover */}
      <div className="absolute inset-0 bg-[#141414] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-[1] p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <span className="wmg-tag text-[9px] tracking-[0.25em] uppercase text-[#F5841F] border border-[#F5841F]/30 px-2 py-0.5 cursor-default">
            {article.tag}
          </span>
          {article.status === 'coming' && (
            <span className="text-[8px] tracking-[0.1em] uppercase text-[#2e2e2e] font-space-mono">Soon</span>
          )}
        </div>

        <h3
          className="text-sm md:text-base font-light leading-snug mb-3"
          style={{ letterSpacing: '0', transition: 'letter-spacing 0.3s ease, color 0.3s ease' }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.letterSpacing = '1px'
            ;(e.currentTarget as HTMLElement).style.color = '#cccccc'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.letterSpacing = '0'
            ;(e.currentTarget as HTMLElement).style.color = ''
          }}
        >
          {article.title}
        </h3>

        <p className="text-[#4a4a4a] text-xs leading-relaxed mb-5 flex-1">{article.excerpt}</p>

        <div className="flex items-center justify-between pt-4 border-t border-[#1a1a1a]">
          <span className="text-[9px] text-[#444444] font-space-mono">
            <span className="text-[#666666]">{countedRead}</span>
            {' '}min
          </span>
          <span className="text-[9px] text-[#2e2e2e] font-space-mono">{article.date}</span>
          {article.status === 'available' ? (
            <Link
              href={`/articles/${article.slug}`}
              className="text-[9px] tracking-[0.2em] uppercase text-[#555555] hover:text-white transition-colors"
            >
              Read &rarr;
            </Link>
          ) : (
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#2e2e2e]">&mdash;</span>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function ArticlesClient() {
  const cardsRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerInView, setHeaderInView] = useState(false)
  const articleCount = useCountUp(articles.length, 1200, headerInView)

  // Parallax: cards section scrolls at 0.8x speed, background at 1x
  useEffect(() => {
    const el = cardsRef.current
    if (!el) return
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.2}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Header in-view for article count-up
  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Marquee />

      {/* Header */}
      <section ref={headerRef} className="max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">Reading</p>
        <h1 className="text-4xl md:text-6xl font-light leading-[1.05] tracking-[-0.02em] mb-6">
          Articles
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8">
          <p className="text-[#888888] text-lg font-light max-w-xl">
            Evidence-based writing on meditation, frequency science, and human performance.
            Every claim cited. No woo.
          </p>
          <span className="text-[9px] tracking-[0.2em] uppercase text-[#333333] font-space-mono whitespace-nowrap pb-0.5">
            <span className="text-[#777777] text-xl font-light">{articleCount}</span>
            {' '}articles
          </span>
        </div>
      </section>

      {/* Tags filter */}
      <div className="border-y border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-none">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 whitespace-nowrap transition-colors font-space-mono ${
                tag === 'All'
                  ? 'bg-[#F5841F] text-black'
                  : 'border border-[#333333] text-[#666666] hover:border-[#F5841F]/50 hover:text-[#F5841F]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Articles grid — parallax wrapper */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div ref={cardsRef} style={{ willChange: 'transform' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeaturedCard article={articles[0]} />
            {articles.slice(1).map((article, i) => (
              <ArticleCard key={article.slug} article={article} cardIndex={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contributor CTA */}
      <section className="border-t border-[#222222] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">Contribute</p>
            <h2 className="text-2xl font-light mb-3">Write for WMG</h2>
            <p className="text-[#888888] text-sm leading-relaxed mb-6">
              WMG is a contributor platform. If you research, practice, or work in frequency
              science, meditation, breathwork, or related fields &mdash; we want to publish you.
              Editorial guidelines apply. Grady curates.
            </p>
            <button className="px-8 py-3 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors">
              Contributor Program &mdash; Coming Soon
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
