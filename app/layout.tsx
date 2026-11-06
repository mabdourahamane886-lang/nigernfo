import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niger Info — Actualités et informations du Niger",
  description: "Votre portail d'actualités, événements, émissions et opportunités au Niger.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
