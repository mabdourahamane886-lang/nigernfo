"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) { setStatus("Veuillez confirmer votre accord avant l’inscription."); return; }
    setBusy(true);
    setStatus("");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Inscription impossible pour le moment.");
      setStatus("Votre inscription à la newsletter Niger Info est confirmée.");
      setEmail("");
      setConsent(false);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Une erreur est survenue.");
    } finally { setBusy(false); }
  }

  return <div className="newsletter-note">
    <strong>Inscription à la newsletter</strong>
    <p>Recevez les principales actualités du Niger par e-mail. Vous pourrez vous désinscrire à tout moment.</p>
    <form onSubmit={submit}>
      <label htmlFor="newsletter-email">Votre adresse e-mail</label>
      <input id="newsletter-email" type="email" autoComplete="email" required maxLength={254} value={email} onChange={event => setEmail(event.target.value)} placeholder="nom@exemple.com" />
      <label className="newsletter-consent"><input type="checkbox" checked={consent} onChange={event => setConsent(event.target.checked)} required /> J’accepte de recevoir la newsletter Niger Info.</label>
      <button type="submit" disabled={busy}>{busy ? "Inscription…" : "M’inscrire"}</button>
      <p className="newsletter-status" role="status" aria-live="polite">{status}</p>
    </form>
  </div>;
}
