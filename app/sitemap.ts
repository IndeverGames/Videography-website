import { MetadataRoute } from "next";

const siteUrl = "https://www.benchilds.co.nz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/videography`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/films`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/ventures`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/acting`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/interactive`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
