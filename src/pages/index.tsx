import Button from "@/components/Button";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import { refreshAuthTokens } from "src/utils/auth";
import * as cookie from "src/utils/cookie";
import trpc from "src/utils/trpc";

// TODO: Add access token to zustand
// TODO: remove export default
const Home: NextPage = () => {
  // const query = trpc.user.me.useQuery();

  const logout = trpc.user.logout.useMutation();

  const invalidateToken = trpc.user.revokeRefreshToken.useMutation();

  // if (query.isError) {
  //   return <p>{JSON.stringify(query.error, null, 2)}</p>;
  // }

  // if (query.isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <Head>
        <title>Gym Tracker Home</title>
        <meta
          name="description"
          content="View your gym progress with the gym tracker app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {JSON.stringify(query.data, null, 2)} */}

      <Button
        role="callToAction"
        onClick={() => logout.mutate()}
        text="logout"
        isLoading={logout.isLoading}
      />

      <Button
        role="callToAction"
        onClick={() => invalidateToken.mutate()}
        text="invalidate token"
        isLoading={invalidateToken.isLoading}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const authTokens = await refreshAuthTokens(ctx.req.cookies);

  if (!authTokens) {
    cookie.deleteAuthCookies(ctx.res);

    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  cookie.setAuthCookies(ctx.res, authTokens);

  return {
    props: {},
  };
};

export default Home;
