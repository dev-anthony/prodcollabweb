import { daws, fileCategories } from "@/lib/site";

export function Compatibility() {
  return (
    <div className="grid gap-10 lg:grid-cols-2" data-aos="fade-up">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Production environments
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {daws.map((daw) => (
            <span
              key={daw}
              className="rounded-lg border border-border bg-card px-3.5 py-2 text-sm"
            >
              {daw}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          ProdCollab works around your project files. It isn't a plugin and it
          doesn't replace your DAW.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          File types it handles
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {fileCategories.map((file) => (
            <span
              key={file}
              className="rounded-lg border border-border bg-card px-3.5 py-2 text-sm"
            >
              {file}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Audio, MIDI, presets, stems, exports and project files all move with
          the production.
        </p>
      </div>
    </div>
  );
}
