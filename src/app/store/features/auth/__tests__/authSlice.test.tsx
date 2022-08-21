import { sampleUserCredentials } from "../../../../../mocks/authHandler";
import { type AppStore, type RootState, setupStore } from "../../../store";
import { authenticateUser } from "../authActionsCreators";
import { mockedStoreInitialState } from "../../../../../setupTests";

// import prettyFormat from "pretty-format";

describe("authSlice tests", () => {
  describe("authenticateUser action creator tests", () => {
    // arrange

    let store: AppStore;

    beforeEach(() => {
      store = setupStore(mockedStoreInitialState);
    });

    it("should handle authenticateUser fulfilled action", async () => {
      // arrange
      expect.assertions(2);
      const result = store.dispatch(authenticateUser(sampleUserCredentials));

      let rootState: RootState = store.getState();

      //act

      // assert
      expect(rootState.auth).toEqual({
        actionStatus: { status: "PROCESSING" },
        currentRequestId: expect.stringMatching(/.+$/),
        user: null,
      });

      await result;

      rootState = store.getState();

      expect(rootState.auth).toEqual({
        actionStatus: { status: "SUCCEEDED" },
        currentRequestId: null,
        user: {
          name: sampleUserCredentials.email.split("@")[0],
          email: sampleUserCredentials.email,
          _id: expect.stringMatching(/^.+$/),
        },
      });
    });
    it("should handle authenticateUser rejected with Error action", async () => {
      // arrange

      // @ts-ignore
      // delete window.fetch;
      // window.fetch = jest.fn().mockRejectedValue(new Error("error message"));

      jest.spyOn(window, "fetch").mockRejectedValue(new Error("error message"));

      expect.assertions(2);
      const result = store.dispatch(authenticateUser(sampleUserCredentials));

      let rootState: RootState = store.getState();

      //act

      // assert
      expect(rootState.auth).toEqual({
        actionStatus: { status: "PROCESSING" },
        currentRequestId: expect.stringMatching(/.+$/),
        user: null,
      });

      await result;

      rootState = store.getState();

      expect(rootState.auth).toEqual({
        actionStatus: {
          status: "FAILED",
          reportedException: {
            message: "error message",
            name: "Error",
            stack: expect.stringMatching(/^Error: error message.+$/s),
          },
        },
        currentRequestId: null,
        user: null,
      });
    });
  });
});
