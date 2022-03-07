import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      justifyContent: "center",
    },
  },

  title: {
    "&.MuiTypography-root": {
      fontSize: "2rem",
      fontWidth: "300",
      position: "relative",

      "&::before": {
        content: `""`,
        left: "0",
        bottom: "0",
        height: "50%",
        width: "100%",
        position: "absolute",
        zIndex: "-1",
        backgroundColor: ({ color }) =>
          color === "secondary"
            ? theme.palette.secondary.main
            : theme.palette.primary.main,
      },
    },
  },
}));
