import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  let email: string | null = null;

  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim() : null;
  } else if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const form = await request.formData();
    const raw = form.get("email");
    email = typeof raw === "string" ? raw.trim() : null;
  }

  if (!email || !isValidEmail(email)) {
    return Response.json(
      { success: false, error: "A valid email address is required." },
      { status: 400 }
    );
  }

  // ConvertKit integration
  const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
  const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;

  if (CONVERTKIT_API_KEY && CONVERTKIT_FORM_ID) {
    const ckRes = await fetch(
      `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_KEY,
          email,
        }),
      }
    );

    if (!ckRes.ok) {
      const detail = await ckRes.text();
      console.error("ConvertKit error:", ckRes.status, detail);
      return Response.json(
        { success: false, error: "Subscription failed. Please try again." },
        { status: 502 }
      );
    }
  } else {
    // No ConvertKit credentials — log and succeed for dev/staging
    console.info("[subscribe] ConvertKit not configured. Would subscribe:", email);
  }

  // If the request was a form POST (browser-initiated), redirect back
  const referer = request.headers.get("referer");
  if (!contentType.includes("application/json") && referer) {
    const url = new URL(referer);
    url.searchParams.set("subscribed", "1");
    return Response.redirect(url.toString(), 303);
  }

  return Response.json({ success: true, email });
}

function isValidEmail(email: string): boolean {
  // RFC 5322-lite check
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
