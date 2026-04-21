"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type AuthState =
  | { errors?: { email?: string[]; password?: string[] }; message?: string }
  | undefined;

export async function login(state: AuthState, formData: FormData): Promise<AuthState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors: { email?: string[]; password?: string[] } = {};
  if (!email) errors.email = ["Email is required."];
  if (!password) errors.password = ["Password is required."];
  if (Object.keys(errors).length) return { errors };

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { message: error.message };
  }

  redirect("/");
}

export async function signup(state: AuthState, formData: FormData): Promise<AuthState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors: { email?: string[]; password?: string[] } = {};
  if (!email) errors.email = ["Email is required."];
  if (!password || password.length < 8)
    errors.password = ["Password must be at least 8 characters."];
  if (Object.keys(errors).length) return { errors };

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    return { message: error.message };
  }

  return { message: "Check your email to confirm your account." };
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
