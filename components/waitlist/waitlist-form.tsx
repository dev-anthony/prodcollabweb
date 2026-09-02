"use client";

import * as React from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

type State =
  | { status: "idle" | "loading" }
  | { status: "error"; message: string }
  | { status: "done"; message: string };

export function WaitlistForm({
  source = "website",
  className,
}: {
  source?: string;
  className?: string;
}) {
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState(""); // honeypot
  const [state, setState] = React.useState<State>({ status: "idle" });

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (state.status === "loading") return;
    setState({ status: "loading" });

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company, source }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        alreadyOnList?: boolean;
      };

      if (!res.ok) {
        setState({
          status: "error",
          message: data.error ?? "Something went wrong. Please try again.",
        });
        return;
      }

      setState({
        status: "done",
        message: data.alreadyOnList
          ? "You're already on the list — we'll be in touch."
          : "You're on the list. We'll email you when it's ready.",
      });
      setEmail("");
    } catch {
      setState({
        status: "error",
        message: "Couldn't reach the server. Check your connection.",
      });
    }
  }

  if (state.status === "done") {
    return (
      <p
        className={cn(
          "flex items-center gap-2 text-sm font-medium text-success",
          className,
        )}
        role="status"
      >
        <Check className="size-4 shrink-0" />
        {state.message}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("w-full", className)} noValidate>
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="hidden"
        />
        <label className="sr-only" htmlFor={`waitlist-${source}`}>
          Email address
        </label>
        <input
          id={`waitlist-${source}`}
          type="email"
          required
          placeholder="you@studio.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state.status === "error") setState({ status: "idle" });
          }}
          className="h-11 flex-1 rounded-md border border-border bg-input px-3.5 text-sm outline-none placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
        />
        <button
          type="submit"
          disabled={state.status === "loading"}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {state.status === "loading" ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              Join the waitlist
              <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </div>
      {state.status === "error" ? (
        <p className="mt-2 text-xs text-destructive" role="alert">
          {state.message}
        </p>
      ) : (
        <p className="mt-2 text-xs text-muted-foreground">
          One email when ProdCollab opens up. No spam.
        </p>
      )}
    </form>
  );
}
