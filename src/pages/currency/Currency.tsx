import { Box, Skeleton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";
import {
  getTimeRangeDescriptorFromUrlQuery,
  TIME_RANGE_QUERY_IN_URL,
} from "../../@types-and-const/@url-queries/@time-range";
import { useCurrencyRateQuery } from "../../api/currency/currencyRatesApi";
import useUpdateAppBarTitle from "../../components/appbar/title-provider/useUpdateAppBarTitle";
import { CURRENCY_ROUTE } from "../../routes/currencyRoute";
import BestInvestmentIndicator from "./components/BestInvestmentIndicator";
import CurrencyChart from "./components/CurrencyChart";
import SelectionCriteriaSection from "./components/SelectionCriteriaSection";
import useGetSelectedCurrencyFromUrl from "./hooks/useGetSelectedCurrencyFromUrl";

const Currency = () => {
  const theme = useTheme();

  useUpdateAppBarTitle(CURRENCY_ROUTE.text);

  const [searchParams] = useSearchParams();

  const selectedCurrency = useGetSelectedCurrencyFromUrl(searchParams);

  const {
    timeRangeForDataFetching: [startDate, endDate],
  } = getTimeRangeDescriptorFromUrlQuery(
    searchParams.get(TIME_RANGE_QUERY_IN_URL.key)
  );

  const {
    // data: currencyRates,
    // error,
    // isLoading,
    isFetching,
    currentData: currencyRates,
  } = useCurrencyRateQuery(
    { selectedCurrency, startDate, endDate },
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  return (
    <Box
      sx={{
        display: "flex",
        flex: "auto",
        flexDirection: "column",
      }}
    >
      <SelectionCriteriaSection />
      <Box component="section" sx={{ maxWidth: "100%" }}>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            mb: "1rem",
            [theme.breakpoints.down("sm")]: {
              textAlign: "center",
            },
          }}
        >
          {`Actual rate ${selectedCurrency}/PLN: ${
            currencyRates?.rates.at(-1)?.mid ?? "-"
          } zł.`}
        </Typography>
      </Box>
      {isFetching && false ? (
        <Skeleton variant="rectangular" width="90%" height={500} />
      ) : (
        <>
          <CurrencyChart rates={currencyRates?.rates} isFetching={isFetching} />
          <BestInvestmentIndicator
            rates={currencyRates?.rates}
            isFetching={isFetching}
          />
        </>
      )}
    </Box>
  );
};

export default Currency;
