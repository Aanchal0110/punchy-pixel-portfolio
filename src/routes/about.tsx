import { createFileRoute } from "@tanstack/react-router";

import { SiteShell } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aditya Salve, Copywriter" },
      { name: "description", content: "Aditya Salve is a copywriter writing campaign ideas, scripts, emailers and social content." },
      { property: "og:title", content: "About — Aditya Salve, Copywriter" },
    ],
  }),
  component: About,
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

function About() {
  return (
    <SiteShell>
      <section className="section-block gc-about">
        <h2>About</h2>
        <p className="gc-about-intro">I&apos;m Aditya, a copywriter. I write campaign ideas, scripts, emailers and social posts for brands across entertainment, finance, sports and lifestyle.</p>
        <div className="experience-list">
          {experience.map((item, index) => (
            <div key={item.company} className="experience-row">
              <span className="round-number">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{item.company}</h3><p className="role-line">{item.role} · {item.date}</p></div>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
