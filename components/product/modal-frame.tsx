import * as React from "react";
import { ChevronDown, X } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Static representation of a ProdCollab in-app dialog: a dimmed studio
 * workspace behind a centered panel. Used for the workflow mockups. Adapts
 * to its own width via @container.
 */
export function ModalFrame({
  eyebrow,
  icon: Icon,
  title,
  subtitle,
  footer,
  children,
  className,
}: {
  eyebrow?: string;
  icon?: React.ElementType;
  title: string;
  subtitle?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "@container relative overflow-hidden rounded-xl border border-border bg-card shadow-elev-lg",
        className,
      )}
    >
      {/* dimmed workspace behind the dialog */}
      <div aria-hidden className="linegrid absolute inset-0 opacity-[0.35]" />
      <div aria-hidden className="absolute inset-0 bg-background/70" />

      <div className="relative m-3 rounded-lg border border-border bg-popover @sm:m-5">
        <div className="flex items-start gap-3 border-b border-border p-4 @sm:p-5">
          {Icon ? (
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
              <Icon className="size-4" />
            </span>
          ) : null}
          <div className="min-w-0 flex-1">
            {eyebrow ? (
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-primary">
                {eyebrow}
              </p>
            ) : null}
            <p className="text-sm font-semibold tracking-[-0.01em]">{title}</p>
            {subtitle ? (
              <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>
            ) : null}
          </div>
          <span className="grid size-6 shrink-0 place-items-center rounded-md text-muted-foreground/60">
            <X className="size-3.5" />
          </span>
        </div>

        <div className="p-4 @sm:p-5">{children}</div>

        {footer ? (
          <div className="flex items-center gap-2 border-t border-border p-4 @sm:p-5">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function FieldLabel({
  label,
  required,
}: {
  label: string;
  required?: boolean;
}) {
  return (
    <p className="text-xs font-medium">
      {label}
      {required ? <span className="text-primary"> *</span> : null}
    </p>
  );
}

export function FakeInput({
  label,
  value,
  placeholder,
  hint,
  required,
}: {
  label: string;
  value?: string;
  placeholder?: string;
  hint?: string;
  required?: boolean;
}) {
  return (
    <div>
      <FieldLabel label={label} required={required} />
      <div className="mt-1.5 rounded-md border border-border bg-input px-3 py-2 text-xs">
        {value ? (
          <span>{value}</span>
        ) : (
          <span className="text-muted-foreground/60">{placeholder}</span>
        )}
      </div>
      {hint ? (
        <p className="mt-1 text-[0.65rem] text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

export function FakeSelect({
  label,
  value,
  required,
}: {
  label: string;
  value: string;
  required?: boolean;
}) {
  return (
    <div>
      <FieldLabel label={label} required={required} />
      <div className="mt-1.5 flex items-center justify-between gap-2 rounded-md border border-border bg-input px-3 py-2 text-xs">
        <span>{value}</span>
        <ChevronDown className="size-3.5 shrink-0 text-muted-foreground/70" />
      </div>
    </div>
  );
}

export function FakeButton({
  children,
  tone = "muted",
  className,
}: {
  children: React.ReactNode;
  tone?: "primary" | "muted" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold",
        tone === "primary" && "bg-primary text-primary-foreground",
        tone === "muted" && "bg-secondary text-secondary-foreground",
        tone === "outline" && "border border-border text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
