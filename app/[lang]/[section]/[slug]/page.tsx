import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { latestNews } from "@/data/news";

export default async function ArticlePage({params}:{params:Promise<{lang:string;section:string;slug:string}>}){
 const {lang,section,slug}=await params; const locale=lang==="en"?"en":"fr";
 if(section!=="actualites") notFound();
 const item=latestNews.find((n)=>n.slug===slug); if(!item) notFound();
 return <main><header className="header"><Link className="brand" href={"/"+locale}>NIGER<span>INFO</span></Link><nav><Link href={"/"+locale+"/actualites"}>{locale==="fr"?"Actualités":"News"}</Link><Link href={locale==="fr"?"/en/actualites/"+slug:"/fr/actualites/"+slug}>{locale==="fr"?"English":"Français"}</Link></nav></header><article className="article"><p className="eyebrow">{locale==="fr"?item.category:"News"} · {item.date}</p><h1>{item.title}</h1><Image src={item.image} alt={item.title} width={1200} height={750} unoptimized/><p className="intro">{locale==="fr"?"Cette fiche reprend les informations publiques de référencement de l’article. Le texte intégral et les éléments éditoriaux seront importés lors de la migration autorisée des contenus.":"This page currently contains the public article metadata. The full editorial text and related assets will be imported as the authorized content migration proceeds."}</p><Link className="cta" href={"/"+locale+"/actualites"}>{locale==="fr"?"Retour aux actualités":"Back to news"}</Link></article><footer><Link className="brand" href={"/"+locale}>NIGER<span>INFO</span></Link></footer></main>;
}
