export type Video = {
  title: string;
  embedUrl: string;
  platform: "youtube" | "vimeo" | "file";
  poster?: string;
  client?: string;
  clientLogo?: string;
  clientLogoLight?: boolean;
  services?: string;
};

export function subtitleFor(video: Video): string | null {
  if (video.services && video.client) return `${video.services} for ${video.client}`;
  return video.services ?? video.client ?? null;
}

export function thumbnailFor(video: Video): string | null {
  if (video.poster) return video.poster;
  if (video.platform === "youtube") {
    const id = video.embedUrl.match(/embed\/([a-zA-Z0-9_-]+)/)?.[1];
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
  }
  // Vimeo and direct file uploads have no reliable thumbnail URL pattern —
  // set an explicit `poster` on the video entry instead.
  return null;
}

export function embedSrc(video: Video): string {
  if (video.platform === "youtube") {
    return video.embedUrl.replace("www.youtube.com", "www.youtube-nocookie.com");
  }
  return video.embedUrl;
}
