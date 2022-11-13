type SizeQueryInUrlConfig<Union extends number> = {
  readonly [Property in Union]: {
    readonly queryValue: Property;
    readonly uiValue: string;
  };
};

export const ROWS_SIZE_QUERY_IN_URL = {
  key: "rows" as const,
  allowedValues: [8, 16] as const,
};

export type RowsSizeQueryInUrlKayName = typeof ROWS_SIZE_QUERY_IN_URL["key"];

export type RowsSizeQueryInUrlAllowedDefinedValues =
  typeof ROWS_SIZE_QUERY_IN_URL["allowedValues"][number];

export const ROWS_SIZE_QUERY_IN_URL_CONFIG: SizeQueryInUrlConfig<RowsSizeQueryInUrlAllowedDefinedValues> =
  {
    "8": { queryValue: 8, uiValue: "8" },
    "16": { queryValue: 16, uiValue: "16" },
  };

export const ROWS_SIZE_DEFAULT_VALUE: RowsSizeQueryInUrlAllowedDefinedValues = 16;

export const isValidRowsSize = (
  value: number | null | undefined
): value is RowsSizeQueryInUrlAllowedDefinedValues => {
  return (
    ROWS_SIZE_QUERY_IN_URL.allowedValues.find(
      (element) => element === value
    ) !== undefined
  );
};

export const COLUMNS_SIZE_QUERY_IN_URL = {
  key: "columns" as const,
  allowedValues: [8, 16, 30] as const,
};

export type ColumnsSizeQueryInUrlKayName =
  typeof COLUMNS_SIZE_QUERY_IN_URL["key"];

export type ColumnsSizeQueryInUrlAllowedDefinedValues =
  typeof COLUMNS_SIZE_QUERY_IN_URL["allowedValues"][number];

export const COLUMNS_SIZE_QUERY_IN_URL_CONFIG: SizeQueryInUrlConfig<ColumnsSizeQueryInUrlAllowedDefinedValues> =
  {
    "8": { queryValue: 8, uiValue: "8" },
    "16": { queryValue: 16, uiValue: "16" },
    "30": { queryValue: 30, uiValue: "30" },
  };

export const COLUMNS_SIZE_DEFAULT_VALUE: ColumnsSizeQueryInUrlAllowedDefinedValues = 16;

export const isValidColumnSize = (
  value: number | null | undefined
): value is ColumnsSizeQueryInUrlAllowedDefinedValues => {
  return (
    COLUMNS_SIZE_QUERY_IN_URL.allowedValues.find(
      (element) => element === value
    ) !== undefined
  );
};
