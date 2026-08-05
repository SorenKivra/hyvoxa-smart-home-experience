import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { posts, getPost, formatDate, type Post } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article unavailable | Hyvoxa" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.post;
    return {
      meta: [
        { title: p.metaTitle },
        { name: "description", content: p.metaDescription },
        { property: "og:title", content: p.metaTitle },
        { property: "og:description", content: p.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:title", content: p.metaTitle },
        { name: "twitter:description", content: p.metaDescription },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: p.title,
            description: p.metaDescription,
            datePublished: p.date,
            author: { "@type": "Organization", name: "Hyvoxa" },
            publisher: { "@type": "Organization", name: "Hyvoxa" },
          }),
        },
      ],
    };
  },
  notFoundComponent: PostMissing,
  component: BlogPost,
});

function PostMissing() {
  return (
    <div className="container-x flex min-h-[70svh] flex-col justify-center py-32">
      <h1 className="text-4xl">That article isn't here</h1>
      <p className="mt-4 text-muted-foreground">It may have moved. The journal index has everything.</p>
      <Link to="/blog" className="mt-8 inline-flex items-center gap-2 text-primary">
        <ArrowLeft className="size-4" /> Back to the journal
      </Link>
    </div>
  );
}

function BlogPost() {
  const { post } = Route.useLoaderData() as { post: Post };
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="container-x pt-40 pb-14">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> Journal
            </Link>
          </Reveal>
          <Reveal delay={70}>
            <p className="eyebrow mt-8">
              {post.category} · {post.readTime} · {formatDate(post.date)}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.1rem,5.2vw,4rem)] leading-[1.02]">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={210}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
          </Reveal>
        </header>

        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={post.image}
                alt={post.title}
                width={1200}
                height={800}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="container-x grid gap-12 py-20 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="eyebrow">Written by</p>
              <p className="mt-3 font-display text-lg">{post.author}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Hyvoxa engineers design, install and maintain home automation systems for
                private residences.
              </p>
              <a
                href="mailto:hyvoxa@gmail.com"
                className="link-underline mt-5 inline-block text-sm font-medium text-primary"
              >
                hyvoxa@gmail.com
              </a>
            </Reveal>
          </aside>

          <div className="max-w-2xl">
            {post.body.map((block, i) => {
              if (block.type === "h2")
                return (
                  <Reveal key={i} delay={20}>
                    <h2 className="mt-14 text-[clamp(1.5rem,3vw,2rem)] leading-tight first:mt-0">
                      {block.text}
                    </h2>
                  </Reveal>
                );
              if (block.type === "h3")
                return (
                  <Reveal key={i} delay={20}>
                    <h3 className="mt-10 text-xl">{block.text}</h3>
                  </Reveal>
                );
              if (block.type === "ul")
                return (
                  <Reveal key={i} delay={20}>
                    <ul className="mt-6 space-y-3">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex gap-3 leading-relaxed text-foreground/85">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                );
              if (block.type === "quote")
                return (
                  <Reveal key={i} delay={20}>
                    <blockquote className="my-12 border-l-2 border-primary pl-6 font-display text-xl leading-snug">
                      {block.text}
                    </blockquote>
                  </Reveal>
                );
              return (
                <Reveal key={i} delay={20}>
                  <p className="mt-6 leading-relaxed text-foreground/85">{block.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </article>

      <section className="surface-light py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)]">Keep reading</h2>
            <Link to="/blog" className="group inline-flex items-center gap-2 text-sm font-semibold">
              All articles
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((p, i) => (
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
                    <p className="eyebrow">{p.category}</p>
                    <h3 className="mt-3 text-lg leading-snug">{p.title}</h3>
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
