import { alpha } from "@mui/material/styles";
import {
  Box,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useChangeLocalizationContext } from "../../theme/AppThemeProvider";
import { Localization } from "@mui/material/locale";

import MenuPopover from "./MenuPopover";
import { AVAILABLE_LANGUAGES } from "../../../app/translation";

interface ChangeLanguageProps {
  theme: Theme;
}

export const ChangeLanguage = ({ theme }: ChangeLanguageProps) => {
  const anchorRef = useRef(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { locale, setLocale } = useChangeLocalizationContext();

  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    setIsPopoverOpen(false);
  }, [matchUpMd]);

  const handlePopoverOpen = () => {
    setIsPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setIsPopoverOpen(false);
  };

  const handleLocalizationChange = (local: Localization) => {
    setLocale(local);
    handlePopoverClose();
  };

  let chosenLanguageIndex = AVAILABLE_LANGUAGES.findIndex(
    (language) => language.locale === locale
  );
  if (chosenLanguageIndex < 0) chosenLanguageIndex = 0;

  return (
    <>
      <Tooltip title="Change Language">
        <IconButton
          ref={anchorRef}
          onClick={handlePopoverOpen}
          sx={{
            display: "none",
            padding: 0,
            width: 44,
            height: 44,
            ...(isPopoverOpen && {
              bgcolor: (theme) =>
                alpha(
                  theme.palette.primary.main,
                  theme.palette.action.focusOpacity
                ),
            }),
          }}
        >
          <img
            src={AVAILABLE_LANGUAGES[chosenLanguageIndex].icon}
            alt={AVAILABLE_LANGUAGES[chosenLanguageIndex].label}
          />
        </IconButton>
      </Tooltip>
      <MenuPopover
        open={isPopoverOpen}
        onClose={handlePopoverClose}
        anchorEl={anchorRef.current}
      >
        <Box sx={{ py: 1 }}>
          {AVAILABLE_LANGUAGES.map((language) => (
            <MenuItem
              key={language.label}
              selected={language.locale === locale}
              onClick={() => handleLocalizationChange(language.locale)}
              sx={{ py: 1, px: 2.5 }}
            >
              <ListItemIcon>
                <Box component="img" alt={language.label} src={language.icon} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: "body2" }}>
                {language.label}
              </ListItemText>
            </MenuItem>
          ))}
        </Box>
      </MenuPopover>
    </>
  );
};
