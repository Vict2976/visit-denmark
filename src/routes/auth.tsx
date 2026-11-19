import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/hej-guide-logo.png";

const searchSchema = z.object({ redirect: z.string().optional() });

export const Route = createFileRoute("/auth")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Sign in — Hej Copenhagen" },
      { name: "description", content: "Sign in to chat with the Hej Copenhagen AI travel guide and keep your conversation." },
      { property: "og:title", content: "Sign in — Hej Copenhagen" },
      { property: "og:description", content: "Create a free account to chat with the AI travel guide." },
    ],
  }),
  component: AuthPage,
});

const REDIRECT_KEY = "hej-auth-redirect";

/** Only allow same-origin relative paths as a post-login destination. */
function safePath(value: string | undefined | null): string {
  if (!value) return "/chat";
  try {
    const url = new URL(value, window.location.origin);
    if (url.origin !== window.location.origin) return "/chat";
    const path = url.pathname + url.search;
    return path.startsWith("/auth") ? "/chat" : path;
  } catch {
    return "/chat";
  }
}

function AuthPage() {
  const { redirect } = Route.useSearch();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  // Remember where to go after the email-confirmation round-trip, and leave once signed in.
  useEffect(() => {
    if (redirect) sessionStorage.setItem(REDIRECT_KEY, redirect);
    const go = () => {
      const target = safePath(redirect ?? sessionStorage.getItem(REDIRECT_KEY));
      sessionStorage.removeItem(REDIRECT_KEY);
      navigate({ href: target, replace: true });
    };
    void supabase.auth.getSession().then(({ data }) => {
      if (data.session) go();
    });
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (session && (event === "SIGNED_IN" || event === "INITIAL_SESSION")) go();
    });
    return () => data.subscription.unsubscribe();
  }, [redirect, navigate]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);
    if (mode === "signin") {
      const { error: err } = await supabase.auth.signInWithPassword({ email, password });
      if (err) setError(err.message);
    } else {
      const { data, error: err } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/auth` },
      });
      if (err) setError(err.message);
      else if (!data.session) setNotice("Check your email to confirm your account, then come back and sign in.");
    }
    setBusy(false);
  }

  return (
    <section className="mx-auto flex max-w-md flex-col px-4 py-16 sm:py-24">
      <img src={logo} alt="" width={56} height={56} className="size-14" />
      <h1 className="mt-6 text-3xl font-semibold">
        {mode === "signin" ? "Welcome back" : "Create your free account"}
      </h1>
      <p className="mt-2 text-muted-foreground">
        Sign in to chat with the AI travel guide. Your conversation is saved so you can pick it up on any device.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-3">
        <Input
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          aria-label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12"
        />
        <Input
          type="password"
          required
          minLength={6}
          autoComplete={mode === "signin" ? "current-password" : "new-password"}
          placeholder="Password"
          aria-label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-12"
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
        {notice && <p className="rounded-lg bg-primary-soft p-3 text-sm text-accent-foreground">{notice}</p>}
        <Button type="submit" variant="hero" size="xl" className="w-full" disabled={busy}>
          {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {mode === "signin" ? "New here?" : "Already have an account?"}{" "}
        <button
          type="button"
          className="font-semibold text-primary hover:underline"
          onClick={() => {
            setMode(mode === "signin" ? "signup" : "signin");
            setError(null);
            setNotice(null);
          }}
        >
          {mode === "signin" ? "Create an account" : "Sign in"}
        </button>
      </p>
    </section>
  );
}
