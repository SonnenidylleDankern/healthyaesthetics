"use client";

import { useEffect } from "react";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function SmoothAnchors() {
  useEffect(() => {
    const duration = 1100;

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!link) return;

      const id = link.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();

      const headerOffset = 90;
      const startY = window.scrollY;
      const targetY = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      const distance = targetY - startY;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const eased = easeInOutCubic(progress);
        window.scrollTo(0, startY + distance * eased);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          history.pushState(null, "", id);
        }
      };

      requestAnimationFrame(step);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
