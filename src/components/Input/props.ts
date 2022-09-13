import { InputHTMLAttributes } from "react";

export type FormInput = {
  role: "form";
  labelText: string;
  htmlFor: string;
  errorText?: string;
};

export type DefaultInput = {
  role: "default";
};

export type Input = InputHTMLAttributes<HTMLInputElement> &
  (FormInput | DefaultInput);
