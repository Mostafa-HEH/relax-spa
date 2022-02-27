import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(8),
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
    },
  },

  subContainer: {
    "&.MuiGrid-root": {},
  },
}));
