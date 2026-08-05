import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] size-[38rem] rounded-full opacity-[0.12] animate-float"
        style={{ background: "var(--gradient-edge)", filter: "blur(100px)" }}
      />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.98]">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {intro}
            </p>
          </Reveal>
        )}
        {children && <Reveal delay={240}>{children}</Reveal>}
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Let's design a home that looks after itself.",
  body = "Tell us about your property and how you live in it. We'll come back within one working day with honest guidance — whether or not you end up working with us.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{ background: "var(--gradient-edge)", filter: "blur(120px)" }}
      />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl rounded-2xl border border-border bg-card/70 p-10 text-center backdrop-blur-xl sm:p-14">
          <p className="eyebrow">Next step</p>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.03]">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">{body}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hyvoxa@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-500 hover:gap-3 hover:shadow-[var(--shadow-glow)]"
              style={{ transitionTimingFunction: "var(--ease-brand)" }}
            >
              <Mail className="size-4" />
              hyvoxa@gmail.com
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Contact details
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.04]">{title}</h2>
      </Reveal>
      {body && (
        <Reveal delay={140}>
          <p className="mt-5 leading-relaxed text-muted-foreground">{body}</p>
        </Reveal>
      )}
    </div>
  );
}
