import Image from "next/image";
import Link from "next/link";
import ScreenshotLightbox from "@/components/ScreenshotLightbox";
import TrailerButton from "@/components/TrailerButton";

const TRAILER_VIDEO_ID = "TTH50hzZIWU";

export const metadata = {
  title: "Davy Jones' Deckhand — Ben Childs",
  description: "Parry and counter-attack your way into legend in this swashbuckling roguelike deckbuilder. Free demo available on Steam.",
  alternates: { canonical: "https://www.benchilds.co.nz/interactive/davy-jones-deckhand" },
};

const STEAM_DEMO_URL = "https://store.steampowered.com/app/4538750/Davy_Jones_Deckhand_Demo/?utm_source=benchilds.co.nz&utm_medium=website&utm_campaign=davy-jones-deckhand";
const STEAM_URL = "https://store.steampowered.com/app/3544900/Davy_Jones_Deckhand/?utm_source=benchilds.co.nz&utm_medium=website&utm_campaign=davy-jones-deckhand";
const CDN = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3544900";

const features = [
  {
    heading: "Counter-attack carnage: Perfect parries are your key to victory!",
    body: "Getting hit right is better than not getting hit at all! Fill your parry meter to perfectly match incoming damage. When you hit the bell to end your turn, enemy attacks will be countered to devastating effect.",
    poster: `${CDN}/extras/4c42e657f800bdc6aa88333ddf37020f.avif`,
    webm: `${CDN}/extras/b63e05d7ca66ce6c8151714d4617d585.webm`,
    mp4: null,
  },
  {
    heading: "Master powerful new stances",
    body: "Play stance cards onto the primary and secondary slots. Position yourself to deflect attacks and strike down your foes. Discover new stance cards with powerful effects and special counter attacks.",
    poster: `${CDN}/extras/013b12a3725a547bd4ed32c191504ce3.avif`,
    webm: `${CDN}/extras/c5f5b9893ee768681308ef5bb4735ab6.webm`,
    mp4: `${CDN}/extras/c5f5b9893ee768681308ef5bb4735ab6.mp4`,
  },
  {
    heading: "Navigate the High Seas",
    body: "Chart your own route using your telescope. Select your next encounter based on the rewards you want: gold, special cards, or urgent healing? Voyages are procedurally generated — to reach your destination you'll have to survive the entire voyage, otherwise you'll find yourself back in The Locker.",
    poster: `${CDN}/extras/ebb3e40deb4e232bf44ed938de1665a1.poster.avif`,
    webm: `${CDN}/extras/ebb3e40deb4e232bf44ed938de1665a1.webm`,
    mp4: `${CDN}/extras/ebb3e40deb4e232bf44ed938de1665a1.mp4`,
  },
  {
    heading: "Strategically fill your cargo before setting sail",
    body: "As you navigate the world, you'll build up a permanent inventory of treasures and trinkets, but you can't bring them all with you on voyages. Before setting sail, fill your limited cargo slots with artefacts, consumables or coins. Experiment with different starter item combos to give your next voyage a boost!",
    poster: `${CDN}/extras/26e83de38e21cc5237c91927b148e7f0.poster.avif`,
    webm: `${CDN}/extras/26e83de38e21cc5237c91927b148e7f0.webm`,
    mp4: `${CDN}/extras/26e83de38e21cc5237c91927b148e7f0.mp4`,
  },
  {
    heading: "Get loot or die trying!",
    body: "Discover hundreds of cards to build your deck, and plunder powerful artefacts. Upon death you'll have to bargain your way back from Davy's Locker and start over!",
    poster: `${CDN}/extras/d2c0c94f97c73fa26bb43299ed783e3a.poster.avif`,
    webm: `${CDN}/extras/d2c0c94f97c73fa26bb43299ed783e3a.webm`,
    mp4: `${CDN}/extras/d2c0c94f97c73fa26bb43299ed783e3a.mp4`,
  },
];

const bullets = [
  "Fresh spin on card combat — Counter-attacks reward risky last minute parries over tanky defense, making this game like nothing you've played before!",
  "Game changing loot — Plunder powerful artefacts that synergise with your custom deck to become an unstoppable terror of the seas.",
  "Discover new weapons — Each weapon comes with its own starter deck and unique stances, completely changing your playstyle.",
  "Endlessly replayable — From the biome you're travelling through to the deck you build to the weapon you choose, you'll never experience the same voyage twice.",
  "Pirates ✅",
];

const screenshots = [
  "1d6e5d30350780fd91a527afb308290b4d8b0e43",
  "a4e033f7f3690abc7697b21128727a5c524f842c",
  "25e5e70de348b7b50e2a132af35dedd35f875c43",
  "802011aaa4d2590140676d32858736a983b1dc83",
  "21c42ee75005356b0b5f17b5c3028405ebc88865",
  "5c314a258e77c9ea04100ff2b5c3f57b1088c6d8",
].map(hash => `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3544900/${hash}/ss_${hash}.1920x1080.jpg?t=1778387679`);

export default function DavyJonesDeckhand() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Interactive · Cass Bay Games</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Davy Jones&apos; Deckhand</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Parry and counter-attack your way into legend in this swashbuckling roguelike deckbuilder.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <TrailerButton
            videoId={TRAILER_VIDEO_ID}
            title="Davy Jones' Deckhand — Trailer"
            className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:border-white transition-colors"
          />
          <a href={STEAM_DEMO_URL} target="_blank" rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-gray-950 font-semibold rounded-full hover:bg-gray-100 transition-colors">
            Play demo on Steam
          </a>
          <a href={STEAM_URL} target="_blank" rel="noopener noreferrer"
            className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:border-white transition-colors">
            Wishlist on Steam
          </a>
        </div>
      </section>

      {/* Key art */}
      <section className="bg-gray-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "1232/706" }}>
            <Image src="/images/interactive-djd.png" alt="Davy Jones' Deckhand key art" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Feature sections */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-24">
          {features.map((f, i) => (
            <div key={f.heading} className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={f.poster}
                  className="w-full rounded-2xl"
                >
                  {f.mp4 && <source src={f.mp4} type="video/mp4" />}
                  <source src={f.webm} type="video/webm" />
                </video>
              </div>
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <h2 className="text-2xl font-bold mb-4">{f.heading}</h2>
                <p className="text-gray-600 leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bullets */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Your next favourite roguelike deckbuilder</h2>
          <ul className="space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-gray-700 leading-relaxed">
                <span className="mt-1 text-gray-500 shrink-0">→</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
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
        <h2 className="text-2xl font-bold mb-4">Free demo available now</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Try the demo on Steam — Windows &amp; Mac. Wishlist to follow development.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={STEAM_DEMO_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-gray-950 font-semibold rounded-full hover:bg-gray-100 transition-colors">
            Play demo on Steam
          </a>
          <a href={STEAM_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:border-white transition-colors">
            Wishlist on Steam
          </a>
        </div>
      </section>

      <div className="py-6 px-6 text-center">
        <Link href="/interactive" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          ← Back to Interactive
        </Link>
      </div>
    </>
  );
}
