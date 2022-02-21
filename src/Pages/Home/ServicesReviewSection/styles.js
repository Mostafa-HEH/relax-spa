import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(4),
    },
  },

  cardsContainer: {
    "&.MuiGrid-root": {
      gap: theme.spacing(2),
      justifyContent: "center",
    },
  },
}));
