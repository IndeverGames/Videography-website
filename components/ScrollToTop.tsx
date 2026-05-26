"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const alreadyAtTop = window.scrollY === 0;

    if (!alreadyAtTop) {
      document.documentElement.classList.add("navigating");
    }

    window.scrollTo(0, 0);

    if (!alreadyAtTop) {
      const startY = window.scrollY;
      const triggerY = startY * 0.2; // fire when 80% scrolled up

      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        window.removeEventListener("scroll", onScroll);
        document.documentElement.classList.remove("navigating");
        window.dispatchEvent(new Event("navigation-complete"));
      };

      const onScroll = () => {
        if (window.scrollY <= triggerY) finish();
      };

      window.addEventListener("scroll", onScroll);
      const fallback = setTimeout(finish, 700);

      return () => {
        clearTimeout(fallback);
        window.removeEventListener("scroll", onScroll);
        document.documentElement.classList.remove("navigating");
      };
    }
  }, [pathname]);

  return null;
}
