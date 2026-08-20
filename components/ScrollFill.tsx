"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ScrollFill.module.css";

const LINES = [
  "Gute Ästhetik sieht man",
  "nicht sofort. Man sieht sie",
  "mit der Zeit.",
];

export default function ScrollFill() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const scrolled = -rect.top;
      const raw = total > 0 ? scrolled / total : 0;
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <div className={styles.sticky}>
        <p className={styles.text}>
          {LINES.map(function (line, i) {
            const segment = 1 / LINES.length;
            const local = Math.min(1, Math.max(0, (progress - i * segment) / segment));
            return (
              <span
                key={line}
                className={styles.line}
                style={{ "--fill": `${local * 100}%` } as React.CSSProperties}
              >
                {line}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
