import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      justifyContent: "center",
      marginTop: theme.spacing(10),
    },
  },
}));
