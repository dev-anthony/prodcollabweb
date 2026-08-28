import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Placeholder ProdCollab wordmark. Swap the mark for a real asset when
 * brand files are available — the API here (className, showWordmark) can
 * stay the same.
 */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className="grid size-7 shrink-0 place-items-center rounded-[7px] bg-primary text-primary-foreground"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="translate-y-[0.5px]"
        >
          <path
            d="M3 11.5V4.5a1 1 0 0 1 1-1h2.2a2.3 2.3 0 0 1 0 4.6H5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="11.5" cy="10.5" r="2" fill="currentColor" />
        </svg>
      </span>
      {showWordmark ? (
        <span className="text-[0.95rem] font-semibold tracking-[-0.01em]">
          ProdCollab
        </span>
      ) : null}
    </span>
  );
}
