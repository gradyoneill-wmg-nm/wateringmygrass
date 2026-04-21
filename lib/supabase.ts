// Legacy singleton used by LiveSessionCounter and other read-only client components.
// New code should import from @/lib/supabase/client (browser) or @/lib/supabase/server (server).
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  url && key ? createClient(url, key) : null;
