import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://www.benchilds.co.nz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ben Childs — Affordable Videographer in Christchurch, NZ",
    template: "%s | Ben Childs Videography Christchurch",
  },
  description:
    "Affordable video production services in Christchurch, New Zealand. Professional videographer with transparent pricing, 10+ years experience, and award-winning results.",
  keywords: [
    "videographer Christchurch",
    "affordable videographer Christchurch",
    "video production Christchurch",
    "affordable video production New Zealand",
    "Christchurch videography",
    "corporate video Christchurch",
    "video production NZ",
  ],
  authors: [{ name: "Ben Childs" }],
  creator: "Ben Childs",
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteUrl,
    siteName: "Ben Childs Videography",
    title: "Ben Childs — Affordable Videographer in Christchurch, NZ",
    description:
      "Affordable video production services in Christchurch, New Zealand. Professional videographer with transparent pricing, 10+ years experience, and award-winning results.",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Ben Childs — Christchurch Videographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Childs — Affordable Videographer in Christchurch, NZ",
    description:
      "Affordable video production services in Christchurch, New Zealand.",
    images: ["/images/hero-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.benchilds.co.nz",
  name: "Ben Childs Videography",
  description:
    "Affordable video production services in Christchurch, New Zealand. Professional videographer with transparent pricing and 10+ years experience.",
  url: "https://www.benchilds.co.nz",
  telephone: "+64273495184",
  email: "contact@benchilds.co.nz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Navarra Road",
    addressLocality: "Christchurch",
    addressRegion: "Canterbury",
    postalCode: "8025",
    addressCountry: "NZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -43.5321,
    longitude: 172.6362,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  image: "https://www.benchilds.co.nz/images/hero-1.jpg",
  sameAs: [
    "https://www.imdb.com/name/nm5188866/",
    "https://www.linkedin.com/in/ben-childs-nz/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geist.variable} font-sans antialiased bg-white text-gray-900`}>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
