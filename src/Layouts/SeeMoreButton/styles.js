import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiButton-root": {
      margin: "auto",
      marginBottom: theme.spacing(4),
    },
  },
}));
