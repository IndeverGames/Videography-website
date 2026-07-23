"use client";

import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function ActingCTA() {
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
    <section className="py-16 px-6 bg-gray-50 text-center">
      <p className="text-lg text-gray-700 mb-6">
        I love acting and directing! So please get in touch to discuss your project with me, great or small.
      </p>
      <button
        onClick={() => setOpen(true)}
        className="inline-block px-8 py-3 bg-gray-950 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
      >
        Get in Touch
      </button>

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
