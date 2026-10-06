import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { DALOA_DIOCESE_ID } from "@/modules/organisation/public";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const configuredUrl = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL;
  const baseUrl = configuredUrl ?? (process.env.NODE_ENV === "production" ? null : "http://localhost:3000");
  if (!baseUrl) return [];

  let origin: string;
  try { origin = new URL(baseUrl).origin; } catch { return []; }

  const doyennes = await prisma.doyenne.findMany({
    where: { dioceseId: DALOA_DIOCESE_ID, isActive: true },
    select: { id: true, updatedAt: true, paroisses: { where: { isActive: true }, select: { id: true, updatedAt: true } } },
  });
  const urls: MetadataRoute.Sitemap = [
    { url: origin, changeFrequency: "weekly", priority: 1 },
    { url: `${origin}/paroisses`, changeFrequency: "weekly", priority: 0.9 },
  ];
  for (const doyenne of doyennes) {
    urls.push({ url: `${origin}/doyennes/${encodeURIComponent(doyenne.id)}`, lastModified: doyenne.updatedAt, changeFrequency: "monthly", priority: 0.7 });
    for (const paroisse of doyenne.paroisses) urls.push({ url: `${origin}/paroisses/${encodeURIComponent(paroisse.id)}`, lastModified: paroisse.updatedAt, changeFrequency: "monthly", priority: 0.6 });
  }
  return urls;
}
