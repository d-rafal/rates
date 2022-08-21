import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import {
  getTimeRangeDescriptorFromUrlQuery,
  TimeRangeQueryInUrlAllowedDefinedValues,
  TIME_RANGE_QUERY_IN_URL,
  TIME_RANGE_QUERY_IN_URL_CONFIG,
} from "../../../@types-and-const/@url-queries/@time-range";

import { setQueryInUrl } from "../../../utilities/setQueryInUrl";

const DefaultTimeRangePicker = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const timeRangeQueryInUrl = searchParams.get(TIME_RANGE_QUERY_IN_URL.key);

  const { selectedDefinedValue } =
    getTimeRangeDescriptorFromUrlQuery(timeRangeQueryInUrl);

  const onChange = (
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    value: TimeRangeQueryInUrlAllowedDefinedValues
  ) => {
    setQueryInUrl(
      searchParams,
      setSearchParams,
      TIME_RANGE_QUERY_IN_URL.key,
      value
    );
  };

  return (
    <ToggleButtonGroup
      value={selectedDefinedValue}
      exclusive
      onChange={onChange}
      aria-label="text alignment"
    >
      <ToggleButton
        value={TIME_RANGE_QUERY_IN_URL_CONFIG.week.queryValue}
        aria-label="centered"
      >
        {TIME_RANGE_QUERY_IN_URL_CONFIG.week.uiName}
      </ToggleButton>
      <ToggleButton
        value={TIME_RANGE_QUERY_IN_URL_CONFIG.month.queryValue}
        aria-label="centered"
      >
        {TIME_RANGE_QUERY_IN_URL_CONFIG.month.uiName}
      </ToggleButton>
      <ToggleButton
        value={TIME_RANGE_QUERY_IN_URL_CONFIG["3months"].queryValue}
        aria-label="centered"
      >
        {TIME_RANGE_QUERY_IN_URL_CONFIG["3months"].uiName}
      </ToggleButton>
      <ToggleButton
        value={TIME_RANGE_QUERY_IN_URL_CONFIG["6months"].queryValue}
        aria-label="centered"
      >
        {TIME_RANGE_QUERY_IN_URL_CONFIG["6months"].uiName}
      </ToggleButton>
      <ToggleButton
        value={TIME_RANGE_QUERY_IN_URL_CONFIG.max.queryValue}
        aria-label="centered"
      >
        {TIME_RANGE_QUERY_IN_URL_CONFIG.max.uiName}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default DefaultTimeRangePicker;
