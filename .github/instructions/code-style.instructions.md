---
applyTo: "**/*.{html,md,markdown,css,scss,js,mjs,ts,yml,yaml,rb}"
---

# Code Style

Follow repository formatting configuration first:

- `.editorconfig` is authoritative for indentation, charset, line endings, and final newline.
- `.prettierrc` is authoritative where Prettier is used.
- `.stylelintrc.json` is authoritative for SCSS/CSS lint behavior.

## Markdown and Docs Content

- Use valid YAML front matter for docs pages.
- Use 2-space indentation for documentation files and front matter.
- Keep existing front matter key conventions when editing pages:
	- content pages commonly include `layout`, `title`, `bookmark`, `permalink`, `order`.
	- section wrapper pages may use `folder: true`, `separator: true`, and `close: true`.
- Preserve permalink and heading anchor stability unless the task explicitly asks to change URLs.
- Keep code fences language-tagged where possible.
- In markdown `c#`/`csharp` fenced code blocks, use 4-space indentation for code.

## Jekyll/Liquid/Theme Files

- Match the surrounding Liquid and HTML style in each file; do not reformat unrelated blocks.
- Keep include/layout changes minimal and scoped to the requested behavior.
- Avoid introducing new template abstractions unless reuse is clear and requested.

## JS/SCSS

- Run `npm run test` after SCSS changes when possible.
- Run `npm run build` after JS changes that affect bundled assets.
- Keep vendor-prefix and stylelint rule exceptions aligned with `.stylelintrc.json`; do not invent local deviations without reason.