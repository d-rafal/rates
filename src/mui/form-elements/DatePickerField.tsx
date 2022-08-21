import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

import {
  Controller,
  FieldValues,
  Control,
  Path,
  UseControllerProps,
} from "react-hook-form";

interface DatePickerFieldProps<T extends FieldValues> {
  control: Control<T>;
  fieldName: Path<T>;
  minAllowedDate: Date;
  shouldReserveSpaceForErrorMessage?: boolean;
  validationRules?: UseControllerProps<T, Path<T>>["rules"];
}

const DatePickerField = <T extends FieldValues>({
  control,
  fieldName,
  minAllowedDate,
  shouldReserveSpaceForErrorMessage = true,
  validationRules,
}: DatePickerFieldProps<T>) => {
  return (
    <Controller
      name={fieldName}
      control={control}
      rules={validationRules}
      render={({ field, fieldState }) => (
        <DatePicker
          mask={"__.__.____"}
          disableFuture
          openTo="month"
          views={["year", "month", "day"]}
          minDate={minAllowedDate}
          value={field.value}
          onChange={field.onChange}
          inputRef={field.ref}
          renderInput={(params) => (
            <TextField
              {...params}
              name={field.name}
              variant="standard"
              error={Boolean(fieldState.error)}
              helperText={
                fieldState.error
                  ? fieldState.error?.message
                  : shouldReserveSpaceForErrorMessage
                  ? " "
                  : ""
              }
              onBlur={field.onBlur}
            />
          )}
        />
      )}
    />
  );
};

export default DatePickerField;
