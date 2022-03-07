import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "300px",
    height: "200px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    boxShadow: theme.shadows[2],
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },

  title: {
    "&.MuiTypography-root": {
      color: theme.palette.common.black,
      fontSize: "1rem",
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
      fontWeight: "600",
      backgroundColor: theme.palette.secondary.main,
      width: "100%",
      textAlign: "center",
      position: "absolute",
      zIndex: "1",
    },
  },

  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
  },
}));
