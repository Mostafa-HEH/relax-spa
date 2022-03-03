import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {},
  },

  imageContainer: {
    "&.MuiGrid-root": {
      height: "90vh",
      position: "relative",
      overflow: "hidden",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        height: "300px",
      },
    },
  },

  image: {
    position: "absolute",
    width: "80%",
    left: "10%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      left: "0",
    },
  },

  detailsContainer: {
    "&.MuiGrid-root": {
      flexDirection: "column",
      gap: theme.spacing(4),
      marginTop: theme.spacing(4),

      [theme.breakpoints.down("md")]: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
      },
    },
  },

  tabs: {
    "&.MuiGrid-root": {
      fontSize: "1rem",
      fontWeight: "800",
      gap: "2rem",
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
      },
    },
  },

  tab: {
    "&.MuiGrid-root": {
      cursor: "pointer",
    },
  },

  bookPriceContainer: {
    "&.MuiGrid-root": {
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "90%",

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
    },
  },

  price: {
    fontSize: "3rem",
  },
}));
