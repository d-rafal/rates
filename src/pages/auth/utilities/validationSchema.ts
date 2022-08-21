import * as yup from "yup";

import { ObjectShape } from "yup/lib/object";
import { type FormDataType } from "../Auth";

type FormDataTypeForYup = {
  [Property in keyof FormDataType]: ObjectShape[string];
};

export const validationSchema = yup
  .object<FormDataTypeForYup>({
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup
      .string()
      .min(6, "Must be more then 5 characters")
      .required("Required"),
    "remember-me": yup
      .boolean()
      .required("Required")
      .oneOf([true], "The terms and conditions must be accepted."),
  })
  .required();
