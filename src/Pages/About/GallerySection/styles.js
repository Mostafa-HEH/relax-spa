import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(2),
      position: "relative",
    },
  },

  arrows: {
    "&.MuiGrid-root": {
      position: "absolute",
      top: "50%",
      justifyContent: "space-between",
      padding: `0 ${theme.spacing(4)}`,
    },
  },

  icon: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "100%",
    width: "30px",
    height: "30px",
    cursor: "pointer",
    padding: "4px",
    transform: "scale(1.4)",

    "&:hover": {
      transform: "scale(1.3)",
    },
  },
}));
