"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (mediaRef.current) {
        mediaRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className={styles.hero}>
      <div ref={mediaRef} className={styles.mediaLayer}>
        <video ref={videoRef} className={styles.video} autoPlay muted loop playsInline preload="auto" poster="/hero-poster.jpg">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>

      <div className={`wrap ${styles.content}`}>
        <div className={styles.eyebrowRow}>
          <span className="eyebrow">Ästhetische Medizin · Düsseldorf Medienhafen</span>
        </div>
        <h1 className={styles.headline}>
          Schönheit, die <em>Zeit</em>
          <br />
          für sich arbeiten lässt.
        </h1>
        <p className={styles.lede}>Individuelle Behandlungskonzepte für natürliche Ergebnisse — fachärztlich betreut, auf Langlebigkeit statt schnelle Effekte ausgelegt.</p>
        <div className={styles.actions}>
          <a href="https://salonkee.de/salon/healthy-aesthetics" target="_blank" rel="noopener noreferrer" className="btn btn-brass">Beratungstermin sichern</a>
          <div className={styles.rating}>
            <span className={styles.stars}>★★★★★</span>
            <span>4,9 · Google Bewertungen</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span />
        Scrollen
      </div>
    </section>
  );
}
