import { TimeFrame } from "@/schemas/exerciseSchema";
import { useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "src/utils/trpc";
import ExerciseGraph from "./ExerciseGraph";
import ExerciseHistory from "./ExerciseHistory";
import * as Styles from "./index.styled";

const ExerciseDetails = () => {
  const utils = trpc.useContext();
  const router = useRouter();
  const exerciseName = router.query.exerciseName as string;
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<TimeFrame>("1M");

  const dataQuery = trpc.exercise.get.useQuery(
    {
      exerciseName,
      timeFrame: selectedTimeFrame,
    },
    {
      placeholderData: () => {
        if (selectedTimeFrame === "1M") {
          return utils.exercise.all
            .getData()
            ?.find((d) => d.name === exerciseName);
        }

        return undefined;
      },
    }
  );

  return (
    <Styles.Main>
      <ExerciseHistory
        exercise={dataQuery.data}
        isLoading={dataQuery.isLoading}
        timeFrame={selectedTimeFrame}
      />
      <ExerciseGraph
        exercise={dataQuery.data}
        isLoading={dataQuery.isLoading}
        selectedTimeFrame={selectedTimeFrame}
        setSelectedTimeFrame={setSelectedTimeFrame}
      />
    </Styles.Main>
  );
};

export default ExerciseDetails;
