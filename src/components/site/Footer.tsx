import { Link } from "@tanstack/react-router";
import { Mail, ArrowUpRight } from "lucide-react";
import { Logo } from "./Brand";
import { services } from "@/data/services";

const legal = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Disclaimer", to: "/disclaimer" },
  { label: "Accessibility", to: "/accessibility" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 size-[46rem] -translate-x-1/2 rounded-full opacity-[0.07]"
        style={{ background: "var(--gradient-edge)", filter: "blur(90px)" }}
      />
      <div className="container-x relative py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Hyvoxa designs, installs and maintains home automation systems that make
              beautiful houses quietly effortless to live in.
            </p>
            <a
              href="mailto:hyvoxa@gmail.com"
              className="link-underline mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              <Mail className="size-4" />
              hyvoxa@gmail.com
            </a>
          </div>

          <div>
            <p className="eyebrow">Services</p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Company</p>
            <ul className="mt-5 space-y-3">
              {[
                { label: "About Hyvoxa", to: "/about" },
                { label: "All Services", to: "/services" },
                { label: "Blog", to: "/blog" },
                { label: "Advertise with us", to: "/advertise" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Legal</p>
            <ul className="mt-5 space-y-3">
              {legal.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hyvoxa. All rights reserved.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold"
          >
            Start your project
            <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
