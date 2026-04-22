import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function getSupabase() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

// POST /api/rsvp
// Body: { name, email, timezone, attendance: "remote" | "nyc" }
export async function POST(req: NextRequest) {
  let body: {
    name?: string;
    email?: string;
    timezone?: string;
    attendance?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const { name, email, timezone, attendance } = body;

  if (!name?.trim() || !email?.trim() || !timezone || !attendance) {
    return NextResponse.json({ error: "missing required fields" }, { status: 400 });
  }

  if (!isValidEmail(email.trim())) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  if (attendance !== "remote" && attendance !== "nyc") {
    return NextResponse.json({ error: "attendance must be remote or nyc" }, { status: 400 });
  }

  const supabase = getSupabase();

  if (supabase) {
    const { error } = await supabase.from("april18_rsvps").upsert(
      {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        timezone,
        attendance,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "email" }
    );

    if (error) {
      console.error("rsvp insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } else {
    console.info("[rsvp] Supabase not configured. Would register:", { name, email, timezone, attendance });
  }

  // Also subscribe to newsletter via ConvertKit if configured
  const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
  const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;

  if (CONVERTKIT_API_KEY && CONVERTKIT_FORM_ID) {
    try {
      await fetch(
        `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            api_key: CONVERTKIT_API_KEY,
            email: email.trim().toLowerCase(),
            first_name: name.trim().split(" ")[0],
            fields: { timezone, attendance },
          }),
        }
      );
    } catch (err) {
      // Non-fatal — RSVP still saved
      console.error("ConvertKit subscribe error:", err);
    }
  }

  return NextResponse.json({ ok: true });
}

// GET /api/rsvp/count — public count for display
export async function GET() {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ count: 0 });
  }

  const { count, error } = await supabase
    .from("april18_rsvps")
    .select("id", { count: "exact", head: true });

  if (error) {
    return NextResponse.json({ count: 0 });
  }

  return NextResponse.json({ count: count ?? 0 });
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
