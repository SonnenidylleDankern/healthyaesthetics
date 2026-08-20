"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const isWideEnough = window.innerWidth >= 860;
    if (!isFinePointer || !isWideEnough) return;

    document.body.classList.add(styles.hideCursor);

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a, button");
      dotRef.current?.classList.toggle(styles.dotLarge, !!el);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    let raf: number;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.65;
      pos.current.y += (target.current.y - pos.current.y) * 0.65;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      document.body.classList.remove(styles.hideCursor);
    };
  }, []);

  return <div ref={dotRef} className={styles.dot} />;
}
