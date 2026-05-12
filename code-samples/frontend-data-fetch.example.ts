/**
 * Example: Frontend data fetching contract (sanitized).
 *
 * Why it’s interesting:
 * - Centralizes API calls and caching so views stay simple.
 * - Designed around “latest + history + components” primitives.
 */

export type ScoreSnapshot = {
  scoreId: string;
  asOf: string; // YYYY-MM-DD month-end
  score: number; // 0..100
  confidence: "OK" | "Low" | "Insufficient";
};

export async function fetchLatestScores(): Promise<ScoreSnapshot[]> {
  const res = await fetch("/api/scores/latest");
  if (!res.ok) throw new Error(`Failed to fetch latest scores: ${res.status}`);
  return res.json();
}

