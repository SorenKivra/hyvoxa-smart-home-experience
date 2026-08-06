import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { posts } from "@/data/blog";

const staticPaths: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/about", priority: "0.6", changefreq: "yearly" },
  { path: "/contact", priority: "0.7", changefreq: "yearly" },
  { path: "/advertise", priority: "0.5", changefreq: "yearly" },
  { path: "/privacy-policy", priority: "0.2", changefreq: "yearly" },
  { path: "/terms-of-service", priority: "0.2", changefreq: "yearly" },
  { path: "/cookie-policy", priority: "0.2", changefreq: "yearly" },
  { path: "/disclaimer", priority: "0.2", changefreq: "yearly" },
  { path: "/accessibility", priority: "0.2", changefreq: "yearly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const urls = [
          ...staticPaths.map((p) => ({ loc: p.path, lastmod: "", ...p })),
          ...services.map((s) => ({
            path: `/services/${s.slug}`,
            priority: "0.8",
            changefreq: "monthly",
            lastmod: "",
          })),
          ...posts.map((p) => ({
            path: `/blog/${p.slug}`,
            priority: "0.7",
            changefreq: "monthly",
            lastmod: p.updated,
          })),
        ];

        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${origin}${u.path}</loc>${
        u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""
      }<changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>`;

        return new Response(body, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
