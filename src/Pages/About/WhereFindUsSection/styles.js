import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      gap: theme.spacing(8),
    },
  },

  adresses: {
    "&.MuiGrid-root": {
      gap: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
  },

  adress: {
    "&.MuiGrid-root": {
      fontSize: "1.1rem",
      fontWeight: "800",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
  },

  phoneContainer: {
    "&.MuiGrid-root": {
      gap: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
  },

  adressContainer: {
    "&.MuiGrid-root": {
      gap: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
  },

  map: {
    "&.MuiGrid-root": {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
}));
