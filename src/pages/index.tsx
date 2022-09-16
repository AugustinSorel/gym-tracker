import Button from "@/components/Button";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { deserializeUser } from "src/utils/auth";
import trpc from "src/utils/trpc";

const Home: NextPage = () => {
  const query = trpc.user.me.useQuery();

  const logout = trpc.user.logout.useMutation();

  if (query.isError) {
    return <p>{JSON.stringify(query.error, null, 2)}</p>;
  }

  if (query.isLoading) {
    return <p>Loading...</p>;
  }

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

      {JSON.stringify(query.data, null, 2)}

      <Button
        role="callToAction"
        onClick={() => logout.mutate()}
        text="logout"
        isLoading={logout.isLoading}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const user = deserializeUser(req.cookies);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Home;
