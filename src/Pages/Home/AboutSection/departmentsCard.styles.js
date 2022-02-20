import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },

  title: {
    "&.MuiTypography-root": {
      position: "absolute",
      bottom: theme.spacing(2),
      left: theme.spacing(2),
      color: "#fff",
      fontSize: "1rem",
      fontWeight: "600",
    },
  },

  image: {
    height: "100%",
    maxWidth: "300px",
    verticalAlign: "middle",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}));
