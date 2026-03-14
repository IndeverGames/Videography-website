"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/prices", label: "Prices" },
  { href: "/films", label: "Films" },
  { href: "/ventures", label: "Ventures" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-tight text-gray-900">
          Ben Childs
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
            <a
              href={siteConfig.imdb}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider"
            >
              IMDb
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider"
            >
              Email
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${
                pathname === link.href ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-4 pt-2 border-t border-gray-100">
            <a href={siteConfig.imdb} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 uppercase tracking-wider">IMDb</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 uppercase tracking-wider">LinkedIn</a>
            <a href={`mailto:${siteConfig.email}`} className="text-xs text-gray-500 uppercase tracking-wider">Email</a>
          </div>
        </div>
      )}
    </header>
  );
}
