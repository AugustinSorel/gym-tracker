import useSelectedTimeFrame from "src/store/useSelectedTimeFrame";
import { getDateInFrenchFormat } from "src/utils/date";
import { TwoDigitsNumber } from "src/utils/math";
import * as Styles from "./ExerciseHistory.styled";
import useGetSelectedExercise from "./useGetSelectedExercise";

const ExerciseHistory = () => {
  const { timeFrame } = useSelectedTimeFrame();
  const selectedExercise = useGetSelectedExercise();

  if (!selectedExercise) {
    return (
      <Styles.ListSkeleton>
        {[...Array(20)].map((_, i) => (
          <Styles.ListItemSkeleton key={i} />
        ))}
      </Styles.ListSkeleton>
    );
  }

  return (
    <Styles.List>
      <Styles.ListItem delay={0}>
        <Styles.OneRepMax>PR</Styles.OneRepMax>
        <Styles.OneRepMax>Nº</Styles.OneRepMax>
        <Styles.OneRepMax>Kg</Styles.OneRepMax>
        <Styles.Date>Date</Styles.Date>
      </Styles.ListItem>

      {selectedExercise.data.reverse().map((data, i) => (
        <Styles.ListItem key={timeFrame + data.id} delay={i * 50}>
          <Styles.OneRepMax>{TwoDigitsNumber(data.oneRepMax)}</Styles.OneRepMax>
          <Styles.NumberOfReps>
            {TwoDigitsNumber(data.numberOfReps)}
          </Styles.NumberOfReps>
          <Styles.Weight>{TwoDigitsNumber(data.weight)}</Styles.Weight>
          <Styles.Date>
            {getDateInFrenchFormat(data.createdAt.toLocaleDateString())}
          </Styles.Date>
        </Styles.ListItem>
      ))}
    </Styles.List>
  );
};

export default ExerciseHistory;
