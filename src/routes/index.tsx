import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  Linkedin,
  Mail,
  Phone,
  RotateCcw,
  Send,
  Sparkles,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

import boxerImage from "@/assets/aditya-boxer.png";
import eclAuctionAsset from "@/assets/ecl-player-auction.jpg.asset.json";
import eclBallAsset from "@/assets/ecl-guess-the-ball.jpg.asset.json";
import eclCaptainAsset from "@/assets/ecl-captain-retained.jpg.asset.json";
import eclStayTunedAsset from "@/assets/ecl-stay-tuned.jpg.asset.json";
import eclSuperstarsAsset from "@/assets/ecl-superstars-assembled.jpg.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya Salve — Copywriter" },
      {
        name: "description",
        content: "Aditya Salve is a copywriter creating campaign ideas, scripts, and content that packs a punch.",
      },
      { property: "og:title", content: "Aditya Salve — Copywriter" },
      {
        property: "og:description",
        content: "Heavyweight copy that packs a punch. Explore campaigns, scripts, and experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const experience = [
  {
    company: "SoCheers",
    role: "Copywriter",
    date: "Sept 2025 — Present",
    copy: "Campaign thinking for JioHotstar releases including Annabelle, M3GAN 2.0, Jurassic World: Rebirth, Final Destination, and Alien: Earth. Multi-platform promotions and scripts for lifestyle show Spice It Up.",
  },
  {
    company: "The small big ideas",
    role: "Copywriter Intern",
    date: "Mar — Jul 2025",
    copy: "Content for sports teams and OTT platforms, plus pre-launch marketing ideas for film and television projects.",
  },
  {
    company: "Zion Media",
    role: "Content Writer",
    date: "2023 — 2024",
    copy: "Shaped distinct voices across websites, social media, and newsletters—making every format sound made for its audience.",
  },
  {
    company: "Six Sports",
    role: "Content Writer",
    date: "2022 — 2023",
    copy: "Turned in-depth research on sporting events, teams, and athletes into informed, engaging stories.",
  },
];

const skills = ["Platform expertise", "Content creation", "Communication", "Creativity", "Strategic thinking"];
const hitWords = ["BAM!", "POW!", "OUCH!", "WHAM!", "KAPOW!"];

type ShowcaseItem = {
  id: string;
  kicker: string;
  title: string;
  copy: string;
  cover: string;
  tags: string[];
  feature?: boolean;
  images?: { src: string; caption: string }[];
  entries?: { title: string; copy: string }[];
  link?: string;
  linkLabel?: string;
};

const brands = [
  "Red Bull",
  "Red Bull Mobile",
  "Disney",
  "ZEE5",
  "Hyundai",
  "Volkswagen",
  "NBA Abu Dhabi Games 2023",
  "Dubai Airshow",
  "Dubai Future Forum",
  "Dubai Fashion Week",
  "COP28 UAE",
  "Drishyam Films",
  "ICC Men's World Cup 2023",
  "Nium",
  "Eid Al Etihad",
];

const socialPosts: { title: string; kicker: string; copy: string; src: string }[] = [
  {
    title: "Superstars Assembled",
    kicker: "ECL Season 3 · Retentions",
    copy: "Squad reveal creative announcing the retained Kolkata Super Stars line-up for the new season.",
    src: eclSuperstarsAsset.url,
  },
  {
    title: "Welcome Back, Captain",
    kicker: "Retention announcement",
    copy: "Pushkar Raj Thakur retained as captain — a hero-led post built for maximum fan reaction.",
    src: eclCaptainAsset.url,
  },
  {
    title: "Guess the Ball",
    kicker: "Matchday engagement",
    copy: "Interactive comment-bait post turning a still frame into a guessing game for the feed.",
    src: eclBallAsset.url,
  },
  {
    title: "Player Auction",
    kicker: "15th June announcement",
    copy: "Auction day announcement creative with date-led urgency and league branding.",
    src: eclAuctionAsset.url,
  },
  {
    title: "Stay Tuned",
    kicker: "Retained players teaser",
    copy: "Teaser post keeping the audience hooked ahead of the full retention reveal.",
    src: eclStayTunedAsset.url,
  },
];

const socialShowcase: ShowcaseItem = {
  id: "ecl",
  kicker: "Social campaign",
  title: "Kolkata Super Stars — ECL Season 3",
  copy: "Season-long social campaign creatives.",
  cover: eclSuperstarsAsset.url,
  tags: [],
  images: socialPosts.map((post) => ({ src: post.src, caption: `${post.title} — ${post.kicker}` })),
};

const showcase: ShowcaseItem[] = [
  {
    id: "jiohotstar",
    kicker: "Entertainment",
    title: "JioHotstar campaign copy & scripts",
    copy: "Release campaigns and promo scripts across film and series launches on JioHotstar.",
    cover: boxerImage,
    tags: ["Scripts", "Promos", "OTT"],
    entries: [
      { title: "Jurassic World: Rebirth", copy: "Launch campaign copy and multi-platform promo beats built around the franchise's return." },
      { title: "M3GAN 2.0", copy: "Sharp, sardonic social copy in M3GAN's own voice for the sequel release." },
      { title: "Final Destination: Bloodlines", copy: "Tension-led teaser lines and countdown posts for the release window." },
      { title: "Alien: Earth", copy: "Atmospheric campaign writing for the series drop." },
      { title: "Mrs Deshpande", copy: "Character-first promo copy and platform adaptations." },
      { title: "Rebel Kid", copy: "Creator-led campaign copy tuned for a young, social-native audience." },
    ],
  },
  {
    id: "longform",
    kicker: "Long-form",
    title: "Articles & editorial",
    copy: "Football Express blogs plus finance and large-cap stock explainers written for non-expert readers.",
    cover: eclBallAsset.url,
    tags: ["Blogs", "Finance", "Research"],
    entries: [
      { title: "Football Express blogs", copy: "Match reports, player features and event deep-dives turned into readable, opinionated stories." },
      { title: "Large-cap stocks & finance", copy: "Research-heavy explainers that make market movements and company fundamentals easy to follow." },
    ],
  },
];

function playTone(kind: "hit" | "win") {
  if (typeof window === "undefined") return;
  const AudioContextClass = window.AudioContext ??
    (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;
  const context = new AudioContextClass();
  const notes = kind === "win" ? [392, 523, 659, 784] : [110, 72];
  notes.forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = kind === "win" ? "square" : "sawtooth";
    oscillator.frequency.setValueAtTime(frequency, context.currentTime + index * 0.09);
    gain.gain.setValueAtTime(0.12, context.currentTime + index * 0.09);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + index * 0.09 + 0.13);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(context.currentTime + index * 0.09);
    oscillator.stop(context.currentTime + index * 0.09 + 0.14);
  });
}

function Index() {
  const [intro, setIntro] = useState(true);
  const [hits, setHits] = useState(0);
  const [hitWord, setHitWord] = useState("");
  const [isHit, setIsHit] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [copied, setCopied] = useState("");
  const [contactOpen, setContactOpen] = useState(false);
  const transitionTimer = useRef<number | null>(null);
  const knockedOut = hits >= 6;

  useEffect(() => () => {
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
  }, []);

  const punch = () => {
    if (knockedOut || isHit) return;
    const next = hits + 1;
    setHits(next);
    setHitWord(next === 6 ? "K.O.!" : (hitWords[(next - 1) % hitWords.length] ?? "BAM!"));
    setIsHit(true);
    if (soundOn) playTone(next === 6 ? "win" : "hit");
    window.setTimeout(() => setIsHit(false), 260);
    if (next === 6) transitionTimer.current = window.setTimeout(() => setIntro(false), 1500);
  };

  const copyText = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(""), 1600);
  };

  const replay = () => {
    setHits(0);
    setHitWord("");
    setIntro(true);
    window.scrollTo({ top: 0 });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {intro ? (
        <section className={`fight-screen ${isHit ? "is-hit" : ""}`} aria-label="Boxing challenge">
          <div className="scanlines" aria-hidden="true" />
          <header className="relative z-20 flex w-full items-center justify-between p-4 md:p-7">
            <div className="pixel-label">ROUND 01 · PORTFOLIO GATE</div>
            <Button
              variant="outline"
              size="icon"
              className="arcade-icon"
              onClick={() => setSoundOn((value) => !value)}
              aria-label={soundOn ? "Mute sound" : "Turn sound on"}
              title={soundOn ? "Mute sound" : "Turn sound on"}
            >
              {soundOn ? <Volume2 /> : <VolumeX />}
            </Button>
          </header>

          <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-between px-4 pb-5">
            <div className="speech-box animate-fade-in">
              <p>NOT SO FAST...<br />YOU HAVE TO GET THROUGH ME FIRST! <span className="blink">▼</span></p>
            </div>

            <div className="fight-stage">
              <div className="health-wrap" aria-label={`${Math.max(0, 6 - hits)} hits remaining`}>
                <div className="flex items-end justify-between">
                  <span className="pixel-label">ADITYA</span>
                  <span className="pixel-label">{knockedOut ? "DOWN" : `${6 - hits} HP`}</span>
                </div>
                <div className="health-track"><div className="health-fill" style={{ width: `${Math.max(0, (6 - hits) / 6 * 100)}%` }} /></div>
              </div>

              <button
                type="button"
                onClick={punch}
                className={`boxer-button ${knockedOut ? "knocked-out" : ""}`}
                aria-label="Punch the boxer"
              >
                <img src={boxerImage} alt="Cartoon boxer Aditya in a fighting stance" width={1024} height={1024} />
                {hitWord && <span key={`${hitWord}-${hits}`} className="impact-word">{hitWord}</span>}
                {isHit && <span className="impact-burst" aria-hidden="true">💥</span>}
              </button>

              {knockedOut ? (
                <div className="victory-copy"><strong>YOU WIN!</strong><span>UNLOCKING THE GOOD STUFF...</span></div>
              ) : (
                <button type="button" className="punch-prompt" onClick={punch}>TAP TO PUNCH <span>×{hits}</span></button>
              )}
            </div>

            <Button variant="ghost" className="skip-button" onClick={() => setIntro(false)}>
              Skip to portfolio <ChevronRight />
            </Button>
          </div>
        </section>
      ) : (
        <Portfolio
          copied={copied}
          copyText={copyText}
          contactOpen={contactOpen}
          setContactOpen={setContactOpen}
          replay={replay}
        />
      )}
    </main>
  );
}

function Portfolio({
  copied,
  copyText,
  contactOpen,
  setContactOpen,
  replay,
}: {
  copied: string;
  copyText: (label: string, value: string) => void;
  contactOpen: boolean;
  setContactOpen: (open: boolean) => void;
  replay: () => void;
}) {
  const [openItem, setOpenItem] = useState<ShowcaseItem | null>(null);
  const [slide, setSlide] = useState(0);
  const openShowcase = (item: ShowcaseItem, index = 0) => {
    setSlide(index);
    setOpenItem(item);
  };
  const slides = openItem?.images ?? [];

  return (
    <div className="portfolio-shell animate-fade-in">
      <nav className="site-nav">
        <a href="#top" className="brand-lockup"><span>AS</span><b>ADITYA SALVE</b></a>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#work" className="nav-link">Work</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#about" className="nav-link">About</a>
        </div>
        <Button className="arcade-button h-10" onClick={() => setContactOpen(true)}><Mail /> Let&apos;s talk</Button>
      </nav>

      <section id="top" className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles /> AVAILABLE FOR THE NEXT BIG IDEA</div>
          <h1>ADITYA<br /><span>SALVE.</span></h1>
          <p className="hero-role">COPYWRITER <span>★</span> IDEA PUNCHER</p>
          <p className="hero-blurb">Heavyweight copy that packs a punch—and knows exactly when to pull one.</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="arcade-button"><a href="#work">View work <ArrowDownRight /></a></Button>
            <Button variant="outline" className="arcade-button" onClick={() => setContactOpen(true)}>Contact me <Send /></Button>
            <Button asChild variant="outline" size="icon" className="arcade-icon">
              <a href="https://www.linkedin.com/in/aditya-salve-4b51a3284" target="_blank" rel="noreferrer" aria-label="Visit Aditya's LinkedIn" title="LinkedIn"><Linkedin /></a>
            </Button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-stamp">WORDS<br />WITH<br />WEIGHT</div>
          <img src={boxerImage} alt="Aditya Salve as a retro cartoon boxer" width={1024} height={1024} />
          <div className="stat-tag"><b>4+</b><span>YEARS<br />WRITING</span></div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true"><div>CAMPAIGNS ★ SCRIPTS ★ SOCIAL ★ STRATEGY ★ FILMS ★ SPORTS ★ CAMPAIGNS ★ SCRIPTS ★ SOCIAL ★ STRATEGY ★</div></div>

      <section id="work" className="section-block work-section">
        <div className="section-kicker">01 / FEATURED WORK</div>
        <div className="work-callout">
          <div>
            <span className="mini-badge">THE MAIN EVENT</span>
            <h2>Campaign decks.<br />Scripts. Big swings.</h2>
            <p>A ringside look at ideas made for screens, feeds, launches, and everything in between.</p>
          </div>
          <a className="work-link" href="https://drive.google.com/drive/folders/1f2I--YOtmPBb7sycgWypZ2JeeZ7Gh_HO" target="_blank" rel="noreferrer">
            <BriefcaseBusiness />
            <span>EXPLORE CAMPAIGN<br />DECKS &amp; SCRIPTS</span>
            <ArrowUpRight />
          </a>
        </div>

        <div className="showcase-grid">
          {showcase.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`showcase-card ${item.feature ? "is-feature" : ""}`}
              onClick={() => openShowcase(item)}
            >
              <div className="showcase-media">
                <img src={item.cover} alt={item.title} loading="lazy" />
              </div>
              <div className="showcase-body">
                <span>{item.kicker}</span>
                <b>{item.title}</b>
                <p>{item.copy}</p>
                <div className="showcase-tags">{item.tags.map((tag) => <i key={tag}>{tag}</i>)}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="experience" className="section-block experience-section">
        <div className="section-heading"><div><span className="section-kicker">02 / FIGHT RECORD</span><h2>Experience</h2></div><span className="record-badge">4 ROUNDS · UNDEFEATED</span></div>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-row" key={item.company}>
              <span className="round-number">0{index + 1}</span>
              <div><h3>{item.company}</h3><p className="role-line">{item.role} · {item.date}</p></div>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-block skills-section">
        <div className="section-kicker">03 / THE TOOLKIT</div>
        <h2>Moves in the locker.</h2>
        <div className="skill-grid">
          {skills.map((skill, index) => <div className="skill-tile" key={skill}><span>0{index + 1}</span><b>{skill}</b><Sparkles /></div>)}
        </div>
      </section>

      <section className="section-block education-section">
        <div><span className="section-kicker">04 / TRAINING CAMP</span><h2>Education</h2></div>
        <div className="education-list">
          <div><b>BMM — Bachelor of Mass Media</b><span>B.K. Birla College</span><strong>2020 — 2023</strong></div>
          <div><b>HSC</b><span>L.D. Sonawne College</span><strong>2020</strong></div>
          <div><b>SSC</b><span>Don Bosco School</span><strong>2018</strong></div>
        </div>
      </section>

      <footer className="site-footer">
        <div><span className="section-kicker">FINAL BELL</span><h2>Got a brief?<br /><em>Let&apos;s make it hit.</em></h2></div>
        <div className="footer-actions">
          <a href="mailto:salveaditya15@gmail.com">salveaditya15@gmail.com <ArrowUpRight /></a>
          <a href="tel:+919326250513">+91 93262 50513 <Phone /></a>
          <Button className="arcade-button" onClick={() => setContactOpen(true)}>Start a conversation <Send /></Button>
        </div>
        <div className="footer-base"><span>© 2026 ADITYA SALVE</span><Button variant="ghost" onClick={replay}><RotateCcw /> Play boxing again</Button></div>
      </footer>

      {openItem && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={openItem.title} onClick={() => setOpenItem(null)}>
          <div className="lightbox-top" onClick={(event) => event.stopPropagation()}>
            <b>{openItem.title}</b>
            <div className="flex items-center gap-2">
              {openItem.link && (
                <Button asChild variant="ghost" className="lightbox-close">
                  <a href={openItem.link} target="_blank" rel="noreferrer">{openItem.linkLabel ?? "Open"} <ArrowUpRight /></a>
                </Button>
              )}
              <Button size="icon" variant="ghost" className="lightbox-close" onClick={() => setOpenItem(null)} aria-label="Close viewer"><X /></Button>
            </div>
          </div>
          <div className="lightbox-body" onClick={(event) => event.stopPropagation()}>
            {slides.length > 0 ? (
              <>
                {slides.length > 1 && (
                  <button type="button" className="lightbox-nav" aria-label="Previous image" onClick={() => setSlide((value) => (value - 1 + slides.length) % slides.length)}>
                    <ChevronLeft />
                  </button>
                )}
                <img src={slides[slide]?.src} alt={slides[slide]?.caption ?? openItem.title} />
                {slides.length > 1 && (
                  <button type="button" className="lightbox-nav" aria-label="Next image" onClick={() => setSlide((value) => (value + 1) % slides.length)}>
                    <ChevronRight />
                  </button>
                )}
              </>
            ) : (
              <div className="copy-list">
                {openItem.entries?.map((entry) => (
                  <article key={entry.title}><h4>{entry.title}</h4><p>{entry.copy}</p></article>
                ))}
              </div>
            )}
          </div>
          {slides.length > 1 && (
            <div className="lightbox-foot" onClick={(event) => event.stopPropagation()}>
              {slides.map((item, index) => (
                <button key={item.src} type="button" data-active={index === slide} aria-label={`Image ${index + 1}`} onClick={() => setSlide(index)} />
              ))}
            </div>
          )}
        </div>
      )}

      {contactOpen && (
        <div className="contact-overlay" role="dialog" aria-modal="true" aria-labelledby="contact-title" onClick={() => setContactOpen(false)}>
          <aside className="contact-drawer" onClick={(event) => event.stopPropagation()}>
            <Button size="icon" variant="ghost" className="drawer-close" onClick={() => setContactOpen(false)} aria-label="Close contact panel"><X /></Button>
            <span className="section-kicker">OPEN CHANNEL</span>
            <h2 id="contact-title">Let&apos;s make<br />something land.</h2>
            <p>Send over the brief, the wild thought, or just say hello.</p>
            <div className="contact-options">
              <div><a href="mailto:salveaditya15@gmail.com"><Mail /> salveaditya15@gmail.com</a><Button size="icon" variant="outline" onClick={() => copyText("email", "salveaditya15@gmail.com")} aria-label="Copy email">{copied === "email" ? <Check /> : <Clipboard />}</Button></div>
              <div><a href="tel:+919326250513"><Phone /> +91 93262 50513</a><Button size="icon" variant="outline" onClick={() => copyText("phone", "9326250513")} aria-label="Copy phone number">{copied === "phone" ? <Check /> : <Clipboard />}</Button></div>
              <a href="https://www.linkedin.com/in/aditya-salve-4b51a3284" target="_blank" rel="noreferrer"><Linkedin /> Connect on LinkedIn <ArrowUpRight /></a>
            </div>
            <Button asChild className="arcade-button mt-8 w-full"><a href="mailto:salveaditya15@gmail.com?subject=Let%27s%20work%20together">Write an email <Send /></a></Button>
          </aside>
        </div>
      )}
    </div>
  );
}