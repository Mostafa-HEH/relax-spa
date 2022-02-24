import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      justifyContent: "center",
      marginBottom: theme.spacing(4)
    },
  },
}));
