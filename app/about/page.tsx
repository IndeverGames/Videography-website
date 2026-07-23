import Image from "next/image";
import { credentialsBio, testimonials } from "@/lib/data";
import AboutCTA from "@/components/AboutCTA";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata = {
  title: "About — Christchurch Videographer Ben Childs",
  description: "Ben Childs is an award-winning Christchurch videographer and filmmaker with 10+ years' experience in affordable video, film, and interactive media.",
  alternates: { canonical: "https://www.benchilds.co.nz/about" },
};

const awards = [
  { title: "Outstanding Student Award", body: "The New Zealand Film and Television School — selected director for the graduation short film." },
  { title: "Best Foreign Film", body: "IndieFest USA — Birdsong (2013), the first NZFTVS film to receive international recognition." },
  { title: "Special Jury Award Nomination", body: "Show Me Shorts — Space Trash Men (2015), with pay-per-view deals including TVNZ on demand." },
  { title: "Christchurch Runner-up", body: "48 Hours Film Competition — Supernova (2012)." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-6 bg-gray-950 text-white text-center overflow-hidden">
        <Image
          src="/images/hero-2.jpg"
          alt="Ben Childs"
          fill
          className="object-cover object-bottom opacity-30"
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Ben Childs · Christchurch, NZ</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">About Me</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Award-winning filmmaker, experienced videographer, and creative professional based in Christchurch, New Zealand.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            {credentialsBio.split("\n\n").map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">What clients say</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <AboutCTA />

      {/* Trusted by */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">Trusted by</p>
          <Image
            src="/images/client-logos.png"
            alt="Clients including Storypark, Fire and Emergency NZ, Beagle Innovations"
            width={700}
            height={120}
            className="mx-auto opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-default"
          />
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Awards & recognition</h2>
          <div className="flex flex-col gap-6">
            {awards.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg mb-2">{a.title}</h3>
                <p className="text-gray-600 leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
