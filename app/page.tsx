import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ProblemCards } from "@/components/marketing/problem-cards";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { WorkflowTimeline } from "@/components/marketing/workflow-timeline";
import { OwnSetup } from "@/components/marketing/own-setup";
import { Compatibility } from "@/components/marketing/compatibility";
import { AudienceGrid } from "@/components/marketing/audience-grid";
import { DownloadCta } from "@/components/marketing/download-cta";
import { VersionHistoryPanel } from "@/components/product/version-history-panel";
import { ConflictPanel } from "@/components/product/conflict-panel";
import { AppWindow, Annotation } from "@/components/product/app-window";
import { features } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* The reality of collaborative production */}
      <Section id="product">
        <SectionHeading
          eyebrow="The reality of a session"
          title="The session keeps moving. So should the collaboration."
          description="Productions don't sit still. ProdCollab keeps everyone connected to the same track while each person works from their own setup."
        />
        <div className="mt-14">
          <ProblemCards />
        </div>
      </Section>

      {/* Core experience visual */}
      <Section className="border-y border-border bg-surface-1/50">
        <SectionHeading
          eyebrow="Core experience"
          title="See the whole production at a glance"
          description="Local changes, incoming revisions and what's ready to share — all in one place, without a single technical term."
        />
        <div className="relative mt-14" data-aos="fade-up">
          <AppWindow title="ProdCollab — Midnight Drive">
            <div className="grid gap-4 p-5 sm:grid-cols-3">
              {[
                { label: "Local changes", value: "2 files", tone: "warning" as const },
                { label: "New revision", value: "From Maya", tone: "primary" as const },
                { label: "Version history", value: "18 stages", tone: "default" as const },
              ].map((card) => (
                <div
                  key={card.label}
                  className="rounded-lg border border-border bg-surface-1/60 p-4"
                >
                  <Annotation tone={card.tone}>{card.label}</Annotation>
                  <p className="mt-3 text-sm font-medium">{card.value}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Annotation>Pull latest</Annotation>
                <Annotation>Share latest work</Annotation>
                <Annotation tone="success">Up to date</Annotation>
              </div>
            </div>
          </AppWindow>
        </div>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeading
          eyebrow="What ProdCollab does"
          title="Collaboration that fits around how you already produce"
          description="No new habits. Point it at your project folder and keep working."
        />
        <div className="mt-14">
          <FeatureGrid items={features} />
        </div>
      </Section>

      {/* How collaboration feels */}
      <Section className="border-y border-border bg-surface-1/50">
        <SectionHeading
          align="center"
          eyebrow="How collaboration feels"
          title="One producer moves the track forward. The other picks it up."
          description="A simple back-and-forth, kept close to the music."
        />
        <div className="mt-16">
          <WorkflowTimeline />
        </div>
      </Section>

      {/* Your session stays your session */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="Your session stays your session"
            title="Your setup. Your session. One shared production."
            description="Each collaborator works from their own project folder on their own computer. ProdCollab connects the work without forcing everyone into the same workspace."
          />
          <OwnSetup />
        </div>
      </Section>

      {/* Version history */}
      <Section className="border-y border-border bg-surface-1/50">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="Version history"
            title="Every important stage of the production can be revisited"
            description="Each entry keeps the contributor, the date, a production note and the files that changed — so going back is a decision, not a scramble."
          />
          <div data-aos="fade-up">
            <VersionHistoryPanel />
          </div>
        </div>
      </Section>

      {/* Conflict protection */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="Conflict protection"
            title="When two ideas meet, nothing gets quietly erased"
            description="If you've changed something locally and another version arrives, ProdCollab protects your work and lets you choose what should happen."
          />
          <div data-aos="fade-up">
            <ConflictPanel />
          </div>
        </div>
      </Section>

      {/* Compatibility */}
      <Section className="border-y border-border bg-surface-1/50">
        <SectionHeading
          eyebrow="Works with your tools"
          title="Built around your project files, not on top of your DAW"
        />
        <div className="mt-14">
          <Compatibility />
        </div>
      </Section>

      {/* Who it's for */}
      <Section>
        <SectionHeading
          eyebrow="Who it's for"
          title="Different setups. Same production."
        />
        <div className="mt-14">
          <AudienceGrid />
        </div>
      </Section>

      <DownloadCta />
    </>
  );
}
