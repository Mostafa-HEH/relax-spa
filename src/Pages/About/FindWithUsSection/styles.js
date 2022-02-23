import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(8),
    },
  },

  servicesContainer: {
    "&.MuiGrid-root": {
      gap: theme.spacing(6),
    },
  },

  heading: {
    "&.MuiGrid-root": {
      fontSize: "1.2rem",
      fontWeight: "700",
    },
  },
}));
