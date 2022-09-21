import Button from "@/components/Button";
import { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Head from "next/head";
import AuthenticationPage from "./authentication";

// TODO: remove unused files
// TODO: remove unused packages
// TODO make this private
const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  if (status === "unauthenticated" || !session) {
    return <AuthenticationPage />;
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

      {JSON.stringify(session.user, null, 2)}

      <Button
        role="callToAction"
        onClick={() =>
          signOut({ redirect: true, callbackUrl: "/authentication" })
        }
        isLoading={false}
        text="sign out"
      />
    </>
  );
};

export default Home;
