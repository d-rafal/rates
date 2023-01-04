import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { CssBaseline } from "@mui/material";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import ErrorInsideAppIndicator from "./components/error-inside-app-indicator/ErrorInsideAppIndicator";
import { store } from "./app/store/store";
import { Provider } from "react-redux";

import { worker } from "./mocks/worker";
import { StartOptions } from "msw";

import "./mui/importRobotoFonts";
import "./utilities/appHeightAdjustment";
import { clearLocalStorageOnExit } from "./utilities/clearLocalStorageOnExit";

clearLocalStorageOnExit();

const start = async () => {
  const serviceWorkerUrl: StartOptions["serviceWorker"] | null =
    process.env.NODE_ENV !== "development"
      ? { url: "/rates/mockServiceWorker.js" }
      : null;

  await worker.start({
    serviceWorker: {
      ...serviceWorkerUrl,
    },
    onUnhandledRequest: "bypass",
  });

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <ErrorBoundary renderOnError={() => <ErrorInsideAppIndicator />}>
        <CssBaseline />
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

start();
