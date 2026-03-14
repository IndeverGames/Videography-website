import { films } from "@/lib/data";

export const metadata = {
  title: "Films — Ben Childs",
  description: "Award-winning short films written and directed by Ben Childs.",
};

export default function Films() {
  return (
    <>
      {/* Header */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Portfolio
        </p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Films</h1>
        <p className="text-gray-300 max-w-lg mx-auto text-lg">
          Award-winning short films written and directed by Ben, screened at
          international festivals.
        </p>
      </section>

      {/* Films grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {films.map((film) => (
            <div key={film.title} className="group">
              {/* Video embed */}
              <div className="relative w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <iframe
                  src={film.embedUrl}
                  title={film.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Info */}
              <div className="mt-4 px-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-xl font-bold">{film.title}</h2>
                  <span className="text-sm text-gray-400 flex-shrink-0">{film.year}</span>
                </div>
                {film.award && (
                  <p className="text-sm text-gray-500 mt-1">{film.award}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
