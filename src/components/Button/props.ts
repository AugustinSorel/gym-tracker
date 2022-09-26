import { HTMLAttributes } from "react";

export type CallToAction = {
  role: "callToAction";
  text: string;
  isLoading?: boolean;
};

export type DefaultButton = {
  role: "default";
  text: string;
};

export type NewExerciseButton = {
  role: "newExercise";
};

type DefaultProps = {
  type?: "button" | "submit" | "reset";
};

export type Button = HTMLAttributes<HTMLButtonElement> &
  DefaultProps &
  (CallToAction | DefaultButton | NewExerciseButton);
