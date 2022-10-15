import AddExerciseDataModal from "@/components/AddExerciseDataModal";
import Button from "@/components/Button";
import useModal from "@/components/Modal/useModal";
import Head from "next/head";
import { useRouter } from "next/router";
import ExerciseDetails from "src/features/ExerciseDetails";
import HeaderLayout from "src/layouts/HeaderLayout";
import MaxWidthLayout from "src/layouts/MaxWidthLayout";
import AuthorizedOnlyRoute from "src/layouts/AuthorizedOnlyRoute";
import useSelectedTimeFrame from "src/store/useSelectedTimeFrame";
import { trpc } from "src/utils/trpc";
import { NextPageWithLayout } from "../_app";

const ExercisePage: NextPageWithLayout = () => {
  const router = useRouter();
  const modal = useModal();
  const utils = trpc.useContext();
  const exerciseId = router.query.exerciseId as string;
  const { timeFrame } = useSelectedTimeFrame();

  trpc.exercise.get.useQuery(
    { exerciseId, timeFrame },
    {
      initialData: () => {
        if (timeFrame === "1M") {
          return utils.exercise.all.getData()?.find((d) => d.id === exerciseId);
        }

        return undefined;
      },
    }
  );

  return (
    <>
      <Head>
        <title>Exercise</title>
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
    <AuthorizedOnlyRoute>
      <MaxWidthLayout>
        <HeaderLayout />
        {page}
      </MaxWidthLayout>
    </AuthorizedOnlyRoute>
  );
};

export default ExercisePage;
