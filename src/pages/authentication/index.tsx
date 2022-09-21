import Button from "@/components/Button";
import Input from "@/components/Input";
import Head from "next/head";
import { FormEvent, useState } from "react";
import * as Styles from "src/components/UserForm/index.styled";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    // mutate(user);
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
              labelText="email"
              htmlFor="emailInput"
              placeholder="Enter your email"
              autoCapitalize="none"
              errorText={emailError}
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
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
