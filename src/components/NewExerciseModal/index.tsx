import { FormEvent, useState } from "react";
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

  if (!isOpen) {
    return null;
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
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
        />

        <Button
          role="callToAction"
          text="Add"
          type="submit"
          isLoading={false}
        />
      </Form>
    </Modal>
  );
};

export default NewExerciseModal;
