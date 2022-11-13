import {
  createTheme,
  PaletteMode,
  responsiveFontSizes,
  ThemeOptions,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { Localization } from "@mui/material/locale";
import createCtx from "../../utilities/createCtx";
import { AVAILABLE_LANGUAGES } from "../../app/translation";

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  spacing: (factor: number) => `${0.5 * factor}rem`,
  palette: {
    mode,
  },
  components: {
    MuiUseMediaQuery: { defaultProps: { noSsr: true } },
  },
});

const [useInversePaletteModeContext, InversePaletteModeContextProvider] =
  createCtx<() => void>("InversePaletteModeContextProvider");

interface ChangeLocalizationContext {
  locale: Localization;
  setLocale: React.Dispatch<React.SetStateAction<Localization>>;
}
const [useChangeLocalizationContext, ChangeLocalizationContextProvider] =
  createCtx<ChangeLocalizationContext>("ChangeLocalizationContextProvider");

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [paletteMode, setPaletteMode] = useState<PaletteMode>(() =>
    prefersDarkMode ? "dark" : "light"
  );
  const [locale, setLocale] = useState<Localization>(
    AVAILABLE_LANGUAGES[0].locale
  );

  const theme = responsiveFontSizes(
    createTheme(getDesignTokens(paletteMode), locale)
  );

  const inversePaletteMode = () =>
    setPaletteMode((paletteMode) =>
      paletteMode === "light" ? "dark" : "light"
    );

  return (
    <InversePaletteModeContextProvider value={inversePaletteMode}>
      <ChangeLocalizationContextProvider value={{ locale, setLocale }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ChangeLocalizationContextProvider>
    </InversePaletteModeContextProvider>
  );
};

export default AppThemeProvider;
export { useInversePaletteModeContext, useChangeLocalizationContext };
