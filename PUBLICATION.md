# Publication Checklist (MarketGauge)

Use this checklist before publishing or sharing this repository.

## Safe Contents

- `public-showcase/` (docs, diagrams, code excerpts, screenshots)
- `PUBLICATION.md`
- `scripts/export-public.sh`

## Do Not Publish

- Secrets of any kind: API keys, tokens, passwords, `.env*`
- Internal URLs/hostnames/IPs, deployment configs, or infrastructure details
- Databases, dumps, logs, or any user/customer data
- Screenshots that reveal credentials, personal info, or internal hostnames

## Pre-Publish Checklist

1. Confirm export copies only `public-showcase/` plus `PUBLICATION.md`.
2. Search for common secret patterns: `API_KEY`, `TOKEN`, `SECRET`, `PASSWORD`, `FRED_API_KEYS`.
3. Confirm no `.env*` files exist under `public-showcase/`.
4. Review screenshots manually (no credentials, personal info, or internal hostnames).
5. Ensure code excerpts are short and free of credentials or operational details.

## Export Workflow

Use `scripts/export-public.sh` to export a clean folder for a public repository:

```bash
./scripts/export-public.sh
./scripts/export-public.sh ../MarketGauge-public
```

