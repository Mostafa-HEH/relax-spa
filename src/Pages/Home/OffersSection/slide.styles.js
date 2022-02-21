import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      background: ({ image }) => `url(${image})no-repeat center center/cover`,
      height: "400px",
      color: theme.palette.common.white,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: theme.spacing(4),
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
    },
  },

  stepContainer: {
    "&.MuiGrid-root": {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
    },
  },

  title: {
    "&.MuiTypography-root": {
      fontSize: "3rem",
      fontWeight: "500",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
        textAlign: "center",
      },
    },
  },

  subtitle: {
    "&.MuiTypography-root": {
      fontSize: "1.5rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
  },

  currentStep: {
    "&.MuiTypography-root": {
      fontSize: "2rem",
    },
  },
}));
