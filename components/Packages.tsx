import styles from "./Packages.module.css";
import Reveal from "./Reveal";

const BOOKING_URL = "https://salonkee.de/salon/healthy-aesthetics";

export default function Packages() {
  return (
    <section id="packages" className={styles.section}>
      <div className="wrap">
        <Reveal>
          <div className={styles.head}>
            <span className="eyebrow">Abo-Angebote</span>
            <h2 className={styles.heading}>Kombinierte Konzepte für nachhaltige Ergebnisse.</h2>
            <p className={styles.sub}>Die meisten sichtbaren Ergebnisse entstehen nicht durch eine einzelne Behandlung, sondern durch ein abgestimmtes Konzept.</p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          <Reveal>
            <div className={styles.card}>
              <h3>Dr. Asim Special</h3>
              <div className={styles.price}>
                <span className={styles.old}>1.614 €</span>
                <span className={styles.new}>1.000 €</span>
              </div>
              <ul className={styles.list}>
                <li>1× CO₂-Laser — komplettes Gesicht</li>
                <li>1× PRP / Vampirlifting — Gesicht</li>
                <li>1× Infusionstherapie — Vitamin C</li>
                <li>1× Polynukleotide</li>
              </ul>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Paket anfragen</a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className={`${styles.card} ${styles.featured}`}>
              <span className={styles.flag}>Beliebteste Wahl</span>
              <h3>Dr. Asim Favorite</h3>
              <div className={styles.price}>
                <span className={styles.old}>1.824 €</span>
                <span className={styles.new}>1.100 €</span>
              </div>
              <ul className={styles.list}>
                <li>1× CO₂-Laser — komplettes Gesicht</li>
                <li>1× PRP / Vampirlifting — Gesicht</li>
                <li>1× HydraFacial — Gesicht Deluxe</li>
                <li>1× Infusionstherapie — Vitamin C</li>
                <li>1× Polynukleotide</li>
              </ul>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-brass">Paket anfragen</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
