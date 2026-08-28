import type { Metadata } from "next";

import { PageHeader } from "@/components/marketing/page-header";
import { Section } from "@/components/marketing/section";
import { DownloadCta } from "@/components/marketing/download-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "ProdCollab is a collaboration workspace built for music production — so producers can work together without changing how they make music.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A collaboration workspace built for music production"
        description="Not a DAW. Not a plugin. A layer that keeps a production connected while everyone keeps their own workflow."
      />

      <Section>
        <div className="mx-auto max-w-2xl space-y-6 text-[0.98rem] leading-relaxed text-muted-foreground">
          <p data-aos="fade-up">
            Collaborating on a production usually means zipping folders, renaming
            bounces and hoping everyone is working from the current version.
            The music stops while the file coordination happens.
          </p>
          <p data-aos="fade-up">
            ProdCollab was built to take that part off the table. You choose a
            local project folder and keep producing the way you always have.
            When a collaborator shares new work, you're told — and you decide
            when to bring it into your session.
          </p>
          <p data-aos="fade-up">
            Underneath, ProdCollab does careful work to protect local changes,
            handle files that collide and keep a history of the production you
            can move through. None of that should be your problem. You have a
            production, your collaborator has a production, and ProdCollab keeps
            the work connected.
          </p>
          <p data-aos="fade-up">
            It runs as a desktop app for Windows today. That's the focus: make
            it excellent for producers working on real projects together.
          </p>
        </div>
      </Section>

      <DownloadCta />
    </>
  );
}
