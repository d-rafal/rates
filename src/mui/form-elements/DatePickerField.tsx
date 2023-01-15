import { TextField } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";

import {
  Control,
  Controller,
  FieldValues,
  Path,
  UseControllerProps,
} from "react-hook-form";

interface DatePickerFieldProps<T extends FieldValues> {
  control: Control<T>;
  fieldName: Path<T>;
  minAllowedDate: Date;
  label: string;
  shouldReserveSpaceForErrorMessage?: boolean;
  validationRules?: UseControllerProps<T, Path<T>>["rules"];
  sx?: SxProps<Theme>;
  afterOnChangeEvent?(): void;
  // afterOnChangeEvent?: () => void;
}

const DatePickerField = <T extends FieldValues>({
  control,
  fieldName,
  minAllowedDate,
  shouldReserveSpaceForErrorMessage = true,
  validationRules,
  label,
  sx = [],
  afterOnChangeEvent,
}: DatePickerFieldProps<T>) => {
  return (
    <Controller
      name={fieldName}
      control={control}
      rules={validationRules}
      render={({ field, fieldState }) => (
        <DatePicker
          label={label}
          mask={"__.__.____"}
          disableFuture
          openTo="month"
          views={["year", "month", "day"]}
          minDate={minAllowedDate}
          value={field.value}
          onChange={(e) => {
            field.onChange(e);
            afterOnChangeEvent && afterOnChangeEvent();
          }}
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
              sx={[...(Array.isArray(sx) ? sx : [sx])]}
            />
          )}
        />
      )}
    />
  );
};

export default DatePickerField;
