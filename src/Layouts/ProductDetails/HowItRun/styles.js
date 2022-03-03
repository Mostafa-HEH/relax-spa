import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(4),
    },
  },

  listContainer: {
    "&.MuiGrid-root": {
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        alignItems: "center",
      },
    },
  },

  title: {
    "&.MuiGrid-root": {
      fontSize: "1.2rem",
      fontWeight: "700",
      [theme.breakpoints.down("md")]: {
        alignSelf: "flex-start",
      },
    },
  },

  list: {
    marginTop: "0",
    marginBottom: "0",
  },
}));
