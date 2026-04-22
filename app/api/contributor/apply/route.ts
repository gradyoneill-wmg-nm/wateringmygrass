import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const VALID_TAGS = [
  "TM", "Gamma", "HRV", "Frequency", "Breathwork",
  "Personal", "Beginner", "Analysis", "Research", "Community",
] as const;

function getSupabase() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

// POST /api/contributor/apply
// Body: { name, email, title, background, pitch, links?, tags? }
export async function POST(req: NextRequest) {
  let body: {
    name?: string;
    email?: string;
    title?: string;
    background?: string;
    pitch?: string;
    links?: string;
    tags?: string[];
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const { name, email, title, background, pitch, links, tags } = body;

  if (!name?.trim() || !email?.trim() || !title?.trim() || !background?.trim() || !pitch?.trim()) {
    return NextResponse.json({ error: "missing required fields" }, { status: 400 });
  }

  if (!isValidEmail(email.trim())) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const sanitizedTags = (tags ?? []).filter((t) =>
    (VALID_TAGS as readonly string[]).includes(t)
  );

  const supabase = getSupabase();

  if (supabase) {
    const { error } = await supabase.from("contributor_applications").insert({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      title: title.trim(),
      background: background.trim(),
      pitch: pitch.trim(),
      links: links?.trim() || null,
      tags: sanitizedTags,
      status: "pending",
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error("contributor application insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } else {
    console.info("[contributor/apply] Supabase not configured. Would save:", { name, email, title });
  }

  return NextResponse.json({ ok: true });
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
