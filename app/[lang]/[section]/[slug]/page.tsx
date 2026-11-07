import Link from "next/link";
import { notFound } from "next/navigation";
import { latestNews } from "@/data/news";
import { events, programmes, jobs } from "@/data/sections";
import { articleContent } from "@/data/article-content";

export default async function DirectoryDetailPage({params}:{params:Promise<{lang:string;section:string;slug:string}>}){
 const {lang,section,slug}=await params;const locale=lang==="en"?"en":"fr";
 const news=section==="actualites"?latestNews.find(x=>x.slug===slug):undefined;
 const directory=section==="evenements"?events.find(x=>x.slug===slug):section==="emissions"?programmes.find(x=>x.slug===slug):section==="emplois"?jobs.find(x=>x.slug===slug):undefined;
 if(!news&&!directory)notFound();
 const title=news?.title??directory!.title;
 const image=news?.image??directory!.image;
 const category=news?.category??directory!.category;
 const date=news?.date??directory!.date;
 const description=directory?.description??"";
 const fullContent=articleContent[slug]??"";
 const contentParagraphs=fullContent.split(/\n{1,2}/).map((paragraph)=>paragraph.trim()).filter(Boolean);
 const shareUrl="https://nigernfo.vercel.app/"+locale+"/"+section+"/"+slug;
 return <main><div className="topline"><span>Niger Info · {locale==="fr"?"Tout sur le Niger.":"All about Niger."}</span><span>Niamey · Niger</span></div><header className="site-header"><Link className="brand" href={"/"+locale}><span className="brand-mark">N</span><span>NIGER<strong>INFO</strong></span></Link><nav className="desktop-nav"><Link href={"/"+locale+"/actualites"}>{locale==="fr"?"Actualités":"News"}</Link><Link href={"/"+locale+"/evenements"}>{locale==="fr"?"Événements":"Events"}</Link><Link href={"/"+locale+"/emissions"}>{locale==="fr"?"Émissions":"Programmes"}</Link><Link href={"/"+locale+"/emplois"}>{locale==="fr"?"Emplois":"Jobs"}</Link><Link href={"/"+locale+"/appels-offres"}>{locale==="fr"?"Appels d’offres":"Tenders"}</Link></nav><Link className="language" href={"/"+(locale==="fr"?"en":"fr")+"/"+section+"/"+slug}>{locale==="fr"?"EN":"FR"}</Link></header>
 <article className="article"><Link href={"/"+locale+"/"+section} className="news-category">← {locale==="fr"?"Retour à":"Back to"} {section}</Link><p className="eyebrow">{category} · {date}</p><h1>{title}</h1><img src={image} alt={title}/><div className="share-row"><b>{locale==="fr"?"Partager :":"Share:"}</b><a href={"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(shareUrl)} target="_blank" rel="noreferrer">Facebook</a><a href={"https://wa.me/?text="+encodeURIComponent(title+" "+shareUrl)} target="_blank" rel="noreferrer">WhatsApp</a><a href={"https://twitter.com/intent/tweet?url="+encodeURIComponent(shareUrl)+"&text="+encodeURIComponent(title)} target="_blank" rel="noreferrer">X</a></div>{description&&<p className="intro">{description}</p>}
 {contentParagraphs.length>0&&<div className="article-body">{contentParagraphs.map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div>}
 {directory&&<div className="detail-facts"><div><b>{section==="evenements"?"Lieu":"Catégorie"}</b><span>{directory.city} · {directory.category}</span></div><div><b>{section==="evenements"?"Informations":"Informations"}</b><span>{directory.extra??directory.status??"Niger Info"}</span></div>{directory.status&&<div><b>État de l’offre</b><span>{directory.status}</span></div>}</div>}
 {section==="emissions"&&<p className="detail-notice">Le lecteur audio/vidéo sera activé dès que le média correspondant sera disponible dans les ressources autorisées.</p>}
 <h2>{locale==="fr"?"À découvrir également":"Explore more"}</h2><Link className="cta" href={"/"+locale+"/"+section}>{locale==="fr"?"Voir toute la rubrique":"Browse this section"} ↗</Link></article>
 <footer className="site-footer"><div><Link className="brand footer-brand" href={"/"+locale}><span className="brand-mark">N</span><span>NIGER<strong>INFO</strong></span></Link><p>Tout sur le Niger.</p></div><div><b>Rubriques</b><Link href={"/"+locale+"/actualites"}>Actualités</Link><Link href={"/"+locale+"/evenements"}>Événements</Link><Link href={"/"+locale+"/emissions"}>Émissions</Link><Link href={"/"+locale+"/emplois"}>Emplois</Link></div><div><b>Services</b><Link href={"/"+locale+"/appels-offres"}>Appels d’offres</Link><Link href={"/"+locale+"/publicite"}>Publicité</Link></div></footer></main>;
}
