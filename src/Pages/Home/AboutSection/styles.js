import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      gap: theme.spacing(6),
      justifyContent: "center",
      backgroundColor: "#ffd3650d",
      padding: `${theme.spacing(10)} 0`,
    },
  },

  description: {
    "&.MuiTypography-root": {
      maxWidth: "700px",
      textAlign: "center",
      padding: `0 ${theme.spacing(2)}`,
    },
  },

  departmentsContainer: {
    "&.MuiGrid-root": {
      gap: theme.spacing(2),
    },
  },

  departments: {
    "&.MuiGrid-root": {
      gap: theme.spacing(2),
      justifyContent: "center",
    },
  },

  departmentsTitle: {
    "&.MuiTypography-root": {
      color: theme.palette.common.black,
      fontSize: "1.2rem",
      textAlign: "center",
      fontWeight: "400",
    },
  },
}));
