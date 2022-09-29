import {
  ChangeEvent,
  ComponentProps,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Modal from "../Modal";

type Props = Omit<ComponentProps<typeof Modal>, "children">;

const defaultFormValues = { numberOfReps: "", weight: "" };

const AddNewExerciseDataModal = (props: Props) => {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState(defaultFormValues);
  const [formError, setFormError] = useState(defaultFormValues);

  const submitHandler = () => {
    console.log(formData);
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  return (
    <Modal {...props}>
      <Form
        title="Add new data"
        subTitle="Add new data for bench press"
        submitHandler={submitHandler}
      >
        <Input
          ref={firstInputRef}
          role="form"
          labelText="Number of reps"
          htmlFor="numberOfRepsInput"
          placeholder="Enter your number of reps"
          autoCapitalize="none"
          errorText={formError.numberOfReps}
          value={formData.numberOfReps}
          name={Object.keys(defaultFormValues)[0]}
          onChange={changeHandler}
        />

        <Input
          role="form"
          labelText="weight lifted"
          htmlFor="weightLiftedInput"
          placeholder="Enter your weight lifted"
          autoCapitalize="none"
          errorText={formError.weight}
          value={formData.weight}
          name={Object.keys(defaultFormValues)[1]}
          onChange={changeHandler}
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

export default AddNewExerciseDataModal;
