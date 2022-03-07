import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      flexDirection: ({ direction }) =>
        direction === "rtl" ? "row-reverse" : "row",
      justifyContent: "center",
      maxWidth: "1000px",
      margin: "auto",
      gap: theme.spacing(2),
      padding: theme.spacing(2),
      border: ({ direction }) =>
        direction === "rtl"
          ? `2px solid ${theme.palette.secondary.main}`
          : "unset",
      backgroundColor: ({ direction }) =>
        direction === "rtl" ? "unset" : `${theme.palette.secondary.main}`,

      [theme.breakpoints.down("md")]: {
        maxWidth: "500px",
      },

      "& img": {
        margin: "auto",
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
      },
    },
  },

  textContainer: {
    "&.MuiGrid-root": {
      flexDirection: "column",
      gap: theme.spacing(2),

      [theme.breakpoints.down("md")]: {
        alignItems: "center",
        textAlign: "center",
      },
    },
  },

  title: {
    "&.MuiGrid-root": {
      fontSize: "1.8rem",
      fontWeight: "400",
    },
  },

  paraghraph: {
    "&.MuiGrid-root": {
      maxWidth: "500px",
    },
  },
}));
