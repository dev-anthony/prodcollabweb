import { ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { AppWindow } from "@/components/product/app-window";

const choices = [
  {
    label: "Use remote",
    detail: "Take the incoming version",
  },
  {
    label: "Keep both",
    detail: "Save your work alongside it",
    active: true,
  },
  {
    label: "Use local",
    detail: "Keep what you have",
  },
];

export function ConflictPanel({ className }: { className?: string }) {
  return (
    <AppWindow title="ProdCollab — Review changes" className={className}>
      <div className="p-4 sm:p-5">
        <div className="flex items-start gap-3 rounded-lg border border-warning/40 bg-warning/10 px-3.5 py-3">
          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[color:var(--warning)]" />
          <div>
            <p className="text-sm font-medium">
              Two versions of “drums_bus.wav”
            </p>
            <p className="text-xs text-muted-foreground">
              You changed this file locally while a new version arrived. Your
              local work is protected until you choose.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {choices.map((choice) => (
            <div
              key={choice.label}
              className={cn(
                "rounded-lg border px-3 py-3 text-center",
                choice.active
                  ? "border-primary bg-primary/10"
                  : "border-border bg-surface-1/50",
              )}
            >
              <p
                className={cn(
                  "text-xs font-semibold",
                  choice.active && "text-[color:var(--primary)]",
                )}
              >
                {choice.label}
              </p>
              <p className="mt-1 text-[0.65rem] leading-snug text-muted-foreground">
                {choice.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AppWindow>
  );
}
