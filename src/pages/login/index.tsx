import Button from "@/components/Button";
import Input from "@/components/Input";
import * as Styles from "@/components/UserForm/index.styled";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import AuthLayout from "src/layouts/AuthLayout";
import trpc from "src/utils/trpc";
import { NextPageWithLayout } from "../_app";

const defaultUser = {
  email: "",
  password: "",
};

const LoginPage: NextPageWithLayout = () => {
  const [user, setUser] = useState(defaultUser);
  const [errors, setErrors] = useState(defaultUser);
  const router = useRouter();

  const { mutate, isLoading } = trpc.useMutation(["user.login"], {
    onSuccess: () => {
      setUser(defaultUser);
      router.push("/");
    },

    onError: (error) => {
      if (error.data?.zodError) {
        const { email, password } = error.data.zodError.fieldErrors;
        setErrors((old) => ({
          email: (email || [])[0] || old.email,
          password: (password || [])[0] || old.password,
        }));
      }

      if (error.data?.code === "NOT_FOUND") {
        setErrors((old) => ({ ...old, email: error.message }));
      }

      if (error.data?.code === "FORBIDDEN") {
        setErrors((old) => ({ ...old, password: error.message }));
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
        <title>Gym Tracker Login</title>
        <meta name="description" content="Login to track your gym progress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styles.Form onSubmit={submitHandler}>
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

        <Input
          role="form"
          labelText="password"
          type="password"
          htmlFor="passwordInput"
          placeholder="•••••••••••••"
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

export default LoginPage;

LoginPage.getLayout = (page: ReactElement) => {
  return <AuthLayout isLogin>{page}</AuthLayout>;
};
