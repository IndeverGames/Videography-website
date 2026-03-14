import Link from "next/link";
import { services, equipment, credentials, valueProps, testimonials } from "@/lib/data";

export const metadata = {
  title: "Prices — Ben Childs Videography",
  description: "Transparent videography pricing in Christchurch. Filming and editing packages to suit any budget.",
};

export default function Prices() {
  return (
    <>
      {/* Header */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Simple &amp; transparent
        </p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Pricing
        </h1>
        <p className="text-gray-300 max-w-lg mx-auto text-lg">
          The best value videographer in Christchurch. No hidden fees, no surprises.
        </p>
      </section>

      {/* Pricing tables */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service) => (
              <div key={service.category}>
                <h2 className="text-xl font-bold mb-6 pb-3 border-b border-gray-200">
                  {service.category}
                </h2>
                <div className="flex flex-col gap-4">
                  {service.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-start justify-between gap-4 py-4 border-b border-gray-100 last:border-0"
                    >
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{item.duration}</p>
                      </div>
                      <p className="font-bold text-lg whitespace-nowrap">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-2xl text-center">
            <p className="text-gray-600 mb-4">
              Need something custom? Get in touch and we&apos;ll find the right fit.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 bg-gray-950 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose Ben */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">Why choose Ben</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {valueProps.map((vp) => (
              <div key={vp.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg mb-2">{vp.title}</h3>
                <p className="text-gray-600">{vp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & credentials */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Equipment</h2>
            <ul className="flex flex-col gap-3">
              {equipment.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Credentials</h2>
            <ul className="flex flex-col gap-3">
              {credentials.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">Client feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
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
