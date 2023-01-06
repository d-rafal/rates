import {
  Box,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useContext } from "react";
import AppSettings from "./app-settings/AppSettings";
import { useSetCSSRootAppBarHeightProp } from "./hooks/useSetCSSRootAppBarHeightProp";
import { MuiAppBarStyled } from "./miu-appbar-styled/MuiAppBarStyled";
import { NavDrawerControlButtons } from "./nav-drawer/NavDrawerControlButtons";
import { IsNavDrawerOpenContext } from "./nav-drawer/NavDrawerProvider";
import { AppBarTitleContext } from "./title-provider/AppBarTitleProvider";
import { UserMenu } from "./user-menu/UserMenu";

function AppBar() {
  const isNavDrawerOpen = useContext(IsNavDrawerOpenContext);

  const title = useContext(AppBarTitleContext);

  const refToAppBar = useSetCSSRootAppBarHeightProp();

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });

  return (
    <MuiAppBarStyled
      ref={refToAppBar}
      id="top-app-bar"
      position="fixed"
      color="primary"
      elevation={scrollTrigger ? 4 : 0}
      isNavDrawerOpen={isNavDrawerOpen}
    >
      <Toolbar
        disableGutters
        sx={{
          pr: 2.5,
        }}
      >
        <NavDrawerControlButtons isNavDrawerOpen={isNavDrawerOpen} />
        <Box>
          <Typography>{title}</Typography>
        </Box>

        <Stack direction="row" spacing={2} sx={{ ml: "auto" }}>
          <AppSettings
            sx={{
              display: { xs: "flex;", md: "none" },
            }}
          />
          <UserMenu />
        </Stack>
      </Toolbar>
    </MuiAppBarStyled>
  );
}

export default AppBar;
