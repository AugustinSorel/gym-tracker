import Button from "@/components/Button";
import { ReactNode } from "react";
import { RouterInput, trpc } from "src/utils/trpc";
import * as Styles from "./GridItem.styled";

type Props = {
  children: ReactNode;
  title: string;
  delay: number;
  togglePinInput?: RouterInput["exercise"]["togglePin"];
};

const GridItem = (props: Props) => {
  const { title, children, delay, togglePinInput } = props;
  const utils = trpc.useContext();

  const togglePinMutation = trpc.exercise.togglePin.useMutation({
    onSettled: () => {
      utils.exercise.all.invalidate();
    },

    onMutate: async ({ exerciseId, isPinned }) => {
      await utils.exercise.all.cancel();

      const allExercises = utils.exercise.all.getData();

      if (!allExercises) {
        return;
      }

      utils.exercise.all.setData(
        undefined,
        allExercises.map((exercise) =>
          exercise.id === exerciseId ? { ...exercise, isPinned } : exercise
        )
      );
    },
  });

  return (
    <Styles.Container delay={delay} tabIndex={0}>
      <Styles.Header isTaskPinned={togglePinInput?.isPinned}>
        <Styles.ExerciseName>{title}</Styles.ExerciseName>
        {togglePinInput && (
          <Button
            role="svg"
            svgName={togglePinInput.isPinned ? "pinFilled" : "pin"}
            onClick={(e) => {
              e.preventDefault();
              togglePinMutation.mutate({
                exerciseId: togglePinInput.exerciseId,
                isPinned: !togglePinInput.isPinned,
              });
            }}
          />
        )}
      </Styles.Header>

      {children}
    </Styles.Container>
  );
};

export default GridItem;
