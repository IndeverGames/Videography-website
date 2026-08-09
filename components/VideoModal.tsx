"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const SWIPE_THRESHOLD = 50;

export default function VideoModal({
  src,
  title,
  onClose,
  onPrev,
  onNext,
  counter,
}: {
  src: string;
  title: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  counter?: string;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    if (dx > 0) onPrev?.();
    else onNext?.();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="relative w-full my-auto"
        style={{ width: "min(880px, 92vw, calc((92vh - 104px) * 16 / 9))" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gray-950 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10">
          {/* Branded header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <Image
              src="/images/logo-reversed.png"
              alt="Ben Childs"
              width={141}
              height={40}
              className="h-5 w-auto"
            />
            <button
              onClick={onClose}
              aria-label="Close video"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#5fa1c7] flex items-center justify-center text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Video */}
          <div className="relative w-full aspect-video bg-black">
            <iframe
              src={src}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between gap-4 px-4 py-3 border-t border-white/10">
            <p className="text-white/70 text-sm truncate">
              {title}
              {counter && <span className="text-white/40"> — {counter}</span>}
            </p>
            {onPrev && onNext && (
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={(e) => { e.stopPropagation(); onPrev(); }}
                  aria-label="Previous video"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onNext(); }}
                  aria-label="Next video"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
