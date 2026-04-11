import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f172a",
    },
    secondary: {
      main: "#2563eb",
    },
    background: {
      default: "#f8fafc",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;