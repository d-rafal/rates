import {
  type BoxProps,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  styled,
  Typography,
  Box,
  Slider,
  Button,
  Divider,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";

import React, { useCallback } from "react";
import {
  ROWS_SIZE_QUERY_IN_URL_CONFIG,
  COLUMNS_SIZE_QUERY_IN_URL_CONFIG,
  ROWS_SIZE_QUERY_IN_URL,
  COLUMNS_SIZE_QUERY_IN_URL,
} from "../../../@types-and-const/@url-queries/@mines/@layout-sizes";
import useGenerateSetConfigFn from "../hooks/useGenerateSetConfigFn";
import useGetConfig from "../hooks/useGetConfig";

import styles from "./LayoutSizeSelection.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { MINES_PERCENT_QUERY_IN_URL } from "../../../@types-and-const/@url-queries/@mines/@percent-mines";
import { type InitializeLayoutConfig } from "../hooks/useGetGameConfig";

interface LayoutSizeSelectionProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  initializeLayoutConfig: InitializeLayoutConfig;
}

const LayoutSizeSelection = ({
  setIsModalOpen,
  initializeLayoutConfig,
}: LayoutSizeSelectionProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [rowsSize, columnsSize, minesPercent] = useGetConfig(searchParams);

  const [
    setRowsSizeQueryInURL,
    setColumnsSizeQueryInURL,
    setMinesPercentQueryInURL,
  ] = useGenerateSetConfigFn(searchParams, setSearchParams);

  const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);

  return (
    <Paper
      elevation={0}
      sx={{
        // height: "400px",
        // width: "400px",

        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 550,
        // boxShadow: 24,
        // p: 4,
        // padding: "0 1rem 1rem",
      }}
    >
      <Stack
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        sx={{
          // marginBottom: "1rem",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.background.default
              : "#1975d2",
          padding: "0.5rem 0.7rem",

          color: (theme) => theme.palette.common.white,

          borderTopRightRadius: 1,
          borderTopLeftRadius: 1,
        }}
      >
        <Typography variant="h4" component="h4" id="game-config-title">
          Select Game Configuration
        </Typography>

        <CloseIcon
          onClick={closeModal}
          sx={{ cursor: "pointer", fontSize: "2rem" }}
        />
      </Stack>

      <Box component="form" sx={{ padding: "1rem 1.5rem 1.5rem" }}>
        <fieldset className={styles.fieldset}>
          <legend>
            <Typography variant="subtitle1">Layout Size:</Typography>
          </legend>

          <Stack
            direction="row"
            justifyContent="space-evenly"
            sx={{ paddingTop: "0.5rem" }}
          >
            <FormControl variant="standard" sx={{ m: 0, minWidth: "6rem" }}>
              <InputLabel id="select-rows-size-label">rows</InputLabel>
              <Select
                labelId="select-rows-size-label"
                id="select-rows-size"
                value={rowsSize}
                onChange={setRowsSizeQueryInURL}
                label="select rows number"
                autoWidth
              >
                {ROWS_SIZE_QUERY_IN_URL.allowedValues.map((value) => (
                  <MenuItem
                    value={ROWS_SIZE_QUERY_IN_URL_CONFIG[value].queryValue}
                    key={value}
                  >
                    {ROWS_SIZE_QUERY_IN_URL_CONFIG[value].uiValue}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 0, minWidth: "6rem" }}>
              <InputLabel id="select-columns-size-label">columns</InputLabel>
              <Select
                labelId="select-columns-size-label"
                id="select-columns-size"
                value={columnsSize}
                onChange={setColumnsSizeQueryInURL}
                label="Select columns number"
                autoWidth
              >
                {COLUMNS_SIZE_QUERY_IN_URL.allowedValues.map((value) => (
                  <MenuItem
                    value={COLUMNS_SIZE_QUERY_IN_URL_CONFIG[value].queryValue}
                    key={value}
                  >
                    {COLUMNS_SIZE_QUERY_IN_URL_CONFIG[value].uiValue}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend>
            <Typography variant="subtitle1">Percent mines:</Typography>
          </legend>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            sx={{ paddingTop: "2.5rem" }}
          >
            <Slider
              value={minesPercent}
              onChange={setMinesPercentQueryInURL}
              aria-labelledby="input-slider"
              min={MINES_PERCENT_QUERY_IN_URL.minValue}
              max={MINES_PERCENT_QUERY_IN_URL.maxValue}
              valueLabelDisplay="on"
              marks={[
                {
                  value: MINES_PERCENT_QUERY_IN_URL.minValue,
                  label: String(MINES_PERCENT_QUERY_IN_URL.minValue),
                },
                {
                  value: MINES_PERCENT_QUERY_IN_URL.maxValue,
                  label: String(MINES_PERCENT_QUERY_IN_URL.maxValue),
                },
              ]}
              sx={{ width: "80%" }}
            />
          </Stack>
        </fieldset>

        <Divider sx={{ marginTop: "1rem", marginBottom: "1.5rem" }} />
        <Stack direction="row">
          <Button
            type="submit"
            variant="outlined"
            sx={{ marginLeft: "auto", marginRight: "2rem" }}
            onClick={() => {
              initializeLayoutConfig(rowsSize, columnsSize, minesPercent);
              setIsModalOpen(false);
            }}
          >
            New Game
          </Button>
          <Button type="button" variant="outlined" onClick={closeModal}>
            Cancel
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default React.memo(LayoutSizeSelection);
