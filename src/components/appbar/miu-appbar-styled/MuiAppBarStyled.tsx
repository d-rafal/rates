import { styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { NAV_DRAWER_WIDTH } from "../nav-drawer/NavDrawer";

interface MuiAppBarStyledProps extends MuiAppBarProps {
  isNavDrawerOpen?: boolean;
}

export const MuiAppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "isNavDrawerOpen",
})<MuiAppBarStyledProps>(({ theme, isNavDrawerOpen }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(isNavDrawerOpen && {
    marginLeft: NAV_DRAWER_WIDTH,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
