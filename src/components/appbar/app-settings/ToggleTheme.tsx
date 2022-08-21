import { IconButton, Theme, Tooltip } from "@mui/material";
import { useInversePaletteModeContext } from "../../theme/AppThemeProvider";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface ToggleThemeProps {
  theme: Theme;
}

export const ToggleTheme = ({ theme }: ToggleThemeProps) => {
  const inversePaletteMode = useInversePaletteModeContext();

  return (
    <Tooltip title="Toggle theme">
      <IconButton sx={{ ml: 0 }} onClick={inversePaletteMode} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Tooltip>
  );
};
