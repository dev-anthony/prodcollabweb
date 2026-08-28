"use client";

import { useEffect } from "react";
import AOS from "aos";

/**
 * Initialises scroll animations on the client. Content is fully visible
 * until this runs (the reveal CSS is scoped under `.aos-ready`), so a slow
 * or failed script never leaves the page blank. Motion is skipped entirely
 * for visitors who prefer reduced motion.
 */
export function AosInit() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) return;

    document.documentElement.classList.add("aos-ready");

    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      offset: 48,
      disableMutationObserver: false,
    });

    const t = window.setTimeout(() => AOS.refreshHard(), 150);
    return () => window.clearTimeout(t);
  }, []);

  return null;
}
