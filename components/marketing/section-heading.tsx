import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
      data-aos="fade-up"
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <Heading
        className={cn(
          "text-balance text-3xl font-semibold leading-[1.12] tracking-[-0.02em] sm:text-4xl",
          align === "center" && "max-w-2xl",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "text-balance text-base leading-relaxed text-muted-foreground sm:text-lg",
            align === "center" ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
