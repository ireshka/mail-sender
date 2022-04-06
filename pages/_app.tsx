import { CssBaseline, ThemeProvider } from "@mui/material";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from '../theme/defaultTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
