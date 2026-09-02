import * as React from "react";
import {
  History,
  LayoutDashboard,
  Music4,
  Settings,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { LogoMark, LogoWordmark } from "@/components/brand/logo";

type NavItem =
  | "Dashboard"
  | "Projects"
  | "Collaborations"
  | "Version history"
  | "Settings";

const nav: { label: NavItem; icon: React.ElementType }[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Projects", icon: Music4 },
  { label: "Collaborations", icon: Users },
  { label: "Version history", icon: History },
  { label: "Settings", icon: Settings },
];

/**
 * A faithful frame for the ProdCollab desktop app — sidebar navigation,
 * signed-in footer and a slim window bar — used to host the UI mockups
 * across the site. Visual only; nothing here is interactive. The layout
 * adapts to its own width (@container), not the viewport, so it looks
 * right whether it's a hero visual or a full-width panel.
 */
export function AppShell({
  active = "Collaborations",
  user = "anthony joseph",
  className,
  children,
}: {
  active?: NavItem;
  user?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "@container overflow-hidden rounded-xl border border-border bg-card shadow-elev-lg",
        className,
      )}
    >
      {/* window bar */}
      <div className="flex items-center justify-between border-b border-border bg-surface-2/50 px-3.5 py-2">
        <span className="inline-flex items-center gap-2 text-[0.7rem] font-medium text-muted-foreground">
          <LogoMark className="h-3.5 w-auto text-primary" />
          ProdCollab
        </span>
        <span
          className="flex items-center gap-3 text-muted-foreground/50"
          aria-hidden
        >
          <span className="h-px w-2.5 bg-current" />
          <span className="size-2 border border-current" />
          <span className="relative size-2.5">
            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 rotate-45 bg-current" />
            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 -rotate-45 bg-current" />
          </span>
        </span>
      </div>

      <div className="grid grid-cols-1 @lg:grid-cols-[152px_1fr]">
        {/* sidebar */}
        <aside className="hidden flex-col border-r border-border bg-surface-1/40 p-2.5 @lg:flex">
          <div className="flex items-center gap-1.5 px-1.5 py-1">
            <LogoMark className="h-4 w-auto text-primary" />
            <LogoWordmark className="h-[0.7rem] w-auto" />
          </div>

          <nav className="mt-3 flex flex-col gap-0.5">
            {nav.map(({ label, icon: Icon }) => {
              const isActive = label === active;
              return (
                <span
                  key={label}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5 text-[0.72rem]",
                    isActive
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground",
                  )}
                >
                  <Icon className="size-3.5 shrink-0" />
                  <span className="truncate">{label}</span>
                </span>
              );
            })}
          </nav>

          <div className="mt-auto border-t border-border pt-2.5">
            <div className="flex items-center gap-2 px-1">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-secondary text-[0.58rem] font-semibold uppercase">
                {user.slice(0, 1)}
              </span>
              <span className="min-w-0 flex-1 truncate text-[0.7rem] text-muted-foreground">
                {user}
              </span>
              <span className="size-1.5 shrink-0 rounded-full bg-success" />
            </div>
          </div>
        </aside>

        {/* main — its own container so hosted views measure this area */}
        <div className="@container min-w-0 p-4 @lg:p-5">{children}</div>
      </div>
    </div>
  );
}
