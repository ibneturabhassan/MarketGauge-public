/**
 * Purpose: Scoring pipeline skeleton.
 * Why it matters: Expanding-window transforms prevent lookahead bias in backtests,
 * and missing components rescale weights while propagating confidence labels.
 */

export function scoreModelAtMonthEnd({ modelConfig, seriesRepository, monthEndDate }) {
  const componentResults = modelConfig.components.map((component) => {
    const series = component.seriesKeys.map((key) => seriesRepository.getMonthlySeries(key, monthEndDate));
    const transformed = expandingWindowTransform(series, component.transform, monthEndDate);
    return { componentId: component.id, weight: component.weight, value: transformed.value, coverage: transformed.coverage };
  });

  const { score, coverageRatio, confidenceLabel } = weightedCompositeWithCoverage(componentResults, modelConfig.coverage);
  return { modelId: modelConfig.id, date: monthEndDate, score, coverageRatio, confidenceLabel, components: componentResults };
}

function expandingWindowTransform(series, transformSpec, asOfDate) {
  // Implementation omitted for brevity; shape shown for clarity.
  return { value: 50, coverage: 1.0 };
}

function weightedCompositeWithCoverage(componentResults, coverageSpec) {
  const present = componentResults.filter((c) => Number.isFinite(c.value));
  const weightSum = present.reduce((sum, c) => sum + c.weight, 0);
  const score = present.reduce((sum, c) => sum + (c.weight / weightSum) * c.value, 0);
  const coverageRatio = weightSum / componentResults.reduce((sum, c) => sum + c.weight, 0);
  const confidenceLabel =
    coverageRatio >= coverageSpec.lowThreshold ? "OK" : coverageRatio >= coverageSpec.insufficientThreshold ? "Low" : "Insufficient";
  return { score, coverageRatio, confidenceLabel };
}
