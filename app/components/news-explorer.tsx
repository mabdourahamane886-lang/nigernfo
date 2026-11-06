"use client";

import { useMemo, useState } from "react";
import { latestNews } from "@/data/news";

const categories = ["Toutes", "Politique", "Économie", "Société", "Sport", "Culture", "Technologie", "International"];

export function NewsExplorer() {
 const [category,setCategory] = useState("Toutes");
 const [query,setQuery] = useState("");
 const [page,setPage] = useState(1);
 const filtered = useMemo(()=>latestNews.filter(s=>(category==="Toutes"||s.category===category)&& (s.title+" "+s.category).toLowerCase().includes(query.toLowerCase())),[category,query]);
 const pages=Math.max(1,Math.ceil(filtered.length/6));
 return <section className="news-section" id="actualites">
  <div className="section-heading"><div><p className="eyebrow">LE FIL DE L’INFORMATION</p><h2>Dernières actualités</h2></div><span>{filtered.length} article(s)</span></div>
  <label className="search-box"><span>⌕</span><input value={query} onChange={e=>{setQuery(e.target.value);setPage(1)}} placeholder="Rechercher une actualité..." /></label>
  <div className="filter-row" aria-label="Filtrer les actualités">{categories.map(c=><button type="button" key={c} className={category===c?"filter active":"filter"} onClick={()=>{setCategory(c);setPage(1)}}>{c}</button>)}</div>
  <div className="news-grid">{filtered.slice((page-1)*6,page*6).map(s=><article className="news-card" key={s.slug}><a href={"/fr/actualites/"+s.slug}><img src={s.image} alt="" /><div className="news-copy"><span className="news-category">{s.category}</span><small>{s.date}</small><h3>{s.title}</h3><b>Lire la suite ↗</b></div></a></article>)}</div>
  {filtered.length===0&&<p className="empty-state">Aucun article ne correspond à cette recherche.</p>}
  <div className="pagination"><button type="button" disabled={page===1} onClick={()=>setPage(p=>p-1)}>Précédent</button><span>Page {page} / {pages}</span><button type="button" disabled={page>=pages} onClick={()=>setPage(p=>p+1)}>Suivant</button></div>
 </section>;
}

export const navItems = [
 ["Accueil","/"],["Actualités","/fr/actualites"],["Événements","/fr/evenements"],["Émissions","/fr/emissions"],["Emplois","/fr/emplois"],["Appels d’offres","/fr/appels-offres"],["Publicité","/fr/publicite"]
];
