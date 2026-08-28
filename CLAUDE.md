# ProdCollab Marketing Website — Claude Code Build Specification

## ROLE

You are an expert senior product designer, brand designer, UX engineer, and frontend engineer.

You are building the official marketing and download website for **ProdCollab**, a desktop collaboration application made specifically for music producers.

The goal is NOT to build a generic SaaS landing page.

The goal is to build a polished, production-quality website that makes a music producer immediately understand:

> **ProdCollab lets producers collaborate on real music projects from their own computers, without disrupting the way they already produce.**

The website should feel like a serious music-production product that could sit alongside modern tools used by professional producers.

The website must be visually refined, restrained, premium, fast, responsive, accessible, SEO-friendly, and ready to deploy.

---

# 1. PRODUCT CONTEXT

ProdCollab is a desktop collaboration application for music producers.

A producer works inside their normal local project folder using their preferred DAW.

ProdCollab allows collaborators to work on the same production while maintaining their own local working environment.

Producers can collaborate around:

* DAW sessions
* stems
* samples
* audio recordings
* MIDI
* presets
* arrangements
* exports
* project files
* revisions
* versions
* production ideas

The application handles the complicated file coordination in the background.

The producer should not need to understand any technical infrastructure behind it.

### Core product promise

ProdCollab should communicate:

**Make music together. Keep your workflow.**

Do not turn this into a technical product pitch.

---

# 2. VERY IMPORTANT — LANGUAGE / POSITIONING

The website is marketed to:

* music producers
* beat makers
* recording artists who produce
* musicians
* composers
* audio engineers
* production teams
* remote collaborators

The copy must speak their language.

Use concepts such as:

* production
* session
* stems
* samples
* takes
* arrangement
* mix
* revision
* track
* project
* collaborator
* producer
* studio
* workflow
* ideas
* recordings
* presets
* MIDI
* exports
* versions
* creative process

Avoid developer terminology completely in user-facing marketing.

### NEVER use marketing copy such as:

* Git
* GitHub
* repository
* commit
* branch
* version control
* source control
* WebSocket
* backend
* database
* API
* synchronization engine
* file system architecture
* cloud repository
* technical infrastructure
* distributed
* deployment
* server
* developer workflow

These are implementation details and should not appear in the main marketing experience.

Do not position ProdCollab as:

> "GitHub for music producers"

Do not position it as:

> "Version control for music."

Those comparisons make the product feel like developer software.

Instead, position it as a **purpose-built collaboration workspace for music production**.

---

# 3. COPYWRITING DIRECTION

Do NOT use generic startup/SaaS copy.

Avoid cliché phrases such as:

* "Stop doing X"
* "Say goodbye to..."
* "Revolutionize your workflow"
* "Take your productivity to the next level"
* "Seamlessly collaborate"
* "The future of collaboration"
* "All-in-one platform"
* "Built for modern teams"
* "Supercharge your workflow"
* "Never lose your work again"
* "No more file chaos"
* "Bye bye..."
* "Finally, a better way..."

The copy should feel written by someone who actually understands music production.

It should be concise, confident and natural.

Think:

**studio language, not startup language.**

Good direction:

> **Make the track. Stay in the session.**

> **Your production, shared.**

> **Keep your session moving.**

> **Every take. Every stem. Every revision.**

> **Work on the same production from your own setup.**

> **Know when your collaborator has something new.**

> **Pick your project folder and get to work.**

> **Bring their latest work into your session when you're ready.**

> **Go back to an earlier version of the production.**

These are examples of the tone and direction, NOT mandatory copy.

Use your own professional judgment to create stronger copy.

---

# 4. BRAND / VISUAL DIRECTION

The existing ProdCollab desktop application uses a very dark visual language.

Existing design system:

* Background: pure/deep black
* Foreground: approximately 92% white
* Cards: approximately 4% white
* Secondary surfaces: approximately 9% white
* Borders: approximately 15% white
* Primary accent: HSL 220 72% 62%
* Success: muted green
* Destructive: muted red
* Typography: Poppins

The website should inherit this visual identity so the website and desktop application clearly belong to the same product.

### Primary visual character

* dark
* minimal
* cinematic
* professional
* music-production oriented
* premium
* understated
* precise
* modern
* technical underneath, but NOT technical-looking

Do NOT make it look like:

* a crypto website
* an AI startup
* a developer tool
* a generic Tailwind SaaS template
* a gaming website
* a futuristic neon dashboard

Avoid excessive gradients.

Avoid excessive glow.

Avoid giant glowing blobs.

Avoid glassmorphism everywhere.

Avoid visual noise.

The existing desktop app is intentionally restrained. The website should respect that.

---

# 5. LIGHT MODE + DARK MODE

The website MUST support:

* Dark mode
* Light mode

Dark mode should be the visual default because it is the strongest expression of the ProdCollab brand.

Light mode should feel intentionally designed rather than simply inverting colors.

Use CSS variables/design tokens so the entire interface can switch themes cleanly.

The theme switcher should be subtle and accessible.

Persist the user's selected theme.

Respect `prefers-color-scheme` on first visit unless the product's default behavior requires dark mode.

---

# 6. TYPOGRAPHY

Use **Poppins** to maintain consistency with the desktop application.

Typography should have:

* strong hierarchy
* generous spacing
* restrained font weights
* highly readable body text
* compact UI labels
* confident large headlines

Do not make every headline enormous.

The website should feel editorial and premium rather than like a generic startup template.

---

# 7. TECHNOLOGY

Use:

* Next.js
* App Router
* TypeScript
* Tailwind CSS
* modern React
* semantic HTML
* responsive design

Structure the project cleanly.

Prefer reusable components.

Avoid unnecessary dependencies.

Use modern Next.js conventions.

The website should be optimized for:

* performance
* SEO
* accessibility
* responsive layouts
* maintainability

---

# 8. PRIMARY WEBSITE GOAL

The primary conversion is:

## Download ProdCollab

The website should make downloading the desktop application extremely obvious.

The main CTA should be something like:

**Download for Windows**

Do not invent a macOS download unless an actual macOS build exists.

ProdCollab currently has a Windows installer.

The download experience should feel similar in simplicity to professional developer/software download sites, while the visual language remains distinctly ProdCollab.

Example:

**Download ProdCollab**
Windows 10/11 · Desktop app

[ Download for Windows ]

Small secondary information:

`Latest version · Windows installer`

Do not fabricate a version number.

Create the architecture so the real version/download URL can be inserted easily later.

---

# 9. WEBSITE INFORMATION ARCHITECTURE

Build the site with these pages:

## `/`

Homepage

## `/download`

Dedicated download page

## `/features`

Feature overview

## `/how-it-works`

Explain the producer workflow visually

## `/about`

Short product/company story

## `/privacy`

Privacy policy placeholder structure

## `/terms`

Terms placeholder structure

Potential future pages should be easy to add.

---

# 10. HOMEPAGE STRUCTURE

Use professional judgment to refine the exact layout, but the homepage should approximately contain:

---

## SECTION 01 — NAVIGATION

Minimal navigation.

Left:

ProdCollab logo/wordmark.

Navigation:

* Product
* How it works
* Download

Right:

* Theme toggle
* Download for Windows

On mobile:

* logo
* theme toggle
* menu

The navbar should become sticky/subtle on scroll if appropriate.

---

# SECTION 02 — HERO

This is the most important section.

Do NOT immediately explain technical features.

Sell the creative outcome first.

Possible direction:

### Eyebrow

`COLLABORATION FOR MUSIC PRODUCTION`

### Headline

Create a strong headline around the concept:

**Make music together. Keep your workflow.**

or something stronger that you develop.

### Supporting copy

Explain that producers can work from their own setups while sharing the same production.

Example direction:

> Work on sessions, stems, samples and revisions with your collaborators without changing the way you produce.

### CTA

**Download for Windows**

Secondary:

**See how it works**

Hero visual:

Do NOT use a generic abstract gradient.

Create a visual representation of a music production environment.

For example:

A beautiful stylized composition showing:

* DAW/project window
* project folder
* track/session context
* collaborator indicator
* incoming revision
* update notification

The visual should communicate collaboration without looking like a developer dashboard.

If actual product screenshots are available in the project, use them.

Otherwise create polished product mockups that resemble the real ProdCollab interface.

Do not fabricate functionality that does not exist.

---

# SECTION 03 — THE PROBLEM, BUT FROM THE PRODUCER'S PERSPECTIVE

Do not create a cliché "problem/solution" section.

Instead communicate the reality of collaborative production.

Example direction:

### Heading

**The session keeps moving. So should the collaboration.**

Then discuss situations producers recognize:

* someone updates the drums
* another producer changes the arrangement
* a vocalist sends a new take
* a mix gets revised
* stems change
* a producer adds a new sample
* someone wants to revisit an earlier version

The point:

ProdCollab keeps the production connected while each person works from their own setup.

Use short cards or editorial blocks.

Do not make every item sound like a software feature.

---

# SECTION 04 — PRODUCT VISUAL / CORE EXPERIENCE

Show the actual ProdCollab workflow.

Possible visual:

A large desktop application mockup.

Overlay subtle annotations:

`LOCAL CHANGES`

`NEW REVISION`

`UPDATE AVAILABLE`

`PULL LATEST`

`VERSION HISTORY`

This should be visual storytelling rather than a technical diagram.

---

# SECTION 05 — FEATURES

Create a strong feature section.

Do NOT dump 20 bullet points.

Group functionality into meaningful producer concepts.

Suggested groups:

### Work from your own setup

Choose your project folder and continue producing from the environment you already use.

### Keep collaborators in sync

Know when someone has pushed new work and bring it into your session when you're ready.

### Protect the production

Local changes, conflicts and incoming files are handled carefully so work isn't silently overwritten.

### Follow the evolution of the track

Review earlier versions, see what changed and restore a previous state when needed.

### Keep repeated audio under control

Detect duplicate file content so the same audio doesn't unnecessarily get added again under another filename.

### Automatic background updates

Optional automatic pulling can bring collaborator updates into the linked project without requiring manual intervention.

Keep descriptions concise.

---

# SECTION 06 — HOW COLLABORATION FEELS

This should be one of the strongest sections.

Show a simple visual timeline:

**Producer A**

Works on drums

↓

Pushes latest work

↓

**Producer B**

Gets notified

↓

Reviews update

↓

Brings it into their session

↓

Continues producing

The language must remain producer-oriented.

Do not mention technical mechanisms.

---

# SECTION 07 — YOUR SESSION STAYS YOUR SESSION

A major differentiator is that each producer has their own local project folder.

Explain this in producer language.

Possible headline:

**Your setup. Your session. One shared production.**

Explain:

Each collaborator works from their own project folder on their own computer.

ProdCollab connects the work without forcing everyone into the same physical workspace.

This is a major concept and deserves strong visual treatment.

---

# SECTION 08 — VERSION HISTORY

Show a polished UI representation of production history.

Example entries:

`Vocal revision`

`New drum arrangement`

`Mix update`

`Added synth layer`

`Pre-master export`

Do not show technical commit IDs.

Do not mention Git.

The message should be:

> Every important stage of the production can be revisited.

Show:

* contributor
* date
* production note
* changed files
* restore action

---

# SECTION 09 — CONFLICT PROTECTION

Explain the protection system in normal producer language.

Example:

**When two ideas meet, nothing gets quietly erased.**

If a collaborator has changed something locally and another version arrives, ProdCollab protects the local work and lets the producer decide what should happen.

Present the three actions:

* Use remote
* Keep both
* Use local

Explain them naturally.

This is a trust-building section.

---

# SECTION 10 — DAW / FILE COMPATIBILITY

Do NOT claim that ProdCollab is a plugin.

It is a desktop collaboration application that works around the producer's project files.

Show supported production environments and file categories.

DAWs from the README:

* FL Studio
* Ableton
* Logic
* Pro Tools
* Cubase
* Bitwig
* Studio One
* Reaper
* Reason

File categories:

* WAV
* FLAC
* AIFF
* MP3
* MIDI
* presets
* samples
* stems
* exports
* project files

Do not overpromise compatibility beyond what the application actually supports.

---

# SECTION 11 — WHO IT IS FOR

Create a concise section for different producer workflows.

Examples:

### Producer + Producer

Build a track together from separate setups.

### Producer + Artist

Keep vocal takes, arrangements and revisions connected.

### Remote Production Team

Keep sessions moving when everyone is working from different locations.

### Solo Producer

Maintain clean project history and recover earlier versions of a production.

Do not turn this into generic personas.

---

# SECTION 12 — DOWNLOAD CTA

Large closing section.

Potential direction:

### Headline

**Bring the session with you.**

Supporting copy:

> ProdCollab is built for producers who want collaboration to stay close to the music.

CTA:

**Download for Windows**

Secondary:

**Learn how it works**

Keep it visually strong but restrained.

---

# SECTION 13 — FOOTER

Include:

ProdCollab logo.

Short brand statement.

Navigation:

* Product
* Features
* How it works
* Download
* About

Legal:

* Privacy
* Terms

Social links only if actual URLs are available.

Copyright:

`© 2026 ProdCollab. All rights reserved.`

---

# 11. DOWNLOAD PAGE

The `/download` page should feel like a professional software download page.

Do not simply duplicate the homepage.

Structure:

### Header

**Download ProdCollab**

### Main card

ProdCollab for Windows

`Windows 10 / Windows 11`

Large:

**Download for Windows**

Include:

* installer information
* current version placeholder
* release date placeholder
* system requirements
* installation instructions

Do NOT invent exact system requirements that are not known.

Use clearly marked placeholders where necessary.

Example:

`Windows 10 or later`

Only use this if confirmed.

Otherwise structure the component so requirements can be filled later.

### Installation steps

1. Download the installer.
2. Run the installer.
3. Open ProdCollab.
4. Sign in.
5. Create a project or join one.

Keep it extremely simple.

---

# 12. FEATURES PAGE

The features page should expand on the homepage without becoming documentation.

Organize around producer outcomes:

1. Shared productions
2. Local project folders
3. Push and pull workflow
4. Realtime collaborator updates
5. Conflict protection
6. Version history
7. Duplicate audio detection
8. Automatic pull
9. Windows notifications
10. Safe restoration

Each feature should have:

* strong headline
* producer-oriented explanation
* visual representation
* subtle interaction/animation

Avoid technical implementation explanations.

---

# 13. HOW IT WORKS PAGE

This page should explain the complete workflow.

Use a visual story.

### Step 1

**Create a production**

Choose the project name and local folder.

### Step 2

**Invite your collaborator**

Generate a share link.

### Step 3

**Open the production**

Your collaborator chooses their own local project folder.

### Step 4

**Make music**

Both producers work independently from their own setups.

### Step 5

**Share the latest work**

Push new or edited project files.

### Step 6

**Get the update**

The collaborator receives an update notification.

### Step 7

**Bring it into the session**

Pull the latest work into the linked project folder.

### Step 8

**Keep building**

Continue the production.

Make this visually compelling.

---

# 14. INTERACTIONS

Use animation carefully.

Desired motion:

* subtle fade
* small slide transitions
* smooth hover states
* product mockup transitions
* scroll-based reveal
* subtle notification animations
* version timeline transitions

Do NOT overanimate.

Do not make every element fly around.

Animation should reinforce the feeling of a professional music tool.

Respect:

`prefers-reduced-motion`

---

# 15. PRODUCT MOCKUPS

The website should visually sell the actual desktop application.

Prioritize real application screenshots if they can be provided.

If screenshots are not available:

Create realistic UI mockups based on the supplied desktop application's visual system.

Important:

Do not invent random dashboard components unrelated to the actual product.

The visual language should resemble the actual ProdCollab application:

* black background
* dark cards
* blue primary accent
* restrained borders
* Poppins
* compact controls
* project cards
* activity strip
* notifications
* version history
* conflict interface

The marketing website should make users recognize:

> "This is the same app I am downloading."

---

# 16. RESPONSIVE DESIGN

The website must be excellent at:

* 1440px+
* 1280px
* 1024px
* tablet
* 768px
* 390px
* 375px

Do not merely stack desktop components on mobile.

Redesign layouts where necessary.

Mobile hero must remain strong.

Download CTA should remain accessible.

Navigation should become a proper mobile navigation.

Product screenshots should remain readable.

---

# 17. SEO

Implement proper SEO from the beginning.

Use Next.js metadata.

Homepage should include:

Title concept:

`ProdCollab — Collaboration for Music Producers`

Description concept:

`ProdCollab helps music producers collaborate on sessions, stems, samples, revisions and project files from their own setups.`

Improve this copy professionally.

Use:

* title metadata
* description
* Open Graph
* Twitter/X metadata
* canonical URLs
* robots
* sitemap
* structured data where appropriate
* semantic HTML
* proper heading hierarchy
* descriptive image alt text

Create a strong favicon/app icon configuration.

Use appropriate structured data for a software application where useful.

Do not keyword stuff.

---

# 18. SEO CONTENT STRATEGY

The website should naturally rank around concepts such as:

* music production collaboration
* collaborate with music producers
* music producer collaboration software
* remote music production
* collaborate on DAW projects
* producer collaboration
* music project collaboration
* share music production projects
* collaborate on stems
* remote producer workflow

Do not force these keywords into copy.

Write naturally.

---

# 19. ACCESSIBILITY

Implement:

* semantic HTML
* keyboard navigation
* visible focus states
* appropriate contrast
* accessible buttons
* accessible theme toggle
* meaningful aria labels where required
* reduced motion support
* proper heading hierarchy

Do not rely solely on color to communicate status.

---

# 20. PERFORMANCE

Prioritize performance.

Use:

* Next.js image optimization
* lazy loading where appropriate
* minimal client-side JavaScript
* server components by default
* client components only where interaction requires them
* optimized fonts
* no unnecessary animation libraries
* no huge background videos unless genuinely useful

The landing page should load quickly.

---

# 21. CONTENT RULE

The website is NOT product documentation.

Do not reproduce the README.

The README explains implementation and functionality.

The website sells the product.

Transform functionality into producer-oriented benefits.

For example:

README:

> "ProdCollab records the push and the actual pushing username."

Website:

> **Know who updated the production.**

README:

> "ProdCollab stages only the files that need to be sent."

Website:

> **Only the work that changed moves with the update.**

README:

> "The watcher pauses while files are being updated."

Website:

Do not mention this.

It is implementation detail.

README:

> "A conflict copy is protected from pushes until you choose what to do."

Website:

> **Your local work stays protected when two versions collide.**

This distinction is extremely important.

---

# 22. BRAND VOICE

ProdCollab should sound:

* confident
* calm
* knowledgeable
* creative
* minimal
* mature
* producer-native

It should NOT sound:

* corporate
* overly technical
* cheesy
* hype-driven
* startup-bro
* gamer-ish
* developer-focused

Imagine the website was designed for someone who has spent years inside FL Studio, Ableton, Logic or Pro Tools.

They should read the copy and think:

> "Yeah. That's exactly the problem."

---

# 23. IMPORTANT PRODUCT POSITIONING

The central idea should repeatedly communicate:

### You don't have to change how you make music to collaborate.

That is more important than any individual feature.

ProdCollab fits around the producer's existing workflow.

The producer continues using their normal:

* DAW
* project folder
* samples
* stems
* presets
* recordings
* production setup

ProdCollab handles the collaboration layer around that workflow.

---

# 24. DO NOT MAKE THESE CLAIMS

Do not claim:

* real-time simultaneous editing of the same DAW session
* that multiple producers can open the exact same physical folder simultaneously
* that ProdCollab replaces a DAW
* that ProdCollab is a DAW plugin
* that collaboration is instantaneous regardless of file size
* unlimited storage
* unlimited collaborators
* macOS/Linux support
* mobile apps
* features not described in the README

Do not invent pricing.

Do not invent testimonials.

Do not invent customer logos.

Do not invent user counts.

Do not invent performance statistics.

Do not invent integrations.

Use placeholders or omit sections where real data is unavailable.

---

# 25. DESIGN SYSTEM

Create reusable design tokens for:

* background
* foreground
* cards
* borders
* muted text
* primary
* success
* destructive
* radius
* shadows

Base them closely on the supplied desktop CSS.

Desktop application reference:

```css
--background: 0 0% 0%;
--foreground: 0 0% 92%;
--card: 0 0% 4%;
--primary: 220 72% 62%;
--secondary: 0 0% 9%;
--muted: 0 0% 9%;
--muted-foreground: 0 0% 52%;
--success: 145 28% 48%;
--destructive: 0 42% 42%;
--border: 0 0% 15%;
--input: 0 0% 8%;
--ring: 220 72% 62%;
```

Adapt these intelligently for the web and create an equally polished light theme.

---

# 26. COMPONENT ARCHITECTURE

Create reusable components such as:

```text
components/
├── navigation/
├── footer/
├── theme-toggle/
├── buttons/
├── product-showcase/
├── download-card/
├── feature-section/
├── feature-grid/
├── workflow/
├── version-history/
├── conflict-preview/
├── notification-preview/
├── device-mockup/
├── section-heading/
└── ui/
```

Do not create one giant homepage component.

Keep sections composable.

---

# 27. SUGGESTED PROJECT STRUCTURE

Use a clean Next.js App Router structure:

```text
app/
├── layout.tsx
├── page.tsx
├── download/
│   └── page.tsx
├── features/
│   └── page.tsx
├── how-it-works/
│   └── page.tsx
├── about/
│   └── page.tsx
├── privacy/
│   └── page.tsx
├── terms/
│   └── page.tsx
├── sitemap.ts
├── robots.ts
└── globals.css

components/
├── navigation/
├── footer/
├── marketing/
├── product/
├── download/
└── ui/

public/
├── brand/
├── screenshots/
└── icons/
```

Adapt if necessary.

---

# 28. LOGO

If the ProdCollab logo assets exist, use them.

Do not redesign the logo unnecessarily.

If they do not exist, create a clean placeholder component that can easily be replaced later.

The logo should work in:

* dark mode
* light mode
* navigation
* footer
* download page

---

# 29. CTA STRATEGY

Primary CTA:

**Download for Windows**

Secondary CTA:

**See how it works**

Other contextual CTAs:

**Explore features**

**See collaboration in action**

Avoid generic:

* Get Started
* Learn More
* Try Now
* Start Your Journey
* Discover More

The CTA should tell the user what actually happens.

---

# 30. FINAL QUALITY BAR

Do not stop once the page technically works.

After implementing the website, review it as a senior product designer.

Ask:

1. Does this look like a real product?
2. Does it feel connected to the desktop application?
3. Would a music producer understand the value within 5 seconds?
4. Does the copy sound like it was written for producers?
5. Is the download CTA obvious?
6. Does the page avoid developer terminology?
7. Does it avoid generic SaaS aesthetics?
8. Does dark mode feel premium?
9. Does light mode feel intentionally designed?
10. Does the mobile experience feel designed rather than compressed?
11. Are the visuals actually communicating the product?
12. Are we making any unsupported claims?
13. Is the SEO foundation complete?
14. Is the site fast?
15. Does the website make me want to install ProdCollab?

If the answer to any of these is no, improve the implementation.

---

# 31. MOST IMPORTANT CREATIVE DIRECTION

Do not treat this website as:

> "a website for a software developer's Electron application."

Treat it as:

> **the digital home of a serious music-production collaboration product.**

The technology underneath ProdCollab is complex.

The experience should feel simple.

The producer should never need to understand how it works internally.

They should only understand:

**I have a production.
My collaborator has a production.
ProdCollab keeps the work connected.**

That simplicity is the product.

Build the website around that idea.
