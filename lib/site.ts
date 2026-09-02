/**
 * Central site configuration. Real values (download URL, version, release
 * date) are placeholders — swap them here when the build is published.
 */

export const siteConfig = {
  name: "ProdCollab",
  tagline: "Make music together. Keep your workflow.",
  description:
    "ProdCollab is a desktop app for music producers who collaborate on real projects. Work on sessions, stems, samples and revisions with collaborators from your own setup.",
  url: "https://prodcollab.app",
  ogImage: "/og.png",
};

export const download = {
  platform: "Windows",
  os: "Windows 10 / Windows 11",
  // Placeholders — replace when a real build is published.
  version: "1.0.0",
  releaseDate: "Coming soon",
  fileType: "Windows installer (.exe)",
  // Point this at the real installer when it exists.
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
