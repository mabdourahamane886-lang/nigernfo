import { NewsExplorer, navItems } from "./components/news-explorer";

const sections = [
 {title:"Événements",description:"Agenda, rendez-vous et événements à venir.",href:"/evenements",icon:"◷"},
 {title:"Émissions",description:"Podcasts, vidéos, interviews et débats.",href:"/emissions",icon:"◉"},
 {title:"Emplois",description:"Offres d’emploi, stages et concours.",href:"/emplois",icon:"▤"},
 {title:"Appels d’offres",description:"Avis, dossiers et dates limites.",href:"/appels-offres",icon:"▣"},
 {title:"Publicité",description:"Découvrez nos espaces et formats publicitaires.",href:"/publicite",icon:"↗"}
];

export default function HomePage() {
 return <main>
  <div className="topline"><span>Le média d’information du Niger</span><span>Niamey · Niger</span></div>
  <header className="site-header">
   <a className="brand" href="/" aria-label="Niger Info accueil"><span className="brand-mark">N</span><span>NIGER<strong>INFO</strong></span></a>
   <nav className="desktop-nav">{navItems.slice(1).map(([label,href])=><a href={href} key={href}>{label}</a>)}</nav>
   <div className="header-actions"><a className="publish-link" href="/publicite">Publier une publicité</a><a className="language" href="/en">EN</a><a className="menu-toggle" href="#rubriques" aria-label="Voir les rubriques">☰</a></div>
  </header>
  <div className="breaking"><b>URGENT</b><span>Suivez les dernières informations du Niger et de la région</span><a href="/actualites">Toute l’actualité ↗</a></div>
  <section className="hero">
   <div className="hero-content"><p className="eyebrow">L’ACTUALITÉ DU NIGER EN TEMPS RÉEL</p><h1>L’information qui vous rapproche de l’essentiel.</h1><p className="intro">Actualités, événements, émissions et opportunités : suivez ce qui se passe au Niger et dans le monde.</p><a className="cta" href="/actualites">Lire les actualités <span>↗</span></a></div>
   <div className="hero-image"><img src="https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010686279-a375d546.jpg" alt="Actualité au Niger"/><span>À LA UNE</span></div>
  </section>
  <NewsExplorer/>
  <section className="section" id="rubriques"><div className="section-heading"><div><p className="eyebrow">EXPLOREZ NIGER INFO</p><h2>Nos rubriques</h2></div><span>Les informations et services en un seul endroit</span></div><div className="cards">{sections.map((s,i)=><a className="card" href={s.href} key={s.href}><span className="number">0{i+1} · {s.icon}</span><h3>{s.title}</h3><p>{s.description}</p><span className="arrow">↗</span></a>)}</div></section>
  <section className="popular"><div><p className="eyebrow">À NE PAS MANQUER</p><h2>Les plus lus</h2><p>Retrouvez les sujets qui retiennent l’attention de nos lecteurs.</p></div><a href="/actualites">Explorer les articles ↗</a></section>
  <section className="newsletter"><div><p className="eyebrow">RESTEZ INFORMÉ</p><h2>Les informations essentielles, dans votre boîte mail.</h2><p>Inscrivez-vous à la newsletter Niger Info.</p></div><form action="/api/newsletter" method="post"><input type="email" name="email" placeholder="Votre adresse e-mail" required/><button type="submit">Je m’abonne ↗</button></form></section>
  <footer className="site-footer"><div><a className="brand footer-brand" href="/"><span className="brand-mark">N</span><span>NIGER<strong>INFO</strong></span></a><p>Le média d’information du Niger.</p></div><div><b>Rubriques</b>{navItems.slice(1).map(([label,href])=><a href={href} key={href}>{label}</a>)}</div><div><b>Informations</b><a href="/contact">Contact</a><a href="/mentions-legales">Mentions légales</a><a href="/confidentialite">Confidentialité</a></div><div><b>Suivez-nous</b><a href="https://facebook.com" rel="noreferrer">Facebook ↗</a><a href="https://x.com" rel="noreferrer">X ↗</a><a href="https://whatsapp.com" rel="noreferrer">WhatsApp ↗</a></div><small>© 2026 Niger Info. Tous droits réservés.</small></footer>
  <nav className="mobile-nav">{[["⌂","Accueil","/"],["▤","Actualités","/actualites"],["▣","Emplois","/emplois"],["▧","Appels d’offres","/appels-offres"],["☰","Menu","#rubriques"]].map(([icon,label,href])=><a href={href} key={label}><span>{icon}</span>{label}</a>)}</nav>
 </main>;
}
