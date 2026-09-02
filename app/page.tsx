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
import { WaitlistSection } from "@/components/waitlist/waitlist-section";
import { VersionHistoryModal } from "@/components/product/version-history-modal";
import { ConflictPanel } from "@/components/product/conflict-panel";
import { CreateProjectModal } from "@/components/product/create-project-modal";
import { JoinProjectModal } from "@/components/product/join-project-modal";
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

      {/* Core experience — set up a production */}
      <Section className="border-y border-border bg-surface-1/50">
        <SectionHeading
          eyebrow="Core experience"
          title="Point ProdCollab at your folder and keep producing"
          description="Name the production, connect the folder you already work in, and you're collaborating. No infrastructure to set up or understand."
        />
        <div className="relative mx-auto mt-14 max-w-3xl" data-aos="fade-up">
          <CreateProjectModal />
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
            description="Each collaborator opens the production into their own local folder. Paste a share link, pick where it lives, and keep working from there."
          />
          <div data-aos="fade-up">
            <JoinProjectModal />
          </div>
        </div>
        <div className="mt-14">
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
            <VersionHistoryModal />
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

      <WaitlistSection />

      <DownloadCta />
    </>
  );
}
