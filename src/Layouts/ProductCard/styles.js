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

  contentContainer: {
    "&.MuiCardContent-root": {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(2),
    },
  },

  titlePrice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    "&.MuiTypography-root": {
      fontSize: "1.2rem",
      fontWeight: "600",
    },
  },

  price: {
    "&.MuiTypography-root": {
      fontWeight: "300",
      color: theme.palette.primary.main,
    },
  },

  priceDgt: {
    fontSize: "1.5rem",
  },

  duration: {
    "&.MuiChip-root": {
      width: "fit-content",
    },
  },
}));
