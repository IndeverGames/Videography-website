import Link from "next/link";
import { ventures, siteConfig } from "@/lib/data";

export const metadata = {
  title: "Ventures — Ben Childs",
  description: "Ben Childs is a Christchurch-based videographer, filmmaker, actor, and interactive media developer.",
};

export default function Ventures() {
  return (
    <>
      {/* Header */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
          About
        </p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Ventures</h1>
        <p className="text-gray-300 max-w-lg mx-auto text-lg">
          Ben Childs is a Christchurch-based creative professional working across
          video production, film, acting, and interactive media.
        </p>
      </section>

      {/* Ventures grid */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {ventures.map((venture, i) => (
            <div
              key={venture.title}
              className="rounded-2xl border border-gray-200 p-8 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl font-bold text-gray-200 mb-4 select-none">
                0{i + 1}
              </div>
              <h2 className="text-xl font-bold mb-3">{venture.title}</h2>
              <p className="text-gray-600 leading-relaxed">{venture.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bio / credentials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Ben</h2>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Based in Christchurch, New Zealand, Ben Childs is an experienced producer,
              director, and actor with a track record spanning commercial video production,
              narrative short films, and interactive media.
            </p>
            <p>
              His films have screened at international festivals including Show Me Shorts
              and IndieFest USA, where <em>Birdsong</em> won Best Foreign Film. He has
              held speaking roles in three feature films and trained with world-class
              industry experts.
            </p>
            <p>
              On the commercial side, Ben has served as Senior Media Manager at Storypark
              and spent 5+ years as a consultant to Fire and Emergency New Zealand —
              bringing the same outcome-focused discipline to every client project.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/prices"
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
            <p>{siteConfig.hours}</p>
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
