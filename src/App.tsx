import { BrowserRouter } from "react-router-dom";
import ContextsProvider from "./components/contexts-provider/ContextsProvider";
import ReportedMessages from "./components/reported-messages/ReportedMessages";
import WelcomeDialog from "./components/welcome-dialog/WelcomeDialog";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <ContextsProvider>
      <BrowserRouter
        basename={process.env.NODE_ENV === "development" ? "/rates" : ""}
      >
        <AppRoutes />
      </BrowserRouter>
      <ReportedMessages />
      <WelcomeDialog />
    </ContextsProvider>
  );
}

export default App;
