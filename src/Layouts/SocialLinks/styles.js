import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  social: {
    display: "flex",
    gap: "0.5rem",
    cursor: "pointer",

    "& a": {
      color: ({ color }) => (color ? color : theme.palette.common.white),
    },
  },

  icon: {
    "&:hover": {
      opacity: "0.9",
    },
  },
}));
