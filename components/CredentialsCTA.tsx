"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function CredentialsCTA() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to work together?</h2>
      <p className="text-gray-500 mb-8 max-w-md mx-auto">Get in touch to discuss your project — I&apos;d love to help.</p>

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

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-xl bg-white rounded-2xl p-8 text-left max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
            >
              ✕
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </section>
  );
}
