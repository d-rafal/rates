import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { SelectedCurrencyQueryInUrl } from "../../@types-and-const/@url-queries/@currency";
import { rtkqApi } from "../../app/store/api";
import { reportedMessageAdded } from "../../app/store/features/reported-messages/reportedMessagesSlice";
import { fetchData } from "../fetchData";
import { isRespWithCurrency } from "./assertions";
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
    currencyRate: build.query<CurrencyRate | undefined, CurrencyRateQueryProps>(
      {
        // query: ({ selectedCurrency, startDate, endDate }) =>
        //   "http://api.nbp.pl/api/exchangerates/rates/a/" +
        //   `${selectedCurrency}/${startDate}/${endDate}`.toLowerCase(),
        queryFn: async (
          { selectedCurrency, startDate, endDate },
          { signal, dispatch, getState },
          _extraOptions,
          baseQuery
        ) => {
          const res = await baseQuery(
            "http://api.nbp.pl/api/exchangerates/rates/a/" +
              `${selectedCurrency}/${startDate}/${endDate}`.toLowerCase()
          );

          console.log("res =", res);

          if (res.error) {
            dispatch(
              reportedMessageAdded({
                messageForUser: "error directly form baseQuery messageForUser",
                type: "error",
                autoHideDuration: 0,
              })
            );
            // return { ...res, data: undefined };
            return res as QueryReturnValue<
              undefined,
              FetchBaseQueryError,
              FetchBaseQueryMeta
            >;
          } else if (!res.data) {
            dispatch(
              reportedMessageAdded({
                messageForUser: "no response",
                type: "error",
                autoHideDuration: 0,
              })
            );

            return { ...res, data: undefined };
            // return res as QueryReturnValue<
            //   undefined,
            //   FetchBaseQueryError,
            //   FetchBaseQueryMeta
            // >;
          } else if (isRespWithCurrency(res)) {
            return res;
          } else {
            dispatch(
              reportedMessageAdded({
                messageForUser: "response in wrong format",
                type: "error",
                autoHideDuration: 0,
              })
            );

            return { ...res, data: undefined };
            // return res as QueryReturnValue<
            //   undefined,
            //   FetchBaseQueryError,
            //   FetchBaseQueryMeta
            // >;
          }

          // return res as QueryReturnValue<
          //   CurrencyRate,
          //   FetchBaseQueryError,
          //   FetchBaseQueryMeta
          // >;
        },
        providesTags: (result, error, arg) => [arg.selectedCurrency],
      }
    ),
    tableA: build.query<any, void>({
      query: () => "http://api.nbp.pl/api/exchangerates/tables/a",
    }),
  }),
  overrideExisting: false,
});

export const { useCurrencyRateQuery, useTableAQuery } = currencyRatesApi;
