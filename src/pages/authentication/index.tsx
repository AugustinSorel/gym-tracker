import Button from "@/components/Button";
import Input from "@/components/Input";
import Head from "next/head";
import { FormEvent, useState } from "react";
import * as Styles from "src/components/UserForm/index.styled";
import { signIn } from "next-auth/react";
import z, { ZodError } from "zod";
import * as userSchemas from "@/schemas/userSchemas";

const AuthenticationPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const signInGoogleHandler = () => {
    signIn("google", { redirect: true, callbackUrl: "/" });
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setEmailError("");

    try {
      userSchemas.auth.parse(email);
    } catch (error) {
      if (error instanceof ZodError) {
        setEmailError(error.errors[0].message);
      }
    }

    signIn("email", { redirect: true, callbackUrl: "/", email });
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
              isLoading={false}
            />
          </Styles.Form>

          <Styles.SeparatorText>or</Styles.SeparatorText>

          <Styles.AuthProvidersContainer>
            <Button role="google" onClick={signInGoogleHandler} />
            <Button role="gitHub" />
          </Styles.AuthProvidersContainer>
        </Styles.Main>

        <Styles.CircleScreen />
      </Styles.Container>
    </>
  );
};

export default AuthenticationPage;
