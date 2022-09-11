import UserForm from "@/components/UserForm";
import Head from "next/head";
import { ReactElement } from "react";
import AuthLayout from "src/layouts/AuthLayout";
import { NextPageWithLayout } from "../_app";

const SignUpPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Gym Tracker Sign Up</title>
        <meta name="description" content="Sign up to track your gym progress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UserForm />
    </>
  );
};

SignUpPage.getLayout = (page: ReactElement) => {
  return <AuthLayout isLogin={false}>{page}</AuthLayout>;
};

export default SignUpPage;
