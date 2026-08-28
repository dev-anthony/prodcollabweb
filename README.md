# ProdCollab — Marketing Website

Marketing and download site for **ProdCollab**, a desktop collaboration app for
music producers.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-variable design tokens in `app/globals.css`)
- `next-themes` for dark/light (dark is the brand default, choice persisted)
- AOS for scroll reveals (degrades gracefully — content is visible without JS)
- shadcn-style UI primitives in `components/ui`

## Commands

```bash
npm run dev     # dev server
npm run build   # production build
npm start       # serve the production build
npx eslint .    # lint
```

## Structure

```
app/                route segments + sitemap.ts, robots.ts, opengraph-image.tsx
components/
  brand/            logo marks (from the desktop app's vector pack)
  navigation/       navbar (sticky, mobile menu)
  footer/
  marketing/        page sections (hero, features, workflow, CTA, …)
  product/          app-window chrome + UI mockups (session, version history, conflict)
  download/         download card
  ui/               button, container, badge
lib/
  site.ts           site config, nav, download metadata (PLACEHOLDERS)
  content.ts        section copy / data
```

## Before launch — replace these placeholders

All in `lib/site.ts`:

- `download.url` — real Windows installer URL (currently `#`)
- `download.version` — real version string
- `download.releaseDate` — real release date
- `siteConfig.url` — production domain (used for canonical URLs, sitemap, OG)

Also confirm the system requirements copy in `app/download/page.tsx` and replace
the placeholder legal copy in `app/privacy` and `app/terms`.

The favicon at `app/favicon.ico` is the Next.js default — swap for a real
ProdCollab icon.
