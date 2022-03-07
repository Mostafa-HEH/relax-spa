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

      "&::after": {
        content: `""`,
        backgroundColor: "#00000054",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        position: "absolute",
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
      fontWeight: "200",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "300px",
        lineHeight: "46px",
        textAlign: "center",
      },
    },
  },

  subtitle: {
    "&.MuiTypography-root": {
      fontSize: "1.5rem",
      fontWeight: "200",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "200px",
        textAlign: "center",
        lineHeight: "30px",
      },
    },
  },

  currentStep: {
    "&.MuiTypography-root": {
      fontSize: "2rem",
    },
  },

  items: {
    position: "relative",
    zIndex: "1",
  },
}));
