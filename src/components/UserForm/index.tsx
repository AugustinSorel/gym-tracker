import Button from "@/components/Button";
import Input from "@/components/Input";
import { FormEvent } from "react";
import * as Styles from "./index.styled";

const UserForm = () => {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Styles.Form onSubmit={submitHandler}>
      <Input
        role="form"
        labelText="name"
        htmlFor="nameInput"
        placeholder="Enter your name"
        autoComplete="off"
        errorText=""
      />
      <Input
        role="form"
        labelText="email"
        htmlFor="emailInput"
        placeholder="Enter your email"
        autoComplete="new-password"
        errorText=""
      />
      <Input
        role="form"
        labelText="password"
        type="password"
        htmlFor="passwordInput"
        placeholder="•••••••••••••"
        errorText=""
      />

      <Button role="callToAction" text="Sign up" type="submit" />
    </Styles.Form>
  );
};

export default UserForm;
