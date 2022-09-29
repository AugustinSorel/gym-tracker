import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import { emailSchema } from "@/schemas/userSchemas";
import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import * as Styles from "src/components/UserForm/index.styled";
import AuthLayout from "src/layouts/AuthLayout";
import { AUTH_ERRORS } from "src/utils/auth";
import { ZodError } from "zod";
import { NextPageWithLayout } from "../_app";

const SignInPage: NextPageWithLayout = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const signInGoogleHandler = () => {
    signIn("google", { redirect: true, callbackUrl: "/" });
  };

  const signInGitHubHandler = () => {
    signIn("github", { redirect: true, callbackUrl: "/" });
  };

  const submitHandler = async () => {
    setEmailError("");
    setIsLoading(() => true);

    try {
      emailSchema.parse(email);
      await signIn("email", { redirect: true, callbackUrl: "/", email });
    } catch (error) {
      error instanceof ZodError && setEmailError(error.errors[0].message);
    } finally {
      setIsLoading(() => false);
    }
  };

  return (
    <>
      <Head>
        <title>Gym Tracker Sign Up</title>
        <meta name="description" content="Sign up to track your gym progress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Form
        title="Welcome back"
        subTitle="Welcome back! Please enter your details"
        submitHandler={submitHandler}
      >
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
          isLoading={isLoading}
        />
      </Form>

      <Styles.SeparatorText>or</Styles.SeparatorText>

      <Styles.AuthProvidersContainer>
        <Styles.GoogleButton onClick={signInGoogleHandler}>
          <Image
            src={"/GoogleIcon.png"}
            alt="google icon"
            height={"20px"}
            width={"20px"}
          />
          <Styles.Text>Continue with Google</Styles.Text>
        </Styles.GoogleButton>

        <Styles.GitHubButton onClick={signInGitHubHandler}>
          <Image
            src={"/GitHubIcon.png"}
            alt="google icon"
            height={"20px"}
            width={"20px"}
          />
          <Styles.Text>Continue with Github</Styles.Text>
        </Styles.GitHubButton>
      </Styles.AuthProvidersContainer>

      {router.query.error && (
        <Styles.AuthProviderErrorText>
          {AUTH_ERRORS[router.query.error as keyof typeof AUTH_ERRORS]}
        </Styles.AuthProviderErrorText>
      )}
    </>
  );
};

SignInPage.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default SignInPage;
