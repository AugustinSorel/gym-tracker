import { FormEvent, useState } from "react";
import trpc from "src/utils/trpc";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Modal from "../Modal";

type Props = {
  isOpen: boolean;
  closeHandler: () => void;
};

const NewExerciseModal = ({ isOpen, closeHandler }: Props) => {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseNameError, setExerciseNameError] = useState("");
  const utils = trpc.useContext();

  const newExerciseMutation = trpc.exercise.new.useMutation({
    onSuccess: () => {
      closeHandler();
    },

    onError: (error) => {
      if (error.data?.zodError) {
        setExerciseNameError(error.data.zodError.formErrors[0]);
      }

      if (error.data?.code === "CONFLICT") {
        setExerciseNameError(error.message);
      }
    },

    onSettled: () => {
      utils.exercise.all.invalidate();
    },

    onMutate: () => {
      setExerciseNameError("");
    },
  });

  if (!isOpen) {
    return null;
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    newExerciseMutation.mutate(exerciseName);
  };

  return (
    <Modal closeHandler={closeHandler}>
      <Form
        title="New Exercise"
        subTitle="Enter your new exercise name"
        submitHandler={submitHandler}
      >
        <Input
          role="form"
          labelText="exercise name"
          htmlFor="nameInput"
          placeholder="Enter exercise name"
          autoCapitalize="none"
          errorText={exerciseNameError}
          value={exerciseName}
          name="email"
          onChange={(e) => setExerciseName(e.target.value)}
          ref={(e) => e?.focus()}
        />

        <Button
          role="callToAction"
          text="Add"
          type="submit"
          isLoading={newExerciseMutation.isLoading}
        />
      </Form>
    </Modal>
  );
};

export default NewExerciseModal;
