"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Theme is only known on the client; defer icon rendering until mount
    // to avoid a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} mode`
          : "Toggle color theme"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-grid size-10 place-items-center rounded-md border border-border bg-secondary/40 text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/70",
        className,
      )}
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-[1.05rem]" />
        ) : (
          <Moon className="size-[1.05rem]" />
        )
      ) : (
        <span className="size-[1.05rem]" />
      )}
    </button>
  );
}
