import { useTheme } from "@mui/material";
import * as React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

const AppBarNavLink = React.forwardRef<
  HTMLAnchorElement,
  Omit<NavLinkProps, "style" | "className">
>((NavLinkProps, ref) => {
  const theme = useTheme();

  return (
    <NavLink
      ref={ref}
      // className={({ isActive }: { isActive: boolean }) => "null"}
      style={({ isActive }: { isActive: boolean }) => ({
        // color: isActive ? theme.palette.linkStatus.main : "",
      })}
      {...NavLinkProps}
    />
  );
});

export default React.memo(AppBarNavLink);
