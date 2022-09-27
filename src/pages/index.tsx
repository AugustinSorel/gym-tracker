import Button from "@/components/Button";
import GridOfExercises from "@/components/GridOfExercies";
import useModal from "@/components/Modal/useModal";
import NewExerciseModal from "@/components/NewExerciseModal";
import Head from "next/head";
import HeaderLayout from "src/layouts/HeaderLayout";
import MaxWidthLayout from "src/layouts/MaxWidthLayout";
import PriveRouteLayout from "src/layouts/PrivateRouteLayout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const { closeModal, openModal, showModal, startExitAnimation } = useModal();

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

      <Button role="newExercise" onClick={openModal} />

      {showModal && (
        <NewExerciseModal
          closeHandler={closeModal}
          startExitAnimation={startExitAnimation}
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
