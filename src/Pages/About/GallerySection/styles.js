import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(4),
      position: "relative",
      padding: `${theme.spacing(10)} 0`,
    },
  },

  imageContainer: {
    "&.MuiGrid-root": {
      height: "85vh",
      width: "100%",
      justifyContent: "center",
      position: "relative",

      "&::before": {
        backgroundColor: theme.palette.common.black,
        content: `""`,
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "-1",
      },
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

  textContainer: {
    "&.MuiGrid-root": {
      textAlign: "center",
      padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
      backgroundColor: "#ffd365a6",
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
    },
  },

  title: {
    "&.MuiGrid-root": {
      fontSize: "1.6rem",
      fontWeight: "300",
    },
  },

  description: {
    "&.MuiGrid-root": {
      fontSize: "1rem",
    },
  },

  step: {
    "&.MuiGrid-root": {
      fontSize: "1.5rem",
      fontWeight: "300",
    },
  },

  currentStep: {
    fontSize: "2rem",
  },
}));
