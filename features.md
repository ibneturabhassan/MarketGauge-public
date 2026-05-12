# Features

## Product

- Macro and FX regime dashboard with monthly scores (0–100)
- Score history and component breakdown to explain drivers of change
- Confidence/coverage labels when data is partial or insufficient
- Currency strength boards and FX pair views
- Validation outputs (e.g., diagnostics for calibration and forward returns)

## Engineering

- Multi-source ingestion with pluggable adapters (FRED + DB.nomics)
- Repository/mapping layer to keep scoring source-agnostic
- Expanding-window scoring/backtests to avoid lookahead bias
- Lag-aware handling for quarterly and delayed-release indicators
- Config-driven model registry + model modules for extensibility
- SQLite persistence for reproducible backfills and fast dashboard reads

## Model Coverage

- U.S. macro: recession risk, macro stress, USD strength
- Currency strength: EUR, JPY
- FX pairs: EUR/USD, USD/JPY, EUR/JPY

