"use client";

import { useEffect, useState } from "react";

const menuItems = [
  { label: "Actualités", href: "/fr/actualites" },
  { label: "Événements", href: "/fr/evenements" },
  { label: "Émissions", href: "/fr/emissions" },
  { label: "Emplois", href: "/fr/emplois" },
  { label: "Appels d’offres", href: "/fr/appels-offres" },
  { label: "Publicité", href: "/fr/publicite" }
];

export function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="site-menu-root">
      <button
        type="button"
        className={`menu-toggle bsa-style-menu ${isOpen ? "open" : ""}`}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="site-menu-panel"
        onClick={() => setIsOpen((value) => !value)}
      >
        <span aria-hidden="true" />
      </button>

      <nav
        id="site-menu-panel"
        className={`bsa-mobile-menu ${isOpen ? "open" : ""}`}
        aria-label="Toutes les rubriques"
        aria-hidden={!isOpen}
      >
        {menuItems.map((item) => (
          <a
            href={item.href}
            key={item.href}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <nav className="mobile-nav" aria-label="Navigation mobile">
        <a href="/fr" aria-label="Accueil"><span aria-hidden="true">⌂</span><small>Accueil</small></a>
        <a href="/fr/actualites" aria-label="Actualités"><span aria-hidden="true">▤</span><small>Actualités</small></a>
        <a href="/fr/emplois" aria-label="Emplois"><span aria-hidden="true">▣</span><small>Emplois</small></a>
        <a href="/fr/appels-offres" aria-label="Appels d’offres"><span aria-hidden="true">▧</span><small>Appels d’offres</small></a>
      </nav>
    </div>
  );
}
