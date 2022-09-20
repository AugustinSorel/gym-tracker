import Button from "@/components/Button";
import Input from "@/components/Input";
import Head from "next/head";
import { ChangeEvent, FormEvent, useState } from "react";
import * as Styles from "src/components/UserForm/index.styled";

const defaultUser = {
  name: "",
  email: "",
};

const Authentication = () => {
  const [user, setUser] = useState(defaultUser);
  const [errors, setErrors] = useState(defaultUser);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    // mutate(user);
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Head>
        <title>Gym Tracker Sign Up</title>
        <meta name="description" content="Sign up to track your gym progress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styles.Container>
        <Styles.Main>
          <Styles.Title>Welcome back</Styles.Title>
          <Styles.SubTitle>
            Welcome back! Please enter your details
          </Styles.SubTitle>

          <Styles.Form onSubmit={submitHandler}>
            <Input
              role="form"
              labelText="name"
              htmlFor="nameInput"
              placeholder="Enter your name"
              autoCapitalize="none"
              errorText={errors.name}
              value={user.name}
              name={"name"}
              onChange={changeHandler}
            />

            <Input
              role="form"
              labelText="email"
              htmlFor="emailInput"
              placeholder="Enter your email"
              autoCapitalize="none"
              errorText={errors.email}
              value={user.email}
              name="email"
              onChange={changeHandler}
            />

            <Button
              role="callToAction"
              text="Sign up"
              type="submit"
              //   isLoading={isLoading}
              isLoading={false}
            />
          </Styles.Form>

          <Styles.SeparatorText>or</Styles.SeparatorText>

          <Styles.AuthProvidersContainer>
            <Button role="google" />
            <Button role="gitHub" />
          </Styles.AuthProvidersContainer>
        </Styles.Main>

        <Styles.CircleScreen />
      </Styles.Container>
    </>
  );
};

export default Authentication;
