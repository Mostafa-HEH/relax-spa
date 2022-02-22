import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      paddingTop: theme.spacing(8),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      gap: theme.spacing(2),
    },
  },

  head: {
    "&.MuiTypography-root": {
      fontSize: "1.5rem",
      fontWeight: "700",
    },
  },
}));
