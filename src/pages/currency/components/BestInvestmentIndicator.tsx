import { Box, Skeleton, Typography, useTheme } from "@mui/material";
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
  const theme = useTheme();

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

  if (isFetching) {
    return <Skeleton />;
  }

  const displayedText = bestInvestment ? (
    <>
      <Typography
        variant="h5"
        sx={{ minWidth: "max-content" }}
      >{`Best investment: ${Math.floor(bestInvestment.refund * 100) / 100}zł./${
        bestInvestment.refundInPercentage
      }%`}</Typography>
      <Typography
        variant="h5"
        sx={{ minWidth: "max-content" }}
      >{`(sell at: ${bestInvestment.sellDate})`}</Typography>
      <Typography
        variant="h5"
        sx={{ minWidth: "max-content" }}
      >{`(buy at: ${bestInvestment.buyDate})`}</Typography>
    </>
  ) : (
    <Typography>no date to calculate result</Typography>
  );

  return (
    <Box
      sx={{
        flex: "auto",
        [theme.breakpoints.down("lg")]: { flexDirection: "column" },
        opacity: isFetching ? 0.5 : 1,
        display: "flex",
        alignItems: "center",
        gap: "0.3rem",
      }}
    >
      {displayedText}
    </Box>
  );
};

export default BestInvestmentIndicator;
