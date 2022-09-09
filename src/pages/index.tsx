import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

const Home: NextPage = () => {
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

      <Title>Hello world</Title>
    </div>
  );
};

export default Home;
