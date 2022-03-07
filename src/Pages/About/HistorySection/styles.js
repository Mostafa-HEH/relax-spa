import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      padding: `${theme.spacing(10)} ${theme.spacing(2)}`,
      gap: theme.spacing(4),
      textAlign: "center",
    },
  },

  pargraph: {
    "&.MuiTypography-root": {
      maxWidth: "700px",
      margin: "auto",
    },
  },
}));
