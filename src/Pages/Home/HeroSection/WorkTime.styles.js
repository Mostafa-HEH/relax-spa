import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    bottom: "16%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    fontWeight: "500",
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.borderRadius,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      bottom: "0",
    },
  },

  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },

  textTime: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "163px",
    },
  },
}));
