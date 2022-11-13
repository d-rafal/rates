import { SelectChangeEvent } from "@mui/material";
import { useCallback } from "react";
import { SetSearchParams } from "../../../@types-and-const/@general";
import {
  RowsSizeQueryInUrlAllowedDefinedValues,
  ROWS_SIZE_QUERY_IN_URL,
  ColumnsSizeQueryInUrlAllowedDefinedValues,
  COLUMNS_SIZE_QUERY_IN_URL,
} from "../../../@types-and-const/@url-queries/@mines/@layout-sizes";
import {
  isValidMinesPercent,
  MINES_PERCENT_QUERY_IN_URL,
} from "../../../@types-and-const/@url-queries/@mines/@percent-mines";
import { setQueryInUrl } from "../../../utilities/setQueryInURL";

const useGenerateSetConfigFn = (
  searchParams: URLSearchParams,
  setSearchParams: SetSearchParams
) => {
  const setRowsSizeQueryInURL = useCallback(
    (e: SelectChangeEvent<RowsSizeQueryInUrlAllowedDefinedValues>) => {
      setQueryInUrl(
        searchParams,
        setSearchParams,
        ROWS_SIZE_QUERY_IN_URL.key,
        String(e.target.value)
      );
    },
    [searchParams, setSearchParams]
  );

  const setColumnsSizeQueryInURL = useCallback(
    (e: SelectChangeEvent<ColumnsSizeQueryInUrlAllowedDefinedValues>) => {
      setQueryInUrl(
        searchParams,
        setSearchParams,
        COLUMNS_SIZE_QUERY_IN_URL.key,
        String(e.target.value)
      );
    },
    [searchParams, setSearchParams]
  );

  const setMinesPercentQueryInURL = useCallback(
    (_: Event, newValue: number | number[]) => {
      if (!Array.isArray(newValue) && isValidMinesPercent(newValue)) {
        setQueryInUrl(
          searchParams,
          setSearchParams,
          MINES_PERCENT_QUERY_IN_URL.key,
          String(newValue)
        );
      }
    },
    [searchParams, setSearchParams]
  );

  return [
    setRowsSizeQueryInURL,
    setColumnsSizeQueryInURL,
    setMinesPercentQueryInURL,
  ] as const;
};

export default useGenerateSetConfigFn;
