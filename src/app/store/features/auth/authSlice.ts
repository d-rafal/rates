import { CaseReducer, createSlice, isRejected } from "@reduxjs/toolkit";
import { ActionStatus, OrNull } from "../../../../@types-and-const/@general";
import { User } from "../../../../models/auth/auth";
import { useAppSelector } from "../../hooks/hooks";
import { type RootState } from "../../store";
import { authenticateUser } from "./authActionsCreators";
import { AUTH_SLICE_NAME } from "./consts";

const initialUserState = (userInitialState: OrNull<User>): OrNull<User> => {
  let userLocalStorageState_JSON = localStorage.getItem("user");
  let userLocalStorageState: OrNull<User> = null;

  if (userLocalStorageState_JSON)
    userLocalStorageState = JSON.parse(userLocalStorageState_JSON);

  return userLocalStorageState ? userLocalStorageState : userInitialState;
};

export interface AuthState {
  readonly actionStatus: ActionStatus;
  readonly currentRequestId: OrNull<string>;
  readonly user: OrNull<User>;
}

const authInitialState: AuthState = {
  actionStatus: { status: "INITIAL_STATE" },
  currentRequestId: null,
  user: initialUserState(null),
};

export const useSelectUser = () => useAppSelector((state) => state.auth.user);
export const selectActionStatus = (state: RootState) => state.auth.actionStatus;

const actionStarted: CaseReducer<AuthState> = (state) => {
  state.actionStatus = { status: "PROCESSING" };
  state.user = null;
};

const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState: authInitialState as AuthState,
  reducers: {
    logoutUserStarted: actionStarted,
    userLoggedOut(state) {
      state.actionStatus = { status: "IDLE" };
      state.user = null;
    },
    logoutUserFailed: (state) => {
      state.actionStatus = { status: "IDLE" };
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state, action) => {
        state.actionStatus = { status: "PROCESSING" };
        state.currentRequestId = action.meta.requestId;
        state.user = null;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (state.currentRequestId === requestId) {
          state.actionStatus = { status: "SUCCEEDED" };
          state.currentRequestId = null;
          state.user = action.payload;
        }
      })
      .addMatcher(isRejected(authenticateUser), (state, action) => {
        const { rejectedWithValue, requestId } = action.meta;

        if (state.currentRequestId === requestId) {
          state.currentRequestId = null;
          state.user = null;

          if (rejectedWithValue) {
            if (action.payload?.reason === "wrong credentials") {
              state.actionStatus = { status: "IDLE" };
            }
          } else {
            state.actionStatus = {
              status: "FAILED",
              reportedException: action.error,
            };
          }
        }
      });
  },
});

export const { logoutUserStarted, userLoggedOut, logoutUserFailed } =
  authSlice.actions;

export default authSlice.reducer;
