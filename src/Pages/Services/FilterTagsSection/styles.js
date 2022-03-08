import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      position: "relative",
      height: "3rem",
      maxWidth: "800px",
      alignItems: "center",
      overflow: "hidden",
      margin: `${theme.spacing(10)} auto`,
      [theme.breakpoints.down("sm")]: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      },
    },
  },
  tagsContainer: {
    "&.MuiGrid-root": {
      gap: theme.spacing(1),
      position: "absolute",
      flexWrap: "nowrap",
      whiteSpace: "nowrap",
      right: ({ tagsPosition }) => `${tagsPosition}px`,
      transition: "all 0.5s ease 0s",
    },
  },

  rightArrow: {
    position: "absolute",
    right: "0",
    cursor: "pointer",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "32px",
    background: "rgb(255,255,255)",
    background:
      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
  },

  leftArrow: {
    position: "absolute",
    left: "0",
    cursor: "pointer",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: "32px",
    background: "rgb(255,255,255)",
    background:
      "linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
  },
}));
