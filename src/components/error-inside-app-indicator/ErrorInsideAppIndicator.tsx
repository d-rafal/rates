import { Alert, Box } from "@mui/material";

const ErrorInsideAppIndicator = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Alert variant="filled" severity="error">
        Error inside an application, reload the page.
      </Alert>
    </Box>
  );
};

export default ErrorInsideAppIndicator;
