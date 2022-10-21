import Button from "@/components/Button";
import Input from "@/components/Input";
import { TIME_FRAME_ENUM, updateName } from "@/schemas/exerciseSchema";
import { useRouter } from "next/router";
import useSelectedTimeFrame from "src/store/useSelectedTimeFrame";
import { InferProcedures, trpc } from "src/utils/trpc";
import * as Styles from "./ExerciseGraph.styled";
import LineGraph from "./LineGraph";
import useGetSelectedExercise from "./useGetSelectedExercise";

const ExerciseGraph = () => {
  const { setTimeFrame, timeFrame } = useSelectedTimeFrame();
  const selectedExercise = useGetSelectedExercise();
  const utils = trpc.useContext();
  const router = useRouter();

  const deleteMutation = trpc.exercise.delete.useMutation({
    onSettled: () => {
      utils.exercise.all.invalidate();
      router.push("/");
    },

    onMutate: async () => {
      await utils.exercise.all.cancel();

      utils.exercise.all.setData((prev) => {
        return [
          ...(prev ?? []).filter(
            (e) => e.id !== (router.query.exerciseId as string)
          ),
        ];
      });
    },
  });

  const updateMutation = trpc.exercise.updateName.useMutation({
    onSettled: () => {
      utils.exercise.get.invalidate();
    },

    onMutate: async ({ exerciseId, exerciseName }) => {
      await utils.exercise.get.cancel();

      const currentExercise = utils.exercise.get.getData({
        exerciseId,
        timeFrame,
      });

      if (!currentExercise) {
        return;
      }

      utils.exercise.get.setData(
        { ...currentExercise, name: exerciseName },
        { exerciseId, timeFrame }
      );
    },
  });

  const updateHandler = (
    updatedData: InferProcedures["exercise"]["updateName"]["input"]
  ) => {
    const { success } = updateName.safeParse(updatedData);

    if (!success) {
      throw new Error("invalid data");
    }

    updateMutation.mutate(updatedData);
  };

  if (!selectedExercise) {
    return (
      <Styles.ContainerSkeleton>
        <Styles.HeaderSkeleton />
        <Styles.FooterSkeleton />
      </Styles.ContainerSkeleton>
    );
  }

  return (
    <Styles.Container>
      <Styles.Header>
        <Input
          role="editable"
          value={selectedExercise.name}
          onBlurEvent={(exerciseName) =>
            updateHandler({
              exerciseId: router.query.exerciseId as string,
              exerciseName,
            })
          }
        />
        <Button
          role="svg"
          svgName="close"
          aria-label={`delete${selectedExercise.name}`}
          onClick={() => deleteMutation.mutate(selectedExercise.id)}
        />
      </Styles.Header>

      <Styles.GraphSection>
        <LineGraph data={selectedExercise.data} />
      </Styles.GraphSection>

      <Styles.Footer>
        {TIME_FRAME_ENUM.map((text) => (
          <Button
            key={text}
            role="default"
            text={text}
            onClick={() => setTimeFrame(text)}
            style={
              timeFrame === text
                ? {
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }
                : {}
            }
          />
        ))}
      </Styles.Footer>
    </Styles.Container>
  );
};

export default ExerciseGraph;
