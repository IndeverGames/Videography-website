import Image from "next/image";
import Link from "next/link";
import { interactiveProjects, siteConfig } from "@/lib/data";

export const metadata = {
  title: "Interactive — Ben Childs",
  description: "Interactive games and apps by Ben Childs, built with Unity.",
};

export default function Interactive() {
  return (
    <>
      {/* Header */}
      <section className="py-20 px-6 bg-gray-950 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Interactive</h1>
        <p className="text-gray-300 max-w-lg mx-auto text-lg">
          Get in touch — let&apos;s discuss your interactive project!
        </p>
      </section>

      {/* Projects */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {interactiveProjects.map((project) => (
            <div key={project.title} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  unoptimized={project.image.endsWith(".gif")}
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                {project.note && (
                  <p className="text-sm text-gray-400 italic mb-4">{project.note}</p>
                )}
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-gray-950 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <p className="text-lg text-gray-700 mb-6">
          I&apos;d love to chat with you about how I can bring your interactive projects and apps to life with the Unity game engine.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-block px-8 py-3 bg-gray-950 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
        >
          Get in Touch
        </a>
      </section>

      <div className="py-6 px-6 text-center">
        <Link href="/ventures" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
          ← Back to Ventures
        </Link>
      </div>
    </>
  );
}
