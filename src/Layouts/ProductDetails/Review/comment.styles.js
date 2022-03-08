import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      flexWrap: "nowrap",
      gap: theme.spacing(1),
      flexDirection: "column",
    },
  },

  nameRateContainer: {
    "&.MuiGrid-root": {
      justifyContent: "space-between",
    },
  },

  name: {
    "&.MuiGrid-root": {
      fontWeight: "600",
      fontSize: "1.2rem",
    },
  },
}));
