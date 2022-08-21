import { nanoid } from "@reduxjs/toolkit";
import { ReportedMessage } from "../../../../../@types-and-const/@general";
import reducer, {
  reportedMessageAdded,
  reportedMessageRemoved,
  ReportedMessagesState,
} from "../reportedMessagesSlice";

describe("reportedMessagesSlice tests", () => {
  // arrange
  const reportedMessage: ReportedMessage = {
    messageForUser: "message for user",
    type: "error",
    autoHideDuration: 0,
  };
  test("should handle reportedMessageAdded action", () => {
    // arrange
    const previousState: ReportedMessagesState = [];

    const newState = reducer(
      previousState,
      reportedMessageAdded(reportedMessage)
    );

    //act

    // assert
    expect(newState.length).toBe(1);

    Object.keys(reportedMessage).forEach((key) => {
      expect(newState[0][key as keyof ReportedMessage]).toBe(
        reportedMessage[key as keyof ReportedMessage]
      );
    });
  });

  test("should handle reportedMessageRemoved action", () => {
    // arrange
    const _id = nanoid();
    const previousState: ReportedMessagesState = [{ ...reportedMessage, _id }];

    const newState = reducer(previousState, reportedMessageRemoved(_id));

    //act

    // assert
    expect(newState.length).toBe(0);
  });
});
