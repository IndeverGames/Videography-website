import Image from "next/image";
import { siteConfig } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "DVD burning/duplication in Christchurch, New Zealand",
  description: "There aren't many places in Christchurch that still offer this service. If you have an original DVD and want copies, or a video file that you would liked burned to a disc to play on a DVD player, then I'd love to help.",
  alternates: { canonical: "https://www.benchilds.co.nz/dvd-services" },
};

export default function DvdServices() {
  return (
    <>
      {/* Header */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          DVD burning/duplication
          <br />
          in Christchurch, New Zealand
        </h1>
      </section>

      {/* Intro */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm">
            <Image src="/images/DVD+R.webp" alt="DVD-R disc" fill className="object-cover" />
          </div>
          <div>
            <p className="text-gray-700 text-lg leading-relaxed">
              There aren&apos;t many places in Christchurch that still offer this service. If you have an original DVD and want copies, or a video file that you would liked burned to a disc to play on a DVD player, then I&apos;d love to help. Please be aware that the maximum resolution for DVDs is 720x576 pixels (576p).
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
          <div className="rounded-2xl p-8 border border-gray-100 shadow-sm bg-white">
            <div className="grid grid-cols-2 gap-4 text-center pb-8 mb-8 border-b border-gray-100">
              <div>
                <p className="font-bold text-4xl tracking-tight">$100 <span className="text-lg font-semibold text-gray-500">+ GST</span></p>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mt-1">Per Project</p>
              </div>
              <div>
                <p className="font-bold text-4xl tracking-tight">+$10</p>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mt-1">Per Additional Copy</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Includes authoring a simple DVD home menu with a play button, and 2x DVD&apos;s burned on quality Verbatim discs with jewel cases. Does not include customised disc or case artwork.
            </p>
          </div>
        </div>
      </section>

      {/* Getting in touch */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Getting in touch</h2>
          <p className="text-gray-500 mb-8">
            Use the form below or email me at {siteConfig.email}
          </p>
          <ContactForm />
          <div className="mt-12 pt-10 border-t border-gray-100 flex flex-col gap-3 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gray-900 transition-colors">
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Phone</p>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-gray-900 transition-colors">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
