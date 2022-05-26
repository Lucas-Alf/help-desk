import React from "react";
import { useRoutes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import routes from "./routes";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "./components/AppBar";
import { SnackbarProvider } from "notistack";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import { Close as CloseIcon } from "@mui/icons-material";

export default function App() {
  const [mode, setMode] = React.useState(localStorage.getItem('theme') || 'light')

  const toggleColorMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode);
    localStorage.setItem('theme', newMode)
  };

  const theme = createTheme(mode === 'light' ? lightTheme : darkTheme)

  const notistackRef = React.createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        ref={notistackRef}
        TransitionComponent={Slide}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        action={(key) => (
          <IconButton onClick={onClickDismiss(key)}>
            <CloseIcon htmlColor="white" />
          </IconButton>
        )}
      >
        <CssBaseline />
        <AppBar
          mode={mode}
          toggleColorMode={toggleColorMode}
        />
        <div>{useRoutes(routes)}</div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
