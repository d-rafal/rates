import { dateToString } from "../../utilities/date/dateToString";
import { getDateRangeFromNowToPast } from "../../utilities/date/getDateRangeFromNowToPast";
import { isDateValid } from "../../utilities/date/isDateValid";
import { stringToDate } from "../../utilities/date/stringToDate";

export const TIME_RANGE_QUERY_IN_URL = {
  key: "time-range",
  allowedValues: ["week", "month", "3months", "6months", "max"] as const,
};

export type TimeRangeQueryInUrlKayName = typeof TIME_RANGE_QUERY_IN_URL["key"];

export type TimeRangeQueryInUrlAllowedDefinedValues =
  typeof TIME_RANGE_QUERY_IN_URL["allowedValues"][number];

type TimeRangeQueryInUrlConfig<Union extends string> = {
  readonly [Property in Union]: {
    readonly queryValue: Property;
    readonly valueInDays: number;
    readonly uiName: string;
  };
};

export const TIME_RANGE_QUERY_IN_URL_CONFIG: TimeRangeQueryInUrlConfig<TimeRangeQueryInUrlAllowedDefinedValues> =
  {
    week: { queryValue: "week", valueInDays: 7, uiName: "week" },
    month: { queryValue: "month", valueInDays: 31, uiName: "month" },
    "3months": { queryValue: "3months", valueInDays: 93, uiName: "3 months" },
    "6months": { queryValue: "6months", valueInDays: 186, uiName: "6 months" },
    max: { queryValue: "max", valueInDays: 367, uiName: "max" },
  };

export const DEFAULT_DEFINED_VALUE: TimeRangeQueryInUrlAllowedDefinedValues =
  "month";
export const DEFAULT_TIME_RANGE_IN_DAYS =
  TIME_RANGE_QUERY_IN_URL_CONFIG[DEFAULT_DEFINED_VALUE].valueInDays;
export const MAX_TIME_RANGE_IN_DAYS =
  TIME_RANGE_QUERY_IN_URL_CONFIG["max"].valueInDays;

export const isValidTimeRangeQueryInUrlAllowedDefinedValues = (
  value: string | null | undefined
): value is TimeRangeQueryInUrlAllowedDefinedValues => {
  return (
    TIME_RANGE_QUERY_IN_URL.allowedValues.find(
      (element) => element === value
    ) !== undefined
  );
};

export interface TimeRangeDescriptor {
  readonly selectedDefinedValue: TimeRangeQueryInUrlAllowedDefinedValues | null;
  readonly timeRangeForDataFetching: readonly [string, string];
  readonly timeRangeForIOFields: readonly [Date, Date] | null;
}

const getTimeRangeForIOFields = (
  timeRangeQueryInUrl: string | null
): TimeRangeDescriptor["timeRangeForIOFields"] => {
  const datesMatch = timeRangeQueryInUrl?.match(
    /from-(\d{4}-\d{2}-\d{2})-to-(\d{4}-\d{2}-\d{2})/
  );

  if (datesMatch) {
    const startDate = stringToDate(datesMatch?.[1]);
    const endDate = stringToDate(datesMatch?.[2]);

    if (isDateValid(startDate) && isDateValid(endDate)) {
      return [startDate, endDate] as const;
    }
  }
  return null;
};

export const getTimeRangeDescriptorFromUrlQuery = (
  timeRangeQueryInUrl: string | null
): TimeRangeDescriptor => {
  let selectedDefinedValue: TimeRangeDescriptor["selectedDefinedValue"] = null;

  const timeRangeForIOFields: TimeRangeDescriptor["timeRangeForIOFields"] =
    getTimeRangeForIOFields(timeRangeQueryInUrl);

  let timeRangeForDataFetching: readonly [Date, Date] =
    timeRangeForIOFields ??
    getDateRangeFromNowToPast(DEFAULT_TIME_RANGE_IN_DAYS);

  if (!timeRangeQueryInUrl) {
    selectedDefinedValue = DEFAULT_DEFINED_VALUE;
  } else if (
    isValidTimeRangeQueryInUrlAllowedDefinedValues(timeRangeQueryInUrl)
  ) {
    selectedDefinedValue = timeRangeQueryInUrl;

    if (timeRangeQueryInUrl !== DEFAULT_DEFINED_VALUE) {
      timeRangeForDataFetching = getDateRangeFromNowToPast(
        TIME_RANGE_QUERY_IN_URL_CONFIG[timeRangeQueryInUrl].valueInDays
      );
    }
  }

  return {
    selectedDefinedValue,
    timeRangeForDataFetching: [
      dateToString(timeRangeForDataFetching[0]),
      dateToString(timeRangeForDataFetching[1]),
    ] as const,
    timeRangeForIOFields,
  };
};
