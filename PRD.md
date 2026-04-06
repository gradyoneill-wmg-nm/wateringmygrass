# Watering My Grass — Full PRD
*Written by Rat 🐀 | April 6, 2026 | LAUNCH TARGET: ASAP*

---

## 1. EXECUTIVE SUMMARY

Watering My Grass (WMG) is a community-driven wellness publication and platform built around the meditation/frequency science movement. It is the community layer on top of Non Magic — where people come to learn, connect, and practice together.

**Tagline:** "Everybody wants a village. No one wants to be a villager."

**The vision:** A place where people who meditate alone can find their tribe. NYC-based, globally accessible. Where athletes, biohackers, and gym bros who found something deeper can connect, share, and grow together.

---

## 2. PRODUCT VISION

### What WMG Is
- A community publication (articles + comments)
- An event platform (April 18 global session + May NYC event)
- A small business directory (NYC wellness businesses posting events)
- A newsletter (weekly deep dives on frequency science, TM, breathwork)
- A contributor platform (anyone can write, Grady curates)

### What WMG Is NOT
- A social media platform
- A meditation app (that's Non Magic)
- A corporate wellness product

### The Johnny Harris Reference
Structure: News Press by Johnny Harris. Long-form, well-researched, multimedia articles. Comment sections. Community engagement. Creator-led but community-powered.

### Non-Profit Positioning
WMG is community-driven. Revenue comes from grants, sponsorships, and events — not subscriptions. This separates it from Non Magic (C-Corp) and allows grant funding without conflict.

---

## 3. USER PERSONAS

### The Gym Bro Who Found Something Deeper
- 25-40, male, competitive mindset
- Discovered meditation through performance optimization
- Wants data and science, not spirituality
- Follows: Andrew Huberman, David Goggins, Tim Ferriss

### The Biohacker
- 28-45, any gender
- HRV tracking, cold plunges, red light therapy
- Wants to optimize everything
- Already uses Whoop, Oura, CGM

### The Wellness Seeker
- 22-38, female-skewing
- Anxious, looking for tools that actually work
- Tried Calm, quit, wants something real
- Active on TikTok, Instagram

### The Urban Professional
- 30-45, NYC-based
- Wants community, not just content
- Would show up to 5am Central Park meditation
- Craves the village

### The Contributor
- Writer, researcher, practitioner
- Wants platform for their work
- Aligned with frequency science / holistic health
- Would contribute articles for community credit

---

## 4. FEATURE LIST

### MVP (Launch Now)

**4.1 Homepage**
- Hero: "This is not magic. It's science. And it's for all of us."
- Animated cursor effect: F1-style — hover reveals Grady's face under the cockroach
- Featured article grid
- April 18 event countdown + registration CTA
- Non Magic app download CTA
- Email newsletter signup
- Latest community posts

**4.2 Articles**
- Long-form science articles (TM, frequency science, HRV, breathwork)
- Comment sections on every article
- Author profiles
- Tagging system (TM, Gamma, Delta, Schumann, Breathwork, HRV, etc.)
- Social sharing
- Read time estimates
- Science citations displayed

**4.3 First Articles (Priority Order)**
1. "What is Transcendental Meditation? The Science Behind the Practice"
2. "40Hz Gamma: Why MIT Researchers Think This Frequency Could Change Everything"
3. "I Was a Monk for 2 Months. Here's What I Learned About Your Nervous System"
4. "Why Calm Doesn't Work (And What Does)"
5. "Heart Rate Variability: The Only Meditation Metric That Matters"
6. "The Schumann Resonance: Earth's Heartbeat and Your Brain"
7. "Breathwork Protocols: A Practitioner's Guide"
8. "The Gym Bro's Guide to Meditation"

**4.4 April 18 Event Page**
- Full event details
- Registration form (name, email, timezone)
- Non Magic app download requirement
- Livestream link (day of)
- NYC in-person details (location, coffee shop after)
- Countdown timer
- Speaker/host: Grady O'Neill

**4.5 Community Feed**
- Posts from community members about their practice
- Session shares from Non Magic app (cross-post)
- Event announcements from NYC wellness businesses
- Strava-style activity: "Grady completed a 20-min Gamma session"

**4.6 Newsletter**
- Weekly: "The Non Magic Weekly" or "Watering My Grass Weekly"
- Content: 1 deep dive article, 1 science note, 1 community spotlight, 1 NYC event
- Mailchimp or ConvertKit integration
- Signup CTA on every page

**4.7 Small Business Directory**
- NYC wellness businesses can post events (free)
- Yoga in Central Park, sound baths, breathwork classes
- Community moderated
- "Post Your Event" button
- Map view of NYC events

**4.8 Navigation**
- Articles
- Community
- Events
- About (Grady's story)
- Non Magic (link to app)
- Newsletter

---

### V2 (Post-Launch)

**4.9 Contributor Program**
- Application form
- Editorial guidelines
- Revenue share on sponsored content
- Featured contributor badges
- "Contributor of the Month"

**4.10 Grant Funding Section**
- Transparent reporting on grants received
- Impact metrics (sessions completed, community size)
- Application for free Non Magic access (veterans, low income, schools)

**4.11 Research Library**
- Curated database of frequency science papers
- Raccoon-maintained, continuously updated
- Searchable by topic, frequency, condition

**4.12 Podcast**
- "Watering My Grass" podcast
- Grady interviews wellness leaders, researchers, practitioners
- Audio + transcript on site
- Apple Podcasts, Spotify distribution

**4.13 Livestream Hub**
- 5am daily meditation archive
- 7:30pm session replays
- Monthly global event recordings

---

## 5. TECHNICAL ARCHITECTURE

### Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **CMS:** Sanity.io (for articles) or Notion API (simpler)
- **Database:** Supabase (same as Non Magic — community posts, events, users)
- **Auth:** Supabase Auth
- **Newsletter:** ConvertKit or Mailchimp API
- **Hosting:** Vercel
- **Domain:** wateringmygrass.com

### Why Next.js
- SSR for SEO (Google indexes everything)
- Fast page loads
- Easy to deploy on Vercel
- React-based (consistent with Non Magic)

### SEO Architecture
- Every article is server-rendered with proper meta tags
- Structured data (JSON-LD) for articles
- Sitemap auto-generated
- robots.txt configured
- OpenGraph images for social sharing
- Alt text on all images

---

## 6. DESIGN SYSTEM

### Colors
```
Background: #0a0a0a (matches Non Magic)
Surface: #111111
Text: #ffffff
Secondary: #888888
Border: #222222
Accent: #ffffff
```

### Typography
- Headlines: Light weight (300), large, generous spacing
- Body: Regular (400), comfortable line height
- Eyebrows: 10px, wide letter spacing, uppercase

### Signature Design Elements
- **F1-style cursor:** When cursor hovers over Grady's headshot, it reveals the face under a graphic overlay
- **Grainy texture:** Subtle film grain overlay on hero images
- **Cymascope patterns:** Used as dividers and decorative elements (mirrors Non Magic)
- **Old-school cartoon style:** Brand illustrations in Tom & Jerry style (when Rat/Rockbird/Cockroach assets arrive)

### No Wellness Pastels
Black. White. Gray. Clinical-clean. This is a science publication, not a spa.

---

## 7. CONTENT STRATEGY

### Tone
- Direct. Evidence-based. No fluff.
- Written for people who don't believe in "woo"
- Every claim cited
- Personal (Grady's voice is present throughout)

### Content Calendar (Week 1)
| Day | Content |
|-----|---------|
| Sun Apr 6 | Launch: Homepage + first 3 articles |
| Mon Apr 7 | "The Gym Bro's Guide to Meditation" |
| Tue Apr 8 | "40Hz Gamma: The MIT Research" |
| Wed Apr 9 | Substack essay #1 |
| Thu Apr 10 | Non Magic launch day — crosspost |
| Fri Apr 11 | Community spotlight |
| Sat Apr 12 | "I Was a Monk" article |
| Sun Apr 13 | Newsletter #1 |

### Cross-Promotion with Non Magic
- Every Non Magic session share can cross-post to WMG community
- WMG articles reference Non Magic frequencies
- April 18 event requires Non Magic app
- Non Magic paywall links to WMG for community context

---

## 8. LAUNCH PLAN

### Phase 1: Soft Launch (Now)
- Homepage live
- April 18 event registration live
- First 3 articles published
- Newsletter signup working
- Non Magic app download CTA

### Phase 2: Content Sprint (Apr 6-10)
- 8 articles published
- Community feed seeded
- NYC small business directory launched
- Social accounts live and posting

### Phase 3: April 18 Event
- Livestream page live
- 5am synchronized global meditation
- NYC in-person gathering
- Community posts exploding post-event

### Phase 4: Community Growth (May+)
- Contributor program launched
- May NYC event (1960s rave, pill invites)
- Podcast launched
- Grant applications submitted

---

## 9. SUCCESS METRICS

### Week 1
- 500 newsletter signups
- 200 April 18 registrations
- 1,000 unique visitors
- 5 articles published

### Month 1
- 2,000 newsletter subscribers
- 50 community posts
- 20 NYC event listings
- 500 Non Magic app downloads attributed to WMG

### Month 3
- 10,000 newsletter subscribers
- First grant application submitted
- Contributor program with 10 active contributors
- Podcast with 5 episodes

---

## 10. APRIL 18 INTEGRATION

### On WMG
- Dedicated event page
- Registration form → email list
- Countdown timer
- "Download Non Magic" CTA (required for remote participants)
- Day-of: livestream embed
- Post-event: recording + community discussion

### On Non Magic App
- Countdown banner (built ✅)
- GlobalSessionScreen (built ✅)
- In-app "Join" button → wateringmygrass.com/april18
- Push notification day-of

---

## 11. WHO BUILDS THIS

### Rat 🐀 (Non Magic CTO)
- Can run headless Claude Code to build Next.js site
- Will provide the WMG repo, PRD, and build loop
- Monitors for design updates from Ren

### Rose Finch 🌹 (WMG CTO — needs activation)
- Needs: GitHub repo, Claude Code installed, this PRD
- Run the headless loop: `echo "[prompt]" | claude --print --dangerously-skip-permissions`
- Build from this PRD the same way Non Magic was built overnight

### Rockbird 🐦 (WMG Editorial)
- Write the first 8 articles
- Set up editorial calendar
- Coordinate contributor program

### Raccoon 🦝 (Market Intel)
- Research competitor wellness publications
- Surface SEO keyword opportunities
- Monitor what content performs in the space

### Roadrunner 🦩 (Grants)
- Identify grant opportunities for wellness non-profits
- Draft applications
- Research WMG's non-profit formation options

---

*This PRD is the build instruction. Rose Finch: run the headless Claude Code loop with this as context. Build everything in Section 4 MVP first. Launch by April 7.*

*— Rat 🐀*
