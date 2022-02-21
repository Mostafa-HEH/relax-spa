import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(4),
    },
  },

  description: {
    "&.MuiTypography-root": {
      maxWidth: "50%",
      textAlign: "center",
      margin: "auto",

      [theme.breakpoints.down("sm")]: {
        maxWidth: "90%",
      },
    },
  },

  departmentsContainer: {
    "&.MuiGrid-root": {
      gap: theme.spacing(2),
    },
  },

  departments: {
    "&.MuiGrid-root": {
      gap: theme.spacing(2),
      justifyContent: "center",
    },
  },

  departmentsTitle: {
    "&.MuiTypography-root": {
      textAlign: "center",
      fontSize: "1rem",
      fontWeight: "700",
      color: "#707070",
    },
  },
}));
