const AVAILABLE_CURRENCIES = ["USD", "EUR"] as const;
export const USD_CURRENCY: typeof AVAILABLE_CURRENCIES[0] = "USD";
export const EUR_CURRENCY: typeof AVAILABLE_CURRENCIES[1] = "EUR";

export type SelectedCurrencyQueryInUrl = typeof AVAILABLE_CURRENCIES[number];

export const DEFAULT_SELECTED_CURRENCY: SelectedCurrencyQueryInUrl = "USD";

export const isValidSelectedCurrencyQueryInUrl = (
  selectedCurrency: string | null | undefined
): selectedCurrency is SelectedCurrencyQueryInUrl => {
  return (
    AVAILABLE_CURRENCIES.find((element) => element === selectedCurrency) !==
    undefined
  );
};

export const SELECTED_CURRENCY_QUERY_IN_URL_KEY_NAME = "currency";
export type SelectedCurrencyQueryInUrlKayName =
  typeof SELECTED_CURRENCY_QUERY_IN_URL_KEY_NAME;
