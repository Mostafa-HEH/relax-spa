import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(4),
      marginRight: theme.spacing(2),
    },
  },

  reviewCount: {
    "&.MuiGrid-root": {
      fontWeight: "800",
    },
  },

  comments: {
    "&.MuiGrid-root": {
      gap: theme.spacing(2),
    },
  },
}));
