import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle.styled";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

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

export default MyApp;
