import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(4),
      marginLeft: theme.spacing(4),
    },
  },

  group: {
    "&.MuiGrid-root": {
      flexDirection: "column",
      fontSize: "1rem",
      fontWeight: "700",
    },
  },

  title: {
    "&.MuiGrid-root": {
      fontSize: "1.2rem",
      fontWeight: "800",
    },
  },
}));
