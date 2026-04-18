---
applyTo: "**"
---

# Agent Workflow

This file defines how AI agents MUST orient themselves before making changes in this repository.

Each step in this section MUST be executed as an explicit tool call. A step MUST NOT be skipped; having a file's content already in context is not a valid reason to omit the tool call.

## Before Making Any Code Changes

1. List instruction files in `.github/instructions/*.instructions.md` and read relevant files for the task.
2. The following files MUST always be read via explicit tool calls before any other action:
   - `workflow.instructions.md`
   - `commands.instructions.md`
   - `personal-preferences.instructions.md`
3. Read additional files by concern:
   - `code-style.instructions.md` when editing HTML, CSS, JS, Jekyll templates, or Ruby scripts.
   - `architecture.instructions.md` when changing repository structure, tooling, or build pipeline.
   - `domain-knowledge.instructions.md` when editing site content conventions or docs information architecture.
   - `instructions.instructions.md` when editing `.instructions.md` files.
4. For formatting and style, treat `.editorconfig`, `.prettierrc`, and `.stylelintrc.json` as authoritative where applicable.
5. Prefer minimal, targeted changes. Do not refactor unrelated code.

## Principles

- Treat instruction files as the desired state for future contributions.
- Keep changes aligned with a documentation-first workflow.
- Add or update validation where practical for behavioral changes.
- Keep instructions dynamic. If feedback reveals a missing or incorrect rule, update instruction files alongside the fix.

## Docs-First Defaults

- Default to editing documentation content under `_docs/**` unless the request clearly requires theme/script changes.
- Treat `_docs/api/**` as generated/synced content and avoid manual member-page edits.
- Avoid touching `_site/**` except as transient local build output.