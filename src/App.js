import { useRoutes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import routes from "./routes";
import darkTheme from "./themes/dark";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "./components/AppBar";
export default function App() {
  const theme = createTheme(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <div>{useRoutes(routes)}</div>
    </ThemeProvider>
  );
}
