import { useRouter } from "next/router";
import useSelectedTimeFrame from "src/store/useSelectedTimeFrame";
import { trpc } from "src/utils/trpc";

const useGetSelectedExercise = () => {
  const utils = trpc.useContext();
  const router = useRouter();

  const { timeFrame } = useSelectedTimeFrame();

  const exerciseId = router.query.exerciseId as string;
  const selectedExercise = utils.exercise.get.getData({
    timeFrame,
    exerciseId,
  });

  return selectedExercise;
};

export default useGetSelectedExercise;
