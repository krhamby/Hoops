// ============================================================
// Supabase configuration for multiplayer (Versus mode).
//
// Supabase is OPTIONAL. Solo modes never touch this module's
// client; Versus checks isConfigured() and shows setup
// instructions when it returns false.
//
// Resolution order:
//   1. Build-time env vars  VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY
//      (injected by Vite, e.g. from GitHub Actions repo variables)
//   2. localStorage overrides  hoops.supabaseUrl / hoops.supabaseAnonKey
//      (set from the in-app Versus settings panel)
// ============================================================

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const LS_URL_KEY = "hoops.supabaseUrl";
const LS_ANON_KEY = "hoops.supabaseAnonKey";

/** Safely read Vite build-time env (guards non-Vite/test environments). */
function readEnv(name: string): string {
  try {
    const env = (import.meta as unknown as {
      env?: Record<string, unknown>;
    }).env;
    const value = env?.[name];
    return typeof value === "string" ? value.trim() : "";
  } catch {
    return "";
  }
}

/** Safely read localStorage (guards SSR / privacy modes). */
function readLocal(key: string): string {
  try {
    return (window.localStorage.getItem(key) ?? "").trim();
  } catch {
    return "";
  }
}

interface ResolvedConfig {
  url: string;
  anonKey: string;
  source: "env" | "local" | "none";
}

function resolveConfig(): ResolvedConfig {
  const envUrl = readEnv("VITE_SUPABASE_URL");
  const envKey = readEnv("VITE_SUPABASE_ANON_KEY");
  if (envUrl && envKey) {
    return { url: envUrl, anonKey: envKey, source: "env" };
  }

  const localUrl = readLocal(LS_URL_KEY);
  const localKey = readLocal(LS_ANON_KEY);
  if (localUrl && localKey) {
    return { url: localUrl, anonKey: localKey, source: "local" };
  }

  return { url: "", anonKey: "", source: "none" };
}

/** True when a Supabase URL + anon key are available from any source. */
export function isConfigured(): boolean {
  return resolveConfig().source !== "none";
}

/** Where the active configuration comes from. */
export function getConfigSource(): "env" | "local" | "none" {
  return resolveConfig().source;
}

// Singleton client, keyed by the config that created it so a
// setLocalConfig()/clearLocalConfig() call invalidates it without
// requiring a page reload (though a reload is also safe).
let client: SupabaseClient | null = null;
let clientKey = "";

/** Lazily-created singleton Supabase client, or null when unconfigured. */
export function getSupabase(): SupabaseClient | null {
  const cfg = resolveConfig();
  if (cfg.source === "none") {
    client = null;
    clientKey = "";
    return null;
  }
  const key = `${cfg.url}\n${cfg.anonKey}`;
  if (!client || clientKey !== key) {
    client = createClient(cfg.url, cfg.anonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    clientKey = key;
  }
  return client;
}

/**
 * Persist a localStorage override (used by the in-app Versus settings
 * panel). Survives reloads; build-time env vars still win if present.
 */
export function setLocalConfig(url: string, anonKey: string): void {
  try {
    window.localStorage.setItem(LS_URL_KEY, url.trim());
    window.localStorage.setItem(LS_ANON_KEY, anonKey.trim());
  } catch {
    // localStorage unavailable; nothing to persist.
  }
  // Force the singleton to be rebuilt on next getSupabase().
  client = null;
  clientKey = "";
}

/** Remove the localStorage override. */
export function clearLocalConfig(): void {
  try {
    window.localStorage.removeItem(LS_URL_KEY);
    window.localStorage.removeItem(LS_ANON_KEY);
  } catch {
    // localStorage unavailable; nothing to clear.
  }
  client = null;
  clientKey = "";
}
