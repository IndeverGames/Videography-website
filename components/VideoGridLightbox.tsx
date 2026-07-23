"use client";

import { useCallback, useEffect, useState } from "react";
import { type Video, thumbnailFor, embedSrc } from "@/lib/videoEmbed";

export default function VideoGridLightbox({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive(i => (i !== null ? (i - 1 + videos.length) % videos.length : null)), [videos.length]);
  const next = useCallback(() => setActive(i => (i !== null ? (i + 1) % videos.length : null)), [videos.length]);

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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video, i) => (
          <button
            key={video.embedUrl}
            onClick={() => setActive(i)}
            className="group text-left"
            aria-label={`Play ${video.title}`}
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-200 shadow-sm">
              {thumbnailFor(video) && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={thumbnailFor(video)!}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-gray-900 ml-1" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm font-semibold text-gray-700 px-1">{video.title}</p>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="relative"
            // Target 75% of viewport width, but never let the 16:9 frame (plus
            // the caption/buttons below it) grow taller than the viewport --
            // otherwise the top of the video gets pushed off-screen.
            style={{ width: "min(75vw, calc((90vh - 110px) * 16 / 9))" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Custom dark frame */}
            <div className="relative bg-gray-950 rounded-2xl p-3 shadow-2xl">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
                <iframe
                  src={embedSrc(videos[active])}
                  title={videos[active].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Close */}
              <button
                onClick={close}
                aria-label="Close"
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-gray-900 shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>
            </div>

            <p className="mt-4 text-white/80 text-sm text-center">
              {videos[active].title} — {active + 1} / {videos.length}
            </p>

            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                onClick={e => { e.stopPropagation(); prev(); }}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                aria-label="Previous video"
              >
                ‹ Previous
              </button>
              <button
                onClick={e => { e.stopPropagation(); next(); }}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                aria-label="Next video"
              >
                Next ›
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
