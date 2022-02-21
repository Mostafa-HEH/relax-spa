import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  headContainer: {
    "&.MuiGrid-root": {
      justifyContent: "space-between",
      alignItems: "center",
    },
  },

  heading: {
    "&.MuiTypography-root": {
      fontSize: "1.5rem",
      fontWeight: "700",
      textAlign: "center",
    },
  },

  aboutLink: {
    "&.MuiGrid-root": {
      textAlign: "-webkit-right",
      paddingRight: theme.spacing(2),
    },
  },
}));
