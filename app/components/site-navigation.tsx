"use client";

import { useEffect, useState } from "react";

const menuItems = [
  { label: "Actualités", href: "/fr/actualites", icon: "▤", description: "Les dernières nouvelles du Niger et de la région." },
  { label: "Événements", href: "/fr/evenements", icon: "◷", description: "Agenda, rendez-vous et événements à venir." },
  { label: "Émissions", href: "/fr/emissions", icon: "◉", description: "Podcasts, vidéos, interviews et débats." },
  { label: "Emplois", href: "/fr/emplois", icon: "▣", description: "Offres d’emploi, stages et concours." },
  { label: "Appels d’offres", href: "/fr/appels-offres", icon: "▧", description: "Avis, dossiers et dates limites." },
  { label: "Publicité", href: "/fr/publicite", icon: "↗", description: "Présentez votre marque aux lecteurs de Niger Info." }
];

export function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        className="menu-toggle"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="site-menu-panel"
        onClick={() => setIsOpen((value) => !value)}
      >
        <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
      </button>

      <nav className="mobile-nav" aria-label="Navigation mobile">
        <a href="/fr" aria-label="Accueil"><span aria-hidden="true">⌂</span><small>Accueil</small></a>
        <a href="/fr/actualites" aria-label="Actualités"><span aria-hidden="true">▤</span><small>Actualités</small></a>
        <a href="/fr/emplois" aria-label="Emplois"><span aria-hidden="true">▣</span><small>Emplois</small></a>
        <a href="/fr/appels-offres" aria-label="Appels d’offres"><span aria-hidden="true">▧</span><small>Appels d’offres</small></a>
        <button
          type="button"
          className="mobile-nav-menu"
          aria-label="Ouvrir toutes les rubriques"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
          <small>Menu</small>
        </button>
      </nav>

      {isOpen && (
        <div className="menu-backdrop" onClick={closeMenu}>
          <section
            id="site-menu-panel"
            className="site-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="site-menu-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="site-menu-heading">
              <div>
                <p className="eyebrow">NAVIGATION</p>
                <h2 id="site-menu-title">Toutes les rubriques</h2>
              </div>
              <button type="button" className="site-menu-close" onClick={closeMenu} aria-label="Fermer le menu">×</button>
            </div>
            <div className="site-menu-links">
              {menuItems.map((item) => (
                <a href={item.href} className="site-menu-link" key={item.href} onClick={closeMenu}>
                  <span className="site-menu-icon" aria-hidden="true">{item.icon}</span>
                  <span className="site-menu-copy">
                    <strong>{item.label}</strong>
                    <small>{item.description}</small>
                  </span>
                  <span className="site-menu-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
