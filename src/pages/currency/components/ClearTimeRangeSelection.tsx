import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { UseFormReset } from "react-hook-form";

import { SetSearchParams } from "../../../@types-and-const/@general";

import { removeQueryFromUrl } from "../../../utilities/removeQueryFromUrl";
import { TIME_RANGE_QUERY_IN_URL } from "../../../@types-and-const/@url-queries/@time-range";
import { type FormDataType } from "./CustomTimeRangeSelection";

interface ClearTimeRangeSelectionProps {
  searchParams: URLSearchParams;
  setSearchParams: SetSearchParams;
  reset: UseFormReset<FormDataType>;
}

const ClearTimeRangeSelection = ({
  searchParams,
  setSearchParams,
  reset,
}: ClearTimeRangeSelectionProps) => {
  return (
    <IconButton
      type="button"
      aria-label="clear filter"
      onClick={() => {
        reset();
        removeQueryFromUrl(
          searchParams,
          setSearchParams,
          TIME_RANGE_QUERY_IN_URL.key
        );
      }}
    >
      <HighlightOffIcon sx={{ fontSize: "3rem" }} />
    </IconButton>
  );
};

export default ClearTimeRangeSelection;
