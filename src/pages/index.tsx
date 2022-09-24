import Button from "@/components/Button";
import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => router.push("/sign-in"),
  });

  if (status === "loading") {
    return null;
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
        onClick={() => signOut({ redirect: true, callbackUrl: "/sign-in" })}
        isLoading={false}
        text="sign out"
      />
    </>
  );
};

export default Home;
