import { Download, Monitor } from "lucide-react";

import { Button } from "@/components/ui/button";
import { download } from "@/lib/site";

export function DownloadCard() {
  return (
    <div
      className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-8 shadow-elev-md sm:p-10"
      data-aos="fade-up"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-xl border border-border bg-secondary/50 text-[color:var(--primary)]">
          <Monitor className="size-5" />
        </span>
        <div>
          <p className="text-sm font-semibold">ProdCollab for Windows</p>
          <p className="text-xs text-muted-foreground">{download.os}</p>
        </div>
      </div>

      <Button asChild size="lg" className="mt-7 w-full">
        <a href={download.url} download>
          <Download />
          Download for Windows
        </a>
      </Button>

      <dl className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-[0.1em] text-muted-foreground">
            Version
          </dt>
          <dd className="mt-0.5">{download.version}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.1em] text-muted-foreground">
            Released
          </dt>
          <dd className="mt-0.5">{download.releaseDate}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.1em] text-muted-foreground">
            Installer
          </dt>
          <dd className="mt-0.5">{download.fileType}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.1em] text-muted-foreground">
            Platform
          </dt>
          <dd className="mt-0.5">Desktop app</dd>
        </div>
      </dl>

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        Version and release date are placeholders until the public build is
        published.
      </p>
    </div>
  );
}
