import { FolderPlus, Lock, Music4, Upload, Users } from "lucide-react";

import {
  FakeButton,
  FakeInput,
  FakeSelect,
  ModalFrame,
} from "@/components/product/modal-frame";

export function CreateProjectModal({ className }: { className?: string }) {
  return (
    <ModalFrame
      className={className}
      icon={Music4}
      title="Create a production"
      subtitle="Connect a studio folder and start protecting your work."
      footer={
        <>
          <FakeButton tone="outline" className="flex-1">
            Cancel
          </FakeButton>
          <FakeButton tone="primary" className="flex-1">
            <Music4 className="size-3.5" />
            Create production
          </FakeButton>
        </>
      }
    >
      <div className="grid gap-5 @xl:grid-cols-2">
        <div className="space-y-4">
          <FakeInput
            label="Production name"
            value="my-awesome-beat"
            hint="Use the name you recognise in your studio."
            required
          />

          <div>
            <p className="text-xs font-medium">Track details</p>
            <div className="mt-1.5 grid grid-cols-2 gap-2">
              <FakeInput label="BPM" value="140" />
              <FakeInput label="Key" value="F♯ minor" />
              <FakeSelect label="Time signature" value="4 / 4" />
              <FakeSelect label="Sample rate" value="48 kHz" />
            </div>
          </div>

          <div>
            <p className="text-xs font-medium">Who can access this production?</p>
            <div className="mt-1.5 grid grid-cols-2 gap-2">
              <div className="rounded-md border border-primary bg-primary/10 p-2.5">
                <Lock className="size-3.5 text-primary" />
                <p className="mt-1.5 text-[0.7rem] font-semibold text-primary">
                  Private
                </p>
                <p className="text-[0.6rem] leading-snug text-muted-foreground">
                  Only you and invited collaborators
                </p>
              </div>
              <div className="rounded-md border border-border p-2.5">
                <Users className="size-3.5 text-muted-foreground" />
                <p className="mt-1.5 text-[0.7rem] font-semibold">Open</p>
                <p className="text-[0.6rem] leading-snug text-muted-foreground">
                  Anyone with access can view it
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-xs font-medium">
            Project folder and files
            <span className="text-primary"> *</span>
          </p>
          <div className="mt-1.5 flex flex-1 flex-col items-center justify-center gap-3 rounded-md border border-dashed border-border bg-surface-1/40 px-4 py-8 text-center">
            <span className="grid size-9 place-items-center rounded-full border border-border bg-card text-muted-foreground">
              <Upload className="size-4" />
            </span>
            <p className="text-[0.7rem] text-muted-foreground">
              Drop files here or connect the full project folder.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <FakeButton tone="primary">
                <Upload className="size-3" /> Add files
              </FakeButton>
              <FakeButton tone="outline">
                <FolderPlus className="size-3" /> Connect folder
              </FakeButton>
            </div>
            <p className="text-[0.6rem] text-muted-foreground/70">
              Audio, MIDI, DAW projects, stems and exports.
            </p>
          </div>
        </div>
      </div>
    </ModalFrame>
  );
}
