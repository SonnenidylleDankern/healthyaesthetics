"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MenuOverlay from "./MenuOverlay";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const goingDown = y > lastY.current;
        const pastThreshold = y > 120;

        setHidden(goingDown && pastThreshold);
        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${hidden && !open ? styles.headerHidden : ""}`}
      >
        <nav className={`wrap ${styles.nav}`}>
          <div className={styles.side} />

          <a href="#top" className={styles.logo}>
            <Image
              src="/healthyaestheticslogo.png"
              alt="Healthy Aesthetics"
              width={320}
              height={96}
              className={styles.logoImg}
              priority
            />
          </a>

          <button
            className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
