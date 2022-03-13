import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      justifyContent: "center",
      padding: `${theme.spacing(10)} 0`,
    },
  },
}));
