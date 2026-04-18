---
applyTo: "**"
---

# Commands

Use these as safe defaults when working in this repository.

## Setup

- Install JS dependencies and build JS bundle:
	- Windows: `init.bat`
	- Unix: `./init.sh`
- Equivalent manual steps:
	- `npm install`
	- `npm run build`
	- `bundle install`

## Local Development

- Start local site with incremental rebuild and live reload:
	- Windows: `run.bat`
	- Unix: `./run.sh`
- Direct Jekyll serve equivalent:
	- `bundle exec jekyll serve --incremental --livereload`

## Validation

- SCSS lint: `npm run test`
- Rebuild JS assets: `npm run build`
- Full site build: `bundle exec jekyll build`
- Link/content validation (when htmlproofer is available):
	- Unix: `./tools/test`

## Agent Safety Rules

- Do not run `tools/init` unless explicitly requested; it performs destructive git operations (`git reset --hard`) as part of template initialization.
- Do not run release scripts for routine docs edits.
- Prefer the smallest validation set that matches the change scope, then report what was and was not executed.