import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      margin: "auto",
      gap: theme.spacing(6),
      flexDirection: "column",
      backgroundColor: theme.palette.common.white,
    },
  },

  personContainer: {
    "&.MuiGrid-root": {
      gap: theme.spacing(2),
    },
  },

  title: {
    "&.MuiGrid-root": {
      textAlign: "center",
      fontSize: "1.2rem",
      color: theme.palette.primary.main,
      fontWeight: "400",
    },
  },
}));
