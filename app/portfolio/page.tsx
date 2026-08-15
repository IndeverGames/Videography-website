import { portfolioVideos } from "@/lib/data";
import VideoGridLightbox from "@/components/VideoGridLightbox";

export const metadata = {
  title: "Portfolio — Affordable Christchurch Videography Work",
  description: "Browse Ben Childs' portfolio of affordable corporate, promotional, and testimonial video production for clients across Christchurch and New Zealand.",
  alternates: { canonical: "https://www.benchilds.co.nz/portfolio" },
};

export default function Portfolio() {
  return (
    <>
      {/* Header */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Portfolio</h1>
        <p className="text-gray-300 max-w-lg mx-auto text-lg">
          Professional videographer specialising in affordable corporate, promotional, and testimonial production for businesses across Christchurch and around New Zealand.
        </p>
      </section>

      {/* Portfolio grid */}
      <section className="py-20 px-6">
        <VideoGridLightbox videos={portfolioVideos} />
      </section>
    </>
  );
}
