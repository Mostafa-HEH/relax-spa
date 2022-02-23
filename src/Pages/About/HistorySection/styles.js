import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      paddingTop: theme.spacing(8),
      gap: theme.spacing(2),
      textAlign: "center",
      maxWidth: "95%",
    },
  },

  pargraph: {
    "&.MuiTypography-root": {
      maxWidth: "95%",
      margin: "auto",
    },
  },
}));
