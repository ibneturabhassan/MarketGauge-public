# MarketGauge (Public Showcase)

MarketGauge is a full‑stack dashboard that ingests public macro + FX data, normalizes it to a monthly timeline, and computes **regime scores (0–100)** for:

- U.S. macro risk (recession risk + macro stress + USD strength)
- Currency strength (EUR, JPY)
- FX pair scores (EUR/USD, USD/JPY, EUR/JPY)

This folder is the **employer‑facing** showcase version of the project. The full production source code is kept private; this public package focuses on architecture, engineering decisions, and sanitized code excerpts.

## Demo (placeholders)

- Screenshots: see `public-showcase/screenshots/`
- Short walkthrough video/GIF: *(add link here)*
- Live demo: *(add link here, if you deploy one)*

## Tech Stack

- Backend: Node.js, Express, SQLite (`better-sqlite3`)
- Frontend: React, TypeScript, Tailwind, Recharts
- Data sources: FRED + DB.nomics (ingested into local SQLite)
- Monorepo: npm workspaces (`/frontend`, `/backend`) *(private repo)*

## What It Does (high level)

1. **Ingests** time series from multiple public sources into SQLite.
2. **Aligns** everything to a canonical month‑end score date (end of calendar month).
3. **Transforms** raw indicators into comparable scores (percentiles / z‑scores / bands).
4. **Computes** model scores as weighted composites with coverage/confidence metadata.
5. **Serves** a JSON API consumed by a React dashboard (history, components, validation).

## Key Features

- Config‑driven model registry (add a model mostly by adding config + mappings)
- Walk‑forward / expanding‑window backtests to avoid lookahead bias
- Coverage‑aware scoring (missing components rescale weights; confidence labels propagate)
- Multi‑source data ingestion with a repository/mapping layer (source‑agnostic scoring)
- Currency + pair analytics that build on the same primitives as macro scoring

More detail: `public-showcase/features.md`

## Architecture

See `public-showcase/architecture.md` for the full diagram + explanation.

## Interesting Technical Decisions (examples)

- **Month‑end as canonical score date** to align mixed frequencies (daily/weekly/monthly/quarterly).
- **Repository/mapping layer** so scoring code never hardcodes provider IDs.
- **Expanding‑window transforms** so historical scores reflect what was known at the time.
- **Rescaled weights under missingness** to keep scores interpretable across partial coverage.

## Testing Strategy (placeholders)

- Unit tests for transforms and score composition
- Backtest/validation scripts for model diagnostics (AUC/Brier, forward returns, etc.)
- Ingestion sanity checks (schema, duplicates, gaps, revisions)

*(Add concrete numbers/commands here as you polish the portfolio.)*

## Security & Privacy

- Secrets (API keys, tokens, `.env`) are never published in `public-showcase/`.
- The export script copies **only** `public-showcase/` into a separate public repo folder.
- Screenshots must be reviewed to ensure no local paths, credentials, or private data appear.

Checklist: `PUBLICATION.md`

## What I Learned (placeholders)

- Designing a scoring engine that stays extensible as the model catalog grows
- Handling mixed-frequency macro data and publication lags without lookahead bias
- Building a dashboard UX that explains uncertainty/coverage rather than hiding it

## Future Improvements (placeholders)

- Add more currencies/pairs (GBP, CHF, CAD, AUD, …)
- Add more data-source adapters (beyond FRED/DB.nomics)
- Add automated publishing checks (secret scanning + screenshot review checklist)

## Note on Source Code

Only the materials under `public-showcase/` are intended for public release. The full source code, deployment configs, and operational details remain private.

