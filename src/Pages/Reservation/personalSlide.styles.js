import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      margin: "auto",
      gap: theme.spacing(2),
      flexDirection: "column",
      backgroundColor: theme.palette.common.white,
    },
  },
}));
