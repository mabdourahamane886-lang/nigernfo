const sections = ["Actualités", "Événements", "Émissions", "Emplois", "Appels d’offres", "Publicité"];
const categories = ["Politique", "Économie", "Société", "Sport", "Culture", "Technologie", "International"];

export default function HomePage() {
  return <main>
    <div className="topline"><span>Le média d’information du Niger</span><span>Niamey · Niger</span></div>
    <header className="header"><a className="brand" href="/">NIGER<span>INFO</span></a><nav>{sections.map((item) => <a key={item} href="#rubriques">{item}</a>)}</nav><a className="language" href="/en">EN</a></header>
    <section className="hero"><p className="eyebrow">L’ACTUALITÉ DU NIGER EN TEMPS RÉEL</p><h1>L’information qui vous rapproche de l’essentiel.</h1><p className="intro">Actualités, événements, émissions et opportunités : suivez ce qui se passe au Niger et dans le monde.</p><a className="cta" href="#rubriques">Explorer les rubriques</a></section>
    <section id="rubriques" className="section"><div className="section-heading"><div><p className="eyebrow">RESTEZ INFORMÉ</p><h2>Nos rubriques</h2></div><span>Français · English</span></div><div className="cards">{sections.map((item, i) => <article className="card" key={item}><span className="number">0{i+1}</span><h3>{item}</h3><p>Retrouvez les dernières informations et publications de la rubrique {item.toLowerCase()}.</p><span className="arrow">↗</span></article>)}</div></section>
    <section className="section categories"><p className="eyebrow">TOUTES LES THÉMATIQUES</p><h2>Explorer l’actualité</h2><div className="chips">{categories.map((c) => <span key={c}>{c}</span>)}</div></section>
    <footer><a className="brand" href="/">NIGER<span>INFO</span></a><p>Une reconstruction indépendante du portail Niger Info.</p><small>Version de travail — les contenus, médias et fonctionnalités sont en cours de migration autorisée.</small></footer>
  </main>;
}
