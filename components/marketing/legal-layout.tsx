import * as React from "react";
import { PageHeader } from "@/components/marketing/page-header";
import { Section } from "@/components/marketing/section";

export function LegalLayout({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { heading: string; body: React.ReactNode }[];
}) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} description={`Last updated: ${updated}`} />
      <Section>
        <div className="mx-auto max-w-2xl">
          <p className="rounded-lg border border-border bg-surface-1/50 px-4 py-3 text-sm text-muted-foreground">
            This is a placeholder structure. Replace each section with reviewed
            legal copy before launch.
          </p>
          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-lg font-semibold tracking-[-0.01em]">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
