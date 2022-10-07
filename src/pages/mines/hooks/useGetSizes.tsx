import { useMemo } from "react";
import {
  isValidXSize,
  isValidYSize,
  X_SIZE_DEFAULT_VALUE,
  Y_SIZE_DEFAULT_VALUE,
} from "../../../@types-and-const/@url-queries/@mines/@layout-sizes";
import getSizeFromUrl from "../utilities/getSizeFromUrl";

const useGetSizes = (searchParams: URLSearchParams) => {
  return useMemo(() => {
    return [
      getSizeFromUrl(searchParams, {
        keyName: "x-size",
        defaultValue: X_SIZE_DEFAULT_VALUE,
        validationFn: isValidXSize,
      }),
      getSizeFromUrl(searchParams, {
        keyName: "y-size",
        defaultValue: Y_SIZE_DEFAULT_VALUE,
        validationFn: isValidYSize,
      }),
    ] as const;
  }, [searchParams]);
};

export default useGetSizes;
