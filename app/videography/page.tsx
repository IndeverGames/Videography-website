import Link from "next/link";
import Image from "next/image";
import { services, equipment, softwareNote, valueProps, testimonials, soloFilmingQuote, pricingNote, portfolioVideos } from "@/lib/data";
import AnimateIn from "@/components/AnimateIn";
import ContactForm from "@/components/ContactForm";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata = {
  title: "Affordable Videography Prices in Christchurch, NZ",
  description: "Transparent, affordable videography pricing in Christchurch, NZ. Filming from $480, editing from $450. Best value video production in Chch — no hidden costs.",
  alternates: { canonical: "https://www.benchilds.co.nz/videography" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a videographer cost in Christchurch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ben Childs offers some of the best value videography in Christchurch. A mini shoot (up to 2 hours) starts at $480, a half day at $650, and a full day at $1000. Editing starts from $100 for raw footage delivery.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best value video production in Chch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ben Childs Videography offers transparent, affordable pricing with no hidden costs. With 10+ years of experience and award-winning work, you get professional quality at unbeatable prices in Christchurch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer affordable corporate video in Christchurch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ben Childs provides affordable corporate video production across Christchurch and Canterbury. Services include filming, editing, testimonials, product videos, and more — all at transparent, fixed prices.",
      },
    },
  ],
};

export default function Prices() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Affordable Videography in CHCH
        </h1>
      </section>

      {/* Why choose */}
      <section className="pt-10 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Why choose me for your video?</h2>
          <ul className="flex flex-col gap-4">
            {valueProps.map((vp, i) => (
              <AnimateIn key={i} delay={i * 120}>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-green-500">✅</span>
                  <span dangerouslySetInnerHTML={{ __html: vp.replace("Best", "<strong>Best</strong>") }} />
                </li>
              </AnimateIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Pricing</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-14">I provide transparent, affordable pricing for when you need quality video without the expense and drama of a full production crew.</p>
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
                      <p className="text-sm text-gray-500">
                        {item.description}
                        {service.category === "DVD Authoring" && (
                          <>
                            {" "}
                            <Link href="/dvd-services" className="underline underline-offset-2 hover:text-gray-900 transition-colors">
                              Learn more.
                            </Link>
                          </>
                        )}
                      </p>
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
            <Link href="/about" className="underline underline-offset-4 hover:text-gray-900 transition-colors">
              Read about my background.
            </Link>
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Portfolio highlights */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">Examples of work by Ben Childs Film & Video</h2>
          <PortfolioCarousel videos={portfolioVideos} />
          <div className="text-center mt-4">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-700 transition-colors"
            >
              See portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">Testimonials</h2>
          <TestimonialCarousel testimonials={testimonials} />
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
                    className={`object-cover ${item.name.includes("Ronin") ? "object-top" : ""}`}
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
    </>
  );
}
