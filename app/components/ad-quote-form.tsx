"use client";
import { FormEvent, useState } from "react";

export function AdQuoteForm(){
 const [company,setCompany]=useState("");const [contact,setContact]=useState("");const [email,setEmail]=useState("");const [phone,setPhone]=useState("");const [budget,setBudget]=useState("À définir ensemble");const [format,setFormat]=useState("Bannière page d'accueil");const [message,setMessage]=useState("");
 function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const body=["Entreprise : "+company,"Contact : "+contact,"Email : "+email,"Téléphone : "+phone,"Budget : "+budget,"Format : "+format,"Message : "+message].join("\n");const href="mailto:nigerinfo227@gmail.com?subject="+encodeURIComponent("Demande de devis publicitaire — Niger Info")+"&body="+encodeURIComponent(body);window.location.href=href;}
 return <form className="quote-form" onSubmit={submit}>
  <label>Entreprise / organisation *<input required value={company} onChange={e=>setCompany(e.target.value)} placeholder="Nom de votre entreprise"/></label>
  <label>Nom du contact *<input required value={contact} onChange={e=>setContact(e.target.value)} placeholder="Votre nom"/></label>
  <label>Email professionnel *<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="nom@entreprise.com"/></label>
  <label>Téléphone<input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+227 ..."/></label>
  <label>Budget indicatif<select value={budget} onChange={e=>setBudget(e.target.value)}><option>Moins de 250 000 FCFA</option><option>250 000 – 500 000 FCFA</option><option>500 000 – 1 000 000 FCFA</option><option>Plus de 1 000 000 FCFA</option><option>À définir ensemble</option></select></label>
  <label>Format souhaité *<select value={format} onChange={e=>setFormat(e.target.value)}><option>Bannière page d'accueil</option><option>Encart accueil</option><option>Bannière dans les articles</option><option>Colonne latérale</option><option>Publicité vidéo</option><option>Publicité événementielle</option><option>Article sponsorisé</option></select></label>
  <label className="quote-message">Votre message<textarea rows={4} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Décrivez votre campagne, votre période et vos objectifs..."/></label>
  <button type="submit">Préparer ma demande ↗</button>
  <p>Votre application e-mail s’ouvrira avec les informations préremplies. L’envoi automatique depuis le site sera raccordé lorsque le service de messagerie du propriétaire sera configuré.</p>
 </form>;
}
