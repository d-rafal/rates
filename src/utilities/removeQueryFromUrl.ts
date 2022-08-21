import { SetSearchParams } from "../@types-and-const/@general";

/**
 * This function removes url query using passed setSearchParams method returned by useSearchParams hook from react-router.
 *
 * @param searchParams - URLSearchParams instance
 * @param setSearchParams - method returned by useSearchParams hook from react-router
 * @param queryKey - query key
 * @returns void
 */
export const removeQueryFromUrl = <T extends string>(
  searchParams: URLSearchParams,
  setSearchParams: SetSearchParams,
  queryKey: T
) => {
  const newSearchParamsInstance = new URLSearchParams(searchParams);
  newSearchParamsInstance.delete(queryKey);

  setSearchParams(newSearchParamsInstance);
};
