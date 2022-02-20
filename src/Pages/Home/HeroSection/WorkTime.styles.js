import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    bottom: "-30px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    left: "33%",
    fontWeight: "700",
    boxShadow: theme.shadows[2],
    borderRadius: theme.shape.borderRadius,

    [theme.breakpoints.down("md")]: {
      left: "25%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      left: "0",
    },
  },

  icon: {
    color: theme.palette.common.green,
    marginRight: theme.spacing(2),
  },
}));
