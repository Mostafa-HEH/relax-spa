import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(4),
      marginLeft: theme.spacing(4),

      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 0,
      },
    },
  },

  group: {
    "&.MuiGrid-root": {
      flexDirection: "column",
      fontSize: "1rem",
      fontWeight: "700",
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },

  items: {
    "&.MuiGrid-root": {
      fontWeight: "400",
    },
  },

  title: {
    "&.MuiGrid-root": {
      fontSize: "1.2rem",
      fontWeight: "600",
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
}));
