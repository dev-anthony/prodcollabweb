import type { Metadata } from "next";

import { PageHeader } from "@/components/marketing/page-header";
import { Section } from "@/components/marketing/section";
import { DownloadCta } from "@/components/marketing/download-cta";
import { WorkflowTimeline } from "@/components/marketing/workflow-timeline";
import { SectionHeading } from "@/components/marketing/section-heading";
import { howItWorks } from "@/lib/content";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From creating a production to bringing a collaborator's latest work into your session — the full ProdCollab workflow, step by step.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From first session to shared production"
        description="Eight steps. No infrastructure to think about — just your folder, your DAW and your collaborator."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <ol className="space-y-4">
            {howItWorks.map((item, i) => (
              <li
                key={item.title}
                className="flex gap-5 rounded-xl border border-border bg-card p-6"
                data-aos="fade-up"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-secondary/50 text-sm font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h2 className="text-base font-semibold">{item.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="border-y border-border bg-surface-1/50">
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
