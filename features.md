# Features (Public Showcase)

This file is a portfolio-friendly feature list. It’s intentionally written without copying private implementation.

## Product Features

- Macro and FX regime dashboard with monthly scores (0–100)
- Score history + component breakdown (“why did the score move?”)
- Confidence/coverage labels when data is partial or insufficient
- Currency strength boards and FX pair views
- Validation outputs (e.g., diagnostics for recession-risk calibration and forward returns)

## Engineering Features

- Multi-source ingestion with pluggable adapters (FRED + DB.nomics)
- Repository/mapping layer to keep scoring source-agnostic
- Expanding-window scoring/backtests to avoid lookahead bias
- Lag-aware handling for quarterly and delayed-release indicators
- Config-driven model registry + model modules for extensibility
- SQLite persistence for reproducible backfills and fast dashboard reads

## Model Catalog (high-level)

*(Names below are representative of the private system’s model catalog. Keep this list updated as you add models.)*

- U.S. macro: recession risk, macro stress, USD strength
- Currency strength: EUR, JPY
- FX pairs: EUR/USD, USD/JPY, EUR/JPY

