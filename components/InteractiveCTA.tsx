"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function InteractiveCTA() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <p className="text-lg text-gray-700 mb-6">
        I&apos;d love to chat with you about how I can bring your interactive projects and apps to life with the Unity game engine.
      </p>
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="inline-block px-8 py-3 bg-gray-950 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
        >
          Get in Touch
        </button>
      ) : (
        <div className="max-w-xl mx-auto text-left">
          <ContactForm />
        </div>
      )}
    </section>
  );
}
