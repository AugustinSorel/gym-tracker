import Button from "@/components/Button";
import Input from "@/components/Input";
import { emailSchema } from "@/schemas/userSchemas";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import * as Styles from "src/components/UserForm/index.styled";
import { ZodError } from "zod";

const AuthenticationPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const { status } = useSession();
  const router = useRouter();

  const signInGoogleHandler = () => {
    signIn("google", { redirect: true, callbackUrl: "/" });
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setEmailError("");

    try {
      emailSchema.parse(email);
      signIn("email", { redirect: true, callbackUrl: "/", email });
    } catch (error) {
      if (error instanceof ZodError) {
        setEmailError(error.errors[0].message);
      }
    }
  };

  if (status === "loading") {
    return null;
  }

  if (status === "authenticated") {
    router.push("/");
    return null;
  }

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
