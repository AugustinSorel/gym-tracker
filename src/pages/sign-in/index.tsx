import Button from "@/components/Button";
import Input from "@/components/Input";
import { emailSchema } from "@/schemas/userSchemas";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import * as UserFormStyles from "src/components/UserForm/index.styled";
import AuthLayout from "src/layouts/authLayout";
import * as AuthLayoutStyles from "src/layouts/authLayout/index.styled";
import { ZodError } from "zod";
import { NextPageWithLayout } from "../_app";

const SignInPage: NextPageWithLayout = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { status } = useSession();
  const router = useRouter();

  const signInGoogleHandler = () => {
    signIn("google", { redirect: true, callbackUrl: "/" });
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
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

      <AuthLayoutStyles.Title>Welcome back</AuthLayoutStyles.Title>
      <AuthLayoutStyles.SubTitle>
        Welcome back! Please enter your details
      </AuthLayoutStyles.SubTitle>

      <UserFormStyles.Form onSubmit={submitHandler}>
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
      </UserFormStyles.Form>

      <UserFormStyles.SeparatorText>or</UserFormStyles.SeparatorText>

      <UserFormStyles.AuthProvidersContainer>
        <Button role="google" onClick={signInGoogleHandler} />
        <Button role="gitHub" />
      </UserFormStyles.AuthProvidersContainer>
    </>
  );
};

SignInPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default SignInPage;
