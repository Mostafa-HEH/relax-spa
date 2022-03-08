import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      fontSize: "4rem",
      fontWeight: "100",
      textAlign: "center",
      lineHeight: "65px",
    },
  },
}));
