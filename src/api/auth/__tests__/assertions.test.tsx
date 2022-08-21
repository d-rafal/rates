import { FetchDataReturnValue } from "../../fetchData";
import {
  isRespWithAuthConfirmation,
  isRespWithCredentialsErrors,
} from "../assertions";
import {
  RespBodyWithAuthConfirmation,
  RespBodyWithCredentialsErrors,
} from "../models";

describe("authApi assertions tests", () => {
  describe("isRespWithAuthConfirmation tests", () => {
    // arrange
    const respWithAuthConfirmation: FetchDataReturnValue<RespBodyWithAuthConfirmation> =
      {
        ok: true,
        status: 200,
        statusText: "",
        body: {
          user: { _id: "1", name: "user1", email: "user1@example.com" },
        },
      };

    it("should conform response", () => {
      // arrange
      const res = respWithAuthConfirmation;

      // assert
      expect(isRespWithAuthConfirmation(res)).toBe(true);
    });

    // eslint-disable-next-line jest/valid-title
    it("should reject response with wrong status", () => {
      // arrange
      const res = {
        ...respWithAuthConfirmation,
        ok: false,
      };

      // assert
      expect(isRespWithAuthConfirmation(res)).toBe(false);
    });

    // eslint-disable-next-line jest/valid-title
    it("should reject response with wrong body shape", () => {
      // arrange
      const res = {
        ...respWithAuthConfirmation,
        body: {
          ...respWithAuthConfirmation.body,
          user: { ...respWithAuthConfirmation.body.user, name: null },
        },
      };

      // assert
      expect(isRespWithAuthConfirmation(res)).toBe(false);
    });
    // eslint-disable-next-line jest/valid-title
    it("should reject response with undefined body", () => {
      // arrange
      const res = {
        ...respWithAuthConfirmation,
        body: undefined,
      };

      // assert
      expect(isRespWithAuthConfirmation(res)).toBe(false);
    });
  });

  describe("isRespWithCredentialsErrors tests", () => {
    // arrange
    const respWithCredentialsErrors: FetchDataReturnValue<RespBodyWithCredentialsErrors> =
      {
        ok: false,
        status: 401,
        statusText: "",
        body: {
          credentialsErrors: {
            wrongEmail: "wrong email",
          },
        },
      };

    it("should conform response", () => {
      // arrange
      const res = respWithCredentialsErrors;

      // assert
      expect(isRespWithCredentialsErrors(res)).toBe(true);
    });

    // eslint-disable-next-line jest/valid-title
    it("should reject response with wrong status", () => {
      // arrange

      const res = {
        ...respWithCredentialsErrors,
        status: 200,
      };

      // assert
      expect(isRespWithCredentialsErrors(res)).toBe(false);
    });

    // eslint-disable-next-line jest/valid-title
    it("should conform response with wrong body shape", () => {
      // arrange

      const res = {
        ...respWithCredentialsErrors,
        body: {
          ...respWithCredentialsErrors.body,
          credentialsErrors: {
            ...respWithCredentialsErrors.body.credentialsErrors,
            wrongEmail: null,
          },
        },
      };

      // assert
      expect(isRespWithCredentialsErrors(res)).toBe(false);
    });

    // eslint-disable-next-line jest/valid-title
    it("should conform response with undefined body", () => {
      // arrange

      const res = {
        ...respWithCredentialsErrors,
        body: undefined,
      };

      // assert
      expect(isRespWithCredentialsErrors(res)).toBe(false);
    });
  });
});
