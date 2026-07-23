import Link from "next/link";
import Image from "next/image";
import { ventures, siteConfig } from "@/lib/data";

export const metadata = {
  title: "Ventures — Ben Childs Videography, Film & Interactive",
  description: "Explore Ben Childs' creative ventures: affordable Christchurch videography, award-winning films, acting, and interactive games and apps.",
  alternates: { canonical: "https://www.benchilds.co.nz/ventures" },
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

      {/* Contact details */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-600">
          <div>
            <p className="font-semibold text-gray-900 mb-1">Location</p>
            <p>{siteConfig.address}</p>
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
