-- Purpose: Series mapping concept.
-- Why it matters: Keeps scoring code source-agnostic by mapping provider IDs to logical keys.

CREATE TABLE IF NOT EXISTS series_mapping (
  logical_key TEXT PRIMARY KEY,
  provider TEXT NOT NULL,
  provider_series_id TEXT NOT NULL,
  frequency TEXT NOT NULL
);

INSERT INTO series_mapping (logical_key, provider, provider_series_id, frequency)
VALUES
  ('US_UNEMPLOYMENT_RATE', 'FRED', 'UNRATE', 'MONTHLY'),
  ('EUR_NEER_BIS', 'FRED', 'NBXMBIS', 'MONTHLY'),
  ('US_ISM_PMI', 'DBNOMICS', 'ISM/pmi/pm', 'MONTHLY');
