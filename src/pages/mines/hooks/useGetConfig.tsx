import { useMemo } from "react";
import {
  COLUMNS_SIZE_DEFAULT_VALUE,
  COLUMNS_SIZE_QUERY_IN_URL,
  isValidColumnSize,
  isValidRowsSize,
  ROWS_SIZE_DEFAULT_VALUE,
  ROWS_SIZE_QUERY_IN_URL,
} from "../../../@types-and-const/@url-queries/@mines/@layout-sizes";
import {
  MINES_PERCENT_DEFAULT_VALUE,
  MINES_PERCENT_QUERY_IN_URL,
} from "../../../@types-and-const/@url-queries/@mines/@percent-mines";
import tryConvertToFiniteNumberNullAsNull from "../../../utilities/tryConvertToFiniteNumberNullAsNull";
import getSizeFromUrl from "../utilities/getSizeFromUrl";

const useGetConfig = (searchParams: URLSearchParams) => {
  const [rowsSize, columnsSize, minesPercent] = useMemo(() => {
    const rowsSize = getSizeFromUrl(searchParams, {
      keyName: ROWS_SIZE_QUERY_IN_URL.key,
      defaultValue: ROWS_SIZE_DEFAULT_VALUE,
      validationFn: isValidRowsSize,
    });

    const columnsSize = getSizeFromUrl(searchParams, {
      keyName: COLUMNS_SIZE_QUERY_IN_URL.key,
      defaultValue: COLUMNS_SIZE_DEFAULT_VALUE,
      validationFn: isValidColumnSize,
    });

    let minesPercent = tryConvertToFiniteNumberNullAsNull(
      searchParams.get(MINES_PERCENT_QUERY_IN_URL.key)
    );

    if (minesPercent === null) {
      minesPercent = MINES_PERCENT_DEFAULT_VALUE;
    } else {
      minesPercent = Math.round(minesPercent);

      if (minesPercent < MINES_PERCENT_QUERY_IN_URL.minValue) {
        minesPercent = MINES_PERCENT_QUERY_IN_URL.minValue;
      } else if (minesPercent > MINES_PERCENT_QUERY_IN_URL.maxValue) {
        minesPercent = MINES_PERCENT_QUERY_IN_URL.maxValue;
      }
    }

    return [rowsSize, columnsSize, minesPercent] as const;
  }, [searchParams]);

  return [rowsSize, columnsSize, minesPercent] as const;
};

export default useGetConfig;
