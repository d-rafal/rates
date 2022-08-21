import {
  DEFAULT_SELECTED_CURRENCY,
  isValidSelectedCurrencyQueryInUrl,
  SELECTED_CURRENCY_QUERY_IN_URL_KEY_NAME,
} from "../../../@types-and-const/@url-queries/@currency";
import { getValueFromUrlQueryTypeGuard } from "../../../utilities/getValueFromUrlQueryTypeGuard";

const useGetSelectedCurrencyFromUrl = (searchParams: URLSearchParams) => {
  const selectedCurrency = getValueFromUrlQueryTypeGuard(
    searchParams.get(SELECTED_CURRENCY_QUERY_IN_URL_KEY_NAME),
    DEFAULT_SELECTED_CURRENCY,
    isValidSelectedCurrencyQueryInUrl
  );

  return selectedCurrency;
};

export default useGetSelectedCurrencyFromUrl;
