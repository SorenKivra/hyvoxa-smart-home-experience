import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Clock, MapPin, ArrowUpRight, FileText } from "lucide-react";
import { PageHero } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/data/services";

const TITLE = "Contact Hyvoxa | Home Automation Consultations";
const DESC =
  "Contact Hyvoxa about home automation design, installation or support. Email hyvoxa@gmail.com and receive a considered reply within one working day.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Hyvoxa",
          mainEntity: {
            "@type": "Organization",
            name: "Hyvoxa",
            email: "hyvoxa@gmail.com",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer service",
              email: "hyvoxa@gmail.com",
              availableLanguage: "English",
            },
          },
        }),
      },
    ],
  }),
  component: Contact,
});

const include = [
  "The property type, approximate size and whether it's a new build, renovation or occupied home",
  "Which rooms or problems matter most to you right now",
  "Any existing systems, brands or wiring already installed",
  "Your timeline, and a budget range if you have one in mind",
  "Photographs or drawings, if you have them — they save us both a visit",
];

const stages = [
  { title: "You email us", body: "Send as much or as little as you like to hyvoxa@gmail.com. There is no form to fight with." },
  { title: "We reply within one working day", body: "A real response from an engineer, not an auto-acknowledgement. If we're not right for the project, we'll say so and suggest what is." },
  { title: "Free consultation", body: "A call or site visit to understand the property. No sales deck, no pressure, no obligation." },
  { title: "Written proposal", body: "A fixed-scope document with drawings, equipment schedules and clear pricing, usually within a week." },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            One address.
            <br />
            One real reply<span className="text-gradient-tea">.</span>
          </>
        }
        intro="We deliberately don't run a contact form. Email reaches a person on our design team directly, keeps your own record of the conversation, and lets you attach the drawings and photographs that make a first reply genuinely useful."
      >
        <div className="mt-10">
          <a
            href="mailto:hyvoxa@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition-all duration-500 hover:gap-4 hover:shadow-[var(--shadow-glow)]"
            style={{ transitionTimingFunction: "var(--ease-brand)" }}
          >
            <Mail className="size-5" />
            hyvoxa@gmail.com
            <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
          </a>
        </div>
      </PageHero>

      <section className="pb-24">
        <div className="container-x grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {[
            { icon: Mail, label: "Email", value: "hyvoxa@gmail.com", note: "The fastest route to us" },
            { icon: Clock, label: "Response time", value: "Within 1 working day", note: "Mon–Fri, 09:00–18:00" },
            { icon: MapPin, label: "Coverage", value: "On-site & remote", note: "Consultations worldwide" },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 90} className="bg-card p-9">
              <c.icon className="size-5 text-primary" />
              <p className="eyebrow mt-6">{c.label}</p>
              <p className="mt-3 font-display text-xl">{c.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="surface-light py-24">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow">What to include</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-[clamp(1.8rem,4vw,2.7rem)] leading-tight">
                Five lines that get you a better first answer.
              </h2>
            </Reveal>
            <ul className="mt-10 space-y-5">
              {include.map((item, i) => (
                <Reveal key={i} delay={i * 70} as="li" className="flex gap-4">
                  <FileText className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="leading-relaxed">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal>
              <p className="eyebrow">What happens next</p>
            </Reveal>
            <div className="mt-8 space-y-px overflow-hidden rounded-xl border border-border bg-border">
              {stages.map((s, i) => (
                <Reveal key={s.title} delay={i * 80} className="bg-card p-7">
                  <span className="font-mono text-xs tracking-[0.2em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Enquiring about a specific service?</p>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:bg-secondary"
                >
                  {s.name}
                  <ArrowUpRight className="size-3.5 opacity-50" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
