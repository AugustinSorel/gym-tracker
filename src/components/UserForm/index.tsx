import * as Styles from "./index.styled";
import Button from "@/components/Button";
import Input from "@/components/Input";

const UserForm = () => {
  return (
    <Styles.Form onSubmit={(e) => e.preventDefault()}>
      <Input
        shape="form"
        labelText="name"
        htmlFor="nameInput"
        placeholder="Enter your name"
        autoComplete="off"
      />
      <Input
        shape="form"
        labelText="email"
        htmlFor="emailInput"
        placeholder="Enter your email"
        autoComplete="new-password"
      />
      <Input
        shape="form"
        labelText="password"
        type="password"
        htmlFor="passwordInput"
        placeholder="•••••••••••••"
      />

      <Button shape="callToAction" text="Sign up" type="submit" />
    </Styles.Form>
  );
};

export default UserForm;
