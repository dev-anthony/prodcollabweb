import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Reusable desktop-app chrome that matches the ProdCollab visual system:
 * near-black surface, restrained borders, compact title bar.
 */
export function AppWindow({
  title = "ProdCollab",
  className,
  children,
  toolbar,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
  toolbar?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-elev-lg",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-surface-2/60 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          {title}
        </span>
        {toolbar ? <div className="ml-auto">{toolbar}</div> : null}
      </div>
      {children}
    </div>
  );
}

export function Annotation({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "primary" | "success" | "warning";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] backdrop-blur-sm",
        tone === "default" &&
          "border-border bg-background/85 text-muted-foreground",
        tone === "primary" &&
          "border-primary/40 bg-primary/12 text-[color:var(--primary)]",
        tone === "success" &&
          "border-success/40 bg-success/12 text-[color:var(--success)]",
        tone === "warning" &&
          "border-warning/40 bg-warning/12 text-[color:var(--warning)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
