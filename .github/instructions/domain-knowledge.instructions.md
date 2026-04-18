---
applyTo: "**"
---

# Domain Knowledge

This site documents multiple libraries in the `json-everything` ecosystem plus generated API reference and release notes.

## Documentation Taxonomy

- `_docs/schema`, `_docs/pointer`, `_docs/path`, `_docs/patch`, `_docs/logic`, `_docs/json-e`, `_docs/yaml`, etc. are product/topic sections.
- `_docs/release-notes` contains versioned change logs by library. These are edited in the main `json-everything` repository and copied here. Do not edit release note pages in this repo.
- `_docs/api` is API reference content, generally generated. Do not edit generated API member pages in this repo.

## Terminology and Naming

- Prefer official library naming as used in existing docs (for example `JsonSchema.Net`, `JsonLogic`, `JsonE.Net`).
- Distinguish clearly between:
	- JSON Schema specification behavior.
	- `json-everything` implementation behavior.
- For behavior claims, prefer explicit wording and examples over marketing language.

## Cross-Linking and Versions

- Prefer relative links to pages within this site.
- Use stable external links to specs and official project resources where helpful.
- When documenting version-specific behavior, name the library/package and version explicitly.

## Voice and Audience

- Audience is developers using .NET libraries and adjacent JSON tooling.
- Keep voice technical, direct, and pragmatic.
- Aim for friendly but not personal: approachable and human, but not informal or chatty.
- Prefer active voice and concrete behavior statements over abstract wording.
- Include concise examples when they reduce ambiguity.
- Distinguish style by content type:
	- Tutorial/basics pages: explanatory with practical examples.
	- Warnings and gotchas: explicit about risk and impact.
- Prefer precision over promotion:
	- State defaults, constraints, edge cases, and failure behavior.
	- Avoid marketing language and unsupported claims.