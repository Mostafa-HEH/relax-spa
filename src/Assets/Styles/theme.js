import { createTheme, experimental_sx as sx } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    common: {
      lightGreen: "#00C897",
      lightYellow: "#FDFFA9",
    },

    primary: {
      main: "#019267",
      light: "#3CAA89",
      dark: "#006144",
      contrastText: "#fff",
    },

    secondary: {
      main: "#FFD365",
      light: "#FFEBBA",
      dark: "#CD9816",
      contrastText: "#000",
    },

    background: {
      default: "#ffd3650d",
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

    MuiFilledInput: {
      styleOverrides: {
        root: sx({
          backgroundColor: "#0192670d",
          "&:hover": {
            backgroundColor: "#0192670d",
          },
        }),
        focused: sx({
          backgroundColor: "#0192670d",
        }),
      },
    },
  },

  shape: {
    borderRadius: 0,
  },
});
