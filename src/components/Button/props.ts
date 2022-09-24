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

export type GoogleButton = {
  role: "google";
};

export type GitHubButton = {
  role: "gitHub";
};

type DefaultProps = {
  type?: "button" | "submit" | "reset";
};

export type Button = HTMLAttributes<HTMLButtonElement> &
  DefaultProps &
  (CallToAction | DefaultButton | GitHubButton | GoogleButton);
