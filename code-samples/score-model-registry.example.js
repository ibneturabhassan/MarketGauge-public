/**
 * Example: Config-driven model registry (sanitized).
 *
 * Why it’s interesting:
 * - Models are defined mostly as configuration so the engine stays generic.
 * - New models can be added without rewriting shared scoring logic.
 *
 * This is a representative excerpt, not the private source.
 */

export const scoreModelRegistry = [
  {
    id: "USD_STRENGTH_V1_1",
    domain: "currency",
    entity: "USD",
    canonicalFrequency: "MONTHLY",
    components: [
      {
        id: "price_trend",
        label: "Dollar Price Trend",
        weight: 0.5,
        seriesKeys: ["USD_NEER", "USD_REER"],
        transform: { kind: "momentum_percentile", months: 12 },
      },
      {
        id: "risk_appetite",
        label: "Risk Appetite Proxy",
        weight: 0.5,
        seriesKeys: ["VIX"],
        transform: { kind: "level_percentile", invert: false },
      },
    ],
    coverage: {
      lowThreshold: 0.6,
      insufficientThreshold: 0.4,
    },
  },
];

