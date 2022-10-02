import { TimeFrame } from "@/schemas/exerciseSchema";
import { getDateInFrenchFormat } from "src/utils/date";
import { TwoDigitsNumber } from "src/utils/math";
import { InferProcedures } from "src/utils/trpc";
import * as Styles from "./ExerciseHistory.styled";

type Props = {
  isLoading: boolean;
  timeFrame: TimeFrame;
  exercise?: InferProcedures["exercise"]["get"]["output"];
};

const ExerciseHistory = ({ exercise, isLoading, timeFrame }: Props) => {
  if (isLoading || !exercise) {
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

      {exercise.Data.reverse().map((data, i) => (
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
