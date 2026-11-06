import { NewsExplorer } from "./components/news-explorer";

const navItems: [string, string][] = [
  ["Actualités", "/fr/actualites"], ["Événements", "/fr/evenements"],
  ["Émissions", "/fr/emissions"], ["Emplois", "/fr/emplois"],
  ["Appels d’offres", "/fr/appels-offres"], ["Publicité", "/fr/publicite"]
];

const featureImages = [
  { src: "https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010395294-0076cb58.jpg", label: "Actualités", title: "Toute l’actualité du Niger", href: "/fr/actualites" },
  { src: "https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010640181-965a1bc2.jpg", label: "Économie", title: "Les grands enjeux économiques", href: "/fr/actualites" },
  { src: "https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010674976-228f67cd.jpg", label: "Culture", title: "Culture et société nigériennes", href: "/fr/actualites" }
];

const services = [
  { title: "Événements", description: "Agenda, rendez-vous et événements à venir.", href: "/fr/evenements", icon: "◷" },
  { title: "Émissions", description: "Podcasts, vidéos, interviews et débats.", href: "/fr/emissions", icon: "◉" },
  { title: "Emplois", description: "Offres d’emploi, stages et concours.", href: "/fr/emplois", icon: "▤" },
  { title: "Appels d’offres", description: "Avis, dossiers et dates limites.", href: "/fr/appels-offres", icon: "▣" },
  { title: "Publicité", description: "Présentez votre marque aux lecteurs de Niger Info.", href: "/fr/publicite", icon: "↗" }
];

export default function HomePage() {
  return <main>
    <div className="topline"><span>Le média d’information du Niger</span><span>Niamey · Niger</span></div>
    <header className="site-header">
      <a className="brand" href="/fr" aria-label="Niger Info accueil"><img className="brand-logo" src="https://nigernfo.com/_next/image?url=%2Flogo.jpeg&w=384&q=75" alt="Niger Info" /><span>NIGER<strong>INFO</strong></span></a>
      <nav className="desktop-nav" aria-label="Navigation principale">{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
      <div className="header-actions"><a className="publish-link" href="/fr/publicite">Publier une publicité</a><a className="language" href="/en">EN</a><a className="menu-toggle" href="#rubriques" aria-label="Voir les rubriques">☰</a></div>
    </header>
    <div className="breaking"><b>À LA UNE</b><span>Suivez les dernières informations du Niger et de la région</span><a href="/fr/actualites">Toute l’actualité ↗</a></div>

    <section className="hero hero-rebuild">
      <div className="hero-content"><p className="eyebrow">À LA UNE · NIGER INFO</p><h1>LE NIGER, AU CŒUR DE L’INFORMATION.</h1><p className="intro">Actualités, événements, émissions, offres d’emploi et appels d’offres : retrouvez les informations essentielles du Niger au même endroit.</p><div className="hero-actions"><a className="cta" href="/fr/actualites">Lire les actualités <span>↗</span></a><a className="text-link" href="/fr/evenements">Découvrir nos rubriques</a></div></div>
      <div className="hero-visual" aria-label="Sélection de photos Niger Info">
        <div className="hero-photo hero-photo-main"><img src="https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010666888-f735925a.jpg" alt="Présentation du service Amanata" /><span className="photo-caption">À LA UNE · AMANATA</span></div>
        <div className="hero-photo hero-photo-small"><img src="https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010395294-aa30c553.jpg" alt="Actualité au Niger" /></div>
        <div className="hero-stamp">L’INFO<br/>EN CONTINU</div>
      </div>
    </section>

    <section className="feature-strip" aria-label="Rubriques principales">
      {featureImages.map((item, index) => <a className="feature-tile" href={item.href} key={item.label}><img src={item.src} alt="" /><span className="feature-shade" /><span className="feature-index">0{index + 1} · {item.label}</span><strong>{item.title}</strong><span className="feature-arrow">↗</span></a>)}
    </section>

    <section className="amanata-panel">
      <div className="amanata-image"><img src="https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010666888-f735925a.jpg" alt="Amanata, partenaire mis en avant sur Niger Info" /></div>
      <div className="amanata-copy"><p className="eyebrow">PARTENAIRE · PUBLICITÉ</p><h2>AMANATA fait peau neuve : votre argent, en beaucoup plus simple.</h2><p>Retrouvez notre contenu consacré à la nouvelle expérience Amanata et découvrez les actualités de nos partenaires.</p><a className="cta" href="/fr/actualites/amanata-fait-peau-neuve-votre-argent-mais-en-beaucoup-plus-simple">Découvrir <span>↗</span></a></div>
    </section>

    <NewsExplorer />

    <section className="section" id="rubriques"><div className="section-heading"><div><p className="eyebrow">EXPLOREZ NIGER INFO</p><h2>Nos rubriques et services</h2></div><span>Les informations et services en un seul endroit</span></div><div className="cards">{services.map((s, i) => <a className="card" href={s.href} key={s.href}><span className="number">0{i + 1} · {s.icon}</span><h3>{s.title}</h3><p>{s.description}</p><span className="arrow">↗</span></a>)}</div></section>

    <section className="popular"><div><p className="eyebrow">À NE PAS MANQUER</p><h2>Les sujets qui font l’actualité</h2><p>Explorez les articles et les dossiers suivis par nos lecteurs.</p></div><a href="/fr/actualites">Explorer les articles ↗</a></section>
    <section className="newsletter"><div><p className="eyebrow">RESTEZ INFORMÉ</p><h2>Les informations essentielles, dans votre boîte mail.</h2><p>La newsletter Niger Info vous accompagne dans l’actualité.</p></div><div className="newsletter-note">L’inscription sera activée dès que le service de newsletter du propriétaire sera connecté.</div></section>
    <footer className="site-footer"><div><a className="brand footer-brand" href="/fr"><img className="brand-logo" src="https://nigernfo.com/_next/image?url=%2Flogo.jpeg&w=384&q=75" alt="" /><span>NIGER<strong>INFO</strong></span></a><p>Le média d’information du Niger.</p></div><div><b>Rubriques</b>{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div><div><b>Informations</b><a href="/fr/contact">Contact</a><a href="/fr/mentions-legales">Mentions légales</a><a href="/fr/confidentialite">Confidentialité</a></div><div><b>Suivez-nous</b><a href="https://www.facebook.com/NIGERmonpays/" rel="noreferrer">Facebook ↗</a><a href="https://x.com" rel="noreferrer">X ↗</a><a href="https://whatsapp.com" rel="noreferrer">WhatsApp ↗</a></div><small>© 2026 Niger Info. Tous droits réservés.</small></footer>
    <nav className="mobile-nav">{[["⌂", "Accueil", "/fr"], ["▤", "Actualités", "/fr/actualites"], ["▣", "Emplois", "/fr/emplois"], ["▧", "Appels d’offres", "/fr/appels-offres"], ["☰", "Menu", "#rubriques"]].map(([icon, label, href]) => <a href={href} key={label}><span>{icon}</span>{label}</a>)}</nav>
  </main>;
}
