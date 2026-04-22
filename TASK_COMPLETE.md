# Task: wire_supabase_auth

## Summary

Wired Supabase Auth into the Watering My Grass Next.js 16 App Router project. This involved:

1. Installing `@supabase/ssr` for proper cookie-based SSR authentication.
2. Creating SSR-aware Supabase client factories for both browser and server contexts.
3. Implementing login, signup, and logout as Next.js Server Actions.
4. Building a login/signup page styled to match the existing dark design system.
5. Adding an `/auth/callback` route handler for email confirmation and OAuth PKCE flows.
6. Creating `proxy.ts` (Next.js 16's replacement for `middleware.ts`) to protect `/crm/*` routes, redirecting unauthenticated users to `/login?next=<original-path>`.
7. Preserving backward compatibility in `lib/supabase.ts` (used by `LiveSessionCounter` and other read-only components).

## Files Created or Modified

| File | Action |
|------|--------|
| `lib/supabase/client.ts` | Created — `createBrowserClient()` wrapper for client components |
| `lib/supabase/server.ts` | Created — `createServerClient()` wrapper with `cookies()` for Server Components / Server Actions |
| `app/actions/auth.ts` | Created — `login`, `signup`, `logout` Server Actions |
| `app/login/page.tsx` | Created — login/signup page using `useActionState` |
| `app/auth/callback/route.ts` | Created — handles Supabase email confirm + OAuth PKCE code exchange |
| `proxy.ts` | Created — route protection for `/crm/*` (Next.js 16 Proxy, formerly Middleware) |
| `lib/supabase.ts` | Modified — added backward-compat comment |
| `.env.example` | Modified — added Supabase Auth dashboard configuration notes |
| `package.json` | Modified — added `@supabase/ssr` dependency |
| `package-lock.json` | Modified — lockfile updated |

## Git Commits

| Hash | Message |
|------|---------|
| `8b91b91` | 🐀 wire_supabase_auth: add Supabase Auth wiring for Next.js 16 App Router |

## URLs / Endpoints Created

| Route | Purpose |
|-------|---------|
| `GET /login` | Login / signup page |
| `GET /auth/callback?code=…` | Supabase email confirmation and OAuth callback |

## Setup Required (not automated — needs live Supabase project)

1. Set env vars in `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=<your-project-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
   NEXT_PUBLIC_SITE_URL=https://wateringmygrass.com
   ```
2. In Supabase Dashboard → Authentication → URL Configuration:
   - **Site URL**: `https://wateringmygrass.com`
   - **Redirect URLs**: add `https://wateringmygrass.com/auth/callback`

## Issues / Notes

- Next.js 16 deprecates `middleware.ts` in favor of `proxy.ts` with a named `proxy` export. The authentication guide in `node_modules/next/dist/docs/01-app/02-guides/authentication.md` and the Proxy file convention doc (`proxy.md`) were read before writing any code, per `AGENTS.md` instructions.
- The existing `lib/supabase.ts` singleton is preserved for backward compat with `LiveSessionCounter` and other unauthenticated read-only usages.

## Status: COMPLETED
