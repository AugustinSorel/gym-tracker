import ExerciseGraph from "./ExerciseGraph";
import ExerciseHistory from "./ExerciseHistory";
import * as Styles from "./index.styled";

const ExerciseDetails = () => {
  return (
    <Styles.Main>
      <ExerciseHistory />
      <ExerciseGraph />
    </Styles.Main>
  );
};

export default ExerciseDetails;
