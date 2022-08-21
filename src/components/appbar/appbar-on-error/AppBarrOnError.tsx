import { Alert, Theme, Toolbar } from "@mui/material";

function AppBarrOnError() {
  return (
    <Toolbar
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        right: 0,
        top: 0,
        left: 0,
        zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Alert variant="filled" severity="error">
        Error inside an application, reload the page.
      </Alert>
    </Toolbar>
  );
}

export default AppBarrOnError;
