import Button from "@/components/Button";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import HeaderLayout from "src/layouts/HeaderLayout";
import MaxWidthLayout from "src/layouts/MaxWidthLayout";
import PriveRouteLayout from "src/layouts/PrivateRouteLayout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const { data: session } = useSession();

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

      {JSON.stringify(session?.user, null, 2)}

      <Button
        role="callToAction"
        onClick={() => signOut({ redirect: true, callbackUrl: "/sign-in" })}
        isLoading={false}
        text="sign out"
      />
    </>
  );
};

Home.getLayout = (page) => {
  return (
    <PriveRouteLayout>
      <MaxWidthLayout>
        <HeaderLayout />
        {page}
      </MaxWidthLayout>
    </PriveRouteLayout>
  );
};

export default Home;
