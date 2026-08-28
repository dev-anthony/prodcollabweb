import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="dotgrid pointer-events-none absolute inset-0 opacity-50 mask-fade-b"
      />
      <Container className="relative py-20 sm:py-24">
        <div className="max-w-2xl" data-aos="fade-up">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-balance text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
