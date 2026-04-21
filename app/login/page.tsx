"use client";

import { useActionState, useState } from "react";
import { login, signup, type AuthState } from "@/app/actions/auth";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loginState, loginAction, loginPending] = useActionState<AuthState, FormData>(
    login,
    undefined
  );
  const [signupState, signupAction, signupPending] = useActionState<AuthState, FormData>(
    signup,
    undefined
  );

  const state = mode === "login" ? loginState : signupState;
  const action = mode === "login" ? loginAction : signupAction;
  const pending = mode === "login" ? loginPending : signupPending;

  return (
    <main className="min-h-screen bg-[#0C0C0A] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-white text-xl tracking-widest uppercase font-light mb-1">
          Watering My Grass
        </h1>
        <p className="text-[#666] text-xs tracking-wider uppercase mb-8">
          {mode === "login" ? "Sign in to continue" : "Create your account"}
        </p>

        {state?.message && (
          <p
            className={`text-xs mb-4 ${
              state.message.toLowerCase().includes("check your email")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {state.message}
          </p>
        )}

        <form action={action} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-[#888] text-xs tracking-wider uppercase mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full bg-[#111] border border-[#222] text-white text-sm px-3 py-2 rounded focus:outline-none focus:border-[#444]"
            />
            {state?.errors?.email && (
              <p className="text-red-400 text-xs mt-1">{state.errors.email[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-[#888] text-xs tracking-wider uppercase mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              required
              className="w-full bg-[#111] border border-[#222] text-white text-sm px-3 py-2 rounded focus:outline-none focus:border-[#444]"
            />
            {state?.errors?.password && (
              <p className="text-red-400 text-xs mt-1">{state.errors.password[0]}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-white text-black text-xs tracking-widest uppercase py-2.5 rounded font-medium hover:bg-[#e0e0e0] transition-colors disabled:opacity-50"
          >
            {pending
              ? mode === "login"
                ? "Signing in…"
                : "Creating account…"
              : mode === "login"
              ? "Sign In"
              : "Create Account"}
          </button>
        </form>

        <p className="text-[#555] text-xs mt-6 text-center">
          {mode === "login" ? "No account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-[#888] hover:text-white transition-colors underline underline-offset-2"
          >
            {mode === "login" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </main>
  );
}
