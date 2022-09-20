import Button from "@/components/Button";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import trpc from "src/utils/trpc";

// TODO: remove unused files
// TODO: remove unused packages
// TODO make this private
const Home: NextPage = () => {
  const router = useRouter();

  const query = trpc.user.me.useQuery();

  const logout = trpc.user.logout.useMutation({
    onMutate: () => {
      router.push("/login");
    },
  });

  const invalidateToken = trpc.user.revokeRefreshToken.useMutation({
    onMutate: () => {
      router.push("/login");
    },
  });

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

      <Button
        role="callToAction"
        onClick={() => invalidateToken.mutate()}
        text="invalidate token"
        isLoading={invalidateToken.isLoading}
      />
    </>
  );
};

export default Home;
