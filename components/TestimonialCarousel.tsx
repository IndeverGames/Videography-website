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

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
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

  return (
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

      <div ref={scrollRef} className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 pb-2 -mx-1">
        {testimonials.map((t, i) => {
          const cardClass = "flex-shrink-0 snap-start w-[360px] h-[460px] flex flex-col justify-between bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-transform duration-200 md:hover:scale-[1.02] md:hover:shadow-md";

          if (t.googleReviewUrl) {
            return (
              <a
                key={i}
                href={t.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardClass} hover:border-gray-300`}
              >
                <div>
                  {t.rating && <Stars rating={t.rating} />}
                  <p className="text-gray-700 text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500">— {t.author}</p>
                  <p className="text-xs text-gray-400 mt-1 underline underline-offset-2">From Google Review</p>
                </div>
              </a>
            );
          }

          return (
            <div key={i} className={cardClass}>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 overflow-y-auto">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm font-semibold text-gray-500">— {t.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
