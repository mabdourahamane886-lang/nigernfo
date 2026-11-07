import { NewsExplorer } from "./components/news-explorer";
import { latestNews } from "@/data/news";
import { NewsletterForm } from "./components/newsletter-form";
import { SiteNavigation } from "./components/site-navigation";

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

export default function HomePage() {
  const featuredStories = latestNews.slice(0, 3);
  const breakingStories = latestNews.slice(0, 4);

  return <main>
    <div className="topline"><span>Le média d’information du Niger</span><span>Niamey · Niger</span></div>
    <header className="site-header">
      <a className="brand" href="/fr" aria-label="Niger Info accueil"><img className="brand-logo" src="https://nigernfo.com/_next/image?url=%2Flogo.jpeg&w=384&q=75" alt="Niger Info" /><span>NIGER<strong>INFO</strong></span></a>
      <nav className="desktop-nav" aria-label="Navigation principale">{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
      <div className="header-actions"><a className="publish-link" href="/fr/publicite">Publier une publicité</a><a className="language" href="/en">EN</a><SiteNavigation /></div>
    </header>
    <div className="breaking"><b>DERNIÈRES INFOS</b><div className="breaking-items">{breakingStories.map((story) => <a href={"/fr/actualites/" + story.slug} key={story.slug}>{story.title}</a>)}</div><a className="breaking-all" href="/fr/actualites">Toute l’actualité ↗</a></div>

    <section className="hero hero-rebuild">
      <div className="hero-content"><p className="eyebrow">À LA UNE · NIGER INFO</p><h1>LE NIGER, AU CŒUR DE L’INFORMATION.</h1><p className="intro">Actualités, événements, émissions, offres d’emploi et appels d’offres : retrouvez les informations essentielles du Niger au même endroit.</p><div className="hero-actions"><a className="cta" href="/fr/actualites">Lire les actualités <span>↗</span></a><a className="text-link" href="/fr/evenements">Découvrir nos rubriques</a></div></div>
      <div className="hero-visual" aria-label="Sélection de photos Niger Info">
        <div className="hero-photo hero-photo-main"><img src={featuredStories[0]?.image ?? featureImages[0].src} alt={featuredStories[0]?.title ?? "Actualité au Niger"} /><span className="photo-caption">À LA UNE · ACTUALITÉ</span></div>
        <div className="hero-photo hero-photo-small"><img src={featuredStories[1]?.image ?? featureImages[1].src} alt={featuredStories[1]?.title ?? "Actualité au Niger"} /></div>
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

    <section className="popular popular-stories"><div className="popular-heading"><p className="eyebrow">À DÉCOUVRIR</p><h2>Les dernières informations à suivre</h2><p>Une sélection des dernières publications de Niger Info.</p><a href="/fr/actualites">Voir toutes les actualités ↗</a></div><div className="popular-grid">{featuredStories.map((story) => <a className="popular-story" href={"/fr/actualites/" + story.slug} key={story.slug}><img src={story.image} alt="" /><div><span>{story.category} · {story.date}</span><h3>{story.title}</h3><b>Lire l’article ↗</b></div></a>)}</div></section>
    <section className="newsletter"><div><p className="eyebrow">RESTEZ INFORMÉ</p><h2>Les informations essentielles, dans votre boîte mail.</h2><p>La newsletter Niger Info vous accompagnera dans l’actualité.</p></div><NewsletterForm /></section>
    <footer className="site-footer"><div><a className="brand footer-brand" href="/fr"><img className="brand-logo" src="https://nigernfo.com/_next/image?url=%2Flogo.jpeg&w=384&q=75" alt="" /><span>NIGER<strong>INFO</strong></span></a><p>Le média d’information du Niger.</p></div><div><b>Rubriques</b>{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div><div><b>Informations</b><a href="/fr/contact">Contact</a><a href="/fr/mentions-legales">Mentions légales</a><a href="/fr/confidentialite">Confidentialité</a></div><div><b>Suivez-nous</b><a href="https://www.facebook.com/NIGERmonpays/" rel="noreferrer">Facebook ↗</a><a href="https://x.com" rel="noreferrer">X ↗</a><a href="https://whatsapp.com" rel="noreferrer">WhatsApp ↗</a></div><small>© 2026 Niger Info. Tous droits réservés.</small></footer>
  </main>;
}
