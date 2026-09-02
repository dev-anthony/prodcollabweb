import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { siteConfig } from "@/lib/site";
import { ThemeProvider } from "@/components/theme-provider";
import { AosInit } from "@/components/aos-init";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ProdCollab — Collaboration for music producers",
    template: "%s — ProdCollab",
  },
  description: siteConfig.description,
  keywords: [
    "music production collaboration",
    "music producer collaboration software",
    "remote music production",
    "collaborate on DAW projects",
    "share music production projects",
    "collaborate on stems",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: "ProdCollab" }],
  creator: "ProdCollab",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "ProdCollab — Collaboration for music producers",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "ProdCollab — Collaboration for music producers",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ProdCollab",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Windows 10, Windows 11",
  description: siteConfig.description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} h-full`}
    >
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col antialiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AosInit />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
