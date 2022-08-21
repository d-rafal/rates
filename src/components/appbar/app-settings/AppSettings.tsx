import { Box, SxProps, Theme, useTheme } from "@mui/material";
import { ChangeLanguage } from "./ChangeLanguage";
import { ToggleTheme } from "./ToggleTheme";

const AppSettings = ({ sx = [] }: { sx?: SxProps<Theme> }) => {
  const theme = useTheme();

  return (
    <Box sx={[...(Array.isArray(sx) ? sx : [sx])]}>
      <ChangeLanguage theme={theme} />
      <ToggleTheme theme={theme} />
    </Box>
  );
};

export default AppSettings;
