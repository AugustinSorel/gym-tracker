import type { NextPage } from "next";
import Head from "next/head";
import trpc from "src/utils/trpc";

const Home: NextPage = () => {
  const query = trpc.useQuery(["user.all"], {
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

      <h1>Hello world</h1>
      {JSON.stringify(query.data, null, 2)}
    </div>
  );
};

export default Home;
