import ContextsProvider from "./components/contexts-provider/ContextsProvider";
import ReportedMessages from "./components/reported-messages/ReportedMessages";
import WelcomeDialog from "./components/welcome-dialog/WelcomeDialog";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <ContextsProvider>
      <AppRoutes />
      <ReportedMessages />
      <WelcomeDialog />
    </ContextsProvider>
  );
}

export default App;
