import useSelectedTimeFrame from "src/store/useSelectedTimeFrame";
import { getDateInFrenchFormat, sortByDateAsc } from "src/utils/date";
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
      <Styles.ListItem>
        <Styles.Text>PR</Styles.Text>
        <Styles.Text>Pre</Styles.Text>
        <Styles.Text>Rep</Styles.Text>
        <Styles.Text>Kg</Styles.Text>
        <Styles.Text>Date</Styles.Text>
      </Styles.ListItem>

      {selectedExercise.data.sort(sortByDateAsc).map((data, i) => (
        <Styles.ListItem key={timeFrame + data.id} delay={(i + 1) * 50}>
          <Styles.Text>{TwoDigitsNumber(data.oneRepMax)}</Styles.Text>
          <Styles.Text>{TwoDigitsNumber(0)}</Styles.Text>
          <Styles.Text>{TwoDigitsNumber(data.numberOfReps)}</Styles.Text>
          <Styles.Text>{TwoDigitsNumber(data.weight)}</Styles.Text>
          <Styles.Text>
            {getDateInFrenchFormat(data.createdAt.toLocaleDateString())}
          </Styles.Text>
        </Styles.ListItem>
      ))}
    </Styles.List>
  );
};

export default ExerciseHistory;
