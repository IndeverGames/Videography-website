import { MetadataRoute } from "next";

const siteUrl = "https://www.benchilds.co.nz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/videography`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/portfolio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/films`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/acting`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/interactive`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/interactive/davy-jones-deckhand`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/interactive/dough-get-baked`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/interactive/interactive-toddler`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/interactive/super-mayor`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/dvd-services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/credentials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
  ];
}
