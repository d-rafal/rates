import React, { useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  ListItemIcon,
  Divider,
  Theme,
} from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Logout from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import {
  logoutUserStarted,
  userLoggedOut,
  useSelectUser,
} from "../../../app/store/features/auth/authSlice";
import { useAppDispatch } from "../../../app/store/hooks/hooks";
import { USER_MENU_ROUTES } from "../../../routes/userMenuRoutes";
import { LOGIN_ROUTE } from "../../../routes/loginRoute";

export const UserMenu = () => {
  const user = useSelectUser();
  const dispatch = useAppDispatch();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const onLogout = async () => {
    dispatch(logoutUserStarted());
    dispatch(userLoggedOut());
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Open user settings">
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: 0 }}
          aria-label="account of current user"
          aria-controls="user-menu-appbar"
          aria-haspopup="true"
        >
          <Avatar alt="user1">
            <PermIdentityIcon />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="user-menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            border: (theme: Theme) =>
              theme.palette.mode === "dark"
                ? `3px solid ${theme.palette.divider}`
                : "unset",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            "& .MuiAvatar-root": {
              mr: 2,
            },
            "&:before": {
              content: '""',
              display: (theme: Theme) =>
                theme.palette.mode === "dark" ? "none" : "block",
              position: "absolute",
              top: 0,
              right: 15,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              border: (theme: Theme) =>
                theme.palette.mode === "dark"
                  ? `3px solid ${theme.palette.divider}`
                  : "unset",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        {user ? (
          <Box>
            {USER_MENU_ROUTES.map((route) => {
              const Icon = route.Icon;

              return (
                <MenuItem
                  key={route.text}
                  component={Link}
                  to={route.path}
                  onClick={handleCloseUserMenu}
                >
                  <ListItemIcon>
                    <Icon fontSize="medium" />
                  </ListItemIcon>
                  {route.text}
                </MenuItem>
              );
            })}
            <Divider />
            <MenuItem
              component={Link}
              to="/"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                handleCloseUserMenu();
                onLogout();
              }}
            >
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Box>
        ) : (
          <MenuItem
            component={Link}
            to={LOGIN_ROUTE.path}
            onClick={handleCloseUserMenu}
          >
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            Login
          </MenuItem>
        )}
      </Menu>
    </>
  );
};
