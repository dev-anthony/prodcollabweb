import { ArrowDownToLine } from "lucide-react";

import { cn } from "@/lib/utils";
import { CollabView } from "@/components/product/collab-view";

export function SessionShowcase({ className }: { className?: string }) {
  return (
    <div className={cn("relative pt-14 sm:pt-10", className)}>
      <CollabView />

      {/* incoming update — lands over the app like a desktop notification */}
      <div
        className="absolute top-0 right-0 z-10 w-[min(16rem,84%)] rounded-xl border border-border bg-popover p-3 shadow-elev-lg sm:-right-5"
        data-aos="fade-down"
        data-aos-delay="250"
      >
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-primary/15 pulse-ring">
            <ArrowDownToLine className="size-3.5 text-primary" />
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
