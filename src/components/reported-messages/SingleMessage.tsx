import React from "react";
import { Alert, Slide, Snackbar as SnackBarMui } from "@mui/material";
import {
  ReportedMessageInStore,
  reportedMessageRemoved,
} from "../../app/store/features/reported-messages/reportedMessagesSlice";
import { useAppDispatch } from "../../app/store/hooks/hooks";

interface SingleMessageProps {
  reportedMessage: ReportedMessageInStore;
}

const SingleMessage = ({ reportedMessage }: SingleMessageProps) => {
  const dispatch = useAppDispatch();

  const handleClose = (
    event: React.SyntheticEvent | Event,
    _id: ReportedMessageInStore["_id"],
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(reportedMessageRemoved(_id));
  };

  return (
    <SnackBarMui
      key={reportedMessage._id}
      open={true}
      TransitionComponent={(props) => <Slide {...props} direction="left" />}
      autoHideDuration={reportedMessage.autoHideDuration || null}
      onClose={(event: React.SyntheticEvent | Event, reason?: string) =>
        handleClose(event, reportedMessage._id, reason)
      }
      TransitionProps={{
        onExited: () => dispatch(reportedMessageRemoved(reportedMessage._id)),
      }}
      anchorOrigin={{
        horizontal: "right",
        vertical: "bottom",
      }}
      sx={{ position: "static" }}
    >
      <Alert
        onClose={(event: React.SyntheticEvent<Element, Event>) =>
          handleClose(event, reportedMessage._id)
        }
        severity={reportedMessage.type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {reportedMessage.messageForUser}
      </Alert>
    </SnackBarMui>
  );
};

export default React.memo(SingleMessage);
