import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(4),
      padding: `${theme.spacing(10)} 0`,
    },
  },

  servicesContainer: {
    "&.MuiGrid-root": {
      gap: theme.spacing(2),
    },
  },

  heading: {
    "&.MuiGrid-root": {
      fontSize: "1.2rem",
      fontWeight: "700",
    },
  },
}));
