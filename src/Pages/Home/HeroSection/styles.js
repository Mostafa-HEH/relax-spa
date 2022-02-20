import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      position: "relative",
      gap: theme.spacing(4),
      padding: theme.spacing(6),
      flexDirection: "column",
      backgroundColor: "#f4fff8",
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: theme.shape.borderRadius,
      maxWidth: "1100px",
      boxShadow: theme.shadows[2],

      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2),
        alignItems: "center",
        paddingBottom: theme.spacing(8),
      },
    },
  },

  maintitle: {
    "&.MuiTypography-root": {
      fontSize: "3rem",
      maxWidth: "590px",
      lineHeight: "50px",
      fontWeight: "700",
      fontFamily: "Playfair Display",

      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
        textAlign: "center",
      },
    },
  },

  subtitle: {
    "&.MuiTypography-root": {
      fontSize: "1.2rem",
      fontWeight: "400",
      maxWidth: "489px",
      lineHeight: "23px",
      color: theme.palette.grey[600],

      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
  },

  image: {
    position: "absolute",
    bottom: "0",
    right: "0",
    height: "100%",

    [theme.breakpoints.down("md")]: {
      opacity: "0.2",
    },
  },

  gridItem: {
    "&.MuiGrid-item": {
      zIndex: "1",
    },
  },
}));
