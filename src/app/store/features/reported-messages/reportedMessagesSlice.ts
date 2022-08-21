import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { ReportedMessage } from "../../../../@types-and-const/@general";

import { useAppSelector } from "../../hooks/hooks";

export interface ReportedMessageInStore extends ReportedMessage {
  _id: string;
}

export type ReportedMessagesState = ReportedMessageInStore[];

const reportedMessagesInitialState: ReportedMessagesState = [];

export const useSelectReportedMessages = () =>
  useAppSelector((state) => state.reportedMessages);

const authSlice = createSlice({
  name: "reportedMessages",
  initialState: reportedMessagesInitialState as ReportedMessagesState,
  reducers: {
    reportedMessageAdded: {
      reducer(state, action: PayloadAction<ReportedMessageInStore>) {
        state.push(action.payload);
      },
      prepare(reportedMessage: ReportedMessage) {
        return {
          payload: { ...reportedMessage, _id: nanoid() },
        };
      },
    },
    reportedMessageRemoved(
      state,
      action: PayloadAction<ReportedMessageInStore["_id"]>
    ) {
      return state.filter(
        (reportedMessage) => reportedMessage._id !== action.payload
      );
    },
  },
});

export const { reportedMessageAdded, reportedMessageRemoved } =
  authSlice.actions;

export default authSlice.reducer;
