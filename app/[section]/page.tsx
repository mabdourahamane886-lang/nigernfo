import { notFound } from "next/navigation";
import { NewsExplorer } from "../components/news-explorer";

const pages: Record<string,{title:string;description:string;intro:string}> = {
 actualites:{title:"Actualités",description:"Toute l’information du Niger et de l’international.",intro:"Politique, économie, société, sport, culture et technologie."},
 evenements:{title:"Événements",description:"Les rendez-vous et événements à suivre au Niger.",intro:"Consultez l’agenda et retrouvez les informations pratiques des événements."},
 emissions:{title:"Émissions",description:"Podcasts, vidéos, interviews, débats et chroniques.",intro:"Retrouvez les programmes et contenus audiovisuels de Niger Info."},
 emplois:{title:"Emplois",description:"Offres d’emploi, stages, concours et opportunités.",intro:"Explorez les opportunités et consultez les conditions et dates limites."},
 "appels-offres":{title:"Appels d’offres",description:"Avis, marchés et dossiers de consultation.",intro:"Retrouvez les avis publiés, organismes concernés et échéances."},
 publicite:{title:"Publicité",description:"Communiquez auprès de l’audience de Niger Info.",intro:"Découvrez les espaces publicitaires et contactez notre équipe pour une demande de publication."}
};

export function generateStaticParams(){return Object.keys(pages).map(section=>({section}));}

export default async function SectionPage({params}:{params:Promise<{section:string}>}){
 const {section}=await params;
 const page=pages[section];
 if(!page) notFound();
 return <main>
  <div className="topline"><span>Le média d’information du Niger</span><span>Niamey · Niger</span></div>
  <header className="site-header"><a className="brand" href="/"><span className="brand-mark">N</span><span>NIGER<strong>INFO</strong></span></a><nav className="desktop-nav"><a href="/actualites">Actualités</a><a href="/evenements">Événements</a><a href="/emissions">Émissions</a><a href="/emplois">Emplois</a><a href="/appels-offres">Appels d’offres</a><a href="/publicite">Publicité</a></nav><div className="header-actions"><a className="language" href="/en">EN</a></div></header>
  <section className="page-intro"><p className="eyebrow">NIGER INFO · RUBRIQUES</p><h1>{page.title}</h1><p className="intro">{page.description}</p></section>
  {section==="actualites"?<NewsExplorer/>:<section className="page-content"><div className="placeholder-panel"><h2>{page.title}</h2><p>{page.intro}</p><p>Cette rubrique est créée dans la navigation. Son contenu dynamique, ses formulaires et ses données seront raccordés après validation des sources et des accès du propriétaire.</p><a className="cta" href="/actualites">Consulter les actualités ↗</a></div></section>}
  <footer className="site-footer"><div><a className="brand footer-brand" href="/"><span className="brand-mark">N</span><span>NIGER<strong>INFO</strong></span></a><p>Le média d’information du Niger.</p></div><div><b>Rubriques</b><a href="/actualites">Actualités</a><a href="/evenements">Événements</a><a href="/emissions">Émissions</a><a href="/emplois">Emplois</a></div><div><b>Services</b><a href="/appels-offres">Appels d’offres</a><a href="/publicite">Publicité</a></div><div><b>Informations</b><a href="/contact">Contact</a><a href="/confidentialite">Confidentialité</a></div></footer>
  <nav className="mobile-nav"><a href="/"><span>⌂</span>Accueil</a><a href="/actualites"><span>▤</span>Actualités</a><a href="/emplois"><span>▣</span>Emplois</a><a href="/appels-offres"><span>▧</span>Appels d’offres</a></nav>
 </main>;
}
