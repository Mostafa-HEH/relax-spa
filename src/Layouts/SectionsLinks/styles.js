import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      justifyContent: "flex-end",
      gap: "1rem",
      marginRight: theme.spacing(4),

      "& a": {
        color: theme.palette.common.black,
        textDecorationColor: ({ color }) =>
          color === "secondary"
            ? theme.palette.secondary.main
            : theme.palette.primary.main,
        fontWeight: "600",
      },
    },

    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(2),
    },
  },
}));
