import { Typography } from "@mui/material";
import { useMemo } from "react";
import { CurrencyRate } from "../../../api/currency/models";
import { Skeleton } from "@mui/material";

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
    return rates?.reduce<BestInvestment>(
      (previousBestInvestment, currentRate, currentIndex, array) => {
        const relativeBestInvestment = array
          .slice(currentIndex)
          .reduce<Omit<BestInvestment, "buyDate" | "refundInPercentage">>(
            (previous, actual) => {
              const difference = actual.mid - currentRate.mid;

              if (difference > previous.refund) {
                return { refund: difference, sellDate: actual.effectiveDate };
              }

              return previous;
            },
            { refund: previousBestInvestment.refund, sellDate: null }
          );

        if (relativeBestInvestment.refund > previousBestInvestment.refund) {
          return {
            ...relativeBestInvestment,
            refundInPercentage: Math.floor(
              (relativeBestInvestment.refund / currentRate.mid) * 100
            ),
            buyDate: currentRate.effectiveDate,
          };
        }

        return previousBestInvestment;
      },
      {
        refund: 0.0,
        refundInPercentage: 0,
        buyDate: null,
        sellDate: null,
      }
    );
  }, [rates]);

  const displayedText =
    isFetching && !bestInvestment ? (
      <Skeleton />
    ) : bestInvestment ? (
      `Best investment: ${Math.floor(bestInvestment.refund * 100) / 100}zł./${
        bestInvestment.refundInPercentage
      }% (buy at: ${bestInvestment.buyDate}, sell at: ${
        bestInvestment.sellDate
      })`
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
