import AddExerciseDataModal from "@/components/AddExerciseDataModal";
import Button from "@/components/Button";
import useModal from "@/components/Modal/useModal";
import Head from "next/head";
import { useRouter } from "next/router";
import ExerciseDetails from "src/features/ExerciseDetails";
import HeaderLayout from "src/layouts/HeaderLayout";
import MaxWidthLayout from "src/layouts/MaxWidthLayout";
import PriveRouteLayout from "src/layouts/PrivateRouteLayout";
import { NextPageWithLayout } from "../_app";

const ExercisePage: NextPageWithLayout = () => {
  const router = useRouter();
  const modal = useModal();

  return (
    <>
      <Head>
        <title>Exercise {router.query.id}</title>
        <meta
          name="description"
          content="View your gym progress with the gym tracker app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ExerciseDetails />

      <Button role="newExercise" onClick={modal.open} />

      {modal.isOpen && (
        <AddExerciseDataModal
          closeHandler={modal.close}
          startExitAnimation={modal.startExitAnimation}
        />
      )}
    </>
  );
};

ExercisePage.getLayout = (page) => {
  return (
    <PriveRouteLayout>
      <MaxWidthLayout>
        <HeaderLayout />
        {page}
      </MaxWidthLayout>
    </PriveRouteLayout>
  );
};

export default ExercisePage;
