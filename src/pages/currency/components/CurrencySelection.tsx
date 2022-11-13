import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import {
  EUR_CURRENCY,
  SELECTED_CURRENCY_QUERY_IN_URL_KEY_NAME,
  USD_CURRENCY,
} from "../../../@types-and-const/@url-queries/@currency";
import { setQueryInUrl } from "../../../utilities/setQueryInURL";

import React from "react";
import useGetSelectedCurrencyFromUrl from "../hooks/useGetSelectedCurrencyFromUrl";

const CurrencySelection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCurrency = useGetSelectedCurrencyFromUrl(searchParams);

  const setSelectedCurrencyQueryInURL = (e: SelectChangeEvent<any>) => {
    setQueryInUrl(
      searchParams,
      setSearchParams,
      SELECTED_CURRENCY_QUERY_IN_URL_KEY_NAME,
      e.target.value
    );
  };

  return (
    <FormControl variant="standard" sx={{ m: 0, minWidth: "6rem" }}>
      <InputLabel id="select-currency-label">Select currency</InputLabel>
      <Select
        labelId="select-currency-label"
        id="select-currency"
        value={selectedCurrency}
        onChange={setSelectedCurrencyQueryInURL}
        label="Select currency"
        autoWidth
      >
        <MenuItem value={USD_CURRENCY}>{USD_CURRENCY}</MenuItem>
        <MenuItem value={EUR_CURRENCY}>{EUR_CURRENCY}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default React.memo(CurrencySelection);
