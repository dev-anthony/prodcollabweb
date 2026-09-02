import type { Metadata } from "next";

import { PageHeader } from "@/components/marketing/page-header";
import { Section } from "@/components/marketing/section";
import { DownloadCta } from "@/components/marketing/download-cta";
import { WorkflowTimeline } from "@/components/marketing/workflow-timeline";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CreateProjectModal } from "@/components/product/create-project-modal";
import { JoinProjectModal } from "@/components/product/join-project-modal";
import { VersionHistoryModal } from "@/components/product/version-history-modal";
import { howItWorks } from "@/lib/content";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From creating a production to bringing a collaborator's latest work into your session — the full ProdCollab workflow, step by step.",
  alternates: { canonical: "/how-it-works" },
};

const screens = [
  {
    caption: "Step 1 — Create a production",
    body: "Name it and connect the folder you already produce in.",
    node: <CreateProjectModal />,
  },
  {
    caption: "Step 3 — Open the production",
    body: "Your collaborator pastes the share link and picks their own local folder.",
    node: <JoinProjectModal />,
  },
  {
    caption: "Step 7 — Revisit any stage",
    body: "Every shared update is kept, with a note and the files that changed.",
    node: <VersionHistoryModal />,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From first session to shared production"
        description="Eight steps. No infrastructure to think about — just your folder, your DAW and your collaborator."
      />

      <Section>
        <ol className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {howItWorks.map((item, i) => (
            <li
              key={item.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-5"
              data-aos="fade-up"
              data-aos-delay={(i % 2) * 60}
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border bg-secondary/50 text-xs font-semibold">
                {i + 1}
              </span>
              <div>
                <h2 className="text-sm font-semibold">{item.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-y border-border bg-surface-1/50">
        <SectionHeading
          eyebrow="The screens you'll use"
          title="Three moments, no manual required"
        />
        <div className="mt-14 space-y-16">
          {screens.map((screen, i) => (
            <div
              key={screen.caption}
              className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14"
              data-aos="fade-up"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary">
                  {screen.caption}
                </p>
                <p className="mt-2 text-lg text-pretty text-muted-foreground">
                  {screen.body}
                </p>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
                {screen.node}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          align="center"
          eyebrow="Day to day"
          title="Once it's set up, this is the rhythm"
        />
        <div className="mt-16">
          <WorkflowTimeline />
        </div>
      </Section>

      <DownloadCta title="Start your first production." />
    </>
  );
}
