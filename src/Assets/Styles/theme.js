import { createTheme, experimental_sx as sx } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    common: {
      green: "#28b761",
    },

    primary: {
      main: "#28b761",
      light: "#74D69C",
      dark: "#003A17",
      contrastText: "#FDFDFD",
    },
  },

  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: sx({
          textTransform: "capitalize",
        }),
      },
    },
  },

  shape: {
    borderRadius: 0,
  },
});
