import { RotateCcw } from "lucide-react";

import { cn } from "@/lib/utils";
import { AppWindow } from "@/components/product/app-window";

const entries = [
  { note: "Pre-master export", who: "Maya", date: "Today", files: "4 files" },
  { note: "Added synth layer", who: "You", date: "Yesterday", files: "2 files" },
  { note: "Mix update", who: "Dez", date: "2 days ago", files: "6 files" },
  { note: "New drum arrangement", who: "Maya", date: "4 days ago", files: "3 files" },
  { note: "Vocal revision", who: "Dez", date: "Last week", files: "1 file" },
];

export function VersionHistoryPanel({ className }: { className?: string }) {
  return (
    <AppWindow title="ProdCollab — Version history" className={className}>
      <div className="divide-y divide-border">
        {entries.map((entry, i) => (
          <div
            key={entry.note}
            className="flex items-center gap-4 px-4 py-3.5 sm:px-5"
          >
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "size-2.5 rounded-full",
                  i === 0 ? "bg-primary" : "bg-muted-foreground/40",
                )}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{entry.note}</p>
              <p className="text-xs text-muted-foreground">
                {entry.who} · {entry.date} · {entry.files}
              </p>
            </div>
            <button
              type="button"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-[0.7rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <RotateCcw className="size-3" />
              Restore
            </button>
          </div>
        ))}
      </div>
    </AppWindow>
  );
}
