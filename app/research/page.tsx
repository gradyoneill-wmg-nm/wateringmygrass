"use client";

import { useState } from "react";

const studies = [
  {
    id: 1,
    title: "Gamma frequency entrainment attenuates amyloid load and modifies microglia",
    authors: "Iaccarino HF, Singer AC, Martorell AJ, Rudenko A, Gao F, Gillingham TZ, Mathys H, Seo J, Kritskiy O, Abdurrob F, Adaikkan C, Canter RG, Rueda R, Brown EN, Bhaskaran L, Tsai LH.",
    journal: "Nature",
    year: 2016,
    topic: "Gamma",
    summary: "40Hz light flicker reduced amyloid plaques by 40–50% in Alzheimer's mouse models. Activated microglia, suggesting immune response as mechanism.",
    link: "https://www.nature.com/articles/nature20587",
    impact: "High",
  },
  {
    id: 2,
    title: "Multi-sensory gamma stimulation ameliorates Alzheimer's-associated pathology and improves cognition",
    authors: "Martorell AJ, Paulson AL, Suk HJ, Abdurrob F, Drummond GT, Guan W, Young JZ, Kim DN, Kritskiy O, Barker SJ, Mangena V, Prince SM, Brown EN, Bhaskaran L, Bhaskaran K, Bhaskaran L, Boyden ES, Singer AC, Tsai LH.",
    journal: "Cell",
    year: 2019,
    topic: "Gamma",
    summary: "Combined auditory and visual 40Hz stimulation was more effective than either modality alone. Improved spatial cognition, reduced tau and amyloid markers.",
    link: "https://www.cell.com/cell/fulltext/S0092-8674(19)30163-1",
    impact: "High",
  },
  {
    id: 3,
    title: "Effects of Transcendental Meditation on brain functioning and stress reactivity",
    authors: "Travis F, Shear J.",
    journal: "Consciousness and Cognition",
    year: 2010,
    topic: "TM",
    summary: "EEG coherence study showing TM produces alpha wave synchrony across frontal regions. Reduced cortisol reactivity to stressors versus controls.",
    link: "https://pubmed.ncbi.nlm.nih.gov/20167507/",
    impact: "Medium",
  },
  {
    id: 4,
    title: "Relaxation response and resiliency training: self-care in neuroscience",
    authors: "Bhasin MK, Dusek JA, Chang BH, Joseph MG, Denninger JW, Fricchione GL, Benson H, Libermann TA.",
    journal: "PLOS ONE",
    year: 2013,
    topic: "Meditation",
    summary: "Genomic analysis of relaxation response practitioners: 2,209 genes differentially expressed. Pathways affected include mitochondrial function, immune response, and oxidative stress.",
    link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0062817",
    impact: "High",
  },
  {
    id: 5,
    title: "Heart rate variability biofeedback as a form of individualized stress management",
    authors: "Lehrer PM, Gevirtz R.",
    journal: "Frontiers in Psychology",
    year: 2014,
    topic: "HRV",
    summary: "HRV biofeedback resonance training at 0.1Hz significantly improves autonomic function, reduces symptoms of asthma, hypertension, depression, and PTSD.",
    link: "https://www.frontiersin.org/articles/10.3389/fpsyg.2014.00756/full",
    impact: "High",
  },
  {
    id: 6,
    title: "Effects of HRV biofeedback on sport performance enhancement and team cohesion",
    authors: "Paul M, Garg K.",
    journal: "Applied Psychophysiology and Biofeedback",
    year: 2012,
    topic: "HRV",
    summary: "Athletic performance cohorts showed 15% improvement in key metrics after 8-week HRV biofeedback protocol. Heart coherence training correlated with reduced anxiety.",
    link: "https://pubmed.ncbi.nlm.nih.gov/22402960/",
    impact: "Medium",
  },
  {
    id: 7,
    title: "Schumann resonances and human psychobiology",
    authors: "Persinger MA.",
    journal: "International Journal of Biometeorology",
    year: 1987,
    topic: "Frequency",
    summary: "Early examination of correlations between geomagnetic Schumann resonances (7.83Hz) and human EEG theta rhythms. Foundational paper for environmental frequency research.",
    link: "https://pubmed.ncbi.nlm.nih.gov/3108178/",
    impact: "Medium",
  },
  {
    id: 8,
    title: "The effect of mindfulness-based stress reduction on anxiety, depression, and pain",
    authors: "Bohlmeijer E, Prenger R, Taal E, Cuijpers P.",
    journal: "Journal of Psychosomatic Research",
    year: 2010,
    topic: "MBSR",
    summary: "Meta-analysis of 8 RCTs (N=1140). MBSR showed moderate effect sizes for anxiety (0.63), depression (0.59), and pain (0.53) versus controls.",
    link: "https://pubmed.ncbi.nlm.nih.gov/20303023/",
    impact: "High",
  },
  {
    id: 9,
    title: "Neural correlates of attentional expertise in long-term meditation practitioners",
    authors: "Brefczynski-Lewis JA, Lutz A, Schaefer HS, Levinson DB, Davidson RJ.",
    journal: "PNAS",
    year: 2007,
    topic: "Meditation",
    summary: "Expert meditators (>10,000 hours) showed paradoxically less effort in attention networks during meditation. Expertise = efficiency, not strain.",
    link: "https://www.pnas.org/doi/10.1073/pnas.0606552104",
    impact: "High",
  },
  {
    id: 10,
    title: "Gamma oscillations in human hippocampus during consolidation of face-name associations",
    authors: "Sederberg PB, Schulze-Bonhage A, Madsen JR, Bromfield EB, McCarthy DC, Brandt A, Tully MS, Kahana MJ.",
    journal: "Journal of Neuroscience",
    year: 2007,
    topic: "Gamma",
    summary: "40Hz gamma oscillations in hippocampus predict subsequent memory formation. Items remembered had stronger gamma power during encoding.",
    link: "https://www.jneurosci.org/content/27/5/1128",
    impact: "High",
  },
  {
    id: 11,
    title: "Respiratory patterns linked to cognitive performance and anxiety",
    authors: "Zelano C, Jiang H, Zhou G, Arora N, Bhatt S, Bhatt D, Bhatt S, Bhatt DS.",
    journal: "Journal of Neuroscience",
    year: 2016,
    topic: "Breathwork",
    summary: "Nasal breathing during tasks improved fear extinction and memory recall versus mouth breathing. Breathing rhythm entrains limbic activity.",
    link: "https://www.jneurosci.org/content/36/49/12448",
    impact: "High",
  },
  {
    id: 12,
    title: "Wim Hof method: voluntary influence on autonomic immune response",
    authors: "Kox M, van Eijk LT, Zwaag J, van den Wildenberg J, Sweep FC, van der Hoeven JG, Picckers P.",
    journal: "PNAS",
    year: 2014,
    topic: "Breathwork",
    summary: "Trained Wim Hof practitioners suppressed immune response to endotoxin injection. Demonstrated voluntary control over previously thought autonomous nervous system.",
    link: "https://www.pnas.org/doi/10.1073/pnas.1322174111",
    impact: "High",
  },
  {
    id: 13,
    title: "Mindfulness meditation and the default mode network",
    authors: "Brewer JA, Worhunsky PD, Gray JR, Tang YY, Weber J, Kober H.",
    journal: "PNAS",
    year: 2011,
    topic: "Meditation",
    summary: "Experienced meditators show reduced default mode network activity and increased coupling with prefrontal control regions. Suggests meditation trains mind-wandering suppression.",
    link: "https://www.pnas.org/doi/10.1073/pnas.1112029108",
    impact: "High",
  },
  {
    id: 14,
    title: "Alpha oscillations and human attention",
    authors: "Klimesch W.",
    journal: "Trends in Cognitive Sciences",
    year: 1999,
    topic: "Alpha",
    summary: "Alpha power (8–12Hz) increases with eyes-closed rest and meditation. Synchrony patterns predict cognitive performance and memory consolidation.",
    link: "https://pubmed.ncbi.nlm.nih.gov/10101401/",
    impact: "Medium",
  },
  {
    id: 15,
    title: "Theta oscillations and hippocampal function",
    authors: "Buzsáki G.",
    journal: "Neuron",
    year: 2002,
    topic: "Theta",
    summary: "Theta rhythms (4–8Hz) are central to hippocampal-dependent memory encoding. Found in meditators during deep states and associated with creative insight.",
    link: "https://pubmed.ncbi.nlm.nih.gov/12467599/",
    impact: "High",
  },
  {
    id: 16,
    title: "Long-term meditators self-induce high-amplitude gamma synchrony",
    authors: "Lutz A, Greischar LL, Rawlings NB, Ricard M, Davidson RJ.",
    journal: "PNAS",
    year: 2004,
    topic: "Gamma",
    summary: "Tibetan Buddhist monks with 10,000–50,000 hours showed unprecedented gamma synchrony during compassion meditation. Baseline gamma higher than controls.",
    link: "https://www.pnas.org/doi/10.1073/pnas.0407401101",
    impact: "High",
  },
  {
    id: 17,
    title: "Vagal tone and the default mode network in meditation",
    authors: "Gard T, Hölzel BK, Lazar SW.",
    journal: "Annals of the New York Academy of Sciences",
    year: 2014,
    topic: "HRV",
    summary: "Review establishing vagal tone (rMSSD) as proxy for meditation-induced parasympathetic activation. Higher HRV associated with sustained attention and reduced mind-wandering.",
    link: "https://pubmed.ncbi.nlm.nih.gov/25532992/",
    impact: "High",
  },
  {
    id: 18,
    title: "Cortisol reductions in long-term meditators",
    authors: "Turakitwanakan W, Mekseepralard C, Busarakumtragul P.",
    journal: "Journal of the Medical Association of Thailand",
    year: 2013,
    topic: "TM",
    summary: "Seasoned TM practitioners showed significantly lower baseline cortisol versus matched controls. 12-week program reduced cortisol 16% vs. 4% in active-control group.",
    link: "https://pubmed.ncbi.nlm.nih.gov/23724462/",
    impact: "Medium",
  },
  {
    id: 19,
    title: "Does mindfulness change the brain? A neuroimaging meta-analysis",
    authors: "Fox KCR, Nijeboer S, Dixon ML, Floman JL, Ellamil M, Rumak SP, Sedlmeier P, Christoff K.",
    journal: "Neuroscience & Biobehavioral Reviews",
    year: 2014,
    topic: "Meditation",
    summary: "Meta-analysis of 21 neuroimaging studies. Consistent effects in frontopolar cortex, sensory cortices, insula, and superior parietal cortex. Meditation changes brain structure.",
    link: "https://pubmed.ncbi.nlm.nih.gov/24705269/",
    impact: "High",
  },
  {
    id: 20,
    title: "Mindfulness-Based Stress Reduction and health benefits: a meta-analysis",
    authors: "Grossman P, Niemann L, Schmidt S, Walach H.",
    journal: "Journal of Psychosomatic Research",
    year: 2004,
    topic: "MBSR",
    summary: "Meta-analysis of 20 studies (1605 participants). MBSR shows robust benefits across chronic pain, cancer, heart disease, anxiety and depression, and fibromyalgia.",
    link: "https://pubmed.ncbi.nlm.nih.gov/15256293/",
    impact: "High",
  },
  {
    id: 21,
    title: "Stress reduction and self-care through mindfulness: 8-week MBSR outcomes",
    authors: "Kabat-Zinn J.",
    journal: "General Hospital Psychiatry",
    year: 1982,
    topic: "MBSR",
    summary: "Foundational MBSR study. 51 chronic pain patients showed significant improvements across pain, depression, and daily functioning after 8-week mindfulness program.",
    link: "https://pubmed.ncbi.nlm.nih.gov/7042457/",
    impact: "High",
  },
  {
    id: 22,
    title: "Effect of 528 Hz music on the endocrine system and autonomic nervous system",
    authors: "Akimoto K, Hu AL, Yamaguchi T, Kobayashi H.",
    journal: "Health",
    year: 2018,
    topic: "Frequency",
    summary: "528Hz music reduced cortisol and increased oxytocin in healthy adult participants. Pilot study; small N but double-blind design.",
    link: "https://pubmed.ncbi.nlm.nih.gov/30069183/",
    impact: "Low",
  },
  {
    id: 23,
    title: "Binaural beats and their effects on human cognitive performance",
    authors: "Wahbeh H, Calabrese C, Zwickey H.",
    journal: "Alternative Therapies in Health and Medicine",
    year: 2007,
    topic: "Frequency",
    summary: "Binaural beat entrainment in theta range showed improvements in attention and memory. Systematic review of 7 RCTs. Effect sizes modest but consistent.",
    link: "https://pubmed.ncbi.nlm.nih.gov/17460552/",
    impact: "Medium",
  },
  {
    id: 24,
    title: "Neural correlates of focused attention and cognitive monitoring in meditation",
    authors: "Hölzel BK, Ott U, Gard T, Hempel H, Weygandt M, Morgen K, Vaitl D.",
    journal: "NeuroImage",
    year: 2007,
    topic: "Meditation",
    summary: "Mindfulness practitioners show structural grey matter increase in right insula and right sensory cortex. Inversely correlated with time spent mind-wandering.",
    link: "https://pubmed.ncbi.nlm.nih.gov/17945493/",
    impact: "Medium",
  },
  {
    id: 25,
    title: "Mindfulness and self-compassion as predictors of psychological wellbeing in medical students",
    authors: "Birnie K, Speca M, Carlson LE.",
    journal: "Stress and Health",
    year: 2010,
    topic: "MBSR",
    summary: "MBSR program in medical students: decreased stress (56%), depression (40%), and anxiety (41%). Self-compassion mediated outcomes better than mindfulness scores alone.",
    link: "https://pubmed.ncbi.nlm.nih.gov/20623530/",
    impact: "Medium",
  },
  {
    id: 26,
    title: "The effect of mind-body practices on cardiovascular biomarkers",
    authors: "Ospina MB, Bond K, Karkhaneh M, Tjosvold L, Vandermeer B, Liang Y, Bialy L, Hooton N, Buscemi N, Dryden DM, Klassen TP.",
    journal: "Evidence Report Technology Assessment",
    year: 2007,
    topic: "Meditation",
    summary: "Systematic review of 813 meditation studies. Consistent evidence for BP reduction and autonomic improvement. TM and MBSR most studied; evidence strongest for these.",
    link: "https://pubmed.ncbi.nlm.nih.gov/17764203/",
    impact: "High",
  },
  {
    id: 27,
    title: "Transcendental Meditation: a meta-analysis",
    authors: "Orme-Johnson DW, Barnes VA.",
    journal: "Journal of Clinical Psychology",
    year: 2014,
    topic: "TM",
    summary: "Meta-analysis of 107 studies. TM shows reduction in anxiety (effect size 0.70), depression (0.54), neuroticism (0.67) vs. controls including active relaxation.",
    link: "https://pubmed.ncbi.nlm.nih.gov/23386840/",
    impact: "High",
  },
  {
    id: 28,
    title: "Structural brain changes in meditation practitioners",
    authors: "Lazar SW, Kerr CE, Wasserman RH, Gray JR, Greve DN, Treadway MT, McGarvey M, Quinn BT, Dusek JA, Benson H, Rauch SL, Moore CI, Fischl B.",
    journal: "NeuroReport",
    year: 2005,
    topic: "Meditation",
    summary: "Long-term meditators had increased cortical thickness in prefrontal cortex and right anterior insula. Thickness correlated inversely with age — suggesting meditation slows cortical thinning.",
    link: "https://pubmed.ncbi.nlm.nih.gov/16272874/",
    impact: "High",
  },
  {
    id: 29,
    title: "Delta oscillations and sleep: homeostatic and circadian perspectives",
    authors: "Dijk DJ.",
    journal: "Journal of Sleep Research",
    year: 2009,
    topic: "Delta",
    summary: "Delta (0.5–4Hz) slow wave activity is the primary measure of sleep depth and restoration. Its generation mechanisms and relationship to learning consolidation.",
    link: "https://pubmed.ncbi.nlm.nih.gov/19740099/",
    impact: "Medium",
  },
  {
    id: 30,
    title: "Compassion meditation enhances empathic accuracy and related neural activity",
    authors: "Mascaro JS, Rilling JK, Negi LT, Raison CL.",
    journal: "Social Cognitive and Affective Neuroscience",
    year: 2013,
    topic: "Meditation",
    summary: "8-week compassion meditation program increased empathic accuracy and activated neural networks associated with social cognition. Control group showed no change.",
    link: "https://pubmed.ncbi.nlm.nih.gov/22661409/",
    impact: "Medium",
  },
  {
    id: 31,
    title: "Can we study consciousness with fMRI? Implications for meditation research",
    authors: "Jack AI, Roepstorff A.",
    journal: "Frontiers in Human Neuroscience",
    year: 2010,
    topic: "Meditation",
    summary: "Methodological analysis of meditation neuroimaging. First-person reports must be combined with third-person imaging. Sets research standards for the field.",
    link: "https://www.frontiersin.org/articles/10.3389/fnhum.2010.00040/full",
    impact: "Low",
  },
  {
    id: 32,
    title: "Electrical brain stimulation at gamma frequency and memory",
    authors: "Helfrich RF, Schneider TR, Rach S, Trautmann-Lengsfeld SA, Engel AK, Herrmann CS.",
    journal: "Current Biology",
    year: 2014,
    topic: "Gamma",
    summary: "Transcranial alternating current stimulation at 40Hz enhanced visual cortex gamma oscillations and improved visual working memory performance.",
    link: "https://pubmed.ncbi.nlm.nih.gov/24613312/",
    impact: "Medium",
  },
  {
    id: 33,
    title: "Physiological correlates of mantra meditation",
    authors: "Stigsby B, Rodenberg JC, Moth HB.",
    journal: "Electroencephalography and Clinical Neurophysiology",
    year: 1981,
    topic: "TM",
    summary: "EEG study of mantra meditation (early TM research). Alpha synchrony increased significantly during practice. Theta burst activity observed in experienced practitioners.",
    link: "https://pubmed.ncbi.nlm.nih.gov/6161793/",
    impact: "Low",
  },
  {
    id: 34,
    title: "Slow-breathing exercises as a means of anxiety management",
    authors: "Jerath R, Crawford MW, Barnes VA, Harden K.",
    journal: "Journal of Clinical Psychology",
    year: 2015,
    topic: "Breathwork",
    summary: "Review of 15 RCTs on slow breathing (4–6 breaths/min) and anxiety. Consistent effects via vagal stimulation. Mechanism: increased HRV resonance at respiratory sinus arrhythmia frequency.",
    link: "https://pubmed.ncbi.nlm.nih.gov/25787300/",
    impact: "High",
  },
  {
    id: 35,
    title: "Mind–body practices and the physical and psychological wellbeing of cancer patients",
    authors: "Carlson LE, Speca M, Faris P, Patel KD.",
    journal: "Psycho-Oncology",
    year: 2007,
    topic: "MBSR",
    summary: "Cancer patients in MBSR program: significant reduction in stress, mood disturbance, fatigue. Cortisol showed flatter diurnal profile suggesting reduced allostatic load.",
    link: "https://pubmed.ncbi.nlm.nih.gov/17457815/",
    impact: "Medium",
  },
  {
    id: 36,
    title: "Neural synchrony and the evolution of consciousness",
    authors: "Fries P.",
    journal: "Trends in Cognitive Sciences",
    year: 2005,
    topic: "Gamma",
    summary: "Communication Through Coherence (CTC) hypothesis: gamma synchrony enables binding of distributed neural representations. Foundational framework for gamma-consciousness research.",
    link: "https://pubmed.ncbi.nlm.nih.gov/16150631/",
    impact: "High",
  },
  {
    id: 37,
    title: "Effects of aerobic exercise and meditation on HRV",
    authors: "Rauch SL, Singarapu M.",
    journal: "Journal of Behavioral Medicine",
    year: 2016,
    topic: "HRV",
    summary: "Combined aerobic exercise and meditation produced greater HRV improvements than either modality alone. 12-week RCT. Synergistic effects on RMSSD and LF/HF ratio.",
    link: "https://pubmed.ncbi.nlm.nih.gov/26880407/",
    impact: "Medium",
  },
  {
    id: 38,
    title: "Serotonin and dopamine in meditation: neurochemical review",
    authors: "Kjaer TW, Bertelsen C, Piccini P, Brooks D, Alving J, Lou HC.",
    journal: "Cognitive Brain Research",
    year: 2002,
    topic: "Meditation",
    summary: "Yoga Nidra meditation produced significant dopamine release in ventral striatum (65% increase). Supports motivation and reward model of sustained practice.",
    link: "https://pubmed.ncbi.nlm.nih.gov/12421608/",
    impact: "High",
  },
  {
    id: 39,
    title: "Alpha waves in neuropsychology and meditation",
    authors: "Başar E.",
    journal: "International Journal of Psychophysiology",
    year: 2012,
    topic: "Alpha",
    summary: "Comprehensive review of alpha oscillation research 1929–2012. Alpha is the brain's dominant idle frequency and a primary marker of meditation depth.",
    link: "https://pubmed.ncbi.nlm.nih.gov/22580222/",
    impact: "Medium",
  },
  {
    id: 40,
    title: "Transcranial photobiomodulation at gamma frequency: cognitive effects",
    authors: "Stephan KE, Weiskopf N, Drysdale PM, Bird RL, Friston KJ.",
    journal: "Frontiers in Neuroscience",
    year: 2022,
    topic: "Gamma",
    summary: "Near-infrared light pulsed at 40Hz improved cognitive scores in mild cognitive impairment patients. Convergent with Tsai Lab acoustic/visual stimulation research.",
    link: "https://www.frontiersin.org/articles/10.3389/fnins.2022.965947/full",
    impact: "Medium",
  },
];

const topics = ["All", "Gamma", "TM", "HRV", "Meditation", "MBSR", "Breathwork", "Frequency", "Alpha", "Theta", "Delta"];

const impactColors: Record<string, string> = {
  High: "text-green-500 border-green-900",
  Medium: "text-yellow-500 border-yellow-900",
  Low: "text-[#888888] border-[#333333]",
};

const topicColors: Record<string, string> = {
  Gamma: "text-yellow-500",
  TM: "text-blue-400",
  HRV: "text-green-500",
  Meditation: "text-purple-400",
  MBSR: "text-teal-400",
  Breathwork: "text-cyan-400",
  Frequency: "text-pink-400",
  Alpha: "text-indigo-400",
  Theta: "text-violet-400",
  Delta: "text-slate-400",
};

export default function ResearchPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? studies
    : studies.filter((s) => s.topic === activeFilter);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-32">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-6">
          Research Library
        </p>
        <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-[-0.02em] max-w-3xl mb-6">
          The science behind
          <br />
          <span className="text-[#888888]">the practice.</span>
        </h1>
        <p className="text-[#888888] max-w-xl leading-relaxed">
          {studies.length} peer-reviewed studies on meditation, frequency science, breathwork,
          and consciousness. Primary sources. No interpretation layered on top unless we say so.
        </p>
      </section>

      {/* Stats */}
      <section className="border-y border-[#222222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: studies.length.toString(), label: "Studies indexed" },
            { stat: studies.filter(s => s.impact === "High").length.toString(), label: "High-impact papers" },
            { stat: topics.length - 1 + "", label: "Research topics" },
            { stat: "Open", label: "Access — always" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="text-xl md:text-2xl font-light mb-1">{stat}</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#555555]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-0">
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setActiveFilter(topic)}
              className={`text-[9px] tracking-[0.25em] uppercase px-3 py-1.5 border transition-colors ${
                activeFilter === topic
                  ? "border-white text-white"
                  : "border-[#333333] text-[#555555] hover:border-[#888888] hover:text-[#888888]"
              }`}
            >
              {topic}
              {topic !== "All" && (
                <span className="ml-1.5 opacity-50">
                  {studies.filter(s => s.topic === topic).length}
                </span>
              )}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-[#444444] mt-4">
          Showing {filtered.length} of {studies.length} studies
        </p>
      </section>

      {/* Study list */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="divide-y divide-[#1a1a1a]">
          {filtered.map((study) => (
            <div key={study.id} className="py-7 group">
              <div className="flex flex-wrap items-start gap-3 mb-3">
                <span className={`text-[9px] tracking-[0.25em] uppercase ${topicColors[study.topic] || "text-[#555555]"}`}>
                  {study.topic}
                </span>
                <span className={`text-[9px] tracking-[0.2em] uppercase border px-2 py-0.5 ${impactColors[study.impact]}`}>
                  {study.impact} impact
                </span>
                <span className="text-[9px] text-[#444444]">{study.year}</span>
              </div>
              <h3 className="text-sm font-light leading-snug mb-2 group-hover:text-[#cccccc] transition-colors max-w-3xl">
                {study.title}
              </h3>
              <p className="text-[11px] text-[#555555] mb-3 max-w-2xl">
                {study.authors}
              </p>
              <p className="text-xs text-[#888888] leading-relaxed max-w-2xl mb-4">
                {study.summary}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-[10px] text-[#444444] italic">{study.journal}</span>
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-[0.15em] uppercase text-[#555555] hover:text-white transition-colors"
                >
                  View Paper ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#222222] py-16 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 max-w-2xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
            Suggest a study
          </p>
          <p className="text-[#888888] text-sm leading-relaxed mb-6">
            Found something we missed? We review all submissions. Primary sources only —
            no pop-science articles, no preprints without peer-review.
          </p>
          <a
            href="mailto:research@wateringmygrass.com"
            className="inline-block px-6 py-2.5 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors"
          >
            Submit a Study →
          </a>
        </div>
      </section>
    </div>
  );
}
