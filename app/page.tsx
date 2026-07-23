import Link from "next/link";
import Image from "next/image";
import { testimonials } from "@/lib/data";
import ContactForm from "@/components/ContactForm";
import HomeHero from "@/components/HomeHero";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata = {
  title: "Ben Childs — Affordable Videographer in Christchurch, NZ",
  description: "Christchurch's best value videographer. Professional video production from $400 — filming, editing, and corporate video across Christchurch and Canterbury, NZ.",
  alternates: { canonical: "https://www.benchilds.co.nz" },
};

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Client logos */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">
            Trusted by
          </p>
          <Image
            src="/images/client-logos.png"
            alt="Clients including Storypark, Fire and Emergency NZ, Beagle Innovations"
            width={700}
            height={120}
            className="mx-auto opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-default"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">
            What clients say
          </h2>
          <TestimonialCarousel testimonials={testimonials} />
          <div className="text-center mt-10">
            <Link href="/about" className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-4">
              Read more testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Let&apos;s chat about your project today
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
