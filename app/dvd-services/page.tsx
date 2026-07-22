import Image from "next/image";
import { siteConfig } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "DVD Authoring/Duplication in Christchurch, NZ",
  description: "I can help you with authoring or duplicating Region 4 DVDs in Christchurch, New Zealand. Per project $100 + GST, includes 2x copies. Additional copies are $10 each.",
  alternates: { canonical: "https://www.benchilds.co.nz/dvd-services" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "DVD Authoring and Duplication",
  name: "DVD Authoring/Duplication",
  description: "I can help you with authoring or duplicating Region 4 DVDs in Christchurch, New Zealand.",
  provider: {
    "@type": "LocalBusiness",
    name: "Ben Childs Videography",
    url: "https://www.benchilds.co.nz",
  },
  areaServed: {
    "@type": "City",
    name: "Christchurch",
  },
  offers: {
    "@type": "Offer",
    price: "100",
    priceCurrency: "NZD",
    description: "Per project. Includes 2x DVD copies on Verbatim discs with jewel cases. Additional copies are $10 each.",
  },
};

export default function DvdServices() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Header */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          DVD Authoring/Duplication
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto text-lg">
          Affordable DVD services in Christchurch, New Zealand.
        </p>
      </section>

      {/* Intro */}
      <section className="pt-20 pb-10 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Not many videographers in Christchurch still offer this service — I do. I can help you with authoring or duplicating Region 4 DVDs. Whether you have an original DVD that needs copying, or video files you&apos;d like burned to disc, I can help.
          </p>
          <p className="text-gray-500">
            Note: the maximum resolution for DVDs is 720x576 pixels (576p).
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="pb-20 px-6">
        <div className="max-w-xs mx-auto">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm">
            <Image src="/images/DVD+R.webp" alt="DVD-R disc" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Pricing</h2>
          <div className="mt-10 rounded-2xl p-8 border border-gray-100 shadow-sm bg-white">
            <div className="flex items-baseline justify-between gap-4 mb-4">
              <p className="font-semibold uppercase tracking-wide text-sm">Per Project</p>
              <p className="font-bold text-2xl whitespace-nowrap">$100 + GST</p>
            </div>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>• Simple DVD menu with play button</li>
              <li>• 2x DVDs on Verbatim discs with jewel cases</li>
              <li>• Additional copies are $10 each</li>
            </ul>
            <p className="mt-6 text-sm text-gray-500 italic">
              Customised disc or case artwork is not included.
            </p>
          </div>
        </div>
      </section>

      {/* Getting in touch */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Getting in touch</h2>
          <p className="text-gray-500 mb-8">
            Provide me with your video files or original DVD, and I&apos;ll take care of the rest.
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
