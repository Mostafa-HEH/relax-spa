import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  logo: {
    "&.MuiTypography-root": {
      fontSize: "1.5rem",
      fontWeight: "700",
      "& a": {
        color: ({ color }) => (color ? color : theme.palette.common.black),
        textDecoration: "none",
      },
    },
  },

  logoColor: {
    color: theme.palette.common.green,
  },
}));
