"use client";

import { useEffect, useState } from "react";

export default function TrailerButton({
  videoId,
  title,
  label = "Watch trailer",
  className,
}: {
  videoId: string;
  title: string;
  label?: string;
  className: string;
}) {
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
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close trailer"
              className="absolute -top-12 right-0 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              ✕
            </button>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
