import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "76px",
      fontWeight: "900",
      fontFamily: "Red Hat Display",
    },
    h2: {
      fontSize: "20px",
      lineHeight: "30px",
      fontWeight: "500",
      marginBottom: "20px",
      marginTop: "30px",
      fontFamily: "Inter",
    },
    h3: {
      fontSize: "56px",
      fontWeight: "900",
    },
    h4: {
      fontSize: "42px",
      fontWeight: "900",
      fontFamily: "Red Hat Display",
    },
    body1: {
      fontSize: "14px", // add this line to change font size of non-heading text
      fontFamily: "Inter",
    },
  },
  palette: {
    primary: {
      main: "#3ABAB4",
      light: "#fff",
    },
    secondary: {
      dark: "#eee",
      main: "#fefefe",
      light: "#FBFBFB",
    },
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          fontSize: "1.05rem",
          fontWeight: "400",
          color: "#52525A",
        }),
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: "1px solid " + theme.palette.secondary.dark,
        }),
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          minWidth: "48px",
        }),
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingTop: "0px",
          paddingBottom: "0px",
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFF",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          backgroundColor: "#D1695D",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.light,
          color: "#111",
          height: "80px",
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid #CCC",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "capitalize",
          fontWeight: "500",
          fontFamily: "Inter",
          color: "#FFF",
          fontSize: "16px",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "inherit",
          cursor: "pointer",
        },
      },
    },
  },
});
