type SizeQueryInUrlConfig<Union extends number> = {
  readonly [Property in Union]: {
    readonly queryValue: Property;
    readonly uiValue: string;
  };
};

export const X_SIZE_QUERY_IN_URL = {
  key: "x-size" as const,
  allowedValues: [40, 50, 60] as const,
};

export type XSizeQueryInUrlKayName = typeof X_SIZE_QUERY_IN_URL["key"];

export type XSizeQueryInUrlAllowedDefinedValues =
  typeof X_SIZE_QUERY_IN_URL["allowedValues"][number];

export const X_SIZE_QUERY_IN_URL_CONFIG: SizeQueryInUrlConfig<XSizeQueryInUrlAllowedDefinedValues> =
  {
    "40": { queryValue: 40, uiValue: "40" },
    "50": { queryValue: 50, uiValue: "50" },
    "60": { queryValue: 60, uiValue: "60" },
  };

export const X_SIZE_DEFAULT_VALUE: XSizeQueryInUrlAllowedDefinedValues = 50;

export const isValidXSize = (
  value: number | null | undefined
): value is XSizeQueryInUrlAllowedDefinedValues => {
  return (
    X_SIZE_QUERY_IN_URL.allowedValues.find((element) => element === value) !==
    undefined
  );
};

export const Y_SIZE_QUERY_IN_URL = {
  key: "y-size" as const,
  allowedValues: [10, 20, 30] as const,
};

export type YSizeQueryInUrlKayName = typeof Y_SIZE_QUERY_IN_URL["key"];

export type YSizeQueryInUrlAllowedDefinedValues =
  typeof Y_SIZE_QUERY_IN_URL["allowedValues"][number];

export const Y_SIZE_QUERY_IN_URL_CONFIG: SizeQueryInUrlConfig<YSizeQueryInUrlAllowedDefinedValues> =
  {
    "10": { queryValue: 10, uiValue: "10" },
    "20": { queryValue: 20, uiValue: "20" },
    "30": { queryValue: 30, uiValue: "30" },
  };

export const Y_SIZE_DEFAULT_VALUE: YSizeQueryInUrlAllowedDefinedValues = 20;

export const isValidYSize = (
  value: number | null | undefined
): value is YSizeQueryInUrlAllowedDefinedValues => {
  return (
    Y_SIZE_QUERY_IN_URL.allowedValues.find((element) => element === value) !==
    undefined
  );
};
