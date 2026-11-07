import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    if (body.consent !== true) return NextResponse.json({ error: "Le consentement est obligatoire." }, { status: 400 });
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Veuillez saisir une adresse e-mail valide." }, { status: 400 });
    }
    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!apiKey || !audienceId) return NextResponse.json({
      error: "Le service d’inscription n’est pas encore configuré. Merci de réessayer ultérieurement."
    }, { status: 503 });

    const upstream = await fetch(`https://api.resend.com/audiences/${encodeURIComponent(audienceId)}/contacts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email, unsubscribed: false }),
      cache: "no-store"
    });
    if (!upstream.ok) {
      const detail = await upstream.text();
      console.error("Newsletter provider error:", upstream.status, detail.slice(0, 500));
      if (upstream.status === 409) return NextResponse.json({ error: "Cette adresse est déjà inscrite." }, { status: 409 });
      return NextResponse.json({ error: "Impossible de confirmer l’inscription pour le moment." }, { status: 502 });
    }
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Requête invalide. Veuillez réessayer." }, { status: 400 });
  }
}
