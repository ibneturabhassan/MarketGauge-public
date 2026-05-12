# MarketGauge

MarketGauge is a full-stack dashboard that ingests macro + FX data, normalizes it to a monthly timeline, and computes regime scores (0–100) for:

- U.S. macro risk (recession risk + macro stress + USD strength)
- Currency strength (EUR, JPY)
- FX pair scores (EUR/USD, USD/JPY, EUR/JPY)

Full implementation available on request.

## Tech Stack

- Backend: Node.js, Express, SQLite (`better-sqlite3`)
- Frontend: React, TypeScript, Tailwind, Recharts
- Data sources: FRED + DB.nomics (ingested into local SQLite)
- Monorepo: npm workspaces (`/frontend`, `/backend`)

## What It Does

1. Ingests time series from multiple public sources into SQLite.
2. Aligns everything to a canonical month-end score date (end of calendar month).
3. Transforms raw indicators into comparable scores (percentiles / z-scores / bands).
4. Computes model scores as weighted composites with coverage/confidence metadata.
5. Serves a JSON API consumed by a React dashboard (history, components, validation).

## Key Features

- Config-driven model registry (add a model mostly by adding config + mappings)
- Walk-forward / expanding-window backtests to avoid lookahead bias
- Coverage-aware scoring (missing components rescale weights; confidence labels propagate)
- Multi-source data ingestion with a repository/mapping layer (source-agnostic scoring)
- Currency + pair analytics that build on the same primitives as macro scoring

More detail: `features.md`

## Architecture

See `architecture.md` for the diagram + explanation.

## Testing Strategy

- Unit tests for transforms and score composition.
- Backtest/validation scripts for model diagnostics (e.g., AUC/Brier and forward-return analysis).
- Ingestion sanity checks to catch schema and data integrity issues (duplicates/gaps/revisions).

## Publication Hygiene

- No secrets (API keys, tokens, `.env`) are included in this public repository.
- Screenshots are reviewed to ensure no credentials, personal data, or internal hostnames appear.

Checklist: `PUBLICATION.md`

## Screenshots

- `screenshots/us-economy-overview.jpg` — U.S. Economy dashboard snapshot
- `screenshots/currency-strength-board.jpg` — Currency strength board and pair-pressure matrix
- `screenshots/aud-detail.jpg` — Currency detail view (example)
