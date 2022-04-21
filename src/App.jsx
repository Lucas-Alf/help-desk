import React from "react";
import { useRoutes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import routes from "./routes";
import darkTheme from "./themes/dark";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "./components/AppBar";
import { SnackbarProvider } from "notistack";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import { Close as CloseIcon } from "@mui/icons-material";

export default function App() {
  const theme = createTheme(darkTheme);

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
        <AppBar />
        <div>{useRoutes(routes)}</div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
