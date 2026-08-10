"use client";

import { useCallback, useState } from "react";
import { type Video, thumbnailFor, embedSrc, subtitleFor } from "@/lib/videoEmbed";
import VideoModal from "./VideoModal";

export default function VideoGridLightbox({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive(i => (i !== null ? (i - 1 + videos.length) % videos.length : null)), [videos.length]);
  const next = useCallback(() => setActive(i => (i !== null ? (i + 1) % videos.length : null)), [videos.length]);

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
            <div className="flex items-center gap-3 mt-3 px-1">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-700 truncate">{video.title}</p>
                {subtitleFor(video) && (
                  <p className="text-xs text-gray-500 truncate mt-0.5">{subtitleFor(video)}</p>
                )}
              </div>
              {video.clientLogo && (
                video.clientLogoLight ? (
                  <span className="self-stretch bg-gray-900 rounded-md px-2 flex-shrink-0 flex items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={video.clientLogo} alt="" className="h-full max-h-8 py-1 w-auto object-contain" />
                  </span>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={video.clientLogo}
                    alt=""
                    className="self-stretch h-full max-h-10 w-auto object-contain flex-shrink-0"
                  />
                )
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
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
