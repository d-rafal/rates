import {
  CircularProgress,
  Stack,
  Typography,
  StackTypeMap,
} from "@mui/material";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";

interface LoadingIndicatorProps
  extends DefaultComponentProps<StackTypeMap<{}, "div">> {}

const LoadingIndicator = ({ sx, ...stackProps }: LoadingIndicatorProps) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={[
        {
          height: "100%",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...stackProps}
    >
      <CircularProgress size={120} sx={{ marginBottom: "1rem" }} />
      <Typography>Loading...</Typography>
    </Stack>
  );
};

export default LoadingIndicator;
