import Head from "next/head";
import HomePage from "src/features/HomePage";
import UnauthorizedOnlyRoute from "src/layouts/UnauthorizedOnlyRoute";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
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

      <HomePage />
    </>
  );
};

Home.getLayout = (page) => {
  return <UnauthorizedOnlyRoute>{page}</UnauthorizedOnlyRoute>;
};

export default Home;
