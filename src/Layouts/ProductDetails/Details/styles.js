import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  desContainer: {
    "&.MuiGrid-root": {
      gap: theme.spacing(4),

      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        textAlign: "center",
      },
    },
  },

  productName: {
    "&.MuiTypography-root": {
      fontSize: "2rem",
      fontWeight: "600",
    },
  },

  productDescription: {
    "&.MuiTypography-root": {
      fontSize: "1rem",
      maxWidth: "530px",
    },
  },

  feedback: {
    "&.MuiGrid-root": {
      flexWrap: "nowrap",
    },
  },

  feedbackItems: {
    "&.MuiGrid-root": {
      flexDirection: "column",
    },
  },

  feedbackItemsInfo: {
    "&.MuiGrid-root": {
      fontWeight: "800",
    },
  },
}));
