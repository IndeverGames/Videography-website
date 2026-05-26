"use client";

import { useState, useEffect, useCallback } from "react";

export default function ScreenshotLightbox({ screenshots }: { screenshots: string[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive(i => i !== null ? (i - 1 + screenshots.length) % screenshots.length : null), [screenshots.length]);
  const next = useCallback(() => setActive(i => i !== null ? (i + 1) % screenshots.length : null), [screenshots.length]);

  useEffect(() => {
    if (active === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {screenshots.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative rounded-xl overflow-hidden bg-gray-100 cursor-zoom-in group"
            style={{ aspectRatio: "16/9" }}
            aria-label={`View screenshot ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          {/* Image */}
          <div className="relative max-w-6xl w-full mx-4" onClick={e => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={screenshots[active]}
              alt={`Screenshot ${active + 1}`}
              className="w-full rounded-xl shadow-2xl"
            />

            {/* Counter */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums">
              {active + 1} / {screenshots.length}
            </p>
          </div>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous screenshot"
          >
            ←
          </button>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next screenshot"
          >
            →
          </button>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
