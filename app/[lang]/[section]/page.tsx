import Link from "next/link";
const sections: Record<string,{fr:string;en:string;description:string}> = {
  actualites:{fr:"Actualités",en:"News",description:"Les dernières informations du Niger et du monde."},
  evenements:{fr:"Événements",en:"Events",description:"Les rendez-vous et événements à suivre au Niger."},
  emissions:{fr:"Émissions et podcasts",en:"Programmes and podcasts",description:"Retrouvez les émissions et contenus audio."},
  emplois:{fr:"Emplois et stages",en:"Jobs and internships",description:"Offres d’emploi, stages et opportunités professionnelles."},
  "appels-offres":{fr:"Appels d’offres",en:"Tenders",description:"Consultez les appels d’offres et avis de marché."},
  publicite:{fr:"Publicité",en:"Advertising",description:"Informations sur les espaces et services publicitaires."}
};
export default async function SectionPage({params}:{params:Promise<{lang:string;section:string}>}){
 const {lang,section}=await params; const locale=lang==="en"?"en":"fr"; const item=sections[section];
 if(!item)return <main className="section"><h1>Page introuvable</h1><Link href={"/"+locale}>Retour à l’accueil</Link></main>;
 return <main><header className="header"><Link className="brand" href={"/"+locale}>NIGER<span>INFO</span></Link><nav><Link href={"/"+locale}>Accueil</Link><Link href={locale==="fr"?"/en/"+section:"/fr/"+section}>{locale==="fr"?"English":"Français"}</Link></nav></header><section className="hero"><p className="eyebrow">NIGER INFO / {locale==="fr"?"RUBRIQUE":"SECTION"}</p><h1>{item[locale]}</h1><p className="intro">{item.description}</p></section><section className="section"><p>{locale==="fr"?"Cette rubrique est créée. Les articles, images, filtres et données seront intégrés au fur et à mesure de la migration autorisée du site source.":"This section is created. Articles, images, filters and data will be integrated as the authorized migration progresses."}</p><Link className="cta" href={"/"+locale}>{locale==="fr"?"Retour à l’accueil":"Back to home"}</Link></section><footer><Link className="brand" href={"/"+locale}>NIGER<span>INFO</span></Link></footer></main>;
}
