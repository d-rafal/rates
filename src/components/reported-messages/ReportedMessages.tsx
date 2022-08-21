import { Stack } from "@mui/material";
import { useSelectReportedMessages } from "../../app/store/features/reported-messages/reportedMessagesSlice";

import SingleMessage from "./SingleMessage";

const ReportedMessages = () => {
  const reportedMessages = useSelectReportedMessages();

  const reportedMessagesReversed = [...reportedMessages].reverse();

  return (
    <>
      <Stack
        spacing={2}
        sx={{
          position: "fixed",
          bottom: "24px",
          left: { xs: "8px", sm: "auto" },
          right: { xs: "8px", sm: "24px" },
        }}
      >
        {reportedMessagesReversed.map((reportedMessage) => (
          <SingleMessage
            key={reportedMessage._id}
            reportedMessage={reportedMessage}
          />
        ))}
      </Stack>
    </>
  );
};

export default ReportedMessages;
