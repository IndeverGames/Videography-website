import Image from "next/image";
import Link from "next/link";
import ScreenshotLightbox from "@/components/ScreenshotLightbox";

export const metadata = {
  title: "Super Mayor — Ben Childs",
  description: "A 100% free, feel-good 2D platformer where you play as a councillor to a rural farming district in New Zealand. Free on Steam.",
  alternates: { canonical: "https://www.benchilds.co.nz/interactive/super-mayor" },
};

const STEAM_URL = "https://store.steampowered.com/app/2534930/Super_Mayor/?utm_source=benchilds.co.nz&utm_medium=website&utm_campaign=super-mayor";
const CDN = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2534930";

const features = [
  {
    heading: "Customise your councillor!",
    poster: `${CDN}/extras/a10d8c74775a9a7d34dfe99ce1f8f800.poster.avif`,
    webm: `${CDN}/extras/a10d8c74775a9a7d34dfe99ce1f8f800.webm`,
    mp4: `${CDN}/extras/a10d8c74775a9a7d34dfe99ce1f8f800.mp4`,
  },
  {
    heading: "Meet the locals.",
    poster: `${CDN}/extras/0a3379ec241e95937e9693ec99afb99f.poster.avif`,
    webm: `${CDN}/extras/0a3379ec241e95937e9693ec99afb99f.webm`,
    mp4: `${CDN}/extras/0a3379ec241e95937e9693ec99afb99f.mp4`,
  },
  {
    heading: "Navigate perilous paths.",
    poster: `${CDN}/extras/ad172bc1225190423bf8f08041ae7131.poster.avif`,
    webm: `${CDN}/extras/ad172bc1225190423bf8f08041ae7131.webm`,
    mp4: `${CDN}/extras/ad172bc1225190423bf8f08041ae7131.mp4`,
  },
  {
    heading: "Spend council funds.",
    poster: `${CDN}/extras/a96fd71eccf0f7a9f2554acfc3852ef5.poster.avif`,
    webm: `${CDN}/extras/a96fd71eccf0f7e9f2554acfc3852ef5.webm`,
    mp4: `${CDN}/extras/a96fd71eccf0f7e9f2554acfc3852ef5.mp4`,
  },
  {
    heading: "Deal with pests with your special councillor shoes...",
    poster: `${CDN}/extras/222e392ef230ec5a03b1c8ecaaa26cc0.poster.avif`,
    webm: `${CDN}/extras/222e392ef230ec5a03b1c8ecaaa26cc0.webm`,
    mp4: `${CDN}/extras/222e392ef230ec5a03b1c8ecaaa26cc0.mp4`,
  },
  {
    heading: "Track quests and other progress with your smartphone.",
    poster: `${CDN}/extras/77c5614444b9d285bc9d12c2539e933b.poster.avif`,
    webm: `${CDN}/extras/77c5614444b9d285bc9d12c2539e933b.webm`,
    mp4: `${CDN}/extras/77c5614444b9d285bc9d12c2539e933b.mp4`,
  },
];

const screenshots = [
  "ss_f1d18cd9cca2b21ae8889d7e07cde3b979fc9058",
  "ss_d3b047b6c8feb05a4f5daa64814ac70792971b73",
  "ss_39cb33af25fc009b3f6694ebd9323d70f3396042",
  "ss_3c31ec0552caa83d1524465e60c77ec6e5b06fff",
  "ss_fdd51a0b6aff479abe8d513bfe8feee77b293aea",
  "ss_e3536f6678dd3529fc44d19e300dde620bdd8b9a",
].map(hash => `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2534930/${hash}.1920x1080.jpg?t=1713907511`);

export default function SuperMayor() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Interactive · Indever Games</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Super Mayor</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          A 100% free, feel-good 2D platformer where you play as a councillor to a rural farming district in New Zealand. Solve problems, meet the public, and become MAYOR in this hilarious, story-rich adventure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a href={STEAM_URL} target="_blank" rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-gray-950 font-semibold rounded-full hover:bg-gray-100 transition-colors">
            Play free on Steam
          </a>
        </div>
      </section>

      {/* Key art */}
      <section className="bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 pb-8">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/images/interactive-super-mayor.gif"
              alt="Super Mayor gameplay"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Feature sections */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-24">
          {features.map((f, i) => (
            <div key={f.heading} className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <video autoPlay muted loop playsInline poster={f.poster} className="w-full rounded-2xl">
                  <source src={f.mp4} type="video/mp4" />
                  <source src={f.webm} type="video/webm" />
                </video>
              </div>
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <h2 className="text-2xl font-bold">{f.heading}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become Super Mayor callout */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-4">Become SUPER MAYOR!</h2>
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed mb-8">
          Win the trust of your community, solve the district&apos;s problems, and climb the ranks from humble councillor to the top job. Free on Windows &amp; Mac.
        </p>
        <a href={STEAM_URL} target="_blank" rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gray-950 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors">
          Play now
        </a>
      </section>

      {/* Screenshots */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Screenshots</h2>
          <ScreenshotLightbox screenshots={screenshots} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gray-950 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">100% free on Windows &amp; Mac</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Download and play the full game for free on Steam.</p>
        <a href={STEAM_URL} target="_blank" rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-white text-gray-950 font-semibold rounded-full hover:bg-gray-100 transition-colors">
          Play free on Steam
        </a>
      </section>

      <div className="py-6 px-6 text-center">
        <Link href="/interactive" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          ← Back to Interactive
        </Link>
      </div>
    </>
  );
}
