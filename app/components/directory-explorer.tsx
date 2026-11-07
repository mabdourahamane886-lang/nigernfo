"use client";

import { useMemo, useState } from "react";
import type { DirectoryItem } from "@/data/sections";

type Kind = "events" | "programmes" | "jobs" | "tenders";
const labels: Record<Kind,{title:string;search:string;firstFilter:string;secondFilter:string}> = {
 events:{title:"Événements",search:"Rechercher un événement...",firstFilter:"Type d’événement",secondFilter:"Ville"},
 programmes:{title:"Émissions",search:"Rechercher une émission...",firstFilter:"Format",secondFilter:""},
 jobs:{title:"Niger Info Emploi",search:"Rechercher une offre...",firstFilter:"Domaine",secondFilter:"Ville"},
 tenders:{title:"Appels d’offres",search:"Rechercher un appel d’offres...",firstFilter:"Secteur",secondFilter:"Ville"}
};
const options: Record<Kind,{first:string[];second:string[]}> = {
 events:{first:["Toutes","Conférence","Formation","Salon","Concert","Activité culturelle","Événement institutionnel"],second:["Toutes","Niamey","Zinder","Maradi","Agadez","Tahoua","Dosso","Tillabéri","Diffa","Arlit","Tout le pays"]},
 programmes:{first:["Toutes","Podcast","Vidéo","Interview","Débat","Chronique"],second:[]},
 jobs:{first:["Tous","Administration","Agriculture & élevage","BTP & génie civil","Banque & microfinance","Commerce & vente","Éducation & formation","Énergie & mines","Humanitaire & ONG","Informatique & numérique","Logistique & transport","Santé","Télécommunications"],second:["Toutes","Niamey","Zinder","Maradi","Agadez","Tahoua","Dosso","Tillabéri","Diffa","Arlit","Tout le pays"]},
 tenders:{first:["Tous","Travaux & BTP","Fournitures & équipements","Services","Études & conseil","Informatique","Énergie","Santé","Agriculture"],second:["Toutes","Niamey","Zinder","Maradi","Agadez","Tahoua","Dosso","Tillabéri","Diffa","Arlit","Tout le pays"]}
};

export function DirectoryExplorer({kind,items}:{kind:Kind;items:DirectoryItem[]}){
 const [query,setQuery]=useState("");const [first,setFirst]=useState(options[kind].first[0]);const [second,setSecond]=useState(options[kind].second[0]??"");const [sort,setSort]=useState("recent");
 const filtered=useMemo(()=>{
  const q=query.trim().toLocaleLowerCase("fr");
  const result=items.filter(item=>(first===options[kind].first[0]||item.category===first)&&(second===""||second===options[kind].second[0]||item.city===second)&&(!q||(item.title+" "+item.description+" "+item.category+" "+item.city).toLocaleLowerCase("fr").includes(q)));
  if(sort==="title")result.sort((a,b)=>a.title.localeCompare(b.title,"fr"));
  return result;
 },[items,query,first,second,sort,kind]);
 return <section className="news-section directory-section">
  <div className="section-heading"><div><p className="eyebrow">NIGER INFO · EXPLORER</p><h2>{labels[kind].title}</h2></div><span>{filtered.length} résultat(s)</span></div>
  <div className="directory-filters">
   <label className="search-box"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={labels[kind].search}/></label>
   <label className="directory-select"><span>{labels[kind].firstFilter}</span><select value={first} onChange={e=>setFirst(e.target.value)}>{options[kind].first.map(x=><option key={x}>{x}</option>)}</select></label>
   {options[kind].second.length>0&&<label className="directory-select"><span>{labels[kind].secondFilter}</span><select value={second} onChange={e=>setSecond(e.target.value)}>{options[kind].second.map(x=><option key={x}>{x}</option>)}</select></label>}
   {kind==="tenders"&&<label className="directory-select"><span>Trier par</span><select value={sort} onChange={e=>setSort(e.target.value)}><option value="recent">Plus récents</option><option value="title">Intitulé A–Z</option></select></label>}
  </div>
  {filtered.length>0?<div className="news-grid">{filtered.map(item=><article className="news-card directory-card" key={item.slug}><a href={item.href}><div className="directory-image">
    {item.videoUrl ? <video src={item.videoUrl} controls preload="metadata" playsInline aria-label={item.title} poster={item.image}/> : <img src={item.image} alt={item.title} loading="lazy"/>}
    {kind==="programmes"&&!item.videoUrl&&<span className="play-mark" aria-hidden="true">▶</span>}
   </div><div className="news-copy"><span className="news-category">{item.category}</span><small>{item.date}</small><h3>{item.title}</h3><p>{item.description}</p><div className="directory-meta">{item.extra&&<span>{item.extra}</span>}{item.status&&<span className="status-chip">{item.status}</span>}</div><b>{kind==="programmes"?"Écouter / regarder ↗":"Voir les détails ↗"}</b></div></a></article>)}</div>:<div className="empty-directory"><span>⌕</span><h3>{kind==="tenders"?"Aucun appel d’offres publié pour le moment":"Aucun résultat trouvé"}</h3><p>{kind==="tenders"?"Les nouveaux avis seront affichés ici dès leur publication.":"Essayez de modifier vos filtres ou votre recherche."}</p><button type="button" onClick={()=>{setQuery("");setFirst(options[kind].first[0]);setSecond(options[kind].second[0]??"")}}>Réinitialiser les filtres</button></div>}
 </section>;
}
