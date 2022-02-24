import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      flexDirection: ({ direction }) =>
        direction === "rtl" ? "row-reverse" : "row",
      justifyContent: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      maxWidth: "90%",
      margin: "auto",
      gap: theme.spacing(2),

      "& img": {
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
}));
