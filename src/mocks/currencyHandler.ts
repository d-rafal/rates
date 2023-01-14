import { rest, PathParams } from "msw";
import {
  EUR_CURRENCY,
  USD_CURRENCY,
} from "../@types-and-const/@url-queries/@currency";
import { CurrencyRate } from "../api/currency/models";
import { ARTIFICIAL_DELAY_MS } from "./config";
import { currencyEurData, currencyUsdData } from "./currencyData";

const findStartEndIndex = (
  array: CurrencyRate["rates"],
  startDate: PathParams<string>[string],
  endDate: PathParams<string>[string]
) => {
  const startIndex = array.findIndex(
    (element) => element.effectiveDate === startDate
  );

  if (startIndex === -1) {
    throw new Error("startIndex not found");
  }

  let endIndex = array.findIndex(
    (element) => element.effectiveDate === endDate
  );

  if (endIndex === -1) {
    endIndex = array.length;
  } else {
    ++endIndex;
  }

  return [startIndex, endIndex] as const;
};

export const currencyHandler = [
  rest.get(
    "https://api.nbp.pl/api/exchangerates/rates/a/:currency/:startDate/:endDate",
    function (req, res, ctx) {
      const resBadRequest = res(
        ctx.delay(ARTIFICIAL_DELAY_MS),
        ctx.status(400)
      );

      const { currency, startDate, endDate } = req.params;

      if (
        Array.isArray(currency) ||
        Array.isArray(startDate) ||
        Array.isArray(endDate) ||
        !startDate
      ) {
        return resBadRequest;
      }

      const createResponse = (currencyDate: CurrencyRate) => {
        try {
          const [startIndex, endIndex] = findStartEndIndex(
            currencyDate.rates,
            startDate,
            endDate
          );

          return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json({
              ...currencyDate,
              rates: currencyDate.rates.slice(startIndex, endIndex),
            })
          );
        } catch (error) {
          return resBadRequest;
        }
      };

      if (currency === USD_CURRENCY.toLowerCase()) {
        return createResponse(currencyUsdData);
      }

      if (currency === EUR_CURRENCY.toLowerCase()) {
        return createResponse(currencyEurData);
      }

      return resBadRequest;
    }
  ),
];
