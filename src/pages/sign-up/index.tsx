import Button from "@/components/Button";
import Input from "@/components/Input";
import * as Styles from "@/components/UserForm/index.styled";
import Head from "next/head";
import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import AuthLayout from "src/layouts/AuthLayout";
import trpc from "src/utils/trpc";
import { NextPageWithLayout } from "../_app";

const defaultUser = {
  name: "",
  email: "",
  password: "",
};

const SignUpPage: NextPageWithLayout = () => {
  const [user, setUser] = useState(defaultUser);
  const [errors, setErrors] = useState(defaultUser);

  const { mutate, isLoading } = trpc.useMutation(["user.create"], {
    onSuccess: () => {
      setUser(defaultUser);
    },

    onError: (error) => {
      if (error.data?.zodError) {
        const { name, email, password } = error.data.zodError.fieldErrors;
        setErrors((old) => ({
          name: (name || [])[0] || old.name,
          email: (email || [])[0] || old.email,
          password: (password || [])[0] || old.password,
        }));
      }

      if (error.data?.code === "CONFLICT") {
        setErrors((old) => ({ ...old, email: error.message }));
      }
    },

    onMutate: () => {
      setErrors(defaultUser);
    },
  });

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    mutate(user);
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

      <Styles.Form onSubmit={submitHandler}>
        <Input
          role="form"
          labelText="name"
          htmlFor="nameInput"
          placeholder="Enter your name"
          autoComplete="off"
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
          autoComplete="new-password"
          autoCapitalize="none"
          errorText={errors.email}
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
          autoComplete="new-password"
          autoCapitalize="none"
          errorText={errors.password}
          value={user.password}
          name="password"
          onChange={changeHandler}
        />

        <Button
          role="callToAction"
          text="Sign up"
          type="submit"
          isLoading={isLoading}
        />
      </Styles.Form>
    </>
  );
};

SignUpPage.getLayout = (page: ReactElement) => {
  return <AuthLayout isLogin={false}>{page}</AuthLayout>;
};

export default SignUpPage;
