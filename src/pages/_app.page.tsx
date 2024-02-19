import React from "react";
import type { AppProps } from "next/app";
import { Container } from "@mui/material";
import { Provider as ReduxProvider } from "react-redux";
import { reduxStore } from "@/redux/reduxStore";
import NavBar from "../components/NavBar";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={reduxStore}>
      <NavBar />
      <Container sx={{ pt: 3 }}>
        <Component {...pageProps} />
      </Container>
    </ReduxProvider>
  );
}
