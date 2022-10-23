import Button from "@/components/Button";
import DeleteExerciseModal from "@/components/DeleteExerciseModal";
import Input from "@/components/Input";
import useModal from "@/components/Modal/useModal";
import { TIME_FRAME_ENUM, updateName } from "@/schemas/exerciseSchema";
import { useRouter } from "next/router";
import useSelectedTimeFrame from "src/store/useSelectedTimeFrame";
import { InferProcedures, trpc } from "src/utils/trpc";
import * as Styles from "./ExerciseGraph.styled";
import LineGraph from "./LineGraph";
import useGetSelectedExercise from "./useGetSelectedExercise";

const ExerciseGraph = () => {
  const { setTimeFrame, timeFrame } = useSelectedTimeFrame();
  const deleteModal = useModal();
  const selectedExercise = useGetSelectedExercise();
  const utils = trpc.useContext();
  const router = useRouter();

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
    <>
      {deleteModal.isOpen && (
        <DeleteExerciseModal
          closeHandler={deleteModal.close}
          startExitAnimation={deleteModal.startExitAnimation}
        />
      )}
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
            onClick={deleteModal.open}
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
    </>
  );
};

export default ExerciseGraph;
