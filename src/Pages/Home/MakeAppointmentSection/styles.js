import { makeStyles } from "@mui/styles";
import containerBg from "../../../Assets/Images/book-section.jpg";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(4),
      position: "relative",
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
  },

  bg: {
    position: "absolute",
    background: `url(${containerBg})no-repeat center center/cover`,
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "-3",
  },

  form: {
    "&.MuiGrid-root": {
      maxWidth: "600px",
      margin: "auto",
      padding: `${theme.spacing(8)} ${theme.spacing(10)}`,
      gap: theme.spacing(2),
      flexDirection: "column",
      boxShadow: theme.shadows[2],
      backgroundColor: theme.palette.common.white,
      border: `2px solid ${theme.palette.secondary.main}`,

      [theme.breakpoints.down("sm")]: {
        padding: `${theme.spacing(8)} ${theme.spacing(2)}`,
      },
    },
  },

  button: {
    "&.MuiGrid-root": {
      alignSelf: "end",
    },
  },

  frame: {
    "&.MuiGrid-root": {
      backgroundColor: "#ffd36559",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "60%",
      zIndex: "-2",
    },
  },
}));
