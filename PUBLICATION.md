# Publication Rules & Checklist (MarketGauge)

This repository contains a private development version. Only the contents of `public-showcase/` are intended for public release.

## What is safe to publish

- `public-showcase/` (docs, diagrams, sanitized code samples, screenshots)
- This file (`PUBLICATION.md`)
- `scripts/export-public.sh` (exports only safe public files)

## What must NOT be published

- Any secrets: API keys, tokens, passwords, `.env` files
- Private URLs, internal hostnames, IPs, or deployment configs
- Full private source code (backend/frontend) unless explicitly requested
- Database files, dumps, or user data
- Logs containing identifiers, credentials, or private paths
- Screenshots that reveal local paths, credentials, accounts, or internal dashboards
- Anything you would not want copied verbatim

## Publication Checklist (run before pushing public)

1. Verify only `public-showcase/` will be exported.
2. Search for common secret patterns:
   - `FRED_API_KEY`, `FRED_API_KEYS`, `API_KEY`, `TOKEN`, `SECRET`, `PASSWORD`
3. Ensure no `.env*` files are inside `public-showcase/`.
4. Review screenshots manually (no credentials, personal info, or private hostnames).
5. Confirm code samples are short, representative, and sanitized (no full modules copied).
6. Confirm docs do not describe sensitive implementation details (exact IDs are okay if public; avoid internal ops).

## Export Workflow (recommended)

Use `scripts/export-public.sh` to create a clean folder for a separate public repository.

- The script copies **only** `public-showcase/` into the destination.
- Default destination is a sibling directory: `../MarketGauge-public` (configurable).

Example (bash):

```bash
./scripts/export-public.sh
./scripts/export-public.sh ../MarketGauge-public
```

## Ongoing Workflow (how to keep it current)

When you add a meaningful feature in the private repo:

1. Update `public-showcase/features.md` (1–3 bullets).
2. Update `public-showcase/architecture.md` if a new subsystem was added.
3. Add/refresh 1–2 screenshots in `public-showcase/screenshots/`.
4. Add a sanitized excerpt in `public-showcase/code-samples/` if it demonstrates a useful skill.
5. Re-run the export script and review the public folder before publishing.

