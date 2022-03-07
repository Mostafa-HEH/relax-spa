import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
  },

  slideContainer: {
    "&.MuiGrid-root": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      position: "relative",
      top: "-32px",
      height: "70%",
      width: "90%",
      boxShadow: theme.shadows[1],
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
      backgroundColor: "#ffffff69",
      overflow: "hidden",
      gap: theme.spacing(4),

      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },

      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        alignItems: "center",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        height: "100%",
        width: "100%",
      },
    },
  },

  maintitle: {
    "&.MuiTypography-root": {
      fontSize: "3rem",
      fontWeight: "100",
      maxWidth: "791px",
      lineHeight: "50px",

      [theme.breakpoints.down("md")]: {
        fontSize: "2.5rem",
      },
    },
  },

  subtitle: {
    "&.MuiTypography-root": {
      lineHeight: "28px",
      fontSize: "1.2rem",
      maxWidth: "450px",
    },
  },

  containerBackground: {
    "&.MuiGrid-root": {
      background: "#0192670d",
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: "-4",
    },
  },

  subContainerBackground: {
    "&.MuiGrid-root": {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.primary.main,
      filter: "blur(100px)",
      zIndex: "-2",
    },
  },

  image: {
    right: "0",
    bottom: "0",
    position: "absolute",
    transform: "scale(-1, 1)",
    zIndex: "-1",
    [theme.breakpoints.down("sm")]: {
      right: "-100px",
    },
  },
}));
