# ProdCollab — Marketing Website

Marketing, download and waitlist site for **ProdCollab**, a desktop
collaboration app for music producers. Deployed on Vercel
(`prodcollab.vercel.app`).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-variable design tokens in `app/globals.css`)
- `next-themes` for dark/light (dark is the brand default, choice persisted)
- AOS for scroll reveals (degrades gracefully — content is visible without JS)
- `@supabase/supabase-js` for the waitlist (server route only)
- shadcn-style UI primitives in `components/ui`

## Commands

```bash
npm run dev     # dev server
npm run build   # production build
npm start       # serve the production build
npx eslint .    # lint
```

## Environment

Copy `.env.example` to `.env.local` for local dev, and set the same vars in
the Vercel project settings:

| Var | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, Open Graph. `https://prodcollab.vercel.app` |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (the desktop app's project is fine) |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only key for waitlist inserts — never exposed to the client |

The waitlist form fails gracefully (503 + friendly message) when Supabase env
vars are absent, so the site still builds and runs without them.

### Waitlist table

Run `supabase/waitlist.sql` once against the Supabase project. It creates
`public.waitlist (id, email unique, source, created_at)` with RLS on and no
public policies — only the service-role route can write.

## Structure

```
app/
  api/waitlist/       POST route → inserts into Supabase
  <segments>/         + sitemap.ts, robots.ts, opengraph-image.tsx
components/
  brand/              logo marks (from the desktop app's vector pack)
  navigation/ footer/
  marketing/          page sections (hero, features, workflow, CTA, …)
  product/            app mockups — AppShell, CollabView, ModalFrame,
                      create/join/version-history/conflict panels
  waitlist/           form (client) + section
  download/  ui/
lib/
  site.ts             site + download config
  content.ts          section copy / data
  supabase.ts         server-only admin client
```

The product mockups are hand-built HTML/CSS (theme-aware, crisp on retina),
modelled on the real ProdCollab desktop UI. `JoinProjectModal` is invented
from the described workflow — no screenshot of that screen exists yet.

## Still to do before a public launch

- Real launch date (currently "Coming soon"; `lib/site.ts`)
- Replace placeholder legal copy in `app/privacy` and `app/terms`
- Swap `app/favicon.ico` (Next.js default) for a ProdCollab icon
- Confirm the system-requirements copy on `/download`
