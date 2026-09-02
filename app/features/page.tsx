import type { Metadata } from "next";

import { PageHeader } from "@/components/marketing/page-header";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { DownloadCta } from "@/components/marketing/download-cta";
import { VersionHistoryModal } from "@/components/product/version-history-modal";
import { ConflictPanel } from "@/components/product/conflict-panel";
import { CollabView } from "@/components/product/collab-view";
import { CreateProjectModal } from "@/components/product/create-project-modal";
import { featurePages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "How ProdCollab keeps a music production connected: shared productions, local project folders, a push-and-pull workflow, conflict protection, version history and more.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Everything that keeps the production connected"
        description="Grouped around what a producer actually does — not a list of mechanisms. You keep your DAW, your folder and your process."
      />

      <Section>
        <div
          className="mx-auto mb-16 max-w-3xl"
          data-aos="fade-up"
        >
          <CollabView />
        </div>
        <div className="space-y-px overflow-hidden rounded-xl border border-border bg-border">
          {featurePages.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col gap-4 bg-card p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8"
                data-aos="fade-up"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-secondary/50 text-primary">
                  <Icon className="size-5" />
                </span>
                <div className="sm:flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-semibold text-muted-foreground/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-lg font-semibold tracking-[-0.01em]">
                      {feature.title}
                    </h2>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface-1/50">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="Version history"
            title="Move through the production stage by stage"
            description="Restore an earlier state without losing what came after it."
          />
          <div data-aos="fade-up">
            <VersionHistoryModal />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="Getting started"
            title="Set up a production without touching infrastructure"
            description="Name it, connect your folder, choose who can see it. That's the whole setup."
          />
          <div data-aos="fade-up">
            <CreateProjectModal />
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface-1/50">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="Conflict protection"
            title="Your local work stays protected when two versions collide"
            description="Use remote, keep both, or use local — your call, every time."
          />
          <div data-aos="fade-up">
            <ConflictPanel />
          </div>
        </div>
      </Section>

      <DownloadCta title="Put it in your studio." />
    </>
  );
}
