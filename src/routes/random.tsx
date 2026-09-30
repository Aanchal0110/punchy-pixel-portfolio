import { createFileRoute } from "@tanstack/react-router";

import { SiteShell } from "@/components/site-chrome";

export const Route = createFileRoute("/random")({
  head: () => ({
    meta: [
      { title: "Random things — Aditya Salve, Copywriter" },
      { name: "description", content: "A few random things about Aditya Salve, copywriter." },
      { property: "og:title", content: "Random things — Aditya Salve, Copywriter" },
    ],
  }),
  component: RandomThings,
});

const randomLines = [
  "I laugh in serious situations.",
  "I watch television a lot; my electricity bill speaks for itself.",
  "I like to watch documentaries about the Caribbean and Latin America and would love to live that life on the coast, but with money.",
  "I’m an introvert (for the first few days).",
];
const prefers = [["Ronaldo", "Messi"], ["Djokovic", "Federer"], ["Twitter", "Instagram"]];

function RandomThings() {
  return (
    <SiteShell>
      <section className="section-block gc-text">
        <h2>Random things</h2>
        {randomLines.map((line) => <p key={line}>{line}</p>)}
        <p>I prefer</p>
        <ul>{prefers.map(([a, b]) => <li key={a}>{a} over {b}</li>)}</ul>
        <p>and Generational wealth over anything.</p>
        <p>At this moment, there’s a 97% chance I’ll be reading something or watching something.</p>
      </section>
    </SiteShell>
  );
}
