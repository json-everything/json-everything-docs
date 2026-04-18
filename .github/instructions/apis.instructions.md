---
applyTo: "**"
---

# APIs

This repository documents APIs; it does not define runtime API behavior.

- Treat `_docs/api/**` as generated reference content synced from the main `json-everything` repository.
- Do not hand-edit generated API member pages unless explicitly requested for a one-off docs hotfix.
- Preferred flow for API reference changes:
	1. Update source comments or API docs generator behavior in the main repository.
	2. Regenerate/sync API docs into this repo.
	3. Validate navigation, permalinks, and rendering in this repo.
- Safe manual edits in this repo are usually limited to navigation wrappers (for example API section title/close pages) and cross-links outside generated member content.

When a request mixes product behavior and docs behavior, document current behavior and call out uncertainty instead of inventing API semantics.