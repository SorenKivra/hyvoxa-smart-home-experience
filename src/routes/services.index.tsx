import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero, CtaBand, SectionHead } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/data/services";

const TITLE = "Smart Home Automation Services | Hyvoxa";
const DESC =
  "Explore Hyvoxa's home automation services: smart lighting, security and access, climate and energy, cinema and audio, motorised shading and whole-home integration.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Hyvoxa home automation services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            url: `/services/${s.slug}`,
          })),
        }),
      },
    ],
  }),
  component: ServicesIndex,
});

const included = [
  "Site survey and measured design drawings",
  "Fixed-scope proposal with itemised pricing",
  "Installation by directly employed engineers",
  "On-site commissioning and scene tuning",
  "Full documentation and credentials handover",
  "Twelve months of included support",
];

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Six disciplines. One
            <br />
            house that behaves<span className="text-gradient-tea">.</span>
          </>
        }
        intro="Every Hyvoxa service can be delivered on its own, and every one is designed so it can later join a single unified system without being replaced. Start where the pain is; expand when you're ready."
      />

      <section className="pb-28">
        <div className="container-x space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="card-lift group grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-[0.85fr_1fr]"
              >
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[300px]">
                  <img
                    src={s.image}
                    alt={`${s.name} installation by Hyvoxa`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="absolute inset-0 size-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.06]"
                    style={{ transitionTimingFunction: "var(--ease-brand)" }}
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <span className="eyebrow">
                    {String(i + 1).padStart(2, "0")} — {s.tagline}
                  </span>
                  <h2 className="mt-4 flex items-start justify-between gap-6 text-[clamp(1.5rem,3vw,2.2rem)] leading-tight">
                    {s.name}
                    <ArrowUpRight className="mt-1 size-5 shrink-0 opacity-40 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100" />
                  </h2>
                  <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {s.outcomes.map((o) => (
                      <span
                        key={o.label}
                        className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        <span className="font-semibold text-primary">{o.value}</span>{" "}
                        {o.label.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="surface-light py-28">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
          <SectionHead
            eyebrow="Always included"
            title="Every engagement, regardless of size."
            body="We quote one way and work one way. There is no premium tier of care reserved for larger projects — a single-room lighting upgrade receives the same drawings, the same commissioning and the same documentation as a whole-home build."
          />
          <ul className="grid gap-4 self-center sm:grid-cols-2">
            {included.map((item, i) => (
              <Reveal key={item} delay={i * 70} as="li" className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        body="Describe your home and the thing that frustrates you most about it. We'll tell you where to start — and where not to spend."
      />
    </>
  );
}
