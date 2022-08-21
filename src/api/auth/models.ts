import { JTDSchemaType } from "ajv/dist/jtd";
import { User, userSchema } from "../../models/auth/auth";

export interface RespBodyWithAuthConfirmation {
  user: User;
}

export const respBodyWithAuthConfirmationSchema: JTDSchemaType<RespBodyWithAuthConfirmation> =
  {
    properties: {
      user: userSchema,
    },
    additionalProperties: false,
  };

export interface RespBodyWithCredentialsErrors {
  credentialsErrors: { wrongEmail?: string; wrongPassword?: string };
}

export const respBodyWithCredentialsErrorsSchema: JTDSchemaType<RespBodyWithCredentialsErrors> =
  {
    properties: {
      credentialsErrors: {
        optionalProperties: {
          wrongEmail: { type: "string" },
          wrongPassword: { type: "string" },
        },
        additionalProperties: false,
      },
    },
    additionalProperties: false,
  };
