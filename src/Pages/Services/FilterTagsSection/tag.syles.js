import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiGrid-root": {
      fontSize: "1rem",
      fontWeight: "800",
      border: "2px solid #000",
      padding: "4px 12px",
      borderRadius: "10px",
      opacity: ({ selected }) => (selected ? "1" : "0.3"),
      cursor: "pointer",
      backgroundColor: ({ selected }) =>
        selected ? theme.palette.common.black : theme.palette.common.white,
      color: ({ selected }) =>
        selected ? theme.palette.common.white : theme.palette.common.black,
    },
  },
}));
