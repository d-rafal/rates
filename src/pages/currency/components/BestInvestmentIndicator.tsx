import { Skeleton, Typography } from "@mui/material";
import { useMemo } from "react";
import { CurrencyRate } from "../../../api/currency/models";

interface BestInvestmentIndicatorProps {
  rates: CurrencyRate["rates"] | undefined;
  isFetching: boolean;
}

interface BestInvestment {
  refund: number;
  refundInPercentage: number;
  buyDate: string | null;
  sellDate: string | null;
}

const BestInvestmentIndicator = ({
  rates,
  isFetching,
}: BestInvestmentIndicatorProps) => {
  const bestInvestment = useMemo(() => {
    return rates?.reduce<BestInvestment | null>(
      (previousBestInvestment, buyRate, buyRateIndex, array) => {
        const ratesSinceBuyRate = array.slice(buyRateIndex);

        const maxRateSinceBuyRate = ratesSinceBuyRate.reduce(
          (prevMaxRate, rate) => {
            if (prevMaxRate.mid < rate.mid) {
              return rate;
            }

            return prevMaxRate;
          }
        );

        const maxRefund = maxRateSinceBuyRate.mid - buyRate.mid;

        if (
          !previousBestInvestment ||
          maxRefund > previousBestInvestment.refund
        ) {
          return {
            refund: maxRefund,
            refundInPercentage: Math.floor((maxRefund / buyRate.mid) * 100),
            buyDate: buyRate.effectiveDate,
            sellDate: maxRateSinceBuyRate.effectiveDate,
          };
        }

        return previousBestInvestment;
      },
      null
    );
  }, [rates]);

  const displayedText = isFetching ? (
    <Skeleton />
  ) : bestInvestment ? (
    `Best investment: ${Math.floor(bestInvestment.refund * 100) / 100}zł./${
      bestInvestment.refundInPercentage
    }% (buy at: ${bestInvestment.buyDate}, sell at: ${bestInvestment.sellDate})`
  ) : (
    "no date to calculate result"
  );

  return (
    <Typography
      variant="h4"
      sx={{ flex: "auto", opacity: isFetching ? 0.5 : 1 }}
    >
      {displayedText}
    </Typography>
  );
};

export default BestInvestmentIndicator;
