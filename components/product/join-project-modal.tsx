import { ArrowRight, FolderCheck, Link2, Music4, ShieldCheck } from "lucide-react";

import {
  FakeButton,
  FakeInput,
  ModalFrame,
} from "@/components/product/modal-frame";

/**
 * Invented from the described workflow (paste a share link → pick your own
 * local folder → open the production). No screenshot exists for this screen.
 */
export function JoinProjectModal({ className }: { className?: string }) {
  return (
    <ModalFrame
      className={className}
      icon={Link2}
      title="Join a production"
      subtitle="Open a shared production on your own setup."
      footer={
        <>
          <FakeButton tone="outline" className="flex-1">
            Cancel
          </FakeButton>
          <FakeButton tone="primary" className="flex-1">
            Open production
            <ArrowRight className="size-3.5" />
          </FakeButton>
        </>
      }
    >
      <div className="space-y-4">
        <FakeInput
          label="Share link or code"
          value="prodcollab.app/j/9F3K-2QD7"
          hint="Paste the link your collaborator sent you."
          required
        />

        <div className="rounded-md border border-border bg-surface-1/50 p-3">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-secondary text-primary">
              <Music4 className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold">Midnight Drive</p>
              <p className="text-[0.65rem] text-muted-foreground">
                Shared by Maya · 14 files · updated 2h ago
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium">
            Choose your project folder
            <span className="text-primary"> *</span>
          </p>
          <div className="mt-1.5 flex items-center justify-between gap-3 rounded-md border border-border bg-input px-3 py-2">
            <span className="inline-flex items-center gap-2 text-xs">
              <FolderCheck className="size-3.5 text-success" />
              D:/Music/Midnight Drive
            </span>
            <span className="text-[0.65rem] text-muted-foreground underline underline-offset-2">
              Change
            </span>
          </div>
          <p className="mt-1 text-[0.65rem] text-muted-foreground">
            The production will live here on your computer.
          </p>
        </div>

        <p className="flex items-center gap-1.5 text-[0.68rem] text-muted-foreground">
          <ShieldCheck className="size-3.5 text-success" />
          Local changes stay yours. You choose when to bring in updates.
        </p>
      </div>
    </ModalFrame>
  );
}
