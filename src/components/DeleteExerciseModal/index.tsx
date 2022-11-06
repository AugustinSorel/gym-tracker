import { useRouter } from "next/router";
import { ComponentProps } from "react";
import { trpc } from "src/utils/trpc";
import Button from "../Button";
import Form from "../Form";
import Modal from "../Modal";
import * as Styles from "./index.styled";

type Props = Omit<ComponentProps<typeof Modal>, "children">;

const DeleteExerciseModal = (props: Props) => {
  const utils = trpc.useContext();
  const router = useRouter();
  const exerciseId = router.query.exerciseId as string;

  const deleteMutation = trpc.exercise.delete.useMutation({
    onSuccess: () => {
      router.push("/");
    },

    onSettled: () => {
      utils.exercise.all.invalidate();
    },

    onMutate: async () => {
      await utils.exercise.all.cancel();

      utils.exercise.all.setData(undefined, (prev) => {
        return [...(prev ?? []).filter((e) => e.id !== exerciseId)];
      });
    },
  });

  const deleteHandler = () => {
    deleteMutation.mutate(exerciseId);
  };

  const cancelHandler = () => {
    props.closeHandler();
  };

  return (
    <Modal {...props}>
      <Form
        title="Delete this exercise ?"
        subTitle="All data will be lost"
        submitHandler={deleteHandler}
      >
        <Styles.ButtonsContainer>
          <Button role="callToAction" text="cancel" onClick={cancelHandler} />
          <Button
            role="callToAction"
            text="delete"
            onClick={deleteHandler}
            isLoading={deleteMutation.isLoading}
          />
        </Styles.ButtonsContainer>
      </Form>
    </Modal>
  );
};

export default DeleteExerciseModal;
