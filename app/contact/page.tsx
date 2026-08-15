import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/data";

export const metadata = {
  title: "Contact — Ben Childs Christchurch Videographer",
  description: "Get in touch with Ben Childs, Christchurch's most affordable and professional videographer. Enquire about video production, pricing, and availability.",
  alternates: { canonical: "https://www.benchilds.co.nz/contact" },
};

export default function Contact() {
  return (
    <>
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Get in Touch</h1>
        <p className="text-gray-300 max-w-xl mx-auto text-lg">
          Let&apos;s chat about your project.
        </p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto">
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
