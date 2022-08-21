import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NAV_DRAWER_ID } from "./NavDrawer";
import { useSetNavDrawerOpen } from "./NavDrawerProvider";

interface NavDrawerControlButtonsProps {
  isNavDrawerOpen: boolean;
}

export const NavDrawerControlButtons = ({
  isNavDrawerOpen,
}: NavDrawerControlButtonsProps) => {
  const setNavDrawerOpen = useSetNavDrawerOpen();

  return (
    <>
      <IconButton
        size="large"
        aria-label="expand/collapse navigation menu"
        aria-controls={NAV_DRAWER_ID}
        onClick={() => setNavDrawerOpen((open) => !open)}
        color="inherit"
        sx={{
          display: { xs: "flex;", md: "none" },
        }}
      >
        <MenuIcon sx={{ fontSize: "2rem" }} />
      </IconButton>
      <IconButton
        size="large"
        aria-label="open navigation menu"
        aria-controls={NAV_DRAWER_ID}
        aria-haspopup="true"
        onClick={() => setNavDrawerOpen((open) => !open)}
        color="inherit"
        sx={{
          display: { xs: "none;", md: "flex" },
        }}
      >
        {isNavDrawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </>
  );
};
