import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme, Container } from "@mui/material";
import { Provider as ReduxProvider } from "react-redux";
import { reduxStore } from "@/redux/reduxStore";
import NavBar from "../components/NavBar";

import "@/styles/globals.css";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1c5531",
    },
    secondary: {
      main: "#231f2c",
    },
    common: {
      white: "#fff",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={reduxStore}>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Container sx={{ pt: 3 }}>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </ReduxProvider>
  );
}
