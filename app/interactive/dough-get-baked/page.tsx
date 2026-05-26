import Link from "next/link";

export const metadata = {
  title: "Dough Get Baked — Ben Childs",
  description: "A whimsical puzzle adventure where you play as bread dough trying to find an oven. Built by Indever Games.",
  alternates: { canonical: "https://www.benchilds.co.nz/interactive/dough-get-baked" },
};

const features = [
  { title: "You are bread dough", description: "Warning: this demo is extremely high in carbohydrates. You're a lump of bread dough, fallen from grace into a world of baked goods." },
  { title: "Split & squish", description: "Use clever splitting and squishing mechanics to navigate obstacles and solve puzzles." },
  { title: "A world of baked goods", description: "Explore a whimsical world filled with breads, pastries, and all manner of baked creatures." },
  { title: "Find the oven", description: "Your life mission is simple: find an oven and get baked. Puzzle your way to redemption." },
];

export default function DoughGetBaked() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Interactive</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Dough Get Baked</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Warning: this demo is extremely high in carbohydrates. You&apos;re a lump of bread dough, fallen from grace into a world of baked goods. Split, squish and puzzle your way to redemption in this whimsical adventure.
        </p>
        <p className="mt-6 inline-block bg-yellow-400/20 text-yellow-300 text-sm font-medium px-4 py-2 rounded-full">
          No longer available on Google Play
        </p>
      </section>

      {/* Trailer */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Trailer</h2>
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <iframe
              src="https://www.youtube.com/embed/NXvR6BQUfm4"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Dough Get Baked trailer"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">What&apos;s in the game</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            Indever Games software does not collect any personal information from any of your use of our Apps. If we have any of your personal information we will not willingly sell or give it to anyone, except if lawfully subpoenaed to produce it and then only after offering you a reasonable chance to challenge such subpoena if allowed by law.
          </p>
        </div>
      </section>

      {/* Feedback */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Feedback</h2>
          <p className="text-gray-600 leading-relaxed mb-4">I would love to hear your feedback and suggestions.</p>
          <a
            href="mailto:indevergames@gmail.com"
            className="text-gray-900 font-medium underline underline-offset-4 hover:text-gray-600 transition-colors"
          >
            indevergames@gmail.com
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
