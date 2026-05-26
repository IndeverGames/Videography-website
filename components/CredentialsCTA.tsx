"use client";

import Link from "next/link";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function CredentialsCTA() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to work together?</h2>
      <p className="text-gray-500 mb-8 max-w-md mx-auto">Get in touch to discuss your project — I&apos;d love to help.</p>

      {!open ? (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/videography"
            className="px-8 py-3 bg-gray-950 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
            View Prices
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="px-8 py-3 border border-gray-300 text-gray-900 font-semibold rounded-full hover:border-gray-900 transition-colors">
            Get in Touch
          </button>
        </div>
      ) : (
        <div className="max-w-xl mx-auto text-left">
          <ContactForm />
        </div>
      )}
    </section>
  );
}
