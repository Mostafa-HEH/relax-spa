import { createTheme, experimental_sx as sx } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    common: {
      green: "#28b761",
    },
  },

  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: sx({
          // backgroundColor: "#28b761",
          textTransform: "capitalize",
          // borderRadius: "unset",
          // "&:hover": {
          //   backgroundColor: "#28b761",
          // },
        }),
      },
    },
  },

  shape: {
    borderRadius: 0,
  },
});
