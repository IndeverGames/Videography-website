"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ displayEmail }: { displayEmail?: string } = {}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const emailValid = emailRegex.test(email);
  const canSubmit = name.trim() && email.trim() && message.trim() && emailValid;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setEmailTouched(false);
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gray-200 p-12 text-center">
        <p className="text-2xl font-semibold mb-2">Message sent!</p>
        <p className="text-gray-500">Thanks for getting in touch. I&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 shadow-sm p-8 text-left space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          placeholder="you@example.com"
          className={`w-full rounded-xl border px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition ${
            emailTouched && !emailValid
              ? "border-red-400 focus:ring-red-400"
              : "border-gray-200 focus:ring-gray-900"
          }`}
        />
        {emailTouched && !emailValid && (
          <p className="mt-1.5 text-sm text-red-600">Please enter a valid email address.</p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project..."
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 transition resize-none"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or email me directly.</p>
      )}
      <button
        type="submit"
        disabled={!canSubmit || status === "loading"}
        className="w-full py-3 px-6 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : "Send enquiry"}
      </button>
      <p className="text-center text-sm text-gray-400">
        Or email me directly at{" "}
        <a href={`mailto:${displayEmail ?? siteConfig.email}`} className="text-gray-600 hover:text-gray-900 transition-colors">
          {displayEmail ?? siteConfig.email}
        </a>
      </p>
    </form>
  );
}
