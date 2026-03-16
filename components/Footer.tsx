import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="text-white font-semibold mb-2">Ben Childs</p>
            <p className="text-sm">Christchurch Videography</p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/videography" className="hover:text-white transition-colors">Prices</Link>
            <Link href="/films" className="hover:text-white transition-colors">Films</Link>
            <Link href="/about" className="hover:text-white transition-colors">Ventures</Link>
          </div>

          {/* Contact */}
          <div className="text-sm flex flex-col gap-1">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
              {siteConfig.phone}
            </a>
            <p className="mt-1 text-gray-500">{siteConfig.address}</p>
            {siteConfig.hours.map((h) => (
              <p key={h.day} className="text-gray-500">{h.day} {h.hours}</p>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Ben Childs. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={siteConfig.imdb} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors uppercase tracking-wider">IMDb</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors uppercase tracking-wider">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
