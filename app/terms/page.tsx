import type { Metadata } from "next";
import { LegalLayout } from "@/components/marketing/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using ProdCollab.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      updated="Placeholder"
      sections={[
        {
          heading: "Acceptance of terms",
          body: <p>By using ProdCollab you agree to these terms.</p>,
        },
        {
          heading: "Your account",
          body: <p>Responsibilities for keeping your account secure.</p>,
        },
        {
          heading: "Your content",
          body: (
            <p>
              You keep ownership of the music and files you work on. This section
              covers the limited rights needed to run the service.
            </p>
          ),
        },
        {
          heading: "Acceptable use",
          body: <p>What is and isn't allowed when using ProdCollab.</p>,
        },
        {
          heading: "Availability",
          body: <p>Service availability and changes to the product.</p>,
        },
        {
          heading: "Disclaimers and liability",
          body: <p>Standard disclaimers and limitations of liability.</p>,
        },
        {
          heading: "Contact",
          body: <p>How to reach us with questions about these terms.</p>,
        },
      ]}
    />
  );
}
