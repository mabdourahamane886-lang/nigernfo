import Link from "next/link";
import HomePage from "../page";
import Image from "next/image";
import { latestNews } from "@/data/news";

const labels = {
  fr: { title: "Toute l’actualité du Niger", intro: "Actualités, événements, émissions, emplois et appels d’offres.", sections: ["actualites", "evenements", "emissions", "emplois", "appels-offres", "publicite"], names: ["Actualités", "Événements", "Émissions", "Emplois", "Appels d’offres", "Publicité"] },
  en: { title: "All the latest from Niger", intro: "News, events, programmes, jobs and tenders.", sections: ["actualites", "evenements", "emissions", "emplois", "appels-offres", "publicite"], names: ["News", "Events", "Programmes", "Jobs", "Tenders", "Advertising"] },
};
export default async function LocalizedHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang === "en" ? "en" : "fr";
  const t = labels[locale];
  if (locale === "fr") return <HomePage />;
  return <main><div className="topline"><span>Niger Info · {locale === "fr" ? "Le média du Niger" : "Niger news portal"}</span><span>Niamey · Niger</span></div><header className="header"><Link className="brand" href={"/"+locale}>NIGER<span>INFO</span></Link><nav>{t.names.map((n,i)=><Link key={n} href={"/"+locale+"/"+t.sections[i]}>{n}</Link>)}</nav><Link className="language" href={locale==="fr"?"/en":"/fr"}>{locale==="fr"?"EN":"FR"}</Link></header><section className="hero"><p className="eyebrow">NIGER INFO</p><h1>{t.title}</h1><p className="intro">{t.intro}</p></section><section className="section"><div className="cards">{t.names.map((n,i)=><Link className="card" key={n} href={"/"+locale+"/"+t.sections[i]}><span className="number">0{i+1}</span><h3>{n}</h3><p>{locale==="fr"?"Consulter les publications de cette rubrique.":"Browse the latest in this section."}</p><span className="arrow">↗</span></Link>)}</div></section><section className="section"><p className="eyebrow">{locale==="fr"?"À LA UNE":"TOP STORIES"}</p><h2>{locale==="fr"?"Dernières actualités":"Latest news"}</h2><div className="news-grid">{latestNews.map((item)=><Link className="news-card" key={item.slug} href={"/"+locale+"/actualites/"+item.slug}><Image src={item.image} alt={item.title} width={640} height={400} unoptimized/><div><span className="news-category">{locale==="fr"?item.category:item.category}</span><h3>{item.title}</h3><small>{item.date}</small></div></Link>)}</div></section><footer><Link className="brand" href={"/"+locale}>NIGER<span>INFO</span></Link><p>© Niger Info</p></footer></main>;
}
