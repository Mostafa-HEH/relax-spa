import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      position: "relative",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      maxWidth: "700px",
      margin: "auto",
      padding: `${theme.spacing(8)} ${theme.spacing(10)}`,
      boxShadow: theme.shadows[2],
      backgroundColor: theme.palette.common.white,
      gap: theme.spacing(4),

      [theme.breakpoints.down("sm")]: {
        padding: `${theme.spacing(8)} ${theme.spacing(2)}`,
      },
    },
  },

  title: {
    "&.MuiGrid-root": {
      fontSize: "2.5rem",
      fontWeight: "800",
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
