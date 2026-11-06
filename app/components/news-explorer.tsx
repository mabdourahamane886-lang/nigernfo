"use client";

import { useMemo, useState } from "react";

const categories = ["Toutes", "Politique", "Économie", "Société", "Sport", "Culture", "Technologie", "International"];
const stories = [
 {title:"Le Niger renforce ses partenariats économiques et énergétiques",category:"Économie",date:"6 novembre 2026",image:"https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010686279-a375d546.jpg",excerpt:"Les acteurs publics et privés poursuivent les échanges autour des priorités économiques du pays."},
 {title:"Niamey accueille de nouvelles rencontres culturelles",category:"Culture",date:"5 novembre 2026",image:"https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010674976-228f67cd.jpg",excerpt:"Une programmation met en valeur les initiatives et les talents culturels nigériens."},
 {title:"Les initiatives locales au cœur de l’actualité sociale",category:"Société",date:"5 novembre 2026",image:"https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010666888-f735925a.jpg",excerpt:"Associations et communautés développent des actions au service des populations."},
 {title:"Le sport nigérien prépare ses prochaines échéances",category:"Sport",date:"4 novembre 2026",image:"https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010640181-965a1bc2.jpg",excerpt:"Clubs et fédérations poursuivent leur préparation pour les compétitions à venir."},
 {title:"Les débats politiques au centre des échanges",category:"Politique",date:"4 novembre 2026",image:"https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010686279-a375d546.jpg",excerpt:"Les principaux sujets institutionnels et politiques font l’objet de discussions."},
 {title:"Le numérique ouvre de nouvelles perspectives",category:"Technologie",date:"3 novembre 2026",image:"https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010674976-228f67cd.jpg",excerpt:"Les usages numériques progressent dans les services et l’entrepreneuriat."}
];

export function NewsExplorer() {
 const [category,setCategory] = useState("Toutes");
 const [query,setQuery] = useState("");
 const [page,setPage] = useState(1);
 const filtered = useMemo(()=>stories.filter(s=>(category==="Toutes"||s.category===category)&& (s.title+" "+s.excerpt).toLowerCase().includes(query.toLowerCase())),[category,query]);
 return <section className="news-section" id="actualites">
  <div className="section-heading"><div><p className="eyebrow">LE FIL DE L’INFORMATION</p><h2>Dernières actualités</h2></div><span>{filtered.length} articles affichés</span></div>
  <label className="search-box"><span>⌕</span><input value={query} onChange={e=>{setQuery(e.target.value);setPage(1)}} placeholder="Rechercher une actualité..." /></label>
  <div className="filter-row" aria-label="Filtrer les actualités">{categories.map(c=><button key={c} className={category===c?"filter active":"filter"} onClick={()=>{setCategory(c);setPage(1)}}>{c}</button>)}</div>
  <div className="news-grid">{filtered.slice((page-1)*3,page*3).map((s,i)=><article className="news-card" key={s.title}><a href={"/actualites/"+(i+1)}><img src={s.image} alt="" /><div className="news-copy"><span className="news-category">{s.category}</span><small>{s.date}</small><h3>{s.title}</h3><p>{s.excerpt}</p><b>Lire la suite ↗</b></div></a></article>)}</div>
  {filtered.length===0&&<p className="empty-state">Aucun article ne correspond à cette recherche.</p>}
  <div className="pagination"><button disabled={page===1} onClick={()=>setPage(p=>p-1)}>Précédent</button><span>Page {page} / {Math.max(1,Math.ceil(filtered.length/3))}</span><button disabled={page>=Math.ceil(filtered.length/3)} onClick={()=>setPage(p=>p+1)}>Suivant</button></div>
 </section>;
}

export const navItems = [
 ["Accueil","/"],["Actualités","/actualites"],["Événements","/evenements"],["Émissions","/emissions"],["Emplois","/emplois"],["Appels d’offres","/appels-offres"],["Publicité","/publicite"]
];
