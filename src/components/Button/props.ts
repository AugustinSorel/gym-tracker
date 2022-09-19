import { HTMLAttributes } from "react";

export type CallToAction = {
  role: "callToAction";
  text: string;
  isLoading: boolean;
};

export type Default = {
  role: "default";
  text: string;
};

export type GoogleAuth = {
  role: "googleAuth";
};

type DefaultProps = {
  type?: "button" | "submit" | "reset";
};

export type Button = HTMLAttributes<HTMLButtonElement> &
  DefaultProps &
  (CallToAction | Default | GoogleAuth);
