import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import trpc from "src/utils/trpc";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle.styled";
import theme from "../styles/theme";

// TODO: create a styled component layout
const MyApp = ({ Component, pageProps }: AppProps<{ session: Session }>) => {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
