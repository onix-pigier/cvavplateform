import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const configuredUrl = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL;
  const baseUrl = configuredUrl ?? (process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000");
  return {
    rules: { userAgent: "*", allow: ["/", "/paroisses", "/doyennes"], disallow: ["/admin", "/militant", "/api", "/ecrans", "/login"] },
    ...(baseUrl ? { sitemap: `${baseUrl.replace(/\/$/, "")}/sitemap.xml` } : {}),
  };
}
