import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      flexDirection: "column",
      gap: theme.spacing(4),
      justifyContent: "center",
      textAlign: "center",
      marginTop: theme.spacing(12),
      marginBottom: theme.spacing(12),

      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
      },
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
      fontSize: "1rem",
      fontWeight: "500",
      maxWidth: "300px",
      margin: "auto",
    },
  },
}));
