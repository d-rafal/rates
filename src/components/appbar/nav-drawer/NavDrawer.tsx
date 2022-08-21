import {
  Box,
  Divider,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useContext, useEffect } from "react";
import AppSettings from "../app-settings/AppSettings";
import {
  IsNavDrawerOpenContext,
  useSetNavDrawerOpen,
} from "./NavDrawerProvider";
import NavDrawerLinks from "./NavDrawerLinks";
import useCloseOpenDrawerHandlers from "./useCloseOpenDrawerHandlers";

const iOS =
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

export const NAV_DRAWER_WIDTH = 200;
export const NAV_DRAWER_ID = "nav-drawer-menu";

const NavDrawer = () => {
  const isNavDrawerOpen = useContext(IsNavDrawerOpenContext);
  const setNavDrawerOpen = useSetNavDrawerOpen();

  const theme = useTheme();

  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  const [openDrawer, closeDrawer] = useCloseOpenDrawerHandlers(matchUpLg);

  useEffect(() => {
    setNavDrawerOpen(false);
  }, [matchUpMd, setNavDrawerOpen]);

  useEffect(() => {
    if (matchUpLg) {
      setNavDrawerOpen(true);
    } else {
      setNavDrawerOpen(false);
    }
  }, [matchUpLg, setNavDrawerOpen]);

  return (
    <SwipeableDrawer
      id={NAV_DRAWER_ID}
      variant={matchUpMd ? "permanent" : "temporary"}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      ModalProps={{
        keepMounted: true,
      }}
      anchor="left"
      open={matchUpMd ? true : isNavDrawerOpen}
      onClose={closeDrawer}
      onOpen={openDrawer}
      sx={(theme) => ({
        zIndex: matchUpMd ? theme.zIndex.drawer : theme.zIndex.drawer + 2,
        "& .MuiDrawer-paper": {
          position: "relative",
          justifyContent: "space-between",
          whiteSpace: "nowrap",
          width: NAV_DRAWER_WIDTH,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          boxSizing: "border-box",
          ...(matchUpMd &&
            !isNavDrawerOpen && {
              overflowX: "hidden",
              transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              width: "3.6rem",
            }),
        },
      })}
    >
      <Box role="presentation" onClick={closeDrawer} onKeyDown={closeDrawer}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={closeDrawer}>
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
        </Toolbar>
        <Divider />
        <NavDrawerLinks />
        <Divider />
      </Box>
      <Box>
        <Divider />
        <AppSettings
          sx={{
            width: !matchUpMd ? "100%" : "unset",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pb: "1rem",
            pt: "1rem",
          }}
        />
      </Box>
    </SwipeableDrawer>
  );
};

export default NavDrawer;
