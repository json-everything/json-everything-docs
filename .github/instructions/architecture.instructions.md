---
applyTo: "**"
---

# Architecture

This repository is a Jekyll documentation site (Chirpy-based) for the `json-everything` ecosystem.

## Major Areas

- `_docs/`: Primary authored content collection. Each page is rendered as documentation content.
- `_docs/api/`: Generated API reference pages (sync target, not primary authoring surface).
- `_layouts/`, `_includes/`, `_sass/`, `_javascript/`: Theme and rendering customizations.
- `_data/`: Site data (locales, contact links, sharing config, asset settings).
- `assets/`: Static assets served by the site.
- `tools/`, `run.*`, `init.*`: Local helper scripts.
- `_site/`: Build output only. Never hand-edit.

## Content Organization

- Documentation pages are files under `_docs/**` with front matter.
- Navigation hierarchy is controlled by front matter (`order`, `bookmark`, `folder`, `separator`) and directory structure.
- Permalinks are generally section-scoped and explicitly set for many pages.

## Change Boundaries

- Prefer content edits in `_docs/**` for documentation requests.
- Touch templates/assets only when the request needs presentation or behavior changes.
- Do not commit intentional edits to generated output under `_site/`.
- Keep changes targeted; avoid broad refactors to theme/template code during content tasks.