import { GitCompareArrows, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { ModalFrame } from "@/components/product/modal-frame";

const choices = [
  { label: "Use remote", detail: "Take the incoming version" },
  { label: "Keep both", detail: "Save your work alongside it", active: true },
  { label: "Use local", detail: "Keep what you have" },
];

export function ConflictPanel({ className }: { className?: string }) {
  return (
    <ModalFrame
      className={className}
      eyebrow="Review changes"
      icon={GitCompareArrows}
      title="Two versions of drums_bus.wav"
      subtitle="You changed this file while a new version arrived."
    >
      <div className="flex items-start gap-3 rounded-lg border border-warning/40 bg-warning/10 px-3.5 py-3">
        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-warning" />
        <p className="text-xs leading-relaxed text-muted-foreground">
          Your local work is protected and won&apos;t be sent anywhere until you
          decide what should happen.
        </p>
      </div>

      <div className="mt-4 grid gap-2 @md:grid-cols-3">
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
                choice.active && "text-primary",
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
    </ModalFrame>
  );
}
