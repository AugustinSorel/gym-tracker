import UserForm from "@/components/UserForm";
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

      <UserForm role="login" />
    </>
  );
};

export default LoginPage;

LoginPage.getLayout = (page: ReactElement) => {
  return <AuthLayout isLogin>{page}</AuthLayout>;
};
