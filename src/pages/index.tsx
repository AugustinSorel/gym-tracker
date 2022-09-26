import Button from "@/components/Button";
import GridOfExercises from "@/components/GridOfExercies";
import NewExerciseModal from "@/components/NewExerciseModal";
import Head from "next/head";
import { useState } from "react";
import HeaderLayout from "src/layouts/HeaderLayout";
import MaxWidthLayout from "src/layouts/MaxWidthLayout";
import PriveRouteLayout from "src/layouts/PrivateRouteLayout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

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

      <NewExerciseModal isOpen={showModal} closeHandler={closeModal} />
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
