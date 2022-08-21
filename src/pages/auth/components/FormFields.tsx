import { useState } from "react";
import { type FormDataType } from "../Auth";
import {
  IconButton,
  InputAdornment,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  ControllerRenderProps,
  ControllerFieldState,
  Controller,
  UseFormStateReturn,
  Control,
} from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface FormFieldsProps {
  control: Control<FormDataType, any>;
}

export const generatePropsFromReactHookFormController = (
  field: ControllerRenderProps<any, any>,
  fieldState: ControllerFieldState,
  formState: UseFormStateReturn<FormDataType>,
  defaultHelperText = " "
) => {
  return {
    name: field.name,
    value: field.value,
    disabled: formState.isSubmitting,
    onChange: field.onChange,
    onBlur: field.onBlur,
    inputRef: field.ref,
    error: Boolean(fieldState.error),
    helperText: fieldState.error
      ? fieldState.error?.message
      : defaultHelperText,
  };
};

const FormFields = ({ control }: FormFieldsProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState, formState }) => (
          <TextField
            id="email"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            type="email"
            autoComplete="email"
            autoFocus
            {...generatePropsFromReactHookFormController(
              field,
              fieldState,
              formState
            )}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState, formState }) => (
          <TextField
            id="password"
            sx={{ minHeight: "5rem" }}
            margin="normal"
            required
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...generatePropsFromReactHookFormController(
              field,
              fieldState,
              formState
            )}
          />
        )}
      />
      <Controller
        render={({ field, fieldState, formState }) => (
          <FormControlLabel
            {...(fieldState.error
              ? {
                  componentsProps: { typography: { color: "error" } },
                }
              : null)}
            control={
              <Checkbox
                name={field.name}
                onChange={(e) => field.onChange(e.target.checked)}
                onBlur={field.onBlur}
                checked={field.value}
                inputRef={field.ref}
                disabled={formState.isSubmitting}
              />
            }
            label={"Remember me"}
          />
        )}
        name="remember-me"
        control={control}
      />
    </>
  );
};

export default FormFields;
