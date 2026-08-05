import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export type LegalSection = { heading: string; paragraphs?: string[]; bullets?: string[] };

const legalNav = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Disclaimer", to: "/disclaimer" },
  { label: "Accessibility", to: "/accessibility" },
];

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] size-[34rem] rounded-full opacity-[0.1] animate-float"
          style={{ background: "var(--gradient-edge)", filter: "blur(100px)" }}
        />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow">Legal</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.02]">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-sm text-muted-foreground">Last updated: {updated}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">{intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-x grid gap-14 lg:grid-cols-[260px_1fr] lg:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">All policies</p>
            <nav className="mt-5 flex flex-col gap-2">
              {legalNav.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "bg-secondary text-foreground" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 rounded-lg border border-border p-5">
              <p className="text-sm font-semibold">Questions about this policy?</p>
              <a
                href="mailto:hyvoxa@gmail.com"
                className="link-underline mt-2 inline-block text-sm text-primary"
              >
                hyvoxa@gmail.com
              </a>
            </div>
          </aside>

          <div className="max-w-3xl">
            {sections.map((s, i) => (
              <Reveal key={i} delay={20} className="mb-12">
                <h2 className="text-xl lg:text-2xl">{s.heading}</h2>
                {s.paragraphs?.map((p, j) => (
                  <p key={j} className="mt-4 leading-relaxed text-foreground/85">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-5 space-y-3">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 leading-relaxed text-foreground/85">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
