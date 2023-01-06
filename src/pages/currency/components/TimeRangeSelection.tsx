import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import CustomTimeRangeSelection from "./CustomTimeRangeSelection";
import DefaultTimeRangePicker from "./DefaultTimeRangePicker";

const TimeRangeSelection = () => {
  const theme = useTheme();
  const matchDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchDownXl = useMediaQuery(theme.breakpoints.down("xl"));
  const matchOnlyLg = useMediaQuery(theme.breakpoints.only("lg"));

  return (
    <Box sx={{ pt: "0.0rem", flexGrow: 0 }}>
      <Stack
        spacing={matchDownSm ? 4 : 4}
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
