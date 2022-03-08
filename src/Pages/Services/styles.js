import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      backgroundColor: "#ffd3650d",
      padding: `${theme.spacing(10)} 0`,
      justifyContent: "center",
    },
  },
}));
