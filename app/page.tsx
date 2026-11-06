import { NewsExplorer } from "./components/news-explorer";

const navItems: [string, string][] = [
 ["Actualités", "/fr/actualites"], ["Événements", "/fr/evenements"], ["Émissions", "/fr/emissions"],
 ["Emplois", "/fr/emplois"], ["Appels d’offres", "/fr/appels-offres"], ["Publicité", "/fr/publicite"]
];

const sections = [
 {title:"Événements",description:"Agenda, rendez-vous et événements à venir.",href:"/fr/evenements",icon:"◷"},
 {title:"Émissions",description:"Podcasts, vidéos, interviews et débats.",href:"/fr/emissions",icon:"◉"},
 {title:"Emplois",description:"Offres d’emploi, stages et concours.",href:"/fr/emplois",icon:"▤"},
 {title:"Appels d’offres",description:"Avis, dossiers et dates limites.",href:"/fr/appels-offres",icon:"▣"},
 {title:"Publicité",description:"Découvrez nos espaces et formats publicitaires.",href:"/fr/publicite",icon:"↗"}
];

export default function HomePage() {
 return <main>
  <div className="topline"><span>Le média d’information du Niger</span><span>Niamey · Niger</span></div>
  <header className="site-header">
   <a className="brand" href="/" aria-label="Niger Info accueil"><span className="brand-mark">N</span><span>NIGER<strong>INFO</strong></span></a>
   <nav className="desktop-nav">{navItems.slice(1).map(([label,href])=><a href={href} key={href}>{label}</a>)}</nav>
   <div className="header-actions"><a className="publish-link" href="/fr/publicite">Publier une publicité</a><a className="language" href="/en">EN</a><a className="menu-toggle" href="#rubriques" aria-label="Voir les rubriques">☰</a></div>
  </header>
  <div className="breaking"><b>URGENT</b><span>Suivez les dernières informations du Niger et de la région</span><a href="/fr/actualites">Toute l’actualité ↗</a></div>
  <section className="hero">
   <div className="hero-content"><p className="eyebrow">À LA UNE · NIGER INFO</p><h1>AMANATA FAIT PEAU NEUVE : VOTRE ARGENT, MAIS EN BEAUCOUP PLUS SIMPLE</h1><p className="intro">AMANATA NOUVELLE GÉNÉRATION : UNE EXPÉRIENCE REPENSÉE POUR VOUS.</p><a className="cta" href="/fr/actualites/amanata-fait-peau-neuve-votre-argent-mais-en-beaucoup-plus-simple">Lire la suite <span>↗</span></a></div>
   <div className="hero-image"><img src="https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010666888-f735925a.jpg" alt="Amanata fait peau neuve : votre argent, mais en beaucoup plus simple"/><span>À LA UNE</span></div>
  </section>
  <NewsExplorer/>
  <section className="section" id="rubriques"><div className="section-heading"><div><p className="eyebrow">EXPLOREZ NIGER INFO</p><h2>Nos rubriques</h2></div><span>Les informations et services en un seul endroit</span></div><div className="cards">{sections.map((s,i)=><a className="card" href={s.href} key={s.href}><span className="number">0{i+1} · {s.icon}</span><h3>{s.title}</h3><p>{s.description}</p><span className="arrow">↗</span></a>)}</div></section>
  <section className="popular"><div><p className="eyebrow">À NE PAS MANQUER</p><h2>Les plus lus</h2><p>Retrouvez les sujets qui retiennent l’attention de nos lecteurs.</p></div><a href="/fr/actualites">Explorer les articles ↗</a></section>
  <section className="newsletter"><div><p className="eyebrow">RESTEZ INFORMÉ</p><h2>Les informations essentielles, dans votre boîte mail.</h2><p>Inscrivez-vous à la newsletter Niger Info.</p></div><div className="newsletter-note">Le formulaire d’inscription sera activé après connexion à la base de données et au service de newsletter du propriétaire.</div></section>
  <footer className="site-footer"><div><a className="brand footer-brand" href="/"><span className="brand-mark">N</span><span>NIGER<strong>INFO</strong></span></a><p>Le média d’information du Niger.</p></div><div><b>Rubriques</b>{navItems.slice(1).map(([label,href])=><a href={href} key={href}>{label}</a>)}</div><div><b>Informations</b><a href="/fr/contact">Contact</a><a href="/fr/mentions-legales">Mentions légales</a><a href="/fr/confidentialite">Confidentialité</a></div><div><b>Suivez-nous</b><a href="https://facebook.com" rel="noreferrer">Facebook ↗</a><a href="https://x.com" rel="noreferrer">X ↗</a><a href="https://whatsapp.com" rel="noreferrer">WhatsApp ↗</a></div><small>© 2026 Niger Info. Tous droits réservés.</small></footer>
  <nav className="mobile-nav">{[["⌂","Accueil","/"],["▤","Actualités","/actualites"],["▣","Emplois","/emplois"],["▧","Appels d’offres","/appels-offres"],["☰","Menu","#rubriques"]].map(([icon,label,href])=><a href={href} key={label}><span>{icon}</span>{label}</a>)}</nav>
 </main>;
}
