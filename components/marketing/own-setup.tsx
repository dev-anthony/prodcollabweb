import { Folder, Laptop } from "lucide-react";

function SetupCard({ name, path }: { name: string; path: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 text-sm font-medium">
        <Laptop className="size-4 text-primary" />
        {name}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-border bg-surface-1/60 px-3 py-2 text-xs text-muted-foreground">
        <Folder className="size-3.5" />
        <span className="truncate">{path}</span>
      </div>
      <div className="mt-3 space-y-1.5">
        {["Session", "Stems", "Samples", "Presets"].map((f) => (
          <div
            key={f}
            className="h-1.5 rounded-full bg-secondary"
            style={{ width: `${60 + f.length * 3}%` }}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}

export function OwnSetup() {
  return (
    <div className="relative" data-aos="fade-up">
      <div className="grid gap-4 sm:grid-cols-2">
        <SetupCard name="Your machine" path="D:/Music/Midnight Drive" />
        <SetupCard name="Collaborator's machine" path="~/Studio/MidnightDrive" />
      </div>
      <div className="mt-4 rounded-xl border border-primary/40 bg-primary/10 p-5 text-center">
        <p className="text-sm font-semibold text-primary">
          One shared production
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          ProdCollab connects the work between both folders. Neither producer
          leaves their own setup.
        </p>
      </div>
    </div>
  );
}
