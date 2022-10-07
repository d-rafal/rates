import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import React from "react";
import {
  X_SIZE_QUERY_IN_URL_CONFIG,
  Y_SIZE_QUERY_IN_URL_CONFIG,
} from "../../../@types-and-const/@url-queries/@mines/@layout-sizes";
import useGenerateSetSizesFn from "../hooks/useGenerateSetSizesFn";
import useGetSizes from "../hooks/useGetSizes";

const LayoutSizeSelection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [xSize, ySize] = useGetSizes(searchParams);

  const [setXSizeQueryInURL, setYSizeQueryInURL] = useGenerateSetSizesFn(
    searchParams,
    setSearchParams
  );

  return (
    <>
      <FormControl variant="standard" sx={{ m: 0, minWidth: "6rem" }}>
        <InputLabel id="select-x-size-label">x size</InputLabel>
        <Select
          labelId="select-x-size-label"
          id="select-x-size"
          value={xSize}
          onChange={setXSizeQueryInURL}
          label="x-size"
          autoWidth
        >
          <MenuItem value={X_SIZE_QUERY_IN_URL_CONFIG[40].queryValue}>
            {X_SIZE_QUERY_IN_URL_CONFIG[40].uiValue}
          </MenuItem>
          <MenuItem value={X_SIZE_QUERY_IN_URL_CONFIG[50].queryValue}>
            {X_SIZE_QUERY_IN_URL_CONFIG[50].uiValue}
          </MenuItem>
          <MenuItem value={X_SIZE_QUERY_IN_URL_CONFIG[60].queryValue}>
            {X_SIZE_QUERY_IN_URL_CONFIG[60].uiValue}
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 0, minWidth: "6rem" }}>
        <InputLabel id="select-y-size-label">y size</InputLabel>
        <Select
          labelId="select-y-size-label"
          id="select-y-size"
          value={ySize}
          onChange={setYSizeQueryInURL}
          label="Select y-size"
          autoWidth
        >
          <MenuItem value={Y_SIZE_QUERY_IN_URL_CONFIG[10].queryValue}>
            {Y_SIZE_QUERY_IN_URL_CONFIG[10].uiValue}
          </MenuItem>
          <MenuItem value={Y_SIZE_QUERY_IN_URL_CONFIG[20].queryValue}>
            {Y_SIZE_QUERY_IN_URL_CONFIG[20].uiValue}
          </MenuItem>
          <MenuItem value={Y_SIZE_QUERY_IN_URL_CONFIG[30].queryValue}>
            {Y_SIZE_QUERY_IN_URL_CONFIG[30].uiValue}
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default React.memo(LayoutSizeSelection);
