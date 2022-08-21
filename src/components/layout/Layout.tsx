import { Outlet } from "react-router-dom";
import { Suspense, useRef } from "react";
import { Fab, Box, Paper } from "@mui/material";
import ScrollTop from "../../mui/scroll-top/ScrollTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SuspenseCallback from "./SuspenseCallback";
import ErrorBoundary from "../error-boundary/ErrorBoundary";
import { CSS_ROOT_APP_BAR_HEIGHT_PROP } from "../../@types-and-const/globalConsts";
import AppBarrOnError from "../appbar/appbar-on-error/AppBarrOnError";
import NavDrawer from "../appbar/nav-drawer/NavDrawer";
import MainOnError from "./MainOnError";
import styles from "./Layout.module.scss";

interface LayoutProps {
  navbar: Exclude<React.ReactNode, undefined>;
}

function Layout({ navbar }: Readonly<LayoutProps>) {
  const mainScrollTarget = useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ display: "flex", maxWidth: "100%" }}>
      <ErrorBoundary renderOnError={() => <AppBarrOnError />}>
        {navbar}
      </ErrorBoundary>

      <NavDrawer />

      <Paper
        component="main"
        className={styles.container}
        sx={{
          mt: `var(${CSS_ROOT_APP_BAR_HEIGHT_PROP})`,
          overflowY: "scroll",
          flexGrow: 1,
          maxWidth: "100%",
        }}
        ref={mainScrollTarget}
      >
        <ErrorBoundary renderOnError={() => <MainOnError />}>
          <Box
            component="article"
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "100%",
              minHeight: "100%",
              padding: { xs: 1, lg: 2 },
            }}
          >
            <Suspense fallback={<SuspenseCallback />}>
              <Outlet />
            </Suspense>
          </Box>

          <ScrollTop
            threshold={500}
            bottom={50}
            right={30}
            scrollTarget={mainScrollTarget}
          >
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </ErrorBoundary>
      </Paper>
    </Box>
  );
}

export default Layout;
