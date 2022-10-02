import Button from "@/components/Button";
import useModal from "@/components/Modal/useModal";
import NewExerciseModal from "@/components/NewExerciseModal";
import Head from "next/head";
import GridOfExercises from "src/features/GridOfExercies";
import HeaderLayout from "src/layouts/HeaderLayout";
import MaxWidthLayout from "src/layouts/MaxWidthLayout";
import PriveRouteLayout from "src/layouts/PrivateRouteLayout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const modal = useModal();

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

      <GridOfExercises />

      <Button role="newExercise" onClick={modal.open} />

      {modal.isOpen && (
        <NewExerciseModal
          closeHandler={modal.close}
          startExitAnimation={modal.startExitAnimation}
        />
      )}
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
