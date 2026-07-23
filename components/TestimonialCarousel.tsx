"use client";

import { useEffect, useRef, useState } from "react";

type Testimonial = { quote: string; author: string; rating?: number; googleReviewUrl?: string };

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`w-4 h-4 ${i < rating ? "fill-amber-400" : "fill-gray-200"}`}>
          <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L10 14.7l-5.3 2.9 1.1-5.9-4.3-4.1 5.9-.7L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t, className }: { t: Testimonial; className: string }) {
  if (t.googleReviewUrl) {
    return (
      <a href={t.googleReviewUrl} target="_blank" rel="noopener noreferrer" className={`${className} hover:border-gray-300`}>
        <div className="flex-1 min-h-0 flex flex-col">
          {t.rating && <Stars rating={t.rating} />}
          <p className="visible-scrollbar text-gray-700 text-lg leading-relaxed overflow-y-auto pr-2 flex-1 min-h-0">&ldquo;{t.quote}&rdquo;</p>
        </div>
        <div className="shrink-0 pt-4">
          <p className="text-sm font-semibold text-gray-500">— {t.author}</p>
          <p className="text-xs text-gray-400 mt-1 underline underline-offset-2">From Google Review</p>
        </div>
      </a>
    );
  }
  return (
    <div className={className}>
      <p className="visible-scrollbar text-gray-700 text-lg leading-relaxed overflow-y-auto pr-2 flex-1 min-h-0">&ldquo;{t.quote}&rdquo;</p>
      <p className="text-sm font-semibold text-gray-500 shrink-0 pt-4">— {t.author}</p>
    </div>
  );
}

const CARD_BODY_CLASS = "h-[320px] sm:h-[460px] flex flex-col justify-between bg-white rounded-2xl p-8 shadow-sm border border-gray-100";

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  // Desktop: horizontal scroll carousel with peek
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
  }, [testimonials]);

  const scrollByPage = (direction: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: direction * scrollRef.current.clientWidth * 0.8, behavior: "smooth" });
  };

  // Mobile: deterministic index-based slider (no scroll-snap involved)
  const [activeIndex, setActiveIndex] = useState(0);
  const atStart = activeIndex === 0;
  const atEnd = activeIndex === testimonials.length - 1;

  return (
    <div className="relative">
      {/* Mobile */}
      <div className="sm:hidden">
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <Card t={t} className={CARD_BODY_CLASS} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => setActiveIndex(i => Math.max(i - 1, 0))}
            disabled={atStart}
            aria-label="Previous testimonial"
            className="px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold transition-opacity disabled:opacity-30"
          >
            ‹ Previous
          </button>
          <span className="text-xs text-gray-400 tabular-nums">{activeIndex + 1} / {testimonials.length}</span>
          <button
            onClick={() => setActiveIndex(i => Math.min(i + 1, testimonials.length - 1))}
            disabled={atEnd}
            aria-label="Next testimonial"
            className="px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold transition-opacity disabled:opacity-30"
          >
            Next ›
          </button>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:block relative">
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

        <div ref={scrollRef} className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 pb-2 -mx-1">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-shrink-0 snap-start w-[540px]">
              <Card t={t} className={`${CARD_BODY_CLASS} transition-transform duration-200 md:hover:scale-[1.02] md:hover:shadow-md`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
