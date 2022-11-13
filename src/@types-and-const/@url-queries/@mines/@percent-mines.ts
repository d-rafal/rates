export const MINES_PERCENT_QUERY_IN_URL = {
  key: "mines-percent" as const,
  minValue: 5 as const,
  maxValue: 25 as const,
};

export type MinesPercentQueryInUrlKayName =
  typeof MINES_PERCENT_QUERY_IN_URL["key"];

export const MINES_PERCENT_DEFAULT_VALUE = 20;

export const isValidMinesPercent = (
  value: number | null
): value is typeof MINES_PERCENT_DEFAULT_VALUE => {
  return (
    value !== null &&
    value >= MINES_PERCENT_QUERY_IN_URL.minValue &&
    value <= MINES_PERCENT_QUERY_IN_URL.maxValue
  );
};
