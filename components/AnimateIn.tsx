"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimateIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver;
    let navHandler: (() => void) | undefined;

    const startObserving = () => {
      observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
        { threshold: 0.15 }
      );
      observer.observe(el);
    };

    if (document.documentElement.classList.contains("navigating")) {
      navHandler = () => startObserving();
      window.addEventListener("navigation-complete", navHandler, { once: true });
    } else {
      startObserving();
    }

    return () => {
      observer?.disconnect();
      if (navHandler) window.removeEventListener("navigation-complete", navHandler);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
