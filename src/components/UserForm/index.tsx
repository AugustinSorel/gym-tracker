import Button from "@/components/Button";
import Input from "@/components/Input";
import { ChangeEvent, FormEvent, useState } from "react";
import * as Styles from "./index.styled";

type Props = {
  role: "sign-up" | "login";
};

const UserForm = ({ role }: Props) => {
  const defaultUser = {
    ...(role === "sign-up" && { name: "" }),
    email: "",
    password: "",
  };

  const [user, setUser] = useState(defaultUser);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  return (
    <Styles.Form onSubmit={submitHandler}>
      {role !== "login" && (
        <Input
          role="form"
          labelText="name"
          htmlFor="nameInput"
          placeholder="Enter your name"
          autoComplete="off"
          errorText=""
          value={user.name}
          name={"name"}
          onChange={changeHandler}
        />
      )}

      <Input
        role="form"
        labelText="email"
        htmlFor="emailInput"
        placeholder="Enter your email"
        autoComplete="new-password"
        errorText=""
        value={user.email}
        name="email"
        onChange={changeHandler}
      />

      <Input
        role="form"
        labelText="password"
        type="password"
        htmlFor="passwordInput"
        placeholder="•••••••••••••"
        errorText=""
        value={user.password}
        name="password"
        onChange={changeHandler}
      />

      <Button
        role="callToAction"
        text={role === "login" ? "Login" : "Sign up"}
        type="submit"
      />
    </Styles.Form>
  );
};

export default UserForm;
