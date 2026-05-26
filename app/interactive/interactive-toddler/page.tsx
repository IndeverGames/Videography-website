import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Interactive Toddler — Ben Childs",
  description: "A digital toy lovingly created by a real dad for his 18-month-old daughter. Pop bubbles, wave at the cow, and enjoy peaceful countryside sounds.",
  alternates: { canonical: "https://www.benchilds.co.nz/interactive/interactive-toddler" },
};

const features = [
  { title: "Pop bubbles", description: "Simple, satisfying tap interactions perfectly pitched for little fingers." },
  { title: "Wave at the cow", description: "Friendly animal animations that delight and engage young children." },
  { title: "Help the sheep kick a ball", description: "Gentle interactive challenges that feel rewarding for toddlers." },
  { title: "Peaceful countryside sounds", description: "Calming audio design — a pig flies lazily on by as the countryside comes to life." },
];

export default function InteractiveToddler() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Interactive</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Interactive Toddler</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Pitched just right for your child. This digital toy is lovingly created by a real dad for his 18 month old daughter. Pop bubbles, wave at the cow, help the sheep kick a ball, and listen to the peaceful countryside sounds as a pig flies lazily on by.
        </p>
        <p className="mt-6 inline-block bg-yellow-400/20 text-yellow-300 text-sm font-medium px-4 py-2 rounded-full">
          No longer available on the App Store
        </p>
      </section>

      {/* Screenshot */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-sm mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden bg-gray-200" style={{ aspectRatio: "9/16" }}>
            <Image
              src="/images/interactive-toddler.png"
              alt="Interactive Toddler app screenshot"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">What&apos;s in the app</h2>
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

      <div className="py-6 px-6 text-center">
        <Link href="/interactive" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          ← Back to Interactive
        </Link>
      </div>
    </>
  );
}
