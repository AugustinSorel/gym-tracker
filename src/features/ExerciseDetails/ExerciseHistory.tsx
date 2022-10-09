import Input from "@/components/Input";
import { updateData as updateDataSchema } from "@/schemas/dataSchema";
import useSelectedTimeFrame from "src/store/useSelectedTimeFrame";
import { getDateInFrenchFormat, sortByDateAsc } from "src/utils/date";
import { TwoDigitsNumber } from "src/utils/math";
import { InferProcedures, trpc } from "src/utils/trpc";
import * as Styles from "./ExerciseHistory.styled";
import useGetSelectedExercise from "./useGetSelectedExercise";

const ExerciseHistory = () => {
  const { timeFrame } = useSelectedTimeFrame();
  const selectedExercise = useGetSelectedExercise();
  const utils = trpc.useContext();

  const updateDataMutation = trpc.data.update.useMutation({
    onSettled: () => {
      utils.exercise.get.invalidate();
    },
  });

  const updateHandler = (
    updatedData: InferProcedures["data"]["update"]["input"]
  ) => {
    const { success } = updateDataSchema.safeParse(updatedData);

    if (!success) {
      throw new Error("invalid data");
    }

    updateDataMutation.mutate(updatedData);
  };

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
        <Styles.Text title="unique date as dd/mm/yy">date</Styles.Text>
      </Styles.ListItem>

      {selectedExercise.data.sort(sortByDateAsc).map((data, i) => (
        <Styles.ListItem key={timeFrame + data.id} delay={(i + 1) * 50}>
          <Styles.Text>{TwoDigitsNumber(data.oneRepMax)}</Styles.Text>
          <Styles.Text>{TwoDigitsNumber(0)}</Styles.Text>
          <Input
            role="editable"
            type="number"
            value={TwoDigitsNumber(data.numberOfReps).toString()}
            onBlurEvent={(newRep) =>
              updateHandler({
                id: data.id,
                numberOfReps: parseInt(newRep),
                weight: data.weight,
              })
            }
          />
          <Input
            role="editable"
            type="number"
            value={TwoDigitsNumber(data.weight).toString()}
            onBlurEvent={(newWeight) => {
              updateHandler({
                id: data.id,
                numberOfReps: data.numberOfReps,
                weight: parseInt(newWeight),
              });
            }}
          />
          <Styles.Text>
            {getDateInFrenchFormat(data.createdAt.toLocaleDateString())}
          </Styles.Text>
        </Styles.ListItem>
      ))}
    </Styles.List>
  );
};

export default ExerciseHistory;
