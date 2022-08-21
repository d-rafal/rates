import { getSchemaWithAssertion } from "../../models/validation";
import { FetchDataReturnValue } from "../fetchData";
import {
  RespBodyWithAuthConfirmation,
  respBodyWithAuthConfirmationSchema,
  RespBodyWithCredentialsErrors,
  respBodyWithCredentialsErrorsSchema,
} from "./models";

const isRespBodyWithAuthConfirmation = getSchemaWithAssertion(
  respBodyWithAuthConfirmationSchema,
  "respBodyWithAuthConfirmationSchema"
);

export const isRespWithAuthConfirmation = (
  response: FetchDataReturnValue<unknown>
): response is FetchDataReturnValue<RespBodyWithAuthConfirmation> => {
  return response.ok && isRespBodyWithAuthConfirmation(response.body);
};

const isRespBodyWithCredentialsErrors = getSchemaWithAssertion(
  respBodyWithCredentialsErrorsSchema,
  "respBodyWithCredentialsErrorsSchema"
);

export const isRespWithCredentialsErrors = (
  response: FetchDataReturnValue<unknown>
): response is FetchDataReturnValue<RespBodyWithCredentialsErrors> => {
  return Boolean(
    response.status === 401 &&
      isRespBodyWithCredentialsErrors(response.body) &&
      Object.keys(response.body.credentialsErrors).length
  );
};
