# GSD Command Reference

**GSD** (Get Shit Done) creates hierarchical project plans optimized for solo agentic development.

## Quick Start

1. `/gsd-new-project` - Initialize project (includes research, requirements, roadmap)
2. `/gsd-plan-phase 1` - Create detailed plan for first phase
3. `/gsd-execute-phase 1` - Execute the phase

## Core Workflow

`/gsd-new-project` → `/gsd-plan-phase` → `/gsd-execute-phase` → repeat

### Project Initialization

**`/gsd-new-project`**
Initialize new project through unified flow.
*Usage Example:* `/gsd-new-project`

**`/gsd-map-codebase [--fast] [--focus <area>] [--query <term>]`**
Map an existing codebase for brownfield projects.
*Usage Example:* `/gsd-map-codebase --fast`

### Phase Planning

**`/gsd-discuss-phase <number> [--chain | --analyze | --power | --assumptions] [--batch[=N]]`**
Help articulate your vision for a phase before planning.
*Usage Example:* `/gsd-discuss-phase 2 --batch=3`

**`/gsd-mvp-phase <number> [--force]`**
Plan a phase as a vertical MVP slice.
*Usage Example:* `/gsd-mvp-phase 1`

**`/gsd-plan-phase <number> [--research] [--skip-research] [--research-phase <N>] [--view] [--gaps] [--skip-verify] [--tdd] [--mvp]`**
Create detailed execution plan for a specific phase.
*Usage Example:* `/gsd-plan-phase 1`

### Execution

**`/gsd-execute-phase <phase-number> [--wave N] [--gaps-only] [--tdd]`**
Execute all plans in a phase, or run a specific wave.
*Usage Example:* `/gsd-execute-phase 5 --wave 2`

### Smart Router

**`/gsd-progress --do "<description>"`**
Route freeform text to the right GSD command automatically.
*Usage Example:* `/gsd-progress --do "fix the login button"`

### Quick Mode

**`/gsd-quick [--full] [--validate] [--discuss] [--research]`**
Execute small, ad-hoc tasks with GSD guarantees but skip optional agents.
*Usage Example:* `/gsd-quick --research --validate`

**`/gsd-fast [description]`**
Execute a trivial task inline — no subagents, no planning files, no overhead.
*Usage Example:* `/gsd-fast "fix the typo in README"`

### Roadmap Management

**`/gsd-phase <description>`**
Add new phase to end of current milestone.
*Usage Example:* `/gsd-phase "Add admin dashboard"`

**`/gsd-phase --insert <after> <description>`**
Insert urgent work as decimal phase between existing phases.
*Usage Example:* `/gsd-phase --insert 7 "Fix critical auth bug"`

**`/gsd-phase --remove <number>`**
Remove a future phase and renumber subsequent phases.
*Usage Example:* `/gsd-phase --remove 17`

**`/gsd-phase --edit <number> [--force]`**
Edit any field of an existing roadmap phase in place.

### Milestone Management

**`/gsd-new-milestone <name>`**
Start a new milestone through unified flow.
*Usage Example:* `/gsd-new-milestone "v2.0 Features"`

**`/gsd-complete-milestone <version>`**
Archive completed milestone and prepare for next version.
*Usage Example:* `/gsd-complete-milestone 1.0.0`

### Progress Tracking

**`/gsd-progress [--next | --forensic | --do "<description>"]`**
Check project status and intelligently route to next action.
*Usage Example:* `/gsd-progress --next`

### Session Management

**`/gsd-resume-work`**
Resume work from previous session with full context restoration.
*Usage Example:* `/gsd-resume-work`

**`/gsd-pause-work [--report]`**
Create context handoff when pausing work mid-phase.
*Usage Example:* `/gsd-pause-work`

### Debugging

**`/gsd-debug [issue description] [--diagnose]`**
Systematic debugging with persistent state across context resets.
*Usage Example:* `/gsd-debug "login button doesn't work"`

### Spiking & Sketching

**`/gsd-spike [idea] [--quick]`**
Rapidly spike an idea with throwaway experiments to validate feasibility.
*Usage Example:* `/gsd-spike "can we stream LLM output over WebSockets?"`

**`/gsd-sketch [idea] [--quick]`**
Rapidly sketch UI/design ideas using throwaway HTML mockups.
*Usage Example:* `/gsd-sketch "dashboard layout for the admin panel"`

**`/gsd-spike --wrap-up`**
Package spike findings into a persistent project skill.
*Usage Example:* `/gsd-spike --wrap-up`

**`/gsd-sketch --wrap-up`**
Package sketch design findings into a persistent project skill.
*Usage Example:* `/gsd-sketch --wrap-up`

### Capturing Ideas, Notes, and Todos

**`/gsd-capture [description]`**
Capture an idea or task as a structured todo from current conversation.
*Usage Example:* `/gsd-capture Add auth token refresh`

**`/gsd-capture --note <text>`**
Zero-friction note capture — one command, instant save, no questions.
*Usage Example:* `/gsd-capture --note refactor the hook system`

**`/gsd-capture --list [area]`**
List pending todos and select one to work on.
*Usage Example:* `/gsd-capture --list api`

### User Acceptance Testing

**`/gsd-verify-work [phase]`**
Validate built features through conversational UAT.
*Usage Example:* `/gsd-verify-work 3`

### Ship Work

**`/gsd-ship [phase]`**
Create a PR from completed phase work with an auto-generated body.
*Usage Example:* `/gsd-ship 4`

### Code Review & Auditing

**`/gsd-review --phase N [--all]`**
Cross-AI peer review — invoke external AI CLIs to independently review phase plans.
*Usage Example:* `/gsd-review --phase 3 --all`

**`/gsd-pr-branch [target]`**
Create a clean branch for pull requests by filtering out .planning/ commits.
*Usage Example:* `/gsd-pr-branch main`

### Auditing & Forensics

**`/gsd-audit-uat`**
Cross-phase audit of all outstanding UAT and verification items.
*Usage Example:* `/gsd-audit-uat`

**`/gsd-audit-milestone [version]`**
Audit milestone completion against original intent.
*Usage Example:* `/gsd-audit-milestone`

### Configuration

**`/gsd-settings`**
Configure workflow toggles and model profile interactively.
*Usage Example:* `/gsd-settings`

**`/gsd-config [--profile <profile> | --advanced | --integrations]`**
Configure GSD beyond the basic settings.
*Usage Example:* `/gsd-config --profile budget`

### Utility Commands

**`/gsd-cleanup`**
Archive accumulated phase directories from completed milestones.
*Usage Example:* `/gsd-cleanup`

**`/gsd-help`**
Show this command reference.
*Usage Example:* `/gsd-help`

**`/gsd-update [--sync] [--reapply]`**
Update GSD to latest version with changelog preview.
*Usage Example:* `/gsd-update`
