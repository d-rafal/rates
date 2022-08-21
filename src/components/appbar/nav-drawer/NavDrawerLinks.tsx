import {
  alpha,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import NavbarLink from "../appbar-nav-link/AppBarNavLink";
import { matchPath, useLocation } from "react-router-dom";
import { NAV_ROUTES } from "../../../routes/navRoutes";

const NavDrawerLinks = () => {
  const { pathname } = useLocation();

  return (
    <List>
      {NAV_ROUTES.map((route) => {
        const Icon = route.Icon;

        return (
          <ListItem
            button
            component={NavbarLink}
            to={route.path}
            end={true}
            key={route.text}
            sx={(theme) => ({
              position: "relative",
              textTransform: "capitalize",
              color: theme.palette.text.secondary,
              "&::before": {
                top: 0,
                right: 0,
                width: 3,
                bottom: 0,
                content: "''",
                display: "none",
                position: "absolute",
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
                backgroundColor: theme.palette.primary.main,
              },
              ...(matchPath(
                {
                  path: route.path,
                  end: false,
                },
                pathname
              ) && {
                color: "primary.main",
                fontWeight: "fontWeightMedium",
                bgcolor: alpha(
                  theme.palette.primary.main,
                  theme.palette.action.selectedOpacity
                ),
                "&:before": { display: "block" },
              }),
            })}
          >
            <ListItemIcon
              sx={{ color: "inherit", minWidth: "unset", marginRight: 2 }}
            >
              <Icon />
            </ListItemIcon>
            <ListItemText primary={route.text} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default NavDrawerLinks;
