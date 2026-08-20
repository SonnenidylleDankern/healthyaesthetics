import Image from "next/image";
import styles from "./Footer.module.css";

const IG_PATH =
  "M12 2c-2.716 0-3.056.012-4.123.06-1.066.05-1.79.218-2.427.465" +
  "a4.9 4.9 0 0 0-1.771 1.153A4.9 4.9 0 0 0 2.525 5.45" +
  "c-.247.637-.416 1.36-.465 2.427C2.012 8.944 2 9.284 2 12" +
  "s.012 3.056.06 4.123c.05 1.066.218 1.79.465 2.427" +
  "a4.9 4.9 0 0 0 1.153 1.771 4.9 4.9 0 0 0 1.771 1.153" +
  "c.637.247 1.36.416 2.427.465C8.944 21.988 9.284 22 12 22" +
  "s3.056-.012 4.123-.06c1.066-.05 1.79-.218 2.427-.465" +
  "a4.9 4.9 0 0 0 1.771-1.153 4.9 4.9 0 0 0 1.153-1.771" +
  "c.247-.637.416-1.36.465-2.427.048-1.067.06-1.407.06-4.123" +
  "s-.012-3.056-.06-4.123c-.05-1.066-.218-1.79-.465-2.427" +
  "a4.9 4.9 0 0 0-1.153-1.771A4.9 4.9 0 0 0 18.55 2.525" +
  "c-.637-.247-1.36-.416-2.427-.465C15.056 2.012 14.716 2 12 2z" +
  "m0 1.802c2.67 0 2.987.01 4.041.058.976.045 1.505.207 1.858.344" +
  "c.467.182.8.399 1.15.748.35.35.566.683.748 1.15" +
  "c.137.353.3.882.344 1.858.048 1.054.058 1.37.058 4.04" +
  "c0 2.67-.01 2.987-.058 4.041-.045.976-.207 1.505-.344 1.858" +
  "a3.1 3.1 0 0 1-.748 1.15 3.1 3.1 0 0 1-1.15.748" +
  "c-.353.137-.882.3-1.858.344-1.054.048-1.37.058-4.041.058" +
  "c-2.67 0-2.987-.01-4.04-.058-.977-.045-1.506-.207-1.859-.344" +
  "a3.1 3.1 0 0 1-1.15-.748 3.1 3.1 0 0 1-.748-1.15" +
  "c-.137-.353-.3-.882-.344-1.858-.048-1.054-.058-1.37-.058-4.041" +
  "c0-2.67.01-2.987.058-4.04.045-.977.207-1.506.344-1.859" +
  "c.182-.467.399-.8.748-1.15a3.1 3.1 0 0 1 1.15-.748" +
  "c.353-.137.882-.3 1.858-.344C9.013 3.812 9.33 3.802 12 3.802z" +
  "m0 3.064a5.134 5.134 0 1 0 0 10.268 5.134 5.134 0 0 0 0-10.268z" +
  "m0 8.468a3.334 3.334 0 1 1 0-6.668 3.334 3.334 0 0 1 0 6.668z" +
  "m6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.logo}>
          <Image src="/healthyaestheticslogodark.png" alt="Healthy Aesthetics" width={200} height={60} className={styles.logoImg} />
        </div>
        <div className={styles.cols}>
          <div>
            <strong>Praxis</strong>
            <a href="#treatments">Behandlungen</a>
            <a href="#packages">Pakete</a>
            <a href="#about">Über uns</a>
          </div>
          <div>
            <strong>Kontakt</strong>
            <a href="https://maps.app.goo.gl/M6ViAXYM3uE6gkJ49" target="_blank" rel="noopener noreferrer">
              Neuer Zollhof 1, 40221 Düsseldorf
            </a>
            <a href="https://www.instagram.com/healthy_aesthetics_duesseldorf/" aria-label="Instagram" className={styles.instaLink}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d={IG_PATH} />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={`wrap ${styles.bottom}`}>
        <span>© 2026 Healthy Aesthetics GmbH</span>
        <span>Redesign-Demo · nicht die offizielle Website</span>
      </div>
    </footer>
  );
}
