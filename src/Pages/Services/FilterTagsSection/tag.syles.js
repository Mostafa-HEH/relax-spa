import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      fontSize: "1rem",
      fontWeight: "600",
      border: `1px solid ${theme.palette.secondary.main}`,
      padding: "4px 12px",
      borderRadius: "10px",
      opacity: ({ selected }) => (selected ? "1" : "0.5"),
      cursor: "pointer",
      backgroundColor: ({ selected }) =>
        selected ? theme.palette.secondary.main : theme.palette.common.white,
      color: theme.palette.common.black,
    },
  },
}));
