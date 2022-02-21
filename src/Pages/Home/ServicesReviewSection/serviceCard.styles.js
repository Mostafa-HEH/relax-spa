import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiCard-root": {
      maxWidth: "300px",
    },
  },

  image: {
    "&.MuiCardMedia-root": {
      height: "200px",
    },
  },

  titlePrice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  productName: {
    "&.MuiTypography-root": {
      fontSize: "1.2rem",
      fontWeight: "800",
    },
  },

  price: {
    "&.MuiTypography-root": {
      fontWeight: "800",
      color: theme.palette.common.green,
    },
  },

  duration: {
    "&.MuiTypography-root": {
      fontWeight: "700",
    },
  },
}));
