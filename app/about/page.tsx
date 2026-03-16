import Link from "next/link";
import Image from "next/image";
import { ventures, credentialsBio, siteConfig } from "@/lib/data";

export const metadata = {
  title: "About — Christchurch Videographer Ben Childs",
  description: "Ben Childs is an award-winning Christchurch videographer and filmmaker with 10+ years experience in affordable video production, film, acting, and interactive media.",
  alternates: { canonical: "https://www.benchilds.co.nz/about" },
};

export default function Ventures() {
  return (
    <>
      {/* Header */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Ventures</h1>
      </section>

      {/* Ventures grid */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {ventures.map((venture) => (
            <Link
              key={venture.title}
              href={venture.href}
              className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-52 bg-gray-100">
                <Image
                  src={venture.image}
                  alt={venture.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h2 className="text-xl font-bold mb-3">{venture.title}</h2>
                <p className="text-gray-600 leading-relaxed">{venture.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Credentials / bio */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">My credentials</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {credentialsBio.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/videography"
              className="px-8 py-3 bg-gray-950 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors text-center"
            >
              View Prices
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-3 border border-gray-300 text-gray-900 font-semibold rounded-full hover:border-gray-900 transition-colors text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-600">
          <div>
            <p className="font-semibold text-gray-900 mb-1">Location</p>
            <p>{siteConfig.address}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Hours</p>
            {siteConfig.hours.map((h) => (
              <p key={h.day}>{h.day} {h.hours}</p>
            ))}
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Contact</p>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-gray-900 transition-colors block">
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone}`} className="hover:text-gray-900 transition-colors block">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
