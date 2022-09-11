import { InputHTMLAttributes } from "react";

export type FormInput = {
  shape: "form";
  labelText: string;
  htmlFor: string;
  errorText: string;
};

export type DefaultInput = {
  shape: "default";
};

export type Input = InputHTMLAttributes<HTMLInputElement> &
  (FormInput | DefaultInput);
