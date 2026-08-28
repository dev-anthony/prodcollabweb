import { ArrowDownToLine, Check, Folder, Music2, Radio } from "lucide-react";

import { cn } from "@/lib/utils";
import { AppWindow, Annotation } from "@/components/product/app-window";

const activity = [
  { who: "Maya", note: "New drum arrangement", files: "3 files", tone: "primary" },
  { who: "You", note: "Reworked the low end", files: "2 files", tone: "muted" },
  { who: "Dez", note: "Vocal take — verse 2", files: "1 file", tone: "muted" },
];

export function SessionShowcase({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <AppWindow
        title="ProdCollab — Midnight Drive"
        toolbar={
          <span className="hidden items-center gap-1.5 text-[0.65rem] font-medium text-success sm:inline-flex">
            <Radio className="size-3" /> Linked
          </span>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-[168px_1fr]">
          {/* sidebar */}
          <aside className="hidden flex-col gap-1 border-r border-border bg-surface-1/60 p-3 sm:flex">
            <p className="px-2 pb-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Productions
            </p>
            {["Midnight Drive", "Palm Season", "Loop ideas"].map((p, i) => (
              <span
                key={p}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs",
                  i === 0
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground",
                )}
              >
                <Music2 className="size-3.5" />
                {p}
              </span>
            ))}
            <div className="mt-3 rounded-md border border-border bg-card p-2.5">
              <p className="flex items-center gap-1.5 text-[0.65rem] text-muted-foreground">
                <Folder className="size-3" /> Project folder
              </p>
              <p className="mt-1 truncate text-[0.65rem] text-muted-foreground/70">
                D:/Music/Midnight Drive
              </p>
            </div>
          </aside>

          {/* main */}
          <div className="p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Session activity</p>
                <p className="text-xs text-muted-foreground">
                  Everyone working from their own setup
                </p>
              </div>
              <div className="flex -space-x-1.5">
                {["M", "D", "Y"].map((a) => (
                  <span
                    key={a}
                    className="grid size-6 place-items-center rounded-full border border-card bg-secondary text-[0.6rem] font-semibold"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {activity.map((item) => (
                <div
                  key={item.note}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface-1/50 px-3 py-2.5"
                >
                  <span
                    className={cn(
                      "grid size-7 shrink-0 place-items-center rounded-full text-[0.6rem] font-semibold",
                      item.tone === "primary"
                        ? "bg-primary/15 text-[color:var(--primary)]"
                        : "bg-secondary text-muted-foreground",
                    )}
                  >
                    {item.who.slice(0, 1)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-medium">{item.note}</p>
                    <p className="text-[0.65rem] text-muted-foreground">
                      {item.who} · {item.files}
                    </p>
                  </div>
                  {item.tone === "primary" ? (
                    <span className="ml-auto inline-flex items-center gap-1 rounded-md bg-primary px-2 py-1 text-[0.6rem] font-semibold text-primary-foreground">
                      <ArrowDownToLine className="size-3" /> Bring in
                    </span>
                  ) : (
                    <Check className="ml-auto size-3.5 text-success" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2.5">
              <div>
                <p className="text-xs font-medium">Local changes</p>
                <p className="text-[0.65rem] text-muted-foreground">
                  2 files ready to share
                </p>
              </div>
              <span className="rounded-md border border-border px-2 py-1 text-[0.6rem] font-semibold text-muted-foreground">
                Share latest work
              </span>
            </div>
          </div>
        </div>
      </AppWindow>

      {/* floating annotations */}
      <div className="pointer-events-none absolute -left-3 top-16 hidden lg:block" data-aos="fade-right" data-aos-delay="200">
        <Annotation tone="primary">New revision</Annotation>
      </div>
      <div className="pointer-events-none absolute -right-4 bottom-24 hidden lg:block" data-aos="fade-left" data-aos-delay="300">
        <Annotation tone="warning">Local changes</Annotation>
      </div>

      <div
        className="absolute -bottom-6 right-4 w-60 rounded-xl border border-border bg-popover p-3 shadow-elev-lg sm:right-8"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-primary/15 pulse-ring">
            <ArrowDownToLine className="size-3.5 text-[color:var(--primary)]" />
          </span>
          <div>
            <p className="text-xs font-semibold">Maya shared new work</p>
            <p className="text-[0.68rem] text-muted-foreground">
              New drum arrangement · Midnight Drive
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
