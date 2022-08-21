import { getSchemaWithAssertion } from "../../models/validation";
import { FetchDataReturnValue } from "../fetchData";
import { CurrencyRate, currencyRateSchema } from "./models";

const isCurrencyRate = getSchemaWithAssertion(
  currencyRateSchema,
  "currencyRateSchema"
);

export const isRespWithCurrency = (
  response: FetchDataReturnValue<unknown>
): response is FetchDataReturnValue<CurrencyRate> => {
  return response.ok && isCurrencyRate(response.body);
};
