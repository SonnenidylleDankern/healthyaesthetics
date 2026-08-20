import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Healthy Aesthetics — Ästhetische Medizin Düsseldorf",
  description:
    "Individuelle Behandlungskonzepte für natürliche Ergebnisse — fachärztlich betreut im Düsseldorfer Medienhafen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${display.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
