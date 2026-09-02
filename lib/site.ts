/**
 * Central site configuration.
 */

export const siteConfig = {
  name: "ProdCollab",
  tagline: "Make music together. Keep your workflow.",
  description:
    "ProdCollab is a desktop app for music producers who collaborate on real projects. Work on sessions, stems, samples and revisions with collaborators from your own setup.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://prodcollab.vercel.app",
  ogImage: "/og.png",
};

export const download = {
  platform: "Windows",
  os: "Windows 10 / Windows 11",
  version: "1.0.0",
  versionLabel: "v1.0.0",
  // The public launch date isn't set yet — the build is available now for
  // early-access producers.
  releaseDate: "Coming soon",
  fileType: "Windows installer (.exe)",
  url: "https://github.com/dev-anthony/Producer-collaboration-platform/releases/download/v1.0.0/ProdCollabSetup.exe",
};

export const mainNav: { title: string; href: string }[] = [
  { title: "Product", href: "/features" },
  { title: "How it works", href: "/how-it-works" },
  { title: "Download", href: "/download" },
];

export const footerNav: {
  heading: string;
  links: { title: string; href: string }[];
}[] = [
  {
    heading: "Product",
    links: [
      { title: "Features", href: "/features" },
      { title: "How it works", href: "/how-it-works" },
      { title: "Download", href: "/download" },
    ],
  },
  {
    heading: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Privacy", href: "/privacy" },
      { title: "Terms", href: "/terms" },
    ],
  },
];

export const daws = [
  "FL Studio",
  "Ableton",
  "Logic",
  "Pro Tools",
  "Cubase",
  "Bitwig",
  "Studio One",
  "Reaper",
  "Reason",
];

export const fileCategories = [
  "WAV",
  "FLAC",
  "AIFF",
  "MP3",
  "MIDI",
  "Presets",
  "Samples",
  "Stems",
  "Exports",
  "Project files",
];
