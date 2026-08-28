import type { Metadata } from "next";
import { LegalLayout } from "@/components/marketing/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ProdCollab handles your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="Placeholder"
      sections={[
        {
          heading: "Overview",
          body: <p>A summary of what information ProdCollab collects and why.</p>,
        },
        {
          heading: "Information we collect",
          body: (
            <p>
              Account details, the productions you create or join, and basic
              usage information needed to run the collaboration service.
            </p>
          ),
        },
        {
          heading: "Your project files",
          body: (
            <p>
              How project files shared through a production are stored,
              transmitted and retained.
            </p>
          ),
        },
        {
          heading: "How we use information",
          body: <p>The purposes for which collected information is used.</p>,
        },
        {
          heading: "Sharing",
          body: <p>When, if ever, information is shared with third parties.</p>,
        },
        {
          heading: "Your choices",
          body: <p>How to access, export or delete your information.</p>,
        },
        {
          heading: "Contact",
          body: <p>How to reach us with privacy questions.</p>,
        },
      ]}
    />
  );
}
