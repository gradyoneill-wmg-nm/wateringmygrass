export type FrequencyCategory =
  | "Delta"
  | "Theta"
  | "Alpha"
  | "Beta"
  | "Gamma"
  | "Solfeggio"
  | "Chakra"
  | "Planetary"
  | "Schumann"
  | "Singing Bowl"
  | "Cymatics"
  | "Voice"
  | "Nogier"
  | "Rife"
  | "Binaural Preset"
  | "Special";

export type FrequencyType = "binaural" | "pure" | "isochronic";

export interface MatrixFrequency {
  id: string;
  name: string;
  hz: number;
  category: FrequencyCategory;
  type: FrequencyType;
  description: string;
  effects: string;
  supabaseUrl?: string;
}

const BASE = "https://sbeqrkvxgfymrsqgugqz.supabase.co/storage/v1/object/public/audio/frequencies";
const url = (id: string) => `${BASE}/${id}.wav`;

function isBinaural(hz: number): FrequencyType {
  if (hz < 20) return "binaural";
  return "pure";
}

export const MATRIX_FREQUENCIES: MatrixFrequency[] = [
  // ── DELTA (0.5–4 Hz) ────────────────────────────────────────────────────────
  { id: "delta_0_5", name: "Delta 0.5Hz", hz: 0.5, category: "Delta", type: "binaural", description: "Deepest delta — profound unconscious healing states", effects: "Deep unconscious processing, organ repair signaling", supabaseUrl: url("delta_0_5") },
  { id: "delta_1", name: "Delta 1Hz", hz: 1, category: "Delta", type: "binaural", description: "Deep dreamless sleep entrainment", effects: "Human Growth Hormone release, cellular repair", supabaseUrl: url("delta_1") },
  { id: "delta_1_5", name: "Delta 1.5Hz", hz: 1.5, category: "Delta", type: "binaural", description: "Profound relaxation, immune enhancement", effects: "Pain relief, immune modulation", supabaseUrl: url("delta_1_5") },
  { id: "delta_2", name: "Delta 2Hz", hz: 2, category: "Delta", type: "binaural", description: "Deep sleep, glymphatic system activation", effects: "Brain waste clearance, nervous system recovery", supabaseUrl: url("delta_2") },
  { id: "delta_2_5", name: "Delta 2.5Hz", hz: 2.5, category: "Delta", type: "binaural", description: "Production of enkephalins — natural pain relief", effects: "Analgesia, sedation, relaxation", supabaseUrl: url("delta_2_5") },
  { id: "delta_3", name: "Delta 3Hz", hz: 3, category: "Delta", type: "binaural", description: "High amplitude delta — deepest sleep cycles", effects: "Maximum delta entrainment, rejuvenation", supabaseUrl: url("delta_3") },
  { id: "delta_3_5", name: "Delta 3.5Hz", hz: 3.5, category: "Delta", type: "binaural", description: "Accelerated language retention, feeling of unity", effects: "Insight, language learning, wholeness", supabaseUrl: url("delta_3_5") },
  { id: "delta_4", name: "Delta 4Hz", hz: 4, category: "Delta", type: "binaural", description: "Theta border — extrasensory perception, deep meditation", effects: "Memory consolidation, creative insight", supabaseUrl: url("delta_4") },

  // ── THETA (4–8 Hz) ──────────────────────────────────────────────────────────
  { id: "theta_4_5", name: "Theta 4.5Hz", hz: 4.5, category: "Theta", type: "binaural", description: "Shamanic state of consciousness, vivid imagery", effects: "Deep hypnotic induction, spiritual access", supabaseUrl: url("theta_4_5") },
  { id: "theta_5", name: "Theta 5Hz", hz: 5, category: "Theta", type: "binaural", description: "Unusual states of consciousness, inner peace", effects: "Memory encoding, emotional release", supabaseUrl: url("theta_5") },
  { id: "theta_6", name: "Theta 6Hz", hz: 6, category: "Theta", type: "binaural", description: "Deep meditation, long-term memory access", effects: "Subconscious integration, creativity boost", supabaseUrl: url("theta_6") },
  { id: "theta_6_5", name: "Theta 6.5Hz", hz: 6.5, category: "Theta", type: "binaural", description: "Entry to high theta — center of theta band", effects: "Hypnagogia, creative visualization", supabaseUrl: url("theta_6_5") },
  { id: "theta_7", name: "Theta 7Hz", hz: 7, category: "Theta", type: "binaural", description: "Sleep onset, mental and astral projection reports", effects: "Dream induction, subconscious work", supabaseUrl: url("theta_7") },
  { id: "theta_7_5", name: "Theta 7.5Hz", hz: 7.5, category: "Theta", type: "binaural", description: "Ease of creative visualization, REM sleep", effects: "Artistic inspiration, inter-hemispheric balance", supabaseUrl: url("theta_7_5") },
  { id: "theta_7_83", name: "Schumann Primary 7.83Hz", hz: 7.83, category: "Theta", type: "binaural", description: "Earth's electromagnetic resonance frequency", effects: "Grounding, circadian regulation, nervous system sync", supabaseUrl: url("theta_7_83") },
  { id: "theta_8", name: "Theta 8Hz", hz: 8, category: "Theta", type: "binaural", description: "Alpha-theta border — deeply relaxed but aware", effects: "Stress reduction, light trance, insight", supabaseUrl: url("theta_8") },

  // ── ALPHA (8–14 Hz) ─────────────────────────────────────────────────────────
  { id: "alpha_8_5", name: "Alpha 8.5Hz", hz: 8.5, category: "Alpha", type: "binaural", description: "Deeply relaxed alpha — bridge between states", effects: "Serotonin release, calm awareness", supabaseUrl: url("alpha_8_5") },
  { id: "alpha_9", name: "Alpha 9Hz", hz: 9, category: "Alpha", type: "binaural", description: "Eyes-closed relaxation, visual imagery", effects: "Awareness without attachment, clarity", supabaseUrl: url("alpha_9") },
  { id: "alpha_10", name: "Alpha 10Hz", hz: 10, category: "Alpha", type: "binaural", description: "Mid-alpha — effortless focus, flow states", effects: "Serotonin boost, creative problem-solving, stress relief", supabaseUrl: url("alpha_10") },
  { id: "alpha_10_5", name: "Alpha 10.5Hz", hz: 10.5, category: "Alpha", type: "binaural", description: "Mind/body integration, healing states", effects: "Immune system boost, inner awareness", supabaseUrl: url("alpha_10_5") },
  { id: "alpha_11", name: "Alpha 11Hz", hz: 11, category: "Alpha", type: "binaural", description: "Relaxed yet alert — ideal for meditation and learning", effects: "Pre-sleep learning optimization, calm focus", supabaseUrl: url("alpha_11") },
  { id: "alpha_12", name: "Alpha 12Hz", hz: 12, category: "Alpha", type: "binaural", description: "High alpha — mental stability, centering", effects: "Mental clarity, emotional regulation", supabaseUrl: url("alpha_12") },

  // ── BETA (14–30 Hz) ─────────────────────────────────────────────────────────
  { id: "beta_14", name: "Beta 14Hz", hz: 14, category: "Beta", type: "binaural", description: "SMR — sensorimotor rhythm, calm focus", effects: "Attention, focus without anxiety", supabaseUrl: url("beta_14") },
  { id: "beta_16", name: "Beta 16Hz", hz: 16, category: "Beta", type: "binaural", description: "Alert but relaxed beta — concentration", effects: "Cognitive performance, learning enhancement", supabaseUrl: url("beta_16") },
  { id: "beta_18_focus", name: "Beta 18Hz", hz: 18, category: "Beta", type: "binaural", description: "Focus-oriented beta — task completion", effects: "Sustained attention, executive function", supabaseUrl: url("beta_18_focus") },
  { id: "beta_20", name: "Beta 20Hz", hz: 20, category: "Beta", type: "binaural", description: "Active thinking, alertness, working memory", effects: "Active cognition, anxiety reduction when moderate", supabaseUrl: url("beta_20") },
  { id: "beta_22_motor", name: "Beta 22Hz", hz: 22, category: "Beta", type: "binaural", description: "Motor planning beta — movement preparation", effects: "Motor coordination, physical performance", supabaseUrl: url("beta_22_motor") },
  { id: "beta_25_concentrate", name: "Beta 25Hz", hz: 25, category: "Beta", type: "binaural", description: "Concentration — studying and reading", effects: "Mental concentration, active problem-solving", supabaseUrl: url("beta_25_concentrate") },

  // ── GAMMA (30+ Hz) ──────────────────────────────────────────────────────────
  { id: "gamma_30", name: "Gamma 30Hz", hz: 30, category: "Gamma", type: "binaural", description: "Low gamma — sensory integration and consciousness", effects: "Cross-modal sensory binding, expanded awareness", supabaseUrl: url("gamma_30") },
  { id: "gamma_36_prebind", name: "Gamma 36Hz", hz: 36, category: "Gamma", type: "binaural", description: "Pre-binding gamma — anticipatory integration", effects: "Perceptual binding, advanced cognition", supabaseUrl: url("gamma_36_prebind") },
  { id: "gamma_40", name: "Gamma 40Hz", hz: 40, category: "Gamma", type: "pure", description: "Peak cognitive gamma — MIT research, Alzheimer's pathway", effects: "Peak cognition, neural synchronization, BDNF elevation", supabaseUrl: url("gamma_40") },
  { id: "gamma_50", name: "Gamma 50Hz", hz: 50, category: "Gamma", type: "pure", description: "High gamma — consciousness and perception studies", effects: "Heightened perception, unified consciousness", supabaseUrl: url("gamma_50") },
  { id: "gamma_80", name: "Gamma 80Hz", hz: 80, category: "Gamma", type: "pure", description: "High gamma — hyper-focused states", effects: "Intense focus, information processing speed", supabaseUrl: url("gamma_80") },
  { id: "gamma_100_high", name: "Gamma 100Hz", hz: 100, category: "Gamma", type: "pure", description: "Ultra-high gamma — advanced brain training", effects: "Neural speed, heightened awareness", supabaseUrl: url("gamma_100_high") },

  // ── SOLFEGGIO ───────────────────────────────────────────────────────────────
  { id: "solfeggio_111", name: "111 Hz", hz: 111, category: "Solfeggio", type: "pure", description: "Beta endorphins, cell regeneration, neuro-oscillatory stability", effects: "Mood elevation, cellular healing, calm euphoria", supabaseUrl: url("solfeggio_111") },
  { id: "solfeggio_174", name: "174 Hz", hz: 174, category: "Solfeggio", type: "pure", description: "Grounding — foundation of physical existence", effects: "Pain reduction, organ strength, security", supabaseUrl: url("solfeggio_174") },
  { id: "solfeggio_285", name: "285 Hz", hz: 285, category: "Solfeggio", type: "pure", description: "Tissue regeneration — healing wounds and cellular repair", effects: "Physical healing, cellular restoration, safety", supabaseUrl: url("solfeggio_285") },
  { id: "solfeggio_396", name: "396 Hz", hz: 396, category: "Solfeggio", type: "pure", description: "Liberating — release of guilt and fear", effects: "Emotional liberation, fear dissolution, grounding", supabaseUrl: url("solfeggio_396") },
  { id: "solfeggio_417", name: "417 Hz", hz: 417, category: "Solfeggio", type: "pure", description: "Undoing situations — facilitating change", effects: "Trauma clearing, transition support, cell repair", supabaseUrl: url("solfeggio_417") },
  { id: "solfeggio_432", name: "432 Hz", hz: 432, category: "Solfeggio", type: "pure", description: "Natural tuning — A432, mathematically consistent with universe", effects: "Deep relaxation, natural resonance, harmony", supabaseUrl: url("solfeggio_432") },
  { id: "solfeggio_528", name: "528 Hz — Love Frequency", hz: 528, category: "Solfeggio", type: "pure", description: "DNA repair, transformation and miracles", effects: "Love, clarity, DNA repair signaling, transformation", supabaseUrl: url("solfeggio_528") },
  { id: "solfeggio_639", name: "639 Hz", hz: 639, category: "Solfeggio", type: "pure", description: "Connecting — harmonizing relationships", effects: "Interpersonal harmony, compassion, tolerance", supabaseUrl: url("solfeggio_639") },
  { id: "solfeggio_741", name: "741 Hz", hz: 741, category: "Solfeggio", type: "pure", description: "Awakening intuition — expression and solutions", effects: "Problem-solving, self-expression, detoxification", supabaseUrl: url("solfeggio_741") },
  { id: "solfeggio_852", name: "852 Hz", hz: 852, category: "Solfeggio", type: "pure", description: "Returning to spiritual order — intuition awakening", effects: "Spiritual awareness, intuition, third eye activation", supabaseUrl: url("solfeggio_852") },
  { id: "solfeggio_963", name: "963 Hz", hz: 963, category: "Solfeggio", type: "pure", description: "Divine consciousness — crown chakra activation", effects: "Pineal activation, spiritual connection, unity", supabaseUrl: url("solfeggio_963") },
  { id: "solfeggio_1122", name: "1122 Hz", hz: 1122, category: "Solfeggio", type: "pure", description: "Extended solfeggio — advanced harmonic series", effects: "Deep spiritual attunement, master frequency", supabaseUrl: url("solfeggio_1122") },

  // ── CHAKRA ──────────────────────────────────────────────────────────────────
  { id: "chakra_root", name: "Root Chakra 194.18Hz", hz: 194.18, category: "Chakra", type: "pure", description: "Muladhara — foundation, survival, grounding", effects: "Stability, security, earth connection", supabaseUrl: url("chakra_root") },
  { id: "chakra_sacral", name: "Sacral Chakra 210.42Hz", hz: 210.42, category: "Chakra", type: "pure", description: "Svadhisthana — creativity, emotion, sexuality", effects: "Creative flow, emotional balance, pleasure", supabaseUrl: url("chakra_sacral") },
  { id: "chakra_solar", name: "Solar Plexus 126.22Hz", hz: 126.22, category: "Chakra", type: "pure", description: "Manipura — personal power, confidence", effects: "Willpower, confidence, digestion", supabaseUrl: url("chakra_solar") },
  { id: "chakra_heart", name: "Heart Chakra 136.1Hz", hz: 136.1, category: "Chakra", type: "pure", description: "Anahata — love, compassion, healing", effects: "Heart opening, empathy, emotional healing", supabaseUrl: url("chakra_heart") },
  { id: "chakra_throat", name: "Throat Chakra 141.27Hz", hz: 141.27, category: "Chakra", type: "pure", description: "Vishuddha — communication, self-expression", effects: "Clear communication, authenticity, creativity", supabaseUrl: url("chakra_throat") },
  { id: "chakra_third_eye", name: "Third Eye 221.23Hz", hz: 221.23, category: "Chakra", type: "pure", description: "Ajna — intuition, clarity, inner vision", effects: "Intuition, insight, mental clarity", supabaseUrl: url("chakra_third_eye") },
  { id: "chakra_crown", name: "Crown Chakra 172.06Hz", hz: 172.06, category: "Chakra", type: "pure", description: "Sahasrara — divine connection, enlightenment", effects: "Spiritual connection, universal consciousness", supabaseUrl: url("chakra_crown") },

  // ── PLANETARY ───────────────────────────────────────────────────────────────
  { id: "planetary_earth_year", name: "Earth Year 136.1Hz", hz: 136.1, category: "Planetary", type: "pure", description: "Earth's orbital frequency — Om, Sadja, Cosmic OM", effects: "Deep meditation, Earth harmony, grounding", supabaseUrl: url("planetary_earth_year") },
  { id: "planetary_earth_day", name: "Earth Day 194.18Hz", hz: 194.18, category: "Planetary", type: "pure", description: "Earth's rotational frequency", effects: "Vitality, dynamic energy, physical invigoration", supabaseUrl: url("planetary_earth_day") },
  { id: "planetary_moon", name: "Moon 210.42Hz", hz: 210.42, category: "Planetary", type: "pure", description: "Moon's orbital frequency — emotional tides", effects: "Emotional intelligence, intuition, cycles", supabaseUrl: url("planetary_moon") },
  { id: "planetary_sun", name: "Sun 126.22Hz", hz: 126.22, category: "Planetary", type: "pure", description: "Sun's frequency — life force, vitality", effects: "Energy, joy, life force activation", supabaseUrl: url("planetary_sun") },
  { id: "planetary_mars", name: "Mars 144.72Hz", hz: 144.72, category: "Planetary", type: "pure", description: "Mars frequency — action, courage, will", effects: "Drive, decisiveness, physical energy", supabaseUrl: url("planetary_mars") },
  { id: "planetary_venus", name: "Venus 221.23Hz", hz: 221.23, category: "Planetary", type: "pure", description: "Venus frequency — love, beauty, art", effects: "Love, creativity, aesthetic appreciation", supabaseUrl: url("planetary_venus") },
  { id: "planetary_jupiter", name: "Jupiter 183.58Hz", hz: 183.58, category: "Planetary", type: "pure", description: "Jupiter frequency — expansion, wisdom, abundance", effects: "Optimism, growth, spiritual expansion", supabaseUrl: url("planetary_jupiter") },
  { id: "planetary_saturn", name: "Saturn 147.85Hz", hz: 147.85, category: "Planetary", type: "pure", description: "Saturn frequency — structure, discipline, karma", effects: "Grounding, discipline, long-term focus", supabaseUrl: url("planetary_saturn") },
  { id: "planetary_mercury", name: "Mercury 141.27Hz", hz: 141.27, category: "Planetary", type: "pure", description: "Mercury frequency — communication, mind, agility", effects: "Mental agility, communication, perception", supabaseUrl: url("planetary_mercury") },
  { id: "planetary_uranus", name: "Uranus 207.36Hz", hz: 207.36, category: "Planetary", type: "pure", description: "Uranus frequency — innovation, liberation", effects: "Creative breakthroughs, freedom, innovation", supabaseUrl: url("planetary_uranus") },
  { id: "planetary_neptune", name: "Neptune 211.44Hz", hz: 211.44, category: "Planetary", type: "pure", description: "Neptune frequency — dreams, transcendence", effects: "Dreams, transcendence, spiritual dissolution", supabaseUrl: url("planetary_neptune") },
  { id: "planetary_pluto", name: "Pluto 140.25Hz", hz: 140.25, category: "Planetary", type: "pure", description: "Pluto frequency — transformation, regeneration", effects: "Deep transformation, shadow work, rebirth", supabaseUrl: url("planetary_pluto") },

  // ── SCHUMANN ────────────────────────────────────────────────────────────────
  { id: "schumann_1", name: "Schumann 7.83Hz", hz: 7.83, category: "Schumann", type: "binaural", description: "Primary Schumann resonance — Earth's electromagnetic heartbeat", effects: "Circadian entrainment, anti-jet-lag, CNS calibration", supabaseUrl: url("schumann_1") },
  { id: "schumann_2", name: "Schumann 14.3Hz", hz: 14.3, category: "Schumann", type: "binaural", description: "Second Schumann harmonic", effects: "Focused attention, SMR rhythm alignment", supabaseUrl: url("schumann_2") },
  { id: "schumann_3", name: "Schumann 20.8Hz", hz: 20.8, category: "Schumann", type: "binaural", description: "Third Schumann harmonic", effects: "Active alertness, earth-synchronized beta", supabaseUrl: url("schumann_3") },
  { id: "schumann_4", name: "Schumann 27.3Hz", hz: 27.3, category: "Schumann", type: "binaural", description: "Fourth Schumann harmonic", effects: "Higher beta cognition, earth-resonant activity", supabaseUrl: url("schumann_4") },
  { id: "schumann_5", name: "Schumann 33.8Hz", hz: 33.8, category: "Schumann", type: "binaural", description: "Fifth Schumann harmonic", effects: "Gamma onset, expanded awareness, earth-gamma sync", supabaseUrl: url("schumann_5") },

  // ── SINGING BOWLS ───────────────────────────────────────────────────────────
  { id: "bowl_c4", name: "Bowl C4 261.63Hz", hz: 261.63, category: "Singing Bowl", type: "pure", description: "Root note — grounding, foundation, C4 singing bowl", effects: "Stability, grounding, physical presence", supabaseUrl: url("bowl_c4") },
  { id: "bowl_d4", name: "Bowl D4 293.66Hz", hz: 293.66, category: "Singing Bowl", type: "pure", description: "Sacral resonance — D4 crystal bowl", effects: "Creativity, emotional flow, sacral activation", supabaseUrl: url("bowl_d4") },
  { id: "bowl_e4", name: "Bowl E4 329.63Hz", hz: 329.63, category: "Singing Bowl", type: "pure", description: "Solar plexus — E4 crystal bowl", effects: "Personal power, confidence, energy center", supabaseUrl: url("bowl_e4") },
  { id: "bowl_f4", name: "Bowl F4 349.23Hz", hz: 349.23, category: "Singing Bowl", type: "pure", description: "Heart resonance — F4 crystal bowl", effects: "Love, compassion, heart opening", supabaseUrl: url("bowl_f4") },
  { id: "bowl_g4", name: "Bowl G4 392Hz", hz: 392, category: "Singing Bowl", type: "pure", description: "Throat resonance — G4 crystal bowl", effects: "Expression, communication, vocal activation", supabaseUrl: url("bowl_g4") },
  { id: "bowl_a4", name: "Bowl A4 440Hz", hz: 440, category: "Singing Bowl", type: "pure", description: "Third eye resonance — A4, standard concert pitch", effects: "Intuition, mental clarity, perception", supabaseUrl: url("bowl_a4") },
  { id: "bowl_b4", name: "Bowl B4 493.88Hz", hz: 493.88, category: "Singing Bowl", type: "pure", description: "Crown resonance — B4 crystal bowl", effects: "Crown activation, spiritual awareness, unity", supabaseUrl: url("bowl_b4") },
  { id: "bowl_c5", name: "Bowl C5 523.25Hz", hz: 523.25, category: "Singing Bowl", type: "pure", description: "Transcendent octave — C5 singing bowl", effects: "Spiritual transcendence, pure consciousness", supabaseUrl: url("bowl_c5") },

  // ── CYMATICS ────────────────────────────────────────────────────────────────
  { id: "cymatics_circle", name: "Cymatics Circle 110Hz", hz: 110, category: "Cymatics", type: "pure", description: "Simple circular cymatic pattern — Stonehenge resonance", effects: "Unity, wholeness, simple harmony", supabaseUrl: url("cymatics_circle") },
  { id: "cymatics_sri_yantra", name: "Sri Yantra 222Hz", hz: 222, category: "Cymatics", type: "pure", description: "Sri Yantra geometric pattern frequency", effects: "Sacred geometry activation, divine feminine", supabaseUrl: url("cymatics_sri_yantra") },
  { id: "cymatics_flower_of_life", name: "Flower of Life 333Hz", hz: 333, category: "Cymatics", type: "pure", description: "Flower of Life pattern resonance", effects: "Sacred geometry, life force patterns, creation", supabaseUrl: url("cymatics_flower_of_life") },
  { id: "cymatics_dna", name: "DNA Pattern 528Hz", hz: 528, category: "Cymatics", type: "pure", description: "DNA cymatic pattern — same as Solfeggio 528Hz", effects: "DNA resonance, transformation, love frequency", supabaseUrl: url("cymatics_dna") },
  { id: "cymatics_metatron", name: "Metatron's Cube 444Hz", hz: 444, category: "Cymatics", type: "pure", description: "Metatron's Cube — master sacred geometry", effects: "Sacred geometry activation, divine masculine", supabaseUrl: url("cymatics_metatron") },

  // ── VOICE / MANTRA ──────────────────────────────────────────────────────────
  { id: "voice_om", name: "OM 136.1Hz", hz: 136.1, category: "Voice", type: "pure", description: "Sacred OM — universal primordial sound", effects: "Universal resonance, consciousness unification", supabaseUrl: url("voice_om") },
  { id: "voice_ah", name: "AH 800Hz", hz: 800, category: "Voice", type: "pure", description: "Open vowel AH — heart center vocalization", effects: "Heart opening, emotional expression, release", supabaseUrl: url("voice_ah") },
  { id: "voice_oh", name: "OH 500Hz", hz: 500, category: "Voice", type: "pure", description: "OH vowel — solar plexus activation", effects: "Gut-brain connection, core power, resonance", supabaseUrl: url("voice_oh") },
  { id: "voice_mmm", name: "MMM 200Hz", hz: 200, category: "Voice", type: "pure", description: "Humming MMM — vagus nerve stimulation", effects: "Vagal tone, anxiety reduction, focus", supabaseUrl: url("voice_mmm") },
  { id: "voice_ee", name: "EE 1000Hz", hz: 1000, category: "Voice", type: "pure", description: "High EE vowel — pineal stimulation", effects: "Pineal activation, mental clarity, vision", supabaseUrl: url("voice_ee") },

  // ── NOGIER ──────────────────────────────────────────────────────────────────
  { id: "nogier_a", name: "Nogier A 2.28Hz", hz: 2.28, category: "Nogier", type: "binaural", description: "Ectoderm (skin, nervous system) resonance", effects: "Skin healing, nervous system support", supabaseUrl: url("nogier_a") },
  { id: "nogier_b", name: "Nogier B 4.56Hz", hz: 4.56, category: "Nogier", type: "binaural", description: "Endoderm (organs, glands) resonance", effects: "Organ support, glandular regulation", supabaseUrl: url("nogier_b") },
  { id: "nogier_c", name: "Nogier C 9.1Hz", hz: 9.1, category: "Nogier", type: "binaural", description: "Mesoderm (muscles, blood) resonance", effects: "Muscular healing, circulation, connective tissue", supabaseUrl: url("nogier_c") },
  { id: "nogier_d", name: "Nogier D 18.2Hz", hz: 18.2, category: "Nogier", type: "binaural", description: "Spinal cord resonance frequency", effects: "Spinal alignment, nerve conduction, posture", supabaseUrl: url("nogier_d") },
  { id: "nogier_e", name: "Nogier E 36.36Hz", hz: 36.36, category: "Nogier", type: "binaural", description: "Thalamus resonance — sensory relay", effects: "Sensory integration, thalamic activation", supabaseUrl: url("nogier_e") },

  // ── RIFE ────────────────────────────────────────────────────────────────────
  { id: "rife_10", name: "Rife 10Hz", hz: 10, category: "Rife", type: "binaural", description: "Rife protocol — alpha entrainment", effects: "Relaxation, immune support (Rife research)", supabaseUrl: url("rife_10") },
  { id: "rife_20", name: "Rife 20Hz", hz: 20, category: "Rife", type: "binaural", description: "Rife protocol — focus frequency", effects: "Alertness, concentration (Rife research)", supabaseUrl: url("rife_20") },
  { id: "rife_120", name: "Rife 120Hz", hz: 120, category: "Rife", type: "pure", description: "Rife protocol frequency", effects: "General wellness (Rife research)", supabaseUrl: url("rife_120") },
  { id: "rife_360", name: "Rife 360Hz", hz: 360, category: "Rife", type: "pure", description: "Rife protocol — detoxification frequency", effects: "Detox support (Rife research)", supabaseUrl: url("rife_360") },
  { id: "rife_727", name: "Rife 727Hz", hz: 727, category: "Rife", type: "pure", description: "Rife protocol — immunity frequency", effects: "Immune enhancement (Rife research)", supabaseUrl: url("rife_727") },
  { id: "rife_787", name: "Rife 787Hz", hz: 787, category: "Rife", type: "pure", description: "Rife protocol — antiviral frequency", effects: "Antiviral support (Rife research)", supabaseUrl: url("rife_787") },
  { id: "rife_880", name: "Rife 880Hz", hz: 880, category: "Rife", type: "pure", description: "Rife protocol — antibacterial frequency", effects: "Antibacterial support (Rife research)", supabaseUrl: url("rife_880") },
  { id: "rife_2008", name: "Rife 2008Hz", hz: 2008, category: "Rife", type: "pure", description: "Rife protocol — high frequency therapy", effects: "Advanced Rife therapy (research use)", supabaseUrl: url("rife_2008") },
  { id: "rife_5000", name: "Rife 5000Hz", hz: 5000, category: "Rife", type: "pure", description: "Rife protocol — ultra-high frequency", effects: "Cellular stimulation (Rife research)", supabaseUrl: url("rife_5000") },

  // ── BINAURAL PRESETS ────────────────────────────────────────────────────────
  { id: "binaural_focus_40hz", name: "Binaural Focus 40Hz", hz: 40, category: "Binaural Preset", type: "binaural", description: "Gamma 40Hz binaural preset — designed for peak focus sessions", effects: "Cognitive performance, peak focus, memory", supabaseUrl: url("binaural_focus_40hz") },
  { id: "binaural_sleep_3hz", name: "Binaural Sleep 3Hz", hz: 3, category: "Binaural Preset", type: "binaural", description: "Deep delta binaural preset — sleep induction", effects: "Sleep onset, deep sleep cycles, recovery", supabaseUrl: url("binaural_sleep_3hz") },
  { id: "binaural_creativity_6hz", name: "Binaural Creativity 6Hz", hz: 6, category: "Binaural Preset", type: "binaural", description: "Theta creative preset — artistic flow states", effects: "Creative insight, artistic flow, imagination", supabaseUrl: url("binaural_creativity_6hz") },
  { id: "binaural_anxiety_10hz", name: "Binaural Calm 10Hz", hz: 10, category: "Binaural Preset", type: "binaural", description: "Alpha anxiety relief preset", effects: "Anxiety reduction, calm, serotonin boost", supabaseUrl: url("binaural_anxiety_10hz") },
  { id: "binaural_pain_2_5hz", name: "Binaural Pain Relief 2.5Hz", hz: 2.5, category: "Binaural Preset", type: "binaural", description: "Delta pain relief preset — enkephalin production", effects: "Natural analgesia, pain management", supabaseUrl: url("binaural_pain_2_5hz") },
  { id: "isochronic_40hz", name: "Isochronic 40Hz", hz: 40, category: "Binaural Preset", type: "isochronic", description: "40Hz isochronic tone — no headphones required", effects: "Gamma entrainment, cognition, works with speakers", supabaseUrl: url("isochronic_40hz") },

  // ── SPECIAL ─────────────────────────────────────────────────────────────────
  { id: "phi_golden", name: "Phi Golden Ratio 1.618Hz", hz: 1.618, category: "Special", type: "binaural", description: "Golden ratio frequency — divine proportion", effects: "Universal harmony, Fibonacci resonance, coherence", supabaseUrl: url("phi_golden") },
  { id: "galactic_108", name: "Galactic 108Hz", hz: 108, category: "Special", type: "pure", description: "Sacred number 108 — Vedic cosmology frequency", effects: "Spiritual completion, cosmic harmony, mantric resonance", supabaseUrl: url("galactic_108") },
  { id: "healing_40_alzheimer", name: "Healing 40Hz", hz: 40, category: "Special", type: "pure", description: "40Hz Alzheimer's intervention — MIT GENUS research", effects: "Amyloid clearance, neural synchronization, neuroprotection", supabaseUrl: url("healing_40_alzheimer") },
  { id: "sundowning_calm", name: "Sundowning Calm 432Hz", hz: 432, category: "Special", type: "pure", description: "432Hz for dementia sundowning management", effects: "Evening calm, agitation reduction, comfort", supabaseUrl: url("sundowning_calm") },
  { id: "baby_white_noise", name: "Pink Noise", hz: 750, category: "Special", type: "pure", description: "Pink noise — infant sleep, focus, tinnitus masking", effects: "Sleep onset, focus support, tinnitus relief", supabaseUrl: url("baby_white_noise") },
  { id: "heartbeat_60bpm", name: "Heartbeat 60 BPM", hz: 1, category: "Special", type: "binaural", description: "80/81Hz binaural imitating heartbeat rhythm", effects: "Security, bonding, womb-like calm", supabaseUrl: url("heartbeat_60bpm") },
];

export const FREQUENCY_CATEGORIES = [
  "Delta", "Theta", "Alpha", "Beta", "Gamma",
  "Solfeggio", "Chakra", "Planetary", "Schumann",
  "Singing Bowl", "Cymatics", "Voice", "Nogier",
  "Rife", "Binaural Preset", "Special",
] as const;

export function getFrequencyById(id: string): MatrixFrequency | undefined {
  return MATRIX_FREQUENCIES.find((f) => f.id === id);
}

export function getFrequenciesByCategory(category: FrequencyCategory): MatrixFrequency[] {
  return MATRIX_FREQUENCIES.filter((f) => f.category === category);
}

export function getBinauralCarrier(hz: number): number {
  if (hz < 4) return 100;
  if (hz < 8) return 150;
  if (hz < 14) return 200;
  if (hz < 30) return 250;
  if (hz < 60) return 300;
  return 350;
}
