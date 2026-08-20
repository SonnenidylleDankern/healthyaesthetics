import styles from "./CTA.module.css";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="cta" className={styles.section}>
      <div className="wrap">
        <Reveal>
          <div className={styles.box}>
            <span className="eyebrow">Erstberatung</span>
            <h2 className={styles.heading}>Lassen Sie uns über Ihr Ziel sprechen.</h2>
            <p className={styles.sub}>In einem persönlichen Gespräch entwickeln wir gemeinsam ein Behandlungskonzept, das zu Ihnen passt.</p>
            <a href="https://salonkee.de/salon/healthy-aesthetics" target="_blank" rel="noopener noreferrer" className="btn btn-brass">Termin anfragen</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
