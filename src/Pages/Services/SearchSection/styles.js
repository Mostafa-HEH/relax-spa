import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(8),
      justifyContent: "center",
      marginTop: theme.spacing(8),
    },
  },
}));