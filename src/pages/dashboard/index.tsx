import Button from "@/components/Button";
import useModal from "@/components/Modal/useModal";
import NewExerciseModal from "@/components/NewExerciseModal";
import Head from "next/head";
import GridOfExercises from "src/features/GridOfExercies";
import AuthorizedOnlyRoute from "src/layouts/AuthorizedOnlyRoute";
import HeaderLayout from "src/layouts/HeaderLayout";
import MaxWidthLayout from "src/layouts/MaxWidthLayout";
import { NextPageWithLayout } from "../_app";

const DashboardPage: NextPageWithLayout = () => {
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

DashboardPage.getLayout = (page) => {
  return (
    <AuthorizedOnlyRoute>
      <MaxWidthLayout>
        <HeaderLayout />
        {page}
      </MaxWidthLayout>
    </AuthorizedOnlyRoute>
  );
};

export default DashboardPage;
