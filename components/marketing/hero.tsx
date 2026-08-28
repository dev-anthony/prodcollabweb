import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SessionShowcase } from "@/components/product/session-showcase";
import { download } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="dotgrid pointer-events-none absolute inset-0 opacity-60 mask-fade-b"
      />
      <Container className="relative grid gap-16 pb-24 pt-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12 lg:pb-28 lg:pt-24">
        <div className="max-w-xl" data-aos="fade-up">
          <Badge>Collaboration for music production</Badge>

          <h1 className="mt-6 text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.75rem] sm:leading-[1.08] lg:text-[3.3rem]">
            Make music together. Keep your workflow.
          </h1>

          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            ProdCollab keeps a production connected while everyone works from
            their own setup. Share sessions, stems, samples and revisions
            without changing the way you produce.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/download">Download for {download.platform}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/how-it-works">
                See how it works
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            {download.os} · Desktop app
          </p>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="120">
          <SessionShowcase />
        </div>
      </Container>
    </section>
  );
}
