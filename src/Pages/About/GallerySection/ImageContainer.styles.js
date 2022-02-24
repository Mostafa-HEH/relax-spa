import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      background: ({ image }) => `url(${image})no-repeat center center/cover`,
      height: "80vh",
      width: "100%",
      color: theme.palette.common.white,
      alignItems: "flex-end",
    },
  },

  textContainer: {
    "&.MuiGrid-root": {
      flexDirection: "column",
      marginLeft: theme.spacing(16),
      marginBottom: theme.spacing(8),
      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        alignItems: "center",
        textAlign: "center",
      },
    },
  },

  step: {
    "&.MuiGrid-root": {
      display: "flex",
      flexDirection: "row",
      fontWeight: "800",
      fontSize: "1.1rem",
      alignItems: "baseline",
    },
  },

  title: {
    "&.MuiGrid-root": {
      fontWeight: "800",
      fontSize: "1.2rem",
    },
  },

  description: {
    "&.MuiGrid-root": {
      maxWidth: "400px",
    },
  },

  currentStep: {
    fontSize: "1.5rem",
  },
}));
