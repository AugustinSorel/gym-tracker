import { HTMLAttributes } from "react";

export type CallToAction = {
  shape: "callToAction";
  text: string;
};

export type DefaultButton = {
  shape: "default";
};

type DefaultProps = {
  type?: "button" | "submit" | "reset";
};

export type Button = HTMLAttributes<HTMLButtonElement> &
  DefaultProps &
  (CallToAction | DefaultButton);
