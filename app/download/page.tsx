import type { Metadata } from "next";

import { PageHeader } from "@/components/marketing/page-header";
import { Section } from "@/components/marketing/section";
import { DownloadCard } from "@/components/download/download-card";
import { download } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download ProdCollab for Windows 10 and 11. Install the desktop app and start collaborating on your productions from your own setup.",
  alternates: { canonical: "/download" },
};

const steps = [
  "Download the installer.",
  "Run the installer.",
  "Open ProdCollab.",
  "Sign in.",
  "Create a production or join one with a share link.",
];

const requirements = [
  { label: "Operating system", value: "Windows 10 or Windows 11" },
  { label: "Architecture", value: "64-bit" },
  { label: "Disk space", value: "Enough room for your project folders" },
  { label: "Connection", value: "An internet connection for collaboration" },
];

export default function DownloadPage() {
  return (
    <>
      <PageHeader
        eyebrow="Download"
        title="Download ProdCollab"
        description="The desktop app for producers who collaborate on real projects. Windows installer, set up in a couple of minutes."
      />

      <Section>
        <DownloadCard />
      </Section>

      <Section className="border-y border-border bg-surface-1/50 py-16">
        <div className="grid gap-14 lg:grid-cols-2">
          <div data-aos="fade-up">
            <h2 className="text-2xl font-semibold tracking-[-0.01em]">
              Installation
            </h2>
            <ol className="mt-6 space-y-4">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-border bg-card text-xs font-semibold">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div data-aos="fade-up" data-aos-delay="80">
            <h2 className="text-2xl font-semibold tracking-[-0.01em]">
              System requirements
            </h2>
            <dl className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
              {requirements.map((req) => (
                <div
                  key={req.label}
                  className="flex items-center justify-between gap-4 px-4 py-3.5"
                >
                  <dt className="text-sm text-muted-foreground">{req.label}</dt>
                  <dd className="text-right text-sm font-medium">{req.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-muted-foreground">
              Exact requirements will be confirmed with the public release. The
              current version shown ({download.version}) is a placeholder.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
