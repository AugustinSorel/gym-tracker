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
        <Styles.Text title="your one rep max calculated">pr</Styles.Text>
        <Styles.Text title="your predicted one rep max calculated">
          pre
        </Styles.Text>
        <Styles.Text title="number of repetition">rep</Styles.Text>
        <Styles.Text title="weight lifted">kg</Styles.Text>
        <Styles.Text>date</Styles.Text>
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
