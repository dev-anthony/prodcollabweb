import {
  ArrowDownToLine,
  Clock,
  Download,
  Globe,
  History,
  Music4,
  RefreshCw,
  Trash2,
  UserPlus,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { AppShell } from "@/components/product/app-shell";

type Project = {
  name: string;
  note: string;
  owner: string;
  files: string;
  updated: string;
  status: "Synced" | "New work";
};

const projects: Project[] = [
  {
    name: "Midnight Drive",
    note: "Late-night trap idea",
    owner: "Maya",
    files: "14 files",
    updated: "Aug 18, 9:07 AM",
    status: "New work",
  },
  {
    name: "Palm Season",
    note: "Summer R&B — verse + hook",
    owner: "You",
    files: "31 files",
    updated: "Aug 16, 6:20 PM",
    status: "Synced",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const isNew = project.status === "New work";
  return (
    <div className="rounded-xl border border-border bg-surface-1/50 p-4">
      <div className="flex items-start gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
          <Music4 className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <p className="truncate text-sm font-semibold">{project.name}</p>
            <span
              className={cn(
                "shrink-0 rounded-full border px-2 py-0.5 text-[0.58rem] font-medium",
                isNew
                  ? "border-primary/40 text-primary"
                  : "border-success/40 text-success",
              )}
            >
              {project.status}
            </span>
          </div>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            {project.note}
          </p>
          <p className="mt-1 text-[0.68rem] text-muted-foreground/80">
            Owner: {project.owner}
          </p>
          <p className="mt-0.5 text-[0.68rem] text-success">
            Shared collaboration
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.68rem] text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Globe className="size-3" /> Open project
        </span>
        <span>{project.files}</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="size-3" /> {project.updated}
        </span>
      </div>

      <span className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-md border border-border px-3 py-2 text-[0.68rem] font-medium text-muted-foreground">
        <History className="size-3" /> View version history
      </span>

      <div className="mt-2 flex items-center gap-2">
        <span
          className={cn(
            "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-2 text-[0.7rem] font-semibold",
            isNew
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground",
          )}
        >
          <ArrowDownToLine className="size-3" />
          {isNew ? "Bring in latest" : "Back up now"}
        </span>
        <span className="grid size-8 shrink-0 place-items-center rounded-md border border-success/40 text-success">
          <Download className="size-3.5" />
        </span>
        <span className="grid size-8 shrink-0 place-items-center rounded-md border border-destructive/40 text-destructive">
          <Trash2 className="size-3.5" />
        </span>
      </div>
    </div>
  );
}

export function CollabView({ className }: { className?: string }) {
  return (
    <AppShell active="Collaborations" className={className}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-primary">
            Collaboration
          </p>
          <h3 className="mt-1 text-base font-semibold tracking-[-0.01em] @sm:text-lg">
            Shared sessions
          </h3>
          <p className="text-xs text-muted-foreground">
            Productions you are making together.
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-[0.66rem] text-muted-foreground">
          <RefreshCw className="size-3" /> Refresh
        </span>
      </div>

      <span className="mt-4 inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-medium">
        <UserPlus className="size-3.5" /> Join a project
      </span>

      <div className="mt-5 flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-primary" />
        <p className="text-sm font-semibold">Collaborated projects</p>
      </div>

      <div className="mt-3 grid gap-3 @md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </AppShell>
  );
}
