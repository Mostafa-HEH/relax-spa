import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      padding: `${theme.spacing(10)} 0`,
      flexDirection: "column",
      alignItems: "center",
    },
  },

  subContainer: {
    "&.MuiGrid-root": {
      marginTop: theme.spacing(10),
      maxWidth: "1110px",
      flexWrap: "nowrap",

      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        justifyContent: "center",
        gap: theme.spacing(10),
      },
    },
  },
}));
