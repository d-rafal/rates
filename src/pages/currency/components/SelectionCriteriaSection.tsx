import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { AppAccordion } from "../../../mui/app-accordion/AppAccordion";
import { AppAccordionDetails } from "../../../mui/app-accordion/AppAccordionDetails";
import { AppAccordionSummary } from "../../../mui/app-accordion/AppAccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import TimeRangeSelection from "./TimeRangeSelection";
import CurrencySelection from "./CurrencySelection";

const SelectionCriteriaSection = () => {
  const [isAccordionExpanded, SetIsAccordionExpanded] = useState(true);

  const theme = useTheme();
  const matchUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box component="section">
      <AppAccordion
        expanded={isAccordionExpanded}
        onChange={() => SetIsAccordionExpanded((prev) => !prev)}
        sx={{ mb: "2rem!Important" }}
      >
        <AppAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="filter-content"
          id="filter-header"
        >
          <Typography>Select Criteria</Typography>
        </AppAccordionSummary>
        <AppAccordionDetails
          sx={{ pb: { xs: "2.5rem", lg: "1.5rem" }, pt: "1.3rem" }}
        >
          <Stack
            direction={matchUpLg ? "row" : "column"}
            alignItems={matchUpLg ? "start" : "center"}
            justifyContent={matchUpLg ? "space-between" : "center"}
            spacing={4}
            sx={{ flexWrap: "wrap" }}
          >
            <CurrencySelection />
            <TimeRangeSelection />
          </Stack>
        </AppAccordionDetails>
      </AppAccordion>
    </Box>
  );
};

export default React.memo(SelectionCriteriaSection);
