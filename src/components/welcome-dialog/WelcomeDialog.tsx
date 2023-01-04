import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ListWithHyphen = styled("ul")({
  listStyleType: "none",
  "&>li": {
    "&:before": { content: "'- '" },
  },
});

const WelcomeDialog = () => {
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(true);

  const handleCloseWelcomeDialog = () => {
    setShowWelcomeDialog(false);
  };
  return (
    <Dialog
      open={showWelcomeDialog}
      onClose={handleCloseWelcomeDialog}
      scroll="paper"
      aria-labelledby="welcome-dialog-title"
      aria-describedby=""
      sx={{ margin: "0rem" }}
    >
      <DialogTitle id="welcome-dialog-title">
        Welcome to my App
        <IconButton
          aria-label="close"
          onClick={handleCloseWelcomeDialog}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers={true} sx={{ "& > p + p": { mt: "0.6rem" } }}>
        {/* <DialogContentText> */}
        <Typography sx={{ mb: "0.5rem" }}>
          This <strong>SPA</strong> is a simple demonstration of usage some of
          react's environment libraries, such as:
        </Typography>
        <ListWithHyphen style={{ listStyle: "" }}>
          <li>react</li>
          <li>redux (RTK Query)</li>
          <li>react-hook-form</li>
          <li>material-ui</li>
          <li>react-router</li>
          <li>jest/react-testing-library with Mock Service Worker (MSW)</li>
        </ListWithHyphen>
        <Typography sx={{ mt: "1rem" }}>
          It's based on Create React App environment configuration, fully
          responsive and written in Typescript.
        </Typography>
        <Typography sx={{ mt: "1rem" }}>
          This app is using NBP Web API to display average rates of USD and EUR
          currencies
        </Typography>
        <Typography>
          During tests and authentication process RESTful communication is
          mocked width "Mock Service Worker" library.
        </Typography>
        <Typography>
          I will put an effort to progressively add new functionalities to this
          app, especially if they would cover usage of new libraries.
        </Typography>
        <Typography>
          You can start playing with it by entering following user credentials:
        </Typography>
        <ListWithHyphen>
          <li>email: user1@user.com</li>
          <li>password: 123456</li>
        </ListWithHyphen>
        <Typography sx={{ mt: "1rem !important" }}>Enjoy!</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseWelcomeDialog}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default WelcomeDialog;
