import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function getSupabase() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase not configured");
  return createClient(url, key);
}

// POST /api/mood
// Body: { session_id, phase, mood_score, text_content?, local_date? }
export async function POST(req: NextRequest) {
  let body: {
    session_id: string;
    phase: "pre" | "post";
    mood_score: number;
    text_content?: string;
    local_date?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const { session_id, phase, mood_score, text_content, local_date } = body;

  if (!session_id || !phase || mood_score == null) {
    return NextResponse.json({ error: "missing required fields" }, { status: 400 });
  }
  if (phase !== "pre" && phase !== "post") {
    return NextResponse.json({ error: "phase must be pre or post" }, { status: 400 });
  }
  if (mood_score < 0 || mood_score > 4) {
    return NextResponse.json({ error: "mood_score must be 0-4" }, { status: 400 });
  }

  const supabase = getSupabase();
  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("feelings_logs")
    .insert({
      session_id,
      phase,
      text_content: text_content || null,
      performed_at: now,
      local_date: local_date || null,
      meta: {
        scale: mood_score,
        source: "wateringmygrass",
      },
    })
    .select("id, session_id, phase, meta, performed_at")
    .single();

  if (error) {
    console.error("mood insert error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, entry: data });
}

// GET /api/mood?session_id=xxx
export async function GET(req: NextRequest) {
  const session_id = req.nextUrl.searchParams.get("session_id");
  if (!session_id) {
    return NextResponse.json({ error: "session_id required" }, { status: 400 });
  }

  const supabase = getSupabase();

  const { data, error } = await supabase
    .from("feelings_logs")
    .select("id, phase, meta, text_content, performed_at")
    .eq("session_id", session_id)
    .order("performed_at", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ entries: data });
}
