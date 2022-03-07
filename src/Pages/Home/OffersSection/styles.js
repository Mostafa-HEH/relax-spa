import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      position: "relative",
      alignItems: "center",
    },
  },

  arrows: {
    "&.MuiGrid-root": {
      position: "absolute",
      color: theme.palette.secondary.main,
      justifyContent: "space-between",
      padding: `0 ${theme.spacing(2)}`,
    },
  },

  arrow: {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}));
