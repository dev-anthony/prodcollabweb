-- Waitlist table for the ProdCollab marketing site.
-- Run this in the Supabase project the site points at (the ProdCollab
-- desktop app's project is fine — this table is self-contained).

create table if not exists public.waitlist (
  id         uuid primary key default gen_random_uuid(),
  email      text not null unique,
  source     text not null default 'website',
  created_at timestamptz not null default now()
);

-- The site writes with the service-role key from a server route, which
-- bypasses RLS. Keep RLS on and add no public policies, so the table is
-- not readable or writable with the anon key.
alter table public.waitlist enable row level security;

-- Optional: quick lookup of newest signups.
create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);
