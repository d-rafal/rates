import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import reportedMessagesReducer from "./features/reported-messages/reportedMessagesSlice";

import { api, AppApi } from "../../api";
import { rtkqApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export interface ExtraArgument {
  api: AppApi;
}

const extraArgument: ExtraArgument = { api };

const rootReducer = combineReducers({
  auth: authReducer,
  reportedMessages: reportedMessagesReducer,
  [rtkqApi.reducerPath]: rtkqApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArgument,
        },
      }).concat(rtkqApi.middleware),
  });

  // enable listener behavior for the store
  setupListeners(store.dispatch);

  return store;
};

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppReduxDispatch = typeof store.dispatch;
export type AppReduxGetState = typeof store.getState;
// export type RootState = ReturnType<AppReduxGetState>;
export type RootState = ReturnType<typeof rootReducer>;
