import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      backgroundColor: "#ffd3650d",
      justifyContent: "center",
    },
  },

  imageContainer: {
    "&.MuiGrid-root": {
      height: "90vh",
      position: "relative",
      overflow: "hidden",
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",

      [theme.breakpoints.down("md")]: {
        height: "500px",
      },
    },
  },

  image: {
    width: "fit-content",
    height: "fit-content",
  },

  detailsContainer: {
    "&.MuiGrid-root": {
      height: "90vh",
      alignItems: "flex-start",
      alignContent: "space-between",
      maxWidth: "600px",
    },
  },

  bookPriceContainer: {
    "&.MuiGrid-root": {
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing(4),

      [theme.breakpoints.down("md")]: {
        maxWidth: "unset",
        justifyContent: "center",
        gap: theme.spacing(6),
      },
    },
  },

  priceContainer: {
    "&.MuiGrid-root": {
      color: theme.palette.primary.main,
      fontWeight: "300",
    },
  },

  tabs: {
    "&.MuiGrid-root": {
      marginTop: theme.spacing(4),
      display: "flex",
      justifyContent: "center",
    },
  },

  price: {
    fontSize: "3rem",
  },

  boxes: {
    position: "absolute",
    bottom: theme.spacing(4),
    display: "flex",
    flexDirection: "row",
    gap: "1rem",

    "& span": {
      height: "15px",
      width: "15px",
      backgroundColor: theme.palette.secondary.main,
      cursor: "pointer",
    },
  },
}));
