import { SelectChangeEvent } from "@mui/material";
import { useCallback } from "react";
import { SetSearchParams } from "../../../@types-and-const/@general";
import {
  XSizeQueryInUrlAllowedDefinedValues,
  X_SIZE_QUERY_IN_URL,
  YSizeQueryInUrlAllowedDefinedValues,
  Y_SIZE_QUERY_IN_URL,
} from "../../../@types-and-const/@url-queries/@mines/@layout-sizes";
import { setQueryInUrl } from "../../../utilities/setQueryInUrl";

const useGenerateSetSizesFn = (
  searchParams: URLSearchParams,
  setSearchParams: SetSearchParams
) => {
  const setXSizeQueryInURL = useCallback(
    (e: SelectChangeEvent<XSizeQueryInUrlAllowedDefinedValues>) => {
      setQueryInUrl(
        searchParams,
        setSearchParams,
        X_SIZE_QUERY_IN_URL.key,
        String(e.target.value)
      );
    },
    [searchParams, setSearchParams]
  );

  const setYSizeQueryInURL = useCallback(
    (e: SelectChangeEvent<YSizeQueryInUrlAllowedDefinedValues>) => {
      setQueryInUrl(
        searchParams,
        setSearchParams,
        Y_SIZE_QUERY_IN_URL.key,
        String(e.target.value)
      );
    },
    [searchParams, setSearchParams]
  );

  return [setXSizeQueryInURL, setYSizeQueryInURL] as const;
};

export default useGenerateSetSizesFn;
