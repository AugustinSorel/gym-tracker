import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import trpc from "src/utils/trpc";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle.styled";
import theme from "../styles/theme";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
      <ReactQueryDevtools />
    </ThemeProvider>
  );
};

const MyAppWithTrpc = trpc.withTRPC(MyApp);

export default MyAppWithTrpc;
