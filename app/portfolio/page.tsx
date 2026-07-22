import { portfolioVideos } from "@/lib/data";

export const metadata = {
  title: "Portfolio — Christchurch Videography Work",
  description: "A full portfolio of corporate, promotional, and testimonial video production by Ben Childs, Christchurch videographer.",
  alternates: { canonical: "https://www.benchilds.co.nz/portfolio" },
};

export default function Portfolio() {
  return (
    <>
      {/* Header */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Portfolio</h1>
        <p className="text-gray-300 max-w-lg mx-auto text-lg">
          Corporate, promotional, and testimonial video production for clients across Christchurch and around New Zealand.
        </p>
      </section>

      {/* Portfolio grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioVideos.map((video) => (
            <div key={video.embedUrl}>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-200 shadow-sm">
                <iframe
                  src={video.platform === "youtube" ? video.embedUrl.replace("www.youtube.com", "www.youtube-nocookie.com") : video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-gray-700 px-1">{video.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
