import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(4),
      position: "relative",
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  },

  form: {
    "&.MuiGrid-root": {
      maxWidth: "700px",
      margin: "auto",
      padding: `${theme.spacing(8)} ${theme.spacing(10)}`,
      gap: theme.spacing(2),
      flexDirection: "column",
      boxShadow: theme.shadows[2],
      backgroundColor: theme.palette.common.white,

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
      backgroundColor: "#f4fff8",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "60%",
      zIndex: "-1",
    },
  },
}));
