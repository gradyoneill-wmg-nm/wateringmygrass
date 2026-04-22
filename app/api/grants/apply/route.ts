import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function getSupabase() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

const VALID_CATEGORIES = ["veteran", "low-income", "school"] as const;
type Category = (typeof VALID_CATEGORIES)[number];

// POST /api/grants/apply
// Body: { name, email, category, message? }
export async function POST(req: NextRequest) {
  let body: {
    name?: string;
    email?: string;
    category?: string;
    message?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const { name, email, category, message } = body;

  if (!name?.trim() || !email?.trim() || !category) {
    return NextResponse.json({ error: "missing required fields" }, { status: 400 });
  }

  if (!isValidEmail(email.trim())) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  if (!VALID_CATEGORIES.includes(category as Category)) {
    return NextResponse.json(
      { error: `category must be one of: ${VALID_CATEGORIES.join(", ")}` },
      { status: 400 }
    );
  }

  const supabase = getSupabase();

  if (supabase) {
    const { error } = await supabase.from("grant_applications").insert({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      category,
      message: message?.trim() || null,
      status: "pending",
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error("grant application insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } else {
    console.info("[grants/apply] Supabase not configured. Would save:", { name, email, category });
  }

  return NextResponse.json({ ok: true });
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
