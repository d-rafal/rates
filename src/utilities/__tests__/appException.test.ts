import { AppException } from "../appException";

describe("appException tests", () => {
  it("should return message", () => {
    // arrange
    const appExceptionExample = new AppException("message");

    // act

    // assert
    expect(appExceptionExample.message).toBe("message");
  });

  it("should return message for user", () => {
    // arrange
    const appExceptionExample = new AppException("message", "message for user");

    // act

    // assert
    expect(appExceptionExample.getMessageForUser()).toBe("message for user");
  });

  it("should return message type", () => {
    // arrange
    const appExceptionExample = new AppException(
      "message",
      "message for user",
      "warning"
    );

    // act

    // assert
    expect(appExceptionExample.getType()).toBe("warning");
  });

  it("should return message auto hide duration", () => {
    // arrange
    const appExceptionExample = new AppException(
      "message",
      "message for user",
      "warning",
      100
    );

    // act

    // assert
    expect(appExceptionExample.getAutoHideDuration()).toBe(100);
  });
});
