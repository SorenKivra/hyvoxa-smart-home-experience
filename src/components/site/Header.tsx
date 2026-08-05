import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Brand";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent",
      )}
      style={{ transitionTimingFunction: "var(--ease-brand)" }}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Link to="/" onClick={() => setOpen(false)} aria-label="Hyvoxa home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <div
              key={item.to}
              className="relative"
              onMouseEnter={() => item.to === "/services" && setServicesOpen(true)}
              onMouseLeave={() => item.to === "/services" && setServicesOpen(false)}
            >
              <Link
                to={item.to}
                className="link-underline text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>

              {item.to === "/services" && (
                <div
                  className={cn(
                    "absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-5 transition-all duration-500",
                    servicesOpen
                      ? "pointer-events-auto opacity-100 translate-y-0"
                      : "pointer-events-none opacity-0 -translate-y-2",
                  )}
                  style={{ transitionTimingFunction: "var(--ease-brand)" }}
                >
                  <div className="grid grid-cols-2 gap-1 rounded-lg border border-border bg-card/95 p-2 backdrop-blur-xl shadow-[var(--shadow-lift)]">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="group rounded-md px-3 py-2.5 transition-colors hover:bg-secondary"
                      >
                        <span className="flex items-center justify-between text-sm font-semibold">
                          {s.name}
                          <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-70" />
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {s.tagline}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-500 hover:gap-3 hover:shadow-[var(--shadow-glow)]"
            style={{ transitionTimingFunction: "var(--ease-brand)" }}
          >
            Book a consultation
            <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 place-items-center rounded-full border border-border lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={cn(
          "fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-background px-5 pb-16 pt-6 transition-all duration-500 lg:hidden",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0",
        )}
        style={{ transitionTimingFunction: "var(--ease-brand)" }}
      >
        <nav className="flex flex-col">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="hairline py-4 font-display text-2xl font-bold"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="eyebrow mt-8">All services</p>
        <div className="mt-3 flex flex-col gap-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              onClick={() => setOpen(false)}
              className="rounded-md border border-border px-4 py-3 text-sm"
            >
              {s.name}
            </Link>
          ))}
        </div>
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="mt-8 flex items-center justify-center rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground"
        >
          Book a consultation
        </Link>
      </div>
    </header>
  );
}
