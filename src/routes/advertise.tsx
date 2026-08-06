import { createFileRoute } from "@tanstack/react-router";
import { Mail, ArrowUpRight, PenLine, CheckCircle2, XCircle, Clock } from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Advertise With Us | Guest Posts on Hyvoxa";
const DESC =
  "Place your guest post or brand feature on Hyvoxa. We accept contributions across home automation, home improvement, renovation and related categories. Pitch to hyvoxa@gmail.com.";

export const Route = createFileRoute("/advertise")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/advertise" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/advertise" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: TITLE,
          description: DESC,
          publisher: { "@type": "Organization", name: "Hyvoxa", email: "hyvoxa@gmail.com" },
        }),
      },
    ],
  }),
  component: Advertise,
});

const categories: { group: string; items: string[] }[] = [
  {
    group: "Home automation",
    items: [
      "Smart lighting & scene design",
      "Home security, cameras & access control",
      "Climate, HVAC & smart thermostats",
      "Home cinema, media & multi-room audio",
      "Motorised shades & window treatments",
      "Voice assistants, hubs & system integration",
      "Sensors, automation logic & routines",
      "Home networking, Wi-Fi & structured cabling",
    ],
  },
  {
    group: "Home improvement",
    items: [
      "Interior design & styling",
      "Lighting design & electrical upgrades",
      "Storage, joinery & space planning",
      "Flooring, tiling & surfaces",
      "Painting, finishes & decorating",
      "Doors, windows & insulation",
    ],
  },
  {
    group: "Home renovation",
    items: [
      "Whole-house refurbishment",
      "Kitchen & bathroom remodelling",
      "Loft, basement & garage conversions",
      "Extensions & structural work",
      "Heritage & period property retrofit",
      "Project management & budgeting",
    ],
  },
  {
    group: "Adjacent categories",
    items: [
      "Energy efficiency, solar & battery storage",
      "Sustainable & green building",
      "Real estate, property value & staging",
      "Garden, outdoor lighting & landscaping",
      "Home maintenance & seasonal care",
      "Proptech, smart appliances & gadgets",
    ],
  },
];

const accepted = [
  "Original writing that has not been published anywhere else, including your own blog",
  "800–2,000 words, written for homeowners rather than for search engines",
  "A clear, practical takeaway — a method, a comparison, a lesson learned on site",
  "Accurate technical detail; specifications and standards are checked before publication",
  "Your own images, diagrams or photographs, or properly licensed ones with credits",
  "Up to two contextual links, at most one of them commercial",
];

const declined = [
  "Spun, AI-dumped or lightly reworded content",
  "Casino, adult, loans, crypto, pharma or unrelated niches",
  "Link-only placements inserted into existing articles",
  "Press releases and thinly disguised product brochures",
  "Anchor-text stuffing or links to link farms and PBNs",
];

const steps = [
  {
    title: "Send the pitch",
    body: "Email hyvoxa@gmail.com with two or three headline ideas, a short outline for each and a link to something you have written before. Put 'Guest post' in the subject line.",
  },
  {
    title: "Hear back within 2 working days",
    body: "A real editor reads it. If an idea fits the blog you get a go-ahead with the angle, word count and deadline agreed up front. If it does not fit, you get a reason rather than silence.",
  },
  {
    title: "Submit the draft",
    body: "Google Doc or plain markdown, with images attached separately. Include your author bio, headshot and the links you would like included.",
  },
  {
    title: "Edit and publish",
    body: "We copy-edit for house style, fact-check technical claims and may suggest changes. You see the final version before it goes live, and the piece stays online permanently.",
  },
];

const facts = [
  { label: "Readership", value: "Homeowners & specifiers" },
  { label: "Typical review", value: "2 working days" },
  { label: "Word count", value: "800 – 2,000" },
  { label: "Links", value: "Up to 2, contextual" },
];

function Advertise() {
  return (
    <>
      <PageHero
        eyebrow="Advertise with us"
        title={
          <>
            Put your work in front of
            <br />
            people who are already renovating<span className="text-gradient-tea">.</span>
          </>
        }
        intro="The Hyvoxa blog is read by homeowners mid-project, designers specifying systems and installers comparing approaches. If you have something genuinely useful to say to that audience, there is a place for it here — email your pitch and it will be read by an editor, not a queue."
      >
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="mailto:hyvoxa@gmail.com?subject=Guest%20post%20pitch"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition-all duration-500 hover:gap-4 hover:shadow-[var(--shadow-glow)]"
            style={{ transitionTimingFunction: "var(--ease-brand)" }}
          >
            <Mail className="size-5" />
            hyvoxa@gmail.com
            <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
          </a>
          <span className="text-sm text-muted-foreground">Subject line: Guest post</span>
        </div>
      </PageHero>

      <section className="pb-24">
        <div className="container-x grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 80} className="bg-card p-8">
              <p className="eyebrow">{f.label}</p>
              <p className="mt-3 font-display text-lg">{f.value}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="surface-light py-24">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Categories we publish</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 max-w-3xl text-[clamp(1.9rem,4vw,3rem)] leading-[1.04]">
              Home automation, home improvement, renovation — and everything sitting around them.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              If your subject touches how a house is built, fitted out, powered or lived in, it
              probably belongs on this list. When you are unsure, send the idea anyway — the worst
              outcome is a quick no.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {categories.map((c, i) => (
              <Reveal key={c.group} delay={i * 90} className="bg-card p-9">
                <span className="font-mono text-xs tracking-[0.2em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl">{c.group}</h3>
                <ul className="mt-6 space-y-3">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">What gets published</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-[clamp(1.7rem,3.5vw,2.4rem)] leading-tight">
                The standard your draft is held to.
              </h2>
            </Reveal>
            <ul className="mt-9 space-y-5">
              {accepted.map((a, i) => (
                <Reveal key={i} delay={i * 60} as="li" className="flex gap-4">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="leading-relaxed text-foreground/85">{a}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal>
              <p className="eyebrow">What gets turned down</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-[clamp(1.7rem,3.5vw,2.4rem)] leading-tight">
                Save yourself the email.
              </h2>
            </Reveal>
            <ul className="mt-9 space-y-5">
              {declined.map((d, i) => (
                <Reveal key={i} delay={i * 60} as="li" className="flex gap-4">
                  <XCircle className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  <span className="leading-relaxed text-foreground/85">{d}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="surface-light py-24">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">How submission works</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] leading-[1.04]">
              Four steps, one email address.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className="bg-card p-8">
                <PenLine className="size-5 text-primary" />
                <span className="mt-6 block font-mono text-xs tracking-[0.2em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="size-4 text-primary" />
            Pitches are reviewed Monday to Friday. Anything sent over a weekend is answered on the
            next working day.
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Have an idea worth reading? Send it over."
        body="Email hyvoxa@gmail.com with 'Guest post' in the subject line, two or three angles and a sample of your writing. You will get a straight answer either way."
      />
    </>
  );
}
