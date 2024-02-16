import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import { ThemeProvider, createTheme, Container } from "@mui/material";

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
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container sx={{pt: 3}}>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
