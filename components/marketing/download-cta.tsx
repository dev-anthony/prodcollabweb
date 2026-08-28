import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { download } from "@/lib/site";

export function DownloadCta({
  title = "Bring the session with you.",
  body = "ProdCollab is built for producers who want collaboration to stay close to the music.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-border">
      <Container className="py-24 sm:py-32">
        <div
          className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-16 text-center sm:px-16"
          data-aos="fade-up"
        >
          <div
            aria-hidden
            className="dotgrid pointer-events-none absolute inset-0 opacity-50 mask-fade-b"
          />
          <div className="relative mx-auto max-w-xl">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-balance text-muted-foreground">
              {body}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/download">Download for {download.platform}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/how-it-works">
                  Learn how it works
                  <ArrowRight />
                </Link>
              </Button>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              {download.os} · {download.fileType}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
