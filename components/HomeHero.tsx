"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeHero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains("navigating")) {
      const handler = () => setReady(true);
      window.addEventListener("navigation-complete", handler, { once: true });
      return () => window.removeEventListener("navigation-complete", handler);
    } else {
      setReady(true);
    }
  }, []);

  const anim = ready ? "animate-fade-up" : "";

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pb-24 px-6 text-white overflow-hidden">
      <Image
        src="/images/hero-1.jpg"
        alt="Ben Childs on set"
        fill
        className="object-cover object-top"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent" />
      <div className="relative z-10 text-center mx-auto w-full max-w-3xl">
        <p className={`${anim} delay-100 text-xs uppercase tracking-widest text-gray-300 mb-4`} style={{ opacity: ready ? undefined : 0 }}>
          Ben Childs · Christchurch, New Zealand
        </p>
        <h1 className={`${anim} delay-250 text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6`} style={{ opacity: ready ? undefined : 0 }}>
          Christchurch Videography
        </h1>
        <p className={`${anim} delay-400 text-xl text-gray-200 max-w-xl mx-auto mb-10 leading-relaxed`} style={{ opacity: ready ? undefined : 0 }}>
          Professional, engaging videos at{" "}
          <Link href="/videography" className="underline underline-offset-4 hover:text-white transition-colors">
            unbeatable prices
          </Link>
          . Simple, efficient, and enjoyable from start to finish.
        </p>
        <div className={`${anim} delay-550 flex flex-col sm:flex-row gap-4 justify-center`} style={{ opacity: ready ? undefined : 0 }}>
          <Link
            href="/videography"
            className="px-8 py-3 bg-white text-gray-950 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            View Prices
          </Link>
          <a
            href="#contact"
            className="px-8 py-3 border border-white/40 text-white font-semibold rounded-full hover:border-white hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className={`${anim} delay-700 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40`} style={{ opacity: ready ? undefined : 0 }}>
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-white/60" style={{ height: "40%", animation: "scrollDrop 1.6s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
