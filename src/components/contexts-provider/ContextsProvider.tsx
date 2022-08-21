import { StyledEngineProvider } from "@mui/material";
import AppThemeProvider from "../theme/AppThemeProvider";
import plLocale from "date-fns/locale/pl";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import AppBarTitleProvider from "../appbar/title-provider/AppBarTitleProvider";
import NavDrawerProvider from "../appbar/nav-drawer/NavDrawerProvider";
// import SnackbarProvider from "../snackbar-provider/SnackbarProvider";

const ContextsProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <AppThemeProvider>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          adapterLocale={plLocale}
        >
          <AppBarTitleProvider>
            {/* <SnackbarProvider> */}
            <NavDrawerProvider>{children}</NavDrawerProvider>
            {/* </SnackbarProvider> */}
          </AppBarTitleProvider>
        </LocalizationProvider>
      </AppThemeProvider>
    </StyledEngineProvider>
  );
};

export default ContextsProvider;
