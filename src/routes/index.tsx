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
import clientsBanner from "@/assets/clients-banner.png";
import eclAuctionAsset from "@/assets/ecl-player-auction.jpg.asset.json";
import eclBallAsset from "@/assets/ecl-guess-the-ball.jpg.asset.json";
import eclCaptainAsset from "@/assets/ecl-captain-retained.jpg.asset.json";
import eclStayTunedAsset from "@/assets/ecl-stay-tuned.jpg.asset.json";
import eclSuperstarsAsset from "@/assets/ecl-superstars-assembled.jpg.asset.json";
import eclMissingAsset from "@/assets/ecl-missing-us.jpg.asset.json";
import oyoAsset from "@/assets/oyo.png.asset.json";
import colgateAsset from "@/assets/colgate.jpg.asset.json";
import boatAsset from "@/assets/boat.png.asset.json";
import darkFantasyAsset from "@/assets/dark-fantasy.jpg.asset.json";
import logisticsAsset from "@/assets/logistics.jpg.asset.json";
import yoloAsset from "@/assets/yolo.jpg.asset.json";
import reel1Asset from "@/assets/reel-1.mp4.asset.json";
import reel2Asset from "@/assets/reel-2.mp4.asset.json";
import reel3Asset from "@/assets/reel-3.mp4.asset.json";
import { Button } from "@/components/ui/button";
import { scripts, type ScriptItem } from "@/data/scripts";

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
  "L&T Vyoma",
  "Ebco",
  "NatGeo",
  "TransUnion CIBIL",
  "Skybags",
  "JioHotstar",
  "Kolkata Super Stars",
  "Six Sports",
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
  { title: "Missing Us?", kicker: "ECL · Off-season teaser", copy: "“The lethal duo will be back.” A comeback tease that keeps fans talking between seasons.", src: eclMissingAsset.url },
  { title: "Campaign Reel 01", kicker: "Video · Reel", copy: "Short-form reel written for thumb-stopping first seconds and a clean payoff.", src: reel1Asset.url },
  { title: "Hum Dila Denge", kicker: "OYO · Topical", copy: "“Tamilnadu me Kamra? Hum dila denge.” A topical one-liner riding the news cycle.", src: oyoAsset.url },
  { title: "White Privilege at $5.47", kicker: "Colgate · Spec ad", copy: "A cheeky double-meaning headline for a whitening toothpaste.", src: colgateAsset.url },
  { title: "Campaign Reel 02", kicker: "Video · Reel", copy: "Story-led reel built for the feed — hook, turn, brand.", src: reel2Asset.url },
  { title: "Kashmir to Kanyakumari", kicker: "boAt · Product ad", copy: "72 hours of playback, sold as a road trip across India — in one charge.", src: boatAsset.url },
  { title: "Some Are Sweet Too", kicker: "Sunfeast Dark Fantasy · Spec ad", copy: "“Not all dark fantasies are twisted.” Playing with the brand name for a wink.", src: darkFantasyAsset.url },
  { title: "Others Try, We Deliver", kicker: "Logistics · Social", copy: "A confident, competitor-baiting line for an air-cargo brand.", src: logisticsAsset.url },
  { title: "Dragon Served Chilled", kicker: "YOLO Lounge · Menu post", copy: "A dragon-fruit cooler introduced with a line that sounds like a legend.", src: yoloAsset.url },
  { title: "Campaign Reel 03", kicker: "Video · Reel", copy: "Fast-cut reel copy paced for sound-on and sound-off viewing.", src: reel3Asset.url },
];

const isVideo = (src?: string) => !!src && src.endsWith(".mp4");

const hotstarWork = [
  { title: "Rebel Kid", kicker: "Promo script", url: "https://www.instagram.com/reel/DQGpKSPCpRX/" },
  { title: "Mrs Deshpande", kicker: "Marketing ideas for the upcoming series", url: "https://www.instagram.com/reel/DRPBaj4DEj9/" },
  { title: "JioHotstar Reel", kicker: "Campaign work", url: "https://www.instagram.com/reel/DPq7RoVExeq/" },
];

const aboutLines = [
  "I laugh in serious situations.",
  "I watch television a lot; my electricity bill speaks for itself.",
  "I like to watch documentaries about the Caribbean and Latin America.",
  "I would love to live that life on the coast, but with money.",
  "I’m an introvert (for the first few days).",
];
const prefers = [["Ronaldo", "Messi"], ["Djokovic", "Federer"], ["Twitter", "Instagram"], ["Generational wealth", "anything"]];

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
    id: "clients",
    kicker: "Client roster",
    title: "Clients I've worked with",
    copy: "L&T Vyoma, Ebco, NatGeo, TransUnion CIBIL, Skybags, JioHotstar, Kolkata Super Stars and Six Sports.",
    cover: clientsBanner,
    tags: ["Brands", "Campaigns"],
    feature: true,
    images: [{ src: clientsBanner, caption: "Clients I've worked with" }],
    link: "https://www.behance.net/gallery/247523423/Copywriter-Portfolio",
    linkLabel: "Open on Behance",
  },
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
  const [openScript, setOpenScript] = useState<ScriptItem | null>(null);
  const [slide, setSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const openShowcase = (item: ShowcaseItem, index = 0) => {
    setSlide(index);
    setOpenItem(item);
  };
  const slideSocial = (direction: 1 | -1) => {
    const track = sliderRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".social-card");
    const step = card ? card.offsetWidth + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      const track = sliderRef.current;
      if (!track) return;
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 8) track.scrollTo({ left: 0, behavior: "smooth" });
      else slideSocial(1);
    }, 2500);
    return () => window.clearInterval(id);
  }, [paused]);
  const slides = openItem?.images ?? [];

  return (
    <div className="portfolio-shell animate-fade-in">
      <nav className="site-nav">
        <a href="#top" className="brand-lockup"><span>AS</span><b>A. SALVE</b></a>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#work" className="nav-link">Work</a>
          <a href="#social" className="nav-link">Social</a>
          <a href="#jiohotstar" className="nav-link">JioHotstar</a>
          <a href="#scripts" className="nav-link">Scripts</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#about-me" className="nav-link">About</a>
        </div>
        <Button className="arcade-button h-10" onClick={() => setContactOpen(true)}><Mail /> Let&apos;s talk</Button>
      </nav>

      <section id="top" className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles /> AVAILABLE FOR THE NEXT BIG IDEA</div>
          <h1>A.<br /><span>SALVE.</span></h1>
          <p className="hero-role">COPYWRITER</p>
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

      <section id="scripts" className="section-block scripts-section">
        <div className="section-kicker">01 / CAMPAIGN DECKS &amp; SCRIPTS</div>
        <div className="social-head">
          <div>
            <h2>Scripts, start<br />to final frame.</h2>
            <p>Brand films, public-service stories and performance scripts. Open any one to read it in full.</p>
          </div>
        </div>
        <div className="scripts-grid">
          {scripts.map((item) => (
            <button type="button" key={item.id} className="script-card" onClick={() => setOpenScript(item)}>
              <span>{item.brand}</span>
              <b>{item.title}</b>
              <p>{item.logline}</p>
              <i>{item.format}</i>
            </button>
          ))}
        </div>
      </section>

      <section id="social" className="section-block social-section">
        <div className="section-kicker">02 / SOCIAL MEDIA</div>
        <div className="social-head">
          <div>
            <h2>Campaign creatives<br />built for the feed.</h2>
            <p>Posts, reels and topical ads for Kolkata Super Stars (ECL), OYO, boAt, Colgate, Dark Fantasy and more. Slide through and tap any post for the full-size view.</p>
          </div>
          <div className="slider-controls">
            <button type="button" onClick={() => slideSocial(-1)} aria-label="Previous posts"><ChevronLeft /></button>
            <button type="button" onClick={() => slideSocial(1)} aria-label="More posts"><ChevronRight /></button>
          </div>
        </div>
        <div className="social-slider" ref={sliderRef} onTouchStart={() => setPaused(true)} onTouchEnd={() => window.setTimeout(() => setPaused(false), 4000)}>
          {socialPosts.map((post, index) => (
            <button
              type="button"
              key={post.title}
              className="social-card"
              onClick={() => openShowcase(socialShowcase, index)}
              aria-label={`Open ${post.title} in full screen`}
            >
              <div className="social-media">{isVideo(post.src) ? <video src={post.src} muted loop playsInline autoPlay preload="metadata" /> : <img src={post.src} alt={post.title} loading="lazy" />}</div>
              <div className="social-body">
                <span>{post.kicker}</span>
                <b>{post.title}</b>
                <p>{post.copy}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="jiohotstar" className="section-block social-section">
        <div className="section-kicker">03 / JIOHOTSTAR</div>
        <div className="social-head"><div><h2>Work done for<br />JioHotstar.</h2><p>Promo scripts and marketing ideas that went live as reels.</p></div></div>
        <div className="scripts-grid">
          {hotstarWork.map((item, index) => (
            <a key={item.url} className="script-card" href={item.url} target="_blank" rel="noreferrer">
              <span>0{index + 1} · {item.kicker}</span>
              <b>{item.title}</b>
              <i className="insta-link">▶ Watch reel on Instagram ↗</i>
              <small className="insta-url">{item.url.replace("https://www.", "")}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="section-block brands-section">
        <div className="section-kicker">04 / CLIENTS &amp; BRANDS</div>
        <div className="brands-head">
          <h2>Brands I&apos;ve written for.</h2>
          <p>Campaigns, social and long-form copy delivered for global brands, leagues and events.</p>
        </div>
        <div className="brand-grid">
          {brands.map((brand) => <span className="brand-chip" key={brand}>{brand}</span>)}
        </div>
        <Button asChild className="arcade-button mt-8">
          <a href="https://www.behance.net/gallery/247523423/Copywriter-Portfolio" target="_blank" rel="noreferrer">
            View full portfolio on Behance <ArrowUpRight />
          </a>
        </Button>
      </section>

      <section id="experience" className="section-block experience-section">
        <div className="section-heading"><div><span className="section-kicker">05 / FIGHT RECORD</span><h2>Experience</h2></div><span className="record-badge">4 ROUNDS · UNDEFEATED</span></div>
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
        <div className="section-kicker">06 / THE TOOLKIT</div>
        <h2>Moves in the locker.</h2>
        <div className="skill-grid">
          {skills.map((skill, index) => <div className="skill-tile" key={skill}><span>0{index + 1}</span><b>{skill}</b><Sparkles /></div>)}
        </div>
      </section>

      <section id="about-me" className="section-block skills-section">
        <div className="section-kicker">07 / ABOUT ME</div>
        <h2>About me.</h2>
        <div className="about-copy">
          {aboutLines.map((line) => <p key={line}>{line}</p>)}
          <p><b>I prefer</b></p>
          <ul>{prefers.map(([a, b]) => <li key={a}><b>{a}</b> over {b}</li>)}</ul>
          <p>At this moment, there’s a 97% chance I’ll be reading something or watching something.</p>
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
                {isVideo(slides[slide]?.src) ? <video key={slides[slide]?.src} src={slides[slide]?.src} controls autoPlay playsInline /> : <img src={slides[slide]?.src} alt={slides[slide]?.caption ?? openItem.title} />}
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

      {openScript && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={openScript.title} onClick={() => setOpenScript(null)}>
          <div className="lightbox-top" onClick={(event) => event.stopPropagation()}>
            <b>{openScript.brand} — {openScript.title}</b>
            <Button size="icon" variant="ghost" className="lightbox-close" onClick={() => setOpenScript(null)} aria-label="Close script"><X /></Button>
          </div>
          <div className="lightbox-body" onClick={(event) => event.stopPropagation()}>
            <article className="script-reader">
              <span>{openScript.format}</span>
              <h3>{openScript.title}</h3>
              <p className="script-logline">{openScript.logline}</p>
              {openScript.blocks.map((block, index) => (
                <section key={block.label ?? index}>
                  {block.label && <h4>{block.label}</h4>}
                  {block.lines.map((line) => <p key={line}>{line}</p>)}
                </section>
              ))}
            </article>
          </div>
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