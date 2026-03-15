import Link from "next/link";
import Image from "next/image";
import { services, equipment, softwareNote, valueProps, testimonials, soloFilmingQuote, pricingNote, portfolioVideos } from "@/lib/data";

export const metadata = {
  title: "Prices — Ben Childs Videography",
  description: "Transparent videography pricing in Christchurch. Filming and editing packages to suit any budget.",
};

export default function Prices() {
  return (
    <>
      {/* Header */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Videography Services
        </h1>
      </section>

      {/* Why choose */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Why choose me for your video?</h2>
          <ul className="flex flex-col gap-4">
            {valueProps.map((vp, i) => (
              <li key={i} className="flex items-center gap-3 text-lg">
                <span className="text-green-500">✅</span>
                <span dangerouslySetInnerHTML={{ __html: vp.replace("Best", "<strong>Best</strong>") }} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service) => (
              <div key={service.category}>
                <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-200">
                  {service.category}
                </h3>
                <div className="flex flex-col gap-4">
                  {service.items.map((item) => (
                    <div
                      key={item.name}
                      className="py-4 border-b border-gray-100 last:border-0"
                    >
                      <div className="flex items-baseline justify-between gap-4 mb-1">
                        <p className="font-semibold uppercase tracking-wide text-sm">{item.name}</p>
                        <p className="font-bold text-lg whitespace-nowrap">{item.price}</p>
                      </div>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-gray-500 italic text-sm max-w-2xl mx-auto text-center">
            {pricingNote}
          </p>
        </div>
      </section>

      {/* Get in touch / solo filming */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            &ldquo;{soloFilmingQuote}&rdquo;
          </p>
          <p className="text-gray-500 mb-8">
            Need to know more?{" "}
            <Link href="/ventures" className="underline underline-offset-4 hover:text-gray-900 transition-colors">
              Read about my background.
            </Link>
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3 bg-gray-950 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioVideos.map((video) => (
              <div key={video.embedUrl}>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-200 shadow-sm">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700 px-1">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">My equipment</h2>
          <p className="text-gray-500 mb-10">
            This is my go-to, everyday kit that is included in my price.
          </p>
          <div className="flex flex-col gap-10">
            {equipment.map((item) => (
              <div key={item.name} className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="relative w-full sm:w-48 h-36 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-gray-500 text-sm">{softwareNote}</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl p-8 border border-gray-100 shadow-sm bg-gray-50">
                <p className="text-gray-700 leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-500">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
