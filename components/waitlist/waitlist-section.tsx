import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { WaitlistForm } from "@/components/waitlist/waitlist-form";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="scroll-mt-20 border-t border-border">
      <Container className="py-20 sm:py-28">
        <div
          className="mx-auto max-w-xl text-center"
          data-aos="fade-up"
        >
          <Badge>Early access</Badge>
          <h2 className="mt-5 text-balance text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
            Get in early
          </h2>
          <p className="mx-auto mt-3 max-w-md text-pretty text-muted-foreground">
            ProdCollab is being built with a small group of producers. Leave your
            email and we&apos;ll bring you in as we open more spots.
          </p>
          <div className="mt-7 text-left">
            <WaitlistForm source="home" />
          </div>
        </div>
      </Container>
    </section>
  );
}
