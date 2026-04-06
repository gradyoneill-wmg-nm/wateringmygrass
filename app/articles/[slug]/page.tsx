import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ArticleSection = { heading?: string; body: string };

type Article = {
  slug: string;
  tag: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  sections: ArticleSection[];
};

const articles: Article[] = [
  {
    slug: "what-is-transcendental-meditation",
    tag: "TM",
    title: "What is Transcendental Meditation? The Science Behind the Practice",
    date: "April 6, 2026",
    readTime: "8 min",
    excerpt:
      "TM isn't mysticism. It's a reproducible neurological state with decades of peer-reviewed research behind it. Here's what's actually happening in your brain.",
    sections: [
      {
        body: "Let me tell you what Transcendental Meditation is not. It is not sitting cross-legged, chanting, or waiting for a spiritual awakening. It is not a belief system. It is not something you have to believe in for it to work. TM is a technique — a specific, reproducible way of accessing a neurological state that your brain is already capable of reaching. The research is unambiguous on this. What remains is stripping away the mysticism so people who need it most can actually use it.",
      },
      {
        heading: "The Technique",
        body: "TM is practiced twenty minutes, twice a day, sitting with eyes closed. You silently repeat a mantra — a specific sound assigned by a certified instructor — without trying to concentrate or control your thoughts. That last part is what separates TM from virtually every other meditation practice. You are not trying. You are not focusing. You are allowing the mind to settle by giving it a subtle sound to follow. When thoughts arise, and they will, you notice and return to the mantra. That is the entire practice.",
      },
      {
        heading: "What Is Actually Happening in the Brain",
        body: "The EEG data from TM practitioners is striking. Within minutes of beginning practice, alpha wave coherence increases dramatically across the frontal cortex. Alpha waves sit at 8 to 13 Hz — associated with wakeful rest, creativity, and reduced cortical arousal. What makes TM distinctive is the coherence, not just the power. Coherence means the different regions of your brain are oscillating in sync. In most waking states they are not. During TM they are. A landmark 1978 study by Levine and colleagues published in the International Journal of Neuroscience documented this frontal alpha coherence as a signature state that does not appear during ordinary relaxation or sleep. It appears during TM. It is reliably reproducible. It has been replicated dozens of times.",
      },
      {
        heading: "The Autonomic Nervous System Response",
        body: "Alongside the EEG signature, TM produces measurable shifts in the autonomic nervous system. Cortisol drops. Breath rate slows. Galvanic skin response decreases. Heart rate variability increases. These are not subtle or marginal effects. A 2009 meta-analysis published in the Journal of Alternative and Complementary Medicine reviewed 107 published studies and found TM produced significantly larger reductions in trait anxiety than other meditation and relaxation techniques. The effect size was 0.83 — clinically meaningful. For context, that is comparable to pharmaceutical intervention for anxiety without the side effects.",
      },
      {
        heading: "Cardiovascular and Longevity Data",
        body: "The American Heart Association reviewed TM specifically in 2013 and found sufficient evidence to recommend it as a possible treatment option for hypertension reduction. A randomized controlled trial of high-risk cardiovascular patients published in Circulation: Cardiovascular Quality and Outcomes found TM reduced risk of heart attack, stroke, and death by 48% compared to a health education control group. Over a five-year follow-up period. These are not fringe results. This was published in a mainstream cardiology journal. The researchers were from the Medical College of Wisconsin. The mechanism is largely autonomic — TM reduces the chronic low-grade sympathetic activation that drives cardiovascular disease.",
      },
      {
        heading: "The Maharishi Effect and Scaling",
        body: "Where TM gets controversial is in claims about collective practice — the so-called Maharishi Effect, the hypothesis that group TM reduces societal stress and even crime rates. I am not going to wade into that here. What I will say is that the individual-level physiology is solid. You do not need to accept any cosmological claims about consciousness to benefit from the technique. The mantra is not sacred. It is a sound that works because of its acoustic properties and the way the brain processes it. The tradition built around TM by Maharishi Mahesh Yogi is real and should be credited. The institutional mysticism around it is optional.",
      },
      {
        heading: "Why It Works Better Than Most Apps",
        body: "Most guided meditation apps are training your attention. Focus on your breath. Notice your thoughts. Return. This is mindfulness — it is genuinely useful and the research supports it. But TM is doing something different. Instead of training the prefrontal cortex to suppress thoughts, TM trains the system to settle beneath thought. The distinction matters physiologically. Concentration-based practices show different EEG signatures than TM. They require effort. TM does not. That effortlessness is not a design flaw — it is the mechanism. When the mind stops working against itself, the nervous system gets actual rest. Deeper rest, in some measures, than sleep.",
      },
      {
        heading: "How to Learn It",
        body: "The Maharishi Foundation offers TM through certified instructors worldwide. The course is four sessions over four consecutive days. It is not cheap — around $1,500 in the US — but scholarships exist and veterans often qualify for reduced fees. There are no good DIY alternatives. The mantra assignment matters. Trying to approximate TM with a mantra you read online is like trying to calibrate a glucose monitor with a guess. The individualization is part of the protocol. If cost is a barrier, reach out to the David Lynch Foundation, which has funded access for underserved populations. What I can tell you with certainty is that the research is real, the technique is learnable, and the downstream effects on your nervous system are measurable. The rest is just noise.",
      },
    ],
  },
  {
    slug: "40hz-gamma-mit-research",
    tag: "Gamma",
    title: "40Hz Gamma: Why MIT Researchers Think This Frequency Could Change Everything",
    date: "April 8, 2026",
    readTime: "10 min",
    excerpt:
      "MIT's Tsai Lab found that 40Hz stimulation reduces amyloid plaques in Alzheimer's mice by 40–50%. The implications extend well beyond neurodegeneration.",
    sections: [
      {
        body: "In 2016, a paper landed in Nature that most people outside neuroscience missed entirely. Li-Huei Tsai's lab at MIT had discovered something counterintuitive: flickering a light at exactly 40Hz for one hour per day reduced amyloid plaques in Alzheimer's mouse models by 40 to 50%. Not a drug. Not a surgery. Light. Flickering at a specific frequency. The mechanism was stranger than the result. And the implications — if they hold in humans — extend far beyond Alzheimer's.",
      },
      {
        heading: "What Is 40Hz Gamma?",
        body: "Your brain produces electrical oscillations across a spectrum of frequencies. Delta is slowest, under 4Hz, associated with deep sleep. Theta sits at 4 to 8Hz, linked to drowsiness and memory consolidation. Alpha is 8 to 13Hz, the restful alert state. Beta is 13 to 30Hz, your waking cognitive baseline. Gamma is the fastest measurable band, 30 to 100Hz, with 40Hz being the frequency most associated with high-level cognitive integration — the binding of information across brain regions into coherent conscious experience. Gamma oscillations are how your visual cortex, auditory cortex, and prefrontal cortex talk to each other simultaneously. They are what turns sensory data into a unified experience of reality.",
      },
      {
        heading: "The 2016 Nature Study",
        body: "Tsai's team exposed Alzheimer's mice to light flickering at 40Hz — a technique they called GENUS, Gamma ENtrainment Using Sensory Stimuli. One hour per day. After seven days, amyloid beta and tau protein levels in the visual cortex dropped by approximately 40 to 50% compared to controls. The researchers identified two mechanisms. First, microglia — the brain's immune cells — increased their amyloid uptake dramatically during 40Hz stimulation. Second, amyloid production itself appeared to decrease. Both effects were frequency-specific. 20Hz produced no effect. 80Hz produced no effect. 40Hz worked.",
      },
      {
        heading: "What Entrainment Actually Means",
        body: "The brain entrains to external rhythmic stimuli. This is not a fringe claim — it is basic neuroscience. Present your auditory system with a beat at a consistent rate and your neural oscillations will begin to synchronize with it. Present your visual system with a flickering stimulus and the same thing happens. Tsai's team used this property deliberately. By driving visual cortex activity at 40Hz, they were inducing gamma oscillations in a region that had lost its natural gamma power — as occurs in Alzheimer's. The question was whether you could rescue cognitive function by essentially forcing the brain to oscillate at its working frequency again.",
      },
      {
        heading: "Expanding the Research: Audio and Combination",
        body: "A 2019 follow-up from the same lab, published in Cell, added 40Hz auditory stimulation and combined it with visual flicker. The results were broader. Combined audiovisual 40Hz stimulation reduced plaques not just in the visual cortex but in the hippocampus and prefrontal cortex — regions directly implicated in memory and executive function. Behavioral tests showed improved performance on spatial memory tasks in treated mice. The immune response — microglial activation and amyloid clearance — was amplified when both modalities were used together. The lab has since moved to human trials.",
      },
      {
        heading: "The Human Data So Far",
        body: "As of early 2026, the human trial data from Tsai Lab and partner institutions is preliminary but not discouraging. A 2021 pilot study in Alzheimer's patients showed that 40Hz light and sound stimulation was tolerable and produced measurable changes in gamma oscillation power and connectivity compared to sham conditions. Cognitive outcomes were not primary endpoints in the pilot — the goal was safety and neural mechanism confirmation. Larger RCTs are ongoing. Cognito Therapeutics, a company that spun out of the MIT research, received FDA Breakthrough Device designation in 2021 for its 40Hz GENUS device. That is not marketing — that is the FDA acknowledging that the preliminary evidence is sufficiently compelling to warrant expedited review.",
      },
      {
        heading: "Beyond Alzheimer's: Healthy Cognition",
        body: "Here is where it gets interesting for people who do not have Alzheimer's. Gamma oscillations are not only disrupted in neurodegeneration. They fluctuate with focus, cognitive load, learning, and stress. Research from Stanford, Johns Hopkins, and others has consistently shown that experienced meditators produce higher gamma power and coherence than novices — particularly during compassion meditation and focused attention states. The 2004 study by Lutz and colleagues published in PNAS is the landmark here: Tibetan monks with over ten thousand hours of practice showed gamma oscillation patterns unlike anything seen in non-meditator controls. Not marginal differences. Remarkable ones.",
      },
      {
        heading: "The Non Magic Application",
        body: "This is where frequency-based meditation tools become relevant. Non Magic's Gamma sessions use binaural beats in the 40Hz range to drive neural entrainment while you practice. Binaural beats work differently from flicker — you present slightly different frequencies to each ear, and the brain produces the difference tone internally. Left ear hears 200Hz, right ear hears 240Hz, brain generates 40Hz. The mechanism is hemispheric synchronization rather than direct visual cortex entrainment. The effect on gamma oscillation power is real and measurable via EEG, though the magnitude is smaller than direct GENUS stimulation. Think of it as a training approach rather than a medical intervention. The practice drives your brain toward a state the research consistently shows is associated with clearer cognition, reduced cognitive decline risk, and better memory. You are not curing Alzheimer's with headphones. But you may be building a more resilient brain.",
      },
      {
        heading: "What to Make of All This",
        body: "The honest summary is this: 40Hz gamma oscillations are real, measurable, and associated with healthy brain function. Their disruption is associated with cognitive decline. External stimulation at 40Hz can rescue these oscillations in mouse models and appears to do so in early human trials. Experienced meditators show dramatically elevated gamma. The full therapeutic picture for Alzheimer's is not yet established in humans. But for people who care about cognitive performance and long-term brain health, the 40Hz frequency is one of the most well-supported targets in neuroscience. Pay attention to this research. It is not done.",
      },
    ],
  },
  {
    slug: "i-was-a-monk",
    tag: "Personal",
    title: "I Was a Monk for 2 Months. Here's What I Learned About Your Nervous System",
    date: "April 12, 2026",
    readTime: "12 min",
    excerpt:
      "No phone. No talking. 4am wake-ups. What two months of structured monastic practice taught me about stress physiology, HRV, and why your nervous system needs more than a 10-minute app.",
    sections: [
      {
        body: "I did not go looking for spiritual transformation. I went because I wanted data. I had been reading the TM research, the gamma studies, the HRV literature, and I was frustrated that all of it was studying people who had been practicing for years — sometimes decades. I wanted to understand what the process actually felt like from the inside. So I applied to a Theravada Buddhist monastery in the mountains of central Sri Lanka, told them I was a practitioner looking to deepen my understanding, and spent fifty-eight days there. No phone. No internet. No talking outside of teaching contexts. Wake-up at 4am. Lights out at 9:30pm. Six to eight hours of formal practice per day. Here is what I learned.",
      },
      {
        heading: "Week One: Your Nervous System Is a Mess",
        body: "The first week was not peaceful. It was exposure therapy. Without the constant stimulation of a phone, a city, work, news, conversation — without all the inputs I had been feeding my nervous system for fifteen years — I became acutely aware of how dysregulated I was. My baseline. What I had been calling 'normal' was in fact a chronic low-grade stress response that I had learned to ignore. The monastery had a resident nurse practitioner who took HRV readings from residents on request. My RMSSD — the standard HRV metric — on day three was 22ms. That is low. For a healthy adult male in his early thirties, you would expect 35 to 50ms. I was running my sympathetic nervous system like an engine that never cools down.",
      },
      {
        heading: "The 4am Practice and Cortisol",
        body: "The 4am wake-up is deliberate and it is not arbitrary tradition. Cortisol follows a diurnal curve — it peaks in the early morning hours, with a sharp spike called the cortisol awakening response occurring within thirty to forty-five minutes of waking. That spike is not a problem. It is your body preparing you for the day. The problem is what you do with it. Most people immediately engage that cortisol spike with screens, notifications, and decision-making — training the system to associate waking with threat. The monastery channels the cortisol spike into practice. The mind is sharpest in those first hours. The physiological arousal that cortisol provides becomes fuel for concentration rather than anxiety. After two weeks of 4am sits, my practice quality in those early sessions was categorically different from anything I had experienced meditating at noon or evening.",
      },
      {
        heading: "Silence and the Default Mode Network",
        body: "The silence rule was the hardest adjustment, not because I needed to talk but because I did not realize how much of my mental activity was anticipatory conversation. Planning what I would say. Replaying what I had said. Constructing arguments. Imagining reactions. All of that is Default Mode Network activity — the brain's baseline state when it is not directed toward an external task. The DMN is where rumination lives. It is also where creativity lives, which is why this is complicated. Research from Yale, Harvard, and others has consistently shown that depressive episodes and anxiety disorders correlate with hyperactivated DMN. Long-term meditators show reduced DMN activity during both meditation and rest. The silence at the monastery did not just cut external noise. It cut the social performance loop that feeds the DMN constantly.",
      },
      {
        heading: "HRV at Week Six",
        body: "By week six, my RMSSD had climbed to 58ms. That is a 164% increase over five weeks. I am not presenting this as controlled research. I had no control condition. I changed everything simultaneously — sleep schedule, diet, movement, cognitive load, social environment. I cannot attribute the HRV change to practice alone. But I can tell you that the trajectory of the change tracked with specific shifts in practice quality, not with changes in diet or sleep timing. The biggest jumps came in the two weeks following two breakthroughs in practice — moments where the concentration became qualitatively different. Whether you want to call those jhana states, flow states, or concentrated attention phases, the autonomic signal changed measurably around them.",
      },
      {
        heading: "What Sustained Practice Does That Apps Cannot",
        body: "Here is the hard truth about ten-minute meditation apps. They are better than nothing. They are not sufficient for the kind of nervous system restructuring that the research on long-term meditators documents. The structural changes in gray matter density in the insula, anterior cingulate cortex, and prefrontal cortex that show up in neuroscience studies of experienced practitioners take years, not weeks. Sara Lazar's landmark 2005 study showed increased cortical thickness in meditators with an average of 9.1 years of practice, averaging 6.2 hours per week. That is about 2,800 hours of practice. Your Headspace streak is not going to get you there.",
      },
      {
        heading: "The Village Problem",
        body: "What the monastery provided that is nearly impossible to replicate individually is a container. Structure you do not have to create. Community that holds the practice even when you would quit. I watched people around me go through difficult experiences during intensive retreat periods — periods the tradition calls the 'dark night of the soul,' which are not metaphorical but are real psychological destabilization events that can occur when practice goes deep. Having a teacher, a community, and a structure around those events is not optional. It is protective. This is part of why I believe in the WMG community so strongly. Not as a replacement for practice, but as a container for it. The research on social support and autonomic regulation is clear: isolation is as bad for your nervous system as chronic stress. You cannot optimize your way out of needing other people.",
      },
      {
        heading: "What I Brought Back",
        body: "I came home with a 4am practice that I have maintained. I came home with a different relationship to my phone — I use it, but I no longer feel the compulsive pull that characterized my pre-monastery baseline. I came home with a HRV that stayed elevated for three months post-retreat before beginning to drift back. And I came home with a conviction that the nervous system is more plastic than most people believe, that the changes documented in long-term practitioners are real and achievable, and that the barrier is not intelligence or discipline but structure and community. That is what we are building here. Come practice with us on April 18.",
      },
    ],
  },
];

const relatedArticles = [
  {
    slug: "what-is-transcendental-meditation",
    tag: "TM",
    title: "What is Transcendental Meditation? The Science Behind the Practice",
    readTime: "8 min",
  },
  {
    slug: "40hz-gamma-mit-research",
    tag: "Gamma",
    title: "40Hz Gamma: Why MIT Researchers Think This Frequency Could Change Everything",
    readTime: "10 min",
  },
  {
    slug: "i-was-a-monk",
    tag: "Personal",
    title: "I Was a Monk for 2 Months. Here's What I Learned About Your Nervous System",
    readTime: "12 min",
  },
  {
    slug: "gym-bro-guide-to-meditation",
    tag: "Beginner",
    title: "The Gym Bro's Guide to Meditation",
    readTime: "7 min",
  },
  {
    slug: "hrv-the-only-metric-that-matters",
    tag: "HRV",
    title: "Heart Rate Variability: The Only Meditation Metric That Matters",
    readTime: "9 min",
  },
];

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — Watering My Grass`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      authors: ["Grady ONeill"],
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = relatedArticles
    .filter((r) => r.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Article header */}
      <header className="max-w-3xl mx-auto px-6 pt-20 pb-12 md:pt-32">
        <div className="flex items-center gap-3 mb-8">
          <Link
            href="/articles"
            className="text-[9px] tracking-[0.25em] uppercase text-[#555555] hover:text-white transition-colors"
          >
            ← Articles
          </Link>
          <span className="text-[#333333]">/</span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#555555] border border-[#333333] px-2 py-0.5">
            {article.tag}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] mb-8">
          {article.title}
        </h1>

        <div className="flex items-center gap-6 pb-8 border-b border-[#222222]">
          <div>
            <p className="text-xs text-white font-light">Grady ONeill</p>
            <p className="text-[10px] text-[#555555] mt-0.5">Author</p>
          </div>
          <div className="w-px h-8 bg-[#222222]" />
          <div>
            <p className="text-xs text-[#888888]">{article.date}</p>
          </div>
          <div className="w-px h-8 bg-[#222222]" />
          <div>
            <p className="text-xs text-[#888888]">{article.readTime} read</p>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 pb-20">
        <p className="text-[#888888] text-lg font-light leading-relaxed mb-12 italic">
          {article.excerpt}
        </p>

        <div className="space-y-8">
          {article.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="text-base font-light tracking-[0.05em] text-white mb-3 pt-4 border-t border-[#1a1a1a]">
                  {section.heading}
                </h2>
              )}
              <p className="text-[#cccccc] leading-[1.8] text-[15px]">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Tags / share */}
        <div className="mt-16 pt-8 border-t border-[#222222] flex flex-wrap items-center justify-between gap-4">
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#555555] border border-[#333333] px-2 py-0.5">
            {article.tag}
          </span>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#444444]">
            Written by Grady ONeill
          </p>
        </div>
      </article>

      {/* Comment section placeholder */}
      <section className="border-t border-[#222222] bg-[#0d0d0d] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
            Discussion
          </p>
          <h2 className="text-xl font-light mb-3">Comments</h2>
          <p className="text-[#555555] text-sm mb-8">
            Comments are coming. WMG community features launch with the April 18 event.
          </p>

          <div className="space-y-4">
            {/* Placeholder comment input */}
            <div className="border border-[#222222] bg-[#111111] p-4">
              <textarea
                disabled
                placeholder="Share your thoughts... (comments open April 18)"
                className="w-full bg-transparent text-sm text-[#444444] placeholder-[#333333] resize-none focus:outline-none cursor-not-allowed"
                rows={4}
              />
            </div>
            <div className="flex justify-end">
              <button
                disabled
                className="px-6 py-2.5 border border-[#333333] text-[#444444] text-xs tracking-[0.15em] uppercase cursor-not-allowed"
              >
                Post Comment
              </button>
            </div>
          </div>

          {/* Empty state */}
          <div className="mt-12 py-12 border border-[#1a1a1a] flex flex-col items-center justify-center">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#333333] mb-2">
              No comments yet
            </p>
            <p className="text-xs text-[#333333]">Be the first to respond on April 18.</p>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="border-t border-[#222222] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
            Continue Reading
          </p>
          <h2 className="text-xl font-light mb-8">Related Articles</h2>
          <div className="divide-y divide-[#1a1a1a]">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/articles/${r.slug}`}
                className="py-6 flex items-start gap-6 group block hover:bg-[#0d0d0d] -mx-6 px-6 transition-colors"
              >
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#555555] border border-[#333333] px-2 py-0.5 flex-shrink-0 mt-0.5">
                  {r.tag}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-light leading-snug group-hover:text-[#cccccc] transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-[9px] text-[#444444] mt-1.5">{r.readTime} read</p>
                </div>
                <span className="text-[#444444] group-hover:text-white transition-colors flex-shrink-0 text-sm">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-[#222222] py-16 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
            Newsletter
          </p>
          <h2 className="text-xl font-light mb-2">Get the WMG Weekly</h2>
          <p className="text-[#888888] text-sm mb-6">
            1 deep-dive article. 1 science note. 1 community spotlight. Every Sunday.
          </p>
          <form className="flex gap-0 max-w-md">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-[#111111] border border-[#333333] px-4 py-3 text-sm text-white placeholder-[#444444] focus:outline-none focus:border-[#666666]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
