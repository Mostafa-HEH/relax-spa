import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      flexWrap: "nowrap",
      gap: "1rem",
    },
  },

  nameRateContainer: {
    "&.MuiGrid-root": {
      justifyContent: "space-between",
    },
  },

  name: {
    "&.MuiGrid-root": {
      fontWeight: "800",
      fontSize: "1.2rem",
    },
  },
}));
