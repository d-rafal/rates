import { createAsyncThunk, miniSerializeError } from "@reduxjs/toolkit";
import {
  ReportedException,
  ReportedMessage,
} from "../../../../@types-and-const/@general";
import {
  isRespWithAuthConfirmation,
  isRespWithCredentialsErrors,
} from "../../../../api/auth/assertions";
import { RespBodyWithCredentialsErrors } from "../../../../api/auth/models";
import { User } from "../../../../models/auth/auth";
import { AppException } from "../../../../utilities/appException";

import { type AppReduxDispatch, type ExtraArgument } from "../../store";
import { reportedMessageAdded } from "../reported-messages/reportedMessagesSlice";
import { AUTH_SLICE_NAME } from "./consts";

const GENERAL_ERROR_FOR_USER = "Error during authentication, please try again!";

export const GENERAL_REPORTED_MESSAGE_FOR_USER: ReportedMessage = {
  messageForUser: GENERAL_ERROR_FOR_USER,
  type: "error",
  autoHideDuration: 0,
};

interface AuthenticateUserThunkProps {
  email: string;
  password: string;
  registerMode?: boolean;
}

const authenticateUser = createAsyncThunk<
  User,
  AuthenticateUserThunkProps,
  {
    rejectValue: {
      reason: "wrong credentials";
      data: RespBodyWithCredentialsErrors;
    };
    extra: ExtraArgument;
    dispatch: AppReduxDispatch;
    serializedErrorType: ReportedException;
  }
>(
  AUTH_SLICE_NAME + "/login",
  async ({ email, password }, { rejectWithValue, extra, dispatch }) => {
    try {
      const res = await extra.api.auth.authenticate(email, password);

      if (isRespWithAuthConfirmation(res)) {
        return res.body.user;
      }

      if (isRespWithCredentialsErrors(res)) {
        return rejectWithValue({ reason: "wrong credentials", data: res.body });
      }

      throw new AppException(
        "Unexpected response during User authentication",
        GENERAL_ERROR_FOR_USER,
        "error"
      );
    } catch (error) {
      if (error instanceof AppException) {
        dispatch(
          reportedMessageAdded({
            messageForUser: error.getMessageForUser(),
            type: error.getType(),
            autoHideDuration: error.getAutoHideDuration(),
          })
        );
      } else {
        dispatch(reportedMessageAdded(GENERAL_REPORTED_MESSAGE_FOR_USER));
      }
      throw error;
    }
  },
  {
    serializeError: (error: unknown) => {
      let serializeError: ReportedException = miniSerializeError(error);

      if (error instanceof AppException) {
        serializeError.messageForUser = error.getMessageForUser();
        serializeError.type = error.getType();
        serializeError.autoHideDuration = error.getAutoHideDuration();
      }

      return serializeError;
    },
  }
);

export { authenticateUser };
