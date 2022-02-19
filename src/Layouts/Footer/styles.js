import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      backgroundColor: theme.palette.grey[900],
      gap: theme.spacing(4),
      padding: theme.spacing(4),
    },
  },

  linksContainer: {
    "&.MuiGrid-root": {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },

  linksList: {
    "&.MuiList-root": {
      display: "flex",
      flexDirection: "row",

      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
  },

  linksListItem: {
    "&.MuiListItem-root": {
      whiteSpace: "nowrap",

      "& a": {
        color: theme.palette.common.white,
        fontWeight: "500",
        fontSize: "1rem",

        "&:hover": {
          opacity: "0.9",
        },
      },
    },
  },

  social: {
    display: "flex",
    gap: "0.5rem",
    cursor: "pointer",

    "& a": {
      color: theme.palette.common.white,
    },
  },

  icon: {
    "&:hover": {
      opacity: "0.9",
    },
  },

  divider: {
    "&.MuiDivider-root": {
      backgroundColor: theme.palette.grey[50],
      margin: "auto",
      opicity: 0.6,
    },
  },

  copyright: {
    color: theme.palette.grey[100],
    fontSize: "0.9rem",
    textAlign: "center",

    "& a": {
      color: theme.palette.grey[100],
    },
  },
}));
