"use client";

import { useState } from "react";
import VideoModal from "./VideoModal";

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

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {open && (
        <VideoModal
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
