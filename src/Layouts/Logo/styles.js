import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  logo: {
    "&.MuiTypography-root": {
      fontSize: "2rem",
      fontWeight: "400",

      "& a": {
        color: ({ color }) => (color ? color : theme.palette.common.black),
        textDecoration: "none",
      },
    },
  },

  logoColor: {
    color: theme.palette.primary.main,
  },
}));
