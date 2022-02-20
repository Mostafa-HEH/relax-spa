import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  appbar: {
    "&.MuiAppBar-root": {
      backgroundColor: theme.palette.common.white,
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
      fontWeight: "600",
      "& a": {
        color: theme.palette.common.black,
        textDecoration: "none",
      },
    },
  },

  active: {
    "&.MuiListItem-root": {
      "& a": {
        color: theme.palette.common.green,
      },
    },
  },

  menuIcon: {
    "&.MuiSvgIcon-root": {
      cursor: "pointer",
    },
  },

  drawer: {
    "& .MuiPaper-root": {
      padding: theme.spacing(2),
      gap: theme.spacing(2),
    },
  },
}));