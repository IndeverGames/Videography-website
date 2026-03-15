import Link from "next/link";
import { testimonials, clients, siteConfig } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-gray-950 text-white">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Christchurch, New Zealand
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Christchurch
          <br />
          <span className="text-gray-400">Videography</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10">
          Professional video production at{" "}
          <Link href="/prices" className="underline underline-offset-4 hover:text-white transition-colors">
            unbeatable prices
          </Link>
          . Exceeding client expectations, every time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/prices"
            className="px-8 py-3 bg-white text-gray-950 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            View Prices
          </Link>
          <a
            href="#contact"
            className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:border-white transition-colors"
          >
            Get in Touch
          </a>
          <Link
            href="/ventures"
            className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:border-white transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">
            Trusted by
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {clients.map((client) => (
              <span key={client} className="text-gray-400 font-medium">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">
            What clients say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-500">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s chat about your project
          </h2>
          <p className="text-gray-500 mb-10">
            Fill in the form below and I&apos;ll get back to you within one business day.
          </p>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src={siteConfig.googleFormEmbed}
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact form"
            >
              Loading…
            </iframe>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Prefer to email?{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
