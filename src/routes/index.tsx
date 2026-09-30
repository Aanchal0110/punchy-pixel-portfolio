import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronRight, Volume2, VolumeX, X } from "lucide-react";

import boxerImage from "@/assets/aditya-boxer.png";
import logoAmex from "@/assets/clients/amex.png";
import logoEbco from "@/assets/clients/ebco.svg";
import logoIhcl from "@/assets/clients/ihcl.png";
import logoJioHotstar from "@/assets/clients/jiohotstar.png";
import logoKss from "@/assets/clients/kolkata-superstars.png";
import logoLyke from "@/assets/clients/lyke.png";
import logoNatGeo from "@/assets/clients/natgeo.png";
import logoSukhin from "@/assets/clients/sukhin.png";
import logoSkybags from "@/assets/clients/skybags.png";
import logoTransUnion from "@/assets/clients/transunion.png";
import logoVyoma from "@/assets/clients/vyoma.png";
import logoYolo from "@/assets/clients/yolo.png";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-chrome";
import { scripts, type ScriptItem } from "@/data/scripts";
import { specAds, workMedia } from "@/data/work";
import { gate } from "@/lib/gate";

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
        content: "Some copies I made for some clients.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const MAX_HP = 3;
const hitWords = ["BAM!", "POW!"];

type Client = {
  id: string;
  name: string;
  logo?: string;
  // "cover" fills the tile with the logo artwork; "contain" centres it on white.
  fit?: "cover" | "contain";
  work?: string;
  media?: string[];
  links?: { title: string; url: string }[];
  scriptIds?: string[];
};

const clients: Client[] = [
  {
    id: "jiohotstar", name: "JioHotstar", logo: logoJioHotstar, fit: "cover",
    work: "Worked on their social media page and helped with marketing ideas for the launch of their upcoming films.",
    links: [
      { title: "Promo script for Rebel Kid", url: "https://www.instagram.com/reel/DQGpKSPCpRX/" },
      { title: "Marketing ideas for the upcoming series Mrs Deshpande", url: "https://www.instagram.com/reel/DRPBaj4DEj9/" },
      { title: "JioHotstar reel", url: "https://www.instagram.com/reel/DPq7RoVExeq/" },
    ],
  },
  { id: "natgeo", name: "NatGeo", logo: logoNatGeo, fit: "cover", work: "Topical emailers and marketing ideas for their upcoming shows.", media: workMedia.natgeo },
  { id: "ebco", name: "Ebco", logo: logoEbco, fit: "cover", work: "Topical social media posts and emailers for ideas for new product launches.", media: workMedia.ebco },
  { id: "vyoma", name: "L&T Vyoma", logo: logoVyoma, fit: "contain", work: "Website copy, social media posts & data center interior wall designs.", media: workMedia.vyoma, scriptIds: ["vyoma-av"] },
  { id: "transunion", name: "TransUnion", logo: logoTransUnion, fit: "cover", work: "Ideas for campaigns and BAU emailers.", media: workMedia.transunion },
  { id: "amex", name: "Amex", logo: logoAmex, fit: "cover", work: "Wrote emailers for different cardholders.", media: workMedia.amex },
  { id: "sukhin", name: "Sukhin", logo: logoSukhin, fit: "contain", work: "Social media posts.", media: workMedia.sukhin },
  { id: "lyke", name: "LYKE", logo: logoLyke, fit: "cover", work: "Wrote social media posts.", media: workMedia.lyke },
  { id: "kss", name: "Kolkata Superstars", logo: logoKss, fit: "cover", work: "Managed their social media account.", media: workMedia.kss, scriptIds: ["ecl-retention"] },
  { id: "yolo", name: "Yolo", logo: logoYolo, fit: "contain", work: "Created social media posts.", media: workMedia.yolo },
  { id: "ihcl", name: "IHCL", logo: logoIhcl, fit: "contain", media: workMedia.ihcl },
  { id: "skybags", name: "Skybags", logo: logoSkybags, fit: "cover", media: workMedia.skybags },
];

const isVideo = (src: string) => src.endsWith(".mp4");

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
  const [intro, setIntro] = useState(() => !gate.passed);
  const [hits, setHits] = useState(0);
  const [hitWord, setHitWord] = useState("");
  const [isHit, setIsHit] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const transitionTimer = useRef<number | null>(null);
  const knockedOut = hits >= MAX_HP;
  const hp = Math.max(0, MAX_HP - hits);

  useEffect(() => () => {
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
  }, []);

  const finishIntro = () => {
    gate.passed = true;
    setIntro(false);
  };

  const punch = () => {
    if (knockedOut || isHit) return;
    const next = hits + 1;
    setHits(next);
    setHitWord(next === MAX_HP ? "K.O.!" : (hitWords[(next - 1) % hitWords.length] ?? "BAM!"));
    setIsHit(true);
    if (soundOn) playTone(next === MAX_HP ? "win" : "hit");
    window.setTimeout(() => setIsHit(false), 260);
    if (next === MAX_HP) transitionTimer.current = window.setTimeout(finishIntro, 1500);
  };

  const replay = () => {
    setHits(0);
    setHitWord("");
    setIntro(true);
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
              <div className="health-wrap" aria-label={`${hp} hits remaining`}>
                <div className="flex items-end justify-between">
                  <span className="pixel-label">ADITYA</span>
                  <span className="pixel-label">{knockedOut ? "DOWN" : `${hp} HP`}</span>
                </div>
                <div className="health-track"><div className="health-fill" style={{ width: `${(hp / MAX_HP) * 100}%` }} /></div>
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

            <Button variant="ghost" className="skip-button" onClick={finishIntro}>
              Skip to portfolio <ChevronRight />
            </Button>
          </div>
        </section>
      ) : (
        <Portfolio replay={replay} />
      )}
    </main>
  );
}

function Portfolio({ replay }: { replay: () => void }) {
  const [openClient, setOpenClient] = useState<Client | null>(null);
  const [openScript, setOpenScript] = useState<ScriptItem | null>(null);
  const [flippedId, setFlippedId] = useState<string | null>(null);
  const [openSpec, setOpenSpec] = useState<string | null>(null);
  const [scriptsOpen, setScriptsOpen] = useState(false);

  return (
    <SiteShell onReplay={replay}>
      <section id="top" className="gc-hero">
        <h1>Clients I&apos;ve Worked With</h1>
      </section>

      <section className="gc-flip-grid" aria-label="Clients">
        {clients.map((client) => {
          const hasMore = !!(client.media?.length || client.links?.length || client.scriptIds?.length);
          const flipped = flippedId === client.id;
          return (
            <button
              type="button"
              key={client.id}
              className={`gc-flip ${flipped ? "is-flipped" : ""}`}
              onClick={() => {
                // Mouse users already see the back on hover; touch users tap once to flip, again to open.
                const showingBack = flipped || window.matchMedia("(hover: hover)").matches;
                if (hasMore && showingBack) setOpenClient(client);
                else setFlippedId(flipped ? null : client.id);
              }}
              onMouseLeave={() => setFlippedId(null)}
              aria-label={`${client.name}${client.work ? ` — ${client.work}` : ""}`}
            >
              <span className="gc-flip-inner">
                <span className={`gc-face gc-front ${client.fit === "cover" ? "is-cover" : ""}`}>
                  {client.logo
                    ? <img src={client.logo} alt="" loading="lazy" />
                    : <span className="gc-logo">{client.name}</span>}
                </span>
                <span className="gc-face gc-back">
                  <b>{client.name}</b>
                  {client.work && <span>{client.work}</span>}
                  {hasMore && <i>See the work →</i>}
                </span>
              </span>
            </button>
          );
        })}
      </section>

      <section className="gc-spec" aria-labelledby="spec-title">
        <div className="gc-section-head">
          <span className="section-kicker">Spec ads</span>
          <h2 id="spec-title">A Folder Full of What Ifs</h2>
        </div>
        <div className="gc-marquee">
          <div className="gc-marquee-track">
            {/* Rendered twice so the loop scrolls seamlessly; the copy is hidden from screen readers. */}
            {[0, 1].map((copy) => specAds.map((src, index) => (
              <button type="button" key={`${copy}-${src}`} className="gc-spec-item" onClick={() => setOpenSpec(src)} aria-hidden={copy === 1} tabIndex={copy === 1 ? -1 : 0} aria-label={`Open spec ad ${index + 1}`}>
                <img src={src} alt="" loading="lazy" />
              </button>
            )))}
          </div>
        </div>
      </section>

      <section className="gc-scripts" aria-labelledby="scripts-title">
        <div className="gc-section-head">
          <span className="section-kicker">More</span>
          <h2 id="scripts-title">Mock scripts are right here.</h2>
          <button type="button" className="gc-click-here" onClick={() => setScriptsOpen((open) => !open)} aria-expanded={scriptsOpen}>
            {scriptsOpen ? "Hide them" : "Click here"}
          </button>
        </div>
        {scriptsOpen && (
          <div className="gc-script-grid">
            {scripts.map((script) => (
              <button type="button" key={script.id} className="gc-card" onClick={() => setOpenScript(script)}>
                <small>{script.brand}</small><b>{script.title}</b><span>{script.logline}</span><i>Read script →</i>
              </button>
            ))}
          </div>
        )}
      </section>

      {openSpec && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Spec ad" onClick={() => setOpenSpec(null)}>
          <div className="lightbox-top" onClick={(event) => event.stopPropagation()}>
            <b>Spec ad</b>
            <Button size="icon" variant="ghost" className="lightbox-close" onClick={() => setOpenSpec(null)} aria-label="Close"><X /></Button>
          </div>
          <div className="lightbox-body"><img src={openSpec} alt="Spec ad" onClick={(event) => event.stopPropagation()} /></div>
        </div>
      )}

      {openClient && (
        <div className="lightbox gc-project" role="dialog" aria-modal="true" aria-label={openClient.name} onClick={() => setOpenClient(null)}>
          <div className="lightbox-top" onClick={(event) => event.stopPropagation()}>
            <b>{openClient.name}</b>
            <Button size="icon" variant="ghost" className="lightbox-close" onClick={() => setOpenClient(null)} aria-label="Close"><X /></Button>
          </div>
          <div className="gc-project-body" onClick={(event) => event.stopPropagation()}>
            {openClient.work && <p className="gc-project-sub">{openClient.work}</p>}
            {openClient.media?.map((src) => (
              <figure key={src}>
                {isVideo(src)
                  ? <video src={src} controls playsInline preload="metadata" />
                  : <img src={src} alt={`${openClient.name} work`} loading="lazy" />}
              </figure>
            ))}
            {openClient.links?.map((link) => (
              <a key={link.url} className="gc-card" href={link.url} target="_blank" rel="noreferrer"><b>{link.title}</b><i>▶ Watch on Instagram ↗</i></a>
            ))}
            {openClient.scriptIds?.map((id) => {
              const script = scripts.find((item) => item.id === id);
              return script ? (
                <button type="button" key={id} className="gc-card" onClick={() => setOpenScript(script)}><b>{script.title}</b><span>{script.logline}</span><i>Read script →</i></button>
              ) : null;
            })}
          </div>
        </div>
      )}

      {openScript && (
        <div className="lightbox" style={{ zIndex: 140 }} role="dialog" aria-modal="true" aria-label={openScript.title} onClick={() => setOpenScript(null)}>
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
    </SiteShell>
  );
}
