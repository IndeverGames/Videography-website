import Link from "next/link";

export default function AvailabilityBanner() {
  return (
    <div className="bg-amber-50 border-b border-amber-200 px-6 py-6">
      <p className="max-w-3xl mx-auto text-center text-amber-900 text-base md:text-lg leading-relaxed font-medium">
        <strong>Unfortunately I am not taking on new clients in 2027.</strong>{" "}
        Want to know what I&apos;m up to? My game studio received the{" "}
        <a href="https://www.nz-code.nz/post/21-studios-awarded-over-2m-in-code-funding" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-amber-700 transition-colors">CODE NZ StartUp grant</a>
        {" "}of $250,000 and I&apos;m full time on my debut videogame title, Davy Jones&apos; Deckhand.{" "}
        <Link
          href="/interactive/davy-jones-deckhand"
          className="font-semibold underline underline-offset-2 hover:text-amber-700 transition-colors"
        >
          Learn more.
        </Link>
      </p>
    </div>
  );
}
