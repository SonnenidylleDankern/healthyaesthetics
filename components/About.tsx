import Image from "next/image";
import styles from "./About.module.css";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal>
          <div className={styles.head}>
            <span className="eyebrow">Über uns</span>
            <h2 className={styles.heading}>Medizinisches Know-how, ästhetisches Feingefühl.</h2>
          </div>
        </Reveal>

        <div className={styles.grid}>
          <Reveal>
            <div className={styles.card}>
              <div className={styles.portrait}>
                <Image src="/dr-asim-shahzad.jpg" alt="Dr. Asim Shahzad" fill sizes="(max-width: 860px) 160px, 220px" />
              </div>
              <h3>Dr. Asim Shahzad</h3>
              <p>Facharzt für Innere Medizin &amp; Kardiologie mit Spezialisierung auf ästhetische Medizin. Sein Anspruch: Ergebnisse, die gesundheitlich fundiert und sichtbar natürlich sind.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className={styles.card}>
              <div className={styles.portrait}>
                <Image src="/dr-ingo-weihrauch.jpg" alt="Dr. Ingo Weihrauch" fill sizes="(max-width: 860px) 160px, 220px" />
              </div>
              <h3>Dr. Ingo Weihrauch</h3>
              <p>Über 20 Jahre Erfahrung in medizinischer Ästhetik, internationaler Referent für Injektionstechniken — Fokus auf Hyaluronsäure, Skinbooster und Fadenlifting.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
