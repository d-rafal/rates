import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import * as Yup from "yup";
import { ObjectShape } from "yup/lib/object";
import { OrNull } from "../../../@types-and-const/@general";
import {
  getTimeRangeDescriptorFromUrlQuery,
  TIME_RANGE_QUERY_IN_URL,
} from "../../../@types-and-const/@url-queries/@time-range";
import DatePickerField from "../../../mui/form-elements/DatePickerField";
import { dateToString } from "../../../utilities/date/dateToString";
import { setQueryInUrl } from "../../../utilities/setQueryInURL";
import useUpdateTimeRangeBasedOnUrl from "../hooks/useUpdateTimeRangeBasedOnUrl";
import ClearTimeRangeSelection from "./ClearTimeRangeSelection";

export const MIN_ALLOWED_DATE = new Date(2014, 0, 1, 0, 0, 0);
export interface FormDataType {
  "start-date": OrNull<Date>;
  "end-date": OrNull<Date>;
}

type FormDataTypeForYup = {
  [Property in keyof FormDataType]+?: ObjectShape[string];
};

const validationSchema = Yup.object<FormDataTypeForYup>({
  "start-date": Yup.date().typeError("Invalid date").required("Required"),
  "end-date": Yup.date().typeError("Invalid date").required("Required"),
}).required();

// export const commonDateValidation = {
//   validDate: (date: FormDataType["start-date"]) =>
//     (!!date && isDateValid(date)) || "Enter valid date",
//   notFutureDate: (date: FormDataType["start-date"]) =>
//     (!!date && date < new Date()) || "Future date not allowed",
//   notBeforeMinAllowedDate: (date: FormDataType["start-date"]) =>
//     (!!date && date > MIN_ALLOWED_DATE) ||
//     `Date before ${
//       MIN_ALLOWED_DATE.toLocaleString("pl-PL", { timeZone: "UTC" }).split(
//         ","
//       )[0]
//     }`,
// };

const CustomTimeRangeSelection = () => {
  const theme = useTheme();
  const matchDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    handleSubmit,
    reset,
    setValue,
    getValues,
    control,
    watch,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues: {
      "start-date": null,
      "end-date": null,
    },
    mode: "all",
    criteriaMode: "firstError",
    shouldUnregister: true,
    resolver: yupResolver(validationSchema),
  });

  const timeRangeQueryInUrl = searchParams.get(TIME_RANGE_QUERY_IN_URL.key);

  useUpdateTimeRangeBasedOnUrl(timeRangeQueryInUrl, setValue, getValues);

  const { timeRangeForIOFields: dates } =
    getTimeRangeDescriptorFromUrlQuery(timeRangeQueryInUrl);

  const startDate = watch("start-date");

  const onSubmit: SubmitHandler<FormDataType> = async (values) => {
    const startDate = values["start-date"];
    const endDate = values["end-date"];

    setQueryInUrl(
      searchParams,
      setSearchParams,
      TIME_RANGE_QUERY_IN_URL.key,
      "from-" + dateToString(startDate!) + "-to-" + dateToString(endDate!)
    );
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={matchDownSm ? 2 : 3}
        direction={matchDownMd ? "column" : "row"}
        alignItems="center"
        justifyContent="center"
        sx={{ flexWrap: "wrap" }}
      >
        <DatePickerField
          fieldName="start-date"
          control={control}
          // validationRules={{
          //   validate: {
          //     ...commonDateValidation,
          //   },
          // }}
          minAllowedDate={MIN_ALLOWED_DATE}
          shouldReserveSpaceForErrorMessage={false}
        />
        <DatePickerField
          fieldName="end-date"
          control={control}
          // validationRules={{
          //   validate: {
          //     ...commonDateValidation,
          //     afterStartDate: (date) => {
          //       const startDate = getValues("start-date");
          //       console.log("startDate =", startDate);
          //       return (
          //         (date !== null && startDate !== null && date > startDate) ||
          //         "End date after start date"
          //       );
          //     },
          //   },
          // }}
          minAllowedDate={startDate ? startDate : MIN_ALLOWED_DATE}
          shouldReserveSpaceForErrorMessage={false}
        />
        <Box>
          <Button
            type="submit"
            size="large"
            variant="outlined"
            disabled={Boolean(Object.keys(errors).length)}
          >
            Select time range
          </Button>
          {dates !== null ? (
            <ClearTimeRangeSelection
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              reset={reset}
            />
          ) : null}
        </Box>
      </Stack>
    </form>
  );
};

export default React.memo(CustomTimeRangeSelection);
