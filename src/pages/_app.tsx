import "@/styles/globals.css";
import type { AppProps } from "next/app";
import theme from "@/theme";
import { Box, Spinner, ThemeUIProvider } from "theme-ui";
import Button from "@/components/Button";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeUIProvider theme={theme}>
      {/* <Box bg={"red"}>Testa</Box> */}
      {/* <Spinner /> */}

      <Component {...pageProps} />
    </ThemeUIProvider>
  );
}
