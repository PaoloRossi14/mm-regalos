import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function GlobalTheme({ children }) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#675162",
        main: "#41263b",
        dark: "#2d1a29",
        contrastText: "#fff",
      },
      secondary: {
        light: "#dec3d0",
        main: "#d6b5c5",
        dark: "#957e89",
        contrastText: "#000",
      },
    },
    typography: {
      fontFamily: ['"Poppins"', "sans-serif"].join(","),
    },
    overrides: {
      MuiButton: {
        root: {
          fontSize: "1rem",
          lineHeight: "1.2",
          borderRadius: "5px",
          padding: "1rem 4rem !important",
          textTransform: "none",
        },
        containedSizeLarge: {
          fontSize: "1.3rem",
          lineHeight: "1.4",
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default GlobalTheme;
