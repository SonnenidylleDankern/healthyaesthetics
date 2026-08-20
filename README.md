# Healthy Aesthetics — Redesign

Next.js 16 (App Router) + TypeScript, kein UI-Framework — reines CSS mit
CSS-Modulen, damit alles leicht anpassbar bleibt.

## Lokal starten

```bash
npm install
npm run dev
```

Läuft auf http://localhost:3000

## Struktur

- `app/layout.tsx` — Fonts (Instrument Serif + Inter), Metadata
- `app/globals.css` — Design-Tokens (Farben, Buttons, Grundlayout)
- `app/page.tsx` — setzt alle Sektionen zusammen
- `components/` — eine Komponente pro Sektion, jeweils mit eigenem `.module.css`
  - `Nav.tsx` + `MenuOverlay.tsx` — Burger-Button, öffnet vollflächiges
    Menü-Overlay mit gestaffelter Einblend-Animation
  - `Hero.tsx` — Video-Hero (aktuell animierter Platzhalter-Hintergrund)
  - `Treatments.tsx` — Behandlungen als editorial Liste mit Preisen
  - `Packages.tsx` — Abo-Pakete mit Preisanker (alt/neu)
  - `About.tsx`, `CTA.tsx`, `Footer.tsx`

## Nächste Schritte / offene Punkte

- **Echtes Video einbinden**: Datei nach `public/hero.mp4` legen, dann in
  `components/Hero.tsx` den auskommentierten `<video>`-Tag aktivieren und
  den `<div className={styles.fallback} />` entfernen.
- **Preise sind Platzhalter** — in `components/Treatments.tsx` und
  `components/Packages.tsx` mit echten Zahlen ersetzen.
- **Fotos für About-Sektion** ergänzen, falls gewünscht.
- **Terminbuchung**: Der "Termin anfragen"-Button in `CTA.tsx` verlinkt noch
  auf `#` — hier später den Salonkee-Link oder ein eigenes Formular einbauen.

## Deploy

Repo auf GitHub pushen, dann in Vercel importieren — Next.js wird automatisch
erkannt, keine Config nötig.
