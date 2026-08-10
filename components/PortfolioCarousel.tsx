"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { type Video, thumbnailFor, embedSrc, subtitleFor } from "@/lib/videoEmbed";
import VideoModal from "./VideoModal";

export default function PortfolioCarousel({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive(i => (i !== null ? (i - 1 + videos.length) % videos.length : null)), [videos.length]);
  const next = useCallback(() => setActive(i => (i !== null ? (i + 1) % videos.length : null)), [videos.length]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const updateScrollState = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [videos]);

  const scrollByPage = (direction: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: direction * scrollRef.current.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <>
      <div className="relative">
        {canScrollLeft && (
          <button
            onClick={() => scrollByPage(-1)}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50"
          >
            ‹
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scrollByPage(1)}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50"
          >
            ›
          </button>
        )}

        <div ref={scrollRef} className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 pb-4 -mx-1">
        {videos.map((video, i) => (
          <button
            key={video.embedUrl}
            onClick={() => setActive(i)}
            className="group flex-shrink-0 w-64 snap-start text-left"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-200 shadow-sm">
              {thumbnailFor(video) && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={thumbnailFor(video)!}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-gray-900 ml-1" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm font-semibold text-gray-700">{video.title}</p>
          </button>
        ))}
        </div>
      </div>

      {active !== null && (
        <VideoModal
          src={embedSrc(videos[active])}
          title={videos[active].title}
          subtitle={subtitleFor(videos[active])}
          clientLogo={videos[active].clientLogo}
          clientLogoLight={videos[active].clientLogoLight}
          type={videos[active].platform === "file" ? "file" : "iframe"}
          onClose={close}
          onPrev={prev}
          onNext={next}
          counter={`${active + 1} / ${videos.length}`}
        />
      )}
    </>
  );
}
