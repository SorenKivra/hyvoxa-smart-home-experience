import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/Sections";
import { Reveal, Parallax } from "@/components/site/Reveal";
import { services, getService, type Service } from "@/data/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service unavailable | Hyvoxa" }, { name: "robots", content: "noindex" }],
      };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
        { name: "twitter:title", content: s.metaTitle },
        { name: "twitter:description", content: s.metaDescription },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.name,
            serviceType: s.name,
            description: s.metaDescription,
            areaServed: "Nationwide",
            provider: {
              "@type": "HomeAndConstructionBusiness",
              name: "Hyvoxa",
              email: "hyvoxa@gmail.com",
              url: "/",
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
              {
                "@type": "ListItem",
                position: 3,
                name: s.name,
                item: `/services/${params.slug}`,
              },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: ServiceMissing,
  component: ServiceDetail,
});

function ServiceMissing() {
  return (
    <div className="container-x flex min-h-[70svh] flex-col justify-center py-32">
      <h1 className="text-4xl">We couldn't find that service</h1>
      <p className="mt-4 text-muted-foreground">
        It may have been renamed. Browse everything we offer instead.
      </p>
      <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-primary">
        <ArrowLeft className="size-4" /> All services
      </Link>
    </div>
  );
}

function ServiceDetail() {
  const { service: s } = Route.useLoaderData() as { service: Service };
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`Services — ${s.tagline}`}
        title={s.name}
        intro={s.short}
      >
        <div className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-10">
          {s.outcomes.map((o) => (
            <div key={o.label}>
              <p className="font-display text-3xl font-extrabold tracking-tight text-gradient-tea">
                {o.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{o.label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <Parallax strength={30}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={s.image}
                  alt={`${s.name} by Hyvoxa`}
                  width={1200}
                  height={800}
                  className="size-full object-cover"
                />
              </div>
            </Parallax>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow">Overview</p>
          </Reveal>
          <div className="space-y-6">
            {s.intro.map((para, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-lg leading-relaxed text-foreground/85">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-light py-24">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">What's included</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">
              The detail that separates a system from a collection of devices.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {s.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80} className="bg-card p-8 lg:p-10">
                <h3 className="text-xl">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Our process</p>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {s.process.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <span className="font-mono text-xs tracking-[0.2em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-4 text-[clamp(1.7rem,3.5vw,2.4rem)] leading-tight">
              Straight answers, before you ask.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {s.faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-lg hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)]">Pairs well with</h2>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-semibold">
                All services
                <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 90}>
                <Link
                  to="/services/$slug"
                  params={{ slug: o.slug }}
                  className="card-lift group block h-full overflow-hidden rounded-xl border border-border bg-card"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={o.image}
                      alt={o.name}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="text-lg">{o.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {o.short}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Ready to talk about ${s.name.toLowerCase()}?`} />
    </>
  );
}
