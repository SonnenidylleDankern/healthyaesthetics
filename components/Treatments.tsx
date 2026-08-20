import styles from "./Treatments.module.css";
import Reveal from "./Reveal";

const TREATMENTS = [
  { name: "Morpheus8", desc: "Feine Nadeln und gezielte Wärme straffen Gesicht und Körper — ganz ohne OP oder Ausfallzeit.", price: "ab 350 €" },
  { name: "CO₂-Laser", desc: "Erneuert die Hautstruktur tiefgreifend, reduziert Falten und Pigmentflecken.", price: "ab 250 €" },
  { name: "Kollagenbooster", desc: "Regen die körpereigene Kollagenbildung an — spürbar straffer, ganz ohne künstliches Volumen.", price: "ab 300 €" },
  { name: "Hyaluronsäure", desc: "Feine Konturierung und Volumenausgleich — natürlich wirkend, individuell abgestimmt.", price: "ab 290 €" },
  { name: "Stammzellentherapie", desc: "Regenerative Behandlung mit körpereigenem Zellmaterial für Gesicht, Hals und Dekolleté.", price: "ab 800 €" },
  { name: "Infusionen", desc: "Wirkstoffe stärken Zellgesundheit, Energie und Regeneration von innen.", price: "ab 99 €" },
];

export default function Treatments() {
  return (
    <section id="treatments">
      <div className="wrap">
        <Reveal>
          <div className={styles.head}>
            <span className="eyebrow">Behandlungsportfolio</span>
            <h2 className={styles.heading}>Jede Methode hat ihren Preis —<br />und ihren Grund.</h2>
          </div>
        </Reveal>

        <div className={styles.list}>
          {TREATMENTS.map(function (t, i) {
            return (
              <Reveal key={t.name} delay={i * 70}>
                <a href="#cta" className={styles.row}>
                  <span className={styles.rowIndex}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.rowName}>{t.name}</span>
                  <span className={styles.rowDesc}>{t.desc}</span>
                  <span className={styles.rowPrice}>{t.price}</span>
                </a>
              </Reveal>
            );
          })}
        </div>
        <p className={styles.note}>* Preise laut aktueller Salonkee-Buchungsseite (Stand: heute) — bei Änderungen bitte hier anpassen.</p>
      </div>
    </section>
  );
}
