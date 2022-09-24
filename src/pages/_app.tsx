import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextPage } from "next";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import StyledComponentsLayout from "src/layouts/StyledComponentsLayout";
import trpc from "src/utils/trpc";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps<{ session: Session | null }> & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <SessionProvider session={session}>
        <StyledComponentsLayout>
          {getLayout(<Component {...pageProps} />)}
        </StyledComponentsLayout>
      </SessionProvider>
      <ReactQueryDevtools />
    </>
  );
};

export default trpc.withTRPC(MyApp);
