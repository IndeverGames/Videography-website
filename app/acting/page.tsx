import Image from "next/image";
import Link from "next/link";
import { actingCredits, siteConfig } from "@/lib/data";

export const metadata = {
  title: "Acting — Ben Childs",
  description: "Ben Childs is an experienced actor with speaking roles in three feature films and extensive theatre credits.",
};

export default function Acting() {
  return (
    <>
      {/* Header */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Acting</h1>
        <p className="text-gray-300 max-w-lg mx-auto text-lg">
          An experienced actor and director having played speaking roles in three feature films, directed two award-winning shorts, and studied with world-class experts.
        </p>
      </section>

      {/* Hero image */}
      <section className="relative h-96 bg-gray-100">
        <Image
          src="/images/acting-hero.png"
          alt="Ben Childs as Scott Guy in Friend of the Friendless"
          fill
          className="object-cover object-top"
        />
      </section>

      {/* Film credits */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Film &amp; TV</h2>
          <div className="flex flex-col divide-y divide-gray-100">
            {actingCredits.film.map((credit) => (
              <div key={credit.title} className="py-4 flex items-baseline justify-between gap-4">
                <div>
                  <p className="font-semibold">{credit.title}</p>
                  <p className="text-sm text-gray-500">{credit.type} — {credit.role}</p>
                </div>
                <span className="text-sm text-gray-400 flex-shrink-0">{credit.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acting image */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/acting-scott-guy.png"
              alt="Ben Childs as Scott Guy"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Theatre credits */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Theatre</h2>
          <div className="flex flex-col divide-y divide-gray-100">
            {actingCredits.theatre.map((credit) => (
              <div key={credit.title} className="py-4 flex items-baseline justify-between gap-4">
                <div>
                  <p className="font-semibold">{credit.title}</p>
                  <p className="text-sm text-gray-500">{credit.role} — {credit.company}</p>
                </div>
                <span className="text-sm text-gray-400 flex-shrink-0">{credit.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <p className="text-lg text-gray-700 mb-6">
          I love acting and directing! So please get in touch to discuss your project with me, great or small.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-block px-8 py-3 bg-gray-950 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
        >
          Get in Touch
        </a>
      </section>

      <div className="py-6 px-6 text-center">
        <Link href="/ventures" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
          ← Back to Ventures
        </Link>
      </div>
    </>
  );
}
