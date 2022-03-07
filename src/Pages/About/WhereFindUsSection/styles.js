import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      padding: `${theme.spacing(10)} ${theme.spacing(4)}`,
      gap: theme.spacing(4),
      maxWidth: "1000px",

      [theme.breakpoints.down("sm")]: {
        paddingLeft: "0",
        paddingRight: "0",
      },
    },
  },

  phoneAdressContainer: {
    "&.MuiGrid-root": {
      [theme.breakpoints.down("sm")]: {
        gap: theme.spacing(4),
        justifyContent: "center",
      },
    },
  },

  adresses: {
    "&.MuiGrid-root": {
      gap: theme.spacing(1),
      alignItems: "center",

      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
  },

  adress: {
    "&.MuiGrid-root": {
      fontSize: "1.1rem",
      fontWeight: "400",
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

  icon: {
    "&.MuiGrid-root": {
      color: theme.palette.secondary.main,
    },
  },
}));
