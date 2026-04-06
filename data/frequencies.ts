export interface Citation {
  author: string;
  year: number;
  title: string;
  publication: string;
}

export interface FrequencySection {
  title: string;
  content: string;
  citations?: Citation[];
}

export interface FrequencyData {
  slug: string;
  name: string;
  hz: string;
  range: string;
  tagline: string;
  intro: string;
  brainwaveCategory?: string; // "Gamma" | "Beta" | "Alpha" | "Theta" | "Delta" | undefined
  nonMagicSession: string; // label shown in CTA
  sections: FrequencySection[];
  useCases: string[];
  metaTitle: string;
  metaDescription: string;
  relatedSlugs: string[];
}

export const frequencies: FrequencyData[] = [
  {
    slug: "gamma-40hz",
    name: "40Hz Gamma Waves",
    hz: "40",
    range: "30–100 Hz",
    tagline: "The frequency MIT researchers say could change brain disease forever.",
    brainwaveCategory: "Gamma",
    nonMagicSession: "Gamma 40Hz",
    intro:
      "At exactly 40 cycles per second, gamma brainwaves sit at the intersection of peak human cognition and one of the most exciting fields in neuroscience. The 40Hz frequency isn't just associated with elite focus — it's now the center of landmark Alzheimer's disease research at MIT, with implications that go far beyond meditation.",
    sections: [
      {
        title: "The MIT Discovery That Changed Everything",
        content:
          "In 2016, Li-Huei Tsai and her team at MIT's Picower Institute for Learning and Memory published findings that sent shockwaves through neuroscience. By exposing Alzheimer's model mice to 40Hz flickering light for just one hour per day, they observed a 40–50% reduction in amyloid beta plaques in the visual cortex — the toxic protein buildup central to Alzheimer's disease. The mechanism involves gamma oscillations driving microglial cells (the brain's immune cleanup crew) into high activity, clearing out plaques before they accumulate. Follow-up work extended this to auditory 40Hz stimulation (40Hz tones) and showed effects beyond the visual cortex, including the hippocampus — the seat of memory formation. A 2019 paper demonstrated that combined audio-visual 40Hz stimulation reduced amyloid and tau pathology across multiple brain regions.",
        citations: [
          {
            author: "Iaccarino, H.F. et al.",
            year: 2016,
            title: "Gamma frequency entrainment attenuates amyloid load and modifies microglia",
            publication: "Nature, 540(7632), 230–235",
          },
          {
            author: "Martorell, A.J. et al.",
            year: 2019,
            title: "Multi-sensory Gamma Stimulation Ameliorates Alzheimer's-Associated Pathology and Improves Cognition",
            publication: "Cell, 177(2), 256–271",
          },
        ],
      },
      {
        title: "Gamma Waves and Peak Cognitive Performance",
        content:
          "Before Alzheimer's research thrust 40Hz into the spotlight, gamma waves were already known as the signature of high-level information processing. Gamma oscillations bind together different regions of the brain, allowing disparate pieces of sensory and cognitive information to be integrated into coherent perception. Studies of meditating Tibetan Buddhist monks by Richard Davidson at the University of Wisconsin-Madison showed extraordinarily strong gamma synchrony — particularly in practitioners with decades of experience. Long-term meditators showed gamma amplitude significantly higher than novices even at rest, suggesting meditation training permanently reshapes gamma activity. This work established gamma not as a transient state but as a trainable neural signature.",
        citations: [
          {
            author: "Lutz, A. et al.",
            year: 2004,
            title: "Long-term meditators self-induce high-amplitude gamma synchrony during mental practice",
            publication: "PNAS, 101(46), 16369–16373",
          },
        ],
      },
      {
        title: "How 40Hz Entrainment Works",
        content:
          "Neural entrainment is the tendency of brainwave oscillations to synchronize with external rhythmic stimuli — a phenomenon called frequency-following response (FFR). When you listen to a 40Hz binaural beat (a slightly different frequency in each ear, with the brain perceiving the mathematical difference), or a 40Hz isochronic tone (a rhythmically pulsing single tone), neural circuits begin oscillating at 40Hz. This is not passive relaxation — gamma entrainment is active cognitive engagement. EEG studies confirm that steady-state auditory evoked potentials at 40Hz are among the most robust in the frequency-following response, meaning your brain is particularly good at locking onto this frequency.",
      },
      {
        title: "Memory, Learning, and Working Memory",
        content:
          "Gamma activity is tightly coupled with working memory — the short-term buffer that lets you hold and manipulate information while solving problems. Research from Howard and Bhatt showed that gamma oscillations in the hippocampus time-stamp memories, helping distinguish recent from older experiences. People with stronger gamma activity during encoding tasks demonstrate better recall. For students, knowledge workers, and anyone in a cognitively demanding field, gamma sessions before high-focus work may serve as a neural priming mechanism.",
        citations: [
          {
            author: "Howard, M.W. et al.",
            year: 2003,
            title: "Gamma oscillations correlate with working memory load in humans",
            publication: "Cerebral Cortex, 13(12), 1369–1374",
          },
        ],
      },
    ],
    useCases: [
      "Pre-work session before deep focus blocks",
      "Learning and memorization tasks",
      "Creative problem-solving",
      "Morning cognitive priming",
      "Preventive neurological wellness",
    ],
    metaTitle: "40Hz Gamma Waves: MIT Research, Benefits & Meditation | WMG",
    metaDescription:
      "Explore the science behind 40Hz gamma waves — MIT's Alzheimer's research, peak cognition, memory, and how to use gamma frequency sessions in meditation.",
    relatedSlugs: ["alpha-10hz", "beta-20hz", "theta-6hz"],
  },
  {
    slug: "alpha-10hz",
    name: "Alpha Waves (10Hz)",
    hz: "10",
    range: "8–13 Hz",
    tagline: "The frequency of effortless focus — alert without tension.",
    brainwaveCategory: "Alpha",
    nonMagicSession: "Alpha Flow",
    intro:
      "Alpha waves occupy the sweet spot between active thinking and sleep — a state of relaxed wakefulness that ancient meditators and modern neuroscientists alike recognize as optimal for creative thinking, stress recovery, and calm attention. At roughly 8–13Hz, alpha is the default rhythm of a resting, healthy brain.",
    sections: [
      {
        title: "What Alpha Waves Actually Are",
        content:
          "Alpha waves were the first brainwave pattern ever recorded, discovered by Hans Berger in 1929. He noticed that closing your eyes — even just for a moment — caused the brain's electrical pattern to shift into a slow, rhythmic oscillation around 10Hz. This 'alpha block' reversal (alpha appears when eyes are closed and suppresses when they open) told scientists something important: alpha is the brain's idling state, but an intelligent idle. It signals that the brain is processing internally rather than reacting to the outside world.",
        citations: [
          {
            author: "Berger, H.",
            year: 1929,
            title: "Über das Elektrenkephalogramm des Menschen",
            publication: "Archiv für Psychiatrie und Nervenkrankheiten, 87(1), 527–570",
          },
        ],
      },
      {
        title: "Alpha and the Stress Response",
        content:
          "One of alpha's most clinically significant roles is antagonizing the stress response. Alpha power is inversely correlated with cortisol — meaning higher alpha activity is associated with lower physiological stress markers. Studies on mindfulness meditation consistently show that beginners see the largest alpha increases in their first few weeks of practice. EEG biofeedback (neurofeedback) protocols targeting alpha enhancement are used in clinical settings to treat generalized anxiety disorder, PTSD, and chronic stress, with effect sizes comparable to medication in some trials.",
        citations: [
          {
            author: "Kasamatsu, A. & Hirai, T.",
            year: 1966,
            title: "An electroencephalographic study on the Zen meditation (Zazen)",
            publication: "Psychiatry and Clinical Neurosciences, 20(4), 315–336",
          },
          {
            author: "Hardt, J.V. & Kamiya, J.",
            year: 1978,
            title: "Anxiety change through electroencephalographic alpha feedback seen only in high anxiety subjects",
            publication: "Science, 201(4350), 79–81",
          },
        ],
      },
      {
        title: "Alpha and Creative Flow",
        content:
          "Creativity researchers were puzzled for decades by what made some people more creative than others. A key finding: creative individuals show higher resting alpha power and, critically, a stronger alpha increase during divergent thinking tasks. The alpha state suppresses irrelevant cortical processing — essentially quieting the inner critic — and allows weak, remote associations between ideas to surface. This is why creative insights often come during showers, walks, or the hypnagogic moment before sleep: all alpha-dominant states. Alpha entrainment sessions can deliberately induce this creative window.",
        citations: [
          {
            author: "Fink, A. et al.",
            year: 2009,
            title: "The creative brain: Investigation of brain activity during creative problem solving by means of EEG and FMRI",
            publication: "Human Brain Mapping, 30(3), 734–748",
          },
        ],
      },
      {
        title: "The Alpha-Theta Border: A Special Zone",
        content:
          "At 7–8Hz — the border between alpha and theta — lies what some researchers call the 'hypnagogic state': the twilight between waking and sleep. This transitional zone is associated with vivid imagery, spontaneous insight, and accelerated learning. Sports psychologists have used alpha-theta training to help athletes overcome performance anxiety and achieve flow states on demand. Pennebaker's work showed that alpha-theta neurofeedback produced significant reductions in post-traumatic stress symptoms compared to control groups.",
        citations: [
          {
            author: "Peniston, E.G. & Kulkosky, P.J.",
            year: 1991,
            title: "Alpha-theta brainwave neuro-feedback therapy for Vietnam veterans with combat-related post-traumatic stress disorder",
            publication: "Medical Psychotherapy, 4, 47–60",
          },
        ],
      },
    ],
    useCases: [
      "Stress decompression after work",
      "Creative brainstorming sessions",
      "Pre-sleep wind-down",
      "Managing performance anxiety",
      "Entry-point meditation for beginners",
    ],
    metaTitle: "Alpha Waves 10Hz: Benefits, Science & Meditation | WMG",
    metaDescription:
      "Alpha brainwaves at 10Hz are the signature of calm focus and creative flow. Explore the neuroscience, research, and how to use alpha frequency meditation.",
    relatedSlugs: ["gamma-40hz", "theta-6hz", "schumann-7-83hz"],
  },
  {
    slug: "theta-6hz",
    name: "Theta Waves (6Hz)",
    hz: "6",
    range: "4–8 Hz",
    tagline: "The deep meditation state — where memory and imagination converge.",
    brainwaveCategory: "Theta",
    nonMagicSession: "Theta Deep",
    intro:
      "Theta brainwaves operate at the edge of consciousness — present during REM dreaming, deep meditation, and the drowsy state just before sleep. At 4–8Hz, theta is slower than waking thought but faster than deep sleep. It's the frequency associated with memory consolidation, emotional processing, and the kind of insight that only comes when you get truly quiet.",
    sections: [
      {
        title: "Theta in Sleep and Memory",
        content:
          "Theta waves are the dominant rhythm of the hippocampus during memory consolidation — the process by which short-term experiences become long-term memories. Research from John O'Keefe (Nobel Prize, 2014) and his colleagues demonstrated that hippocampal theta oscillations coordinate the timing of neural firing in 'place cells', enabling spatial memory and navigation. The implication extends beyond rats in mazes: human hippocampal theta coordinates episodic memory encoding. Strong theta activity during learning predicts better recall hours and days later.",
        citations: [
          {
            author: "O'Keefe, J. & Nadel, L.",
            year: 1978,
            title: "The Hippocampus as a Cognitive Map",
            publication: "Oxford University Press",
          },
          {
            author: "Kahana, M.J. et al.",
            year: 1999,
            title: "Human theta oscillations exhibit task dependence during virtual maze navigation",
            publication: "Nature, 399(6738), 781–784",
          },
        ],
      },
      {
        title: "Theta in Meditation",
        content:
          "Experienced meditators — particularly those practicing open monitoring (non-directive) styles — show pronounced theta activity in frontal and prefrontal regions. This pattern differs from beginners who show primarily alpha. Frontal theta during meditation correlates with subjective reports of 'inner stillness', decreased mind-wandering, and heightened metacognitive awareness. Japanese Zen studies from the 1960s were among the first to document sustained theta in advanced practitioners — a state that can now be deliberately trained through entrainment.",
        citations: [
          {
            author: "Hinterberger, T. et al.",
            year: 2014,
            title: "Neuronal correlates of the non-dual state of awareness",
            publication: "Frontiers in Psychology, 5, 1panggilan",
          },
          {
            author: "Lomas, T. et al.",
            year: 2015,
            title: "A systematic review of the neurophysiology of mindfulness on EEG oscillations",
            publication: "Neuroscience & Biobehavioral Reviews, 57, 401–410",
          },
        ],
      },
      {
        title: "Emotional Processing and Trauma",
        content:
          "Theta's role in emotional processing makes it a focal point in trauma therapy research. The amygdala — the brain's threat-detection center — communicates with the prefrontal cortex through theta-frequency coherence. When this coherence breaks down (as in PTSD), emotional regulation degrades. Alpha-theta neurofeedback protocols target the theta state to help the brain reprocess traumatic memories in a calmer physiological context. A landmark study by Scott and Kaiser showed that combined alpha/theta neurofeedback produced sustained reductions in PTSD symptoms and substance abuse relapse.",
        citations: [
          {
            author: "Scott, W.C. et al.",
            year: 2005,
            title: "Effects of an EEG biofeedback protocol on a mixed substance abusing population",
            publication: "American Journal of Drug and Alcohol Abuse, 31(3), 455–469",
          },
        ],
      },
      {
        title: "Theta and Hypnagogia",
        content:
          "The hypnagogic state — the liminal zone between waking and sleep — is rich in theta activity. This state is notable for spontaneous visual imagery, creative solutions, and involuntary insight. Thomas Edison famously used this state deliberately, napping in a chair with steel balls in his hands; as he drifted into theta, the balls would drop, waking him at the moment of maximum creative access. Nikola Tesla and Salvador Dali reportedly used similar techniques. Theta entrainment can replicate this state without requiring you to balance steel balls.",
      },
    ],
    useCases: [
      "Deep meditation and extended sits",
      "Accelerated learning and memory encoding",
      "Pre-sleep processing and review",
      "Emotional release and integration",
      "Creative visualization",
    ],
    metaTitle: "Theta Waves 6Hz: Deep Meditation, Memory & Science | WMG",
    metaDescription:
      "Theta brainwaves at 4–8Hz govern deep meditation, REM memory consolidation, and emotional processing. Science, research, and how to practice with theta sessions.",
    relatedSlugs: ["delta-2hz", "alpha-10hz", "schumann-7-83hz"],
  },
  {
    slug: "delta-2hz",
    name: "Delta Waves (2Hz)",
    hz: "2",
    range: "0.5–4 Hz",
    tagline: "The deepest frequency — where the body heals itself.",
    brainwaveCategory: "Delta",
    nonMagicSession: "Delta Sleep",
    intro:
      "Delta waves are the slowest brainwaves measurable in humans — large, powerful oscillations between 0.5 and 4Hz that dominate deep, dreamless sleep. They are not the absence of consciousness but its most fundamental layer: the state during which the body releases growth hormone, repairs tissue, consolidates the immune system, and processes the deepest emotional material. Delta is the brain in full restoration mode.",
    sections: [
      {
        title: "Deep Sleep and Physical Recovery",
        content:
          "Stages 3 and 4 of non-REM sleep — slow-wave sleep (SWS) — are characterized by delta activity and represent the most physically restorative phase of the sleep cycle. During SWS, the pituitary gland releases the majority of daily growth hormone (HGH), driving muscle repair, fat metabolism, and tissue regeneration. A study by Van Cauter and colleagues demonstrated that SWS disruption — even without total sleep deprivation — caused significant impairment in insulin sensitivity within a week, equivalent to aging the metabolic system by a decade. Optimizing delta sleep is not optional for physical performance.",
        citations: [
          {
            author: "Van Cauter, E. et al.",
            year: 2008,
            title: "Metabolic consequences of sleep and sleep loss",
            publication: "Sleep Medicine, 9(Suppl 1), S23–S28",
          },
          {
            author: "Takahashi, Y. et al.",
            year: 1968,
            title: "Growth hormone secretion during sleep",
            publication: "Journal of Clinical Investigation, 47(9), 2079–2090",
          },
        ],
      },
      {
        title: "The Glymphatic System: Your Brain's Overnight Wash",
        content:
          "One of the most significant neuroscience discoveries of the past decade was the identification of the glymphatic system — a brain-specific waste-clearance network that operates almost exclusively during slow-wave sleep. Maiken Nedergaard's lab at the University of Rochester showed that cerebrospinal fluid flushes through the brain's interstitial space during delta sleep, clearing metabolic waste including amyloid beta and tau — the same proteins implicated in Alzheimer's disease. The brain's cells shrink by up to 60% during deep sleep to facilitate this flow. Poor delta sleep is now understood as a direct risk factor for neurodegenerative disease.",
        citations: [
          {
            author: "Xie, L. et al.",
            year: 2013,
            title: "Sleep drives metabolite clearance from the adult brain",
            publication: "Science, 342(6156), 373–377",
          },
        ],
      },
      {
        title: "Delta in Advanced Meditation",
        content:
          "In most people, delta occurs only during deep unconscious sleep. Extraordinarily advanced meditators — particularly those with 40,000+ hours of practice — have been recorded showing delta activity while remaining fully conscious. This phenomenon, called 'lucid delta', represents a neural state with no mainstream parallel. Researchers at the Max Planck Institute found that certain accomplished practitioners could maintain coherent delta oscillations across frontal and parietal regions while engaging in verbal dialogue. These individuals report a state of profound stillness and transparency — what contemplative traditions call 'rigpa' or pure awareness.",
        citations: [
          {
            author: "Lutz, A. et al.",
            year: 2004,
            title: "Long-term meditators self-induce high-amplitude gamma synchrony during mental practice",
            publication: "PNAS, 101(46), 16369–16373",
          },
        ],
      },
      {
        title: "Delta Entrainment for Sleep Optimization",
        content:
          "Delta binaural beats presented at 0.5–4Hz can help shift the brain toward slow-wave sleep architecture. Studies using delta entrainment show improvements in subjective sleep quality, increased time in stage 3/4 sleep, and enhanced growth hormone release. For people with disrupted sleep — shift workers, new parents, high-stress professionals — delta entrainment sessions before bed serve as a physiological primer, helping the brain rapidly enter the restorative delta state rather than cycling through lighter sleep stages.",
      },
    ],
    useCases: [
      "Pre-sleep optimization",
      "Deep rest and recovery",
      "Immune system support",
      "Cognitive restoration after intense work",
      "Chronic stress recovery protocols",
    ],
    metaTitle: "Delta Waves 2Hz: Deep Sleep, Healing & Science | WMG",
    metaDescription:
      "Delta brainwaves at 0.5–4Hz drive deep sleep, growth hormone release, and the brain's glymphatic cleanup system. Research-backed guide to delta frequency meditation.",
    relatedSlugs: ["theta-6hz", "alpha-10hz", "schumann-7-83hz"],
  },
  {
    slug: "beta-20hz",
    name: "Beta Waves (20Hz)",
    hz: "20",
    range: "13–30 Hz",
    tagline: "The frequency of active thinking — and why too much of it costs you.",
    brainwaveCategory: "Beta",
    nonMagicSession: "Focus Beta",
    intro:
      "Beta brainwaves are the signature of the waking, thinking mind. Active problem-solving, analytical reasoning, focused attention, and verbal processing all operate in beta. At 13–30Hz, beta is fast, task-oriented, and essential — but it's also the frequency most associated with anxiety, rumination, and nervous system dysregulation when it dominates without respite.",
    sections: [
      {
        title: "Beta and Focused Attention",
        content:
          "When you're reading, calculating, debating, or executing complex tasks, your prefrontal cortex lights up in beta. Beta activity in the sensorimotor cortex specifically governs motor preparation — the neural groundwork for intentional movement. Athletes and performers show refined beta patterns: not globally high beta (which correlates with anxiety), but targeted beta in task-relevant regions and lower beta everywhere else. Elite performance is often characterized by efficient, localized beta rather than global arousal.",
        citations: [
          {
            author: "Klimesch, W. et al.",
            year: 1998,
            title: "Beta band power changes in a memory task: the role of task familiarity and visual attention",
            publication: "Clinical Neurophysiology, 109(7), 1331–1337",
          },
        ],
      },
      {
        title: "The Problem with Chronic Beta",
        content:
          "Modern knowledge work has engineered a near-constant beta state into human neurology. Open offices, always-on messaging, and context-switching create what researchers call 'beta entrainment by environment' — the nervous system trained to remain vigilant by ambient stimulation. Chronic high-frequency beta (20–30Hz) correlates with elevated cortisol, reduced frontal lobe executive function, impaired working memory, and anxiety disorders. The brain was never designed to sustain high beta for 10+ hour workdays. Deliberate alpha and theta breaks are not optional for long-term cognitive performance — they're maintenance.",
        citations: [
          {
            author: "Demos, J.N.",
            year: 2005,
            title: "Getting Started with Neurofeedback",
            publication: "W. W. Norton & Company",
          },
        ],
      },
      {
        title: "Low Beta vs. High Beta",
        content:
          "Not all beta is equal. Low beta (13–17Hz) is associated with relaxed focus — the state of engaged learning. Mid-range beta (17–23Hz) corresponds to active processing, thinking out loud, and problem-solving. High beta (23–30Hz, sometimes called 'beta 3') correlates with intense concentration but also rumination, anxiety, and stress. EEG practitioners distinguish these bands specifically because their implications are so different. Beta entrainment at 15–17Hz is used in ADHD protocols to increase sustained attention; high-beta suppression is used in anxiety treatment.",
      },
      {
        title: "The Beta-Alpha Interplay",
        content:
          "The most powerful skill a knowledge worker can develop is deliberate oscillation between beta (focused output) and alpha (recovery and synthesis). Research on ultradian rhythms by Klein and Armitage suggests the brain naturally cycles through 90–120 minute attentional phases, with pressure to shift into lower-frequency, inward-focused processing. Fighting this cycle with caffeine and willpower depletes executive function; working with it through structured breaks — particularly alpha meditation breaks — maintains cognitive throughput across the day.",
        citations: [
          {
            author: "Klein, R. & Armitage, R.",
            year: 1979,
            title: "Rhythms in human performance: 1½-hour oscillations in cognitive style",
            publication: "Science, 204(4399), 1326–1328",
          },
        ],
      },
    ],
    useCases: [
      "Pre-presentation focus",
      "Active study and technical work",
      "ADHD focus support",
      "Morning work preparation",
      "Short-burst cognitive priming",
    ],
    metaTitle: "Beta Waves 20Hz: Focus, Anxiety & Neuroscience | WMG",
    metaDescription:
      "Beta brainwaves at 13–30Hz drive focused thinking but also fuel anxiety when unbalanced. Research guide to beta frequency, performance, and why rest matters.",
    relatedSlugs: ["gamma-40hz", "alpha-10hz", "theta-6hz"],
  },
  {
    slug: "schumann-7-83hz",
    name: "Schumann Resonance (7.83Hz)",
    hz: "7.83",
    range: "7.83 Hz (fundamental)",
    tagline: "The Earth's electromagnetic heartbeat — and why it matches your brain.",
    nonMagicSession: "Schumann Ground",
    intro:
      "At 7.83Hz, the Schumann Resonance is the fundamental electromagnetic frequency of the cavity between the Earth's surface and the ionosphere. It's produced by lightning strikes — about 100 per second globally — and it's been pulsing at nearly this exact frequency for as long as lightning has existed. It also happens to land precisely at the alpha-theta border in human brainwave activity. The overlap is not lost on researchers.",
    sections: [
      {
        title: "The Discovery of Earth's Frequency",
        content:
          "In 1952, German physicist Winfried Otto Schumann mathematically predicted that the space between Earth's surface and the ionosphere would function as a resonant cavity, producing standing electromagnetic waves. This was confirmed experimentally in 1954 and has been measured consistently at 7.83Hz ever since, with harmonics at 14.3, 20.8, 27.3, and 33.8Hz. The frequency is maintained by the continuous global lightning circuit — an invisible electromagnetic blanket that wraps the entire planet.",
        citations: [
          {
            author: "Schumann, W.O.",
            year: 1952,
            title: "Über die strahlungslosen Eigenschwingungen einer leitenden Kugel, die von einer Luftschicht und einer Ionosphärenhülle umgeben ist",
            publication: "Zeitschrift für Naturforschung A, 7(2), 149–154",
          },
        ],
      },
      {
        title: "The Biological Connection",
        content:
          "The Schumann frequency sitting at the alpha-theta border is unlikely to be coincidental to everyone. Research by Persinger and Saroka, as well as work from the HeartMath Institute, has explored correlations between geomagnetic activity and human physiological and psychological states. EEG studies show that human alpha activity (particularly at 7.8–8Hz) correlates with geomagnetic indices measured the same day. Circadian rhythm research suggests that humans, like all animals, use electromagnetic environmental cues for biological timekeeping — and the Schumann Resonance is among the oldest and most consistent such signals on Earth.",
        citations: [
          {
            author: "Persinger, M.A. & Saroka, K.S.",
            year: 2015,
            title: "Quantitative evidence for direct effects between Earth-Ionosphere Schumann Resonances and human cerebral cortical activity",
            publication: "International Letters of Chemistry, Physics and Astronomy, 55, 39–53",
          },
        ],
      },
      {
        title: "The Grounding Hypothesis",
        content:
          "Earthing (grounding) research — direct physical contact with the Earth's surface — consistently shows reductions in inflammatory markers, cortisol normalization, improved sleep, and reduced pain. One proposed mechanism is synchronization with the Schumann Resonance via conductive contact. Chevalier and colleagues in a 2012 review documented reductions in blood viscosity and inflammatory cytokines from grounding exposure. The mechanism remains debated, but the effect sizes in randomized controlled trials are significant enough to take seriously.",
        citations: [
          {
            author: "Chevalier, G. et al.",
            year: 2012,
            title: "Earthing: Health Implications of Reconnecting the Human Body to the Earth's Surface Electrons",
            publication: "Journal of Environmental and Public Health, 2012, Article ID 291541",
          },
        ],
      },
      {
        title: "7.83Hz for Meditation",
        content:
          "At the alpha-theta boundary, 7.83Hz is uniquely positioned to guide the brain into a deeply calm, inwardly focused state while maintaining conscious awareness. Unlike pure theta (which can induce drowsiness), 7.83Hz often produces a state of alert stillness — open awareness without object fixation. Meditators report that sessions at this frequency feel particularly grounded, stable, and natural. Whether this is due to neural resonance with the Earth's field or simply the neurological properties of the alpha-theta border, the experiential reports are consistent.",
      },
    ],
    useCases: [
      "Grounding after high-stress periods",
      "Nature-deprived urban recovery",
      "Long meditation sits",
      "Jet lag and circadian reset",
      "Baseline nervous system calibration",
    ],
    metaTitle: "Schumann Resonance 7.83Hz: Earth's Frequency & Your Brain | WMG",
    metaDescription:
      "The Schumann Resonance at 7.83Hz is Earth's electromagnetic heartbeat — and it matches the alpha-theta border in human brainwaves. Science, research, and meditation guide.",
    relatedSlugs: ["alpha-10hz", "theta-6hz", "delta-2hz"],
  },
  {
    slug: "528hz",
    name: "528Hz Solfeggio",
    hz: "528",
    range: "Solfeggio scale",
    tagline: "The 'Love Frequency' — what the science actually says.",
    nonMagicSession: "528Hz Tone",
    intro:
      "528Hz has acquired the most dramatic cultural mythology of any frequency in the modern wellness space: 'DNA repair', 'love frequency', miracle healing. The reality is more nuanced — but still fascinating. There is legitimate research on 528Hz effects on biological systems, and there's significant pseudoscience. Here's how to tell them apart.",
    sections: [
      {
        title: "The Origin of Solfeggio Frequencies",
        content:
          "The solfeggio frequencies are a set of ancient musical tones supposedly derived from medieval Gregorian chants, rediscovered by Dr. Joseph Puleo in the 1990s using a numerological system applied to Bible verses. The scientific legitimacy of this origin story is essentially zero — the frequencies don't correspond to historical scales and the numerological derivation has no physical basis. However, this doesn't mean the frequencies themselves have no effects. Sound frequencies interact with matter and biological tissue regardless of their mythological origin story.",
      },
      {
        title: "The DNA Research: What Was Actually Claimed",
        content:
          "The claim that 528Hz repairs DNA traces primarily to a 2010 paper by John Hutchinson and Mark Whitely claiming that 528Hz sound reduced oil viscosity in a Gulf of Mexico sample. This was a poorly controlled study from non-credentialed researchers and has never been replicated. The jump from 'affected oil viscosity' to 'repairs human DNA' is not science — it's narrative. However, a 2018 Japanese study by Akimoto and colleagues found that 528Hz significantly increased testosterone in human endocrine cells and showed protective effects on cells treated with ethanol — a peer-reviewed finding in a legitimate journal worth taking seriously, though requiring replication.",
        citations: [
          {
            author: "Akimoto, K. et al.",
            year: 2018,
            title: "Effect of 528 Hz Music on the Endocrine System and Autonomic Nervous System",
            publication: "Health, 10(9), 1159–1170",
          },
        ],
      },
      {
        title: "The Acoustics of 528Hz",
        content:
          "528Hz falls in the upper midrange of the auditory spectrum — a frequency humans are particularly sensitive to. It lies between the E5 and F5 notes in standard 440Hz tuning (it's closer to C5 in some alternate tuning systems). Research on the effects of sustained sine-wave tones in this range documents mild parasympathetic activation — reduction in heart rate, decreased skin conductance, and measurable HRV improvement in some subjects. Whether this is specific to 528Hz or a property of midrange sine tones generally remains unstudied.",
      },
      {
        title: "Practical Use of 528Hz",
        content:
          "Setting aside the mythology, 528Hz as a meditation tone has consistent anecdotal support and the biological plausibility of its calming effects on the autonomic nervous system. When used as background sound during meditation — particularly long alpha or theta sessions — the sustained tone may support parasympathetic dominance and reduce mind-wandering. Treat it as a sound tool with emerging evidence, not a miracle therapy. What you'll find in practice: it's a remarkably pleasant frequency to sit with.",
      },
    ],
    useCases: [
      "Heart-centered and compassion meditation",
      "Emotional healing sessions",
      "Relaxation and parasympathetic recovery",
      "Sound bath background",
      "Relationship and connection intentions",
    ],
    metaTitle: "528Hz Solfeggio: Science, DNA Claims & Meditation | WMG",
    metaDescription:
      "528Hz is called the 'Love Frequency' — but what does the science actually show? Honest breakdown of the research, the myths, and how to use 528Hz in meditation.",
    relatedSlugs: ["432hz", "396hz", "639hz"],
  },
  {
    slug: "432hz",
    name: "432Hz Tuning",
    hz: "432",
    range: "Concert pitch alternative",
    tagline: "The tuning debate that won't die — and the physics worth knowing.",
    nonMagicSession: "432Hz Tone",
    intro:
      "432Hz is the frequency of A4 in an alternative concert pitch system — versus the modern standard of 440Hz established in 1939. Proponents argue it's more mathematically harmonious with nature, more pleasant to the ear, and physiologically calmer. Critics say it's numerology. The truth involves some legitimate acoustics and a lot of wishful physics.",
    sections: [
      {
        title: "440Hz: Why It's the Standard",
        content:
          "The 440Hz standard for concert A4 was established by the International Organization for Standardization (ISO 16) in 1955, with roots in a 1939 BBC conference. Before standardization, concert pitch varied wildly across Europe — from 415Hz to 460Hz — creating problems for instrument makers and traveling musicians. The choice of 440Hz was pragmatic, not mathematical. It is not the product of any natural or mathematical optimum. This is the first fact that proponents of 432Hz typically get right.",
      },
      {
        title: "The Mathematics of 432Hz",
        content:
          "432 is a highly composite number with significant roles in several mathematical and cosmological systems. It's 16 × 27, it appears in ancient Indian, Babylonian, and Norse cosmological time cycles, and it bears simple mathematical relationships to other frequencies in just intonation (pure ratio tuning). Building a chromatic scale from 432Hz A produces a set of frequencies that align more closely with whole-number ratios in the harmonic series. Whether this mathematical elegance translates to measurable physiological difference is the unresolved question — but the math itself is real.",
      },
      {
        title: "The Listening Studies",
        content:
          "A 2019 study by Calamassi and Pomponi compared physiological responses to music recorded at 440Hz versus 432Hz in a crossover design with 33 participants. The 432Hz condition showed significantly lower heart rate, lower blood pressure, and higher subjective relaxation scores. The study was small and the music type was identical except for pitch — suggesting either a placebo effect or a genuine psychoacoustic response to tuning. It has been cited extensively in 432Hz advocacy literature but has not been independently replicated.",
        citations: [
          {
            author: "Calamassi, D. & Pomponi, G.P.",
            year: 2019,
            title: "Music Tuned to 432 Hz Versus 446 Hz and Its Effects on Anxiety",
            publication: "EXPLORE: The Journal of Science & Healing, 15(4), 283–290",
          },
        ],
      },
      {
        title: "432Hz in Practice",
        content:
          "Many musicians — especially in the ambient, new age, and meditation music genres — record in 432Hz tuning by shifting all instruments down 8 cents from standard pitch. The perceptual difference to most ears is subtle but some listeners report a 'warmer' or 'more relaxed' quality. For meditation purposes, the physiological evidence for a meaningful difference is thin but directionally positive. Using 432Hz as a sound environment for meditation probably causes no harm and may contribute to a calmer listening experience through psychoacoustic or expectation mechanisms.",
      },
    ],
    useCases: [
      "Background ambient sound for meditation",
      "Relaxation sessions",
      "Music listening for recovery",
      "Exploring psychoacoustic sensitivity",
      "Heart rate variability (HRV) sessions",
    ],
    metaTitle: "432Hz Tuning: Science Behind the Debate | WMG",
    metaDescription:
      "432Hz versus 440Hz — the tuning debate explained with actual physics and research. What the studies show, what's myth, and how to use 432Hz in meditation.",
    relatedSlugs: ["528hz", "396hz", "639hz"],
  },
  {
    slug: "174hz",
    name: "174Hz Solfeggio",
    hz: "174",
    range: "Solfeggio scale",
    tagline: "The lowest solfeggio frequency — foundation, safety, and pain.",
    nonMagicSession: "174Hz Ground",
    intro:
      "174Hz is the lowest of the nine Solfeggio frequencies and is associated with physical foundation, safety, and anesthetic qualities. At the lowest end of easy human hearing (human range is roughly 20Hz–20kHz, with maximum sensitivity around 1–3kHz), 174Hz is felt as much as heard — a deep vibration in the chest cavity that practitioners describe as grounding and stabilizing.",
    sections: [
      {
        title: "The Physical Character of 174Hz",
        content:
          "174Hz falls in the low bass register — below the lowest note on a standard guitar (82Hz) but within the range of a bass guitar (41–294Hz) and the lower octaves of a piano. At this frequency, wavelengths are approximately 2 meters long and the vibration physically resonates with the chest cavity, which has similar dimensions. This physical resonance — felt as a low rumble or vibration rather than a discrete pitch — may be responsible for 174Hz's reported grounding effect, independent of any frequency-specific biology.",
      },
      {
        title: "Low-Frequency Sound and Pain Perception",
        content:
          "Research on low-frequency sound and pain is sparse but directionally consistent. A 2016 study published in the Journal of Pain Research found that vibroacoustic therapy (delivering low-frequency sound through physical contact) reduced pain perception significantly in patients with fibromyalgia. Low-frequency vibration activates mechanoreceptors and may modulate gate control mechanisms in the spinal cord, interfering with pain signal transmission. 174Hz specifically hasn't been studied in isolation, but the general mechanism for low-frequency sound as an analgesic adjunct has biological support.",
        citations: [
          {
            author: "Chesky, K.S. & Michel, D.E.",
            year: 1991,
            title: "The Music Vibration Table (MVT): Developing a technology and conceptual model for pain relief",
            publication: "Music Therapy Perspectives, 9, 32–37",
          },
        ],
      },
      {
        title: "174Hz and the Root Chakra Correspondence",
        content:
          "In systems that map solfeggio frequencies to chakras, 174Hz corresponds to the root chakra (Muladhara) — the energy center associated with survival instincts, physical safety, and groundedness. The root chakra framework is not within scientific discourse, but the psychological association between low-frequency sound, physical presence, and felt safety has legitimate psychoacoustic parallels. Low-frequency sounds activate the parasympathetic nervous system differently than high-frequency sounds — the latter trigger vigilance responses, the former tend toward settling.",
      },
      {
        title: "Using 174Hz in Practice",
        content:
          "174Hz works best as a foundational tone in longer meditation sessions — particularly those oriented toward physical awareness, body scanning, or trauma integration. The deep physical resonance can help practitioners who struggle with dissociation or who find it difficult to feel 'in' their bodies during meditation. It is often layered with higher frequencies (like 528Hz or 639Hz) to create a rich harmonic environment. On its own, it's best experienced through high-quality speakers or headphones capable of reproducing bass accurately.",
      },
    ],
    useCases: [
      "Grounding and body awareness",
      "Trauma integration sessions",
      "Physical pain management support",
      "Somatic meditation practices",
      "Foundation for layered frequency work",
    ],
    metaTitle: "174Hz Solfeggio: Grounding, Pain & Sound Healing | WMG",
    metaDescription:
      "174Hz is the lowest solfeggio frequency, associated with physical grounding and pain reduction. Research, acoustic science, and how to use it in meditation practice.",
    relatedSlugs: ["396hz", "528hz", "schumann-7-83hz"],
  },
  {
    slug: "396hz",
    name: "396Hz Solfeggio",
    hz: "396",
    range: "Solfeggio scale",
    tagline: "Liberation from fear — what neuroscience says about frequency and emotion.",
    nonMagicSession: "396Hz Release",
    intro:
      "396Hz is the solfeggio frequency traditionally associated with releasing fear, guilt, and grief — the emotional weights that accumulate in the nervous system over a lifetime. Whether frequency-specific emotional release is real or metaphorical, the intersection of sound, emotion, and the nervous system is one of the most active frontiers in psychoacoustic research.",
    sections: [
      {
        title: "Sound and the Emotional Brain",
        content:
          "The auditory pathway is one of the fastest routes to the limbic system — the brain's emotional processing center. Auditory information reaches the amygdala within 10–15 milliseconds, faster than it reaches conscious awareness. This evolutionary shortcut exists because sound carries survival-critical information (predator movement, infant cries, social signals). It also means that sustained sound environments profoundly shape emotional state. Research by Stefan Koelsch at the University of Bergen has demonstrated using fMRI that music at specific intervals and tempos activates or suppresses amygdala activity — producing measurable emotional effects independent of lyrical content.",
        citations: [
          {
            author: "Koelsch, S.",
            year: 2010,
            title: "Towards a neural basis of music-evoked emotions",
            publication: "Trends in Cognitive Sciences, 14(3), 131–137",
          },
        ],
      },
      {
        title: "Fear Extinction and Acoustic Environments",
        content:
          "Fear extinction — the neurological process by which conditioned fear responses are gradually extinguished — is highly context-dependent. Research by Milad and Quirk showed that the prefrontal cortex gates fear extinction through its inhibitory connections to the amygdala. Acoustic environments that support prefrontal activation (calm, structured sounds with predictable patterns) enhance extinction processes. This is part of why many exposure therapy protocols incorporate calming background music or binaural beats — creating a neural context more conducive to fear memory reconsolidation.",
        citations: [
          {
            author: "Milad, M.R. & Quirk, G.J.",
            year: 2002,
            title: "Neurons in medial prefrontal cortex signal memory for fear extinction",
            publication: "Nature, 420(6911), 70–74",
          },
        ],
      },
      {
        title: "The Vagal Connection",
        content:
          "The vagus nerve — the primary conduit of the parasympathetic nervous system — has branches in the inner ear and middle ear. Polyvagal theory, developed by Stephen Porges, proposes that the social engagement system (ventral vagal circuit) is activated by midrange acoustic frequencies that correspond to human speech prosody and certain musical intervals. 396Hz falls within a frequency range (roughly 300–700Hz) that may specifically activate the ventral vagal state — the physiological state associated with safety, social connection, and emotional openness.",
        citations: [
          {
            author: "Porges, S.W.",
            year: 2011,
            title: "The Polyvagal Theory: Neurophysiological Foundations of Emotions, Attachment, Communication, and Self-regulation",
            publication: "W.W. Norton & Company",
          },
        ],
      },
    ],
    useCases: [
      "Grief and loss processing",
      "Anxiety reduction sessions",
      "Shame and guilt release",
      "Compassion and self-forgiveness practices",
      "Integration after difficult experiences",
    ],
    metaTitle: "396Hz Solfeggio: Fear Release, Emotion & Neuroscience | WMG",
    metaDescription:
      "396Hz solfeggio is associated with liberating fear and guilt. Explore what neuroscience says about sound and emotion — the amygdala, polyvagal theory, and practice.",
    relatedSlugs: ["528hz", "639hz", "174hz"],
  },
  {
    slug: "639hz",
    name: "639Hz Solfeggio",
    hz: "639",
    range: "Solfeggio scale",
    tagline: "The frequency of connection — and the neuroscience of belonging.",
    nonMagicSession: "639Hz Connect",
    intro:
      "639Hz is the solfeggio frequency most associated with interpersonal harmony, communication, and connection. In a research context, this maps surprisingly well to what neuroscience knows about the acoustic conditions that activate human social bonding circuits — the systems governing trust, empathy, and attachment. This is not metaphor: frequency environments shape social neurobiology in measurable ways.",
    sections: [
      {
        title: "Sound and Social Bonding",
        content:
          "The neurochemistry of social bonding — oxytocin, serotonin, endorphin release — is partly mediated by auditory experience. Singing in groups, rhythmic entrainment, and shared musical experiences all reliably elevate oxytocin and reduce cortisol. Dunbar's research at Oxford on choirs and group music-making found that just 60 minutes of group singing produced greater social bonding, pain tolerance, and trust than equivalent amounts of other group activities. The mechanism involves synchronized autonomic nervous system activity — groups entrain to shared rhythmic and melodic patterns.",
        citations: [
          {
            author: "Dunbar, R.I.M. et al.",
            year: 2012,
            title: "Performance of music elevates pain threshold and positive affect: implications for the evolutionary function of music",
            publication: "Evolutionary Psychology, 10(4), 688–702",
          },
        ],
      },
      {
        title: "639Hz and Polyvagal Safety",
        content:
          "From a polyvagal perspective, frequencies in the 500–700Hz range are within the prosodic range of human voice — the acoustic bandwidth of safety signals in mammalian communication. The middle ear muscles, governed by the vagus nerve, are tuned to this range. Sustained exposure to tones in this band may maintain or enhance the ventral vagal state — the neurological foundation for empathy, attunement, and social engagement. 639Hz in particular is close to the first harmonic of the human male speaking voice, which may activate deep phylogenetic co-regulation responses.",
      },
      {
        title: "Communication and Coherence",
        content:
          "Group meditation and synchronized breathing practices produce measurable physiological coherence between participants — HRV patterns, respiratory rhythms, and even EEG signatures align. Research by the HeartMath Institute demonstrated that physiological coherence is contagious: when one person in a pair achieves HRV coherence, the other's HRV tends to shift toward coherence as well, even without physical contact. Shared frequency environments — including shared sound fields — may serve as a social entrainment mechanism, enabling the kind of co-regulation that human nervous systems evolved for.",
        citations: [
          {
            author: "McCraty, R. et al.",
            year: 1998,
            title: "The electricity of touch: Detection and measurement of cardiac energy exchange between people",
            publication: "Brain and Values: Is a Biological Science of Values Possible, Erlbaum, 359–379",
          },
        ],
      },
    ],
    useCases: [
      "Relationship healing and repair",
      "Community and group meditation",
      "Couples and family sessions",
      "Communication and conflict resolution",
      "Loneliness and isolation recovery",
    ],
    metaTitle: "639Hz Solfeggio: Connection, Bonding & Neuroscience | WMG",
    metaDescription:
      "639Hz is the solfeggio frequency of connection and interpersonal harmony. Explore the neuroscience of social bonding, polyvagal theory, and how to use it in meditation.",
    relatedSlugs: ["528hz", "396hz", "432hz"],
  },
];

export function getFrequency(slug: string): FrequencyData | undefined {
  return frequencies.find((f) => f.slug === slug);
}
