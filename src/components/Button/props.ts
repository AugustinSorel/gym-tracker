import { HTMLAttributes } from "react";

export type CallToAction = {
  role: "callToAction";
  text: string;
  isLoading: boolean;
};

export type DefaultButton = {
  role: "default";
};

type DefaultProps = {
  type?: "button" | "submit" | "reset";
};

export type Button = HTMLAttributes<HTMLButtonElement> &
  DefaultProps &
  (CallToAction | DefaultButton);
