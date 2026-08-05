import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { posts, formatDate } from "@/data/blog";

const TITLE = "The Hyvoxa Journal | Smart Home Guides & Insight";
const DESC =
  "Practical, vendor-neutral guides to home automation: costs, circadian lighting, security checklists, energy savings, cinema planning and shading.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/blog" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "The Hyvoxa Journal",
          description: DESC,
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            datePublished: p.date,
            url: `/blog/${p.slug}`,
          })),
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title={
          <>
            Read this before
            <br />
            you spend a penny<span className="text-gradient-tea">.</span>
          </>
        }
        intro="No product placements, no affiliate links, no manufacturer talking points. Just what seventeen years of installing and fixing home automation has taught us."
      />

      {featured && (
        <section className="pb-20">
          <div className="container-x">
            <Reveal>
              <Link
                to="/blog/$slug"
                params={{ slug: featured.slug }}
                className="card-lift group grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    width={1200}
                    height={800}
                    className="absolute inset-0 size-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.05]"
                    style={{ transitionTimingFunction: "var(--ease-brand)" }}
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-14">
                  <p className="eyebrow">
                    Featured · {featured.category} · {featured.readTime}
                  </p>
                  <h2 className="mt-5 text-[clamp(1.7rem,3.6vw,2.6rem)] leading-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    {featured.excerpt}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read the article
                    <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <section className="pb-28">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="card-lift group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card"
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
                <div className="flex flex-1 flex-col p-7">
                  <p className="eyebrow">{p.category} · {p.readTime}</p>
                  <h3 className="mt-4 text-lg leading-snug">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <p className="mt-6 text-xs text-muted-foreground">{formatDate(p.date)}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Have a question we haven't written about?"
        body="Send it to us. If it's a good one, we'll answer you directly and it will probably become the next article."
      />
    </>
  );
}
