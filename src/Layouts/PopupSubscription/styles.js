import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      backgroundColor: theme.palette.common.lightYellow,
      position: "fixed",
      bottom: "0",
      height: "200px",
      zIndex: "1994",
      color: theme.palette.common.black,
      borderTop: `2px solid ${theme.palette.secondary.main}`,
      display: ({ show }) => (show ? "flex" : "none"),
      alignItems: "center",
      justifyContent: "center",

      [theme.breakpoints.down("sm")]: {
        height: "300px",
      },
    },
  },

  closeIcon: {
    "&.MuiSvgIcon-root": {
      position: "absolute",
      right: theme.spacing(4),
      top: theme.spacing(2),
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.black,
      borderRadius: "50%",
      cursor: "pointer",
      transform: "scale(1.2)",
    },
  },

  title: {
    "&.MuiGrid-root": {
      fontSize: "1.5rem",
      fontWeight: "300",
      textAlign: "center",
      padding: `0 ${theme.spacing(2)}`,
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(6),
      },
    },
  },

  worning: {
    "&.MuiGrid-root": {
      textAlign: "center",
      padding: `0 ${theme.spacing(2)}`,
    },
  },

  form: {
    "&.MuiGrid-root": {
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing(2),
    },
  },

  filed: {
    "&.MuiFilledInput-root": {
      backgroundColor: theme.palette.common.white,
    },
  },
}));
