import { createFileRoute } from "@tanstack/react-router";
import teamImg from "@/assets/about-team.jpg";
import { PageHero, CtaBand, SectionHead } from "@/components/site/Sections";
import { Reveal, Parallax } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";

const TITLE = "About Hyvoxa | Home Automation Company & Smart Home Engineers";
const DESC =
  "Hyvoxa is a home automation design and installation practice: measured design, local-first systems, directly employed engineers and lifetime support.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    title: "Honesty before revenue",
    body: "We routinely tell clients to spend less than they planned, or to fix their network before buying anything else. The projects we decline are as important as the ones we accept.",
  },
  {
    title: "Documentation as a deliverable",
    body: "Every cable labelled, every drawing issued, every credential handed over. You should be able to hire any competent integrator after us and have them understand the system in an hour.",
  },
  {
    title: "Local before cloud",
    body: "A home is not a subscription. Automation logic runs on hardware inside your property so it keeps working when the internet, or a manufacturer, does not.",
  },
  {
    title: "Restraint in the design",
    body: "The best system is the smallest one that solves the problem. We remove switches, apps and decisions rather than adding them.",
  },
];

const timeline = [
  { year: "2009", title: "Founded on service calls", body: "We began by repairing other integrators' work. That experience shaped everything: we know precisely how systems fail." },
  { year: "2014", title: "Design practice formed", body: "We stopped installing without drawings. Photometric plans and cable schedules became mandatory on every project." },
  { year: "2019", title: "Local-first standard", body: "We moved all automation logic on-premises after watching cloud outages disable clients' homes." },
  { year: "2023", title: "Energy engineering", body: "Circuit-level monitoring joined the standard specification, turning comfort projects into measurable savings." },
  { year: "2026", title: "480 homes and counting", body: "A practice of designers, engineers and programmers still supporting systems installed over a decade ago." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Hyvoxa"
        title={
          <>
            We fix other people's
            <br />
            smart homes. So we
            <br />
            build ours differently<span className="text-gradient-tea">.</span>
          </>
        }
        intro="Hyvoxa started in 2009 doing repair work on automation systems that had been sold well and designed badly. Seventeen years later that origin still governs how we practise: measured design, open platforms, local control and documentation you actually own."
      />

      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <Parallax strength={40}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={teamImg}
                  alt="Hyvoxa engineers installing a control panel in a modern home"
                  width={1200}
                  height={900}
                  className="size-full object-cover"
                />
              </div>
            </Parallax>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            <Reveal><StatCounter value={480} suffix="+" label="Homes automated" /></Reveal>
            <Reveal delay={90}><StatCounter value={17} label="Years in practice" /></Reveal>
            <Reveal delay={180}><StatCounter value={96} suffix="%" label="Clients who refer us" /></Reveal>
            <Reveal delay={270}><StatCounter value={0} label="Projects subcontracted" /></Reveal>
          </div>
        </div>
      </section>

      <section className="surface-light py-24">
        <div className="container-x grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <SectionHead
            eyebrow="What we believe"
            title="Four positions we won't compromise on."
            body="These are not marketing values. Each one costs us money regularly, and each one is why our earliest clients are still our clients."
          />
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="bg-card p-8">
                <h3 className="text-lg">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <SectionHead eyebrow="Our story" title="Seventeen years, one direction." />
          <div className="mt-16 space-y-px overflow-hidden rounded-xl border border-border bg-border">
            {timeline.map((t, i) => (
              <Reveal
                key={t.year}
                delay={i * 70}
                className="grid gap-4 bg-background p-8 transition-colors duration-700 hover:bg-card md:grid-cols-[140px_240px_1fr] md:items-baseline"
              >
                <span className="font-mono text-sm tracking-[0.2em] text-primary">{t.year}</span>
                <h3 className="text-lg">{t.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{t.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-24">
          <SectionHead
            eyebrow="How we're structured"
            title="Designers, engineers and programmers — all in-house."
            body="A single project team stays with your home from the first survey to the seasonal review three years later. There is no handoff to a service department that has never seen your house."
          />
          <div className="space-y-8 self-center">
            {[
              { role: "Design", body: "Lighting plans, network topology, subsystem matrices and the fixed proposal you sign." },
              { role: "Installation", body: "Directly employed engineers who work clean, protect finishes and communicate daily." },
              { role: "Programming", body: "Scene logic, automation rules and interface design tuned in your home, at the right time of day." },
              { role: "Care", body: "Proactive monitoring, firmware policy, seasonal tuning and a named contact who knows your system." },
            ].map((r, i) => (
              <Reveal key={r.role} delay={i * 90} className="hairline pb-8">
                <p className="eyebrow">{r.role}</p>
                <p className="mt-3 leading-relaxed text-foreground/85">{r.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Come and tell us about your home."
        body="Whether you're mid-renovation or simply tired of five apps, a conversation costs nothing and usually saves money."
      />
    </>
  );
}
