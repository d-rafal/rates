import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/store/hooks/hooks";
import { type FormDataType } from "../Auth";
import useRedirectLocationOnAuthentication from "./useRedirectLocationOnAuthentication";
import { SubmitHandler, UseFormSetError } from "react-hook-form";
import {
  authenticateUser,
  GENERAL_REPORTED_MESSAGE_FOR_USER,
} from "../../../app/store/features/auth/authActionsCreators";
import { reportedMessageAdded } from "../../../app/store/features/reported-messages/reportedMessagesSlice";

const useOnSubmit = (setError: UseFormSetError<FormDataType>) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const requestInProgress = useRef(false);

  let redirectLocationOnAuthentication = useRedirectLocationOnAuthentication();

  const onSubmit: SubmitHandler<FormDataType> = async (data) => {
    if (!requestInProgress.current) {
      requestInProgress.current = true;

      try {
        const resultAction = await dispatch(
          authenticateUser({
            email: data.email,
            password: data.password,
          })
        );

        if (authenticateUser.fulfilled.match(resultAction)) {
          navigate(redirectLocationOnAuthentication, { replace: true });
        } else if (resultAction.payload?.reason === "wrong credentials") {
          if (resultAction.payload.data.credentialsErrors.wrongEmail) {
            setError("email", {
              type: "from server",
              message: resultAction.payload.data.credentialsErrors.wrongEmail,
            });
          }
          if (resultAction.payload.data.credentialsErrors.wrongPassword) {
            setError("password", {
              type: "from server",
              message:
                resultAction.payload.data.credentialsErrors.wrongPassword,
            });
          }
        }
      } catch (error) {
        dispatch(reportedMessageAdded(GENERAL_REPORTED_MESSAGE_FOR_USER));
      } finally {
        requestInProgress.current = false;
      }
    }
  };

  return onSubmit;
};

export default useOnSubmit;
