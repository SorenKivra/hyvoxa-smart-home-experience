import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Sparkles, Wrench, Clock } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import { Reveal, Parallax } from "@/components/site/Reveal";
import { CtaBand, SectionHead } from "@/components/site/Sections";
import { StatCounter } from "@/components/site/StatCounter";
import { services } from "@/data/services";
import { posts, formatDate } from "@/data/blog";

const TITLE = "Hyvoxa | Home Automation Design, Install & Support";
const DESC =
  "Hyvoxa designs and installs whole-home automation: smart lighting, security, climate, shading and cinema — unified on one reliable local system.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const marquee = [
  "Smart Lighting",
  "Verified Security",
  "Zoned Climate",
  "Motorised Shading",
  "Home Cinema",
  "Multi-Room Audio",
  "Structured Cabling",
  "Energy Monitoring",
  "Access Control",
];

const pillars = [
  {
    icon: Sparkles,
    title: "Designed, not assembled",
    body: "Every system begins as a drawing set — zones, scenes, cable schedules — before a single product is ordered.",
  },
  {
    icon: ShieldCheck,
    title: "Local-first reliability",
    body: "Your automation logic lives on-site. Broadband outages, cloud failures and vendor changes cannot switch off your home.",
  },
  {
    icon: Wrench,
    title: "Installed by our own team",
    body: "No subcontracted mystery. The engineers who design your system are the engineers who commission it.",
  },
  {
    icon: Clock,
    title: "Supported for the long term",
    body: "Named engineer, proactive monitoring, seasonal tuning and full documentation handed to you on day one.",
  },
];

const steps = [
  { n: "01", title: "Discovery", body: "A structured conversation about your property, your household routines and your ambitions for the space." },
  { n: "02", title: "Design", body: "Lighting plans, network topology, control schedules and a fixed proposal with no ambiguity in the scope." },
  { n: "03", title: "Delivery", body: "Coordinated first and second fix, clean site practice and daily progress updates from your lead engineer." },
  { n: "04", title: "Devotion", body: "Scene tuning after you move in, seasonal reviews and priority support for as long as you own the home." },
];

const testimonials = [
  {
    quote:
      "They spent two hours understanding how we live before mentioning a single product. Four years on, the house still behaves exactly as promised.",
    name: "Private residence",
    detail: "6-bedroom new build, whole-home integration",
  },
  {
    quote:
      "Our heating bill fell by almost a third in the first winter. That alone justified the project, and the lighting is what visitors comment on.",
    name: "Family home",
    detail: "Victorian retrofit, climate and lighting",
  },
  {
    quote:
      "The cinema room measurement report they handed over was more thorough than anything our architect produced. These people are engineers.",
    name: "Coastal property",
    detail: "Dedicated cinema and multi-room audio",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Luxury living room at dusk with automated cove lighting and motorised shades"
            width={1600}
            height={1104}
            className="size-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} />
          <div className="absolute inset-0 bg-background/35" />
        </div>

        <div className="container-x relative flex min-h-[100svh] flex-col justify-end pb-20 pt-40">
          <Reveal>
            <p className="eyebrow">Home automation, engineered</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-5xl text-[clamp(2.8rem,8vw,6.5rem)] leading-[0.92]">
              A house that reads
              <br />
              the room
              <span className="text-gradient-tea">.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
              Hyvoxa unifies lighting, security, climate, shading and entertainment into
              one calm system — designed around your household, installed by our own
              engineers, and supported for the life of the home.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all duration-500 hover:gap-4 hover:shadow-[var(--shadow-glow)]"
                style={{ transitionTimingFunction: "var(--ease-brand)" }}
              >
                Book a consultation
                <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-7 py-4 text-sm font-semibold backdrop-blur-md transition-colors hover:bg-secondary"
              >
                Explore our services
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
          <div className="h-14 w-px overflow-hidden bg-border">
            <div className="h-6 w-px animate-float bg-primary" />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border py-5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="eyebrow flex items-center gap-10">
              {m}
              <span className="size-1 rounded-full bg-primary/60" />
            </span>
          ))}
        </div>
      </div>

      {/* INTRO + STATS */}
      <section className="py-28">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
          <SectionHead
            eyebrow="Who we are"
            title="Technology should disappear into the architecture."
            body="Most smart homes fail because they were bought rather than designed. Hyvoxa works the other way around: we start with how your household actually moves through the day, then build the smallest, most reliable system that makes that day easier. Fewer switches. Fewer apps. Fewer decisions."
          />
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 self-center">
            <Reveal><StatCounter value={480} suffix="+" label="Homes automated" /></Reveal>
            <Reveal delay={90}><StatCounter value={17} label="Years in the field" /></Reveal>
            <Reveal delay={180}><StatCounter value={31} suffix="%" label="Average energy saving" /></Reveal>
            <Reveal delay={270}><StatCounter value={99} suffix=".9%" label="System uptime target" /></Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="surface-light py-28">
        <div className="container-x">
          <SectionHead
            eyebrow="What we do"
            title="Six disciplines, one integrated system."
            body="Each service stands alone beautifully — and gets better the moment it shares infrastructure with the others."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="card-lift group block h-full overflow-hidden rounded-xl border border-border bg-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={`${s.name} by Hyvoxa`}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.07]"
                      style={{ transitionTimingFunction: "var(--ease-brand)" }}
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur">
                      {s.tagline}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="flex items-start justify-between gap-4 text-xl">
                      {s.name}
                      <ArrowUpRight className="mt-1 size-4 shrink-0 opacity-40 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100" />
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {s.short}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS + PARALLAX */}
      <section className="py-28">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-24">
          <Reveal>
            <Parallax strength={50}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={services[5]!.image}
                  alt="Structured cabling rack installed by Hyvoxa"
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="size-full object-cover"
                />
              </div>
            </Parallax>
          </Reveal>
          <div>
            <SectionHead
              eyebrow="Why Hyvoxa"
              title="The difference is what you never have to think about."
            />
            <div className="mt-12 space-y-10">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 80} className="flex gap-5">
                  <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-primary/40 text-primary">
                    <p.icon className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-lg">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-border py-28">
        <div className="container-x">
          <SectionHead
            eyebrow="How we work"
            title="Four phases. No surprises."
            align="center"
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90} className="group bg-background p-8 transition-colors duration-700 hover:bg-card">
                <span className="font-mono text-xs tracking-[0.2em] text-primary">{s.n}</span>
                <h3 className="mt-6 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <span className="mt-8 block h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-700 group-hover:scale-x-100" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28">
        <div className="container-x">
          <SectionHead eyebrow="In their words" title="Homes we still look after." />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name + i}
                delay={i * 100}
                className="card-lift flex h-full flex-col justify-between rounded-xl border border-border bg-card p-8"
              >
                <p className="font-display text-lg leading-snug">“{t.quote}”</p>
                <div className="mt-8 border-t border-border pt-5">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{t.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="surface-light py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="Journal"
              title="Guidance worth reading before you spend."
            />
            <Reveal delay={140}>
              <Link to="/blog" className="group inline-flex items-center gap-2 text-sm font-semibold">
                All articles
                <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="card-lift group block h-full overflow-hidden rounded-xl border border-border bg-card"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <p className="eyebrow">{p.category} · {p.readTime}</p>
                    <h3 className="mt-4 text-lg leading-snug">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <p className="mt-5 text-xs text-muted-foreground">{formatDate(p.date)}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
