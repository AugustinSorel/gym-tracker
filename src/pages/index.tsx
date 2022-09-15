import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import deserializeUser from "src/server/middlewares/deserializeUser";
import trpc from "src/utils/trpc";

const Home: NextPage = () => {
  const query = trpc.useQuery(["user.me"], {
    onSuccess: (data) => {
      console.log(data);
    },

    onError: (error) => {
      console.log(error);
    },
  });

  if (query.isError) {
    return <p>{JSON.stringify(query.error, null, 2)}</p>;
  }

  if (query.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Head>
        <title>Gym Tracker Home</title>
        <meta
          name="description"
          content="View your gym progress with the gym tracker app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {JSON.stringify(query.data, null, 2)}
    </div>
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
