import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { isDateValid } from "../../../utilities/date/isDateValid";
import { OrNull } from "../../../@types-and-const/@general";
import React from "react";
import DefaultTimeRangePicker from "./DefaultTimeRangePicker";
import CustomTimeRangeSelection from "./CustomTimeRangeSelection";

const TimeRangeSelection = () => {
  const theme = useTheme();
  const matchDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchDownXl = useMediaQuery(theme.breakpoints.down("xl"));
  const matchOnlyLg = useMediaQuery(theme.breakpoints.only("lg"));

  const matchUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box sx={{ pt: "0.0rem", flexGrow: 0 }}>
      <Stack
        spacing={matchDownSm ? 1 : 3}
        direction={matchDownXl ? "column" : "row"}
        alignItems={matchOnlyLg ? "end" : "center"}
        justifyContent="center"
        sx={{ flexWrap: "wrap" }}
      >
        <DefaultTimeRangePicker />
        <CustomTimeRangeSelection />
      </Stack>
    </Box>
  );
};

export default React.memo(TimeRangeSelection);
