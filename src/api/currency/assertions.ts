import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { getSchemaWithAssertion } from "../../models/validation";
import { CurrencyRate, currencyRateSchema } from "./models";

const isCurrencyRate = getSchemaWithAssertion(
  currencyRateSchema,
  "currencyRateSchema"
);

// export const isRespWithCurrency = (
//   // response: FetchDataReturnValue<unknown>
//   response: any
// ): response is FetchDataReturnValue<CurrencyRate> => {
//   return response.ok && isCurrencyRate(response.body);
// };

// export const isRespWithCurrency = (
//   // response: FetchDataReturnValue<unknown>
//   response: any
// ): response is QueryReturnValue<
//   FetchDataReturnValue<CurrencyRate>,
//   FetchBaseQueryError,
//   FetchBaseQueryMeta
// > => {
//   return response.data?.ok && isCurrencyRate(response.data.body);
// };
export const isRespWithCurrency = (
  // response: FetchDataReturnValue<unknown>
  response: any
): response is QueryReturnValue<
  CurrencyRate,
  FetchBaseQueryError,
  FetchBaseQueryMeta
> => {
  return isCurrencyRate(response.data);
};
