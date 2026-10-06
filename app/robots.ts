import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.SITE_URL ?? "http://localhost:3000";
  return { rules: { userAgent: "*", allow: ["/", "/paroisses"], disallow: ["/admin", "/militant", "/api", "/ecrans"] }, sitemap: `${baseUrl}/sitemap.xml` };
}
