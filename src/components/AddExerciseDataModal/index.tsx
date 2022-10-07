import { useRouter } from "next/router";
import { ChangeEvent, ComponentProps, useState } from "react";
import useSelectedTimeFrameStore from "src/store/useSelectedTimeFrame";
import { trpc } from "src/utils/trpc";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Modal from "../Modal";

type Props = Omit<ComponentProps<typeof Modal>, "children">;

const defaultFormData = { numberOfReps: 0, weight: 0 };
const defaultFormErrors = { numberOfReps: "", weight: "" };

const AddExerciseDataModal = (props: Props) => {
  const router = useRouter();
  const utils = trpc.useContext();
  const { timeFrame } = useSelectedTimeFrameStore();
  const [formData, setFormData] = useState(defaultFormData);
  const [formErrors, setFormErrors] = useState(defaultFormErrors);

  const addExerciseData = trpc.data.new.useMutation({
    onSuccess: () => {
      props.closeHandler();
    },

    onError: (error) => {
      if (error.data?.zodError) {
        const { numberOfReps, weight } = error.data.zodError.fieldErrors;
        setFormErrors((prev) => {
          return {
            numberOfReps: (numberOfReps ?? [])[0] ?? prev.numberOfReps,
            weight: (weight ?? [])[0] ?? prev.weight,
          };
        });
      }
    },

    onSettled: () => {
      utils.exercise.get.invalidate({
        exerciseId: router.query.exerciseId as string,
        timeFrame,
      });
    },

    onMutate: () => {
      setFormErrors(defaultFormErrors);
    },
  });

  const submitHandler = () => {
    addExerciseData.mutate({
      ...formData,
      exerciseId: router.query.exerciseId as string,
    });
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.valueAsNumber || "",
    }));
  };

  return (
    <Modal {...props}>
      <Form
        title="Add new data"
        subTitle="Add new data for bench press"
        submitHandler={submitHandler}
      >
        <Input
          type="number"
          autoFocus
          role="form"
          labelText="Number of reps"
          htmlFor="numberOfRepsInput"
          placeholder="Enter your number of reps"
          autoCapitalize="none"
          errorText={formErrors.numberOfReps}
          value={formData.numberOfReps}
          name={Object.keys(defaultFormData)[0]}
          onChange={changeHandler}
        />

        <Input
          type="number"
          role="form"
          labelText="weight lifted"
          htmlFor="weightLiftedInput"
          placeholder="Enter your weight lifted"
          autoCapitalize="none"
          errorText={formErrors.weight}
          value={formData.weight}
          name={Object.keys(defaultFormData)[1]}
          onChange={changeHandler}
        />

        <Button
          role="callToAction"
          text="Add"
          type="submit"
          isLoading={addExerciseData.isLoading}
        />
      </Form>
    </Modal>
  );
};

export default AddExerciseDataModal;
