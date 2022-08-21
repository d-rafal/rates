import { useEffect } from "react";
import { UseFormSetValue, UseFormGetValues } from "react-hook-form";
import { getTimeRangeDescriptorFromUrlQuery } from "../../../@types-and-const/@url-queries/@time-range";
import { type FormDataType } from "../components/CustomTimeRangeSelection";

const useUpdateTimeRangeBasedOnUrl = (
  timeRangeQueryInUrl: string | null,
  setValue: UseFormSetValue<FormDataType>,
  getValues: UseFormGetValues<FormDataType>
) => {
  useEffect(() => {
    const { timeRangeForIOFields: dates } =
      getTimeRangeDescriptorFromUrlQuery(timeRangeQueryInUrl);

    if (dates) {
      const startDate = dates[0];
      const endDate = dates[1];

      if (startDate !== getValues("start-date")) {
        setValue("start-date", startDate, { shouldValidate: true });
      }

      if (endDate !== getValues("end-date")) {
        setValue("end-date", endDate, { shouldValidate: true });
      }
    }
  }, [timeRangeQueryInUrl, setValue, getValues]);
};

export default useUpdateTimeRangeBasedOnUrl;
