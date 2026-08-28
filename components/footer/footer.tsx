import Link from "next/link";

import { footerNav } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/brand/logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface-1">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A collaboration workspace built for music production. Keep the work
            connected while everyone produces from their own setup.
          </p>
        </div>

        {footerNav.map((group) => (
          <div key={group.heading}>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {group.heading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 ProdCollab. All rights reserved.</p>
          <p>Make music together. Keep your workflow.</p>
        </Container>
      </div>
    </footer>
  );
}
