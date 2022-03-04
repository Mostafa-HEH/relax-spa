import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  appbar: {
    "&.MuiAppBar-root": {
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows[0],
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
      color: theme.palette.common.black,
    },
  },

  toolbar: {
    "&.MuiToolbar-root": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },

  navList: {
    "&.MuiList-root": {
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
  },

  navListItem: {
    "&.MuiListItem-root": {
      whiteSpace: "nowrap",
      fontWeight: "400",
      "& a": {
        color: theme.palette.common.black,
        textDecoration: "none",
        display: "flex",
        gap: "0.2rem",
      },
    },
  },

  active: {
    "&.MuiListItem-root": {
      "& a": {
        color: theme.palette.primary.main,
      },
    },
  },

  menuIcon: {
    "&.MuiSvgIcon-root": {
      cursor: "pointer",
      color: theme.palette.primary.main,
    },
  },

  drawer: {
    "& .MuiPaper-root": {
      padding: theme.spacing(2),
      gap: theme.spacing(2),
    },
  },
}));
