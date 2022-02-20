import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  link: {
    "&.MuiTypography-root": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "14px",
      color: theme.palette.common.black,
      textDecorationColor: theme.palette.common.black,

      "& a": {
        color: theme.palette.common.black,
      },
    },
  },
}));
