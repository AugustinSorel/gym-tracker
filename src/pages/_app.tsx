import { withTRPC } from "@trpc/next";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import type { AppRouter } from "src/server/routers/appRouter";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle.styled";
import theme from "../styles/theme";

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
    </ThemeProvider>
  );
};

const MyAppWithTrpc = withTRPC<AppRouter>({
  config: () => ({ url: "/api/trpc" }),
})(MyApp);

export default MyAppWithTrpc;
