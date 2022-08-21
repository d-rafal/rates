import { Link, SxProps, Theme, Typography } from "@mui/material";

interface CopyrightProps {
  sx?: SxProps<Theme>;
}

const Copyright = (props: CopyrightProps) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Rates App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
