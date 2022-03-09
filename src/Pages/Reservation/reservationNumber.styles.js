import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      flexDirection: "column",
      alignItems: "center",
      gap: theme.spacing(4),
    },
  },

  title: {
    "&.MuiGrid-root": {
      fontSize: "2.5rem",
      fontWeight: "300",
    },
  },

  subtitle: {
    "&.MuiGrid-root": {
      textAlign: "center",
      fontWeight: "300",
    },
  },
}));
