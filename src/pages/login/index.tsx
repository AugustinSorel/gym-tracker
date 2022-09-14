import Button from "@/components/Button";
import Input from "@/components/Input";
import * as Styles from "@/components/UserForm/index.styled";
import Head from "next/head";
import { ReactElement } from "react";
import AuthLayout from "src/layouts/AuthLayout";
import { NextPageWithLayout } from "../_app";

const LoginPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Gym Tracker Login</title>
        <meta name="description" content="Login to track your gym progress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Styles.Form>
        <Input
          role="form"
          labelText="email"
          htmlFor="emailInput"
          placeholder="Enter your email"
          autoComplete="new-password"
          errorText=""
          name="email"
        />

        <Input
          role="form"
          labelText="password"
          type="password"
          htmlFor="passwordInput"
          placeholder="•••••••••••••"
          errorText=""
          name="password"
        />

        <Button
          role="callToAction"
          text="Login"
          type="submit"
          isLoading={false}
        />
      </Styles.Form>
    </>
  );
};

export default LoginPage;

LoginPage.getLayout = (page: ReactElement) => {
  return <AuthLayout isLogin>{page}</AuthLayout>;
};
