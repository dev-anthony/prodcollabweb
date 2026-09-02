import { History, RotateCcw } from "lucide-react";

import { cn } from "@/lib/utils";
import { ModalFrame } from "@/components/product/modal-frame";

type Entry = {
  note: string;
  who: string;
  when: string;
  files: string;
  initial?: boolean;
};

const entries: Entry[] = [
  { note: "Pre-master export", who: "Maya", when: "Aug 18, 8:03 PM", files: "Midnight Drive master.wav" },
  { note: "Added synth layer", who: "You", when: "Aug 16, 7:34 PM", files: "3 files changed" },
  { note: "New drum arrangement", who: "You", when: "Aug 14, 1:52 PM", files: "drums_bus.wav +2" },
  { note: "Mix update", who: "Maya", when: "Aug 10, 8:03 PM", files: "6 files changed" },
  {
    note: "Initial project files",
    who: "Midnight Drive",
    when: "Aug 10, 8:01 PM",
    files: "Fireboy vibe reference.mp3",
    initial: true,
  },
];

export function VersionHistoryModal({ className }: { className?: string }) {
  return (
    <ModalFrame
      className={className}
      eyebrow="Version history"
      icon={History}
      title="Midnight Drive"
      subtitle="Every stage of the production, kept."
    >
      <div className="-m-1 max-h-[19rem] space-y-2 overflow-hidden p-1">
        {entries.map((entry) => (
          <div
            key={entry.note}
            className="flex items-center gap-3 rounded-lg border border-border bg-surface-1/50 px-3.5 py-3"
          >
            <span
              className={cn(
                "size-2 shrink-0 rounded-full",
                entry.initial ? "bg-muted-foreground/40" : "bg-primary",
              )}
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold">{entry.note}</p>
              <p className="text-[0.68rem] text-muted-foreground">
                {entry.who} · {entry.when}
              </p>
              <p className="truncate text-[0.65rem] text-muted-foreground/70">
                {entry.files}
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-[0.68rem] font-medium text-primary">
              <RotateCcw className="size-3" />
              Restore
            </span>
          </div>
        ))}
      </div>
    </ModalFrame>
  );
}
