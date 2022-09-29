import { SelectedCurrencyQueryInUrl } from "../../@types-and-const/@url-queries/@currency";
import { rtkqApi } from "../../app/store/api";
import { fetchData } from "../fetchData";
import { CurrencyRate } from "./models";

const currencyRate_api = async (currencyCode: string) => {
  return fetchData(
    "http://api.nbp.pl/api/exchangerates/rates/a/" + currencyCode.toLowerCase(),
    "GET",
    undefined,
    undefined,
    undefined
  ) as Promise<any>;
};

export const currencyApi_2 = {
  getActualRate: currencyRate_api,
};

interface CurrencyRateQueryProps {
  selectedCurrency: SelectedCurrencyQueryInUrl;
  startDate: string;
  endDate: string;
}

const currencyRatesApi = rtkqApi.injectEndpoints({
  endpoints: (build) => ({
    currencyRate: build.query<CurrencyRate, CurrencyRateQueryProps>({
      query: ({ selectedCurrency, startDate, endDate }) =>
        "http://api.nbp.pl/api/exchangerates/rates/a/" +
        `${selectedCurrency}/${startDate}/${endDate}`.toLowerCase(),
      providesTags: (result, error, arg) => [arg.selectedCurrency],
    }),
    tableA: build.query<any, void>({
      query: () => "http://api.nbp.pl/api/exchangerates/tables/a",
    }),
  }),
  overrideExisting: false,
});

export const { useCurrencyRateQuery, useTableAQuery } = currencyRatesApi;
