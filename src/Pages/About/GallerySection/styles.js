import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(4),
      position: "relative",
      padding: `${theme.spacing(10)} 0`,
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
    "&.MuiSvgIcon-root": {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "100%",
      width: "24px",
      height: "24px",
      cursor: "pointer",
      padding: "4px",
      transform: "scale(1.4)",
      transition: "all 0.1s ease-in",

      "&:hover": {
        transform: "scale(1.3)",
      },
    },
  },
}));
