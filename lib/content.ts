import type { LucideIcon } from "lucide-react";
import {
  Bell,
  FolderTree,
  GitCompareArrows,
  History,
  Layers,
  RefreshCw,
  ShieldCheck,
  Copy,
  Undo2,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** Homepage feature grid — grouped into producer concepts, not a bullet dump. */
export const features: Feature[] = [
  {
    icon: FolderTree,
    title: "Work from your own setup",
    description:
      "Point ProdCollab at your project folder and keep producing in the DAW you already use. Nothing about your workflow changes.",
  },
  {
    icon: Bell,
    title: "Keep collaborators in sync",
    description:
      "Know the moment someone shares new work, and bring it into your session when you're ready for it.",
  },
  {
    icon: ShieldCheck,
    title: "Protect the production",
    description:
      "Local changes, incoming files and conflicts are handled carefully, so work is never quietly overwritten.",
  },
  {
    icon: History,
    title: "Follow the track's evolution",
    description:
      "Look back at earlier versions, see what changed at each stage and restore a previous state when you need to.",
  },
  {
    icon: Copy,
    title: "Keep repeated audio under control",
    description:
      "ProdCollab notices when the same audio content is already in the project, so it isn't added again under a new name.",
  },
  {
    icon: RefreshCw,
    title: "Automatic background updates",
    description:
      "Optional automatic pulling can bring collaborator updates into the linked project without stopping to do it by hand.",
  },
];

/** Deeper feature list for /features. */
export const featurePages: Feature[] = [
  {
    icon: Layers,
    title: "Shared productions",
    description:
      "A production holds the whole picture — sessions, stems, samples, MIDI, presets and exports — and keeps it connected across everyone working on it.",
  },
  {
    icon: FolderTree,
    title: "Local project folders",
    description:
      "Every collaborator chooses their own folder on their own machine. You produce locally; ProdCollab handles what moves between setups.",
  },
  {
    icon: GitCompareArrows,
    title: "Share and bring in work",
    description:
      "Push new or edited files when an idea is ready. Pull a collaborator's latest work into your folder on your terms.",
  },
  {
    icon: Bell,
    title: "Live collaborator updates",
    description:
      "See when someone is working and when they've shared something new, without leaving your session to check.",
  },
  {
    icon: ShieldCheck,
    title: "Conflict protection",
    description:
      "When your local change meets an incoming one, ProdCollab holds your work safely and lets you decide what happens.",
  },
  {
    icon: History,
    title: "Version history",
    description:
      "Each meaningful stage of the production is kept with a note, the contributor and the files that changed.",
  },
  {
    icon: Copy,
    title: "Duplicate audio detection",
    description:
      "Identical audio content is recognised even under a different filename, so the project doesn't fill up with copies.",
  },
  {
    icon: RefreshCw,
    title: "Automatic pull",
    description:
      "Let collaborator updates flow into the linked project automatically, or keep every update a manual choice.",
  },
  {
    icon: Bell,
    title: "Windows notifications",
    description:
      "Get a desktop notification when there's new work to bring in, so nothing slips past while you're deep in the mix.",
  },
  {
    icon: Undo2,
    title: "Safe restoration",
    description:
      "Move the production back to an earlier state when a direction doesn't work out, without losing the history in between.",
  },
];

export const problems: { title: string; body: string }[] = [
  {
    title: "Someone reworks the drums",
    body: "A collaborator rebuilds the groove overnight. You see the update and pull it in before you start your session.",
  },
  {
    title: "The arrangement changes",
    body: "Another producer moves sections around. The new structure reaches you without a folder of renamed files to sort through.",
  },
  {
    title: "A vocalist sends a new take",
    body: "Verse two gets recut. The take lands in the production, tied to the version of the track it was sung over.",
  },
  {
    title: "The mix gets revised",
    body: "A fresh mix pass comes back. You can compare it against where the track was and keep moving.",
  },
  {
    title: "Stems get swapped",
    body: "Updated stems replace the old bounce. Everyone ends up on the same set without a group chat about which is current.",
  },
  {
    title: "You want an earlier version",
    body: "A change didn't land. Go back to how the production sounded last week and pick the direction back up.",
  },
];

export const workflow: { who: string; step: string; detail: string }[] = [
  {
    who: "Producer A",
    step: "Works on the drums",
    detail: "Builds the groove in their own DAW, in their own project folder.",
  },
  {
    who: "Producer A",
    step: "Shares the latest work",
    detail: "Pushes the new and changed files with a short production note.",
  },
  {
    who: "Producer B",
    step: "Gets notified",
    detail: "A desktop notification says there's something new in the production.",
  },
  {
    who: "Producer B",
    step: "Reviews the update",
    detail: "Sees what changed and which files it touches before doing anything.",
  },
  {
    who: "Producer B",
    step: "Brings it into the session",
    detail: "Pulls the latest work into their linked project folder.",
  },
  {
    who: "Producer B",
    step: "Keeps producing",
    detail: "Picks up the track from their own setup and carries it forward.",
  },
];

export const audiences: { title: string; body: string }[] = [
  {
    title: "Producer + Producer",
    body: "Build a track together from separate setups without shipping drives back and forth.",
  },
  {
    title: "Producer + Artist",
    body: "Keep vocal takes, arrangements and revisions tied to the production they belong to.",
  },
  {
    title: "Remote production team",
    body: "Keep sessions moving when everyone is working from a different city.",
  },
  {
    title: "Solo producer",
    body: "Keep a clean history of a production and recover an earlier version when a direction changes.",
  },
];

export const howItWorks: { title: string; body: string }[] = [
  { title: "Create a production", body: "Choose the project name and the local folder it lives in." },
  { title: "Invite your collaborator", body: "Generate a share link and send it over." },
  { title: "Open the production", body: "Your collaborator picks their own local project folder." },
  { title: "Make music", body: "Both producers work independently from their own setups." },
  { title: "Share the latest work", body: "Push new or edited project files when something's ready." },
  { title: "Get the update", body: "The collaborator receives an update notification." },
  { title: "Bring it into the session", body: "Pull the latest work into the linked project folder." },
  { title: "Keep building", body: "Continue the production from where it now stands." },
];
